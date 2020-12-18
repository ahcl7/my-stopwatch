var EventEmitter = require('events').EventEmitter;

var keypress = require("keypress")

var pressed = false
var lastPressed = 0
var keypressCount = 0
var immediateRpeat = 0 // for debug
var uptime = 20

function keydownup(stream){
  // keypress handling
  kp = keypress(stream)
  let lastCh
  let lastKey
  stream.on('keypress', function(ch, key){
    if(pressed === false){
      lastCh = ch
      lastKey = key
      stream.emit('keydown', ch, key)
    }
    var d = new Date()
    pressed = true
    var beforeLastPressed = lastPressed
    lastPressed = d.getTime()
    keypressCount++
  })

  // immediate
  function _onImmediate(){
    if(pressed === false){
      return
    }
    var current = new Date()
    var interval = current.getTime() - lastPressed
    var threshold = uptime
    // skip first time
    if(keypressCount === 1){
      threshold = threshold * 2
    }
    if(interval > threshold){
      pressed = false
      stream.emit('keyup', lastCh, lastKey)
      keypressCount = 0

    }
    immediateRpeat++ // for debug
  }

  function onImmediate(){
    _onImmediate()
    setImmediate(onImmediate)
  }
  setImmediate(onImmediate)

}
module.exports = keydownup

const keydownup = require('./keydownup')

const keyPressListener = (stream, onPressLeft, onPressRight, onPressUp, onPressSpace, onKeyDownDown, onKeyDownUp, onReset, onExit) => {
  keydownup(stream)
  if (typeof stream.setRawMode === 'function') stream.setRawMode(true)
  stream.on('keydown', (ch, key) => {
    if (key.name === 'space') {
      onPressSpace()
    }
    if (key.name === 'r') {
      onReset()
    }
    if (key.name === 'escape') {
      onExit()
    }
    if (key.name === 'down') {
      onKeyDownDown()
    }
    if (key.name === 'up') {
      onPressUp()
    }
    if (key.name === 'left') {
      onPressLeft()
    }
    if (key.name === 'right') {
      onPressRight()
    }
  })
  stream.on('keyup', (ch, key) => {
    // console.log('up', key)
    if (key.name === 'down') onKeyDownUp()
  })
}

module.exports = {
  keyPressListener
}

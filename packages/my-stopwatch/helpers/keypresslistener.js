const keypress = require('keypress')

const keyPressListener = (stream, onPressSpace, onReset, onExit, onPressUselessKey) => {
  keypress(stream)
  if (typeof stream.setRawMode === 'function') stream.setRawMode(true)
  stream.on('keypress', (ch, key) => {
    if (key.name === 'space') {
      onPressSpace()
    } else {
      if (key.name === 'r') {
        onReset()
      } else {
        if (key.name === 'escape') {
          onExit()
        } else {
          onPressUselessKey()
        }
      }
    }
  })
}

module.exports = {
  keyPressListener
}

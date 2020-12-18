

const { h } = require('./../../vuminal')
const Cell = {
  name: "Cell",
  props: {
    color: {
      type: String,
      default: "black"
    },
    height: {
      type: String,
      default: "0",
    },
    width: {
      type: String,
      default: "0"
    },
    top: {
      type: String,
      default: "0"
    },
    left: {
      type: String,
      default: "0"
    }
  },
  setup(props, context) {
    return () => h('box', {
      top: props.top,
      left: props.left,
      height: props.height,
      width: props.width,
      style: {
        bg: props.color
      }
    })
  }
}
module.exports = Cell

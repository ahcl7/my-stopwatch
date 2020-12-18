const {h} = require('vuminal')
function renderCell(props, context) {
  return h('box', {
    top: props.top,
    left: props.left,
    height: props.height,
    width: props.width,
    style: {
      bg: props.color
    }
  })
}
const getColor = (v, transparent) => {
  if (v === 1) return "yellow"
  if (v === 2) return "green"
  if (v === 3) return "red"
  if (v === 4) return "#ff00ff"
  if (v === 5) return "blue"
  if (v === 6) return "#ff6600"
  if (v === 7) return "cyan"
  if (v === 8) return "#787878"
  if (v === 0) return transparent ? "" : "white"
}
function renderCellWithPosition(props, context) {
  const newProps = Object.assign({}, props, {
    top: props.x * props.height,
    left: props.y * props.width,
    color: getColor(props.value, props.transparent)
  })
  return renderCell(newProps, context)
}

module.exports = {
  renderCell,
  renderCellWithPosition
}

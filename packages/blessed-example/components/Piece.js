const Cell = require('./Cell')

const { renderCell, renderCellWithPosition } = require('./utils/renderCell')

const {h} = require('./../../vuminal')
const Piece = {
  name: 'Piece',
  props: [
    'bitmap', 'top'
  ],
  components: [Cell],
  setup(props, ctx) {
    return () => h('box', {top: props.top}, props.bitmap.reduce((acc, row, i) => {
      return acc.concat(row.map((v, j) => renderCellWithPosition({
        left: props.left ? props.left : 0,
        x: i,
        y: j,
        width: 4,
        height: 2,
        value: v,
        transparent: true
      })))
    }, []))
  }
}

module.exports = Piece

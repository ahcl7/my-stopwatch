const { h, computed } = require('./../../vuminal')
const Cell = require('./Cell')

const { WIDTH, HEIGHT } = require('../model/cons')

const { renderCellWithPosition } = require('./utils/renderCell')
const Board = {
  name: 'Board',
  components: { 'cell': Cell },
  props: ['board', 'curPiece', 'curX', 'curY'],
  setup(props, context) {
    const boardBitmap = computed(() => {
      const boardClone = props.board.clone()
      const curPieceClone = props.curPiece.clone()
      const sz = props.curPiece.n
      for (let i = 0; i < sz; i++) {
        for (let j = 0; j < sz; j++) {
          if (curPieceClone.bitmap[i][j]) {
            curPieceClone.bitmap[i][j] = 8
          }
        }
      }
      boardClone.add(curPieceClone, props.curX, props.curY)
      for (let i = 0; i < sz; i++) {
        for (let j = 0; j < sz; j++) {
          const x = props.curX + i
          const y = props.curY + j
          if (x >= 0 && y >= 0 && x < HEIGHT && y < WIDTH) {
            if (props.curPiece.bitmap[i][j]) boardClone.bitmap[x][y] = props.curPiece.bitmap[i][j]
          }
        }
      }
      return boardClone.bitmap
    })
    return () => boardBitmap.value.reduce((acc, row, i) => {
      return acc.concat(row.map((v, j) => renderCellWithPosition({
        x: i,
        y: j,
        width: 4,
        height: 2,
        value: v,
        left: 0
      })))
    }, [])
  }
}
module.exports = Board;

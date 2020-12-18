const { h, onMounted, ref } = require('./../../vuminal')

const Board = require('./Board')
const RightNavigation = require('./RightNavigation')
module.exports = GameScreen = {
  name: 'GameScreen',
  components: [Board, RightNavigation],
  props: ['gameData'],
  setup(props, ctx) {
    return () => h('box', {
        top: 'center',
        left: 'center',
      },
      [
        h(Board, {
          board: props.gameData.board,
          curPiece: props.gameData.curPiece,
          curX: props.gameData.curX,
          curY: props.gameData.curY
        }),
        h(RightNavigation, {
          left: 42,
          nxtPiece: props.gameData.nxtPiece,
          score: props.gameData.score
        })
      ]
    )
  }
}

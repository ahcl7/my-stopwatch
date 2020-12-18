const NextPiece = require('./NextPiece')
const Score = require('./Score')
const { h } = require('./../../vuminal')

const RightNavigation = {
  name: 'RightNavigation',
  components: [NextPiece, Score],
  props: ['nxtPiece', 'score', 'left'],
  setup(props, context) {
    return () => h('box', { left: props.left },
      [
        h(Score, {
          score: props.score
        }),
        h(NextPiece, {
          bitmap: props.nxtPiece.bitmap,
          transparent: true,
          top: 10
        })
      ])
  }
}

module.exports = RightNavigation

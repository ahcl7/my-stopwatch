const { h } = require('./../../vuminal')
const Piece = require('./Piece')
const NextPiece = {
  name: 'NextPiece',
  components: [Piece],
  props: ['top', 'bitmap', 'transparent'],
  setup(props, context) {
    return () => h('box', {top: props.top}, [
      h('text', 'Next piece'),
      h(Piece, {
        bitmap: props.bitmap,
        transparent: props.transparent,
        top: 3
      })
    ])
  }
}


module.exports = NextPiece

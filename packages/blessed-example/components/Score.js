const { h } = require('./../../vuminal')
const Score = {
  name: 'Score',
  props: ['score'],
  setup(props, context) {
    return () => h('box', [
      h('text', 'Score'),
      h('text', { top: 1}, props.score)])
  }
}

module.exports = Score

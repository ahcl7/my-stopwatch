// import { reactive } from '@vue/runtime-core';

const { default: Vulminal, h, ref, computed, onMounted, resolveComponent, reactive } = require('./../vuminal')
const connector = require('@vuminal/connector-blessed')
const draw = Vulminal(connector)
const Board = require('./components/Board')
const GameScreen = require('./components/GameScreen')
const Game = require('./model/game')
const { keyPressListener } = require('./utils/keyListener')
const root = {
  components: { 'board': Board },
  setup(props, context) {
    const game = reactive(new Game())
    const gameSpeed = ref(1000)
    function onPressLeft() {
      game.moveLeft()
    }
    function onPressRight() {
      game.moveRight()
    }
    function onPressUp() {
      game.rotate(1)
    }
    function onPressSpace() {
      game.hardDrop()
    }
    function onKeyDownDown() {
      gameSpeed.value = 100
    }
    function onKeyDownUp() {
      gameSpeed.value = 1000
    }
    keyPressListener(process.stdin, onPressLeft, onPressRight, onPressUp, onPressSpace, onKeyDownDown, onKeyDownUp)
    onMounted(() => {
      let start = -1
      function update(curTime) {
        if (start === -1) start = curTime
        const diff = curTime - start
        if (diff > gameSpeed.value) {
          game.moveDown()
          start += gameSpeed.value
        }
      }

      setInterval(() => {
        update(new Date().getTime())
      }, 10)
    })
    return () => h(GameScreen, {
      gameData: game
    })
  }
}
draw(root)





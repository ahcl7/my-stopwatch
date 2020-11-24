
const {default: Vulminal, h, ref, computed}= require('./../vuminal')
const connector = require('./../connector-tom')
const draw = Vulminal(connector)
const { getMillisecond, getSecond, getMinute, getHour } = require('./helpers/utils')
const { keyPressListener } = require('./helpers/keypresslistener')
draw({
  setup() {
    let lastTime = new Date()
    const time = ref(0)
    const millisecond = computed(() => getMillisecond(time.value))
    const second = computed(() => getSecond(time.value))
    const minute = computed(() => getMinute(time.value))
    const hour = computed(() => getHour(time.value))
    const updateTime = () => {
      const cur = new Date()
      time.value += (cur.getTime() - lastTime.getTime())
      lastTime = cur
    }
    let updateTimeInterval
    const header = ref('stopwatch' + ' '.repeat(42))
    let dir = -1
    let isRunning = false
    const onPressSpace = () => {
      if (!isRunning) {
        isRunning = true
        lastTime = new Date()
        updateTimeInterval = setInterval(updateTime, 0)
      } else {
        clearInterval(updateTimeInterval)
        isRunning = false
      }
    }
    const onReset = () => {
      if (isRunning) {
        clearInterval(updateTimeInterval)
      }
      time.value = 0
      isRunning = false
    }

    const onExit = () => {
      process.exit(0)
    }
    setInterval(() => {
      if (dir === -1) {
        const first = header.value[0]
        if (first >= 'a' && first <= 'z') dir = 1
      }
      if (dir === 1) {
        const last = header.value[header.value.length - 1]
        if (last >= 'a' && last <= 'z') dir = -1
        else {
          const tmp = header.value.substr(0, header.value.length - 1)
          header.value = last + tmp
        }
      }
      if (dir === -1) {
        const first = header.value[0]
        const tmp = header.value.substr(1, header.value.length - 1)
        header.value = tmp + first
      }
    }, 100)
    keyPressListener(process.stdin, onPressSpace, onReset, onExit, () => {})
    return () => h('row', [
      h('box', {stroke: "double"}, [
        h('column', [
          h('row', header.value),
          h('row', {font: 'big'}, [
            hour.value, ':',
            minute.value, ':',
            second.value, ':',
            millisecond.value
          ]),
        ],)
      ]),
      h('box', {stroke: "single"}, 'Space: Start/Pause\n' +
                                   'R    : Reset\n' +
                                   'ESC  : Quit!')
    ])
  }
})

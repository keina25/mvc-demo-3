import $ from 'jquery'
import EventBus from './EventBus'

class View extends EventBus{
  // constructor({el, html, render, data, eventBus, events}) { 初始化
  constructor(options) {
    super() // EventBus#constructor()
    Object.assign(this, options) //options有什么就放到this上,有一万个属性就放到this
    //下面再去覆盖
    this.el = $(this.el)
    this.render(this.data)
    this.autoBindEvents()
    this.on('m:updated', () => {
      this.render(this.data)
    })
  }

  autoBindEvents() {
    for (let key in this.events) {
      const value = this[this.events[key]]
      const spaceIndex = key.indexOf(' ')
      const part1 = key.slice(0, spaceIndex)
      const part2 = key.slice(spaceIndex + 1)
      this.el.on(part1, part2, value)
    }
  }
}

export default View
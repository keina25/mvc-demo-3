import './app1.css'
import Vue from 'vue'

const init = (el) => {

  const m = {
    get() {
      return parseFloat(localStorage.getItem('n'))
    },
    set(n) {
      localStorage.setItem('n', n)
    }
  }
  new Vue({
    el: el,
    data: {n: m.get()},
    methods: {
      add() {
        this.n += 1
      },
      minus() {
        this.n -= 1
      },
      mul() {
        this.n *= 2
      },
      div() {
        this.n /= 2
      },
    },
    watch: {
      n: function () {
        m.set(this.n)
      },
    },
    template: `
      <section>
        <div class="output">
          <span id="number">{{n}}</span>
        </div>
        <div class="actions">
          <button @click="add">+1</button>
          <button @click="minus">-1</button>
          <button @click="mul">*2</button>
          <button @click="div">÷2</button>
        </div>
      </section>
    `
  })
}

export default init

//const eventBus = $(window)
// 数据相关都放到m
//const m = {
//  data: {
//    n: parseInt(localStorage.getItem('n'))
//  },
//  create() {},
//  delete() {},
//  update(data) {
//    Object.assign(m.data, data)
//    eventBus.trigger('m:updated')
//    localStorage.setItem('n', m.data.n)
//  },
//  get() {}
//}
// 视图相关都放到v
//const v = {
//  el: null,
//  html: `
//  <div>
//    <div class="output">
//      <span id="number">{{n}}</span>
//    </div>
//    <div class="actions">
//      <button id="add1">+1</button>
//      <button id="minus1">-1</button>
//      <button id="mul2">*2</button>
//      <button id="divide2">÷2</button>
//    </div>
//  </div>
//`,
//  init(container) {
//    v.el = $(container)
//  },
//  render(n) {
//    if (v.el.children.length !== 0) v.el.empty()
//    $(v.html.replace('{{n}}', n))
//      .appendTo(v.el)
//  }
//}
// 其他都c
//const c = {
////  init(container) {
////    v.init(container)
////    v.render(m.data.n) // view = render(data)
////    c.autoBindEvents()
////    eventBus.on('m:updated', () => {
////      console.log('here')
////      v.render(m.data.n)
////    })
////  },
////  events: {
////    'click #add1': 'add',
////    'click #minus1': 'minus',
 ////   'click #mul2': 'mul',
////    'click #divide2': 'div',
////  },
////  add() {
////    m.update({n: m.data.n + 1})
////  },
 //// minus() {
////    m.update({n: m.data.n - 1})
////  },
////  mul() {
////    m.update({n: m.data.n * 2})
////  },
////  div() {
////    m.update({n: m.data.n / 2})
////  },
////  autoBindEvents() {
////    for (let key in c.events) {
//      const value = c[c.events[key]]
//      const spaceIndex = key.indexOf(' ')
 //     const part1 = key.slice(0, spaceIndex)
 //     const part2 = key.slice(spaceIndex + 1)
 //     v.el.on(part1, part2, value)
//    }
//  }
//}

//export default c
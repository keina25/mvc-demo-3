import EventBus from './EventBus'

class Model extends EventBus { //extends继承eventsBus
  constructor(options) {  //构造函数
    super() //调用EventBus#constructor(),因为使用类，所以要调用一下，才可以使用 
    const keys = ['data', 'update', 'create', 'delete', 'get']
    //不能用[]开头
    keys.forEach((key) => {
      if (key in options) {
        this[key] = options[key]
      }
    })
  }

  create() {
      //if(console && console.error)console.error('') 
      //检查console是否存在，在检查console.error存在不存在
      // ?.可选连语法
      // console?.error?.()
    console && console.error && console.error('你还没有实现 create')
  }

  delete() {
    console && console.error && console.error('你还没有实现 delete')
  }

  update() {
    console && console.error && console.error('你还没有实现 update')
  }

  get() {
    console && console.error && console.error('你还没有实现 get')
  }
}


export default Model
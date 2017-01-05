var Vue = require('vue')

var VueTouch

if (process.env.NODE_ENV === 'development') {
  VueTouch = require('../src')
}
else {
  VueTouch = require('../dist/vue-touch.js')
}
// import './styling.css'
// import './components'
// use the plugin

// example registering a custom doubletap event.
// the `type` indicates the base recognizer to use from Hammer
// all other options are Hammer recognizer options.
VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
})

Vue.use(VueTouch)

new Vue({
  el: '#app',
  data: {
    event: {}
  },
  methods: {
    test: function (e) {
      delete e.target
      this.event = e
      console.log(e)
    }
  }
}

new Vue({
  components: { app: App },
  render(h) {
    return h(App)
  }
}).$mount('#app')

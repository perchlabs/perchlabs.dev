import Vue from 'vue'
import Launches from 'components/Launches'
import store from './store'

var app = new Vue({
  el: '#app',
  store,
  render: h => h(Launches),
})
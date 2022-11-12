import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import FlexItems from './components/FlexItems.vue'
import HelloFlex from './components/HelloFlex.vue'
import HomePage from './components/HomePage.vue'
// import './assets/main.css'
const routes = [
    { path: '/', component: FlexItems, name:'flexitem' },
    { path: '/hello', component: HelloFlex, name:'hello' },
    { path: '/homepage', component: HomePage, name:'homepage' }
  ];

const router = createRouter({
    history: createWebHistory(''),
    routes
  })
const app = createApp(App);
app.use(router);
app.mount('#app');
//app.component("MyFlexItems", FlexItems) -> does not work
//export default router;


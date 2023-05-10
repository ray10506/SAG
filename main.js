import { createApp } from 'vue'
import SynoVueComponents from '@synology/SynoVueComponents/vue3'
import '@synology/svc-theme-default'
import App from './App.vue'
import * as VueRouter from 'vue-router'

Ext.namespace('SYNO.SAG.Application')

// @require SYNO.SAG.Application.ModalWindow

const app = createApp(App);
app.use(SynoVueComponents);
app.config.globalProperties.VueRouter = VueRouter;

SYNO.SAG.Application.Instance = app;

// window.$vueApp.use(SynoVueComponents)


// const router = VueRouter.createRouter({})


// // @require SYNO.SAG.Application.ModalWindow
// SYNO.SAG.Application.Instance = { router }.extend(App)

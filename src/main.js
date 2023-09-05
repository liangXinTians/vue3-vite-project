import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'


const app = createApp(App)
app.use(router)
app.mount('#app')


import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import Prism from 'prismjs'
// 这是预览时引用的
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github'
import '@kangc/v-md-editor/lib/theme/style/github.css'
// highlightjs
import hljs from 'highlight.js'
//预览的主题
VMdPreview.use(githubTheme, {
  Hljs: hljs,
})
//编辑器的主题
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
})
//注册
app.use(VMdPreview)
app.use(VueMarkdownEditor)


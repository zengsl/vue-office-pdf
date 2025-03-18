import type { App } from 'vue'
import PdfViewer from './components/pdf-viewer.vue'
// 引入icons 让vite对其进行单独编译。是否有其他更优雅的方式？
import '@/sass/icons.scss'

const components = [
  PdfViewer,
]

export function install(app: App) {
  components.forEach((component) => {
    if (component.name != null) {
      app.component(component.name, component)
    }
    else {
      console.warn(`${component.name} is missing name property`)
    }
  })
}

export default install

export {
  PdfViewer,
}

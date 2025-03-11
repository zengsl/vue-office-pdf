import PdfViewer from './components/pdf-viewer.vue'
// import AboutView from './components/about-view.vue'

import type {App, Component} from 'vue'

const components = [
    PdfViewer
]

export function install(app: App) {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

export default {
    install
}

export {
    PdfViewer
}
import PdfViewer from './components/pdf-viewer.vue'

import type {App} from 'vue'

const components = [
    PdfViewer
]

export function install(app: App) {
    components.forEach(component => {
        if (component.name != null) {
            app.component(component.name, component)
        }
    })
}

export default {
    install
}

export {
    PdfViewer
}
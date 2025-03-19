<script setup lang="ts">
import PdfViewer from '@/components/pdf-viewer.vue'
import { ref } from 'vue'

const isShow = ref(false)
const pdf = ref<any>(null)

/* fetch('http://localhost:3050/pdf').then((res) => { */

fetch('/sample.pdf').then((res) => {
  return res.blob()
}).then((blob) => {
  return blob.arrayBuffer()
}).then((buffer) => {
  pdf.value = buffer
})

function afterCreated(pdfApp: any) {
  console.log('===***=== After created')
}

function open() {
  console.log('===***=== Opened')
}

function pagesRendered() {
  console.log('===***=== Pages rendered')
}

function doClose() {
  console.log('===***=== Dialog doClose')
}

function previewPdf() {
  isShow.value = true
}

defineExpose({ previewPdf })
</script>

<template>
  <el-dialog v-model="isShow" destroy-on-close @close="doClose">
    <!-- 引入之后，只有第一次能正常打开PDF   -->
    <!--
    <link rel="resource" type="application/l10n" href="/pdfjs/locale/zh-CN/viewer.properties">
-->
    <PdfViewer
      :pdf="pdf"
      :style="{ height: '70vh' }"
      file-name="Custom fileName"
      style="position: relative"
      @after-created="afterCreated"
      @open="open"
      @pages-rendered="pagesRendered"
    >
      <template #toolbar-left-prepend="{ toggleTheme }">
        <button type="button" @click="toggleTheme">
          Toggle theme
        </button>
      </template>
    </PdfViewer>
  </el-dialog>
</template>

<style scoped lang="scss">

</style>

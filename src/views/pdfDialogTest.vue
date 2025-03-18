<script setup lang="ts">
import {ref} from "vue";
import PdfPreviewDialog from "@/views/PdfPreviewDialog.vue";

const pdfPreviewRef = ref<InstanceType<typeof PdfPreviewDialog> | null>(null)
function openPdf(){
  if(!pdfPreviewRef.value) {
    console.warn('pdfPreviewRef.value is null')
  }
  pdfPreviewRef.value?.previewPdf()
}
</script>

<template>
  <el-button @click="openPdf">查看PDF</el-button>
  <PdfPreviewDialog ref="pdfPreviewRef"/>
</template>

<style scoped lang="scss">

</style>
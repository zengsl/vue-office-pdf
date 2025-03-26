<template>
  <PdfViewer
    :pdf="pdf"
    :args="args"
    :page-number="2"
    style="position: relative"
    @after-created="afterCreated"
    @open="open"
    @pages-rendered="pagesRendered"
  >
    <template #footer>
      <div class="footer">
        <span>Footer</span>
      </div>
    </template>
  </PdfViewer>
</template>

<script lang="ts">
import PdfViewer from '@/components/pdf-viewer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    PdfViewer,
  },
  data() {
    return {
      config: {
        // toolbar: {
        //   toolbarViewerLeft: {
        //     pageNumber: false,
        //   },
        // },
      },
      scale: '1',
      pdf: 'http://localhost:9210/dev-api/pdf/gen-range/prp/21210379f8517af43431302bfb7cb508?t2025-03-21T08:07:17.492Z',
      args: {
        httpHeaders: {
          Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJ1bml0VHlwZSI6bnVsbCwidW5pdE5hbWUiOm51bGwsInVzZXJfaWQiOjEsInJvbGVJZCI6MSwibG9naW5OYW1lIjoiYWRtaW4iLCJ1c2VyX2tleSI6IjY1N2Q1MGFlLTQwYTItNDgzMS05OWU5LWQwMzEzMzg3Y2UzYyIsInVuaXRJZCI6LTEsInBzbk5hbWUiOiJhZG1pbiJ9.ViKcKmD4uGsi76g0bkhixc7Fv_2pnEVyW7oX-HpNPZV2rJNRLnz8rrbG1utXZzdRDEJWcyK0IdtiOgonJkSkyQ',
        },
      },
    }
  },
  methods: {
    afterCreated(pdfApp) {
      // window._pdfApp = pdfApp
      console.log('===***=== After created')
    },
    open() {
      console.log('===***=== Opened')
    },
    pagesRendered() {
      console.log('===***=== Pages rendered')
    },
  },
})
</script>

<style lang="scss" scoped>
$footer-height: 50px;

.footer {
  background: red;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: $footer-height;
}

::v-deep #outerContainer {
  height: calc(100% - #{$footer-height}) !important;
}
</style>

<template>
  <div id="app">
    <button type="button" @click="toggleDirection">
      Toggle web--page direction
    </button>
    <button @click="clearCache">
      clear cache
    </button>
    <div id="nav">
      <router-link to="/">
        Home
      </router-link>|
      <router-link to="/back-end-file">
        Back-End-File
      </router-link>|
      <router-link to="/theme-toggling">
        Theme toggling
      </router-link>|
      <router-link to="/pdf-test-Dialog">
        Pdf-Test-Dialog
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '@/sass/icons.scss'

export default defineComponent({
  methods: {
    toggleDirection() {
      const dir = document.documentElement.getAttribute('dir')
      const newDir = dir === 'rtl' ? 'ltr' : 'rtl'
      document.documentElement.setAttribute('dir', newDir)
    },
    clearCache() {
      window.localStorage.clear()
    },
  },
})
</script>

<style>
html,
body,
#app {
  height: 95%;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <v-app id="wrapper">
      <router-view id="view" :isMobile="isMobile" />
    </v-app>
  </div>
</template>

<script>
const BREAKPOINT = 1280;
export default {
  name: "App",
  data() {
    return {
      isMobile: window.innerWidth < BREAKPOINT,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth < BREAKPOINT;
    });
  },
};
</script>
<style lang="stylus">
body {
  color: var(--bg-dark);
}

#app, #view, #wrapper {
  position: absolute;
  inset: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>

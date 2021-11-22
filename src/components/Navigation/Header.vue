<template>
  <header class="flex-shrink-0 d-flex" style="height: 96px">
    <router-link class="header-link" to="/">Work</router-link>
    <router-link class="header-link" to="/">About</router-link>
    <router-link class="header-link" to="/">Contact</router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="stylus" scoped>
header {
  border-bottom: 2px solid rgba(0, 0, 0, 0.87);
}

.header-link {
  display: block;
  flex-grow: 1;

  &:not(:last-of-type) {
    border-right: 2px solid rgba(0, 0, 0, 0.87);
  }
}
</style>
<template>
  <div aria-hidden="true" id="project-transition">
    <span class="wide">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "ProjectTransition",
  props: {
    name: String,
  },
  methods:{
    
  }
};
</script>

<style lang="stylus">
#project-transition{
  height 100vh
  width 100vw
  background var(--bg-dark)
  display flex
  align-items center
  justify-content center
  position absolute
  top 0
  left 0
  z-index 1000
  color var(--text-light)
  text-transform uppercase
  font-size 6vw
}
</style>

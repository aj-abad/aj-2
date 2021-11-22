<template>
<<<<<<< HEAD
  <section id="work" class="position-absolute w-100 h-100 top left">
    <div class="vw-100 h-100 red"></div>
=======
  <section class="main-section" id="work" :class="{ active: isActive }">
    <div class="vw-100 h-100">
      <div class="d-flex flex-column h-100 pa-8 justify-center align-start">
        <h1 class="wide" style="font-size: 200px; line-height: 175px">
          MY <br />
          WORK
        </h1>
      </div>
    </div>
>>>>>>> e3146f2ac64183b874aa3fef118bcd57e6d7b16b
  </section>
</template>

<script>
export default {
  name: "Work",
  props: {
    isActive: Boolean,
  },
};
</script>

<style lang="stylus" scoped>
#work {
  padding-left: 72px;
  background: red;
  overflow: hidden;
}
</style>
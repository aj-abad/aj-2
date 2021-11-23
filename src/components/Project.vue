<template>
  <div class="project pa-16">
    <img :src="`/img/projects/${project.photo}`" class="w-100" />
    <h1 class="wide text-uppercase">{{ project.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Object,
  },
};
</script>

<style lang="stylus" scoped>
.project {
  width: 50vw;
  border-right: 2px solid red;
}

h1 {
}
</style>
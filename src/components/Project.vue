<template>
  <div class="project pa-16">
    <div class="project-img-container">
      <div class="noise"></div>
      <img :src="`/img/projects/${project.photo}`" class="project-img" />
    </div>
    <h1
      class="wide text-uppercase"
      :class="{ 'multi-line': project.words.length > 1 }"
    >
      <br v-if="project.words.length === 1" />
      <span
        v-for="(word, i) in project.words"
        :key="i"
        style="display: inline-block"
      >
        {{ word }}
        <br />
      </span>
    </h1>
    <span> SaaS </span>
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
  overflow: hidden;
}

.project-img-container {
  width: 100%;
  height: 50vh;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background: var(--bg-dark);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.35;
  }
}

.project-img {
  width: 120%;
}

h1 {
  font-size: 100px;
  line-height: 100px;
  padding-left: 64px;
  margin-bottom: -100px;
  transform: translateY(-50%);
  position: relative;
  z-index: 6;

  &.multi-line span:first-of-type {
    color: var(--bg);
  }
}
</style>
<template>
  <div
    class="
      d-flex
      flex-column
      align-center
      justify-center
      h-100
      pa-8
      project-index
    "
    style="width: calc(100vw - (72px * 4) + 32px + 48px)"
    data-scroll
    data-scroll-id="main"
  >
    <button
      class="w-100 position-relative"
      style="font-size: 128px; line-height: 128px"
      v-for="(project, i) in allProjects"
      :key="i"
      @mouseover="mouseOverHandler(i)"
      :id="`project-index-${i}`"
    >
      <span class="text-uppercase">{{ project.name }}</span>
      <div class="project-marquee">
        <span>{{ project.content.description }}</span>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "FeaturedProjects",
  props: {
    allProjects: Array,
  },
};
</script>

<style lang="stylus" scoped>
.project-index button {
  text-align: left;
  border-bottom: 2px solid var(--bg-dark);
  overflow: hidden;

  .project-marquee {
    height: 100%;
    transform: translateY(-100%);
    top: 0%;
    left: 0;
    width: 100%;
    overflow: hidden;
    position: absolute;
    font-size: 30%;
    white-space: nowrap;
    background: var(--bg-dark);
    color: var(--bg);
    font-family: 'ivy mode';
    font-style: italic;

    span {
      position: absolute;
      display: block;
      height: 100%;
      width: 100%;
      transform: translateY(100%);
      top: 0%;
    }
  }
}
</style>
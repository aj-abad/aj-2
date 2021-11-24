<template>
  <div
    class="
      d-flex
      flex-column
      align-center
      justify-center
      h-100
      py-8
      project-index
    "
    style="width: calc(100vw - (72px * 4) + 32px + 48px)"
  >
    <button
      class="w-100 position-relative"
      style="font-size: 128px; line-height: 128px"
      v-for="(project, i) in allProjects"
      :key="i"
      @mouseenter="mouseOverHandler(i)"
      @mouseleave="mouseLeaveHandler(i)"
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
import anime from "animejs/lib/anime.es";
const duration = 200;
const easing = "easeInOutQuad";

export default {
  name: "FeaturedProjects",
  props: {
    allProjects: Array,
  },
  data() {
    return {
      lastMouseOver: -1,
      lastMouseLeave: -1,
      marquees: [],
      marqueeContents: [],
    };
  },
  mounted() {
    document
      .querySelectorAll(".project-index button")
      .forEach((el) => this.marquees.push(`#${el.id} .project-marquee`));
    this.marqueeContents = this.marquees.map((el) => el + " span");
  },
  methods: {
    mouseOverHandler(i) {
      if (this.lastMouseOver === i) return null;
      this.lastMouseOver = i;
      const isFromTop = this.lastMouseLeave <= this.lastMouseOver;

      anime.set(`#project-index-${i} .project-marquee`, {
        top: isFromTop ? "0%" : "200%",
      });
      anime.set(`#project-index-${i} .project-marquee span`, {
        top: isFromTop ? "0%" : "-200%",
      });

      this.$nextTick(() => {
        anime({
          targets: [`#project-index-${i} .project-marquee`],
          top: "100%",
          duration,
          easing,
        });
        anime({
          targets: [`#project-index-${i} .project-marquee span`],
          top: "-100%",
          duration,
          easing,
        });

        anime({
          targets: this.marquees[this.lastMouseLeave],
          top: isFromTop ? "200%" : "-0%",
          duration,
          easing,
        });

        anime({
          targets: this.marqueeContents[this.lastMouseLeave],
          top: isFromTop ? "-200%" : "0%",
          duration,
          easing,
        });
      });
    },
    mouseLeaveHandler(i) {
      this.lastMouseLeave = i;
    },
  },
};
</script>

<style lang="stylus" scoped>
.project-index button {
  text-align: left;
  white-space: nowrap;
  border-bottom: 2px solid var(--bg-dark);
  overflow: hidden;

  &:first-of-type {
    border-top: 2px solid var(--bg-dark);
  }

  span {
    padding-left: 64px;
  }

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
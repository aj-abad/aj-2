<template>
  <div
    class="d-flex flex-column align-center justify-center project-index"
    :style="`margin-top: -${infiniteScroll}px`"
  >
    <button
      class="w-100 text-uppercase position-relative"
      style="font-size: 128px; line-height: 128px"
      v-for="(project, i) in projects"
      :key="i"
      @mouseenter="mouseOverHandler(i)"
      @mouseleave="mouseLeaveHandler(i)"
      :id="`project-index-${i}`"
    >
      <span>{{ project.name }}</span>
      <div class="project-marquee">
        <span class="marquee-inner">{{ project.name }}</span>
      </div>
    </button>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es";
import project from "@/assets/projects";

const projects = project.concat(project).concat(project).concat(project);
const maxScrollHeight = (projects.length / 2) * 130;
const duration = 200;
const easing = "easeInOutQuad";
export default {
  name: "FeaturedProjects",
  props: {
    scrollProgress: Number,
  },
  data() {
    return {
      projects,
      lastMouseOver: -1,
      lastMouseLeave: -1,
      marquees: [],
      marqueeContents: [],
      maxScrollHeight,
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
      anime.set(`#project-index-${i} .project-marquee .marquee-inner`, {
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
          targets: [`#project-index-${i} .project-marquee .marquee-inner`],
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
  computed: {
    infiniteScroll() {
      return this.scrollProgress % maxScrollHeight;
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
    white-space: nowrap;
    background: var(--bg-dark);
    color: var(--bg);

    .marquee-inner {
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
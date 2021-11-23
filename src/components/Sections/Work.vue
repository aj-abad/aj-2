<template>
  <section class="main-section" id="work">
    <div id="work-scroll" class="d-flex">
      <div
        class="d-flex flex-column h-100 pa-8 justify-center align-start"
        style="margin"
      >
        <h1 class="wide section-header">
          MY <br />
          WORK
        </h1>
      </div>
      <div v-for="(project, i) in projects" :key="i" class="h-100 d-flex">
        <div
          v-if="i === 0 || projects[i].year !== projects[i - 1].year"
          class="year"
        >
          <span>{{ project.year }}</span>
        </div>
        <Project :project="project" />
      </div>
      <div style="width: calc((72px * 3) - 6px)" aria-hidden="true"></div>
    </div>
  </section>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import anime from "animejs/lib/anime.es";
import projects from "@/assets/projects";
import Project from "@/components/Project";
export default {
  name: "Work",
  props: {
    isActive: Boolean,
  },
  components: {
    Project,
  },
  data() {
    return {
      scroll: null,
      projects,
    };
  },
  mounted() {
    setTimeout(() => {
      this.initScroll();
    }, 100);
  },
  methods: {
    initScroll() {
      this.scroll = new LocomotiveScroll({
        el: document.querySelector("#work-scroll"),
        getSpeed: true,
        getDirection: true,
        multiplier: 1,
        lerp: 0.08,
        direction: "horizontal",
        smooth: true,
      });
    },
    destroyScroll() {
      this.scroll?.destroy();
      this.scroll = null;
    },
  },
  beforeDestroy() {
    this.destroyScroll();
  },
  watch: {
    isActive() {
      const el = document.querySelector("#work");
      if (this.isActive) {
        document.querySelector("#work-scroll").style.transform = null;
        anime({
          targets: this,
          duration: 400,
          begin: () => {
            el.classList.remove("d-none");
            el.classList.add("animating");
          },
          update: () => {
            const offset = document
              .querySelector("#nav-0")
              .getBoundingClientRect().x;
            el.style.clipPath = `inset(0 0 0 ${offset}px)`;
          },
          complete: () => {
            el.classList.remove("animating");
            el.style.clipPath = null;
            this.initScroll();
          },
        });
      } else {
        this.destroyScroll();
        anime({
          targets: this,
          duration: 400,
          begin: () => {
            el.classList.add("animating");
          },
          update: () => {
            const offset = document
              .querySelector("#nav-0")
              .getBoundingClientRect().x;
            el.style.clipPath = `inset(0 0 0 ${offset}px)`;
          },
          complete: () => {
            el.classList.remove("animating");
            el.classList.add("d-none");
            el.style.clipPath = null;
          },
        });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
#work {
  padding-left: 72px;
  overflow: hidden;
  z-index: 4;
}

.year {
  width: 48px;
  background: var(--bg-dark);
  color: var(--bg);
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: block;
    transform: rotate(-90deg);
  }
}
</style>
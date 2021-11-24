<template>
  <section class="main-section" id="work">
    <div id="work-scroll" class="d-flex">
      <featured-projects :allProjects="allProjects" />
      <div
        v-for="(projectGroup, i) in projects"
        :key="i"
        class="h-100 d-flex"
        :id="`project-group-${projectGroup.category}`"
      >
        <div
          class="year"
          data-scroll
          data-scroll-sticky
          :data-scroll-target="`#project-group-${projectGroup.category}`"
          data-scroll-offset="-70px -100px"
          style="z-index: 10"
        >
          <span>{{ projectGroup.category }}</span>
        </div>
        <Project
          v-for="(project, j) in projectGroup.projects"
          :key="j"
          :project="project"
        />
      </div>
      <div style="width: calc((72px * 3) - 6px)" aria-hidden="true"></div>
    </div>
  </section>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import anime from "animejs/lib/anime.es";
import projects from "@/assets/projects";
import Project from "@/components/Work/Project";
import FeaturedProjects from "../Work/FeaturedProjects.vue";
export default {
  name: "Work",
  props: {
    isActive: Boolean,
  },
  components: {
    FeaturedProjects,
    Project,
  },
  data() {
    return {
      scroll: null,
      projects,
    };
  },
  computed: {
    allProjects() {
      return this.projects
        .map((el) => el.projects)
        .flat()
        .slice(0, 5);
    },
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
      this.scroll.on("scroll", this.scrollHandler);
    },
    destroyScroll() {
      this.scroll?.destroy();
      this.scroll = null;
    },
    scrollHandler(e) {
      e;
    },
    mouseOverHandler(i) {
      i;
      //      this.hoverLink = i
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
            this.initScroll();
            el.classList.remove("animating");
            el.style.clipPath = null;
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
  padding-left: calc(72px - 2px);
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
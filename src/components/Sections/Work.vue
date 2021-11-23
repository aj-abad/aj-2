<template>
  <section class="main-section" id="work">
    <div id="work-scroll" class="d-flex">
      <div
        class="d-flex flex-column h-100 pa-8 project-index"
        style="width: calc(100vw - (72px * 4) + 32px + 48px)"
        data-scroll
        data-scroll-id="main"
      >
        <p
          class="mb-0 text-uppercase"
          style="font-size: 128px; line-height: 128px"
          v-for="(project, i) in allProjects"
          :key="i"
        >
          {{ project.name }}
        </p>
      </div>

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
          :progress="progress"
          :index="1 + allProjects.findIndex((p) => p.name === project.name)"
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
      progress: 0,
    };
  },
  computed: {
    allProjects() {
      return this.projects.map((el) => el.projects).flat();
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
      this.progress = (100 * e.scroll.x) / e.limit.x;
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
        document.querySelectorAll("[data-scroll-left]").forEach((el) => {
          el.style.left = null;
        });

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

.project-index p {
  border-bottom: 2px solid var(--bg-dark);
}
</style>
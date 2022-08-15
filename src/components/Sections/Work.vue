<template>
  <section
    class="main-section"
    id="work"
    style="width: calc(100vw - (72px * 2) + 4px)"
  >
    <div
      id="work-scroll"
      style="width: 100%; height: 10000vh; min-height: 100vh"
    >
      <div class="w-100 h-100" data-scroll id="project-list-scroll-container">
        <div class="vh-100 w-100" :style="`margin-top: ${scrollProgress}px`">
          <project-list
            @open-project="openProject"
            :scrollProgress="scrollProgress"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import anime from "animejs/lib/anime.es";
import ProjectList from "@/components/Work/ProjectList";
import projects from "@/assets/projects";
export default {
  name: "Work",
  props: {
    isActive: Boolean,
  },
  components: {
    ProjectList,
  },
  data() {
    return {
      scroll: null,
      scrollProgress: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.initScroll();
    }, 100);
  },
  methods: {
    openProject(project) {
      this.destroyScroll();
      this.$emit("open-project", project);
    },
    initScroll() {
      this.scroll = new LocomotiveScroll({
        el: document.querySelector("#work-scroll"),
        getSpeed: true,
        getDirection: true,
        multiplier: 1,
        lerp: 0.08,
        direction: "vertical",
        smooth: true,
      });
      this.scroll.on("scroll", this.scrollHandler);
    },
    destroyScroll() {
      this.scroll?.destroy();
      this.scroll = null;
    },
    scrollHandler(e) {
      this.scrollProgress = e.scroll.y;
      if (this.scrollProgress > 130 * 50 * projects.length) {
        this.$nextTick(() => {
          this.scroll.scrollTo(0, { duration: 0, disableLerp: true });
        });
      }
    },
  },
  beforeDestroy() {
    this.destroyScroll();
  },
  watch: {
    isActive() {
      const el = document.querySelector("#work");
      if (this.isActive) {
        this.scrollProgress = 0;
        document.querySelector("#work-scroll").style.transform = null;
        document.querySelector(
          "#project-list-scroll-container"
        ).style.transform = null;
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

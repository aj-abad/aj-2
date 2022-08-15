<template>
  <section class="main-section d-none" id="about">
    <div id="about-scroll" class="d-flex">
      <div
        class="px-16 d-flex align-center"
        data-scroll
        data-scroll-id="aboutPhoto"
      >
        <div class="position-relative" style="width: 50vw">
          <div class="noise"></div>
          <img
            src="/img/me.png"
            alt="Me"
            class="w-100"
            style="vertical-align: middle"
          />
        </div>
      </div>
      <div class="vw-100">
        <h1>Abuot me</h1>
      </div>
    </div>
  </section>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import anime from "animejs/lib/anime.es";
export default {
  name: "about",
  props: {
    isActive: Boolean,
  },
  data() {
    return {
      scroll: null,
      scrollProgress: {
        aboutPhoto: 0.5,
      },
    };
  },
  beforeDestroy() {
    this.destroyScroll();
  },
  methods: {
    initScroll() {
      this.scroll = new LocomotiveScroll({
        el: document.querySelector("#about-scroll"),
        getSpeed: true,
        getDirection: true,
        multiplier: 1,
        lerp: 0.08,
        direction: "horizontal",
        smooth: true,
      });
      this.scroll.on("scroll", this.scrollHandler);
    },
    scrollHandler(e) {
      this.scrollProgress.aboutPhoto =
        e.currentElements?.aboutPhoto?.progress ?? 0;
    },
    destroyScroll() {
      this.scroll?.destroy();
      this.scroll = null;
    },
  },
  watch: {
    isActive() {
      const el = document.querySelector("#about");
      if (this.isActive) {
        document.querySelector("#about-scroll").style.transform = null;
        // document
        //   .querySelectorAll(".scroll-vertically")
        //   .forEach((el) => el.setAttribute("x", 0));
        anime({
          targets: this,
          duration: 400,
          begin: () => {
            el.classList.remove("d-none");
            el.classList.add("animating");
          },
          update: () => {
            const offset = document
              .querySelector("#nav-1")
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
              .querySelector("#nav-1")
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
#about {
  padding-left: 144px;
  overflow: hidden;
  z-index: 4;

  .noise {
    z-index: 101;
  }

  img {
    position: relative;
    z-index: 100;
  }
}
</style>
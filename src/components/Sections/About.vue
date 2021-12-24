<template>
  <section class="main-section d-none" id="about">
    <div id="about-scroll" class="d-flex">
      <div
        class="px-16 d-flex align-center"
        data-scroll
        data-scroll-id="aboutPhoto"
      >
        <div class="position-relative" style="width: 50vw">
          <svg
            class="position-absolute"
            style="height: 170vh; top: -50%; left: 8rem; z-index: 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 229.79 849.13"
          >
            <text
              class="scroll-vertically"
              :x="-(scrollProgress.aboutPhoto - 0.5) * 500"
              y="0"
              transform="matrix(0, -1, 1, 0, 79.81, 837.74)"
              style="
                stroke: black;
                stroke-width: 2px;
                font-size: 112px;
                font-family: 'roc grotesk wide';
                font-weight: 700;
                opacity: 0.87;
              "
            >
              WHO I AM
            </text>
            <text
              class="scroll-vertically"
              :x="(scrollProgress.aboutPhoto - 0.5) * -500"
              y="0"
              transform="matrix(0, -1, 1, 0, 189.81, 739.93)"
              style="
                font-size: 112px;
                stroke: black;
                fill: black;
                stroke-width: 2px;
                font-family: roc grotesk wide;
                font-weight: 700;
                opacity: 0.87;
              "
            >
              WHAT I DO
            </text>
          </svg>
          <svg
            class="position-absolute"
            style="height: 170vh; top: -50%; left: 8rem; z-index: 200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 229.79 849.13"
          >
            <text
              class="scroll-vertically"
              :x="(scrollProgress.aboutPhoto - 0.5) * 500"
              y="0"
              transform="matrix(0, -1, 1, 0, 79.81, 837.74)"
              style="
                stroke: black;
                fill: transparent;
                stroke-width: 2px;
                font-size: 112px;
                font-family: 'roc grotesk wide';
                font-weight: 700;
                opacity: 0.87;
              "
            >
              WHO I AM
            </text>
            <text
              class="scroll-vertically"
              :x="(scrollProgress.aboutPhoto - 0.5) * -500"
              y="0"
              transform="matrix(0, -1, 1, 0, 189.81, 739.93)"
              style="
                font-size: 112px;
                stroke: black;
                fill: transparent;
                stroke-width: 2px;
                font-family: roc grotesk wide;
                font-weight: 700;
                opacity: 0.87;
              "
            >
              WHAT I DO
            </text>
          </svg>
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
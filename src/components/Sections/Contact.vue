<template>
  <section class="main-section d-none" id="contact">
    <div id="contact-scroll" class="d-flex flex-grow-1">
      <div class="d-flex flex-grow-1">
        <div
          class="
            d-flex
            flex-shrink-0 flex-column
            h-100
            pa-8
            justify-center
            align-start
          "
        >
          <h1 class="wide" style="font-size: 200px; line-height: 175px">HMU</h1>
          <p style="font-size: 32px">
            Interested in working together? Hit me up!
          </p>
        </div>
        <div class="flex-grow-1 d-flex flex-column justify-center align-center">
          <p class="w-100" style="font-size: 64px">EMAIL</p>
          <p class="w-100" style="font-size: 64px">INSTAGRAM</p>
          <p class="w-100" style="font-size: 64px">MOBILE</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import anime from "animejs/lib/anime.es";
export default {
  name: "Contact",
  props: {
    isActive: Boolean,
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    initScroll() {
      this.scroll = new LocomotiveScroll({
        el: document.querySelector("#contact-scroll"),
        getSpeed: true,
        getDirection: true,
        multiplier: 1,
        lerp: 0.08,
        direction: "horizontal",
        smooth: true,
      });
    },
    destroyScroll() {
      this.scroll.destroy();
      this.scroll = null;
    },
  },
  beforeDestroy() {
    this.destroyScroll();
  },
  watch: {
    isActive() {
      const el = document.querySelector("#contact");
      if (this.isActive) {
        document.querySelector("#contact-scroll").style.transform = null;
        anime({
          targets: this,
          duration: 4000,
          begin: () => {
            el.classList.remove("d-none");
            el.classList.add("animating");
          },
          update: () => {
            const offset = document
              .querySelector("#nav-2")
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
          duration: 4000,
          begin: () => {
            el.classList.add("animating");
          },
          update: () => {
            const offset = document
              .querySelector("#nav-2")
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
#contact {
  padding-left: 216px;
  overflow: hidden;
  z-index: 4;
}

p {
  border-bottom: 2px solid var(--bg-dark);
}
</style>
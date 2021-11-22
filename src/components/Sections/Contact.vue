<template>
  <section class="main-section d-none" id="contact">
    <div class="vw-100 h-100">
      <div class="d-flex flex-column h-100 pa-8 justify-center align-start">
        <h1 class="wide" style="font-size: 200px; line-height: 175px">
          CON-
          <br />
          TACT
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
import anime from "animejs/lib/anime.es";
export default {
  name: "Contact",
  props: {
    isActive: Boolean,
    progress: Number,
  },
  data() {
    return {
      isAnimating: false,
    };
  },
  watch: {
    isActive() {
      if (this.isActive) {
        const el = document.querySelector("#contact");
        anime({
          targets: this,
          duration: 4000,
          begin: () => {
            el.classList.remove("d-none");
          },
          update: () => {
            const offset = document
              .querySelector("#nav-2")
              .getBoundingClientRect().x;
            el.style.clipPath = `inset(0 0 0 ${offset}px)`;
          },
          complete: () => {
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
  background: blue;
  overflow: hidden;
  z-index: 4;
}
</style>
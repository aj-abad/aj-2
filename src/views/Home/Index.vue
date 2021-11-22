<template>
  <main class="d-flex flex-column" style="height: 100vh">
    <custom-cursor />
    <Header />
    <div id="scroll-container" class="flex-grow-1" style="width: 10000vw">
      <div class="h-100 vw-100" style="background: rgb(255, 0, 0)"></div>
      <div class="h-100 vw-100" style="background: rgb(0, 255, 0)"></div>
      <div class="h-100 vw-100" style="background: rgb(0, 0, 255)"></div>
    </div>
    <Footer />
  </main>
</template>

<script>
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";
import LocomotiveScroll from "locomotive-scroll";
import CustomCursor from "@/components/CustomCursor";
export default {
  name: "Home",
  components: {
    CustomCursor,
    Footer,
    Header,
  },
  data() {
    return {
      scroll: null,
      introAnimationDone: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.scroll = new LocomotiveScroll({
        el: document.querySelector("#scroll-container"),
        getSpeed: true,
        getDirection: true,
        multiplier: 1,
        lerp: 0.07,
        direction: "horizontal",
        smooth: true,
      });
      this.scroll.on("scroll", this.scrollHandler);
    }, 100);
  },
  methods: {
    scrollHandler(e) {
      this.scrollSpeed = e.speed;
    },
  },
  beforeDestroy() {
    this.scroll.destroy();
    this.scroll = null;
  },
};
</script>

<style lang="stylus" scoped>
#scroll-container {
  display: flex;
}
</style>
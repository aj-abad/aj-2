<template>
  <main>
    <custom-cursor />
    <div id="scroll-container" style="width: 10000vw"></div>
  </main>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import CustomCursor from "@/components/CustomCursor";
export default {
  name: "Home",
  components: {
    CustomCursor,
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
        lerp: 0.08,
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
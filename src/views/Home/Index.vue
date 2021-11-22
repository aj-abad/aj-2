<template>
  <main class="d-flex flex-column" style="height: 100vh">
    <custom-cursor />
    <main id="scroll-container" class="flex-grow-1" style="width: 10000vw">
      <div class="d-flex h-100" id="main-view">
        <navigation-buttons @update="setActiveLink" />
        <work :isActive="activeLink === 0" />
        <about :isActive="activeLink === 1" />
        <contact :isActive="activeLink === 2" />
      </div>
    </main>
    <Footer />
  </main>
</template>

<script>
import Footer from "@/components/Navigation/Footer";
import LocomotiveScroll from "locomotive-scroll";
import CustomCursor from "@/components/CustomCursor";
import NavigationButtons from "@/components/Navigation/NavigationButtons";
import Work from "@/components/Sections/Work";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
export default {
  name: "Home",
  components: {
    CustomCursor,
    NavigationButtons,
    Footer,
    Work,
    About,
    Contact,
  },
  data() {
    return {
      scroll: null,
      activeLink: 0,
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
    setActiveLink(e) {
      this.activeLink = e;
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
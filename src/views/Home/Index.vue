<template>
  <main class="d-flex flex-column" style="height: 100vh">
    <custom-cursor />
    <main id="scroll-container" class="flex-grow-1 position-relative">
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
import CustomCursor from "@/components/CustomCursor";
import NavigationButtons from "@/components/Navigation/NavigationButtons";
import Work from "../../components/Sections/Work.vue";
import About from "../../components/Sections/About.vue";
import Contact from "../../components/Sections/Contact.vue";
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
  mounted() {},
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
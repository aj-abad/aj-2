<template>
  <main class="d-flex flex-column" style="height: 100vh">
    <custom-cursor />
    <main id="scroll-container" class="flex-grow-1 position-relative">
      <div class="d-flex h-100" id="main-view">
        <navigation-buttons />
        <work />
        <about />
        <contact />
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
};
</script>

<style lang="stylus" scoped>
#scroll-container {
  display: flex;
}
</style>
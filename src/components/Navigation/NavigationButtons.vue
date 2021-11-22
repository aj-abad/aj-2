<template>
  <nav class="d-flex">
<<<<<<< HEAD
    <div class="d-flex" v-for="(link, i) in links" :key="i">
      <button
        data-scroll
        data-scroll-sticky
        data-scroll-target="#main-view"
        type="button"
        class="btn-section"
        @click="setActiveLink(i)"
        :id="`nav-${i}`"
      >
        <span> {{ link }} </span>
        <div class="expand" aria-hidden="true">+</div>
      </button>
    </div>
=======
    <button
      data-scroll
      data-scroll-sticky
      data-scroll-target="#main-view"
      type="button"
      class="btn-section"
      :class="{ active: activeLink === i }"
      v-for="(link, i) in links"
      :key="i"
      @click="setActiveLink(i)"
      :id="`nav-${i}`"
      :style="`left: ${i * 72 - i * 2}px`"
    >
      <span> {{ link }} </span>
      <div class="expand" aria-hidden="true">+</div>
    </button>
>>>>>>> e3146f2ac64183b874aa3fef118bcd57e6d7b16b
  </nav>
</template>

<script>
import anime from "animejs/lib/anime.es";
const toLeft = [
  ["#nav-0"],
  ["#nav-0", "#nav-1"],
  ["#nav-0", "#nav-1", "#nav-2"],
];
const toRight = [["#nav-1", "#nav-2"], ["#nav-2"], []];
export default {
  // components: { Work },
  name: "Header",
  data() {
    return {
      links: ["WORK", "ABOUT", "CONTACT"],
      activeLink: 0,
      isLocked: false,
    };
  },
  mounted() {
    anime({
      targets: toRight[0],
      left: window.innerWidth - 72 - 72 - 72 + 8,
      duration: 0,
    });
  },
  methods: {
    setActiveLink(i) {
<<<<<<< HEAD
      if (this.activeLink === 1 || this.isLocked) return null;
      this.isLocked = true;
      console.log(toLeft[i]);
      anime({
        targets: toLeft[i],
        duration: 400,
        left: 0,
        easing: "easeInOutQuad",
        complete: () => (this.isLocked = false),
      });
      anime({
        targets: toRight[i],
        duration: 400,
        left: window.innerWidth - 72 - 72 - 72 + 8,
        easing: "easeInOutQuad",
      });
=======
      this.activeLink = i;
      this.$emit("update", i);
>>>>>>> e3146f2ac64183b874aa3fef118bcd57e6d7b16b
    },
  },
};
</script>

<style lang="stylus" scoped>
.btn-section {
  transition: margin-left 0.6s;
  transition-timing-function: ease-in-out;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 72px;
  font-size: 48px;
  position: relative;
  border-right: 2px solid var(--bg-dark);
  border-left: @border-right;
  outline: none !important;
  background: var(--bg);
<<<<<<< HEAD
  margin-left: -2px;
  z-index: 4;
=======

  &:first-of-type {
    border-left: 2px solid var(--bg);
  }

  &.active + button {
    border-left: 2px solid var(--bg-dark);
  }

  &:hover {
    span {
      transform: rotate(-90deg) translateX(calc(50% + 32px));
    }
  }
>>>>>>> e3146f2ac64183b874aa3fef118bcd57e6d7b16b

  span {
    transition: 0.3s;
    display: block;
    white-space: nowrap;
    text-transform: uppercase;
    transform: rotate(-90deg) translateX(50%);
  }

  .expand {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
}
<<<<<<< HEAD
=======

#nav-0.active ~ #nav-1 {
  margin-left: calc(100vw - (72px * 3) + 6px);
}

#nav-0.active ~ #nav-2 {
  margin-left: calc(100vw - (72px * 3) + 6px);
}

#nav-1.active ~ #nav-2 {
  margin-left: calc(100vw - (72px * 3) + 6px);
}
>>>>>>> e3146f2ac64183b874aa3fef118bcd57e6d7b16b
</style>
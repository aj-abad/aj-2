<template>
  <nav class="d-flex">
    <div class="d-flex" v-for="(link, i) in links" :key="i">
      <button
        type="button"
        class="btn-section"
        @click="setActiveLink(i)"
        :id="`nav-${i}`"
        :class="{ selected: activeLink === i }"
      >
        <span> {{ link }} </span>
        <div class="expand" aria-hidden="true">
          <!-- <span v-if="activeLink === i">-</span>
          <span v-else>+</span> -->
        </div>
      </button>
    </div>
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
    window.addEventListener("resize", () => {
      anime({
        targets: toRight[this.activeLink],
        left: window.innerWidth - 72 - 72 - 72 + 8,
        duration: 0,
      });
    });
  },
  methods: {
    setActiveLink(i) {
      if (this.activeLink === i || this.isLocked) return null;
      this.isLocked = true;
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
      this.activeLink = i;
      this.$emit("update", i);
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
  margin-left: -2px;
  z-index: 100;

  > span {
    transition: 0.3s;
    display: block;
    white-space: nowrap;
    text-transform: uppercase;
    transform: rotate(-90deg) translateX(50%);
  }

  .expand {
    position: absolute;
    width: 68px;
    height: 68px;
    top: 0;
    left: 0;

    &::before, &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background: var(--bg-dark);
    }

    &::before {
      height: 3px;
      width: 32px;
    }

    &::after {
      transition: height 0.2s;
      width: 3px;
      height: 32px;
    }
  }

  &.selected .expand::after {
    height: 0;
  }
}
</style>
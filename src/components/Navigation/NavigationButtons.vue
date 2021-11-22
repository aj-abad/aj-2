<template>
  <nav class="d-flex">
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
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: ["WORK", "ABOUT", "CONTACT"],
      activeLink: 0,
    };
  },
  methods: {
    setActiveLink(i) {
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
  position: absolute;
  top: 0;
  border-right: 2px solid var(--bg-dark);
  border-left: @border-right;
  outline: none !important;
  background: var(--bg);

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

#nav-0.active ~ #nav-1 {
  margin-left: calc(100vw - (72px * 3) + 6px);
}

#nav-0.active ~ #nav-2 {
  margin-left: calc(100vw - (72px * 3) + 6px);
}

#nav-1.active ~ #nav-2 {
  margin-left: calc(100vw - (72px * 3) + 6px);
}
</style>
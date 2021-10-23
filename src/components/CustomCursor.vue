<template>
  <div
    class="position-absolute pointer-events-none"
    :class="{ 'on-link': isOnLink }"
    ref="main"
    style="opacity: 0"
  >
    <div
      class="position-absolute show-on-link pointer-events-none"
      style="z-index: 100001; width: 25vmin; height: 25vmin"
      :style="slowFollowCursor"
    >
    
    </div>

    <svg
      id="cursor"
      class="pointer-events-none"
      aria-hidden="true"
      ref="cursor"
      viewBox="0 0 64 64"
      :style="followCursor"
    >
      <circle cx="32" cy="32" r="32" style="fill: white" />
    </svg>
  </div>
</template>
<script>
import gsap from "gsap";
export default {
  name: "CustomCursor",
  data() {
    return {
      isInitialized: false,
      center: 0,
      delta: {
        x: 0,
        y: 0,
      },
      mouse: {
        x: 0,
        y: 0,
      },
      position: {
        x: 0,
        y: 0,
      },
      slowPosition: {
        x: 0,
        y: 0,
      },
      isOnLink: false,
    };
  },
  mounted() {
    this.center = this.$refs.cursor.clientWidth / 2;
    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
      this.isOnLink =
        e.path.filter((el) => el.tagName === "A" || el.tagName === "BUTTON")
          .length > 0;
      if (!this.isInitialized) {
        this.isInitialized = true;
        this.position.x = e.x;
        this.position.y = e.y;
        this.slowPosition.x = e.x;
        this.slowPosition.y = e.y;
        this.$refs.main.style.opacity = 1;
        this.tickerInit();
      }
    });
  },
  computed: {
    followCursor() {
      let transform = `transform: translateX(${
        this.position.x - this.center
      }px) translateY(${this.position.y - this.center}px)`;
      return transform;
    },
    slowFollowCursor() {
      return `transform: translateX(${
        this.slowPosition.x - this.center
      }px) translateY(${this.slowPosition.y - this.center}px)`;
    },
    speedTransform() {
      return null;
    },
  },
  methods: {
    tickerInit() {
      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
        this.position.x += (this.mouse.x - this.position.x) * dt;
        this.position.y += (this.mouse.y - this.position.y) * dt;
        const slowDelta = 1.0 - Math.pow(1.0 - 0.125, gsap.ticker.deltaRatio());
        this.slowPosition.x += (this.mouse.x - this.slowPosition.x) * slowDelta;
        this.slowPosition.y += (this.mouse.y - this.slowPosition.y) * slowDelta;
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
#cursor {
  height: 4.5vmin;
  width: @height;
  mix-blend-mode: difference;
  position: absolute;
  z-index: 100000;
}

.on-link .show-on-link {
  opacity: 1;
}

.show-on-link {
  opacity: 0;
}
</style>
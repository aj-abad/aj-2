<template>
  <footer class="flex-shrink-0 pa-4 d-flex align-center" style="height: 96px">
    <svg viewBox="0 0 356 149.47" style="height: 100%" aria-label="AJ Abad">
      <path
        d="M67,53.73H27.35l-7,13.74H.08L36.79,0H60.17L96.88,67.47H74ZM61.19,42.25l-14-27.48H47L33.1,42.25Z"
      />
      <path
        d="M98.42,40.71c0-2.16.1-5.74.41-9.23h17.43c-.2,3.18-.2,7.07-.2,8.61,0,8.21,4.61,14,15.48,14,9.23,0,15.89-5.43,15.89-17.12V0h19.69V36.09c0,21.95-13,32.61-35.17,32.61C109.29,68.7,98.42,58.24,98.42,40.71Z"
      />
      <path
        d="M67,135.73H27.35l-7,13.74H.08L36.79,82H60.17l36.71,67.47H74Zm-5.85-11.48-14-27.48H47L33.1,124.25Z"
      />
      <path
        d="M101.19,82h42.86c24.91,0,28.71,10,28.71,17.84,0,5.44-2.57,12-11.59,14.36v.1c11.38,2,15,9.33,15,15.38,0,11-5.74,19.79-30.55,19.79h-44.4Zm43.37,27.38c8.2,0,11.07-2.67,11.07-7,0-3.9-3.17-6.87-12.3-6.87H120.87v13.84Zm.1,26.66c10,0,12.82-3.18,12.82-8.1,0-3.69-3.28-7.08-12.41-7.08h-24.2V136Z"
      />
      <path
        d="M245.15,135.73H205.47l-7,13.74H178.2L214.9,82h23.38L275,149.47H252.13Zm-5.84-11.48L225.26,96.77h-.1l-13.95,27.48Z"
      />
      <path
        d="M279.3,82h34.35C345.34,82,356,96.66,356,115.74c0,21.63-10.87,33.73-39.37,33.73H279.3ZM316,134.91c14.56,0,20.3-6.77,20.3-19.17,0-10.67-5.74-19.18-21.63-19.18H299v38.35Z"
      />
    </svg>
    <div class="h-100 ml-auto">
      <svg class="h-100" viewBox="0 0 154.09 33.68" style="overflow: visible">
        <text x="67.08" y="8.34" class="footer-text">MANILA-BASED</text>
        <text x="0" y="20.25" class="footer-text">CREATIVE WEB DEVELOPER</text>
        <text x="113.36" y="32.17" class="footer-text">
          <tspan>&copy;</tspan>
          <tspan>
            {{ year }}
          </tspan>
        </text>
      </svg>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="stylus" scoped>
footer {
  border-top: 2px solid var(--bg-dark);
}

path {
  fill: var(--bg-dark);
}

.footer-text {
  font-size: 12px;
  font-family: 'roc grotesk';
}
</style>
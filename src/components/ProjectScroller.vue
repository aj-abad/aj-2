<template>
  <div class="d-flex">
    <!-- <div class="h-100 vw-100 red"></div>
    <div class="h-100 vw-100 green"></div> -->

    <div class="h-100 d-flex" v-for="(project, i) in projects" :key="i">
      <div
        class="year"
        v-if="i === 0 || projects[i - 1].year !== projects[i].year"
      >
        <span>
          {{ projects[i].year }}
        </span>
      </div>
      <div class="project">
        <h1>{{ project.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "@/assets/projects";
export default {
  data() {
    return {
      projects: projects.sort((a, b) => b.year - a.year),
    };
  },
  name: "ProjectScroller",
};
</script>

<style lang="stylus" scoped>
.year {
  width: calc((100vw / 25));
  min-width: 32px;
  background: var(--bg-dark);
  color: var(--bg);
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-shrink: 0;

  span {
    display: block;
    transform: rotate(-90deg);
  }
}

.project {
  flex-shrink: 0;
  height: 100%;
  width: calc((100vw / 2));
  border-right: 2px solid var(--bg-dark);
}
</style>
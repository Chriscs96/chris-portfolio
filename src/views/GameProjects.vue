<template>
  <div>
    <h1>Game Projects</h1>

    <div style="margin-bottom: 30px;">
        Below are some of my game jam creations where I served as the sole programmer and level designer, while also contributing to both 3D and 2D art.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      You can see the rest at <a target="_blank" href="https://whynotprogram.itch.io">whynotprogram.itch.io</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>

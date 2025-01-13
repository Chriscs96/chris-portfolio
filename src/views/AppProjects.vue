<template>
  <div>
    <h1>Apps</h1>

    <div style="margin-bottom: 30px;">
      Here are some of the applications I've developed.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import appProjectsData from "@/data/AppProjectsData.ts";

export default Vue.extend({
  name: "AppProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: appProjectsData,
    };
  },
});
</script>

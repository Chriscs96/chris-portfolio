<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
    I'm <strong>Christopher Smith</strong>, a versatile software developer and digital creator with over a decade of self-taught programming experience—primarily in C# and Python. 
    <br />I excel at building robust applications, creating user-friendly interfaces, and developing immersive gaming experiences in Unity and Unreal Engine.
    <br />Beyond coding, my skill set extends into 3D modeling, animation, and texture design. I've shipped game jam projects on itch.io and released a Python app on the Microsoft Store, surpassing 3.5k downloads.
    <br />I also bring experience in backend/frontend development and multimedia production using Adobe After Effects, DaVinci Resolve, and Audition.
    <br />Currently based in New Bern, NC, I'm open to roles in game development, software engineering, and other related fields. Feel free to 
    <router-link to="/contact">contact me</router-link>.
    <br />
    <br />Outside of development, I’m passionate about continuous learning, creative problem-solving, and collaborative teamwork.
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Senior Assistant, Store Technical Support · CVS</h3>
      <h4>2021 - Present</h4>
      <div>Provided technical assistance, troubleshooting POS systems, and network issues, enhancing problem-solving and communication skills valuable in a development environment.</div>
      <div class="tech-stack">POS Systems, Basic Networking, Customer Support</div>

      <h3>Game Projects (Personal/Indie)</h3>
      <h4>2014 - Present</h4>
      <div>Developed multiple small-scale game projects (solo and in small teams) focusing on gameplay mechanics, visuals, and user experience. Participated in game jams, published titles on itch.io, utilized C# scripting in Unity and tools in Unreal Engine, integrated 3D assets, animations, and audio.</div>
      <div class="tech-stack">Unity, Unreal Engine, C#, Python, Blender, Adobe After Effects, DaVinci Resolve, Audition</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages & Programming</h3>
        <div class="skill-box"><SkillRate name="C#" :rate="5" /></div>
        <div class="skill-box"><SkillRate name="Python" :rate="5" /></div>
        <div class="skill-box"><SkillRate name="JavaScript" :rate="4" /></div>
        <div class="skill-box"><SkillRate name="HTML/CSS" :rate="4" /></div>
        <div class="skill-box"><SkillRate name="PHP" :rate="3" /></div>
        <div class="skill-box"><SkillRate name="SQL" :rate="3" /></div>
      </div>

      <div class="skill-set">
        <h3>Game Development</h3>
        <div class="skill-box"><SkillRate name="Unity" :rate="5" /></div>
        <div class="skill-box"><SkillRate name="Unreal Engine" :rate="3" /></div>
        <div class="skill-box"><SkillRate name="Blender" :rate="5" /></div>
        <div class="skill-box"><SkillRate name="Zbrush" :rate="3" /></div>
        <div class="skill-box"><SkillRate name="Substance Painter" :rate="4" /></div>
        <div class="skill-box"><SkillRate name="DaVinci Resolve" :rate="4" /></div>
      </div>

      <div class="skill-set">
        <h3>Tools & Platforms</h3>
        <div class="skill-box"><SkillRate name="AWS" :rate="3" /></div>
        <div class="skill-box"><SkillRate name="PyCharm" :rate="4" /></div>
        <div class="skill-box"><SkillRate name="Visual Studio" :rate="4" /></div>
        <div class="skill-box"><SkillRate name="Git Version Control" :rate="4" /></div>

      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>CRAVEN COMMUNITY COLLEGE, NEW BERN, NC - 2022</h3>
      <h4>Associates in Applied Science, Information Technology (Cybersecurity & Networking)</h4>
      <div>Secured networks, implemented firewall configurations, IP addressing schemes, and demonstrated strong problem-solving and teamwork in cybersecurity competitions.</div>

      <h3>Self-Taught Developer - 10+ Years</h3>
      <h4>Continuous Learning in Game Dev & Programming</h4>
      <div>Developed projects, learned multiple languages, frameworks, engines, and design patterns, focusing on industry best practices and software craftsmanship.</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.skill-box {
  border: 1px solid #000;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>

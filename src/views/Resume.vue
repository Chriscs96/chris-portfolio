<template>
  <div>
    <h1>Resume</h1>

  <div class="paragraph">
    I'm <strong>Christopher Smith</strong>, a versatile <strong>software developer</strong> and 
    <strong>digital creator</strong> with over a decade of <strong>self-taught programming</strong> 
    experience in <strong>C#</strong> and <strong>Python</strong>.

    <br />I specialize in building robust applications, designing user-friendly interfaces, and 
    creating immersive gaming experiences in Unity and Unreal Engine. In addition to game 
    development, I have strong experience in backend and frontend programming, data analysis 
    (pandas, NumPy), and cloud services (AWS).

    <br />One of my notable projects is <strong>QHuman</strong>, a Python-based automation tool 
    on the Microsoft Store with <strong>4,200+ downloads</strong> and a <strong>4★+ rating</strong>, 
    showcasing my aptitude for creating efficient, real-world software solutions.

    <br />I'm currently based in New Bern, NC, open to roles in game development, software 
    engineering, data analytics, and related fields. 
    Feel free to <router-link to="/contact">contact me</router-link> for collaboration or opportunities.
    <br />
    <br />Outside of development, I’m passionate about continuous learning, creative problem-solving, 
    and collaborative teamwork.
</div>


    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Senior Assistant, Store Technical Support · CVS</h3>
      <h4>2021 - Present</h4>
      <div>
        Provided technical support for hardware, prescription/insurance billing, and network issues,
        utilizing terminal-based commands (CMD) to remotely access and troubleshoot servers/hardware.
        Managed user accounts via Active Directory, resolved POS issues under strict deadlines,
        and collaborated with colleagues using Outlook and Teams. Analyzed large Excel datasets
        (e.g., prescription/insurance claims) to identify trends and address billing rejections.
      </div>
      <div class="tech-stack">
        POS Systems, CMD (Terminal), Excel (Data Analysis), Active Directory, Networking, Customer Support
      </div>


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
        <div class="skill-box"><SkillRate name="Google Cloud" :rate="3" /></div>
        <div class="skill-box"><SkillRate name="PyCharm" :rate="4" /></div>
        <div class="skill-box"><SkillRate name="Visual Studio" :rate="4" /></div>
        <div class="skill-box"><SkillRate name="Git Version Control" :rate="4" /></div>

      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>FAYETTEVILLE STATE UNIVERSITY, FAYETTEVILLE, NC – In Progress</h3>
      <h4>B.S. in Computer Science (Expected Completion: 2027)</h4>
      <div>Pursuing advanced studies in software development, algorithms, and data structures.</div>

      <h3>Self-Taught Developer - 10+ Years</h3>
      <h4>Continuous Learning in Game Dev & Programming</h4>
      <div>Developed projects, learned multiple languages, frameworks, engines, and design patterns, focusing on industry best practices and software craftsmanship.</div>
    
    <h2>Community & Open Source</h2>

    <div>
      <p>
        I regularly publish Python tutorials and automation demos on 
        <a href="https://www.youtube.com/@WhyNotProgram" target="_blank">WhyNotProgram</a> 
        and 
        <a href="https://www.youtube.com/@QHuman-Automation" target="_blank">QHuman-Automation</a>. 
      </p>
    </div>
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

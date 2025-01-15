<template>
  <div style="margin-bottom: 80px;">
    <h1>Hi!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Christopher Smith</strong>, a versatile developer and digital creator with over 10 years of self-taught programming experience, specializing in C# and Python.<br/>
        I build robust applications, design user-friendly interfaces, and create immersive gaming experiences using Unity and Unreal Engine.
      </div>

      <div style="margin-top: 20px;">
        My expertise spans 3D modeling, rigging, animation, texturing, and game development. I've released game jam projects on itch.io and a Python app on the Microsoft Store with over 4.2k downloads. In addition to programming, I have experience in backend and frontend development, as well as video and audio production using tools like Adobe After Effects, DaVinci Resolve, and Audition.
      </div>

      <div style="margin-top: 40px;">
        I enjoy blending technical precision with creative problem-solving and am passionate about collaborating on innovative projects in game development, software programming, and creative media. You can reach me at <a href="mailto:chriscswe@gmail.com">chriscswe@gmail.com</a> or <router-link to="/contact">through here</router-link>.
      </div>
    </div>

    <div class="photo">
      <img src="img/AboutProfilePicture.png" alt="Avatar of Christopher" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>

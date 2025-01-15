import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("project-6", "QHuman", "img/projects/QHumanCoverPhoto.png", `
    <div class="paragraph">
      <strong>QHuman</strong> is a automation tool for repetitive tasks, designed to mimic natural, human-like behavior. Now published on the Microsoft Store with <strong>4,200+ downloads</strong> and a <strong>4+ star rating</strong>, QHuman offers user-friendly features for clients and a robust technical foundation for those interested in its development:
      
      <img class="banner" src="img/projects/AppHomePage.png" alt="QHuman Banner" style="width:100%; margin-top:40px; margin-bottom:20px;" />

      <ul>
        <li>Created in Python using libraries such as <em>PyQt6, pandas, pynput, PyAutoGUI, numpy</em>, and more, delivering a responsive desktop app experience</li>
        <li>Employs <em>AWS Cognito</em> for authentication, <em>IAM</em> for security roles, and <em>API Gateway</em> + <em>Lambda</em> for serverless processes, ensuring secure user management</li>
        <li>Integrates <em>Stripe</em> webhooks for subscription handling, providing seamless payment flows</li>
        <li>Packaged and distributed via <em>PyInstaller</em>, <em>Inno Setup</em>, and <em>Advanced Installer</em> for efficient MSIX deployments</li>
        <li>Utilizes AWS services like <em>S3</em> and <em>CloudWatch</em> to store data, monitor activity, and manage requests through the Python app</li>
        <li>Offers a dedicated website built on <em>WordPress</em> with custom PHP to handle account management and documentation</li>
      </ul>
    </div>

    <div class="paragraph center">
      <a href="https://apps.microsoft.com/detail/9mw30d1cc0gc?hl=en-US&gl=US" target="_blank">
        <img src="img/projects/ms-store-logo.png" alt="Microsoft Store button" />
      </a>
    </div>

    <div class="paragraph">
      Key Capabilities:
      <ul>
        <li><strong>All-Inclusive Recording:</strong> Capture mouse, keyboard, and on-screen image/pixel detection for precise automations</li>
        <li><strong>Human-Like Automation:</strong> Introduce randomness to movements and clicks for a more authentic feel</li>
        <li><strong>Advanced Controls:</strong> Adjust speeds, offsets, durations, and logs for detailed customization</li>
        <li><strong>Modular Editing:</strong> Quickly refine action positions, timings, and sequences using intuitive UI dialogs</li>
        <li><strong>Web Integration & Tutorials:</strong> Visit the <strong>QHuman website</strong> for account management, in-depth documentation, and tutorial videos on a dedicated YouTube channel</li>
      </ul>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot" src="img/projects/ImageDetection.png" alt="QHuman Screenshot" />
      <img class="pc-screenshot" src="img/projects/SettingsPage.png" alt="QHuman Screenshot" />
      <img class="pc-screenshot" src="img/projects/QhumanActionEditor.png" alt="QHuman Screenshot" />
    </div>
    `, "#c10606", true, true)
];
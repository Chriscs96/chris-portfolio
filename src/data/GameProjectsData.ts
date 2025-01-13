import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("project-1", "Ghost Tycoon", "img/projects/GhostTycoonCover.png", 
        `
        <div class="paragraph">
          <strong>Ghost Tycoon</strong> is a Unity-based 3D game project featuring a custom grid-building system, a day/night cycle, and AI-driven pathfinding with scalable state-based decision logic. Developed to demonstrate full-stack game creation skills, it includes:
            
          <ul>
            <li><strong>Grid-Based Building:</strong> Custom system allowing players to place structures on a cell-based grid</li>
            <li><strong>AI & Pathfinding:</strong> Advanced, state-driven NPCs that navigate environments and make decisions based on dynamic conditions</li>
            <li><strong>Inventory & Shop:</strong> Category-based UI for item management, plus an in-game store to purchase buildable objects</li>
            <li><strong>Day/Night Cycle:</strong> Real-time lighting transitions affecting world ambiance and NPC behaviors</li>
            <li><strong>3D Environment & Assets:</strong> Modeled, textured, rigged, and animated in Blender for a cohesive aesthetic</li>
            <li><strong>Mini Story Integration:</strong> Narrative elements woven into gameplay to demonstrate creative writing and design synergy</li>
          </ul>
        </div>

        <div class="paragraph center">
            <a href="https://whynotprogram.itch.io/ghosttycoon" target="_blank">
                <img src="img/projects/Itch.IO.png" alt="itch.io button" />
            </a>
        </div>

        <div class="paragraph center">
          <img class="phone-screenshot" src="img/projects/GhostTycoonGP_00.png" alt="Ghost Tycoon Screenshot" />
          <img class="phone-screenshot" src="img/projects/GhostTycoonGP_01.png" alt="Ghost Tycoon Screenshot" />
        </div>
        `, "#23bd69", true, true),
    new ProjectData("project-2", "Doge Diner", "img/projects/dogediner_cover.png", `
        <div class="paragraph">
            <strong>Doge Diner</strong> is a Unity-based cooking and time-management project that showcases advanced state-based AI and in-depth gameplay mechanics. Developed to highlight both technical and creative skills, it features:
            <ul>
            <li><strong>AI with Unique Requests & Wait Times:</strong> Each customer has a dynamic happiness state, dependent on food quality and service speed</li>
            <li><strong>Time-Management Cooking:</strong> Players must select and prepare ingredients in tight windows to satisfy customer orders</li>
            <li><strong>Queue & Scheduling System:</strong> Handles multiple AI orders and requests simultaneously, pushing players to strategize and prioritize tasks</li>
            <li><strong>Ingredient Mixing & Experimentation:</strong> A flexible cooking mechanic allowing players to discover new recipes and combos</li>
            <li><strong>State-Based AI:</strong> NPC behaviors and moods update in real time based on wait times, order complexity, and overall satisfaction</li>
            </ul>
        </div>

        <div class="paragraph center">
            <a href="https://whynotprogram.itch.io/doge-diner" target="_blank">
                <img src="img/projects/Itch.IO.png" alt="itch.io button" />
            </a>
        </div>
        
        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/DogeDinerGP_00.png" alt="Doge Diner Screenshot" />
            <img class="pc-screenshot" src="img/projects/DogeDinerGP_01.png" alt="Doge Diner Screenshot" />
            <img class="pc-screenshot" src="img/projects/DogeDinerGP_02.png" alt="Doge Diner Screenshot" />
            <img class="pc-screenshot" src="img/projects/DogeDinerGP_03.png" alt="Doge Diner Screenshot" />
        </div>
        `, "#5a78af"),
    new ProjectData("project-3", "Zombie Body", "img/projects/zombiebody_cover.png", `
        <div class="paragraph">
            <strong>Zombie Body</strong> is a Unity-based 2D pixel-art puzzle adventure, focused on narrative-driven gameplay and riddle-solving mechanics. Built to emphasize both design and technical implementation, it includes:
            <ul>
            <li><strong>Custom Quest & Dialogue Systems:</strong> A branching quest framework and a robust dialogue engine that drives story progression through riddles</li>
            <li><strong>2D Pixel-Art Tilesets:</strong> Hand-designed environments featuring dynamic lighting and spatial audio for an immersive retro-inspired feel</li>
            <li><strong>Inventory & Journal Integration:</strong> Players track items, clues, and goals seamlessly through a unified interface</li>
            <li><strong>Narrative-Driven Gameplay:</strong> Story unfolds as riddles are solved, revealing the process of collecting hidden zombie parts</li>
            <li><strong>Collaborative Asset Creation:</strong> Assisted in designing tile-based levels and assets, showcasing art and level design abilities</li>
            </ul>
        </div>

        <div class="paragraph center">
            <a href="https://whynotprogram.itch.io/zombie-game" target="_blank">
                <img src="img/projects/Itch.IO.png" alt="itch.io button" />
            </a>
        </div>

        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/ZombiebodyGP_00.png" alt="Zombie Body Screenshot" />
            <img class="pc-screenshot" src="img/projects/ZombiebodyGP_01.png" alt="Zombie Body Screenshot" />
            <img class="pc-screenshot" src="img/projects/ZombiebodyGP_02.png" alt="Zombie Body Screenshot" />
            <img class="pc-screenshot" src="img/projects/ZombiebodyGP_03.png" alt="Zombie Body Screenshot" />
        </div>
        `, "#383838")
];
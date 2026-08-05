// All of the site's content lives here. Components below `src/components` are
// generic and simply render whatever this file describes.
//
// A project is rendered as a header card followed by a tabbed "projectInfo"
// panel. Each tab holds rows, each row holds cells, and each cell holds blocks
// (paragraphs, images, videos or links).

const p = (text, indent = false) => ({ kind: 'text', text, indent });
const img = (src, note) => ({ kind: 'image', src, note });
const video = (src, note) => ({ kind: 'video', src, note });
const link = (href, text) => ({ kind: 'link', href, text });

const cell = (flex, ...blocks) => ({ flex, blocks });
const row = (...cells) => cells;
const tab = (label, ...rows) => ({ label, rows });

export const about = {
  photo: { src: 'Resources/PortfolioPhotoCropped.JPG', alt: 'Photo of me' },
  paragraphs: [
    "Hello! Welcome to my website, I'm Jianwen Ding and I'm a programmer, game developer, and rising junior BSCS student in the University of Virginia.",
    "I love seeing interesting and fun ideas come to life, of course imagination always outpaces reality so you'll often see me in over my head while making games.",
    "I've been working and creating with computer science for about for about six years and have learned a lot in that time.",
    'I have dived into the lower level side of game development by working on C++ game engines as well as higher level side of it by creating games with Unity and C#. I have also excelled in school while working with Java and python.',
  ],
};

export const experience = [
  {
    id: 'stormflag',
    image: { src: 'Resources/SFLogoOnBlk.png', alt: 'The Logo of Storm Flag Games' },
    // The original page gave this entry a wider description column than the
    // standard project card.
    header: { titleFlex: '30%', descriptionFlex: '70%', descriptionPadding: 25 },
    title: 'Associate Game Engineer',
    subtitle: 'Storm Flag Games',
    meta: [{ label: 'Time Worked:', value: 'Jan 2025- June 2025' }],
    links: [],
    panelStyle: { height: '410px' },
    slidesStyle: { height: '300px' },
    tabs: [
      tab(
        'Overview',
        row(
          cell(
            '100%',
            p('- Worked on C++ based game client for a large scale MMO.'),
            p('- Debugged animation system of client.'),
            p('= Patched transparency handling,  removing crashes and animations spasms.', true),
            p('= Adjusted mousepicking to work with animated models.', true),
            p('= Implemented dirty flagging system for animating previously static objects.', true),
            p('- Patched SQLite save corruption bug and implemented save repair functionality.'),
            p("- Added Lua functions exposing more parts of the client's graphics engine to scripters.")
          )
        )
      ),
    ],
  },
  {
    id: 'indiecade',
    image: {
      src: 'Resources/IndiecadeLogo.jpg',
      alt: 'Title of the game Frogology',
      style: { width: '200px' },
    },
    title: 'Summer Game Design Intern',
    subtitle: 'IndieCade',
    meta: [{ label: 'Time Worked:', value: 'June 2025 - July 2025' }],
    links: [
      { type: 'itch', href: 'https://pakmanlie.itch.io/frogology' },
      { type: 'github', href: 'https://github.com/Jianwen-Ding/FrogGame' },
    ],
    tabs: [
      tab(
        'Overview',
        row(
          cell(
            '50%',
            video(
              'https://www.youtube.com/embed/J5hjX9ytMcQ?si=sBDZq_l5EPOij1wm',
              'Trailer created by my teammate Micah Ballard'
            )
          ),
          cell(
            '50%',
            p('- In the IndieCade Summer Game Design Internship, students participated in the 2024 Indiecade Climate Jam.'),
            p('- The internship also involved other tasks such as drafting plans on how to impact enviormental pursuits through the game.'),
            link('Resources/InternshipCertification.pdf', 'Internship Certification Letter')
          )
        ),
        row(
          cell(
            '50%',
            p('- Within the Climate Jam, I formed a team of 8 to develop the conservation simulator game Frogology.'),
            p('- The game was developed with Unity and C# by me and two other programmers.'),
            p('- The main gameplay loop involved learning more about nearby animals while catching them.')
          ),
          cell('50%', img('Resources/Credits.png', 'Credits of Frogology'))
        )
      ),
      tab(
        'Animal AI',
        row(
          cell(
            '50%',
            video(
              'https://www.youtube.com/embed/mTBWJssYyp8?si=uoYAvmasNQYnZQTj',
              'Demonstration of out of view animal AI'
            )
          ),
          cell(
            '50%',
            p('- I was in charge of was programming and designing the behavior of the animals.'),
            p('- Animals in Frogology are able to traverse a large map, gathering in points of intrest.'),
            p('- Animals dematerialize upon moving out of range and sight of player, allowing for animals to still traverse map without preforming physics calculations.')
          )
        ),
        row(
          cell(
            '50%',
            p('- Non-dematerialized animals generally go towards prey and away from predators.'),
            p('- Animals are able to avoid collisions while moving.'),
            p('- Animals can detect predator/prey that fall within a certain FOV or within a certain radius. This emulates the sight and hearing of animals.')
          ),
          cell(
            '50%',
            video(
              'https://www.youtube.com/embed/tumYVMTvu4g?si=d3e4tQZ5MNr0GUI-',
              'Demonstration of non-dematerialized animal AI'
            )
          )
        )
      ),
      tab(
        'Quest System',
        row(
          cell('50%', img('Resources/QuestShot.png', 'Editor representation of overarching quest flow')),
          cell(
            '50%',
            p('- I worked on the overarching branching quest system of the game.'),
            p('- I created a quest creation tool through the Unity Editor that displayed connections between quests and the contents of quests.'),
            p('- An editor tool for branching dialogue based on the completed quests was also completed by me.')
          )
        ),
        row(
          cell(
            '50%',
            p('- I integrated the quest system into most if not all of the progression in the game.'),
            p('- Abilities such as sleeping, going onto certain dialogue branches, and catching certain animals are locked behind quests.'),
            p('- A save system for quest progress and species logging process was also implemented.')
          ),
          cell('50%', img('Resources/SpeciesShot.png', 'A page of the Speciespedia'))
        )
      ),
    ],
  },
];

export const projects = [
  {
    id: 'skyline',
    image: { src: 'Resources/Skyline_SC2.png', alt: 'Screen shot of the skyline engine' },
    title: 'Skyline Engine',
    subtitle: 'C++ game engine with Vulkan and WebGPU renderer.',
    meta: [
      { label: 'Time Span:', value: 'Nov 2024- Current' },
      { label: 'Team Size:', value: '4 Person Project' },
    ],
    links: [{ type: 'github', href: 'https://github.com/melodicht/nu-ecs-prac/tree/abstraction_branch' }],
    tabs: [
      tab(
        'Overview',
        row(
          cell(
            '50%',
            video(
              'https://www.youtube.com/embed/9l6j0VRlfEA?si=Xlz4vhB3LCWLurtl',
              'A demonstration of a flight around a loaded map'
            )
          ),
          cell(
            '50%',
            p('- The eventual hope of this project is to create a general purpose game engine, but for now its just a vessel for team members of the project to explore what they find interesting.'),
            p('- My main role within this project was in helping create an entity component system and the WebGPU backend of the renderer.')
          )
        ),
        row(
          cell(
            '100%',
            p('- Using Dawn WebGPU I implemented cascaded shadow mapping, dynamically lowering shadow resolution of farther away objects.'),
            p('- Used dynamically scaling buffers and instanced rendering to improve performance.'),
            p('- I organized a shared interface between Vulkan and WebGPU renderers.'),
            p('- In CMake, I created system for building between Vulkan and WebGPU renderers.'),
            p('- Created initial draft of entity component system that was later expanded upon.')
          )
        )
      ),
    ],
  },
  {
    id: 'plane',
    image: { src: 'Resources/PlaneSC2.png', alt: 'Screen shot of the plane game' },
    title: 'Flight Render Project',
    subtitle: 'C++ and OpenGL project made to learn rendering.',
    meta: [
      { label: 'Time Span:', value: 'Sept 2024- Nov 2024' },
      { label: 'Team Size:', value: 'Personal Project' },
    ],
    links: [{ type: 'github', href: 'https://github.com/Jianwen-Ding/OpenGL_jam' }],
    tabs: [
      tab(
        'Overview',
        row(
          cell(
            '50%',
            video(
              'https://www.youtube.com/embed/U_eqFeLTLJ0?si=npyG2eKQNBWcyOSP',
              'A demonstration of a flight around a loaded map'
            )
          ),
          cell(
            '50%',
            p('- This program was made as a learning exercise into C++ and rendering as a whole.'),
            p('- The programs allows for the loading of models along with the insertion of different types of lights.')
          )
        ),
        row(
          cell(
            '50%',
            p('- This project was made with Visual Studio Code, OpenGL, GLSL, and C++.'),
            p('- Other libaries like SDL and Assimp were used.'),
            p('- Multiple models were loaded into the program from "The Models Resource."')
          ),
          cell('50%', img('Resources/PlaneSC.png'))
        )
      ),
      tab(
        'Concepts Explored',
        row(
          cell('50%', img('Resources/PlaneSC4.png', 'A overhead view of another section of the map I loaded')),
          cell(
            '50%',
            p('- I learned the basics of creating different vertex specification.'),
            p('- Lights of different types and fields were implemented through GLSL.'),
            p('- I used Assimp to process 3D models into valid vertices and textures to plug in.')
          )
        ),
        row(
          cell(
            '50%',
            p('- Allowed for loading of multiple textures onto meshes through Texture Arrays.'),
            p('- Created cube map texture to put together a skybox.'),
            p('- Applied Quaternions and Linear Algebra to apply transform matrices onto meshes.')
          ),
          cell(
            '50%',
            img('Resources/PlaneSC3.png', 'A demonstration of multiple lights and models being loaded in my program')
          )
        )
      ),
      tab(
        'Systems Created',
        row(
          cell(
            '50%',
            img(
              'Resources/PlaneSC5.png',
              'An example of multiple instances of the same map model created through the render manager system'
            )
          ),
          cell(
            '50%',
            p('- Created a overarching render manager that simplified the process of loading multiple instances of the same model and loading different types of lights.'),
            p('- A uv system automatically generated custom UVs for textures within texture arrays to offset any padding required.')
          )
        ),
        row(
          cell(
            '100%',
            p('- A transform class was made that homogenized the process of moving, rotating, and scaling lights and models.'),
            p('- Transform allows for parent transforms that set transformations relative to the parent transform.'),
            p('- Specular maps can be plugged into models to create differing levels of specular reflection on objects at different points.')
          )
        )
      ),
    ],
  },
  {
    id: 'strand',
    image: { src: 'Resources/StrandTitle.png', alt: 'Title of the game Strand' },
    title: 'Strand',
    subtitle: 'A survival rougelike about fending off zombies.',
    meta: [
      { label: 'Time Span:', value: '2022-2024' },
      { label: 'Team Size:', value: '9 person team for 2022, personal project for 2023-2024' },
    ],
    links: [
      { type: 'itch', href: 'https://pakmanlie.itch.io/strand' },
      { type: 'github', href: 'https://github.com/Jianwen-Ding/Strand' },
    ],
    tabs: [
      tab(
        'Overview',
        row(
          cell('50%', video('https://www.youtube.com/embed/RQizr_ux7TU?si=CIPC6h0bUPZZyO6u', 'A clip of me playing Strand')),
          cell(
            '50%',
            p('- Strand was initially created as a club project of a game development club I founded.'),
            p('- Initially, the project was worked on during club meeting hours by a group of about 9 people but I continued to work on it individually after my graduation.'),
            p("- During this project's time as a club project, I was project lead and directed art and music.")
          )
        ),
        row(
          cell(
            '50%',
            p('- This project was made in C# Unity, with Github as the source control.'),
            p('- The main gameplay loop of this game involves collecting scrap while fending off zombies.'),
            p('- Most of my work in this game involves programming and art.')
          ),
          cell('50%', img('Resources/StrandSShot2.png'))
        )
      ),
      tab(
        'Map Generation',
        row(
          cell('50%', img('Resources/SampleMapScreenShot.png', 'An example of a generated map')),
          cell(
            '50%',
            p('- I programmed the randomly generating map that Strand takes place in.'),
            p('- The map is done in a room based system where each room in the map is assigned a difficulty number, function, and opening directions at the start.'),
            p('- Resource rooms are distributed at certain "dead ends" to prevent aimless wandering.')
          )
        ),
        row(
          cell(
            '50%',
            p('- The map itself is simply a grid of connected rooms.'),
            p('- I created a text proccessor that takes values from a .txt file and turns them into layouts.'),
            p('- Rooms are randomly assigned a layout with corresponding to the opening, function, and difficulty values.')
          ),
          cell('50%', img('Resources/GridEditorScreenShot.png', 'Some text from the custom grid editor'))
        )
      ),
      tab(
        'Enemy Behavior',
        row(
          cell('50%', img('Resources/EnemyDisplay.png', 'Display of all enemies within the game')),
          cell(
            '50%',
            p('- I handled enemy behavior design and development.'),
            p('- All of the enemies have a shared base class, as most of them have finite hp, the ability to be grabbed, and a stun state.'),
            p('- This collectively makes the process of creating unique enemies much simpler.')
          )
        ),
        row(
          cell(
            '50%',
            p('- 5 unique types of enemies were created by me.'),
            p('- They all have unique movement patterns in trying to get to or damage the player.'),
            p('- These behaviors range from walking to player to flying around player and shooting projectiles.')
          ),
          cell('50%', img('Resources/EnemyBehaviorSC.png'))
        )
      ),
      tab(
        'Weapons/Art',
        row(
          cell('50%', img('Resources/WeaponsDisplay.png', 'Display of all weapons within the game')),
          cell(
            '50%',
            p('- I created programmed weapons into the game.'),
            p('- Weapons in the game are divided into golden scrap and normal scrap.'),
            p('- Golden scrap have unusual properties like allowing for telportation or shooting projectiles.')
          )
        ),
        row(
          cell(
            '50%',
            p('- Base scrap resuse the same code but with modified values *e.g. one basic weapon stuns a bit longer while another does more damage*.'),
            p('- I made a sizeable chunk of the art in this game us the pixel editor Piskel.'),
            p("- My work included menu's, half the of enemy animations, and tile sprites.")
          ),
          cell('50%', img('Resources/MenuArtSample.gif'))
        )
      ),
    ],
  },
  {
    id: 'hunter',
    image: { src: 'Resources/HeadhunterTitle.png', alt: 'Title of the game Headhuter' },
    title: 'Head Hunters',
    subtitle: 'A funk themed turn based strategy game.',
    meta: [
      { label: 'Time Span:', value: '2021-2022' },
      { label: 'Team Size:', value: 'Personal Project' },
    ],
    links: [
      { type: 'itch', href: 'https://pakmanlie.itch.io/head-hunters' },
      { type: 'github', href: 'https://github.com/Jianwen-Ding/AgentRpg' },
    ],
    tabs: [
      tab(
        'Overview',
        row(
          cell(
            '50%',
            video(
              'https://www.youtube.com/embed/Lp9SjmDYSGU?si=vYU0L4hQaZagjNF9',
              'A short example video of me playing Head Hunters'
            )
          ),
          cell(
            '50%',
            p("- Headhunter's is a personal project I started and finished in highschool."),
            p('- The game was made in Unity and C# with Github as the source control.'),
            p("- Headhunter's is a strategy game where the player controls three characters to fight against bosses.")
          )
        ),
        row(
          cell(
            '50%',
            p('- A total of 6 bosses were created for this game.'),
            p('- The player can command each character to either shoot, use a special move, or move to an adjacent tile.'),
            p('- Opposing bosses can do all of the same actions as players can.')
          ),
          cell('50%', img('Resources/HunterSShot2.png'))
        )
      ),
      tab(
        'Turn/Move System',
        row(
          cell('50%', img('Resources/ChaosScreenshot.png')),
          cell(
            '50%',
            p('- A turn system was created that allowed for a que of events and actions to be inserted.'),
            p('- This allowed players and enemies to perform their actions, allowed for queing status effects, and allowed for the displaying of special messages.')
          )
        ),
        row(
          cell(
            '50%',
            p('- Both enemies and players have access to special moves.'),
            p('- These special moves range from reducing the speed of enemies to rigging another character to explode in a set amount of turns.'),
            p('- When the player first selects any special move, tiles that these special moves can be cast on and can affect are highlighted.')
          ),
          cell('50%', img('Resources/MovelistScreenshot.png', 'The move selection screen'))
        )
      ),
      tab(
        'Enemy Behavior',
        row(
          cell('50%', img('Resources/Strike Screenshot.png', 'These enemies moves and attacks exactly like a knight in chess')),
          cell(
            '50%',
            p('- The enemies in this game have all of the same abilities that a player character so a common behvaior system is needed.'),
            p('- Actions are chosen based on which has the most priority points given to it.'),
            p('- Priority is affected by the type of action and the path taken before preforming the action.')
          )
        ),
        row(
          cell(
            '50%',
            p('- Enemies are able to consider movement properties and offensive range of special moves while traversing the battlefield.'),
            p('- Special moves can be adjusted to give more priority in unique scenarios.'),
            p('- Changing values on priority calculations creates new behaviors without changing code.')
          ),
          cell('50%', img('Resources/DashScreenshot.png', 'Enemy boss escaping by using movement ability'))
        )
      ),
      tab(
        'Art/Music',
        row(
          cell('50%', img('Resources/Totally Real _Lizard_.png')),
          cell(
            '50%',
            p("- All of the animations were done by me by plugging in illustrations from google draw through Unity's animation system."),
            p('- The music was done through Musescore and leaned very heavily into funk and rock music.')
          )
        ),
        row(
          cell(
            '50%',
            p('- The game itself has multiple elements inspired from music from those generes too.'),
            p('- The name of the game itself is taken from the album "Head Hunters" by Herbie Hancock.'),
            p('- Many bosses were themed after albums or musical artists I liked at the time.')
          ),
          cell('50%', img('Resources/ChessGraveYard.png'))
        )
      ),
    ],
  },
  {
    id: 'velvet',
    image: { src: 'Resources/VelvetTitle.png', alt: 'Title of the game Velvet', style: { width: '384px' } },
    title: 'Velvet',
    subtitle: 'An action platformer revolving around hookshots.',
    meta: [
      { label: 'Time Span:', value: '2019-2020' },
      { label: 'Team Size:', value: 'Personal Project' },
    ],
    links: [{ type: 'itch', href: 'https://pakmanlie.itch.io/velvet' }],
    tabs: [
      tab(
        'Overview',
        row(
          cell('50%', img('Resources/VelvetSC.png')),
          cell(
            '50%',
            p('- This game was made in Unity and with C#.'),
            p('- The main gameplay loop is that the player dodges bullets while shooting and meleeing enemies.'),
            p('The hookshot is simply a tag that pulls the players towards it.')
          )
        ),
        row(
          cell(
            '50%',
            p('- A total of 11 levels were made and designed along with three enemy types.'),
            p('- Enemies attack by shooting at the player while offsetting the angle by a random amount.'),
            p('- A save system for level progression and collectible coins was created for this game.')
          ),
          cell('50%', img('Resources/VelvetSC2.png'))
        )
      ),
    ],
  },
];

export const jams = [
  {
    id: 'riptide',
    image: { src: 'Resources/RiptideTitle.png', alt: 'Title of the game Riptide Gardens' },
    title: 'Riptide Gardens',
    subtitle: 'A farming game with a constantly shifting base.',
    meta: [
      { label: 'Time Span:', value: '1 week in 2024' },
      { label: 'Team Size:', value: '3 people' },
    ],
    links: [
      { type: 'itch', href: 'https://pakmanlie.itch.io/riptide-gardens' },
      { type: 'github', href: 'https://github.com/nugamestudioclub/planting-game-spring-24' },
    ],
    tabs: [
      tab(
        'Overview',
        row(
          cell('50%', img('Resources/RiptideScreenShot.png')),
          cell(
            '50%',
            p('- Riptide Gardens was originally made for the "Spring 2D Jam \'24" but ended up requiring more than the three days provided.'),
            p('- The game was made with Unity and C# with Github as the source control.'),
            p('- The premise of the game is to escape starvation by planting a garden on an ever-shifting island.')
          )
        ),
        row(
          cell(
            '50%',
            p('- 10 different plants were created all with different properties.'),
            p('- Plants range from basic food producers to plants that help or sabotage nearby plants'),
            p('- All plants have the same base properties including producing food at set times and not being able to be placed in water.')
          ),
          cell('50%', img('Resources/RiptideScreenShot2.png'))
        )
      ),
    ],
  },
  {
    id: 'remenant',
    image: { src: 'Resources/RemenantTitle.png', alt: "Title of the game Remanent of Davy's Crew" },
    title: "Remanent of Davy's Crew",
    subtitle: 'A horror game based around fending off ghosts.',
    meta: [
      { label: 'Time Span:', value: '2 days in 2024' },
      { label: 'Team Size:', value: '3 people' },
    ],
    links: [
      { type: 'itch', href: 'https://pakmanlie.itch.io/remenant-of-davys-crew' },
      { type: 'github', href: 'https://github.com/nugamestudioclub/huskyjame-lighthouse' },
    ],
    tabs: [
      tab(
        'Overview',
        row(
          cell('50%', img('Resources/RemenantSC.png')),
          cell(
            '50%',
            p('- This game was made for the 2024 Husky Jam and made with the theme "Lighthouse.'),
            p('- The game was made with me and two other programmers through Unity and C# with Github as the source control.'),
            p('- I created the ship, sea monster, and ghost ship AI, along with the overall level system of the game.')
          )
        ),
        row(
          cell(
            '50%',
            p('- Ships move toward lighthouse beams.'),
            p('- Sea monsters wreck lighthouses and are repulsed by light.'),
            p('- Ghost ships act like normal ships until they are revealed by being shone on and subsequently attempt to invade the lighthouse.')
          ),
          cell('50%', img('Resources/RemenantSC2.png'))
        )
      ),
    ],
  },
  {
    id: 'checkin',
    image: { src: 'Resources/CheckInTitle.png', alt: 'Title of the game Spooder Ball' },
    title: 'Checking In',
    subtitle: 'A starical hopsital clerk simulator.',
    meta: [
      { label: 'Time Span:', value: '2 days in 2023' },
      { label: 'Team Size:', value: '6 people' },
    ],
    links: [
      { type: 'itch', href: 'https://austinszema.itch.io/checking-in' },
      { type: 'github', href: 'https://github.com/nugamestudioclub/hospital-ludum-dare-54' },
    ],
    tabs: [
      tab(
        'Overview',
        row(
          cell('50%', img('Resources/CheckInSC.png')),
          cell(
            '50%',
            p('- This was made for Ludum Dare 54 and made to comply to the theme "Limited Space".'),
            p('- The game was made with Unity and C# with Github as the source control.'),
            p('- The game has the player decide to either admit, waitlist, or reject a que of patients.')
          )
        ),
        row(
          cell(
            '50%',
            p('- I worked with patient data made by a teammate to create a patient generator that produces patients with randomized attributes.'),
            p('- I created the room vacancy and waitlist system that determines if a patient is able to be admitted.'),
            p('- I polished up a notification system made by another programmer.')
          ),
          cell('50%', img('Resources/CheckInSC2.png'))
        )
      ),
    ],
  },
  {
    id: 'combo',
    image: { src: 'Resources/ComboTitle.png', alt: 'Title of the game Combo Infinity' },
    title: 'Combo Infinity',
    subtitle: 'A fighting game based on maintaining a combo.',
    meta: [
      { label: 'Time Span:', value: '2 days in 2024' },
      { label: 'Team Size:', value: 'Personal Project' },
    ],
    links: [{ type: 'itch', href: 'https://pakmanlie.itch.io/combo-infinity' }],
    tabs: [
      tab(
        'Overview',
        row(
          cell('50%', img('Resources/ComboInftySC.png')),
          cell(
            '50%',
            p('- This game was made for Ludum Dare 46 and adhered to the theme "Keep it Alive".'),
            p('- The game was made with Unity and C# with Github as the source control.')
          )
        ),
        row(
          cell(
            '50%',
            p('- Combo Infinity is a fighting game based on keeping a combo alive until a set amount of hits are reached.'),
            p('- Six different levels were designed and implemented around this concept of perpetuating a combo while avoiding moving hazards.')
          ),
          cell('50%', img('Resources/ComboInftySC2.png'))
        )
      ),
    ],
  },
  {
    id: 'spooder',
    image: { src: 'Resources/SpooderTitle.jpg', alt: 'Title of the game Spooder Ball' },
    title: 'Spooder Ball',
    subtitle: 'An arcade survival game where the player slams bugs together.',
    meta: [
      { label: 'Time Span:', value: '2 days in 2020' },
      { label: 'Team Size:', value: '2 people' },
    ],
    links: [{ type: 'itch', href: 'https://pakmanlie.itch.io/spooder-ball' }],
    tabs: [
      tab(
        'Overview',
        row(
          cell('50%', img('Resources/SpooderBallSC.png')),
          cell(
            '50%',
            p('- This was made for the "GMTK 2021" game jam and complies with the theme "Joined Together".'),
            p('- The game was made with Unity and C# with Github as the source control.'),
            p('- In this game, the player controls a spider with the abilities to smash other bugs together and throw those bugs at enemies as a ball while surviving as long as possible.')
          )
        ),
        row(
          cell(
            '50%',
            p('- Six unique types of enemies and a progressive difficulty system was implemented for this game.'),
            p('- A webbing system that checks if the player is between two webbed enemies was established.')
          ),
          cell('50%', img('Resources/SpooderBallSC2.png'))
        )
      ),
    ],
  },
];

// Menu drop-downs. Each drop-down is a list of rows so the original grid
// groupings (three across, then two across, ...) are preserved.
export const menuSections = [
  {
    id: 'experienceDrag',
    label: 'Experience',
    href: '#experience',
    dragClass: 'experienceDrag',
    rows: [
      [
        { label: 'Associate Game Engineer', href: '#stormflag', src: 'Resources/SFLogoOnBlk.png', alt: 'Strand Title Screen' },
        { label: 'Summer Game Design Intern', href: '#indiecade', src: 'Resources/IndiecadeLogo.jpg', alt: 'Plane Game Title Screen' },
      ],
    ],
  },
  {
    id: 'projectsDrag',
    label: 'Projects',
    href: '#projects',
    dragClass: 'gameDrag',
    rows: [
      [
        { label: 'Strand', href: '#strand', src: 'Resources/StrandTitle.png', alt: 'Strand Title Screen' },
        { label: 'Plane Render', href: '#plane', src: 'Resources/PlaneSC2.png', alt: 'Plane Game Title Screen' },
        { label: 'Skyline Engine', href: '#skyline', src: 'Resources/Skyline_SC.png', alt: 'Plane Game Title Screen' },
      ],
      [
        { label: 'Head Hunters', href: '#hunter', src: 'Resources/HeadhunterTitle.png', alt: 'Headhunter Title Screen' },
        { label: 'Velvet', href: '#velvet', src: 'Resources/VelvetTitle.png', alt: 'Velvet Title Screen' },
      ],
    ],
  },
  {
    id: 'jamsDrag',
    label: 'Game Jams',
    href: '#jams',
    dragClass: 'jamsDrag',
    rows: [
      [
        { label: 'Riptide Gardens', href: '#riptide', src: 'Resources/RiptideTitle.png', alt: 'Riptide Gardens Title Screen' },
        { label: "Remanent of Davy's Crew", href: '#remenant', src: 'Resources/RemenantTitle.png', alt: "Remanent of Davy's crew Title Screen" },
      ],
      [
        { label: 'Checking In', href: '#checkin', src: 'Resources/CheckInTitle.png', alt: 'Checking In Title Screen' },
        { label: 'Combo Infinity', href: '#combo', src: 'Resources/ComboTitle.png', alt: 'Combo Infinity Title Screen' },
        { label: 'Spooder Ball', href: '#spooder', src: 'Resources/SpooderTitle.jpg', alt: 'Spooder Ball Title Screen' },
      ],
    ],
  },
];

export const socials = [
  { href: 'https://pakmanlie.itch.io/', src: 'Resources/Logos/itchLog.png', alt: 'Itch io logo' },
  { href: 'https://www.linkedin.com/in/jianwen-ding/', src: 'Resources/Logos/LinkedInLog.png', alt: 'LinkedIn logo' },
  { href: 'https://github.com/Jianwen-Ding', src: 'Resources/Logos/gitLog.png', alt: 'Github logo' },
];

export const contact = {
  email: 'mailto:jianwen_ding@icloud.com',
  resume: 'Resources/Resume Base 2025.pdf',
};

export const LINK_LOGOS = {
  itch: { src: 'Resources/Logos/itchLogGrey.png', alt: 'Logo of Itch io' },
  github: { src: 'Resources/Logos/gitLogGrey.png', alt: 'Logo of Github' },
};

// All of the site's content lives here. Components below `src/components` are
// generic and simply render whatever this file describes.
//
// Each entry carries a `tabs` list describing its detail. A tab holds rows, a
// row holds cells, and a cell holds blocks (lists, paragraphs, images, videos
// or links). Tabs render stacked under sub-headings; a lone tab renders with no
// heading, which is the usual case now that every entry is kept to roughly one
// screen. Add a second tab if an entry outgrows that.

// `list` renders a real <ul>. Entries are plain strings, or `item(parent, ...children)`
// when a point needs sub-points, which nests a second <ul> inside the <li>.
const list = (...items) => ({ kind: 'list', items });
const item = (text, ...children) => ({ text, children });

const p = (text) => ({ kind: 'text', text });
const img = (src, note) => ({ kind: 'image', src, note });
const video = (src, note) => ({ kind: 'video', src, note });
const link = (href, text) => ({ kind: 'link', href, text });

const cell = (flex, ...blocks) => ({ flex, blocks });
const row = (...cells) => cells;
const tab = (label, ...rows) => ({ label, rows });

export const about = {
  photo: { src: 'Resources/PortfolioPhotoCropped.JPG', alt: 'Photo of me' },
  // Square artwork shown opposite the intro. It is masked into a circular fade,
  // so the subject should sit near the centre. Swap the src to replace it.
  showcase: { src: 'Resources/HeroPlaceholder.svg', alt: '' },
  paragraphs: [
    "Hello! I'm Jianwen Ding, a programmer, game developer and rising junior BSCS student at the University of Virginia.",
    "I love seeing interesting ideas come to life, and since imagination always outpaces reality you'll often find me in over my head while making games.",
    'I work at the low level on C++ game engines and at the high level building games in Unity and C#, alongside Java and Python for coursework.',
  ],
};

export const experience = [
  {
    id: 'stormflag',
    image: { src: 'Resources/SFLogoOnBlk.png', alt: 'The logo of Storm Flag Games' },
    title: 'Associate Game Engineer',
    subtitle: 'Storm Flag Games',
    meta: [{ label: 'Time Worked:', value: 'Jan 2025 - June 2025' }],
    links: [],
    tabs: [
      tab(
        'Overview',
        row(
          cell(
            '100%',
            list(
              'Worked on the C++ game client for a large scale MMO.',
              item(
                'Debugged the animation system of the client.',
                'Patched transparency handling, removing crashes and animation spasms.',
                'Adjusted mousepicking to work with animated models.',
                'Implemented a dirty flagging system for animating previously static objects.'
              ),
              'Patched an SQLite save corruption bug and implemented save repair functionality.',
              "Added Lua functions exposing more of the client's graphics engine to scripters."
            )
          )
        )
      ),
    ],
  },
  {
    id: 'indiecade',
    image: { src: 'Resources/IndiecadeLogo.jpg', alt: 'The logo of IndieCade' },
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
              'Trailer by my teammate Micah Ballard'
            )
          ),
          cell(
            '50%',
            list(
              'Interns took part in the 2024 IndieCade Climate Jam, alongside work like drafting plans for how a game can push environmental causes.',
              'Within the jam I formed a team of 8 to build Frogology, a conservation simulator made in Unity and C# by me and two other programmers.',
              'The loop has you learning about nearby animals while catching them. I owned the animal behaviour and the quest system.'
            )
          )
        ),
        row(
          cell(
            '50%',
            list(
              'Animals traverse the map toward points of interest, moving toward prey and away from predators.',
              'They detect each other within a field of view or a radius, emulating sight and hearing, and avoid collisions as they move.',
              'Out of range and out of sight, animals dematerialize, so the map keeps living without paying for the physics.'
            )
          ),
          cell(
            '50%',
            video(
              'https://www.youtube.com/embed/mTBWJssYyp8?si=uoYAvmasNQYnZQTj',
              'Out of view animal AI'
            )
          )
        ),
        row(
          cell('50%', img('Resources/QuestShot.png', 'Editor view of the overarching quest flow')),
          cell(
            '50%',
            list(
              'Built the overarching branching quest system, plus a Unity editor tool laying out quest connections and contents visually.',
              'An editor tool for dialogue that branches on completed quests came out of the same work.',
              'Gated most progression behind it: sleeping, dialogue branches and catching certain animals, with saving for quest and species progress.'
            )
          )
        )
      ),
    ],
  },
];

export const projects = [
  {
    id: 'skyline',
    image: { src: 'Resources/Skyline_SC2.png', alt: 'Screen shot of the Skyline engine' },
    title: 'Skyline Engine',
    subtitle: 'C++ game engine with Vulkan and WebGPU renderers.',
    meta: [
      { label: 'Time Span:', value: 'Nov 2024 - Current' },
      { label: 'Team Size:', value: '4 people' },
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
              'Flying around a loaded map'
            )
          ),
          cell(
            '50%',
            list(
              'A general purpose engine in the long run, and for now a place for the team to dig into whatever each of us finds interesting.',
              'My part was the WebGPU backend of the renderer and the entity component system.'
            )
          )
        ),
        row(
          cell(
            '50%',
            list(
              'Using Dawn WebGPU, implemented cascaded shadow mapping that drops shadow resolution for objects further away.',
              'Used dynamically scaling buffers and instanced rendering to improve performance.',
              'Organised a shared interface between the Vulkan and WebGPU renderers, and the CMake system for building against either.',
              'Created the initial draft of the entity component system that the team later expanded on.'
            )
          ),
          cell('50%', img('Resources/Skyline_SC.png', 'A loaded scene in the engine'))
        )
      ),
    ],
  },
  {
    id: 'plane',
    image: { src: 'Resources/PlaneSC2.png', alt: 'Screen shot of the flight render project' },
    title: 'Flight Render Project',
    subtitle: 'C++ and OpenGL project made to learn rendering.',
    meta: [
      { label: 'Time Span:', value: 'Sept 2024 - Nov 2024' },
      { label: 'Team Size:', value: 'Personal project' },
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
              'Flying around a loaded map'
            )
          ),
          cell(
            '50%',
            list(
              'A learning exercise in C++ and rendering as a whole: the program loads models and lets you insert lights of different types.',
              'Built with Visual Studio Code, OpenGL, GLSL and C++, using SDL and Assimp. Models were pulled from The Models Resource.'
            )
          )
        ),
        row(
          cell('50%', img('Resources/PlaneSC4.png', 'An overhead view of a loaded map')),
          cell(
            '50%',
            list(
              'Learned the basics of vertex specification, and implemented lights of different types and fields through GLSL.',
              'Used Assimp to process 3D models into usable vertices and textures, and texture arrays to load several textures onto one mesh.',
              'Built a cube map texture for the skybox, and applied quaternions and linear algebra for transform matrices.'
            )
          )
        ),
        row(
          cell(
            '50%',
            list(
              'Wrote a render manager that simplifies loading many instances of a model and different light types.',
              'A UV system automatically generates custom UVs for texture arrays, offsetting whatever padding is required.',
              'A transform class homogenises moving, rotating and scaling, with parent transforms for relative placement, and specular maps vary reflection across a model.'
            )
          ),
          cell('50%', img('Resources/PlaneSC3.png', 'Multiple lights and models loaded at once'))
        )
      ),
    ],
  },
  {
    id: 'strand',
    image: { src: 'Resources/StrandTitle.png', alt: 'Title of the game Strand' },
    title: 'Strand',
    subtitle: 'A survival roguelike about fending off zombies.',
    meta: [
      { label: 'Time Span:', value: '2022 - 2024' },
      { label: 'Team Size:', value: '9 people, then personal from 2023' },
    ],
    links: [
      { type: 'itch', href: 'https://pakmanlie.itch.io/strand' },
      { type: 'github', href: 'https://github.com/Jianwen-Ding/Strand' },
    ],
    tabs: [
      tab(
        'Overview',
        row(
          cell(
            '50%',
            video('https://www.youtube.com/embed/RQizr_ux7TU?si=CIPC6h0bUPZZyO6u', 'A clip of me playing Strand')
          ),
          cell(
            '50%',
            list(
              'Started as a project of a game development club I founded, worked on during meetings by about 9 people, and continued solo after my graduation.',
              'Made in Unity and C# with Github for source control. The loop is collecting scrap while fending off zombies.',
              'I was project lead and directed art and music, and drew a good share of the pixel art myself in Piskel: menus, half the enemy animations and tile sprites.'
            )
          )
        ),
        row(
          cell('50%', img('Resources/SampleMapScreenShot.png', 'An example of a generated map')),
          cell(
            '50%',
            list(
              'Programmed the randomly generating map: a grid of rooms, each assigned a difficulty, function and set of opening directions.',
              'Wrote a text processor that turns values in a .txt file into room layouts, which rooms are then assigned at random to match their openings, function and difficulty.',
              'Resource rooms are placed at certain dead ends to stop aimless wandering.'
            )
          )
        ),
        row(
          cell(
            '50%',
            list(
              'Handled enemy behaviour design and development: 5 unique types on a shared base class giving them finite hp, a stun state and the ability to be grabbed.',
              'Their movement ranges from walking at the player to flying around them and firing projectiles.',
              'Programmed the weapons too, split between normal scrap and golden scrap, the latter with unusual properties like teleportation or projectiles.'
            )
          ),
          cell('50%', img('Resources/EnemyDisplay.png', 'Every enemy in the game'))
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
            list(
              "Made for the Spring 2D Jam '24 in Unity and C#: escape starvation by planting a garden on an ever-shifting island.",
              'Built 10 plants sharing a base of timed food production and no water placement, from plain producers to ones that help or sabotage their neighbours.'
            )
          )
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
            list(
              'Made for the 2024 Husky Jam on the theme "Lighthouse", in Unity and C# with two other programmers.',
              'I wrote the ship, sea monster and ghost ship AI plus the level system: ships steer toward lighthouse beams, monsters wreck lighthouses and are repelled by light, and ghost ships pass as normal until lit.'
            )
          )
        )
      ),
    ],
  },
  {
    id: 'checkin',
    image: { src: 'Resources/CheckInTitle.png', alt: 'Title of the game Checking In' },
    title: 'Checking In',
    subtitle: 'A satirical hospital clerk simulator.',
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
            list(
              'Made for Ludum Dare 54 on the theme "Limited Space": admit, waitlist or reject a queue of patients.',
              "Built the patient generator on top of a teammate's data, and the room vacancy and waitlist system deciding who can be admitted."
            )
          )
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
      { label: 'Team Size:', value: 'Personal project' },
    ],
    links: [{ type: 'itch', href: 'https://pakmanlie.itch.io/combo-infinity' }],
    tabs: [
      tab(
        'Overview',
        row(
          cell('50%', img('Resources/ComboInftySC.png')),
          cell(
            '50%',
            list(
              'Made for Ludum Dare on the theme "Keep it Alive", in Unity and C#.',
              'Keep a combo alive until a target hit count, across six levels designed around perpetuating it while dodging moving hazards.'
            )
          )
        )
      ),
    ],
  },
];

export const socials = [
  { href: 'https://github.com/Jianwen-Ding', label: 'Github', src: 'Resources/Logos/gitLog.png', alt: 'Github logo' },
  { href: 'https://www.linkedin.com/in/jianwen-ding/', label: 'LinkedIn', src: 'Resources/Logos/LinkedInLog.png', alt: 'LinkedIn logo' },
  { href: 'https://pakmanlie.itch.io/', label: 'itch.io', src: 'Resources/Logos/itchLog.png', alt: 'Itch io logo' },
];

export const contact = {
  email: 'mailto:jianwen_ding@icloud.com',
  resume: 'Resources/Resume Base 2025.pdf',
};

export const LINK_LOGOS = {
  itch: { src: 'Resources/Logos/itchLogGrey.png', alt: 'Logo of Itch io' },
  github: { src: 'Resources/Logos/gitLogGrey.png', alt: 'Logo of Github' },
};

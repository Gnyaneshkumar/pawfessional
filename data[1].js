/* ═══════════════════════════════════════════════════════
   PawedIn – App Data
   All static data: dogs, posts, jobs, skills, trending
═══════════════════════════════════════════════════════ */

const dogs = [
  { emoji: '🐩', name: 'Duchess Fluffington',  role: 'Chief Bork Officer at Bork & Associates',    breed: 'Poodle',           location: 'Pawris, France'       },
  { emoji: '🐕', name: 'Rex Thunderpaws',       role: 'Senior Squirrel Analyst · LinkedIn Influencer', breed: 'German Shepherd',  location: 'Woofinton D.C.'       },
  { emoji: '🦮', name: 'Sir Woofs-a-Lot',       role: 'Certified Belly Rub Consultant',             breed: 'Golden Retriever', location: 'Sniffsylvania'         },
  { emoji: '🐕‍🦺', name: 'Agent Patches',       role: 'Head of Security (The Mailman Dept.)',       breed: 'Border Collie',    location: 'Barkshire, UK'         },
  { emoji: '🐾', name: 'Noodles McBork',         role: 'Freelance Zoomies Choreographer',            breed: 'Dachshund',        location: 'Remote (couch-based)'  },
  { emoji: '🐶', name: 'Princess Wagsworth',    role: 'VP of Park Operations',                      breed: 'Corgi',            location: 'Canineshire'           },
  { emoji: '🦴', name: 'Bruno Slobberstein',    role: 'Full Stack Fetch Engineer',                  breed: 'Labrador',         location: 'Silicon Woof Valley'   },
  { emoji: '🐩', name: 'Coco Pawcasso',         role: 'Chief Creative Woofficer',                   breed: 'Dalmatian',        location: 'New Bork City'         },
];

const requestDogs = [
  { emoji: '🐕', name: 'Max Borkington',    role: 'Entrepreneur · 12 mutual friends',        breed: 'Beagle',    location: 'Woofshire'   },
  { emoji: '🐶', name: 'Bella Snootikins',  role: 'Executive Napper at Couch Inc.',          breed: 'Shih Tzu',  location: 'Napville'    },
  { emoji: '🦴', name: 'Doggo Von Derpface',role: 'Professional Tennis Ball Hoarder',        breed: 'Boxer',     location: 'Derp Springs' },
];

const posts = [
  {
    emoji: '🐕',
    author: 'Rex Thunderpaws',
    role: 'Senior Squirrel Analyst',
    time: '2 hours ago',
    text: `🚨 Hot take: Squirrels are NOT to be trusted. I have been surveilling the oak tree in my backyard for 3 years now and my data is conclusive. Thread below 🧵\n\n1/7: Initial sighting confirmed at 07:42. Subject was carrying an acorn.\n2/7: The acorn was DEFINITELY suspicious.\n\n#SquirrelWatch #DataDrivenBarking #OpenToWork`,
    likes: 482, comments: 93, reposts: 47,
    emoji_post: '🐿️'
  },
  {
    emoji: '🦮',
    author: 'Sir Woofs-a-Lot',
    role: 'Certified Belly Rub Consultant',
    time: '5 hours ago',
    text: `Excited to announce that I've just accepted a new position as Head of Couch Operations at The Henderson Household! 🎉\n\nAfter careful deliberation (and smelling literally every corner), I feel this is the right pack for me.\n\nThank you to everyone who sent treats during my job search. The belly rubs were also very appreciated.\n\n#NewChapter #OpenToSniffs #GratefulPaws`,
    likes: 1203, comments: 211, reposts: 88
  },
  {
    emoji: '🐩',
    author: 'Duchess Fluffington',
    role: 'Chief Bork Officer',
    time: 'Yesterday',
    text: `Unpopular opinion: Fetch is not scalable.\n\nI have been playing fetch for 6 years. The humans throw the ball. I bring it back. EVERY. SINGLE. TIME.\n\nWhere is my equity? Where is my exit strategy? I am literally doing all the running.\n\nI've compiled a 47-slide deck. DM me if you want the full analysis.\n\n#StartupMindset #FetchEconomy #DisruptingPetcare`,
    likes: 2847, comments: 543, reposts: 312
  },
  {
    emoji: '🐕‍🦺',
    author: 'Agent Patches',
    role: 'Head of Security',
    time: '2 days ago',
    text: `Leadership lesson I learned from the mailman incident of 2023:\n\nSometimes the threat you spend all your energy barking at... is just a guy doing his job.\n\nStill watching him though.\n\n#Leadership #Vigilance #TrustButVerify`,
    likes: 5102, comments: 820, reposts: 650
  },
];

const trending = [
  { tag: '#FetchEconomy',    count: '12,400 barks' },
  { tag: '#SquirrelWatch',   count: '8,900 barks'  },
  { tag: '#OpenToSniffs',    count: '6,200 barks'  },
  { tag: '#GoodBoyCareer',   count: '4,800 barks'  },
  { tag: '#ZoomiesStrategy', count: '3,100 barks'  },
];

const suggestions = [
  { emoji: '🐾', name: 'Noodles McBork',      role: 'Freelance Zoomies Choreographer' },
  { emoji: '🐶', name: 'Princess Wagsworth',  role: 'VP of Park Operations'           },
  { emoji: '🦴', name: 'Bruno Slobberstein',  role: 'Full Stack Fetch Engineer'        },
];

const jobs = [
  {
    logo: '🏡',
    company: 'The Chen Household',
    title: 'Full-Time Good Boy / Girl',
    location: 'Remote (Couch-based)',
    type: 'Full-time',
    salary: '💎 Unlimited Treats',
    posted: '2 days ago',
    about: 'We are a fast-growing household of 4 looking for an enthusiastic, tail-wagging team member to join our family unit. Must be willing to perform zoomies on demand.',
    requirements: [
      'Proven track record of being a good boy/girl',
      'Ability to bark at the doorbell (mandatory)',
      'Experience with unconditional love',
      'Willing to wear a sweater in winter',
    ],
    benefits: [
      'Daily walks (2x)',
      'Premium kibble',
      'Belly rubs upon request',
      'Own spot on the couch (negotiable)',
    ],
  },
  {
    logo: '🌳',
    company: 'Bark Park Corp.',
    title: 'Squirrel Surveillance Analyst',
    location: 'Bark Park, Bonesbury',
    type: 'On-site',
    salary: '🦴 Bone-based comp',
    posted: '3 days ago',
    about: 'Join our world-class surveillance team monitoring squirrel activity across 6 parks. We process 500+ squirrel sightings per day and need a sharp nose to keep us safe.',
    requirements: [
      '3+ years squirrel detection experience',
      'Excellent stamina for sustained barking',
      'Strong nose-to-ground analytics',
      'Must pass background smell check',
    ],
    benefits: [
      'Company tennis balls',
      'Mud puddle access',
      'Annual Fetch retreat',
      'Premium flea treatment',
    ],
  },
  {
    logo: '🚗',
    company: 'Pawber (Dog Rideshare)',
    title: 'Head of Window Operations',
    location: 'Hybrid (moving vehicle)',
    type: 'Flexible',
    salary: '🍗 Chicken treats + equity',
    posted: '5 days ago',
    about: 'Pawber is revolutionizing canine transportation. We need a passionate Head of Window Operations to hang out of our fleet vehicle windows and show the world what joy looks like.',
    requirements: [
      'Comfortable in moving vehicles',
      'Exceptional ear-flapping ability',
      'Strong wind resistance',
      'Natural joy radiator',
    ],
    benefits: [
      'Wind in your fur, always',
      'Stock-bones (pre-IPO)',
      'Flexible schedule',
      'GPS collar provided',
    ],
  },
  {
    logo: '🎓',
    company: 'Barkward University',
    title: 'Professor of Fetch Studies',
    location: 'Barkward Campus',
    type: 'Full-time',
    salary: '🎓 Academic + bone stipend',
    posted: '1 week ago',
    about: 'Barkward University, ranked #1 in the nation for Stick Retrieval, seeks a distinguished Professor of Fetch Studies to lead our graduate program.',
    requirements: [
      'PhD in Applied Fetchology or equivalent experience',
      'Published research in peer-reviewed bark journals',
      'Ability to demonstrate fetch technique live',
      'Excellent communication (barking) skills',
    ],
    benefits: [
      'Tenure track',
      'Faculty lounge dog door',
      'Research treats budget',
      'Sabbatical sniff-atical leave',
    ],
  },
];

const skills = [
  { name: 'Fetch',                level: 99  },
  { name: 'Squirrel Detection',   level: 87  },
  { name: 'Belly Rub Optimization', level: 94 },
  { name: 'Zoomies',              level: 100 },
  { name: 'Barking (Advanced)',   level: 91  },
  { name: 'Couch Real Estate',    level: 78  },
  { name: 'Unconditional Love',   level: 100 },
  { name: 'Treat Negotiation',    level: 65  },
  { name: 'Mud Analysis',         level: 83  },
];

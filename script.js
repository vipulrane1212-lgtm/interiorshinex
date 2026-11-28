const image = (id, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const detailImagePool = [
  image("photo-1600607687939-ce8a6c25118c"),
  image("photo-1600566753086-00f18fb6b3ea"),
  image("photo-1600210492486-724fe5c67fb0"),
  image("photo-1600607688969-a5bfcd646154"),
  image("photo-1616486338812-3dadae4b4ace"),
  image("photo-1556912173-46c336c7fd55"),
  image("photo-1617104678098-de229db51175"),
  image("photo-1552321554-5fefe8c9ef14"),
  image("photo-1584622650111-993a426fbf0a"),
  image("photo-1616594039964-ae9021a400a0"),
  image("photo-1595526114035-0d45ed16cfbf"),
  image("photo-1556911220-e15b29be8c8f"),
  image("photo-1497366811353-6870744d04b2"),
  image("photo-1497366216548-37526070297c"),
  image("photo-1542744173-8e7e53415bb0"),
  image("photo-1556761175-b413da4baf72"),
  image("photo-1497366754035-f200968a6e72"),
  image("photo-1504307651254-35680f356dfd"),
  image("photo-1586023492125-27b2c045efd7")
];
const processVisuals = {
  residential: [
    image("photo-1600607688969-a5bfcd646154"),
    image("photo-1616486338812-3dadae4b4ace"),
    image("photo-1600210492486-724fe5c67fb0"),
    image("photo-1600566753190-17f0baa2a6c3")
  ],
  commercial: [
    image("photo-1497366216548-37526070297c"),
    image("photo-1542744173-8e7e53415bb0"),
    image("photo-1556761175-b413da4baf72"),
    image("photo-1497366754035-f200968a6e72")
  ]
};
const googleProfile = {
  url: "https://share.google/jEJDBfo2fof0dsW59",
  rating: "4.9",
  count: "116 Google reviews"
};
const reviewHighlights = [
  { text: "Sneha Enterprises and the entire team has done the interiors of our 2 houses. They are remarkable in project planning and execution. The discipline with which they execute work, track work, provide details of work progress and expense details is phenomenal. It is a total pleasure to work with them.", author: "Renu Mukherjee", initials: "RM", detail: "Google review", date: "3 months ago" },
  { text: "We are absolutely delighted with our full flat renovation. From the first consultation to the final touches, everything was handled professionally and smoothly. Salim and his team was easy to communicate with, kept us updated, and delivered exactly what was promised. The quality of the work is top- notch and our place feels brand new. Thank you for an amazing job !", author: "Kaushal Kishore", initials: "KK", detail: "Google review", date: "8 months ago" },
  { text: "Salim did great work renovating our entire house in NRI complex and we are truly impressed with his professional work. The flat was basic CIDCO property and after Salim and his dedicated team did miracle and made it beautiful. simple but effective solutions employed to achieve the desired results. The work has been completed within the given timelines and budget. We recommend Salim and Sneha enterprise for all kinds of renovation ( civil and aesthetic) works. Thanks", author: "swapna chiluka", initials: "SC", detail: "Google review", date: "11 months ago" },
  { text: "Our home was in need of painting and some renovation, something we had been postponing for quite some time. A friend recommended Sneha Enterprises, and I'm so glad we went with them! From the very beginning, the team was punctual, courteous, and extremely professional. The quality of painting and the finishing touches were outstanding – they transformed our home beautifully. What impressed me most was their attention to detail and cleanliness – they made sure everything was tidy after each day's work. The entire project was completed on time, and the pricing was very reasonable for the quality delivered. I would highly recommend Sneha Enterprises to anyone looking for reliable and top-quality painting and renovation services. It's been a while since the work was done, and our home still looks as fresh as new – so much so that we don't feel like going anywhere else!", author: "Amita Singh", initials: "AS", detail: "Google review", date: "a year ago" },
  { text: "Excellent renovation work done by Salim and team. Many innovative ideas were presented by him to turn our ordinary flat into beautiful home, which we always wanted. The team is very sincere and hardworking. Timely delivery and reasonable price is what they promise. Highly recommended.", author: "umesh nagannawar", initials: "UN", detail: "Google review", date: "4 years ago" },
  { text: "I explained my requirements with Mr. Saleem and after completing the work, I am really surprised, because i did not thought it will come out as I wanted it , my home look great now. I wanted to share this , for others ,they can also consider Sneha Enterprises for your home renovation and painting work. They have very professional team with good workmanship. They also provide after sales service. So friends go for it and u will not regret. Thank you for all your support.", author: "santhosh Kumar Nair", initials: "SN", detail: "Google review", date: "4 years ago" },
  { text: "Salim has a good team, he works with dedication has a good attitude of handling and taking responsibility and delivering quality work and on time. Best thing is that he is trust worthy and works with integrity. He is a good person to do business with. He did our house renovation civil and interior work in nerul. If you want to renovate your house you should contact Salim. Thanks", author: "YUVRAJ AJETRAO", initials: "YA", detail: "Google review", date: "11 months ago" },
  { text: "I recently worked with Interior designer firm Sneha Enterprises (Proprietor Mr. Salim Ahmed) on completing the interior design and renovation of my 3 BHK flat in Nerul, Navi Mumbai. The experience was fantastic. Salim and his team had extensive knowledge of materials, fittings, and appliances and provided valuable guidance in selecting the best options. They completed the work within the timeline committed by them, including some additional work and changes requested by us, ensuring a high standard of quality. I am very happy with their work and would recommend them to anyone looking for interior design or renovation services.", author: "Tophid Mulla", initials: "TM", detail: "Google review", date: "a year ago" },
  { text: "Sneha Enterprises did a great job of renovating our flat, and we are very happy with the result. Salim and his team are professional, meticulous, and always available to answer questions. They delivered on time and within the budget. I highly recommend Sneha Enterprises to anyone looking for renovation or interior design services.", author: "Yashodhara Chakravarty", initials: "YC", detail: "Google review", date: "a year ago" },
  { text: "Saleem bhai and his team is very professional,they are the wonderful team to work with.They have renovated our flat very beautifully,they have done all the work from civil work to interior work of our flat.We are very satisfied with their work and their team is very cooperative and helpful.I would highly recommend Sneha Enterprise to all.", author: "shilpa shingare", initials: "SS", detail: "Google review", date: "11 months ago" },
  { text: "We availed services of Sneha Enterprise twice in the recent past. Salim is the best contractor in the field of interior work. He possesses all relevant knowledge of interior designing and civil works and has a skilled team of workers who work under his personal supervision. He has completed all works within agreed time frame. I will highly recommend him to anyone who intends to get interiors done. You will not regret.", author: "Rajeev Aggarwal", initials: "RA", detail: "Google review", date: "a year ago" },
  { text: "I recently worked with Interior designer firm Sneha Enterprises (Proprietor Mr. Salimbhai Ahmed) on completing the interior design and renovation of my 3 BHK flat in Nerul, Navi Mumbai. The experience was fantastic. Salimbhai and his team had extensive knowledge of materials, fittings, and appliances and provided valuable guidance in selecting the best options. They completed the work within the timeline committed by them, including some additional work and changes requested by us, ensuring a high standard of quality. I am very happy with their work and would recommend them to anyone looking for interior design or renovation services.", author: "Yogesh Doifode", initials: "YD", detail: "Google review", date: "a year ago" },
  { text: "Mr Salim Proprietor of Sneha Enterprises renovated my 3 BHK flat it was complete renovation. I am thoroughly satisfied with the quality of work and the finishing. He has a knowledgeable team and also good knowledge of materials. His team is very sincere and hard working. He completed the work on time and my home looks beautiful. He is a man of words and I trust him. I recommend him highly. His rates are also very reasonable.", author: "parviz mulla", initials: "PM", detail: "Google review", date: "a year ago" },
  { text: "Recently we had availed the services of Sneha enterprises headed by Salim to renovate our apartment at Seawoods, Navi Mumbai. We are extremely satisfied with the quality of work and most importantly the commitment in delivering the work within the stipulated time period. The team is very sincere and efficient. The attention to detail is quite impressive. Overall, I would strongly recommend Sneha Enterprises and Salim to anyone looking for renovation / painting work.", author: "Kaushik datta sharma", initials: "KS", detail: "Google review", date: "2 years ago" },
  { text: "Extremely beautiful artmanship, finest interior designing which has improved the vibe of my home and made it much more aesthetically pleasing. A trustworthy place for your home renovation/ interior designing. my trust and money was worth.. Good job!", author: "SAMAPTI TRIPATHY", initials: "ST", detail: "Google review", date: "3 months ago" },
];


const residentialSubReferences = {
  // 01 / Complete Home Interior Design
  "1BHK Complete Home Interiors": [
    { title: "Compact Living & Floating TV Unit", tag: "Living Zone", image: "assets/service-images/residential/001-compact-living-floating-tv-unit.jpg" },
    { title: "Master Suite Integrated Storage", tag: "Master Bedroom", image: "assets/service-images/residential/002-master-suite-integrated-storage.png" },
    { title: "Modular Parallel Kitchen Layout", tag: "Parallel Kitchen", image: "assets/service-images/residential/003-modular-parallel-kitchen-layout.webp" },
    { title: "Minimalist Bathroom & Floating Vanity", tag: "Smart Bathroom", image: "assets/service-images/residential/004-minimalist-bathroom-floating-vanity.jpg" }
  ],
  "2BHK Complete Home Interiors": [
    { title: "Open Concept Living & Dining Lounge", tag: "Living & Dining", image: "assets/service-images/residential/005-open-concept-living-dining-lounge.jpg" },
    { title: "Master Suite with Wooden Paneling", tag: "Master Bedroom", image: "assets/service-images/residential/006-master-suite-with-wooden-paneling.jpg" },
    { title: "Kids / Study Room with Murphy Desk", tag: "Kids Room", image: "assets/service-images/residential/007-kids-study-room-with-murphy-desk.jpg" },
    { title: "L-Shaped Quartz Countertop Kitchen", tag: "Modular Kitchen", image: "assets/service-images/residential/008-l-shaped-quartz-countertop-kitchen.jpg" }
  ],
  "3BHK Complete Home Interiors": [
    { title: "Expansive Formal Living & Foyer Gallery", tag: "Grand Foyer", image: "assets/service-images/residential/009-expansive-formal-living-foyer-gallery.jpg" },
    { title: "Master Bedroom with Walk-in Dressing", tag: "Master Suite", image: "assets/service-images/residential/010-master-bedroom-with-walk-in-dressing.jpg" },
    { title: "Parents / Guest Bedroom Classic Paneling", tag: "Guest Suite", image: "assets/service-images/residential/011-parents-guest-bedroom-classic-paneling.jpg" },
    { title: "Island Kitchen & Breakfast Counter", tag: "Island Kitchen", image: "assets/service-images/residential/012-island-kitchen-breakfast-counter.jpg" }
  ],
  "4BHK Complete Home Interiors": [
    { title: "Grand Double Living Marble Cladding", tag: "Double Living", image: "assets/service-images/residential/013-grand-double-living-marble-cladding.jpg" },
    { title: "Presidential Master Suite & Balcony", tag: "Master Suite", image: "assets/service-images/residential/014-presidential-master-suite-balcony.jpg" },
    { title: "Entertainment Lounge & Bar Unit", tag: "Home Lounge", image: "assets/service-images/residential/015-entertainment-lounge-bar-unit.jpg" },
    { title: "Gourmet Chef's Kitchen with Tall Pantry", tag: "Chef Kitchen", image: "assets/service-images/residential/016-gourmet-chefs-kitchen-with-tall-pantry.jpg" }
  ],

  // 02 / Types of Bathroom Interior
  "Modern Minimalist Bathroom": [
    { title: "Frameless Glass Rain Shower Enclosure", tag: "Rain Shower", image: "assets/service-images/residential/017-frameless-glass-rain-shower-enclosure.jpg" },
    { title: "Floating Oak Vanity with Matte Black Tapware", tag: "Vanity Unit", image: "assets/service-images/residential/018-floating-oak-vanity-with-matte-black-tapware.jpg" },
    { title: "Large-Format Terrazzo Wall & Floor Tiles", tag: "Terrazzo Tiles", image: "assets/service-images/residential/019-large-format-terrazzo-wall-floor-tiles.jpg" },
    { title: "Concealed Niche & Ambient LED Sconces", tag: "Niche Lighting", image: "assets/service-images/residential/020-concealed-niche-ambient-led-sconces.jpg" }
  ],
  "Luxury Bathroom": [
    { title: "Italian Statuario Marble Slabs & Brass Trim", tag: "Statuario Marble", image: "assets/service-images/residential/021-italian-statuario-marble-slabs-brass-trim.jpg" },
    { title: "Freestanding Acrylic Soaking Tub Setup", tag: "Freestanding Tub", image: "assets/service-images/residential/022-freestanding-acrylic-soaking-tub-setup.jpg" },
    { title: "Double Basin Quartz Vanity & Fluted Drawers", tag: "Dual Vanity", image: "assets/service-images/residential/023-double-basin-quartz-vanity-fluted-drawers.jpg" },
    { title: "Brushed Gold Thermostatic Shower System", tag: "Gold Fixtures", image: "assets/service-images/residential/024-brushed-gold-thermostatic-shower-system.jpg" }
  ],
  "Contemporary Bathroom": [
    { title: "Monochrome Slate & Anthracite Fixtures", tag: "Slate Finish", image: "assets/service-images/residential/025-monochrome-slate-anthracite-fixtures.jpg" },
    { title: "Geometric Patterned Floor & Subway Surround", tag: "Pattern Tiles", image: "assets/service-images/residential/026-geometric-patterned-floor-subway-surround.jpg" },
    { title: "Wall-Hung Rimless Commode & Concealed Tank", tag: "Concealed Cistern", image: "assets/service-images/residential/027-wall-hung-rimless-commode-concealed-tank.jpg" },
    { title: "Fluted Glass Partition Screen & Wood Accents", tag: "Fluted Screen", image: "assets/service-images/residential/028-fluted-glass-partition-screen-wood-accents.jpg" }
  ],
  "Compact Bathroom": [
    { title: "Space-Saving Floating Corner Vanity", tag: "Corner Vanity", image: "assets/service-images/residential/029-space-saving-floating-corner-vanity.webp" },
    { title: "Sliding Glass Shower Cubicle (3x3 ft)", tag: "Sliding Cubicle", image: "assets/service-images/residential/030-sliding-glass-shower-cubicle-3x3-ft.jpg" },
    { title: "Recessed Wall Storage Niches for Toiletries", tag: "Wall Niches", image: "assets/service-images/residential/031-recessed-wall-storage-niches-for-toiletries.jpg" },
    { title: "Light-Reflecting Gloss White Porcelain Tiles", tag: "Gloss Tiles", image: "assets/service-images/residential/032-light-reflecting-gloss-white-porcelain-tiles.jpg" }
  ],

  // 03 / Modular Kitchen Design
  "L-Shaped Kitchen": [
    { title: "High-Gloss Acrylic Dual-Tone Cabinets", tag: "Acrylic Finish", image: "assets/service-images/residential/033-high-gloss-acrylic-dual-tone-cabinets.jpg" },
    { title: "Seamless Quartz Countertop & Undermount Sink", tag: "Quartz Counter", image: "assets/service-images/residential/034-seamless-quartz-countertop-undermount-sink.jpg" },
    { title: "Corner Carousel Magic Pull-out System", tag: "Magic Corner", image: "assets/service-images/residential/035-corner-carousel-magic-pull-out-system.jpg" },
    { title: "Under-Cabinet Warm LED Task Profiles", tag: "Task Light", image: "assets/service-images/residential/036-under-cabinet-warm-led-task-profiles.jpg" }
  ],
  "U-Shaped Kitchen": [
    { title: "Full-Surround High-Capacity Storage Layout", tag: "Surround Layout", image: "assets/service-images/residential/037-full-surround-high-capacity-storage-layout.jpg" },
    { title: "Integrated Breakfast Counter with Bar Stools", tag: "Breakfast Bar", image: "assets/service-images/residential/038-integrated-breakfast-counter-with-bar-stools.jpg" },
    { title: "Built-in Microwave & Oven Tall Units", tag: "Tall Appliance Unit", image: "assets/service-images/residential/039-built-in-microwave-oven-tall-units.jpg" },
    { title: "Soft-Close Tandem Drawer Organization", tag: "Tandem Drawers", image: "assets/service-images/residential/040-soft-close-tandem-drawer-organization.jpg" }
  ],
  "Parallel Kitchen": [
    { title: "Ergonomic Golden Work Triangle Layout", tag: "Work Triangle", image: "assets/service-images/residential/041-ergonomic-golden-work-triangle-layout.jpg" },
    { title: "Handleless Gola Profile Matt Shutters", tag: "Gola Profile", image: "assets/service-images/residential/042-handleless-gola-profile-matt-shutters.jpg" },
    { title: "Heavy-Duty Stainless Steel Pull-outs", tag: "Spice Pull-outs", image: "assets/service-images/residential/043-heavy-duty-stainless-steel-pull-outs.jpg" },
    { title: "Durable Black Granite & Slim Chimney", tag: "Granite & Hood", image: "assets/service-images/residential/044-durable-black-granite-slim-chimney.jpg" }
  ],

  // 04 / Wardrobe & Bed Interiors
  "Sliding Door Wardrobe": [
    { title: "Tinted Glass & Black Aluminium Frame", tag: "Glass Shutters", image: "assets/service-images/residential/045-sliding-door-wardrobe.jpg" },
    { title: "Lacquered Glass Shutter with Sensor LEDs", tag: "Sensor Lighting", image: "assets/service-images/residential/046-lacquered-glass-shutters-sensor-led.jpg" },
    { title: "Heavy-Duty Soft-Close Double Track System", tag: "Double Track", image: "assets/service-images/residential/047-soft-close-sliding-mechanism-double-track.jpg" },
    { title: "Internal Velvet-Lined Jewelry & Watch Trays", tag: "Organizer Drawers", image: "assets/service-images/residential/048-velvet-lined-jewellery-watch-trays.webp" }
  ],
  "Walk-in Wardrobe": [
    { title: "Open Boutique Display Wardrobe System", tag: "Boutique Display", image: "assets/service-images/residential/049-walk-in-wardrobe.jpg" },
    { title: "Center Island Dressing Vanity & Deep Drawers", tag: "Island Vanity", image: "assets/service-images/residential/050-center-island-dressing-vanity-deep-drawers.jpg" },
    { title: "Full-Length Ring Light Dressing Mirror", tag: "Dressing Mirror", image: "assets/service-images/residential/051-full-length-ring-light-dressing-mirror.jpg" },
    { title: "Illuminated Handbag & Shoe Display Shelves", tag: "Shoe & Bag Display", image: "assets/service-images/residential/052-illuminated-handbag-shoe-display-shelves.jpg" }
  ],
  "Upholstered Bed Design": [
    { title: "Full-Wall Fluted Velvet Headboard Paneling", tag: "Fluted Velvet", image: "assets/service-images/residential/053-full-wall-fluted-velvet-headboard-paneling.jpg" },
    { title: "Curved Bouclé Fabric Bed Frame & Sconces", tag: "Bouclé Frame", image: "assets/service-images/residential/054-curved-boucle-fabric-bed-frame-sconces.jpg" },
    { title: "Tufted Italian Leather Headboard Architecture", tag: "Tufted Leather", image: "assets/service-images/residential/055-tufted-italian-leather-headboard-architecture.jpg" },
    { title: "Low-Platform Japanese-Inspired Fabric Bed", tag: "Platform Bed", image: "assets/service-images/residential/056-low-platform-japanese-inspired-fabric-bed.webp" }
  ],
  "Storage Bed Design": [
    { title: "Hydraulic Lift-Up King Storage Compartment", tag: "Hydraulic Lift", image: "assets/service-images/residential/057-hydraulic-lift-up-king-storage-compartment.png" },
    { title: "Side Deep Rolling Walnut Storage Drawers", tag: "Drawer Storage", image: "assets/service-images/residential/058-side-deep-rolling-walnut-storage-drawers.jpg" },
    { title: "Headboard Concealed Charging Shelf & Niche", tag: "Headboard Niche", image: "assets/service-images/residential/059-headboard-concealed-charging-shelf-niche.jpg" },
    { title: "Anti-Moisture Laminated Storage Boxes", tag: "Laminated Boxes", image: "assets/service-images/residential/060-anti-moisture-laminated-storage-boxes.jpg" }
  ],
  "Custom Carpentry & Wardrobe Work": [
    { title: "Solid Teak & Natural Rattan Cane Doors", tag: "Cane & Teak", image: "assets/service-images/residential/061-solid-teak-natural-rattan-cane-doors.jpg" },
    { title: "Fluted Oak Paneling with Seamless Hidden Door", tag: "Hidden Door", image: "assets/service-images/residential/062-fluted-oak-paneling-with-seamless-hidden-door.jpg" },
    { title: "Integrated Study Desk in Wardrobe Alcove", tag: "Study Alcove", image: "assets/service-images/residential/063-integrated-study-desk-in-wardrobe-alcove.jpg" },
    { title: "Architectural Display Bookcase & Ledges", tag: "Display Shelving", image: "assets/service-images/residential/064-architectural-display-bookcase-ledges.jpg" }
  ],

  // 05 / Luxury Villa & Bungalow Interior Design
  "Double-height living room & grand entrance foyer design": {
    cover: "assets/service-images/residential/065-cover-double-height-living-room.png",
    refs: [
      { title: "20-Foot Feature Wall with Bookmatched Marble", tag: "Feature Wall", image: "assets/service-images/residential/065a-bookmatched-marble-feature-wall.jpg" },
      { title: "Cascading Crystal Chandelier Installation", tag: "Chandelier", image: "assets/service-images/residential/066-cascading-crystal-chandelier-installation.png" },
      { title: "Architectural Curved Staircase & Glass Railing", tag: "Curved Staircase", image: "assets/service-images/residential/067-architectural-curved-staircase-glass-railing.jpg" },
      { title: "Solid Teak Double Pivot Grand Entrance Door", tag: "Pivot Door", image: "assets/service-images/residential/068-solid-teak-double-pivot-grand-entrance-door.jpg" }
    ]
  },
  "Custom marble, Italian stone & wooden flooring work": [
    { title: "High-Gloss Botticino Italian Marble Flooring", tag: "Italian Marble", image: "assets/service-images/residential/069-high-gloss-botticino-italian-marble-flooring.png" },
    { title: "Herringbone Hardwood Engineered Flooring", tag: "Herringbone Oak", image: "assets/service-images/residential/070-herringbone-hardwood-engineered-flooring.jpg" },
    { title: "Seamless Backlit Onyx Feature Inlay", tag: "Backlit Onyx", image: "assets/service-images/residential/071-seamless-backlit-onyx-feature-inlay.png" },
    { title: "Flamed Granite Outdoor Veranda Paving", tag: "Outdoor Granite", image: "assets/service-images/residential/072-flamed-granite-outdoor-veranda-paving.jpg" }
  ],
  "Private home theater, bar lounge & gym room setup": [
    { title: "Acoustic Suede Paneling & Dolby Cinema Setup", tag: "Home Cinema", image: "assets/service-images/residential/073-acoustic-suede-paneling-dolby-cinema-setup.jpg" },
    { title: "Starry Sky Fiber-Optic Acoustic Ceiling", tag: "Star Ceiling", image: "assets/service-images/residential/074-starry-sky-fiber-optic-acoustic-ceiling.jpg" },
    { title: "Luxury Onyx Cocktail Bar & Climate Cellar", tag: "Cocktail Bar", image: "assets/service-images/residential/075-luxury-onyx-cocktail-bar-climate-cellar.jpg" },
    { title: "Home Wellness Gym with Mirrored Wall", tag: "Wellness Gym", image: "assets/service-images/residential/076-home-wellness-gym-with-mirrored-wall.jpg" }
  ],
  "Designer staircase, glass railings & chandelier installation": [
    { title: "Cantilevered Floating Wooden Treads", tag: "Floating Treads", image: "assets/service-images/residential/077-cantilevered-floating-wooden-treads.jpg" },
    { title: "Ultra-Clear Laminated Glass Balustrade", tag: "Glass Balustrade", image: "assets/service-images/residential/078-ultra-clear-laminated-glass-balustrade.jpg" },
    { title: "Linear Under-Tread Warm White LED Strip", tag: "Step Lights", image: "assets/service-images/residential/079-linear-under-tread-warm-white-led-strip.jpg" },
    { title: "Sculptural Brass Pendant Cluster Installation", tag: "Pendant Cluster", image: "assets/service-images/residential/080-sculptural-brass-pendant-cluster-installation.jpg" }
  ],

  // 06 / Flat & Apartment Renovation Services
  "False Ceiling & POP Work": [
    { title: "Minimalist Perimeter Cove Diffused LED", tag: "Cove Ceiling", image: "assets/service-images/residential/085-minimalist-perimeter-cove-diffused-led.jpg" },
    { title: "Magnetic Slim Track Lighting Channels", tag: "Magnetic Track", image: "assets/service-images/residential/086-magnetic-slim-track-lighting-channels.jpg" },
    { title: "Modern POP Wall Mouldings & Geometric Trim", tag: "Wall Mouldings", image: "assets/service-images/residential/087-modern-pop-wall-mouldings-geometric-trim.jpg" },
    { title: "Acoustic Drop Gypsum Board Ceiling Details", tag: "Acoustic Ceiling", image: "assets/service-images/residential/088-acoustic-drop-gypsum-board-ceiling-details.jpg" }
  ],
  "Civil & Masonry Work": [
    { title: "Internal Non-Loadbearing Wall Breaking", tag: "Space Opening", image: "assets/service-images/residential/089-internal-non-loadbearing-wall-breaking.jpg" },
    { title: "Siporex Lightweight Block Partition Walls", tag: "Block Masonry", image: "assets/service-images/residential/090-siporex-lightweight-block-partition-walls.webp" },
    { title: "Laser-Leveled Floor Screed & Waterproofing", tag: "Floor Screed", image: "assets/service-images/residential/091-laser-leveled-floor-screed-waterproofing.jpg" },
    { title: "Door Frame Widening & Lintel Reinforcement", tag: "Openings", image: "assets/service-images/residential/092-door-frame-widening-lintel-reinforcement.jpg" }
  ],
  "Plumbing & Electrical Work": [
    { title: "Concealed CPVC/UPVC Piping & Pressure Test", tag: "Piping Network", image: "assets/service-images/residential/093-concealed-cpvc-upvc-piping-pressure-test.webp" },
    { title: "Modular Touch Switches & Concealed Conduiting", tag: "Smart Switches", image: "assets/service-images/residential/094-modular-touch-switches-concealed-conduiting.jpg" },
    { title: "Dual-Circuit Distribution Board & Protection", tag: "DB Protection", image: "assets/service-images/residential/095-dual-circuit-distribution-board-protection.jpg" },
    { title: "Thermostatic Diverter & Wall Cistern Setup", tag: "Sanitary Fittings", image: "assets/service-images/residential/096-thermostatic-diverter-wall-cistern-setup.jpg" }
  ],
  "Interior Painting": [
    { title: "Royale Luxury Silk Smooth Wall Emulsion", tag: "Silk Emulsion", image: "assets/service-images/residential/097-royale-luxury-silk-smooth-wall-emulsion.jpg" },
    { title: "Artisanal Venetian Plaster Accent Wall", tag: "Venetian Plaster", image: "assets/service-images/residential/098-artisanal-venetian-plaster-accent-wall.jpg" },
    { title: "PU / Duco Enamel Paint on Doors & Trims", tag: "Duco Coating", image: "assets/service-images/residential/099-pu-duco-enamel-paint-on-doors-trims.jpg" },
    { title: "Anti-Damp Moisture Barrier Primer Coating", tag: "Moisture Primer", image: "assets/service-images/residential/100-anti-damp-moisture-barrier-primer-coating.webp" }
  ],
  "Fabrication Work": {
    cover: "assets/service-images/residential/101-cover-ms-steel-fabrication.jpg",
    refs: [
      { title: "Slim Black MS Steel & Fluted Glass Partitions", tag: "Fluted Partitions", image: "assets/service-images/residential/101-slim-black-ms-steel-fluted-glass-partitions.jpg" },
      { title: "Laser-Cut Balcony Safety Grills & Railings", tag: "Safety Grills", image: "assets/service-images/residential/102-laser-cut-balcony-safety-grills-railings.jpg" },
      { title: "Heavy-Duty Safety Door with Digital Smart Lock", tag: "Smart Safety Door", image: "assets/service-images/residential/103-heavy-duty-safety-door-with-digital-smart-lock.jpg" },
      { title: "Custom Structural Steel Loft & Storage Frame", tag: "Steel Lofts", image: "assets/service-images/residential/104-custom-structural-steel-loft-storage-frame.jpg" }
    ]
  }
};

const commercialSubImages = {
  "Office layout reconfiguration & space expansion": "assets/service-images/commercial/C01-office-layout-reconfiguration-space-expansion.jpg",
  "Old office dismantling, demolition & debris removal": "assets/service-images/commercial/C02-old-office-dismantling-demolition-debris-removal.jpg",
  "Office flooring, ceiling & lighting upgrade": "assets/service-images/commercial/C03-office-flooring-ceiling-lighting-upgrade.jpg",
  "Corporate reception, cabin & conference room makeover": "assets/service-images/commercial/C04-corporate-reception-cabin-conference-room-makeover.jpg",
  "Office washroom, pantry & civil refurbishment": "assets/service-images/commercial/C05-office-washroom-pantry-civil-refurbishment.jpg",
  "Turnkey warm shell to furnished office fit-out": "assets/service-images/commercial/C06-turnkey-warm-shell-to-furnished-office-fit-out.jpg",
  "Complete civil, flooring & sub-floor leveling": "assets/service-images/commercial/C07-complete-civil-flooring-sub-floor-leveling.jpg",
  "Custom cabins, workstations & interior carpentry": "assets/service-images/commercial/C09-custom-cabins-workstations-interior-carpentry.jpg",
  "Fire safety, IT server room & security integration": "assets/service-images/commercial/C10-fire-safety-it-server-room-security-integration.jpg",
  "Linear & cluster employee workstation desks": "assets/service-images/commercial/C11-linear-cluster-employee-workstation-desks.jpg",
  "Executive MD desk & manager cabin furniture": "assets/service-images/commercial/C12-executive-md-desk-manager-cabin-furniture.jpg",
  "Conference table & boardroom seating setup": "assets/service-images/commercial/C13-conference-table-boardroom-seating-setup.jpg",
  "Ergonomic office chairs & lounge sofas": "assets/service-images/commercial/C14-ergonomic-office-chairs-lounge-sofas.jpg",
  "Custom reception desk, pedestals & storage cabinets": "assets/service-images/commercial/C15-custom-reception-desk-pedestals-storage-cabinets.jpg",
  "Frameless toughened glass cabin partitions": "assets/service-images/commercial/C16-frameless-toughened-glass-cabin-partitions.jpg",
  "Aluminum framed & slim profile glass partitions": "assets/service-images/commercial/C17-aluminum-framed-slim-profile-glass-partitions.png",
  "Acoustic double-glazed soundproof glass cabins": "assets/service-images/commercial/C18-acoustic-double-glazed-soundproof-glass-cabins.jpg",
  "Sliding, folding & demountable glass walls": "assets/service-images/commercial/C19-sliding-folding-demountable-glass-walls.jpg",
  "Glass frosted film, blinds & branding graphics": "assets/service-images/commercial/C20-glass-frosted-film-blinds-branding-graphics.jpg",
  "Gypsum board & POP seamless false ceiling": "assets/service-images/commercial/C21-gypsum-board-pop-seamless-false-ceiling.jpg",
  "Armstrong grid & mineral fiber tile ceiling": "assets/service-images/commercial/C22-armstrong-grid-mineral-fiber-tile-ceiling.webp",
  "Open cell, baffle & metal strip ceilings": "assets/service-images/commercial/C23-open-cell-baffle-metal-strip-ceilings.png",
  "Architectural LED profile, track & panel lighting": "assets/service-images/commercial/C24-architectural-led-profile-track-panel-lighting.jpg",
  "Exposed industrial ceiling painting & hanging lights": "assets/service-images/commercial/C25-exposed-industrial-ceiling-painting-hanging-lights.png",
  "Commercial VRF, VRV, ductable & cassette AC installation": "assets/service-images/commercial/C26-commercial-vrf-vrv-ductable-cassette-ac-installation.jpg",
  "Complete office electrical wiring, DB box & UPS setup": "assets/service-images/commercial/C27-complete-office-electrical-wiring-db-box-ups-setup.jpg",
  "Structured LAN cabling, Wi-Fi & server room setup": "assets/service-images/commercial/C28-structured-lan-cabling-wi-fi-server-room-setup.webp",
  "Fire fighting sprinklers, smoke detectors & alarm systems": "assets/service-images/commercial/C29-fire-fighting-sprinklers-smoke-detectors-alarm-systems.png",
  "Commercial plumbing, drainage & fresh air ventilation": "assets/service-images/commercial/C30-commercial-plumbing-drainage-fresh-air-ventilation.jpg",
  "2D CAD space planning & furniture layout drawings": "assets/service-images/commercial/C31-2d-cad-space-planning-furniture-layout-drawings.jpg",
  "Photorealistic 3D office & retail interior renders": "assets/service-images/commercial/C32-photorealistic-3d-office-retail-interior-renders.jpg",
  "360-degree virtual reality (VR) interior tours": "assets/service-images/commercial/C33-360-degree-virtual-reality-vr-interior-tours.jpg",
  "3D animated commercial walkthrough videos": "assets/service-images/commercial/C34-3d-animated-commercial-walkthrough-videos.webp",
  "Material mood boards & working construction blueprints": "assets/service-images/commercial/C35-material-mood-boards-working-construction-blueprints.webp"
};

const experienceData = {
  residential: {
    name: "Residential",
    header: "RESIDENTIAL / 01",
    heroTitle: "Built around<br /><i>the way you live.</i>",
    heroDescription: "Navi Mumbai’s most trusted ready-to-move-in home interior studio — backed by Sneha Enterprises’ Class-1 execution legacy since 2011. From 1BHK homes to luxury villas, delivered on time with zero hidden surprises.",
    heroImage: "assets/residential-montage-poster.jpg",
    heroVideo: "assets/residential-montage.mp4",
    heroVideoMobile: "assets/residential-montage-mobile.mp4",
    heroImageMobile: "assets/residential-montage-mobile-poster.jpg",
    introTitle: "Good spaces do<br />more than <i>look good.</i>",
    introCopy: "They hold the morning rush, the quiet pause, the people who gather, and the years that follow. We bring design and execution into one considered conversation.",
    servicesNote: "A full-spectrum residential studio for homes with a point of view.",
    comparisons: [
      {
        name: "A home with a new rhythm",
        beforeImage: "https://vipulrane1212-lgtm.github.io/shinex-interior/images/transformations/seawoods_before.jpg",
        afterImage: "https://vipulrane1212-lgtm.github.io/shinex-interior/images/transformations/seawoods_after.jpg"
      },
      {
        name: "Modular L-shaped kitchen transformation",
        beforeImage: "assets/transformations/res-kitchen-before.jpg",
        afterImage: "assets/transformations/res-kitchen-after.jpg"
      },
      {
        name: "Master bedroom suite & sliding wardrobe",
        beforeImage: "assets/transformations/res-bedroom-before.jpg",
        afterImage: "assets/transformations/res-bedroom-after.jpg"
      }
    ],
    closingImage: image("photo-1600607687920-4e2a09cf159d"),
    closingTitle: "Your space<br />starts <i>now.</i>",
    catalogCopy: "Stone, timber, light and lived-in softness — a quiet material language, tailored to the way your home should feel.",
    catalog: [
      ["Warm timber", "Oak / tactile grain", image("photo-1616486338812-3dadae4b4ace")],
      ["Honest stone", "Travertine / natural variation", image("photo-1600607688969-a5bfcd646154")],
      ["Soft light", "Layered / ambient", image("photo-1600210492486-724fe5c67fb0")],
      ["Quiet hardware", "Brushed metal / patina", image("photo-1586023492125-27b2c045efd7")],
      ["Lived-in colour", "Chalk / earth / shadow", image("photo-1600566753190-17f0baa2a6c3")]
    ],
    services: [
      {
        title: "Complete Home Interior Design",
        image: "assets/service-images/residential/013-grand-double-living-marble-cladding.jpg",
        items: [
          "1BHK Complete Home Interiors",
          "2BHK Complete Home Interiors",
          "3BHK Complete Home Interiors",
          "4BHK Complete Home Interiors"
        ]
      },
      {
        title: "Types of Bathroom Interior",
        image: "assets/service-images/residential/017-frameless-glass-rain-shower-enclosure.jpg",
        items: [
          "Modern Minimalist Bathroom",
          "Luxury Bathroom",
          "Contemporary Bathroom",
          "Compact Bathroom"
        ]
      },
      {
        title: "Modular Kitchen Design",
        image: "assets/service-images/residential/033-high-gloss-acrylic-dual-tone-cabinets.jpg",
        items: [
          "L-Shaped Kitchen",
          "U-Shaped Kitchen",
          "Parallel Kitchen"
        ]
      },
      {
        title: "Wardrobe & Bed Interiors",
        image: "assets/service-images/residential/046-lacquered-glass-shutters-sensor-led.jpg",
        items: [
          "Sliding Door Wardrobe",
          "Walk-in Wardrobe",
          "Upholstered Bed Design",
          "Storage Bed Design",
          "Custom Carpentry & Wardrobe Work"
        ]
      },
      {
        title: "Luxury Villa & Bungalow Interior Design",
        image: "assets/service-images/residential/065-20-foot-feature-wall-with-bookmatched-marble.jpg",
        items: [
          "Double-height living room & grand entrance foyer design",
          "Custom marble, Italian stone & wooden flooring work",
          "Private home theater, bar lounge & gym room setup",
          "Designer staircase, glass railings & chandelier installation"
        ]
      },
      {
        title: "Flat & Apartment Renovation Services",
        image: "assets/service-images/residential/088-acoustic-drop-gypsum-board-ceiling-details.jpg",
        items: [
          "False Ceiling & POP Work",
          "Civil & Masonry Work",
          "Plumbing & Electrical Work",
          "Interior Painting",
          "Fabrication Work"
        ]
      }
    ],
    process: [
      ["Discovery & brief", "We listen first: your routines, references, needs and the feeling you want the space to hold.", "01 — 02 weeks"],
      ["Design direction", "Plans become a point of view through spatial planning, material palettes and a clear investment map.", "02 — 04 weeks"],
      ["Detailed execution", "One accountable team coordinates every trade, detail and decision on site — with no loose ends.", "06 — 16 weeks"],
      ["Handover", "The last light, the final clean and a space ready for the life you pictured. We stay close after move-in.", "01 — 02 weeks"]
    ],
    faqs: [
      ["Can you take on a complete ready-to-move-in home?", "Yes. We can carry a project from design and drawings through civil work, interiors, furniture, lighting and final handover — with one accountable team."],
      ["Do you work with existing architects?", "Absolutely. We regularly partner with architects and can take responsibility for interiors, civil execution, MEP and site coordination as a single package."],
      ["How early should we involve ShineX?", "The earlier the better. Bringing us in during planning helps align design ambition, practical buildability and the real project budget before work begins."],
      ["Which cities do you work in?", "Our core execution team is based in India and we take on projects based on scope, site readiness and the level of involvement the brief requires."],
      ["How do I start?", "Send a few details through the quote form or WhatsApp. We will schedule a short discovery call and tell you what the next useful step is."]
    ],
    insightsCopy: "Practical guidance for homeowners planning interiors, renovations and ready-to-move-in construction — without losing the feeling behind the brief.",
    blogs: [
      ["Complete Home Interior Design for 1BHK, 2BHK, 3BHK and 4BHK Homes", "RESIDENTIAL INTERIORS", "A practical guide to planning a complete home interior, from space planning and storage to lighting, materials and final styling.", "8 min read", image("photo-1600607687939-ce8a6c25118c")],
      ["How to Plan a Ready-to-Move-In House Construction Project", "READY-TO-MOVE-IN CONSTRUCTION", "The key decisions to make before construction begins — drawings, approvals, structure, services, finishes, budget and handover.", "9 min read", image("photo-1503387762-592deb58ef4e")],
      ["Modular Kitchen Design Ideas for Indian Homes", "KITCHEN DESIGN", "Explore practical kitchen layouts, cabinet finishes, work triangles, storage planning and countertop choices for everyday Indian cooking.", "7 min read", image("photo-1556912173-46c336c7fd55")],
      ["Luxury Villa Interior Design That Still Feels Like Home", "VILLA DESIGN", "How to balance scale, stone, natural light, furniture and personal detail in a villa or bungalow interior without over-designing it.", "8 min read", image("photo-1600607687920-4e2a09cf159d")],
      ["Flat Renovation Checklist: What to Fix Before You Redesign", "HOME RENOVATION", "A room-by-room checklist for old flats, including demolition, plumbing, electrical rewiring, seepage repair, flooring and paint.", "6 min read", image("photo-1617104678098-de229db51175")],
      ["False Ceiling and Ambient Lighting Ideas for Modern Homes", "LIGHTING + CEILINGS", "Create a layered lighting plan with cove light, task light, decorative fixtures and ceiling details that make the home feel calm at night.", "6 min read", image("photo-1600210492486-724fe5c67fb0")],
      ["How to Choose Interior Materials That Age Beautifully", "MATERIALS", "A considered look at stone, timber, laminates, hardware, fabrics and finishes — and how to choose materials for real life.", "7 min read", image("photo-1616486338812-3dadae4b4ace")]
    ]
  },
  commercial: {
    name: "Commercial & Civil",
    header: "COMMERCIAL + CIVIL / 02",
    heroTitle: "Built for<br /><i>the way business moves.</i>",
    heroDescription: "Navi Mumbai’s trusted commercial interior & Class-1 civil contractor — backed by Sneha Enterprises since 2011. Turnkey corporate offices, MEP systems, and fit-outs engineered for business performance.",
    heroImage: "assets/commercial-montage-poster.jpg",
    heroVideo: "assets/commercial-montage.mp4",
    heroVideoMobile: "assets/commercial-montage-mobile.mp4",
    heroImageMobile: "assets/commercial-montage-mobile-poster.jpg",
    introTitle: "The best workspaces<br />make work <i>flow.</i>",
    introCopy: "We create commercial environments that carry a brand, support a team and survive real use. Strategy, build and technical delivery — held under one roof.",
    servicesNote: "A single execution partner for commercial fit-outs, civil contracting and the systems behind them.",
    comparisons: [
      {
        name: "From bare shell to business ready",
        beforeImage: "https://vipulrane1212-lgtm.github.io/shinex-interior/images/transformations/commercial_office_before.jpg",
        afterImage: "https://vipulrane1212-lgtm.github.io/shinex-interior/images/transformations/commercial_office_after.jpg"
      },
      {
        name: "Executive boardroom & acoustic glass cabins",
        beforeImage: "assets/transformations/com-boardroom-before.jpg",
        afterImage: "assets/transformations/com-boardroom-after.jpg"
      },
      {
        name: "Corporate reception & open workstation bay",
        beforeImage: "assets/transformations/com-reception-before.jpg",
        afterImage: "assets/transformations/com-reception-after.jpg"
      }
    ],
    closingImage: image("photo-1497366754035-f200968a6e72"),
    closingTitle: "Make room<br />for <i>what’s next.</i>",
    catalogCopy: "Durable systems, clear wayfinding and a material language that keeps the brand in focus — built for everyday performance.",
    catalog: [
      ["Acoustic calm", "PET / timber / fabric", "assets/service-images/commercial/catalog-acoustic-calm.png"],
      ["Workplace light", "Task / ambient / feature", "assets/service-images/commercial/catalog-workplace-light.jpg"],
      ["Glass + steel", "Slim / precise / durable", "assets/service-images/commercial/catalog-glass-steel.jpg"],
      ["Built to move", "Demountable / adaptable", "assets/service-images/commercial/catalog-built-to-move.jpg"],
      ["Technical detail", "MEP / HVAC / data", "assets/service-images/commercial/catalog-technical-detail.jpg"]
    ],
    services: [
      {
        title: "Corporate Office Renovation & Remodeling",
        image: "assets/service-images/commercial/C04-corporate-reception-cabin-conference-room-makeover.jpg",
        items: ["Office layout reconfiguration & space expansion", "Old office dismantling, demolition & debris removal", "Office flooring, ceiling & lighting upgrade", "Corporate reception, cabin & conference room makeover", "Office washroom, pantry & civil refurbishment"]
      },
      {
        title: "Bare Shell to Full Office Fit-Out",
        image: "assets/service-images/commercial/C08-end-to-end-mep-hvac-electrical-fit-out.jpg",
        items: ["Turnkey warm shell to furnished office fit-out", "Complete civil, flooring & sub-floor leveling", "Custom cabins, workstations & interior carpentry", "Fire safety, IT server room & security integration"]
      },
      {
        title: "Modular Office Furniture & Workstation Setup",
        image: "assets/service-images/commercial/C15-card-modular-office-furniture.jpg",
        items: ["Linear & cluster employee workstation desks", "Executive MD desk & manager cabin furniture", "Conference table & boardroom seating setup", "Ergonomic office chairs & lounge sofas", "Custom reception desk, pedestals & storage cabinets"]
      },
      {
        title: "Glass Partition & Office Cabin Installation",
        image: "assets/service-images/commercial/C20-glass-frosted-film-blinds-branding-graphics.jpg",
        items: ["Frameless toughened glass cabin partitions", "Aluminum framed & slim profile glass partitions", "Acoustic double-glazed soundproof glass cabins", "Sliding, folding & demountable glass walls", "Glass frosted film, blinds & branding graphics"]
      },
      {
        title: "Commercial False Ceiling & Lighting Contractors",
        image: "assets/service-images/commercial/C25-card-commercial-false-ceiling.jpg",
        items: ["Gypsum board & POP seamless false ceiling", "Armstrong grid & mineral fiber tile ceiling", "Open cell, baffle & metal strip ceilings", "Architectural LED profile, track & panel lighting", "Exposed industrial ceiling painting & hanging lights"]
      },
      {
        title: "MEP, HVAC (AC) & Electrical Contracting",
        image: "assets/service-images/commercial/C27-complete-office-electrical-wiring-db-box-ups-setup.jpg",
        items: ["Commercial VRF, VRV, ductable & cassette AC installation", "Complete office electrical wiring, DB box & UPS setup", "Structured LAN cabling, Wi-Fi & server room setup", "Fire fighting sprinklers, smoke detectors & alarm systems", "Commercial plumbing, drainage & fresh air ventilation"]
      },
      {
        title: "3D Commercial Interior Rendering & Walkthroughs",
        image: "assets/service-images/commercial/C32-photorealistic-3d-office-retail-interior-renders.jpg",
        items: ["2D CAD space planning & furniture layout drawings", "Photorealistic 3D office & retail interior renders", "360-degree virtual reality (VR) interior tours", "3D animated commercial walkthrough videos", "Material mood boards & working construction blueprints"]
      }
    ],
    process: [
      ["Site intelligence", "We survey the existing condition, understand your operational needs and map the constraints before they become surprises.", "01 — 02 weeks"],
      ["Design + scope", "Layouts, technical drawings, material schedules and a clear commercial scope give every trade the same brief.", "02 — 05 weeks"],
      ["Build + coordinate", "Civil, interiors, MEP, HVAC, IT and safety move as one programme — with a single point of accountability.", "08 — 24 weeks"],
      ["Test + handover", "Every system is commissioned, documented and handed over ready for people, performance and the next phase.", "01 — 03 weeks"]
    ],
    faqs: [
      ["Can you manage a complete office fit-out?", "Yes. We manage the full sequence from survey and space planning through civil, interiors, furniture, MEP, HVAC, IT, fire safety and handover."],
      ["Do you execute live-site renovations?", "We do. We plan phasing, protection, access and out-of-hours work where required so the business can keep moving while the space changes around it."],
      ["What is included in a commercial quote?", "The scope is built around your site and brief. It can include design, civil, finishes, furniture, MEP, HVAC, electrical, IT, fire safety and documentation."],
      ["Can you work from an existing design or BOQ?", "Yes. We can execute from your consultant’s drawings or review, value-engineer and coordinate the package before mobilising on site."],
      ["How do we start a project?", "Share your city, approximate area, timeline and what you are building. We will come back with a focused discovery plan and the right next conversation."]
    ],
    insightsCopy: "Clear, useful guidance for planning office fit-outs, civil works and technical delivery — from first survey to a workplace ready for people.",
    blogs: [
      ["Corporate Office Renovation: A Practical Planning Guide", "OFFICE RENOVATION", "Understand the right sequence for survey, space planning, demolition, civil work, interiors, MEP, furniture and handover.", "8 min read", image("photo-1497366811353-6870744d04b2")],
      ["Bare Shell to Full Office Fit-Out: What Is Included?", "TURNKEY FIT-OUT", "A clear breakdown of the journey from warm shell to furnished office, including finishes, services, coordination and commissioning.", "9 min read", image("photo-1497366216548-37526070297c")],
      ["Commercial MEP and HVAC Planning for Modern Workplaces", "MEP + HVAC", "Why electrical, HVAC, fresh air, plumbing, fire safety, data and server-room planning should be resolved before interiors begin.", "8 min read", image("photo-1556761175-b413da4baf72")],
      ["Glass Partitions for Offices: Frameless, Acoustic or Demountable?", "GLASS PARTITIONS", "Compare the most useful office glass partition systems for privacy, daylight, acoustics, branding and future change.", "7 min read", image("photo-1542744173-8e7e53415bb0")],
      ["Acoustic Office Design: From Meeting Rooms to Phone Booths", "WORKPLACE ACOUSTICS", "A guide to acoustic panels, ceiling baffles, soundproof cabins and planning quieter, more focused commercial interiors.", "7 min read", image("photo-1497366754035-f200968a6e72")],
      ["Commercial Flooring Options for Offices and Retail Spaces", "COMMERCIAL FLOORING", "Choose between carpet tile, LVP, SPC, tile, stone, epoxy and raised access flooring based on use, maintenance and performance.", "7 min read", image("photo-1497366216548-37526070297c")],
      ["Commercial Civil Contracting: Scope, Sequence and Site Control", "CIVIL CONTRACTING", "What to expect from commercial civil execution, including demolition, masonry, plastering, waterproofing, structural repairs and facade work.", "8 min read", image("photo-1504307651254-35680f356dfd")]
    ]
  }
};

let activeWorld = null;
let motionReady = false;
let activeComparisonIndex = 0;
let comparisonObserver = null;
let comparisonHasEntered = false;
let comparisonLeftAfterEnter = false;
let heroWatchdogTimer = null;
let heroRetryInterval = null;
let heroListenersBound = false;
let zoomHandoverTimers = [];
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

function titleMarkup(title) {
  const parts = title.split(" & ");
  if (parts.length > 1) return `${parts[0]} <i>&amp; ${parts.slice(1).join(" & ")}</i>`;
  const words = title.split(" ");
  if (words.length > 3) return `${words.slice(0, -2).join(" ")} <i>${words.slice(-2).join(" ")}</i>`;
  return title;
}

function editorialTitleMarkup(title) {
  const parts = title.split(" & ");
  if (parts.length > 1) return `${parts[0]} <i>&amp; ${parts.slice(1).join(" & ")}</i>`;
  const words = title.trim().split(/\s+/);
  if (words.length >= 4) return `${words.slice(0, -2).join(" ")} <i>${words.slice(-2).join(" ")}</i>`;
  if (words.length >= 2) return `${words.slice(0, -1).join(" ")} <i>${words[words.length - 1]}</i>`;
  return title;
}

function updateSeo(data) {
  const description = `${data.name} in Navi Mumbai by ShineX Infra Solutions (Parent Company: Sneha Enterprises) — ${data.heroDescription}`;
  $("#metaDescription").setAttribute("content", description);
  let schema = $("#seoSchema");
  if (!schema) {
    schema = document.createElement("script");
    schema.id = "seoSchema";
    schema.type = "application/ld+json";
    document.head.appendChild(schema);
  }
  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `ShineX ${data.name} — Trusted Interior & Civil Execution in Navi Mumbai`,
    description,
    areaServed: ["Navi Mumbai", "Mumbai", "Thane"],
    publisher: {
      "@type": "Organization",
      name: "ShineX Infra Solutions",
      parentOrganization: { "@type": "Organization", name: "Sneha Enterprises" }
    },
    hasPart: data.blogs.map(blog => ({ "@type": "Article", headline: blog[0], description: blog[2], articleSection: blog[1], publisher: { "@type": "Organization", name: "ShineX Infra Solutions" } }))
  });
}

function renderExperience(world) {
  activeWorld = world;
  const data = experienceData[world];
  $("#headerWorld").textContent = data.header;
  $("#heroTitle").innerHTML = data.heroTitle;
  $("#heroDescription").textContent = data.heroDescription;
  const heroVideo = $("#heroVideo");
  if (heroVideo) {
    const isMobileHero = window.matchMedia("(max-width: 768px)").matches;
    const heroSrc = isMobileHero && data.heroVideoMobile ? data.heroVideoMobile : data.heroVideo;
    const heroPoster = isMobileHero && data.heroImageMobile ? data.heroImageMobile : data.heroImage;
    heroVideo.poster = heroPoster;
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute("muted", "");
    heroVideo.setAttribute("playsinline", "");
    bindHeroVideoEvents(heroVideo);
    if (heroVideo.getAttribute("data-src") !== heroSrc) {
      heroVideo.setAttribute("data-src", heroSrc);
      heroVideo.src = heroSrc;
      heroVideo.load();
    }
    tryPlayHeroVideo();
  }
  $("#introTitle").innerHTML = data.introTitle;
  $("#introCopy").textContent = data.introCopy;
  $("#servicesNote").textContent = data.servicesNote;
  preloadComparisonPairs(data.comparisons || []);
  activeComparisonIndex = 0;
  comparisonHasEntered = false;
  comparisonLeftAfterEnter = false;
  if (comparisonObserver) { comparisonObserver.disconnect(); comparisonObserver = null; }
  showComparisonPair(0, { animate: false });
  $("#closingImage").style.backgroundImage = `url("${data.closingImage}")`;
  $("#closingTitle").innerHTML = data.closingTitle;
  $("#catalogCopy").textContent = data.catalogCopy;
  $("#insightsCopy").textContent = data.insightsCopy;
  $("#menuWorld").textContent = data.name;
  const footerWorld = $("#footerWorldName");
  if (footerWorld) footerWorld.textContent = data.name;
  $("#progressTotal").textContent = String(data.services.length).padStart(2, "0");

  $("#servicesTrack").innerHTML = data.services.map((service, index) => `
    <article class="service-card" data-service-index="${index}" role="button" tabindex="0" aria-label="Open ${service.title}">
      <div class="service-card-image" style="background-image:url('${service.image}')"></div>
      <div class="service-card-top"><span>${String(index + 1).padStart(2, "0")}</span><span>${data.name} / ${String(data.services.length).padStart(2, "0")}</span></div>
      <div class="service-card-bottom"><h4>${titleMarkup(service.title)}</h4><span class="service-card-open">Open full service <span>↗</span></span></div>
    </article>`).join("");
  bindServiceCards(data);
  const serviceDetail = $("#serviceDetail");
  serviceDetail.classList.remove("is-visible");
  serviceDetail.setAttribute("aria-hidden", "true");

  $("#processList").innerHTML = data.process.map((item, index) => `
    <article class="process-item"><span class="process-number">${String(index + 1).padStart(2, "0")}</span><div><h4>${item[0]}</h4><p>${item[1]}</p></div><span class="process-time">${item[2]}</span><figure class="process-visual"><div style="background-image:url('${processVisuals[world][index]}')"></div><span>${data.name} / phase ${String(index + 1).padStart(2, "0")}</span></figure></article>`).join("");

  $("#catalogGrid").innerHTML = data.catalog.map((item, index) => `
    <figure class="catalog-card"><div class="catalog-card-image" style="background-image:url('${item[2]}')"></div><figcaption>${item[0]}<small>${item[1]}</small></figcaption></figure>`).join("");

  $("#faqList").innerHTML = data.faqs.map((item, index) => `
    <article class="faq-item${index === 0 ? " is-open" : ""}"><button class="faq-question" type="button"><span>${item[0]}</span><b>+</b></button><div class="faq-answer"><p>${item[1]}</p></div></article>`).join("");
  bindFaqs();
  renderReviews();
  const blogMarkup = data.blogs.map((blog, index) => `
    <article class="blog-card" data-blog-index="${index}" role="button" tabindex="0" aria-label="Open ${blog[0]}"><div class="blog-media"><div style="background-image:url('${blog[4]}')"></div><span>${String(index + 1).padStart(2, "0")} / ${blog[1]}</span></div><div class="blog-card-meta"><span>ShineX ${data.name}</span><span>${blog[3]}</span></div><h4>${blog[0]}</h4><p>${blog[2]}</p><button class="blog-read" type="button">Read full insight <span>↗</span></button></article>`).join("");
  $("#blogTrack").innerHTML = `<div class="marquee-group">${blogMarkup}</div><div class="marquee-group" aria-hidden="true">${blogMarkup}</div>`;
  bindBlogCards(data);
  updateComparison(54);
  document.title = `ShineX — ${data.name}`;
  updateSeo(data);
  document.body.dataset.world = world;
}

function renderReviews() {
  $("#googleSource").href = googleProfile.url;
  $(".google-score strong").textContent = googleProfile.rating;
  $(".google-score small").textContent = googleProfile.count;
  const reviewMarkup = (review) => `<article class="review-card"><div class="review-card-main"><div class="review-card-top"><span class="review-google"><img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google" /><b>Verified review</b></span><span class="review-card-rating">★★★★★</span></div><p>“${review.text}”</p><div class="review-card-footer"><div class="review-author"><span class="review-author-avatar">${review.initials || "VC"}</span><span><strong>${review.author}</strong><small>${review.detail}</small></span></div><span class="review-date">${review.date}</span></div></div></article>`;
  $("#reviewFeature").innerHTML = "";
  const markup = reviewHighlights.map(review => reviewMarkup(review)).join("");
  $("#reviewTrack").innerHTML = `<div class="marquee-group">${markup}</div><div class="marquee-group" aria-hidden="true">${markup}</div>`;
}

function bindBlogCards(data) {
  $$("#blogTrack .blog-card").forEach(card => {
    const open = () => openArticle(data, Number(card.dataset.blogIndex));
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } });
    $(".blog-read", card).addEventListener("click", event => { event.stopPropagation(); open(); });
  });
}

function openArticle(data, index) {
  closeMenu(true);
  const blog = data.blogs[index];
  const overlay = $("#articleOverlay");
  $("#articleMedia").style.backgroundImage = `url("${blog[4]}")`;
  $("#articleCategory").textContent = blog[1];
  $("#articleTitle").textContent = blog[0];
  $("#articleWorld").textContent = `ShineX ${data.name}`;
  $("#articleReadTime").textContent = blog[3];
  $("#articleBody").innerHTML = `<p>${blog[2]}</p><p>Good spaces begin with the right questions: how the space will be used, what needs to last, where the budget creates the most value and which details make the result feel personal. A clear brief helps every decision stay connected.</p><p>ShineX brings design, materials and execution into one coordinated process, so the idea remains practical from the first drawing through the final handover.</p>`;
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  if (window.gsap) gsap.fromTo(".article-media, .article-copy > *", { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .7, ease: "power3.out", stagger: .06 });
  if (window.history) window.history.replaceState(null, "", `#insight-${activeWorld}-${index + 1}`);
}

function closeArticle(immediate = false) {
  const overlay = $("#articleOverlay");
  if (!overlay.classList.contains("is-open")) return;
  const finish = () => { overlay.classList.remove("is-open"); overlay.setAttribute("aria-hidden", "true"); document.body.classList.remove("is-locked"); if (window.history) window.history.replaceState(null, "", window.location.href.split("#")[0]); };
  if (immediate || !window.gsap) finish();
  else gsap.to(".article-media, .article-copy > *", { y: -18, autoAlpha: 0, duration: .3, stagger: .02, onComplete: finish });
}

function stopHeroPlaybackRetries() {
  if (heroWatchdogTimer) {
    window.clearTimeout(heroWatchdogTimer);
    heroWatchdogTimer = null;
  }
  if (heroRetryInterval) {
    window.clearInterval(heroRetryInterval);
    heroRetryInterval = null;
  }
}

function clearZoomTransition() {
  zoomHandoverTimers.forEach(t => window.clearTimeout(t));
  zoomHandoverTimers = [];
  $$(".world-option").forEach(opt => opt.classList.remove("is-chosen"));
  $$("body > .option-backdrop.is-zooming").forEach(bd => {
    const worldName = bd.dataset.ownerWorld;
    const owner = worldName ? document.querySelector(`.world-option[data-world="${worldName}"]`) : null;
    bd.classList.remove("is-zooming");
    bd.style.cssText = "";
    if (owner) owner.insertBefore(bd, owner.firstChild);
    else bd.remove();
  });
  const picker = $("#worldPicker");
  if (picker) picker.classList.remove("is-zooming");
  document.body.classList.remove("is-zooming");
}

function tryPlayHeroVideo() {
  const heroVideo = $("#heroVideo");
  const shell = $("#siteShell");
  if (!heroVideo || !activeWorld || (shell && shell.style.display === "none")) return;
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.playsInline = true;
  heroVideo.setAttribute("muted", "");
  heroVideo.setAttribute("playsinline", "");
  const playPromise = heroVideo.play();
  if (playPromise && typeof playPromise.then === "function") {
    playPromise.then(() => {
      if (!heroVideo.paused) stopHeroPlaybackRetries();
    }).catch(() => {});
  }
}

function bindHeroVideoEvents(heroVideo) {
  if (!heroVideo || heroListenersBound) return;
  heroListenersBound = true;
  ["canplay", "loadeddata"].forEach(evt => {
    heroVideo.addEventListener(evt, () => {
      const shell = $("#siteShell");
      if (activeWorld && shell && shell.style.display !== "none" && heroVideo.paused) {
        tryPlayHeroVideo();
      }
    });
  });
  heroVideo.addEventListener("playing", stopHeroPlaybackRetries);
}

function scheduleHeroPlaybackWatchdog() {
  stopHeroPlaybackRetries();
  heroWatchdogTimer = window.setTimeout(() => {
    const heroVideo = $("#heroVideo");
    if (!heroVideo || !activeWorld) return;
    if (!heroVideo.paused) return;
    tryPlayHeroVideo();
    let elapsed = 0;
    heroRetryInterval = window.setInterval(() => {
      const vid = $("#heroVideo");
      const shell = $("#siteShell");
      elapsed += 700;
      if (!vid || !activeWorld || (shell && shell.style.display === "none") || !vid.paused || elapsed >= 6300) {
        stopHeroPlaybackRetries();
        return;
      }
      tryPlayHeroVideo();
    }, 700);
  }, 1000);
}

function chooseWorld(world) {
  if (document.body.classList.contains("is-zooming")) return;
  stopHeroPlaybackRetries();
  clearZoomTransition();
  const picker = $("#worldPicker");
  const shell = $("#siteShell");
  const option = document.querySelector(`.world-option[data-world="${world}"]`);
  const backdrop = option ? option.querySelector(".option-backdrop") : null;
  const cardVideo = backdrop ? backdrop.querySelector("video") : null;
  const heroVideo = $("#heroVideo");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  shell.style.display = "block";
  shell.setAttribute("aria-hidden", "false");
  renderExperience(world);
  document.body.classList.remove("is-locked");
  motionReady = true;
  tryPlayHeroVideo();
  scheduleHeroPlaybackWatchdog();
  const finishEnter = () => {
    window.scrollTo(0, 0);
    tryPlayHeroVideo();
    window.setTimeout(initMotion, 60);
  };
  if (backdrop && cardVideo && window.gsap && !reduceMotion) {
    // Shared-element zoom: the picked card's own video expands to fill the screen,
    // then hands over to the same video playing as the world hero background.
    cardVideo.play().catch(() => {});
    backdrop.dataset.ownerWorld = world;
    document.body.classList.add("is-zooming");
    picker.classList.add("is-zooming");
    option.classList.add("is-chosen");
    const rect = backdrop.getBoundingClientRect();
    document.body.appendChild(backdrop); // keep the same playing video, escape the picker fade
    backdrop.classList.add("is-zooming");
    Object.assign(backdrop.style, { position: "fixed", left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`, zIndex: "300", opacity: "1", transform: "none", margin: "0" });
    gsap.to(picker, { autoAlpha: 0, duration: .8, ease: "power3.inOut", onComplete: () => { picker.style.display = "none"; } });
    gsap.fromTo(".site-header", { y: -30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .65, delay: .55 });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      Object.assign(backdrop.style, { left: "0px", top: "0px", width: `${window.innerWidth}px`, height: `${window.innerHeight}px` });
    }));
    const syncHero = () => {
      try {
        if (heroVideo && heroVideo.readyState >= 1 && cardVideo.currentTime > 0) {
          heroVideo.currentTime = cardVideo.currentTime;
        }
      } catch (e) {}
      tryPlayHeroVideo();
    };
    zoomHandoverTimers.push(window.setTimeout(syncHero, 500));
    zoomHandoverTimers.push(window.setTimeout(() => {
      syncHero();
      option.insertBefore(backdrop, option.firstChild);
      backdrop.classList.remove("is-zooming");
      backdrop.style.cssText = "";
      picker.classList.remove("is-zooming");
      option.classList.remove("is-chosen");
      document.body.classList.remove("is-zooming");
      finishEnter();
    }, 980));
  } else {
    if (window.gsap) {
      gsap.timeline().to(picker, { autoAlpha: 0, duration: .8, ease: "power3.inOut", onComplete: () => { picker.style.display = "none"; tryPlayHeroVideo(); } }).fromTo(".site-header", { y: -30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .65 }, "-=.2");
    } else picker.style.display = "none";
    finishEnter();
  }
}

function switchWorld() {
  stopHeroPlaybackRetries();
  clearZoomTransition();
  const picker = $("#worldPicker");
  const shell = $("#siteShell");
  const heroVideo = $("#heroVideo");
  if (heroVideo) heroVideo.pause();
  if (comparisonObserver) { comparisonObserver.disconnect(); comparisonObserver = null; }
  $$(".world-option video").forEach(v => { v.pause(); v.currentTime = 0; v.load(); });
  picker.style.display = "flex";
  if (window.gsap) gsap.fromTo(picker, { autoAlpha: 0 }, { autoAlpha: 1, duration: .55, ease: "power2.out" });
  else picker.style.opacity = "1";
  shell.style.display = "none";
  shell.setAttribute("aria-hidden", "true");
  window.scrollTo(0, 0);
}

function preloadComparisonPairs(pairs) {
  pairs.forEach(pair => {
    [pair.beforeImage, pair.afterImage].forEach(src => {
      if (!src) return;
      const img = new Image();
      img.src = src;
    });
  });
}

function showComparisonPair(index, { animate = true } = {}) {
  const data = experienceData[activeWorld];
  const pairs = (data && data.comparisons) || [];
  if (!pairs.length) return;
  const safeIdx = ((index % pairs.length) + pairs.length) % pairs.length;
  const pair = pairs[safeIdx];
  const before = $("#comparisonBefore");
  const after = $("#comparisonAfter");
  const beforePrev = $("#comparisonBeforePrev");
  const afterPrev = $("#comparisonAfterPrev");
  const countEl = $("#comparisonCount");
  const nameEl = $("#comparisonName");
  const nextBeforeBg = `linear-gradient(90deg, rgba(0,0,0,.1), rgba(255,255,255,.12)), url("${pair.beforeImage}")`;
  const nextAfterBg = `linear-gradient(90deg, rgba(0,0,0,.05), rgba(0,0,0,.15)), url("${pair.afterImage}")`;

  if (countEl) countEl.textContent = `${String(safeIdx + 1).padStart(2, "0")} / ${String(pairs.length).padStart(2, "0")}`;
  if (nameEl) nameEl.textContent = pair.name;

  if (animate && before && after && beforePrev && afterPrev) {
    beforePrev.style.backgroundImage = before.style.backgroundImage || nextBeforeBg;
    afterPrev.style.backgroundImage = after.style.backgroundImage || nextAfterBg;
    before.classList.add("is-fading");
    after.classList.add("is-fading");
    before.style.backgroundImage = nextBeforeBg;
    after.style.backgroundImage = nextAfterBg;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      before.classList.remove("is-fading");
      after.classList.remove("is-fading");
    }));
  } else {
    if (before) before.style.backgroundImage = nextBeforeBg;
    if (after) after.style.backgroundImage = nextAfterBg;
    if (beforePrev) beforePrev.style.backgroundImage = nextBeforeBg;
    if (afterPrev) afterPrev.style.backgroundImage = nextAfterBg;
  }
}

function initComparisonObserver() {
  const section = $("#beforeAfter");
  if (!section || !window.IntersectionObserver) return;
  if (comparisonObserver) comparisonObserver.disconnect();
  comparisonHasEntered = false;
  comparisonLeftAfterEnter = false;
  comparisonObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!comparisonHasEntered) {
          comparisonHasEntered = true;
          comparisonLeftAfterEnter = false;
        } else if (comparisonLeftAfterEnter) {
          comparisonLeftAfterEnter = false;
          const pairs = (experienceData[activeWorld] && experienceData[activeWorld].comparisons) || [];
          if (pairs.length > 1) {
            activeComparisonIndex = (activeComparisonIndex + 1) % pairs.length;
            showComparisonPair(activeComparisonIndex, { animate: true });
          }
        }
      } else if (comparisonHasEntered) {
        comparisonLeftAfterEnter = true;
      }
    });
  }, { threshold: 0.12 });
  comparisonObserver.observe(section);
}

function updateComparison(value) {
  const before = $("#comparisonBefore");
  const beforePrev = $("#comparisonBeforePrev");
  const divider = $(".comparison-divider");
  const range = $(".comparison-range");
  if (!before || !divider) return;
  const clip = `inset(0 ${100 - Number(value)}% 0 0)`;
  before.style.width = "100%";
  before.style.clipPath = clip;
  if (beforePrev) {
    beforePrev.style.width = "100%";
    beforePrev.style.clipPath = clip;
  }
  divider.style.left = `${value}%`;
  if (range && Number(range.value) !== Number(value)) range.value = String(value);
}

function getSubReferenceGroup(itemTitle) {
  const entry = residentialSubReferences[itemTitle];
  if (!entry) return null;
  return Array.isArray(entry) ? { cover: null, refs: entry } : entry;
}

function showSubItemReferences(itemTitle, itemIndex) {
  const group = getSubReferenceGroup(itemTitle);
  const refs = group && group.refs;
  if (!refs || !refs.length) return;

  const drawer = $("#detailReferencesDrawer");
  const titleEl = $("#referencesDrawerTitle");
  const subtitleEl = $("#referencesDrawerSubtitle");
  const gridEl = $("#referencesGrid");

  // Highlight active sub-service card
  $$("#serviceDetailGrid .detail-item").forEach((card, idx) => {
    card.classList.toggle("is-active", idx === itemIndex);
  });

  titleEl.innerHTML = `${itemTitle} &mdash; <i>04 Curated Concepts</i>`;
  subtitleEl.textContent = `Visual spatial references, material selections, and execution details for ${itemTitle.toLowerCase()}.`;

  gridEl.innerHTML = refs.map((ref, rIdx) => `
    <article class="reference-card">
      <div class="reference-card-media" style="background-image:url('${ref.image}')"></div>
      <div class="reference-card-bottom">
        <button class="reference-quote-btn quote-trigger" type="button" data-ref-title="Concept 0${rIdx + 1} — ${ref.title}" data-parent-title="${itemTitle}">Quote this concept <span>↗</span></button>
      </div>
    </article>
  `).join("");

  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");

  // Re-bind quote triggers in drawer
  $$("#referencesGrid .quote-trigger").forEach(button => {
    button.addEventListener("click", () => openQuote({
      world: activeWorld === "commercial" ? "Commercial & Civil" : "Residential",
      service: activeServiceTitle || itemTitle,
      subService: button.dataset.parentTitle || itemTitle,
      concept: button.dataset.refTitle || ""
    }));
  });

  if (window.gsap) {
    gsap.fromTo("#referencesGrid .reference-card", 
      { y: 24, autoAlpha: 0 }, 
      { y: 0, autoAlpha: 1, duration: .5, ease: "power3.out", stagger: .07 }
    );
  }

  window.setTimeout(() => {
    drawer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 100);
}

function closeSubItemReferences() {
  const drawer = $("#detailReferencesDrawer");
  if (!drawer) return;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  $$("#serviceDetailGrid .detail-item").forEach(card => card.classList.remove("is-active"));
}

let activeServiceTitle = "";
let activeQuoteContext = null;

function showServiceDetail(data, serviceIndex) {
  closeSubItemReferences();
  $$("#servicesTrack .service-card").forEach((card, idx) => {
    card.classList.toggle("is-active", idx === serviceIndex);
  });
  const service = data.services[serviceIndex];
  activeServiceTitle = service.title;
  const detail = $("#serviceDetail");
  $("#serviceDetailTitle").innerHTML = `${titleMarkup(service.title)}<br /><i>in full detail.</i>`;
  $("#serviceDetailIntro").textContent = `A closer look at ${service.title.toLowerCase()}. Every included layer is shown below with a visual reference for the conversation.`;
  const grid = $("#serviceDetailGrid");
  grid.style.gridTemplateColumns = window.innerWidth > 800 ? `repeat(${service.items.length}, 1fr)` : "";
  const activePool = data.name === "Residential" ? detailImagePool.slice(0, 12) : detailImagePool;
  grid.innerHTML = service.items.map((item, itemIndex) => {
    const imageIndex = (serviceIndex * 5 + itemIndex) % activePool.length;
    const subGroup = data.name === "Residential" ? getSubReferenceGroup(item) : null;
    const hasRefs = Boolean(subGroup && subGroup.refs && subGroup.refs.length);
    const itemImage = data.name === "Residential"
      ? (hasRefs ? (subGroup.cover || (subGroup.refs[0] && subGroup.refs[0].image) || activePool[imageIndex]) : activePool[imageIndex])
      : (commercialSubImages[item] || activePool[imageIndex]);
    return `
      <article class="detail-item${hasRefs ? " has-references" : ""}" data-item-index="${itemIndex}" data-item-title="${item}">
        <div class="detail-item-media" style="background-image:url('${itemImage}')"></div>
        <div class="detail-item-top">
          <span class="detail-item-num">${String(itemIndex + 1).padStart(2, "0")}</span>
          <span class="detail-item-scope">${data.name} / Scope</span>
        </div>
        <div class="detail-item-bottom">
          <h4>${editorialTitleMarkup(item)}</h4>
          <div class="detail-actions-row">
            <button class="detail-quote quote-trigger" type="button">Get free quote <span>↗</span></button>
            ${hasRefs ? `<button class="detail-inspect-btn" type="button"><span>View 4 concepts</span> <b>↓</b></button>` : ""}
          </div>
        </div>
      </article>`;
  }).join("");
  detail.classList.add("is-visible");
  detail.setAttribute("aria-hidden", "false");
  if (window.gsap) {
    gsap.fromTo("#serviceDetail .service-detail-top, #serviceDetail .service-detail-intro, #serviceDetail .detail-item", { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .65, ease: "power3.out", stagger: .06 });
  }

  // Quote triggers on detail items
  $$("#serviceDetail .detail-quote").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      const card = button.closest(".detail-item");
      openQuote({
        world: data.name,
        service: service.title,
        subService: card ? card.dataset.itemTitle : "",
        concept: ""
      });
    });
  });

  // If residential, clicking card or inspect button reveals 4 references
  if (data.name === "Residential") {
    $$("#serviceDetailGrid .detail-item.has-references").forEach(card => {
      card.addEventListener("click", event => {
        if (event.target.closest(".detail-quote")) return;
        const itemTitle = card.dataset.itemTitle;
        const itemIdx = Number(card.dataset.itemIndex);
        showSubItemReferences(itemTitle, itemIdx);
      });
    });
  }

  window.setTimeout(() => detail.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  if (window.ScrollTrigger) window.setTimeout(() => ScrollTrigger.refresh(), 500);
}

function bindServiceCards(data) {
  $$("#servicesTrack .service-card").forEach(card => {
    const open = () => showServiceDetail(data, Number(card.dataset.serviceIndex));
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } });
  });
}

function closeServiceDetail() {
  closeSubItemReferences();
  $$("#servicesTrack .service-card").forEach(card => card.classList.remove("is-active"));
  const detail = $("#serviceDetail");
  detail.classList.remove("is-visible");
  detail.setAttribute("aria-hidden", "true");
}

function bindFaqs() {
  $$(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.contains("is-open");
      $$(".faq-item").forEach(other => { other.classList.remove("is-open"); const answer = $(".faq-answer", other); answer.style.height = "0px"; });
      if (!isOpen) { item.classList.add("is-open"); $(".faq-answer", item).style.height = `${$(".faq-answer p", item).offsetHeight + 25}px`; }
    });
  });
  const initial = $(".faq-item.is-open");
  if (initial) {
    const ans = $(".faq-answer", initial);
    const p = $(".faq-answer p", initial);
    ans.style.height = p && p.offsetHeight > 0 ? `${p.offsetHeight}px` : "auto";
  }
}

function openMenu() {
  const overlay = $("#menuOverlay");
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  $("#menuOpen").setAttribute("aria-expanded", "true");
  if (!window.gsap) return;
  gsap.set(".menu-link, .menu-kicker, .menu-quote, .menu-footer", { y: 45, autoAlpha: 0 });
  gsap.set(".orbit-one", { scale: .75, rotation: -18, autoAlpha: 0 });
  gsap.set(".orbit-two", { scale: 1.2, rotation: 18, autoAlpha: 0 });
  gsap.timeline().to(".orbit-one, .orbit-two", { scale: 1, rotation: 0, autoAlpha: 1, duration: 1.2, ease: "power3.out", stagger: .08 }).to(".menu-kicker, .menu-link, .menu-quote, .menu-footer", { y: 0, autoAlpha: 1, duration: .75, ease: "power3.out", stagger: .055 }, "-=.75");
}

function closeMenu(immediate = false) {
  const overlay = $("#menuOverlay");
  if (!overlay.classList.contains("is-open")) return;
  $("#menuOpen").setAttribute("aria-expanded", "false");
  if (immediate) {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    return;
  }
  if (window.gsap) {
    gsap.to(".menu-link, .menu-kicker, .menu-quote, .menu-footer", { y: -25, autoAlpha: 0, duration: .35, ease: "power2.in", stagger: .025, onComplete: () => { overlay.classList.remove("is-open"); overlay.setAttribute("aria-hidden", "true"); document.body.classList.remove("is-locked"); } });
  } else { overlay.classList.remove("is-open"); overlay.setAttribute("aria-hidden", "true"); document.body.classList.remove("is-locked"); }
}

function openQuote(context = null) {
  closeMenu(true);
  closeArticle(true);
  const worldName = activeWorld === "commercial" ? "Commercial & Civil" : "Residential";
  activeQuoteContext = context && typeof context === "object" && !(context instanceof Event)
    ? context
    : { world: worldName, service: "General Enquiry", subService: "", concept: "" };

  const badge = $("#quoteContextBadge");
  if (badge) {
    const parts = [activeQuoteContext.world, activeQuoteContext.service, activeQuoteContext.subService, activeQuoteContext.concept].filter(Boolean);
    if (parts.length > 1) {
      badge.textContent = `Brief: ${parts.join(" • ")}`;
      badge.classList.add("is-visible");
    } else {
      badge.textContent = "";
      badge.classList.remove("is-visible");
    }
  }

  const overlay = $("#quoteOverlay");
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  $("#formSuccess").classList.remove("is-visible");
  if (window.gsap) {
    gsap.set(".quote-form-wrap > div, .quote-form label, .quote-form .solid-button, .quote-form .quote-whatsapp-btn", { y: 28, autoAlpha: 0 });
    gsap.timeline().fromTo(".quote-backdrop", { autoAlpha: 0 }, { autoAlpha: 1, duration: .35 }).to(".quote-form-wrap > div, .quote-form label, .quote-form .solid-button, .quote-form .quote-whatsapp-btn", { y: 0, autoAlpha: 1, duration: .7, ease: "power3.out", stagger: .05 }, "-=.1");
  }
}

function captureWebsiteLead(form) {
  const fd = new FormData(form);
  const ctx = activeQuoteContext || {
    world: activeWorld === "commercial" ? "Commercial & Civil" : "Residential",
    service: "General Enquiry",
    subService: "",
    concept: ""
  };
  const now = new Date();
  const lead = {
    id: `LD-${Date.now().toString(36).toUpperCase()}`,
    createdAt: now.toISOString(),
    name: String(fd.get("name") || "").trim(),
    contact: String(fd.get("contact") || "").trim(),
    email: String(fd.get("email") || "").trim(),
    city: String(fd.get("city") || "").trim() || "Navi Mumbai",
    message: String(fd.get("message") || "").trim(),
    world: ctx.world || "Residential",
    service: ctx.service || "General Enquiry",
    subService: ctx.subService || "",
    concept: ctx.concept || "",
    status: "New",
    priority: "Warm",
    estimatedValue: 0,
    followUpAt: "",
    assignedTo: "Salim Ahmed",
    source: "Website Quote Form",
    notes: []
  };

  try {
    const raw = localStorage.getItem("shinex_crm_v1");
    const db = raw ? JSON.parse(raw) : { leads: [], schedule: [], projects: [] };
    if (!Array.isArray(db.leads)) db.leads = [];
    db.leads.unshift(lead);
    localStorage.setItem("shinex_crm_v1", JSON.stringify(db));
  } catch (e) {}

  try {
    const syncRaw = localStorage.getItem("shinex_crm_sync");
    const sync = syncRaw ? JSON.parse(syncRaw) : null;
    const configUrl = window.SHINEX_CRM_CONFIG && window.SHINEX_CRM_CONFIG.WEBHOOK_URL;
    const webhookUrl = (sync && sync.webhookUrl) || configUrl || "";
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ type: "new_lead", lead })
      }).catch(() => {});
    }
  } catch (e) {}
}

function closeQuote() {
  const overlay = $("#quoteOverlay");
  if (!overlay.classList.contains("is-open")) return;
  if (window.gsap) gsap.to(".quote-form-wrap > div, .quote-form label, .quote-form .solid-button, .quote-form .quote-whatsapp-btn", { y: -18, autoAlpha: 0, duration: .3, stagger: .02, onComplete: finish });
  else finish();
  function finish() { overlay.classList.remove("is-open"); overlay.setAttribute("aria-hidden", "true"); document.body.classList.remove("is-locked"); }
}

function initMotion() {
  if (!window.gsap) { motionReady = true; return; }
  motionReady = true;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  gsap.killTweensOf(".hero-image, .hero-content, .section-index, .intro-topbar, .intro-layout, .service-card, .process-item, .catalog-card");
  if (window.ScrollTrigger) ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.set(".intro-topbar, .intro-layout, .process-item, .catalog-card, .blog-card", { clearProps: "opacity,visibility,transform" });
  const heroImage = $("#heroVideo");
  gsap.fromTo(heroImage, { scale: 1.14 }, { scale: 1.04, duration: 1.8, ease: "power3.out" });
  gsap.fromTo(".hero-content > *", { y: 35, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .9, ease: "power3.out", stagger: .1, delay: .2 });
  if (window.ScrollTrigger) {
    gsap.to(heroImage, { yPercent: 14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.utils.toArray(".intro-topbar, .intro-layout, .story-heading, .process-header, .catalog-heading, .faq-layout, .insights-heading").forEach(element => gsap.from(element, { y: 45, autoAlpha: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 82%" } }));
    gsap.utils.toArray(".process-item, .catalog-card, .blog-card").forEach(element => gsap.from(element, { y: 30, autoAlpha: 0, duration: .7, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%" } }));
    gsap.utils.toArray(".process-item").forEach(element => {
      const visual = $(".process-visual", element);
      if (visual) gsap.fromTo(visual, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: .9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 84%" } });
    });
    const track = $("#servicesTrack");
    const viewport = $(".services-viewport");
    const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth + window.innerWidth * .1);
    gsap.to(track, { x: () => -distance(), ease: "none", scrollTrigger: { trigger: ".services-section", start: "top top", end: () => `+=${Math.max(700, distance())}`, pin: true, scrub: 1, invalidateOnRefresh: true, onUpdate: self => { $("#progressBar").style.width = `${Math.max(12, self.progress * 100)}%`; } } });
  }
  if (window.ScrollTrigger) ScrollTrigger.refresh();
  initComparisonObserver();
}

function initCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  document.body.classList.add("has-cursor");
  const dot = $(".cursor-dot"); const ring = $(".cursor-ring");
  document.addEventListener("mousemove", event => {
    if (window.gsap) { gsap.to(dot, { x: event.clientX, y: event.clientY, duration: .08 }); gsap.to(ring, { x: event.clientX, y: event.clientY, duration: .35, ease: "power3.out" }); }
    else { dot.style.left = `${event.clientX}px`; dot.style.top = `${event.clientY}px`; ring.style.left = `${event.clientX}px`; ring.style.top = `${event.clientY}px`; }
  });
  $$('a, button, input, textarea, .comparison-range').forEach(element => { element.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover")); element.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover")); });
}

function initMagnetic() {
  if (!window.gsap || window.matchMedia("(pointer: coarse)").matches) return;
  $$(".magnetic").forEach(element => {
    element.addEventListener("mousemove", event => { const rect = element.getBoundingClientRect(); gsap.to(element, { x: (event.clientX - rect.left - rect.width / 2) * .15, y: (event.clientY - rect.top - rect.height / 2) * .15, duration: .35, ease: "power3.out" }); });
    element.addEventListener("mouseleave", () => gsap.to(element, { x: 0, y: 0, duration: .5, ease: "elastic.out(1, .4)" }));
  });
}

function initPickerHoverVideos() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  $$(".world-option").forEach(option => {
    const video = option.querySelector(".option-backdrop video");
    if (!video) return;
    video.pause();
    option.addEventListener("pointerenter", event => {
      if (event.pointerType !== "mouse" || !canHover.matches) return;
      video.play().catch(() => {});
    });
    option.addEventListener("pointerleave", event => {
      if (event.pointerType !== "mouse") return;
      video.pause();
      video.currentTime = 0;
      video.load();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPickerHoverVideos();
  $$(".world-option").forEach(option => option.addEventListener("click", () => chooseWorld(option.dataset.world)));
  $("#switchWorld").addEventListener("click", switchWorld);
  const footerSwitch = $("#footerSwitchWorld");
  if (footerSwitch) footerSwitch.addEventListener("click", switchWorld);
  $("#menuOpen").addEventListener("click", openMenu);
  $("#menuClose").addEventListener("click", closeMenu);
  $("#quoteClose").addEventListener("click", closeQuote);
  $("#articleClose").addEventListener("click", () => closeArticle());
  $("#serviceDetailClose").addEventListener("click", closeServiceDetail);
  const refCloseBtn = $("#referencesCloseBtn");
  if (refCloseBtn) refCloseBtn.addEventListener("click", closeSubItemReferences);
  $$(".quote-trigger").forEach(button => button.addEventListener("click", () => openQuote()));
  $(".comparison-range").addEventListener("input", event => updateComparison(event.target.value));
  $("#quoteForm").addEventListener("submit", event => {
    event.preventDefault();
    captureWebsiteLead(event.target);
    $("#formSuccess").classList.add("is-visible");
    event.target.reset();
  });
  $$(".menu-link").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") { closeMenu(); closeQuote(); closeArticle(); closeServiceDetail(); } });
  initCursor();
  initMagnetic();
  if (window.gsap) gsap.set(".site-header", { autoAlpha: 0 });
});

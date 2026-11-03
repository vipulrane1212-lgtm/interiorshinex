const image = (id, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const detailImagePool = [
  image("photo-1600607687939-ce8a6c25118c"),
  image("photo-1600566753086-00f18fb6b3ea"),
  image("photo-1600210492486-724fe5c67fb0"),
  image("photo-1600607688969-a5bfcd646154"),
  image("photo-1616486338812-3dadae4b4ace"),
  image("photo-1556912173-46c336c7fd55"),
  image("photo-1617104678098-de229db51175"),
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

const experienceData = {
  residential: {
    name: "Residential",
    header: "RESIDENTIAL / 01",
    heroTitle: "Built around<br /><i>the way you live.</i>",
    heroDescription: "Thoughtful homes, made tactile. From the first line on paper to the last light switched on, we make every detail feel inevitable.",
    heroImage: image("photo-1600607688969-a5bfcd646154"),
    introTitle: "Good spaces do<br />more than <i>look good.</i>",
    introCopy: "They hold the morning rush, the quiet pause, the people who gather, and the years that follow. We bring design and execution into one considered conversation.",
    servicesNote: "A full-spectrum residential studio for homes with a point of view.",
    comparisonName: "A home with a new rhythm",
    beforeImage: "https://vipulrane1212-lgtm.github.io/shinex-interior/images/transformations/seawoods_before.jpg",
    afterImage: "https://vipulrane1212-lgtm.github.io/shinex-interior/images/transformations/seawoods_after.jpg",
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
        image: image("photo-1600607687939-ce8a6c25118c"),
        items: ["2BHK, 3BHK & 4BHK turnkey home interiors", "Living room, TV unit & foyer area design", "Master bedroom, kids room & guest room interiors", "False ceiling, ambient lighting & wall painting", "Custom home furniture, sofas & soft furnishings"]
      },
      {
        title: "Turnkey House Construction & Civil Contracting",
        image: image("photo-1503387762-592deb58ef4e"),
        items: ["Architectural floor plans & structural engineering drawings", "Excavation, foundation & RCC slab structure construction", "Brickwork, internal plastering & waterproofing work", "Complete plumbing, drainage & electrical concealed wiring", "Exterior elevation, compound wall & terrace finishing"]
      },
      {
        title: "Modular Kitchen & Wardrobe Design",
        image: image("photo-1556912173-46c336c7fd55"),
        items: ["L-shaped, U-shaped, parallel & island modular kitchens", "Acrylic, laminate, PU & glass finish kitchen cabinets", "Sliding, hinged & walk-in bedroom wardrobes", "Built-in kitchen appliances, hob, chimney & tall units", "Quartz, granite countertops & kitchen backsplash tiling"]
      },
      {
        title: "Luxury Villa & Bungalow Interior Design",
        image: image("photo-1600607687920-4e2a09cf159d"),
        items: ["Double-height living room & grand entrance foyer design", "Custom marble, Italian stone & wooden flooring work", "Private home theater, bar lounge & gym room setup", "Designer staircase, glass railings & chandelier installation", "Outdoor patio, pergola, balcony & landscape design"]
      },
      {
        title: "Flat & Apartment Renovation Services",
        image: image("photo-1617104678098-de229db51175"),
        items: ["Old flat breaking, wall modification & space expansion", "Complete bathroom, toilet & plumbing pipe replacement", "Old kitchen remodeling & new floor tile laying", "Electrical rewiring, new switchboards & AC piping", "Seepage repair, crack filling & full home repainting"]
      }
    ],
    process: [
      ["Discovery & brief", "We listen first: your routines, references, needs and the feeling you want the space to hold.", "01 — 02 weeks"],
      ["Design direction", "Plans become a point of view through spatial planning, material palettes and a clear investment map.", "02 — 04 weeks"],
      ["Detailed execution", "One accountable team coordinates every trade, detail and decision on site — with no loose ends.", "06 — 16 weeks"],
      ["Handover", "The last light, the final clean and a space ready for the life you pictured. We stay close after move-in.", "01 — 02 weeks"]
    ],
    faqs: [
      ["Can you take on a complete turnkey home?", "Yes. We can carry a project from design and drawings through civil work, interiors, furniture, lighting and final handover — with one accountable team."],
      ["Do you work with existing architects?", "Absolutely. We regularly partner with architects and can take responsibility for interiors, civil execution, MEP and site coordination as a single package."],
      ["How early should we involve ShineX?", "The earlier the better. Bringing us in during planning helps align design ambition, practical buildability and the real project budget before work begins."],
      ["Which cities do you work in?", "Our core execution team is based in India and we take on projects based on scope, site readiness and the level of involvement the brief requires."],
      ["How do I start?", "Send a few details through the quote form or WhatsApp. We will schedule a short discovery call and tell you what the next useful step is."]
    ],
    insightsCopy: "Practical guidance for homeowners planning interiors, renovations and turnkey construction — without losing the feeling behind the brief.",
    blogs: [
      ["Complete Home Interior Design for 2BHK, 3BHK and 4BHK Homes", "RESIDENTIAL INTERIORS", "A practical guide to planning a complete home interior, from space planning and storage to lighting, materials and final styling.", "8 min read", image("photo-1600607687939-ce8a6c25118c")],
      ["How to Plan a Turnkey House Construction Project", "TURNKEY CONSTRUCTION", "The key decisions to make before construction begins — drawings, approvals, structure, services, finishes, budget and handover.", "9 min read", image("photo-1503387762-592deb58ef4e")],
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
    heroDescription: "From bare shell to handover, ShineX brings design, civil execution and every critical service layer into one coordinated build.",
    heroImage: image("photo-1497366216548-37526070297c"),
    introTitle: "The best workspaces<br />make work <i>flow.</i>",
    introCopy: "We create commercial environments that carry a brand, support a team and survive real use. Strategy, build and technical delivery — held under one roof.",
    servicesNote: "A single execution partner for commercial fit-outs, civil contracting and the systems behind them.",
    comparisonName: "From bare shell to business ready",
    beforeImage: "https://vipulrane1212-lgtm.github.io/shinex-interior/images/transformations/commercial_office_before.jpg",
    afterImage: "https://vipulrane1212-lgtm.github.io/shinex-interior/images/transformations/commercial_office_after.jpg",
    closingImage: image("photo-1497366754035-f200968a6e72"),
    closingTitle: "Make room<br />for <i>what’s next.</i>",
    catalogCopy: "Durable systems, clear wayfinding and a material language that keeps the brand in focus — built for everyday performance.",
    catalog: [
      ["Acoustic calm", "PET / timber / fabric", image("photo-1497366216548-37526070297c")],
      ["Workplace light", "Task / ambient / feature", image("photo-1497366811353-6870744d04b2")],
      ["Glass + steel", "Slim / precise / durable", image("photo-1542744173-8e7e53415bb0")],
      ["Built to move", "Demountable / adaptable", image("photo-1556761175-b413da4baf72")],
      ["Technical detail", "MEP / HVAC / data", image("photo-1497366754035-f200968a6e72")]
    ],
    services: [
      {
        title: "Corporate Office Renovation & Remodeling",
        image: image("photo-1497366811353-6870744d04b2"),
        items: ["Office layout reconfiguration & space expansion", "Old office dismantling, demolition & debris removal", "Office flooring, ceiling & lighting upgrade", "Corporate reception, cabin & conference room makeover", "Office washroom, pantry & civil refurbishment"]
      },
      {
        title: "Bare Shell to Full Office Fit-Out",
        image: image("photo-1497366216548-37526070297c"),
        items: ["Turnkey warm shell to furnished office fit-out", "Complete civil, flooring & sub-floor leveling", "End-to-end MEP, HVAC & electrical fit-out", "Custom cabins, workstations & interior carpentry", "Fire safety, IT server room & security integration"]
      },
      {
        title: "Modular Office Furniture & Workstation Setup",
        image: image("photo-1556761175-b413da4baf72"),
        items: ["Linear & cluster employee workstation desks", "Executive MD desk & manager cabin furniture", "Conference table & boardroom seating setup", "Ergonomic office chairs & lounge sofas", "Custom reception desk, pedestals & storage cabinets"]
      },
      {
        title: "Glass Partition & Office Cabin Installation",
        image: image("photo-1542744173-8e7e53415bb0"),
        items: ["Frameless toughened glass cabin partitions", "Aluminum framed & slim profile glass partitions", "Acoustic double-glazed soundproof glass cabins", "Sliding, folding & demountable glass walls", "Glass frosted film, blinds & branding graphics"]
      },
      {
        title: "Commercial False Ceiling & Lighting Contractors",
        image: image("photo-1497366754035-f200968a6e72"),
        items: ["Gypsum board & POP seamless false ceiling", "Armstrong grid & mineral fiber tile ceiling", "Open cell, baffle & metal strip ceilings", "Architectural LED profile, track & panel lighting", "Exposed industrial ceiling painting & hanging lights"]
      },
      {
        title: "Acoustic & Office Soundproofing Solutions",
        image: image("photo-1497366811353-6870744d04b2"),
        items: ["Soundproof conference & meeting room setup", "Fabric, wooden slatted & PET acoustic wall panels", "Acoustic ceiling baffles & hanging sound clouds", "Soundproof office phone booths & meeting pods", "Acoustic door seals & double-glazed window treatments"]
      },
      {
        title: "Commercial Flooring, Carpet & Epoxy Work",
        image: image("photo-1497366216548-37526070297c"),
        items: ["Commercial carpet tiles & wall-to-wall carpeting", "Luxury vinyl plank (LVP), SPC & wooden flooring", "Industrial epoxy & PU screed flooring", "Vitrified tiles, marble & granite flooring work", "Raised access flooring for server & IT rooms"]
      },
      {
        title: "MEP, HVAC (AC) & Electrical Contracting",
        image: image("photo-1556761175-b413da4baf72"),
        items: ["Commercial VRF, VRV, ductable & cassette AC installation", "Complete office electrical wiring, DB box & UPS setup", "Structured LAN cabling, Wi-Fi & server room setup", "Fire fighting sprinklers, smoke detectors & alarm systems", "Commercial plumbing, drainage & fresh air ventilation"]
      },
      {
        title: "Commercial Civil & Interior Contracting",
        image: image("photo-1504307651254-35680f356dfd"),
        items: ["Brickwork, block masonry & wall plastering", "Washroom, restroom & wet pantry civil construction", "Structural steel mezzanine floor & loft fabrication", "Commercial waterproofing, screeding & structural repairs", "Building facade, ACP cladding & exterior civil work"]
      },
      {
        title: "3D Commercial Interior Rendering & Walkthroughs",
        image: image("photo-1497366754035-f200968a6e72"),
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
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

function titleMarkup(title) {
  const parts = title.split(" & ");
  if (parts.length > 1) return `${parts[0]} <i>&amp; ${parts.slice(1).join(" & ")}</i>`;
  const words = title.split(" ");
  if (words.length > 3) return `${words.slice(0, -2).join(" ")} <i>${words.slice(-2).join(" ")}</i>`;
  return title;
}

function updateSeo(data) {
  const description = `${data.name} by ShineX Infra Solutions — ${data.insightsCopy}`;
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
    name: `ShineX ${data.name} — Interiors and Execution`,
    description,
    publisher: { "@type": "Organization", name: "ShineX Infra Solutions" },
    hasPart: data.blogs.map(blog => ({ "@type": "Article", headline: blog[0], description: blog[2], articleSection: blog[1], publisher: { "@type": "Organization", name: "ShineX Infra Solutions" } }))
  });
}

function renderExperience(world) {
  activeWorld = world;
  const data = experienceData[world];
  $("#headerWorld").textContent = data.header;
  $("#heroTitle").innerHTML = data.heroTitle;
  $("#heroDescription").textContent = data.heroDescription;
  $("#heroImage").style.backgroundImage = `url("${data.heroImage}")`;
  $("#introTitle").innerHTML = data.introTitle;
  $("#introCopy").textContent = data.introCopy;
  $("#servicesNote").textContent = data.servicesNote;
  $("#comparisonName").textContent = data.comparisonName;
  $("#comparisonBefore").style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,.1), rgba(255,255,255,.12)), url("${data.beforeImage}")`;
  $("#comparisonAfter").style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,.05), rgba(0,0,0,.15)), url("${data.afterImage}")`;
  $("#closingImage").style.backgroundImage = `url("${data.closingImage}")`;
  $("#closingTitle").innerHTML = data.closingTitle;
  $("#catalogCopy").textContent = data.catalogCopy;
  $("#insightsCopy").textContent = data.insightsCopy;
  $("#menuWorld").textContent = data.name;
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
    <article class="faq-item${index === 0 ? " is-open" : ""}"><button class="faq-question" type="button"><span>${item[0]}</span><b>+</b></button><div class="faq-answer"${index === 0 ? " style=\"height:80px\"" : ""}><p>${item[1]}</p></div></article>`).join("");
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

function chooseWorld(world) {
  renderExperience(world);
  const picker = $("#worldPicker");
  const shell = $("#siteShell");
  shell.style.display = "block";
  shell.setAttribute("aria-hidden", "false");
  document.body.classList.remove("is-locked");
  motionReady = true;
  if (window.gsap) {
    gsap.timeline().to(picker, { autoAlpha: 0, duration: .8, ease: "power3.inOut", onComplete: () => { picker.style.display = "none"; } }).fromTo(".site-header", { y: -30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .65 }, "-=.2");
  } else picker.style.display = "none";
  window.scrollTo(0, 0);
  window.setTimeout(initMotion, 60);
}

function switchWorld() {
  const picker = $("#worldPicker");
  const shell = $("#siteShell");
  picker.style.display = "flex";
  if (window.gsap) gsap.fromTo(picker, { autoAlpha: 0 }, { autoAlpha: 1, duration: .55, ease: "power2.out" });
  else picker.style.opacity = "1";
  shell.style.display = "none";
  shell.setAttribute("aria-hidden", "true");
  window.scrollTo(0, 0);
}

function updateComparison(value) {
  const before = $("#comparisonBefore");
  const divider = $(".comparison-divider");
  if (!before || !divider) return;
  before.style.width = "100%";
  before.style.clipPath = `inset(0 ${100 - Number(value)}% 0 0)`;
  divider.style.left = `${value}%`;
}

function showServiceDetail(data, serviceIndex) {
  const service = data.services[serviceIndex];
  const detail = $("#serviceDetail");
  $("#serviceDetailTitle").innerHTML = `${titleMarkup(service.title)}<br /><i>in full detail.</i>`;
  $("#serviceDetailIntro").textContent = `A closer look at ${service.title.toLowerCase()}. Every included layer is shown below with a visual reference for the conversation.`;
  $("#serviceDetailGrid").innerHTML = service.items.map((item, itemIndex) => {
    const imageIndex = (serviceIndex * 5 + itemIndex) % detailImagePool.length;
    return `<article class="detail-item"><div class="detail-item-media"><div style="background-image:url('${detailImagePool[imageIndex]}')"></div><span>${String(itemIndex + 1).padStart(2, "0")}</span></div><h4>${item}</h4><small>${data.name} / scope layer</small><button class="detail-quote quote-trigger" type="button">Get free quote <span>↗</span></button></article>`;
  }).join("");
  detail.classList.add("is-visible");
  detail.setAttribute("aria-hidden", "false");
  if (window.gsap) {
    gsap.fromTo("#serviceDetail .service-detail-top, #serviceDetail .service-detail-intro, #serviceDetail .detail-item", { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .65, ease: "power3.out", stagger: .06 });
  }
  $$("#serviceDetail .detail-quote").forEach(button => button.addEventListener("click", openQuote));
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
  if (initial) $(".faq-answer", initial).style.height = `${$(".faq-answer p", initial).offsetHeight + 25}px`;
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

function openQuote() {
  closeMenu(true);
  closeArticle(true);
  const overlay = $("#quoteOverlay");
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  $("#formSuccess").classList.remove("is-visible");
  if (window.gsap) {
    gsap.set(".quote-form-wrap > div, .quote-form label, .quote-form .solid-button", { y: 28, autoAlpha: 0 });
    gsap.timeline().fromTo(".quote-backdrop", { autoAlpha: 0 }, { autoAlpha: 1, duration: .35 }).to(".quote-form-wrap > div, .quote-form label, .quote-form .solid-button", { y: 0, autoAlpha: 1, duration: .7, ease: "power3.out", stagger: .05 }, "-=.1");
  }
}

function closeQuote() {
  const overlay = $("#quoteOverlay");
  if (!overlay.classList.contains("is-open")) return;
  if (window.gsap) gsap.to(".quote-form-wrap > div, .quote-form label, .quote-form .solid-button", { y: -18, autoAlpha: 0, duration: .3, stagger: .02, onComplete: finish });
  else finish();
  function finish() { overlay.classList.remove("is-open"); overlay.setAttribute("aria-hidden", "true"); document.body.classList.remove("is-locked"); }
}

function initMotion() {
  if (!window.gsap) { motionReady = true; return; }
  motionReady = true;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  gsap.killTweensOf(".hero-image, .hero-content, .section-index, .intro-layout, .service-card, .process-item, .catalog-card");
  if (window.ScrollTrigger) ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  const heroImage = $("#heroImage");
  gsap.fromTo(heroImage, { scale: 1.14 }, { scale: 1.04, duration: 1.8, ease: "power3.out" });
  gsap.fromTo(".hero-content > *", { y: 35, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .9, ease: "power3.out", stagger: .1, delay: .2 });
  if (window.ScrollTrigger) {
    gsap.to(heroImage, { yPercent: 14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.utils.toArray(".intro-layout, .story-heading, .process-header, .catalog-heading, .faq-layout, .insights-heading").forEach(element => gsap.from(element, { y: 45, autoAlpha: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 82%" } }));
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

document.addEventListener("DOMContentLoaded", () => {
  $$(".world-option").forEach(option => option.addEventListener("click", () => chooseWorld(option.dataset.world)));
  $("#switchWorld").addEventListener("click", switchWorld);
  $("#menuOpen").addEventListener("click", openMenu);
  $("#menuClose").addEventListener("click", closeMenu);
  $("#quoteClose").addEventListener("click", closeQuote);
  $("#articleClose").addEventListener("click", () => closeArticle());
  $("#serviceDetailClose").addEventListener("click", closeServiceDetail);
  $$(".quote-trigger").forEach(button => button.addEventListener("click", openQuote));
  $(".comparison-range").addEventListener("input", event => updateComparison(event.target.value));
  $("#quoteForm").addEventListener("submit", event => { event.preventDefault(); $("#formSuccess").classList.add("is-visible"); event.target.reset(); });
  $$(".menu-link").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") { closeMenu(); closeQuote(); closeArticle(); closeServiceDetail(); } });
  initCursor();
  initMagnetic();
  if (window.gsap) gsap.set(".site-header", { autoAlpha: 0 });
});

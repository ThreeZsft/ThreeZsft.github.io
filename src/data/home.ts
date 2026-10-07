/**
 * Copy for the home page.
 *
 * `[FILL: …]` markers stand in for values that aren't settled yet (prices,
 * timelines, dates). They are meant to stay visible on the page until they
 * are filled, so a search for `[FILL` finds every one.
 */

/** The month currently being booked, shown on the availability badge. */
export const AVAILABILITY = "Taking projects for [FILL: month]";

/** Where an external booking link would point, once there is one. */
export const BOOKING_URL = "[FILL booking link]";

/** The studio's email, shown in the footer. */
export const EMAIL = "hello@temper.com";

export const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Pricing", href: "/#pricing" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const;

/**
 * The one testimonial slot. The section renders only when `quote` holds a
 * real quote, so leave it empty until there is one.
 */
export const TESTIMONIAL = {
  quote: "",
  name: "[FILL: name]",
  business: "[FILL: business]",
  city: "[FILL: city]",
};

/** Selected work. Every card links to the NAT case study for now. */
export const PROJECTS = [
  {
    href: "/work/network-of-applied-technologies/",
    title: "NAT · Network of Applied Technologies",
    client: "Network of Applied Technologies",
    desc: "A multi-route prototype and component library for a community-first tech organization, with the decisions written down, including the ones that didn't hold.",
  },
  {
    href: "/work/network-of-applied-technologies/",
    title: "Electronic North",
    client: "Electronic North",
    desc: "Identity and website for an electronic music project. Type, palette, and a site that gets people to the next show.",
  },
  {
    href: "/work/network-of-applied-technologies/",
    title: "Evaluation Capacity Network",
    client: "Evaluation Capacity Network",
    desc: "Brand and website for a research network. Clear structure for a lot of material, built so the team could keep it current.",
  },
  {
    href: "/work/network-of-applied-technologies/",
    title: "Muscle Memories",
    client: "Muscle Memories",
    desc: "A card game I design in my own time. Seventeen rules revisions and counting. Here as evidence of how I test and cut.",
  },
  {
    href: "/work/network-of-applied-technologies/",
    title: "World Anvil MCP",
    client: "World Anvil MCP",
    desc: "An experiment connecting a worldbuilding tool to an AI assistant. Built to learn the shape of the problem.",
  },
  {
    href: "/work/network-of-applied-technologies/",
    title: "Strudel MCP",
    client: "Strudel MCP",
    desc: "A second experiment, this time with live-coded music. Same reason.",
  },
] as const;

/** Four problems, and the fix for each. */
export const PROBLEMS = [
  {
    text: "Your work is stunning in person and flat on your site.",
    sub: "I design around the work, not on top of it. Your photos, your product, your sound stay the brightest thing on every screen. The site is the room. You are the exhibit.",
  },
  {
    text: "Instagram is your homepage, and the algorithm owns it.",
    sub: "I build you a home base on land you own. Your domain, your mailing list, your booking link, findable on Google without paying rent to a feed.",
  },
  {
    text: "The template makes you look like everyone else in your scene.",
    sub: "No themes, no page builders. Design from your brand up, so the site could only belong to you. If the brand needs work first, I do that too.",
  },
  {
    text: "You could build it yourself, but the work keeps coming first.",
    sub: "You have the taste. You don't have the month. I handle design, build, and upkeep, and hand you a site you can update in minutes between the things you actually make.",
  },
] as const;

/** The timeline behind the About section. */
export const TIMELINE = [
  {
    year: "2020",
    title: "Business degree",
    org: "Bachelor of Commerce, International Business, MacEwan University.",
  },
  {
    year: "2022",
    title: "Started freelancing",
    org: "First clients were people I already knew.",
  },
  {
    year: "2022",
    title: "UX Design certification",
    org: "CareerFoundry. Learned to test before I trust.",
  },
  {
    year: "[FILL: year]",
    title: "Moved fully to Webflow",
    org: "Webflow and the Lumos framework. Faster builds, cleaner handoffs.",
  },
  {
    year: "[FILL: year]",
    title: "Electronic North and Evaluation Capacity Network",
    org: "Brand and web for both.",
  },
  {
    year: "2026",
    title: "NAT",
    org: "The most complete project I've done, start to finish.",
  },
  {
    year: "Now",
    title: "A few projects at a time",
    org: "Taking on [FILL: number] projects at a time so each one gets real attention.",
  },
] as const;

/** How a project runs, stage by stage. */
export const STEPS = [
  {
    name: "Look in",
    body: "We go through what you have now: what people see first, where they stop reading, what's missing. You get a short written read of it either way.",
  },
  {
    name: "Set the tone",
    body: "Layout, type, and colour, and the order things get noticed in. You see it early and often, not as a reveal at the end.",
  },
  {
    name: "Fire it",
    body: "Build, speed, accessibility, the part that makes it hold up. Tested on real phones, not just a resized browser.",
  },
  {
    name: "Keep it clear",
    body: "Training on how to edit it, plus small fixes after launch. No retainer required, and no relative with a laptop.",
  },
] as const;

/**
 * Three packages. `name` doubles as the value the contact form's dropdown
 * is preselected to when a package's button is pressed.
 */
export const TIERS = [
  {
    name: "Single page",
    weeks: "[FILL: timeline] weeks",
    price: "From $[FILL: amount]",
    for: "A single page that does one job well.",
    cta: "Choose this",
    featured: false,
  },
  {
    name: "Full site",
    weeks: "[FILL: timeline] weeks",
    price: "From $[FILL: amount]",
    for: "A full site with work, about, and contact, editable by you.",
    cta: "Choose this",
    featured: true,
  },
  {
    name: "Site and identity",
    weeks: "[FILL: timeline] weeks",
    price: "From $[FILL: amount]",
    for: "The site plus logo, palette, and type, delivered together.",
    cta: "Choose this",
    featured: false,
  },
] as const;

export const FAQS = [
  {
    q: "What does it cost?",
    a: "Prices are above and they're real. If your project doesn't fit a tier, I'll quote it flat before any work starts.",
  },
  {
    q: "How long does it take?",
    a: "Most sites land in [FILL: range] weeks. The biggest variable is how quickly you can get me photos and words.",
  },
  {
    q: "What do I need to provide?",
    a: "Your work, in decent quality. A rough idea of what you want people to do on the site. Everything else we figure out together.",
  },
  {
    q: "Who owns the site?",
    a: "You do. It lives in your Webflow account, on your domain, and you can edit it or take it elsewhere.",
  },
  {
    q: "What happens after launch?",
    a: "You get a walkthrough of how to update it. Small fixes are free for [FILL: period]. Bigger changes are quoted as needed.",
  },
  {
    q: "Do you work outside Edmonton?",
    a: "Yes. I'm based in Alberta and work with clients in Edmonton, Calgary, and anywhere with a decent connection.",
  },
  {
    q: "Can you do the branding too?",
    a: "Yes, and it's usually better when the site and the identity are made at the same time.",
  },
  {
    q: "Do you build in anything other than Webflow?",
    a: "Webflow is what I build client sites in, for the editing reason above. If you already have something else, ask and I'll tell you honestly whether I'm the right fit.",
  },
] as const;

/** What the contact form's dropdown offers: the three packages, or a shrug. */
export const SERVICE_OPTIONS = [
  ...TIERS.map((tier) => tier.name),
  "Not sure yet",
];

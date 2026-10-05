// The three tracks. The order here is the column order on wide screens.
export const tracks = ["Interface", "Under the Hood", "For Everyone"];

// The four time slots each day. Every session is 45 minutes.
export const slots = [
  { start: "8:30 PM", end: "9:15 PM", duration: "45 min" },
  { start: "9:30 PM", end: "10:15 PM", duration: "45 min" },
  { start: "10:30 PM", end: "11:15 PM", duration: "45 min" },
  { start: "11:30 PM", end: "12:15 AM", duration: "45 min" },
];

// `slot` is the position in the slots list above (0 = first slot).
// Sessions are listed by day, then slot, then track.
export const sessions = [
  // ---------- Day 1 ----------
  { id: 1, day: 1, slot: 0, track: "Interface", title: "Designing for the Second Visit", description: "What makes a digital experience worth coming back to.", speaker: "Sarah Mitchell", role: "Product Designer" },
  { id: 2, day: 1, slot: 0, track: "Under the Hood", title: "Building Interfaces That Survive Change", description: "Designing products that can grow without becoming difficult to maintain.", speaker: "Daniel Foster", role: "Software Engineer" },
  { id: 3, day: 1, slot: 0, track: "For Everyone", title: "Keyboard Users Are Not Edge Cases", description: "A closer look at keyboard navigation and interface design.", speaker: "Olivia Grant", role: "Accessibility Specialist" },

  { id: 4, day: 1, slot: 1, track: "Interface", title: "The Cost of a Complicated Interface", description: "Looking at friction, complexity, and their impact on digital experiences.", speaker: "James Carter", role: "UX Designer" },
  { id: 5, day: 1, slot: 1, track: "Under the Hood", title: "The Performance Budget", description: "A practical look at speed, performance, and modern websites.", speaker: "Laura Bennett", role: "Frontend Engineer" },
  { id: 6, day: 1, slot: 1, track: "For Everyone", title: "Accessibility Testing Before Launch", description: "Exploring ways to find accessibility issues before release.", speaker: "Ryan Cooper", role: "QA Engineer" },

  { id: 7, day: 1, slot: 2, track: "Interface", title: "When Interfaces Explain Themselves", description: "Exploring hierarchy, feedback, and familiar patterns in interface design.", speaker: "Emily Brooks", role: "Interaction Designer" },
  { id: 8, day: 1, slot: 2, track: "Under the Hood", title: "From Prototype to Production", description: "What changes when an early concept becomes a real product.", speaker: "Kevin Walsh", role: "Engineering Manager" },
  { id: 9, day: 1, slot: 2, track: "For Everyone", title: "Readable by Design", description: "Exploring typography, structure, spacing, and readability.", speaker: "Hannah Lee", role: "Content Designer" },

  { id: 10, day: 1, slot: 3, track: "Interface", title: "Beyond the First Impression", description: "A look at the details that shape an experience after the first interaction.", speaker: "Michael Torres", role: "Design Lead" },
  { id: 11, day: 1, slot: 3, track: "Under the Hood", title: "The Hidden Work Behind Simple Features", description: "The systems, edge cases, and decisions behind everyday features.", speaker: "Amanda Reed", role: "Backend Engineer" },
  { id: 12, day: 1, slot: 3, track: "For Everyone", title: "Designing for Different Ways of Thinking", description: "A closer look at cognitive accessibility and interface design.", speaker: "Nathan Wright", role: "Accessibility Consultant" },

  // ---------- Day 2 ----------
  { id: 13, day: 2, slot: 0, track: "Interface", title: "From User Feedback to Better Products", description: "Turning research and feedback into better product decisions.", speaker: "Jessica Nguyen", role: "UX Researcher" },
  { id: 14, day: 2, slot: 0, track: "Under the Hood", title: "What Happens After Launch?", description: "Exploring the work that happens after a product goes live.", speaker: "Brian Hughes", role: "Platform Engineer" },
  { id: 15, day: 2, slot: 0, track: "For Everyone", title: "Who Gets Left Out?", description: "Looking at exclusion and overlooked users in product design.", speaker: "Priya Shah", role: "Inclusive Design Lead" },

  { id: 16, day: 2, slot: 1, track: "Interface", title: "Making Complex Things Feel Simple", description: "Exploring ways to organize complex information and interactions.", speaker: "David Kim", role: "Product Designer" },
  { id: 17, day: 2, slot: 1, track: "Under the Hood", title: "When Things Go Wrong", description: "Looking at errors, edge cases, and unexpected behavior.", speaker: "Megan Collins", role: "Software Engineer" },
  { id: 18, day: 2, slot: 1, track: "For Everyone", title: "Designing for Different Devices", description: "Exploring how interfaces adapt across screens and situations.", speaker: "Marcus Bell", role: "Frontend Engineer" },

  { id: 19, day: 2, slot: 2, track: "Interface", title: "Designing Without the Guesswork", description: "A look at research, testing, and the decisions behind better interfaces.", speaker: "Rachel Adams", role: "Design Researcher" },
  { id: 20, day: 2, slot: 2, track: "Under the Hood", title: "Keeping Products Reliable", description: "A look at consistency, reliability, and what happens behind the scenes.", speaker: "Andrew Scott", role: "Site Reliability Engineer" },
  { id: 21, day: 2, slot: 2, track: "For Everyone", title: "The Language of Interfaces", description: "A look at labels, instructions, and the words people encounter in products.", speaker: "Elena Ruiz", role: "Content Strategist" },

  { id: 22, day: 2, slot: 3, track: "Interface", title: "What Makes an Interface Feel Good?", description: "A broader look at the choices that shape how a product feels to use.", speaker: "Chris Patel", role: "Senior Designer" },
  { id: 23, day: 2, slot: 3, track: "Under the Hood", title: "The Product Is Never Finished", description: "Exploring iteration, maintenance, and what comes after launch.", speaker: "Natalie Price", role: "Engineering Lead" },
  { id: 24, day: 2, slot: 3, track: "For Everyone", title: "Designing for People You Haven’t Met", description: "Looking beyond assumptions when creating products for different users.", speaker: "Tyler Morgan", role: "Design Researcher" },
];

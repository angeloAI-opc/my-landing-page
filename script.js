const profile = {
  name: "Angelo",
  tagline:
    "I like building simple things on the web that feel thoughtful, calm, and genuinely personal.",
  currently: "Currently learning how to turn small ideas into polished products.",
  heroMetrics: [
    { label: "Focus", value: "Web + Design" },
    { label: "Approach", value: "Ship small" },
    { label: "Status", value: "Always learning" }
  ],
  bio: [
    "I made this page as a simple corner of the internet that says a little about who I am before it says what I do. I enjoy creating things that feel useful, quiet, and clear, especially when they help people understand me a bit faster.",
    "Most of the time, I am exploring design, code, and the kind of online experiences that feel more human than corporate. I am drawn to projects that start small, evolve naturally, and leave room for curiosity instead of pressure.",
    "This version is intentionally lightweight. It works without any backend, but the structure is ready if I ever want to plug in Supabase later for a contact form, guestbook, or editable profile content."
  ],
  focusAreas: [
    "Calm visual design",
    "Meaningful micro-interactions",
    "Clear storytelling",
    "Future-ready structure"
  ],
  interests: [
    {
      title: "Design that breathes",
      description:
        "Soft layouts, clear spacing, and visual choices that feel calm instead of noisy."
    },
    {
      title: "Learning in public",
      description:
        "Sharing what I am building and improving over time, even when it starts simple."
    },
    {
      title: "Future-ready simplicity",
      description:
        "Starting static today, while keeping the content model clean enough for Supabase tomorrow."
    }
  ],
  links: [
    {
      label: "Email",
      url: "mailto:rayangelomateos@gmail.com",
      shortUrl: "rayangelomateos@gmail.com"
    },
    {
      label: "GitHub",
      url: "https://github.com/AngeloAI-opc",
      shortUrl: "github.com/AngeloAI-opc"
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/ray-angelo-m-876683201/",
      shortUrl: "linkedin.com/in/ray-angelo-m-876683201/"
    }
  ]
};

const nameNode = document.querySelector("#name");
const taglineNode = document.querySelector("#tagline");
const currentlyNode = document.querySelector("#currently");
const bioNode = document.querySelector("#bio");
const focusListNode = document.querySelector("#focus-list");
const metricsNode = document.querySelector("#hero-metrics");
const interestsNode = document.querySelector("#interests-grid");
const linksNode = document.querySelector("#links");
const pageTitle = document.querySelector("title");

pageTitle.textContent = `${profile.name} | Personal Intro`;
nameNode.textContent = profile.name;
taglineNode.textContent = profile.tagline;
currentlyNode.textContent = profile.currently;

profile.heroMetrics.forEach((metric) => {
  const metricCard = document.createElement("article");
  metricCard.className = "metric";

  const label = document.createElement("span");
  label.className = "metric-label";
  label.textContent = metric.label;

  const value = document.createElement("span");
  value.className = "metric-value";
  value.textContent = metric.value;

  metricCard.append(label, value);
  metricsNode.appendChild(metricCard);
});

profile.bio.forEach((paragraph) => {
  const p = document.createElement("p");
  p.textContent = paragraph;
  bioNode.appendChild(p);
});

profile.focusAreas.forEach((item) => {
  const chip = document.createElement("div");
  chip.className = "focus-item";
  chip.textContent = item;
  focusListNode.appendChild(chip);
});

profile.interests.forEach((interest) => {
  const article = document.createElement("article");
  article.className = "interest-card";

  const title = document.createElement("h3");
  title.textContent = interest.title;

  const description = document.createElement("p");
  description.textContent = interest.description;

  article.append(title, description);
  interestsNode.appendChild(article);
});

profile.links.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.className = "link-chip";
  anchor.href = link.url;
  anchor.target = link.url.startsWith("http") ? "_blank" : "_self";
  anchor.rel = link.url.startsWith("http") ? "noreferrer" : "";
  anchor.innerHTML = `
    <span class="link-label">${link.label}</span>
    <span class="link-url">${link.shortUrl}</span>
  `;
  linksNode.appendChild(anchor);
});

// Data
const projects = [
  { n: "01", img: "Contribution.png", title: "Speckit Opensource Contribution", tag: "AI Tooling / Opensource", badge: "Contribution", link: "https://github.com/github/spec-kit/pull/3592", cat: "ai" },
  { n: "02", img: "AI Native Book.png", title: "AI Native Book", tag: "AI Documentation / Hackathon", badge: "AI Native Book", link: "https://hackathon-1-ai-native-book.vercel.app/", cat: "ai" },
  { n: "01", img: "SahilConsaltancy.in.jpeg", title: "Sahil Consultancy", tag: "Full Stack Website", badge: "SahilConsaltancy", link: "http://sahilconsultancy.in/", cat: "fullstack" },
  { n: "02", img: "Abrarinfotech.jpeg", title: "ABRAR INFOTECH", tag: "Full Stack Website", badge: "ABRAR INFOTECH", link: "https://www.abrarinfotech.com", cat: "fullstack" },
  { n: "03", img: "Cryptoclub.png", title: "CRYPTO CLUB", tag: "Full Stack Website", badge: "CRYPTO CLUB", link: "https://cryptoclub.ch/", cat: "fullstack" },
  { n: "04", img: "Dashboard.png", title: "CRYPTO Dashboard", tag: "Full Stack Dashboard", badge: "CRYPTO dashboard", link: "https://cryptoclub.ch/dashboard", cat: "fullstack" },
  { n: "05", img: "pic.png", title: " OpenClaw AI Meeting Assistant ", tag: "OpenClaw", badge: "AI Assitant", link: "https://lnkd.in/p/d6vhDnba", cat: "ai" },

];

const education = [
  { title: "Matriculation", sub: "SNFC PAF BASE MASROOR", date: "2024-2026" },
  { title: "Agentic AI Certification", sub: "DeepLearning.AI", date: "2024" },
  { title: "LangChain & LLM Ops", sub: "Advanced Track", date: "2025" },
];

const certificates = [
  { 
    id: "001",
    title: "Fundamentals of Agentic AI",
    issuer: "Panaversity",
    date: "August 2026",
    credentialId: "CERT-2026-001",
    category: "Artificial Intelligence",
    description: "Successfully completed the Fundamentals of Agentic AI certification and demonstrated knowledge of agentic AI concepts and workflows.",
    image: "image.png",
    verificationUrl: "#"
  },
];

const skills = ["Python","LangGraph","OpenAI","Loop Engineering", "CrewAI","RAG","Vector DBs","PyTorch","FastAPI","TypeScript","Docker"];

const process = [
  { ico: "&#9906;", title: "Discovery", text: "Understand goals, constraints, and the intelligence you need." },
  { ico: "&#9728;", title: "Design", text: "Architect agent workflows, tools, and reasoning strategy." },
  { ico: "&#9776;", title: "Prototype", text: "Fast iteration on prompts, retrieval, and evaluations." },
  { ico: "&lt;/&gt;", title: "Build", text: "Production-grade agents with observability and guardrails." },
  { ico: "&#9650;", title: "Ship", text: "Deploy, monitor, and improve with real-world feedback." },
];

// Render
let activeFilter = "all";

function renderProject(p) {
  return `<article class="project reveal" data-cat="${p.cat}">
    <div class="thumb">
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
      <div class="badge">${p.badge}</div>
    </div>
    <div class="meta">
      <div>
        <div class="title"><span>${p.n}</span>${p.title}</div>
        <div class="tag">${p.tag}</div>
      </div>
      <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="arrow-link">
        <div class="arrow">&#8599;</div>
      </a>
    </div>
  </article>`;
}

function renderProjects(filter) {
  activeFilter = filter;
  const grid = document.getElementById("projects");
  const empty = document.getElementById("projectEmpty");
  const filtered = filter === "all" ? projects : projects.filter(p => p.cat === filter);

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
    grid.innerHTML = filtered.map(renderProject).join("");
    grid.querySelectorAll(".project").forEach(el => el.classList.add("in"));
  }

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
}

// Dynamic counts
const aiCount = projects.filter(p => p.cat === "ai").length;
const fsCount = projects.filter(p => p.cat === "fullstack").length;
document.getElementById("countAll").textContent = String(projects.length).padStart(2, "0");
document.getElementById("countAi").textContent = String(aiCount).padStart(2, "0");
document.getElementById("countFs").textContent = String(fsCount).padStart(2, "0");

// Filter click
document.getElementById("projectFilters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (btn) renderProjects(btn.dataset.filter);
});

// Initial render
renderProjects("all");

document.getElementById("edu").innerHTML = education.map(e => `
  <div class="edu">
    <div><p>${e.title}</p><p class="sub">${e.sub}</p></div>
    <span class="date">${e.date}</span>
  </div>`).join("");

// Certificate Showcase
let currentCertIdx = 0;

function renderCertificateShowcase() {
  const el = document.getElementById("certShowcase");
  const c = certificates[currentCertIdx];
  
  el.innerHTML = `
    <div class="cert-display">
      <div class="cert-deco cert-deco-1"></div>
      <div class="cert-deco cert-deco-2"></div>
      <div class="cert-deco cert-deco-3"></div>
      <div class="cert-deco cert-deco-4"></div>
      <div class="cert-deco cert-deco-5"></div>
      <div class="cert-deco-line"></div>
      <div class="cert-deco-line-2"></div>
      <div class="cert-document" onclick="openCertModal(${currentCertIdx})">
        <img src="${c.image}" alt="${c.title}" loading="lazy" />
      </div>
    </div>
    <div class="cert-info">
      <span class="cert-info-num">CERTIFICATE ${String(currentCertIdx + 1).padStart(2, '0')}</span>
      <h4 class="cert-info-title">${c.title}</h4>
      <div class="cert-meta">
        <div class="cert-meta-item">
          <span class="cert-meta-label">Issued by</span>
          <span class="cert-meta-val">${c.issuer}</span>
        </div>
        <div class="cert-meta-item">
          <span class="cert-meta-label">Issued</span>
          <span class="cert-meta-val">${c.date}</span>
        </div>
        <div class="cert-meta-item">
          <span class="cert-meta-label">Credential ID</span>
          <span class="cert-meta-val">${c.credentialId}</span>
        </div>
        <div class="cert-meta-item">
          <span class="cert-meta-label">Category</span>
          <span class="cert-meta-val">${c.category}</span>
        </div>
      </div>
      <p class="cert-description">${c.description}</p>
      <div class="cert-actions">
        <button class="cert-btn cert-btn-primary" onclick="openCertModal(${currentCertIdx})">VIEW CERTIFICATE</button>
        ${c.verificationUrl && c.verificationUrl !== "#" ? `<a href="${c.verificationUrl}" target="_blank" rel="noopener noreferrer" class="cert-btn cert-btn-secondary">VERIFY CREDENTIAL</a>` : ""}
      </div>
    </div>
  `;
  
  // Update nav
  document.getElementById("certCurrent").textContent = String(currentCertIdx + 1).padStart(2, "0");
  document.getElementById("certTotal").textContent = String(certificates.length).padStart(2, "0");
  document.getElementById("certProgressFill").style.width = ((currentCertIdx + 1) / certificates.length * 100) + "%";
}

function certNav(dir) {
  currentCertIdx = (currentCertIdx + dir + certificates.length) % certificates.length;
  renderCertificateShowcase();
}

function openCertModal(idx) {
  const modal = document.getElementById("certModal");
  const img = document.getElementById("certModalImg");
  img.src = certificates[idx].image;
  modal.classList.add("active");
  modalZoom = 1;
  img.style.transform = "scale(1)";
}

function closeCertModal() {
  document.getElementById("certModal").classList.remove("active");
}

let modalZoom = 1;
function zoomCert(amount) {
  modalZoom = Math.max(0.5, Math.min(3, modalZoom + amount));
  document.getElementById("certModalImg").style.transform = `scale(${modalZoom})`;
}

function resetZoomCert() {
  modalZoom = 1;
  document.getElementById("certModalImg").style.transform = "scale(1)";
}

function downloadCert() {
  const img = document.getElementById("certModalImg");
  const link = document.createElement("a");
  link.href = img.src;
  link.download = "certificate.png";
  link.click();
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("certModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeCertModal();
    });
  }
  renderCertificateShowcase();
});

document.getElementById("skills").innerHTML = skills.map(s => `<span>${s}</span>`).join("");

document.getElementById("process").innerHTML = process.map(p => `
  <div class="step">
    <div class="ico">${p.ico}</div>
    <div><p>${p.title}</p><p class="txt">${p.text}</p></div>
  </div>`).join("");

// Scroll reveal with enhanced animation
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { 
    if (en.isIntersecting) { 
      en.target.classList.add("in"); 
      io.unobserve(en.target); 
    } 
  });
}, { threshold: 0.15 });
document.querySelectorAll(".section, .reveal").forEach(el => { 
  el.classList.add("reveal"); 
  io.observe(el); 
});

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const el = document.querySelector(a.getAttribute("href"));
    if (el) { 
      e.preventDefault(); 
      el.scrollIntoView({ behavior: "smooth" }); 
    }
  });
});

// Interactive card hover effects
document.querySelectorAll(".card, .project, .focus-item").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty("--mouse-x", x + "px");
    card.style.setProperty("--mouse-y", y + "px");
  });
});

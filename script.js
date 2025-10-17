// Minimal hash-router to simulate pages without a framework
const app = document.getElementById('app');
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const routes = {
  '/home': renderHome,
  '/about': renderAbout,
  '/products': renderProducts,
  '/people': renderPeople,
  '/contact': renderContact
};

function setActive(link) {
  document.querySelectorAll('.nav a[data-route]').forEach(a => a.classList.remove('active'));
  if (link) link.classList.add('active');
}

function navigate() {
  const hash = location.hash || '#/home';
  const path = hash.replace('#', '');
  const match = routes[path] ? path : '/home';
  render(match);
  const link = document.querySelector(`.nav a[href="#${match}"]`);
  setActive(link);
}

function render(route) {
  app.innerHTML = routes[route]();
  window.scrollTo(0,0);
}

function renderHome() {
  return /*html*/`
    <section class="hero">
      <h1>Advanced Materials for the Next Decade</h1>
      <p>SD Systems develops and delivers high-performance materials for electronics, optics, and energy—combining precision processing with rigorous metrology. From thin-film dielectrics to wide-bandgap semiconductors, our stack is built for scale.</p>
      <div class="badges">
        <span class="badge">SiO₂ • SiNₓ • SiC • SiON • SiCOH</span>
        <span class="badge">Diamond • GaN • AlN</span>
        <span class="badge">CVD • PVD • Etch • Metrology</span>
      </div>
    </section>

    <section class="section">
      <h2>What we offer</h2>
      <p class="lead">Sleek, reliable, and measurable—from prototype to pilot production.</p>
      <div class="grid">
        <div class="card">
          <h3>Thin-Film Platforms</h3>
          <p>Process-controlled films with tight uniformity and stress targets. Recipes across TEOS-oxide, O₃-TEOS, SiNₓ, SiC (UDC/NDC), and low-k SiCOH.</p>
        </div>
        <div class="card">
          <h3>Wide-Bandgap Devices</h3>
          <p>Materials and process routes for high-voltage and RF: diamond, GaN/AlN, and engineered interfaces for thermal and reliability performance.</p>
        </div>
        <div class="card">
          <h3>Characterization</h3>
          <p>Ellipsometry, profilometry, bow/ROC stress, FTIR/UV-Vis, and electrical evaluation—summarized in actionable DOE reports.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Selected specs</h2>
      <table class="table">
        <thead><tr><th>Material</th><th>Method</th><th>Target</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>TEOS SiO₂</td><td>CVD</td><td>±2% thickness, &lt;150 MPa |σ|</td><td>O₃ option for higher density</td></tr>
          <tr><td>SiNₓ</td><td>PECVD</td><td>Refractive index 1.9–2.1</td><td>Stress-tunable compressive/tensile</td></tr>
          <tr><td>SiC (UDC/NDC)</td><td>PECVD</td><td>Low particles</td><td>4MS precursor, N₂/NH₃ for NDC</td></tr>
          <tr><td>Diamond</td><td>MPCVD</td><td>&lt;1 nm/hr roughness growth</td><td>B/N/P doping R&amp;D</td></tr>
        </tbody>
      </table>
    </section>

    <section class="section" style="margin-bottom:56px;">
      <a class="cta" href="#/contact">Discuss a project →</a>
    </section>
  `;
}

function renderAbout() {
  return /*html*/`
    <section class="hero">
      <h1>About Us</h1>
      <p>We are materials engineers translating lab-grade processes into robust, production-ready flows. Our approach combines data-driven DOEs with disciplined tooling, so every iteration teaches us something measurable.</p>
    </section>
    <section class="section">
      <div class="grid">
        <div class="card">
          <h3>Mission</h3>
          <p>Accelerate next-gen devices by making advanced materials simple to source, spec, and scale.</p>
        </div>
        <div class="card">
          <h3>Approach</h3>
          <p>Recipe libraries, parameter tracking, and statistical analysis—wrapped in clear reports and delivery timelines.</p>
        </div>
        <div class="card">
          <h3>Quality</h3>
          <p>We design for uniformity, stress control, and cleanliness. Every lot includes baseline metrology.</p>
        </div>
      </div>
    </section>
  `;
}

function renderProducts() {
  return /*html*/`
    <section class="hero">
      <h1>Products & Capabilities</h1>
      <p>From thin films to wide-bandgap materials. Below are common deliverables—custom requests welcome.</p>
    </section>
    <section class="section">
      <div class="grid">
        <div class="card">
          <h3>Thin-Film Oxides</h3>
          <p>TEOS/O₃-TEOS SiO₂ with tight thickness control and refractive index targets. Options for densification.</p>
          <div class="badges"><span class="badge">Ellipsometry report</span><span class="badge">Stress via Stoney</span></div>
        </div>
        <div class="card">
          <h3>Dielectrics & Low-k</h3>
          <p>SiNₓ for passivation; SiCOH for low-k interlayers with controlled hydrophobicity.</p>
          <div class="badges"><span class="badge">FTIR/UV-Vis</span><span class="badge">Moisture-stability</span></div>
        </div>
        <div class="card">
          <h3>Carbides & N-Doped SiC</h3>
          <p>UDC/NDC with particle-aware recipes; nitrogen incorporation via N₂/NH₃ co-flow.</p>
          <div class="badges"><span class="badge">Particle maps</span><span class="badge">Stress tuning</span></div>
        </div>
        <div class="card">
          <h3>Diamond R&D</h3>
          <p>MPCVD growth with doping studies (B/N/P), surface prep, and contact strategies.</p>
          <div class="badges"><span class="badge">AFM roughness</span><span class="badge">Raman</span></div>
        </div>
      </div>
    </section>
  `;
}

function renderPeople() {
  return /*html*/`
    <section class="hero">
      <h1>People</h1>
      <p>Small, focused, and hands-on. Our team blends process engineering with simulation and data automation.</p>
    </section>
    <section class="section grid">
      <div class="card">
        <h3>Co-founder — Process</h3>
        <p>Process & metrology. Focus: CVD/PECVD, stress control, optical characterization.</p>
        <div class="badges"><span class="badge">CVD/PECVD</span><span class="badge">Ellipsometry</span></div>
      </div>
      <div class="card">
        <h3>Co-founder — Devices</h3>
        <p>Device & modeling. Focus: diamond/GaN, RF/high-voltage, data pipelines.</p>
        <div class="badges"><span class="badge">WBG</span><span class="badge">Python/DOE</span></div>
      </div>
    </section>
  `;
}

function renderContact() {
  return /*html*/`
    <section class="hero">
      <h1>Contact</h1>
      <p>Tell us about your materials needs. We’ll reply within 1–2 business days.</p>
    </section>
    <section class="section">
      <div class="card">
        <h3>Reach us</h3>
        <p>Email: <a href="mailto:hello@sd2.systems">hello@sd2.systems</a></p>
        <p>Or include details below (opens your email client):</p>
        <p><a class="cta" href="mailto:hello@sd2.systems?subject=Project%20Inquiry&body=Company%3A%0AProject%3A%0AProcess%2FMaterial%3A%0ATimeline%3A%0A">New project inquiry</a></p>
      </div>
    </section>
  `;
}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);

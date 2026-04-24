<script setup lang="ts">
const currentVersion = "v1.0.0";
const downloadHref = "https://github.com/xiangao0904/Motor-Sound-Editor/releases";
const githubHref = "https://github.com/xiangao0904/Motor-Sound-Editor";

const navItems = ["Why", "Features", "Workflow", "Format"];

const comparisonCards = [
  {
    eyebrow: "Legacy workflow",
    title: "CSV rows, scattered folders, slow feedback loops.",
    copy: "Traditional motor sound work forces creators to maintain pitch tables, volume tables, file names and test runs separately. Small changes become repetitive, fragile and hard to evaluate.",
    tone: "legacy",
    bullets: ["Manual CSV editing", "Fragmented audio assets", "Delayed in-game validation"],
  },
  {
    eyebrow: "Motor Sound Editor",
    title: "Curves, tracks and preview live in one focused workspace.",
    copy: "Shape speed-based pitch and volume visually, switch train states instantly, and hear the result before packaging the project for your target simulator.",
    tone: "modern",
    bullets: ["Visual curve authoring", "Traction / coast / brake preview", "Project-first export pipeline"],
  },
];

const features = [
  {
    icon: "M4 18C7.5 8.8 10.5 20 14 11.5C16 6.5 18.5 5.6 21 7.2M5 18h16M4 4.5v15",
    title: "Visual curve editing",
    copy: "Edit speed-based pitch and volume curves directly. Add, move and refine keyframes without touching raw CSV tables.",
  },
  {
    icon: "M4 12h3l2.2-5 4.6 11 3-7H21M5 20h14M5 4h14",
    title: "Multi-track live preview",
    copy: "Audition layered motor tracks across traction, coast and braking states while changing speed in real time.",
  },
  {
    icon: "M13 2 4.5 13h7L9 22l10.5-13h-7L13 2Z",
    title: "Native desktop performance",
    copy: "Built with Rust and Tauri for a fast, lightweight desktop experience that stays responsive during detailed sound design.",
  },
  {
    icon: "M12 3v12m0 0 5-5m-5 5-5-5M4 20h16M6 6h4M14 6h4",
    title: "One-click export",
    copy: "Prepare audio conversion and target-specific directory structures for BVE, OpenBVE and MTR delivery packages.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Create a project",
    copy: "Import source material, define maximum speed, acceleration and deceleration parameters, then keep every asset inside a single project context.",
  },
  {
    number: "02",
    title: "Sculpt the curves",
    copy: "Treat motor sound like a visual medium. Add keyframes, reshape transitions and tune how pitch and volume react to speed.",
  },
  {
    number: "03",
    title: "Validate instantly",
    copy: "Use keyboard controls such as Space and W / S to simulate train behavior and check the sound under traction, coast and braking.",
  },
  {
    number: "04",
    title: "Ship the package",
    copy: "Export a ZIP package with the expected structure so the result can move directly into a BVE environment or be shared with collaborators.",
  },
];

const techItems = ["Rust", "Tauri", ".msep", "BVE", "OpenBVE", "MTR"];
</script>

<template>
  <main class="mse-home">
    <nav class="mse-nav" aria-label="Primary navigation">
      <a class="mse-brand" href="#top" aria-label="Motor Sound Editor home">
        <span class="mse-brand__mark" aria-hidden="true"></span>
        <span>Motor Sound Editor</span>
      </a>
      <div class="mse-nav__links" aria-label="Page sections">
        <a v-for="item in navItems" :key="item" :href="`#${item.toLowerCase()}`">{{ item }}</a>
      </div>
      <a class="mse-nav__cta" :href="downloadHref" target="_blank" rel="noreferrer">Download</a>
    </nav>

    <section id="top" class="mse-hero" aria-labelledby="hero-title">
      <div class="mse-hero__backdrop" aria-hidden="true">
        <span class="mse-orb mse-orb--cyan"></span>
        <span class="mse-orb mse-orb--violet"></span>
        <span class="mse-rail mse-rail--one"></span>
        <span class="mse-rail mse-rail--two"></span>
      </div>

      <div class="mse-shell mse-hero__layout">
        <div class="mse-hero__copy">
          <p class="mse-kicker">BVE motor sound authoring · Visual desktop workflow</p>
          <h1 id="hero-title">Design BVE motor sound with surgical control.</h1>
          <p class="mse-hero__lead">
            Leave manual CSV editing behind. Motor Sound Editor turns pitch, volume, speed and train-state behavior into a refined visual workflow with real-time feedback.
          </p>

          <div class="mse-hero__actions">
            <a class="mse-button mse-button--primary" :href="downloadHref" target="_blank" rel="noreferrer">
              Download for Windows
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </a>
            <a class="mse-button mse-button--secondary" :href="githubHref" target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </div>
          <p class="mse-version">Current release {{ currentVersion }}</p>

          <dl class="mse-hero__stats" aria-label="Product highlights">
            <div>
              <dt>3</dt>
              <dd>simulator targets</dd>
            </div>
            <div>
              <dt>.msep</dt>
              <dd>portable project format</dd>
            </div>
            <div>
              <dt>Native</dt>
              <dd>Rust + Tauri core</dd>
            </div>
          </dl>
        </div>

        <div class="mse-hero__showcase" aria-label="Software interface screenshot placeholder">
          <div class="mse-product-frame">
            <div class="mse-product-frame__topbar">
              <div aria-hidden="true"><span></span><span></span><span></span></div>
              <strong>Motor Sound Editor</strong>
              <em>Curve workspace</em>
            </div>
            <div class="mse-placeholder mse-placeholder--hero">
              <div>
                <strong>Software screenshot placeholder</strong>
                <span>Dark mode · pitch and volume curve editing</span>
              </div>
            </div>
          </div>

          <div class="mse-floating-card mse-floating-card--left" aria-hidden="true">
            <span>Speed</span>
            <strong>72 km/h</strong>
            <small>live preview</small>
          </div>
          <div class="mse-floating-card mse-floating-card--right" aria-hidden="true">
            <span>State</span>
            <strong>Traction</strong>
            <small>multi-track blend</small>
          </div>
        </div>
      </div>
    </section>

    <section id="why" class="mse-section mse-section--why" aria-labelledby="why-title">
      <div class="mse-shell">
        <div class="mse-section__intro mse-section__intro--center">
          <p class="mse-kicker">Why it exists</p>
          <h2 id="why-title">Spend less time managing files. Spend more time shaping sound.</h2>
          <p>
            BVE motor sound production is detail-heavy, but the creative process should not be buried under spreadsheets, directory conventions and repeated test exports.
          </p>
        </div>

        <div class="mse-comparison">
          <article
            v-for="card in comparisonCards"
            :key="card.title"
            class="mse-comparison__card"
            :class="`mse-comparison__card--${card.tone}`"
          >
            <span class="mse-card-label">{{ card.eyebrow }}</span>
            <h3>{{ card.title }}</h3>
            <p>{{ card.copy }}</p>

            <div v-if="card.tone === 'legacy'" class="mse-csv-panel" aria-label="CSV editing mockup">
              <code>0, 0.82, motor_loop_01.wav</code>
              <code>25, 1.12, motor_loop_02.wav</code>
              <code>48, 1.37, motor_loop_03.wav</code>
              <code>72, 1.64, motor_loop_04.wav</code>
            </div>
            <div v-else class="mse-curve-panel" aria-label="Curve editing mockup">
              <svg viewBox="0 0 360 180" role="img">
                <defs>
                  <linearGradient id="mse-curve-fill" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stop-color="currentColor" stop-opacity="0.32" />
                    <stop offset="1" stop-color="currentColor" stop-opacity="0.02" />
                  </linearGradient>
                </defs>
                <path class="mse-curve-panel__grid" d="M34 24v132M112 24v132M190 24v132M268 24v132M326 24v132M24 42h312M24 90h312M24 138h312" />
                <path class="mse-curve-panel__area" d="M28 132 C72 94 100 116 142 78 C184 40 216 58 270 30 C296 18 316 28 332 44 L332 156 L28 156 Z" />
                <path class="mse-curve-panel__line" d="M28 132 C72 94 100 116 142 78 C184 40 216 58 270 30 C296 18 316 28 332 44" />
                <circle cx="28" cy="132" r="5" />
                <circle cx="142" cy="78" r="5" />
                <circle cx="270" cy="30" r="5" />
                <circle cx="332" cy="44" r="5" />
              </svg>
            </div>

            <ul>
              <li v-for="bullet in card.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="features" class="mse-section mse-section--features" aria-labelledby="features-title">
      <div class="mse-shell">
        <div class="mse-section__intro">
          <p class="mse-kicker">Core features</p>
          <h2 id="features-title">A focused toolchain for simulator-grade motor sound.</h2>
          <p>
            Built around the decisions that matter most: how the motor evolves with speed, how tracks layer together, and how cleanly the finished package reaches the simulator.
          </p>
        </div>

        <div class="mse-feature-grid">
          <article v-for="feature in features" :key="feature.title" class="mse-feature-card">
            <div class="mse-feature-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path :d="feature.icon" /></svg>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="workflow" class="mse-section mse-section--workflow" aria-labelledby="workflow-title">
      <div class="mse-shell">
        <div class="mse-section__intro mse-section__intro--center">
          <p class="mse-kicker">Workflow</p>
          <h2 id="workflow-title">From raw samples to a deliverable package.</h2>
          <p>
            A linear, creator-friendly process designed to keep sound decisions visible from project setup to final ZIP export.
          </p>
        </div>

        <div class="mse-workflow-list">
          <article
            v-for="(step, index) in workflowSteps"
            :key="step.title"
            class="mse-workflow-item"
            :class="{ 'mse-workflow-item--reverse': index % 2 === 1 }"
          >
            <div class="mse-workflow-item__visual">
              <div class="mse-placeholder mse-placeholder--workflow">
                <div>
                  <strong>Workflow image placeholder</strong>
                  <span>{{ step.title }}</span>
                </div>
              </div>
            </div>
            <div class="mse-workflow-item__copy">
              <span>{{ step.number }}</span>
              <h3>{{ step.title }}</h3>
              <p>{{ step.copy }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="format" class="mse-section mse-section--tech" aria-labelledby="tech-title">
      <div class="mse-shell mse-tech-layout">
        <div class="mse-tech-layout__copy">
          <p class="mse-kicker">Tech stack & format</p>
          <h2 id="tech-title">A native foundation for serious project work.</h2>
          <p>
            Motor Sound Editor combines a lightweight Rust + Tauri desktop shell with a portable project format designed for versioning, migration and collaboration.
          </p>
          <div class="mse-tech-pills" aria-label="Technology and export targets">
            <span v-for="item in techItems" :key="item">{{ item }}</span>
          </div>
        </div>

        <article class="mse-format-card">
          <div class="mse-format-card__header">
            <span>.msep</span>
            <strong>Project container</strong>
          </div>
          <h3>Keep metadata, curves, tracks and audio assets together.</h3>
          <p>
            The dedicated .msep format packages project metadata and audio assets so a sound set can be saved, transferred, archived or shared without relying on loose folder memory.
          </p>
          <div class="mse-format-card__map" aria-hidden="true">
            <span>metadata</span>
            <span>curves</span>
            <span>tracks</span>
            <span>audio assets</span>
            <span>export targets</span>
          </div>
        </article>
      </div>
    </section>

    <section class="mse-final-cta" aria-labelledby="final-cta-title">
      <div class="mse-shell mse-final-cta__panel">
        <div>
          <p class="mse-kicker">Start building</p>
          <h2 id="final-cta-title">Bring a modern authoring workflow to your next BVE motor sound project.</h2>
          <p>Download the Windows release or visit the GitHub repository to follow development, report issues and review the source.</p>
        </div>
        <div class="mse-final-cta__actions">
          <a class="mse-button mse-button--primary" :href="downloadHref" target="_blank" rel="noreferrer">Download for Windows</a>
          <a class="mse-button mse-button--secondary" :href="githubHref" target="_blank" rel="noreferrer">GitHub Repository</a>
          <small>Current release {{ currentVersion }}</small>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.mse-home {
  --mse-bg: #050711;
  --mse-bg-2: #090d18;
  --mse-surface: rgba(255, 255, 255, 0.07);
  --mse-surface-strong: rgba(255, 255, 255, 0.11);
  --mse-border: rgba(255, 255, 255, 0.14);
  --mse-border-strong: rgba(255, 255, 255, 0.23);
  --mse-text: #f7f8ff;
  --mse-muted: rgba(231, 236, 255, 0.72);
  --mse-dim: rgba(231, 236, 255, 0.5);
  --mse-accent: #8bdcff;
  --mse-accent-2: #bba7ff;
  --mse-gold: #f5d7a1;
  --mse-placeholder: #e11d2e;
  --mse-radius-xl: 34px;
  --mse-radius-lg: 26px;
  --mse-radius-md: 18px;
  position: relative;
  overflow: clip;
  min-height: 100vh;
  color: var(--mse-text);
  background:
    radial-gradient(circle at 10% 0%, rgba(139, 220, 255, 0.16), transparent 33rem),
    radial-gradient(circle at 88% 16%, rgba(187, 167, 255, 0.16), transparent 36rem),
    linear-gradient(180deg, var(--mse-bg), #070a14 44%, var(--mse-bg));
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.mse-home :where(*) {
  box-sizing: border-box;
}

.mse-home :where(a) {
  color: inherit;
}

.mse-shell {
  width: min(1280px, calc(100% - 40px));
  margin: 0 auto;
}

.mse-nav {
  position: fixed;
  top: 18px;
  left: 50%;
  z-index: 20;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 28px;
  width: min(1280px, calc(100% - 40px));
  min-height: 64px;
  padding: 10px 12px 10px 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(6, 9, 18, 0.68);
  box-shadow: 0 18px 70px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(24px);
  transform: translateX(-50%);
}

.mse-brand,
.mse-nav__links,
.mse-nav__cta {
  display: inline-flex;
  align-items: center;
}

.mse-brand {
  gap: 10px;
  min-width: max-content;
  color: var(--mse-text);
  font-size: 14px;
  font-weight: 850;
  letter-spacing: -0.01em;
  text-decoration: none;
}

.mse-brand__mark {
  width: 30px;
  height: 30px;
  border: 1px solid rgba(139, 220, 255, 0.45);
  border-radius: 11px;
  background:
    linear-gradient(135deg, rgba(139, 220, 255, 0.96), rgba(187, 167, 255, 0.92)),
    #101827;
  box-shadow: 0 0 30px rgba(139, 220, 255, 0.35);
}

.mse-nav__links {
  justify-content: center;
  gap: 22px;
}

.mse-nav__links a {
  color: rgba(247, 248, 255, 0.68);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: color 160ms ease;
}

.mse-nav__links a:hover {
  color: var(--mse-text);
}

.mse-nav__cta {
  justify-content: center;
  min-height: 42px;
  padding: 0 18px;
  border-radius: 999px;
  color: #07101b;
  background: #f7f8ff;
  font-size: 13px;
  font-weight: 850;
  text-decoration: none;
}

.mse-hero {
  position: relative;
  min-height: 100vh;
  padding: 148px 0 106px;
  isolation: isolate;
}

.mse-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -3;
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.95), transparent 78%);
}

.mse-hero__backdrop {
  position: absolute;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  overflow: hidden;
}

.mse-orb,
.mse-rail {
  position: absolute;
  display: block;
}

.mse-orb {
  border-radius: 999px;
  filter: blur(18px);
  opacity: 0.58;
}

.mse-orb--cyan {
  top: 12%;
  left: -120px;
  width: 280px;
  height: 280px;
  background: rgba(139, 220, 255, 0.2);
}

.mse-orb--violet {
  top: 7%;
  right: -130px;
  width: 360px;
  height: 360px;
  background: rgba(187, 167, 255, 0.18);
}

.mse-rail {
  width: 680px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.24), transparent);
  transform: rotate(-28deg);
}

.mse-rail--one {
  top: 24%;
  right: 2%;
}

.mse-rail--two {
  right: 16%;
  bottom: 18%;
  opacity: 0.7;
}

.mse-hero__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(450px, 1.08fr);
  align-items: center;
  gap: clamp(42px, 7vw, 92px);
}

.mse-hero__copy {
  max-width: 720px;
}

.mse-kicker {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  margin: 0 0 20px;
  color: var(--mse-accent);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.18em;
  line-height: 1.4;
  text-transform: uppercase;
}

.mse-kicker::before {
  content: "";
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: currentColor;
  box-shadow: 0 0 20px currentColor;
}

.mse-hero h1,
.mse-section h2,
.mse-final-cta h2 {
  margin: 0;
  color: var(--mse-text);
  font-weight: 950;
  letter-spacing: -0.068em;
  line-height: 0.95;
}

.mse-hero h1 {
  max-width: 760px;
  line-height: 1.1;
font-size: clamp(24px, 4.5vw, 60px);
}

.mse-hero__lead {
  margin: 28px 0 0;
  max-width: 660px;
  color: var(--mse-muted);
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.72;
}

.mse-hero__actions,
.mse-final-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.mse-hero__actions {
  margin-top: 38px;
}

.mse-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 54px;
  padding: 0 24px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-weight: 900;
  text-decoration: none;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;
}

.mse-button:hover {
  transform: translateY(-2px);
}

.mse-button svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mse-button--primary {
  color: #07101b;
  background: linear-gradient(135deg, #ffffff, #bfefff 42%, #c9bbff);
  box-shadow: 0 20px 52px rgba(139, 220, 255, 0.24);
}

.mse-button--secondary {
  color: var(--mse-text);
  border-color: rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.075);
  backdrop-filter: blur(18px);
}

.mse-button--secondary:hover {
  border-color: rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.12);
}

.mse-version {
  margin: 14px 0 0 4px;
  color: var(--mse-dim);
  font-size: 13px;
}

.mse-hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin: 48px 0 0;
}

.mse-hero__stats div {
  min-height: 112px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.055);
  backdrop-filter: blur(18px);
}

.mse-hero__stats dt {
  margin: 0;
  color: var(--mse-text);
  font-size: 24px;
  font-weight: 950;
  letter-spacing: -0.05em;
}

.mse-hero__stats dd {
  margin: 9px 0 0;
  color: var(--mse-dim);
  font-size: 13px;
  line-height: 1.45;
}

.mse-hero__showcase {
  position: relative;
  min-width: 0;
  perspective: 1200px;
}

.mse-product-frame {
  position: relative;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 36px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.05)),
    rgba(4, 8, 17, 0.68);
  box-shadow:
    0 42px 120px rgba(0, 0, 0, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(26px);
  transform: rotateX(2deg) rotateY(-5deg);
}

.mse-product-frame::before {
  content: "";
  position: absolute;
  inset: 34px -26px -22px 28px;
  z-index: -1;
  border-radius: 42px;
  background: linear-gradient(135deg, rgba(139, 220, 255, 0.18), rgba(187, 167, 255, 0.15));
  filter: blur(22px);
}

.mse-product-frame__topbar {
  display: grid;
  grid-template-columns: 84px 1fr auto;
  align-items: center;
  gap: 12px;
  min-height: 46px;
  padding: 0 16px;
  color: rgba(247, 248, 255, 0.66);
  font-size: 12px;
}

.mse-product-frame__topbar div {
  display: flex;
  gap: 8px;
}

.mse-product-frame__topbar span {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
}

.mse-product-frame__topbar strong {
  color: rgba(247, 248, 255, 0.78);
  font-weight: 850;
}

.mse-product-frame__topbar em {
  color: rgba(247, 248, 255, 0.44);
  font-style: normal;
}

.mse-placeholder {
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-radius: 26px;
  color: #fff;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent 34%),
    radial-gradient(circle at 12% 16%, rgba(255, 255, 255, 0.22), transparent 20%),
    repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0 1px, transparent 1px 22px),
    var(--mse-placeholder);
  box-shadow: inset 0 0 90px rgba(0, 0, 0, 0.22);
}

.mse-placeholder--hero {
  min-height: clamp(360px, 43vw, 560px);
}

.mse-placeholder--workflow {
  min-height: 286px;
  aspect-ratio: 16 / 10;
}

.mse-placeholder div {
  display: grid;
  gap: 9px;
  padding: 24px;
  text-align: center;
}

.mse-placeholder strong {
  font-size: clamp(23px, 3vw, 36px);
  font-weight: 950;
  letter-spacing: -0.045em;
}

.mse-placeholder span {
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
  font-weight: 700;
}

.mse-floating-card {
  position: absolute;
  z-index: 3;
  display: grid;
  gap: 4px;
  min-width: 148px;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 22px;
  background: rgba(9, 13, 24, 0.72);
  box-shadow: 0 18px 52px rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(22px);
}

.mse-floating-card--left {
  left: -36px;
  bottom: 56px;
}

.mse-floating-card--right {
  top: 80px;
  right: -24px;
}

.mse-floating-card span,
.mse-floating-card small {
  color: var(--mse-dim);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.mse-floating-card strong {
  color: var(--mse-text);
  font-size: 24px;
  font-weight: 950;
  letter-spacing: -0.04em;
}

.mse-floating-card small {
  color: rgba(139, 220, 255, 0.72);
  letter-spacing: 0.02em;
  text-transform: none;
}

.mse-section {
  position: relative;
  padding: 118px 0;
}

.mse-section--why,
.mse-section--workflow {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0)),
    radial-gradient(circle at 50% 0%, rgba(139, 220, 255, 0.06), transparent 36rem);
}

.mse-section__intro {
  max-width: 790px;
  margin-bottom: 42px;
}

.mse-section__intro--center {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.mse-section__intro--center .mse-kicker {
  justify-content: center;
}

.mse-section h2,
.mse-final-cta h2 {
  font-size: clamp(38px, 5.5vw, 72px);
}

.mse-section__intro p:not(.mse-kicker),
.mse-tech-layout__copy > p:not(.mse-kicker),
.mse-final-cta p,
.mse-comparison__card p,
.mse-feature-card p,
.mse-workflow-item__copy p,
.mse-format-card p {
  color: var(--mse-muted);
  line-height: 1.78;
}

.mse-section__intro p:not(.mse-kicker),
.mse-tech-layout__copy > p:not(.mse-kicker),
.mse-final-cta p {
  margin: 22px 0 0;
  font-size: 17px;
}

.mse-comparison {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.mse-comparison__card,
.mse-feature-card,
.mse-workflow-item__copy,
.mse-format-card,
.mse-final-cta__panel {
  border: 1px solid var(--mse-border);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.045)),
    rgba(255, 255, 255, 0.045);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(22px);
}

.mse-comparison__card {
  display: grid;
  gap: 18px;
  min-height: 650px;
  padding: clamp(24px, 4vw, 36px);
  border-radius: var(--mse-radius-xl);
}

.mse-comparison__card--modern {
  border-color: rgba(139, 220, 255, 0.34);
  background:
    radial-gradient(circle at 78% 10%, rgba(139, 220, 255, 0.16), transparent 36%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.052));
}

.mse-card-label,
.mse-workflow-item__copy > span {
  width: max-content;
  padding: 7px 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  color: var(--mse-accent);
  background: rgba(139, 220, 255, 0.08);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mse-comparison__card--legacy .mse-card-label {
  color: rgba(247, 248, 255, 0.58);
  background: rgba(255, 255, 255, 0.06);
}

.mse-comparison__card h3,
.mse-feature-card h3,
.mse-workflow-item__copy h3,
.mse-format-card h3 {
  margin: 0;
  color: var(--mse-text);
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.12;
  letter-spacing: -0.045em;
}

.mse-comparison__card p,
.mse-feature-card p,
.mse-workflow-item__copy p,
.mse-format-card p {
  margin: 0;
}

.mse-csv-panel,
.mse-curve-panel {
  align-self: stretch;
  display: grid;
  min-height: 230px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 24px;
  background: rgba(4, 8, 17, 0.58);
}

.mse-csv-panel {
  align-content: center;
  gap: 10px;
  padding: 22px;
}

.mse-csv-panel code {
  display: block;
  padding: 12px 13px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  color: rgba(247, 248, 255, 0.55);
  background: rgba(255, 255, 255, 0.04);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
}

.mse-curve-panel {
  place-items: center;
  padding: 20px;
  color: var(--mse-accent);
}

.mse-curve-panel svg {
  width: 100%;
  max-width: 390px;
  overflow: visible;
}

.mse-curve-panel__grid {
  fill: none;
  stroke: rgba(255, 255, 255, 0.09);
  stroke-width: 1;
}

.mse-curve-panel__area {
  fill: url(#mse-curve-fill);
  stroke: none;
}

.mse-curve-panel__line {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: 6;
}

.mse-curve-panel circle {
  fill: #070b14;
  stroke: currentColor;
  stroke-width: 4;
}

.mse-comparison__card ul {
  display: grid;
  gap: 11px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.mse-comparison__card li {
  position: relative;
  padding-left: 25px;
  color: rgba(247, 248, 255, 0.76);
  line-height: 1.5;
}

.mse-comparison__card li::before {
  content: "";
  position: absolute;
  top: 0.62em;
  left: 0;
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: currentColor;
  opacity: 0.78;
}

.mse-feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.mse-feature-card {
  min-height: 348px;
  padding: 28px;
  border-radius: var(--mse-radius-lg);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;
}

.mse-feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(139, 220, 255, 0.34);
  background:
    radial-gradient(circle at 50% 0%, rgba(139, 220, 255, 0.12), transparent 58%),
    rgba(255, 255, 255, 0.08);
}

.mse-feature-card__icon {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  margin-bottom: 30px;
  border: 1px solid rgba(139, 220, 255, 0.34);
  border-radius: 19px;
  color: var(--mse-accent);
  background: rgba(139, 220, 255, 0.09);
}

.mse-feature-card__icon svg {
  width: 28px;
  height: 28px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

.mse-feature-card p {
  margin-top: 16px;
}

.mse-workflow-list {
  position: relative;
  display: grid;
  gap: 34px;
  margin-top: 20px;
}

.mse-workflow-list::before {
  content: "";
  position: absolute;
  top: 24px;
  bottom: 24px;
  left: 50%;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(139, 220, 255, 0.36), transparent);
  transform: translateX(-50%);
}

.mse-workflow-item {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.72fr);
  align-items: center;
  gap: 32px;
}

.mse-workflow-item::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  width: 14px;
  height: 14px;
  border: 3px solid #070b14;
  border-radius: 999px;
  background: var(--mse-accent);
  box-shadow: 0 0 28px rgba(139, 220, 255, 0.78);
  transform: translate(-50%, -50%);
}

.mse-workflow-item--reverse {
  grid-template-columns: minmax(320px, 0.72fr) minmax(0, 1fr);
}

.mse-workflow-item--reverse .mse-workflow-item__visual {
  order: 2;
}

.mse-workflow-item--reverse .mse-workflow-item__copy {
  order: 1;
}

.mse-workflow-item__visual,
.mse-workflow-item__copy {
  min-width: 0;
}

.mse-workflow-item__copy {
  display: grid;
  gap: 17px;
  padding: clamp(25px, 4vw, 38px);
  border-radius: var(--mse-radius-lg);
}

.mse-section--tech {
  padding-top: 126px;
}

.mse-tech-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(390px, 0.78fr);
  align-items: center;
  gap: 44px;
}

.mse-tech-layout__copy h2 {
  max-width: 760px;
}

.mse-tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.mse-tech-pills span,
.mse-format-card__map span {
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 999px;
  color: rgba(247, 248, 255, 0.82);
  background: rgba(255, 255, 255, 0.07);
  font-weight: 850;
}

.mse-tech-pills span {
  padding: 10px 14px;
  font-size: 13px;
}

.mse-format-card {
  padding: 34px;
  border-radius: var(--mse-radius-xl);
}

.mse-format-card__header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 30px;
}

.mse-format-card__header span {
  display: grid;
  place-items: center;
  width: 88px;
  height: 88px;
  border-radius: 28px;
  color: #07101b;
  background: linear-gradient(135deg, #ffffff, #bfefff 45%, #c9bbff);
  box-shadow: 0 22px 54px rgba(139, 220, 255, 0.22);
  font-size: 24px;
  font-weight: 950;
  letter-spacing: -0.06em;
}

.mse-format-card__header strong {
  color: rgba(247, 248, 255, 0.56);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.mse-format-card p {
  margin-top: 16px;
}

.mse-format-card__map {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.mse-format-card__map span {
  padding: 9px 12px;
  font-size: 12px;
}

.mse-final-cta {
  padding: 88px 0 108px;
}

.mse-final-cta__panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 34px;
  padding: clamp(30px, 5vw, 52px);
  border-color: rgba(139, 220, 255, 0.27);
  border-radius: 38px;
  background:
    radial-gradient(circle at 84% 10%, rgba(139, 220, 255, 0.17), transparent 32%),
    radial-gradient(circle at 8% 82%, rgba(187, 167, 255, 0.13), transparent 30%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.052));
}

.mse-final-cta__panel h2 {
  max-width: 780px;
}

.mse-final-cta__actions {
  flex-direction: column;
  min-width: 260px;
}

.mse-final-cta__actions small {
  color: var(--mse-dim);
  text-align: center;
}

@media (max-width: 1120px) {
  .mse-hero__layout,
  .mse-tech-layout {
    grid-template-columns: 1fr;
  }

  .mse-hero__copy {
    max-width: 880px;
  }

  .mse-feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mse-product-frame {
    transform: none;
  }
}

@media (max-width: 860px) {
  .mse-shell,
  .mse-nav {
    width: min(100% - 28px, 1280px);
  }

  .mse-nav {
    grid-template-columns: 1fr auto;
  }

  .mse-nav__links {
    display: none;
  }

  .mse-hero {
    min-height: auto;
    padding: 118px 0 72px;
  }

  .mse-hero h1 {
    font-size: clamp(46px, 14vw, 74px);
  }

  .mse-hero__stats,
  .mse-comparison,
  .mse-feature-grid,
  .mse-final-cta__panel {
    grid-template-columns: 1fr;
  }

  .mse-comparison__card {
    min-height: auto;
  }

  .mse-floating-card {
    display: none;
  }

  .mse-workflow-list::before,
  .mse-workflow-item::before {
    display: none;
  }

  .mse-workflow-item,
  .mse-workflow-item--reverse {
    grid-template-columns: 1fr;
  }

  .mse-workflow-item--reverse .mse-workflow-item__visual,
  .mse-workflow-item--reverse .mse-workflow-item__copy {
    order: initial;
  }

  .mse-section {
    padding: 82px 0;
  }

  .mse-final-cta__actions {
    min-width: 0;
  }
}

@media (max-width: 560px) {
  .mse-nav {
    top: 10px;
    min-height: 58px;
  }

  .mse-brand span:last-child {
    max-width: 154px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mse-nav__cta {
    min-height: 38px;
    padding: 0 14px;
  }

  .mse-hero__actions,
  .mse-final-cta__actions {
    align-items: stretch;
  }

  .mse-button {
    width: 100%;
  }

  .mse-product-frame__topbar {
    grid-template-columns: 64px 1fr;
  }

  .mse-product-frame__topbar em {
    display: none;
  }

  .mse-placeholder--hero {
    min-height: 286px;
  }

  .mse-placeholder--workflow {
    min-height: 220px;
  }

  .mse-feature-card {
    min-height: auto;
  }

  .mse-csv-panel code {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>

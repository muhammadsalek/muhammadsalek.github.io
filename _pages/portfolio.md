---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

<style>
:root {
  --bg: #060912;
  --surface: #0d1220;
  --surface2: #131929;
  --border: rgba(255,255,255,0.07);
  --text: #e8edf5;
  --muted: #6b7a99;
  --c1: #00d4ff;
  --c2: #a855f7;
  --c3: #f97316;
  --c4: #22d3ee;
  --c5: #4ade80;
  --c6: #fb7185;
}

body { background: var(--bg) !important; color: var(--text) !important; }

.port-hero {
  background: linear-gradient(135deg, #060912 0%, #0d1a35 50%, #0a1628 100%);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
}
.port-hero::before {
  content: '';
  position: absolute;
  top: -80px; left: -80px;
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: auroraMove 8s ease-in-out infinite alternate;
}
.port-hero::after {
  content: '';
  position: absolute;
  bottom: -80px; right: -80px;
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%);
  border-radius: 50%;
  animation: auroraMove 10s ease-in-out infinite alternate-reverse;
}
@keyframes auroraMove {
  0%   { transform: translate(0,0) scale(1); }
  100% { transform: translate(40px,30px) scale(1.2); }
}

.port-pill {
  display: inline-block;
  background: rgba(0,212,255,0.1);
  border: 1px solid rgba(0,212,255,0.3);
  border-radius: 100px;
  padding: 0.35rem 1.1rem;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #00d4ff;
  margin-bottom: 1.2rem;
  animation: pillPulse 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
}
@keyframes pillPulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(0,212,255,0.35); }
  50%      { box-shadow: 0 0 0 10px rgba(0,212,255,0); }
}

.port-hero h1 {
  font-size: 2.8rem;
  font-weight: 800;
  margin: 0 0 0.8rem;
  background: linear-gradient(135deg, #00d4ff, #a855f7, #f97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
  animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
}
@keyframes fadeUp {
  from { opacity:0; transform:translateY(24px); }
  to   { opacity:1; transform:translateY(0); }
}
.port-hero p {
  color: #6b7a99;
  font-size: 0.95rem;
  max-width: 520px;
  margin: 0 auto 1.8rem;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}
.hero-btns { position: relative; z-index: 1; display:flex; gap:0.8rem; justify-content:center; flex-wrap:wrap; }
.hbtn {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  font-size: 0.83rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}
.hbtn-primary {
  background: linear-gradient(135deg, #00d4ff, #a855f7);
  color: #fff;
  box-shadow: 0 4px 20px rgba(0,212,255,0.25);
}
.hbtn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,212,255,0.4); }
.hbtn-ghost {
  border: 1px solid rgba(255,255,255,0.1);
  color: #e8edf5;
}
.hbtn-ghost:hover { border-color: #a855f7; color: #a855f7; }

/* STATS BAR */
.stats-bar {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  background: var(--surface);
  margin-bottom: 2.5rem;
}
.stat-item {
  flex: 1;
  min-width: 120px;
  padding: 1.4rem;
  text-align: center;
  border-right: 1px solid var(--border);
}
.stat-item:last-child { border-right: none; }
.stat-n {
  font-size: 1.9rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-n.og { background: linear-gradient(135deg,#f97316,#fb7185); -webkit-background-clip:text; background-clip:text; }
.stat-n.gr { background: linear-gradient(135deg,#4ade80,#00d4ff); -webkit-background-clip:text; background-clip:text; }
.stat-l { font-size: 0.68rem; color: #6b7a99; letter-spacing: 0.1em; text-transform: uppercase; margin-top:0.2rem; }

/* SEC LABEL */
.sec-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #00d4ff;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.sec-label::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,rgba(0,212,255,0.3),transparent); }
.sec-title {
  font-size: 1.7rem;
  font-weight: 700;
  color: #e8edf5;
  margin-bottom: 1.5rem;
}

/* PROJECT CARDS */
.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px,1fr));
  gap: 1.2rem;
  margin-bottom: 2.5rem;
}
.proj-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s;
  animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
}
.proj-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }

.proj-card.cyan  { border-top: 3px solid #00d4ff; }
.proj-card.violet{ border-top: 3px solid #a855f7; }
.proj-card.orange{ border-top: 3px solid #f97316; }
.proj-card.green { border-top: 3px solid #4ade80; }

.proj-head { padding: 1.4rem 1.4rem 0.8rem; display:flex; gap:0.9rem; align-items:flex-start; }
.proj-ico {
  width: 46px; height: 46px;
  border-radius: 12px;
  display: flex; align-items:center; justify-content:center;
  font-size: 1.3rem; flex-shrink:0;
}
.cyan  .proj-ico { background: rgba(0,212,255,0.1); }
.violet .proj-ico { background: rgba(168,85,247,0.1); }
.orange .proj-ico { background: rgba(249,115,22,0.1); }
.green  .proj-ico { background: rgba(74,222,128,0.1); }

.proj-name { font-weight: 700; font-size: 0.93rem; color: #e8edf5; margin-bottom:0.15rem; }
.proj-sub  { font-size: 0.75rem; color: #6b7a99; }
.proj-body { padding: 0 1.4rem; }
.proj-desc { font-size: 0.82rem; color: #94a3b8; line-height:1.6; margin-bottom:0.9rem; }

.feat-pills { display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:0.9rem; }
.feat {
  font-size: 0.68rem;
  padding: 0.2rem 0.55rem;
  border-radius: 100px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: #6b7a99;
}

.tech-row { display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:1.2rem; }
.tt { font-size:0.68rem; font-weight:600; padding:0.18rem 0.5rem; border-radius:5px; }
.cyan   .tt { background:rgba(0,212,255,0.1); color:#00d4ff; }
.violet .tt { background:rgba(168,85,247,0.1); color:#a855f7; }
.orange .tt { background:rgba(249,115,22,0.1); color:#f97316; }
.green  .tt { background:rgba(74,222,128,0.1); color:#4ade80; }

.proj-foot {
  padding: 0.9rem 1.4rem 1.4rem;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.proj-link {
  display: inline-flex; align-items:center; gap:0.35rem;
  font-size: 0.8rem; font-weight:600; text-decoration:none;
  transition: gap 0.2s;
}
.proj-link:hover { gap: 0.7rem; }
.cyan   .proj-link { color: #00d4ff; }
.violet .proj-link { color: #a855f7; }
.orange .proj-link { color: #f97316; }
.green  .proj-link { color: #4ade80; }

/* DASH CARDS */
.dash-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:1rem; margin-bottom:2.5rem; }
.dash-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 13px;
  padding: 1.3rem;
  display: flex; gap: 0.9rem; align-items: flex-start;
  transition: border-color 0.25s, transform 0.25s;
}
.dash-card:hover { border-color: rgba(168,85,247,0.4); transform: translateY(-3px); }
.dash-num {
  font-size: 1.5rem; font-weight:800; line-height:1; min-width:2rem;
  background: linear-gradient(135deg,#a855f7,#fb7185);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.dash-name { font-weight:600; font-size:0.85rem; color:#e8edf5; margin-bottom:0.25rem; }
.dash-desc { font-size:0.76rem; color:#6b7a99; line-height:1.5; }
.dash-tools { display:flex; flex-wrap:wrap; gap:0.3rem; margin-top:0.5rem; }
.dtool { font-size:0.66rem; font-weight:600; padding:0.15rem 0.45rem; border-radius:4px; background:rgba(168,85,247,0.1); color:#a855f7; }

/* PROFILE CHIPS */
.chips-row { display:flex; flex-wrap:wrap; gap:0.8rem; }
.chip {
  display: inline-flex; align-items:center; gap:0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 9px;
  background: var(--surface);
  border: 1px solid var(--border);
  text-decoration: none;
  color: #e8edf5;
  font-size: 0.82rem; font-weight:500;
  transition: all 0.2s;
}
.chip:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
.chip.c1:hover { border-color:#6b7280; color:#6b7280; }
.chip.c2:hover { border-color:#20beff; color:#20beff; }
.chip.c3:hover { border-color:#f59e0b; color:#f59e0b; }
.chip.c4:hover { border-color:#a855f7; color:#a855f7; }
.chip.c5:hover { border-color:#a6ce39; color:#a6ce39; }
.chip.c6:hover { border-color:#4285f4; color:#4285f4; }
.cdot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
</style>

<!-- HERO -->
<div class="port-hero">
  <div class="port-pill">🛠 Projects & Applications</div>
  <h1>Research Portfolio</h1>
  <p>Interactive data applications, spatial dashboards, and ML tools — making research accessible and reproducible.</p>
  <div class="hero-btns">
    <a href="https://github.com/muhammadsalek" class="hbtn hbtn-primary" target="_blank">View on GitHub ↗</a>
    <a href="https://salek-protfolio.vercel.app/" class="hbtn hbtn-ghost" target="_blank">Personal Website</a>
  </div>
</div>

<!-- STATS -->
<div class="stats-bar">
  <div class="stat-item"><div class="stat-n">4</div><div class="stat-l">Live Apps</div></div>
  <div class="stat-item"><div class="stat-n og">4+</div><div class="stat-l">Research Pipelines</div></div>
  <div class="stat-item"><div class="stat-n gr">R · Py</div><div class="stat-l">Core Stack</div></div>
  <div class="stat-item"><div class="stat-n">XAI</div><div class="stat-l">SHAP / LIME</div></div>
</div>

---

## 🛠️ Projects & Applications

<div class="proj-grid">

<div class="proj-card cyan">
  <div class="proj-head">
    <div class="proj-ico">💧</div>
    <div>
      <div class="proj-name">AquaLens</div>
      <div class="proj-sub">Water Quality Intelligence Platform · Buriganga River, Dhaka</div>
    </div>
  </div>
  <div class="proj-body">
    <p class="proj-desc">Real-time monitoring and visualization of water quality parameters for the Buriganga River — supporting urban health and climate-resilient decision-making.</p>
    <div class="feat-pills">
      <span class="feat">Real-time WQI</span><span class="feat">Geospatial maps</span>
      <span class="feat">ML predictions</span><span class="feat">10-year trends</span><span class="feat">Health risk dashboard</span>
    </div>
    <div class="tech-row">
      <span class="tt">R</span><span class="tt">Shiny</span><span class="tt">ggplot2</span>
      <span class="tt">leaflet</span><span class="tt">XGBoost</span><span class="tt">tidyverse</span>
    </div>
  </div>
  <div class="proj-foot">
    <a href="https://salek.shinyapps.io/aqualens/" class="proj-link" target="_blank">Live Demo →</a>
  </div>
</div>

<div class="proj-card violet">
  <div class="proj-head">
    <div class="proj-ico">📊</div>
    <div>
      <div class="proj-name">Interactive Statistical Calculator</div>
      <div class="proj-sub">Web-based stats tool for students & researchers</div>
    </div>
  </div>
  <div class="proj-body">
    <p class="proj-desc">Comprehensive R Shiny calculator covering hypothesis testing, probability distributions, regression analysis, and ANOVA with interactive visual outputs.</p>
    <div class="feat-pills">
      <span class="feat">Descriptive stats</span><span class="feat">Hypothesis testing</span>
      <span class="feat">Distributions</span><span class="feat">Regression</span><span class="feat">ANOVA</span>
    </div>
    <div class="tech-row">
      <span class="tt">R</span><span class="tt">Shiny</span><span class="tt">ggplot2</span><span class="tt">DT</span>
    </div>
  </div>
  <div class="proj-foot">
    <a href="https://qa8m8h-md0salek-miah.shinyapps.io/calculator/" class="proj-link" target="_blank">Live Demo →</a>
  </div>
</div>

<div class="proj-card orange">
  <div class="proj-head">
    <div class="proj-ico">🎬</div>
    <div>
      <div class="proj-name">MovieLens Recommendation System</div>
      <div class="proj-sub">Collaborative filtering · Hugging Face Spaces</div>
    </div>
  </div>
  <div class="proj-body">
    <p class="proj-desc">Interactive movie recommendation app using collaborative filtering — deployed on Hugging Face Spaces with genre-based and user/item-based filtering engines.</p>
    <div class="feat-pills">
      <span class="feat">Collaborative filtering</span><span class="feat">User-based</span>
      <span class="feat">Item-based</span><span class="feat">Genre filter</span>
    </div>
    <div class="tech-row">
      <span class="tt">R</span><span class="tt">Shiny</span><span class="tt">recommenderlab</span><span class="tt">Hugging Face</span>
    </div>
  </div>
  <div class="proj-foot">
    <a href="https://huggingface.co/spaces/salekml/MovieLens_App1" class="proj-link" target="_blank">Live Demo →</a>
  </div>
</div>

<div class="proj-card green">
  <div class="proj-head">
    <div class="proj-ico">🌤</div>
    <div>
      <div class="proj-name">Weather Monitoring & Forecast App</div>
      <div class="proj-sub">Real-time climate dashboard · Hugging Face Spaces</div>
    </div>
  </div>
  <div class="proj-body">
    <p class="proj-desc">Interactive weather dashboard with real-time API data retrieval, climate trend visualizations, multi-location comparison, and historical weather pattern analysis.</p>
    <div class="feat-pills">
      <span class="feat">Real-time API</span><span class="feat">Trend viz</span>
      <span class="feat">Multi-location</span><span class="feat">Historical patterns</span>
    </div>
    <div class="tech-row">
      <span class="tt">R</span><span class="tt">Shiny</span><span class="tt">Plotly</span><span class="tt">httr</span><span class="tt">Hugging Face</span>
    </div>
  </div>
  <div class="proj-foot">
    <a href="https://huggingface.co/spaces/salekml/Weather_app" class="proj-link" target="_blank">Live Demo →</a>
  </div>
</div>

</div>

---

## 📈 Research Dashboards & Pipelines

<div class="dash-grid">

<div class="dash-card">
  <div class="dash-num">01</div>
  <div>
    <div class="dash-name">DHS Multi-Country Survey Pipeline</div>
    <div class="dash-desc">Reproducible analysis pipeline for Bangladesh, Nepal, Zambia, and Burkina Faso demographic & health surveys.</div>
    <div class="dash-tools"><span class="dtool">R</span><span class="dtool">STATA</span><span class="dtool">Python</span></div>
  </div>
</div>

<div class="dash-card">
  <div class="dash-num">02</div>
  <div>
    <div class="dash-name">Spatial ML Health Dashboard</div>
    <div class="dash-desc">Geospatial mapping of maternal health inequalities with choropleth visualizations and spatial regression models.</div>
    <div class="dash-tools"><span class="dtool">R</span><span class="dtool">sf</span><span class="dtool">tmap</span><span class="dtool">ArcGIS</span></div>
  </div>
</div>

<div class="dash-card">
  <div class="dash-num">03</div>
  <div>
    <div class="dash-name">Air Quality ML Classifier</div>
    <div class="dash-desc">XGBoost & Random Forest comparative evaluation for Bangladesh AQI classification with SHAP explainability.</div>
    <div class="dash-tools"><span class="dtool">Python</span><span class="dtool">scikit-learn</span><span class="dtool">SHAP</span></div>
  </div>
</div>

<div class="dash-card">
  <div class="dash-num">04</div>
  <div>
    <div class="dash-name">Buriganga WQI Trend Analysis</div>
    <div class="dash-desc">10-year temporal Water Quality Index analysis with forecasting models and seasonal decomposition.</div>
    <div class="dash-tools"><span class="dtool">R</span><span class="dtool">ggplot2</span><span class="dtool">forecast</span></div>
  </div>
</div>

</div>

---

## 🔗 Profiles & Code

<div class="chips-row">
  <a href="https://github.com/muhammadsalek" class="chip c1" target="_blank"><span class="cdot" style="background:#6b7280"></span>GitHub · muhammadsalek</a>
  <a href="https://www.kaggle.com/muhammadsalekmiah" class="chip c2" target="_blank"><span class="cdot" style="background:#20beff"></span>Kaggle · muhammadsalekmiah</a>
  <a href="https://huggingface.co/salekml" class="chip c3" target="_blank"><span class="cdot" style="background:#f59e0b"></span>Hugging Face · salekml</a>
  <a href="https://salek-protfolio.vercel.app/" class="chip c4" target="_blank"><span class="cdot" style="background:#a855f7"></span>Portfolio Website</a>
  <a href="https://orcid.org/0009-0005-5973-461X" class="chip c5" target="_blank"><span class="cdot" style="background:#a6ce39"></span>ORCID</a>
  <a href="https://scholar.google.com/citations?user=oV99NYoAAAAJ&hl=en" class="chip c6" target="_blank"><span class="cdot" style="background:#4285f4"></span>Google Scholar</a>
</div>

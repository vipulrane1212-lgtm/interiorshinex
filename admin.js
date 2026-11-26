const CRM_KEY = "shinex_crm_v1";
const PIN_KEY = "shinex_admin_pin";
const AUTH_SESSION_KEY = "shinex_admin_unlocked";
const SYNC_KEY = "shinex_crm_sync";

const memoryStore = {};
function getLocalStore() { try { return window.localStorage; } catch (_) { return null; } }
function getSessionStore() { try { return window.sessionStorage; } catch (_) { return null; } }
function safeGet(store, key) {
  try { return store ? store.getItem(key) : (memoryStore[key] ?? null); } catch (_) { return memoryStore[key] ?? null; }
}
function safeSet(store, key, val) {
  memoryStore[key] = val;
  try { if (store) store.setItem(key, val); } catch (_) {}
}
function safeRemove(store, key) {
  delete memoryStore[key];
  try { if (store) store.removeItem(key); } catch (_) {}
}

const CATALOG = {
  Residential: {
    "Complete Home Interior Design": ["1BHK Complete Home Interiors", "2BHK Complete Home Interiors", "3BHK Complete Home Interiors", "4BHK Complete Home Interiors"],
    "Types of Bathroom Interior": ["Modern Minimalist Bathroom", "Luxury Bathroom", "Contemporary Bathroom", "Compact Bathroom"],
    "Modular Kitchen Design": ["L-Shaped Kitchen", "U-Shaped Kitchen", "Parallel Kitchen"],
    "Wardrobe & Bed Interiors": ["Sliding Door Wardrobe", "Walk-in Wardrobe", "Upholstered Bed Design", "Storage Bed Design", "Custom Carpentry & Wardrobe Work"],
    "Luxury Villa & Bungalow Interior Design": [
      "Double-height living room & grand entrance foyer design",
      "Custom marble, Italian stone & wooden flooring work",
      "Private home theater, bar lounge & gym room setup",
      "Designer staircase, glass railings & chandelier installation",
      "Outdoor patio, pergola, balcony & landscape design"
    ],
    "Flat & Apartment Renovation Services": ["False Ceiling & POP Work", "Civil & Masonry Work", "Plumbing & Electrical Work", "Interior Painting", "Fabrication Work"]
  },
  "Commercial & Civil": {
    "Corporate Office Renovation & Remodeling": ["Office layout reconfiguration & space expansion", "Old office dismantling, demolition & debris removal", "Office flooring, ceiling & lighting upgrade", "Corporate reception, cabin & conference room makeover", "Office washroom, pantry & civil refurbishment"],
    "Bare Shell to Full Office Fit-Out": ["Turnkey warm shell to furnished office fit-out", "Complete civil, flooring & sub-floor leveling", "End-to-end MEP, HVAC & electrical fit-out", "Custom cabins, workstations & interior carpentry", "Fire safety, IT server room & security integration"],
    "Modular Office Furniture & Workstation Setup": ["Linear & cluster employee workstation desks", "Executive MD desk & manager cabin furniture", "Conference table & boardroom seating setup", "Ergonomic office chairs & lounge sofas", "Custom reception desk, pedestals & storage cabinets"],
    "Glass Partition & Office Cabin Installation": ["Frameless toughened glass cabin partitions", "Aluminum framed & slim profile glass partitions", "Acoustic double-glazed soundproof glass cabins", "Sliding, folding & demountable glass walls", "Glass frosted film, blinds & branding graphics"],
    "Commercial False Ceiling & Lighting Contractors": ["Gypsum board & POP seamless false ceiling", "Armstrong grid & mineral fiber tile ceiling", "Open cell, baffle & metal strip ceilings", "Architectural LED profile, track & panel lighting", "Exposed industrial ceiling painting & hanging lights"],
    "MEP, HVAC (AC) & Electrical Contracting": ["Commercial VRF, VRV, ductable & cassette AC installation", "Complete office electrical wiring, DB box & UPS setup", "Structured LAN cabling, Wi-Fi & server room setup", "Fire fighting sprinklers, smoke detectors & alarm systems", "Commercial plumbing, drainage & fresh air ventilation"],
    "3D Commercial Interior Rendering & Walkthroughs": ["2D CAD space planning & furniture layout drawings", "Photorealistic 3D office & retail interior renders", "360-degree virtual reality (VR) interior tours", "3D animated commercial walkthrough videos", "Material mood boards & working construction blueprints"]
  }
};

function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getSeedData() {
  const t0 = todayISO(0);
  const t1 = todayISO(1);
  const tMinus1 = todayISO(-1);
  const tPlus14 = todayISO(14);
  const tPlus35 = todayISO(35);
  const tMinus12 = todayISO(-12);

  return {
    leads: [
      {
        id: "LD-9041",
        createdAt: new Date(Date.now() - 3600 * 1000 * 4).toISOString(),
        name: "Anirudh Deshmukh",
        contact: "+91 98204 51120",
        email: "anirudh.d@example.com",
        city: "Seawoods, Navi Mumbai",
        message: "Looking for 3BHK complete turnkey interiors plus acoustic sliding wardrobe.",
        world: "Residential",
        service: "Complete Home Interior Design",
        subService: "3BHK Complete Home Interiors",
        concept: "Master Bedroom with Walk-in Dressing",
        status: "Site Visit",
        priority: "Hot",
        estimatedValue: 1850000,
        followUpAt: `${t0}T16:30`,
        assignedTo: "Salim Ahmed",
        source: "Website Quote Form",
        notes: [{ at: new Date(Date.now() - 3600 * 1000 * 2).toISOString(), text: "Confirmed site measurement visit at NRI Complex Phase 2." }]
      },
      {
        id: "LD-9040",
        createdAt: new Date(Date.now() - 86400 * 1000 * 1).toISOString(),
        name: "Meera Nair (Apex Tech)",
        contact: "+91 98192 84019",
        email: "meera@apextech.in",
        city: "Vashi, Navi Mumbai",
        message: "Need 4,200 sq.ft bare shell to turnkey corporate fit-out with acoustic glass cabins & VRF AC.",
        world: "Commercial & Civil",
        service: "Bare Shell to Full Office Fit-Out",
        subService: "Turnkey warm shell to furnished office fit-out",
        concept: "",
        status: "Quote Sent",
        priority: "Hot",
        estimatedValue: 3400000,
        followUpAt: `${t0}T12:00`,
        assignedTo: "Salim Ahmed",
        source: "Direct Call",
        notes: [{ at: new Date(Date.now() - 3600 * 1000 * 18).toISOString(), text: "BOQ & 3D concept sent via email. Follow-up scheduled with CFO." }]
      },
      {
        id: "LD-9039",
        createdAt: new Date(Date.now() - 86400 * 1000 * 2).toISOString(),
        name: "Siddharth Joshi",
        contact: "+91 97690 33108",
        email: "s.joshi@example.com",
        city: "Kharghar, Navi Mumbai",
        message: "Modular L-Shaped kitchen in high-gloss acrylic with quartz countertop.",
        world: "Residential",
        service: "Modular Kitchen Design",
        subService: "L-Shaped Kitchen",
        concept: "High-Gloss Acrylic Dual-Tone Cabinets",
        status: "New",
        priority: "Warm",
        estimatedValue: 480000,
        followUpAt: `${t1}T11:00`,
        assignedTo: "Design Lead",
        source: "Website Quote Form",
        notes: []
      },
      {
        id: "LD-9038",
        createdAt: new Date(Date.now() - 86400 * 1000 * 5).toISOString(),
        name: "Dr. Kavita Rao",
        contact: "+91 98211 70944",
        email: "dr.kavita@clinic.in",
        city: "Nerul, Navi Mumbai",
        message: "Clinic reception remodeling + frameless toughened glass cabin partitions.",
        world: "Commercial & Civil",
        service: "Glass Partition & Office Cabin Installation",
        subService: "Frameless toughened glass cabin partitions",
        concept: "",
        status: "Won",
        priority: "Hot",
        estimatedValue: 920000,
        followUpAt: `${tMinus1}T15:00`,
        assignedTo: "Salim Ahmed",
        source: "Google Profile",
        notes: [{ at: new Date(Date.now() - 86400 * 1000 * 2).toISOString(), text: "Token advance received. Civil & glass team mobilized." }]
      }
    ],
    schedule: [
      { id: "SC-101", title: "Site Measurement — Seawoods NRI Complex (Anirudh)", kind: "Site Measurement", date: t0, time: "16:30", leadId: "LD-9041", location: "Seawoods, Navi Mumbai", assignee: "Salim Ahmed", done: false },
      { id: "SC-102", title: "BOQ Commercial Proposal Call — Apex Tech", kind: "Follow-Up Call", date: t0, time: "12:00", leadId: "LD-9040", location: "Vashi Sector 30A", assignee: "Salim Ahmed", done: false },
      { id: "SC-103", title: "Marble & Quartz Slab Inspection — Kharghar", kind: "Material Selection", date: tMinus1, time: "15:00", leadId: "LD-9038", location: "Turbhe Stone Yard", assignee: "Site Supervisor", done: false },
      { id: "SC-104", title: "3D Kitchen Concept Review — Siddharth Joshi", kind: "3D Design Review", date: t1, time: "11:00", leadId: "LD-9039", location: "ShineX Studio", assignee: "Design Lead", done: false }
    ],
    projects: [
      { id: "PR-501", title: "Nerul Diagnostic Clinic Refurbishment", clientName: "Dr. Kavita Rao", world: "Commercial & Civil", location: "Nerul East, Navi Mumbai", budget: 920000, startDate: tMinus12, targetDate: tPlus14, phase: "03 Execution & MEP", progress: 65 },
      { id: "PR-502", title: "Palm Beach 4BHK Villa Turnkey Build", clientName: "Rajeshwari & Vikram Patil", world: "Residential", location: "Sanpada, Navi Mumbai", budget: 4200000, startDate: tMinus12, targetDate: tPlus35, phase: "02 Design & Scope", progress: 35 }
    ]
  };
}

function normalizeState(parsed) {
  const leads = Array.isArray(parsed && parsed.leads) ? parsed.leads.map(l => ({
    id: String(l.id || `LD-${Date.now().toString(36).toUpperCase()}`),
    createdAt: l.createdAt || new Date().toISOString(),
    name: String(l.name || "Unnamed Client"),
    contact: String(l.contact || ""),
    email: String(l.email || ""),
    city: String(l.city || "Navi Mumbai"),
    message: String(l.message || ""),
    world: l.world || "Residential",
    service: l.service || "General Enquiry",
    subService: l.subService || "",
    concept: l.concept || "",
    status: l.status || "New",
    priority: l.priority || "Warm",
    estimatedValue: Number(l.estimatedValue) || 0,
    followUpAt: String(l.followUpAt || ""),
    assignedTo: String(l.assignedTo || "Salim Ahmed"),
    source: String(l.source || "Website Quote Form"),
    notes: Array.isArray(l.notes) ? l.notes : []
  })) : [];

  const schedule = Array.isArray(parsed && parsed.schedule) ? parsed.schedule.map(s => ({
    id: String(s.id || `SC-${Date.now().toString(36).toUpperCase()}`),
    title: String(s.title || "Task"),
    kind: String(s.kind || "Follow-Up Call"),
    date: String(s.date || todayISO(0)),
    time: String(s.time || "11:00"),
    leadId: String(s.leadId || ""),
    location: String(s.location || ""),
    assignee: String(s.assignee || "Salim Ahmed"),
    done: Boolean(s.done)
  })) : [];

  const projects = Array.isArray(parsed && parsed.projects) ? parsed.projects.map(p => ({
    id: String(p.id || `PR-${Date.now().toString(36).toUpperCase()}`),
    title: String(p.title || "Untitled Project"),
    clientName: String(p.clientName || "Client"),
    world: p.world || "Residential",
    location: String(p.location || "Navi Mumbai"),
    budget: Number(p.budget) || 0,
    startDate: String(p.startDate || todayISO(0)),
    targetDate: String(p.targetDate || todayISO(30)),
    phase: String(p.phase || "01 Discovery & Survey"),
    progress: Math.min(100, Math.max(0, Number(p.progress) || 0))
  })) : [];

  return { leads, schedule, projects };
}

let state = null;
let currentView = "overview";
let crmMode = "table";
let scheduleFilter = "active";
let activeLeadId = null;

function loadState() {
  try {
    const raw = safeGet(getLocalStore(), CRM_KEY);
    if (raw) return normalizeState(JSON.parse(raw));
  } catch (e) {}
  const seed = getSeedData();
  saveState(seed);
  return seed;
}

function saveState(next = state) {
  state = next;
  safeSet(getLocalStore(), CRM_KEY, JSON.stringify(state));
}

state = loadState();

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => Array.from(p.querySelectorAll(s));

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatINR(num) {
  const n = Number(num) || 0;
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

function formatDateShort(iso) {
  if (!iso) return "Not scheduled";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("en-IN", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
}

function statusPillClass(status) {
  const map = { New: "pill--new", Contacted: "pill--contacted", "Site Visit": "pill--visit", "Quote Sent": "pill--quote", Won: "pill--won", Lost: "pill--lost" };
  return map[status] || "pill--contacted";
}

function priorityPillClass(p) {
  if (p === "Hot") return "pill--hot";
  if (p === "Warm") return "pill--warm";
  return "pill--normal";
}

function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("is-show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => t.classList.remove("is-show"), 2600);
}

function getConfiguredWebhookUrl() {
  try {
    const s = JSON.parse(safeGet(getLocalStore(), SYNC_KEY) || "{}");
    if (s && s.webhookUrl) return String(s.webhookUrl).trim();
  } catch (_) {}
  const cfg = window.SHINEX_CRM_CONFIG && window.SHINEX_CRM_CONFIG.WEBHOOK_URL;
  return cfg ? String(cfg).trim() : "";
}

function updateSyncStatusBadge() {
  const el = $("#syncStatusBadge");
  if (!el) return;
  const url = getConfiguredWebhookUrl();
  if (url) {
    el.textContent = "Cloud Sheet Connected";
    el.classList.add("sync-pill--live");
    el.title = url;
  } else {
    el.textContent = "Local Browser Only";
    el.classList.remove("sync-pill--live");
    el.title = "Add Google Apps Script URL in Sync & Settings + crm-config.js for cross-device sync";
  }
}

async function pullRemoteLeads({ silent = false } = {}) {
  const url = ($("#webhookUrlInput") && $("#webhookUrlInput").value.trim()) || getConfiguredWebhookUrl();
  if (!url) {
    if (!silent && $("#syncFeedback")) $("#syncFeedback").textContent = "Enter a Web App /exec URL first.";
    return;
  }
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (Array.isArray(data.leads)) {
      const existingIds = new Set(state.leads.map(l => l.id));
      const normalized = normalizeState({ leads: data.leads, schedule: [], projects: [] }).leads;
      const incoming = normalized.filter(l => l && l.id && !existingIds.has(l.id));
      if (incoming.length) {
        state.leads = [...incoming, ...state.leads];
        saveState();
        renderAll();
      }
      if ($("#syncFeedback")) $("#syncFeedback").textContent = `Synced ${incoming.length} new lead(s) from Google Sheets.`;
      if (!silent || incoming.length > 0) showToast(`Synced ${incoming.length} new lead(s)`);
    }
  } catch (err) {
    if (!silent && $("#syncFeedback")) $("#syncFeedback").textContent = "Could not pull remote leads (check Web App permissions: Anyone).";
  }
}

/* Auth Gate */
function handlePinSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const inp = $("#authInput");
  const entered = String(inp ? inp.value : "").trim();
  const expected = String(safeGet(getLocalStore(), PIN_KEY) || "2011").trim();
  if (entered === expected) {
    safeSet(getSessionStore(), AUTH_SESSION_KEY, "1");
    $("#authError").classList.remove("is-visible");
    unlockApp();
  } else {
    $("#authError").classList.add("is-visible");
    if (inp) inp.focus();
  }
}

function initAuth() {
  if (window.location.href.endsWith("?")) {
    try { window.history.replaceState(null, "", window.location.pathname + window.location.hash); } catch (_) {}
  }
  if (!safeGet(getLocalStore(), PIN_KEY)) safeSet(getLocalStore(), PIN_KEY, "2011");
  const unlocked = safeGet(getSessionStore(), AUTH_SESSION_KEY) === "1";
  if (unlocked) unlockApp();

  const authBtn = $("#authSubmitBtn");
  const authInput = $("#authInput");
  const toggleBtn = $("#togglePinVisBtn");
  const errEl = $("#authError");

  if (authBtn) authBtn.addEventListener("click", handlePinSubmit);
  if (authInput) {
    authInput.addEventListener("input", () => {
      if (errEl) errEl.classList.remove("is-visible");
      const entered = String(authInput.value || "").trim();
      const expected = String(safeGet(getLocalStore(), PIN_KEY) || "2011").trim();
      if (entered && entered === expected) {
        handlePinSubmit();
      }
    });
    authInput.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        e.preventDefault();
        handlePinSubmit(e);
      }
    });
  }
  if (toggleBtn && authInput) {
    toggleBtn.addEventListener("click", () => {
      const showing = authInput.type === "text";
      authInput.type = showing ? "password" : "text";
      toggleBtn.textContent = showing ? "Show" : "Hide";
      toggleBtn.setAttribute("aria-label", showing ? "Show passcode" : "Hide passcode");
    });
  }

  $("#lockBtn").addEventListener("click", () => {
    safeRemove(getSessionStore(), AUTH_SESSION_KEY);
    $("#adminApp").hidden = true;
    $("#authGate").hidden = false;
    if (errEl) errEl.classList.remove("is-visible");
    if (authInput) { authInput.value = ""; authInput.focus(); }
  });
}

function unlockApp() {
  $("#authGate").hidden = true;
  $("#adminApp").hidden = false;
  updateSyncStatusBadge();
  renderAll();
  if (getConfiguredWebhookUrl()) {
    pullRemoteLeads({ silent: true });
  }
}

/* View Switching */
function switchView(view) {
  currentView = view;
  $$(".nav-item").forEach(b => b.classList.toggle("is-active", b.dataset.view === view));
  $$(".view").forEach(v => v.classList.toggle("is-active", v.id === `view-${view}`));
  const titles = {
    overview: ["01 / Executive Command", "Overview &amp; Pipeline"],
    leads: ["02 / Enquiry & Client Tracker", "Leads CRM"],
    schedule: ["03 / Calendar & Priorities", "Time &amp; Schedule"],
    projects: ["04 / Site Execution", "Active Projects"],
    settings: ["05 / Tools & Backup", "Sync &amp; Settings"]
  };
  const [kicker, heading] = titles[view] || titles.overview;
  $("#topbarKicker").textContent = kicker;
  $("#topbarTitle").innerHTML = heading;
  $("#sidebar").classList.remove("is-open");
  renderAll();
}

/* Render Badges & Overview */
function getCombinedDueCounts() {
  const today = todayISO(0);
  const openSlots = state.schedule.filter(s => !s.done);
  const dueOrOverdue = openSlots.filter(s => s.date <= today).length;
  return { openCount: openSlots.length, dueOrOverdue };
}

function renderBadges() {
  $("#navLeadsBadge").textContent = state.leads.filter(l => l.status !== "Won" && l.status !== "Lost").length;
  $("#navScheduleBadge").textContent = getCombinedDueCounts().dueOrOverdue;
  $("#navProjectsBadge").textContent = state.projects.filter(p => p.progress < 100).length;
}

function renderOverview() {
  const totalLeads = state.leads.length;
  const activeLeads = state.leads.filter(l => l.status !== "Lost");
  const pipelineVal = activeLeads.reduce((s, l) => s + (Number(l.estimatedValue) || 0), 0);
  const wonCount = state.leads.filter(l => l.status === "Won").length;
  const convRate = totalLeads ? Math.round((wonCount / totalLeads) * 100) : 0;
  const { dueOrOverdue, openCount } = getCombinedDueCounts();
  const activeProjVal = state.projects.reduce((s, p) => s + (Number(p.budget) || 0), 0);

  $("#kpiGrid").innerHTML = `
    <div class="kpi-card kpi-card--accent">
      <span class="eyebrow-mono">Active Pipeline Value</span>
      <div class="kpi-val">${formatINR(pipelineVal)}</div>
      <div class="kpi-sub">Across <strong>${activeLeads.length}</strong> live briefs</div>
    </div>
    <div class="kpi-card">
      <span class="eyebrow-mono">Total Enquiries</span>
      <div class="kpi-val">${totalLeads}</div>
      <div class="kpi-sub">Conversion rate: <strong>${convRate}%</strong> (${wonCount} won)</div>
    </div>
    <div class="kpi-card">
      <span class="eyebrow-mono">Time &amp; Follow-Ups Due</span>
      <div class="kpi-val">${dueOrOverdue}</div>
      <div class="kpi-sub"><strong>${openCount}</strong> total upcoming slots</div>
    </div>
    <div class="kpi-card">
      <span class="eyebrow-mono">Active Execution Builds</span>
      <div class="kpi-val">${state.projects.length}</div>
      <div class="kpi-sub">Order book: <strong>${formatINR(activeProjVal)}</strong></div>
    </div>
  `;

  // Funnel
  const stages = ["New", "Contacted", "Site Visit", "Quote Sent", "Won"];
  const maxStage = Math.max(1, ...stages.map(st => state.leads.filter(l => l.status === st).length));
  $("#funnelBars").innerHTML = stages.map(st => {
    const count = state.leads.filter(l => l.status === st).length;
    const pct = Math.round((count / maxStage) * 100);
    return `
      <div class="funnel-row">
        <span class="funnel-label">${st}</span>
        <div class="funnel-track"><div class="funnel-fill" style="width:${pct}%"></div></div>
        <span class="funnel-count">${count}</span>
      </div>`;
  }).join("");

  const resCount = state.leads.filter(l => l.world === "Residential").length;
  const comCount = state.leads.filter(l => l.world !== "Residential").length;
  $("#worldSplit").innerHTML = `
    <div class="split-pill"><span class="eyebrow-mono">Residential</span><strong>${resCount} Leads</strong></div>
    <div class="split-pill"><span class="eyebrow-mono">Commercial &amp; Civil</span><strong>${comCount} Leads</strong></div>
  `;

  // Today / Overdue Agenda
  const today = todayISO(0);
  const prioritySlots = state.schedule
    .filter(s => !s.done && s.date <= today)
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

  $("#todayAgendaList").innerHTML = prioritySlots.length ? prioritySlots.slice(0, 5).map(slot => `
    <div class="compact-item">
      <div>
        <strong>${escapeHtml(slot.title)}</strong>
        <small>${slot.date < today ? "OVERDUE" : "TODAY"} &bull; ${escapeHtml(slot.time)} &bull; ${escapeHtml(slot.location || "Studio")}</small>
      </div>
      <button class="btn btn--ghost btn--xs" data-done-slot="${slot.id}" type="button">Done ✓</button>
    </div>
  `).join("") : `<div class="empty-state">All overdue &amp; today slots cleared ✓</div>`;

  $$("[data-done-slot]", $("#todayAgendaList")).forEach(btn => {
    btn.addEventListener("click", () => toggleScheduleDone(btn.dataset.doneSlot));
  });

  // Recent Leads Table
  const recent = state.leads.slice(0, 5);
  $("#recentLeadsTableWrap").innerHTML = recent.length ? `
    <table class="crm-table">
      <thead><tr><th>Client</th><th>Scope</th><th>City</th><th>Stage</th><th>Est. Value</th></tr></thead>
      <tbody>
        ${recent.map(l => `
          <tr data-open-lead="${l.id}">
            <td><span class="cell-title">${escapeHtml(l.name)}</span><span class="cell-sub">${escapeHtml(l.contact)}</span></td>
            <td><span class="cell-title">${escapeHtml(l.subService || l.service)}</span><span class="cell-sub">${escapeHtml(l.world)}</span></td>
            <td>${escapeHtml(l.city)}</td>
            <td><span class="pill ${statusPillClass(l.status)}">${escapeHtml(l.status)}</span></td>
            <td><strong>${formatINR(l.estimatedValue)}</strong></td>
          </tr>`).join("")}
      </tbody>
    </table>` : `<div class="empty-state">No leads recorded yet.</div>`;

  $$("[data-open-lead]", $("#recentLeadsTableWrap")).forEach(tr => {
    tr.addEventListener("click", () => openLeadDrawer(tr.dataset.openLead));
  });
}

/* Render Leads CRM */
function getFilteredLeads() {
  const q = ($("#globalSearch").value || "").trim().toLowerCase();
  const w = $("#filterWorld").value;
  const st = $("#filterStage").value;
  const pr = $("#filterPriority").value;
  return state.leads.filter(l => {
    if (w !== "all" && l.world !== w) return false;
    if (st !== "all" && l.status !== st) return false;
    if (pr !== "all" && l.priority !== pr) return false;
    if (q) {
      const hay = `${l.name} ${l.contact} ${l.email} ${l.city} ${l.service} ${l.subService} ${l.concept} ${l.message}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function buildWaUrl(lead) {
  const digits = String(lead.contact || "").replace(/\D/g, "");
  if (digits.length < 8) return "";
  const waDigits = digits.length === 10 ? `91${digits}` : digits;
  const waMsg = encodeURIComponent(`Hi ${lead.name}, this is ShineX Infra Solutions regarding your enquiry for ${lead.subService || lead.service}. When would be a convenient time for a quick call or site visit?`);
  return `https://wa.me/${waDigits}?text=${waMsg}`;
}

function renderLeads() {
  const leads = getFilteredLeads();
  $("#crmTableView").hidden = crmMode !== "table";
  $("#crmKanbanView").hidden = crmMode !== "kanban";

  const stages = ["New", "Contacted", "Site Visit", "Quote Sent", "Won", "Lost"];

  if (crmMode === "table") {
    $("#leadsTableBody").innerHTML = leads.length ? leads.map(l => {
      const waHref = buildWaUrl(l);
      return `
      <tr data-open-lead="${l.id}">
        <td>
          <span class="cell-title">${escapeHtml(l.name)}</span>
          <span class="cell-sub">${escapeHtml(l.contact)} &bull; ${escapeHtml(l.source || "Direct")}</span>
        </td>
        <td>
          <span class="cell-title">${escapeHtml(l.subService || l.service)}</span>
          <span class="cell-sub">${escapeHtml(l.world)}${l.concept ? ` • ${escapeHtml(l.concept)}` : ""}</span>
        </td>
        <td>${escapeHtml(l.city)}</td>
        <td>
          <select class="inline-stage-select" data-stage-lead="${l.id}" aria-label="Change stage for ${escapeHtml(l.name)}">
            ${stages.map(s => `<option value="${s}" ${l.status === s ? "selected" : ""}>${s}</option>`).join("")}
          </select>
        </td>
        <td><span class="pill ${priorityPillClass(l.priority)}">${escapeHtml(l.priority)}</span></td>
        <td><strong>${formatINR(l.estimatedValue)}</strong></td>
        <td><span class="cell-sub">${formatDateShort(l.followUpAt)}</span></td>
        <td>
          <div class="table-actions">
            ${waHref ? `<a class="btn btn--ghost btn--xs" data-row-action href="${waHref}" target="_blank" rel="noreferrer">WhatsApp</a>` : ""}
            <button class="btn btn--ghost btn--xs" type="button">Edit →</button>
          </div>
        </td>
      </tr>`;
    }).join("") : `<tr><td colspan="8"><div class="empty-state">No leads match current filters.</div></td></tr>`;

    $$("[data-stage-lead]", $("#leadsTableBody")).forEach(sel => {
      sel.addEventListener("click", e => e.stopPropagation());
      sel.addEventListener("change", e => {
        e.stopPropagation();
        const lead = state.leads.find(x => x.id === sel.dataset.stageLead);
        if (lead) {
          lead.status = e.target.value;
          saveState();
          renderBadges();
          showToast(`Stage updated to ${lead.status}`);
        }
      });
    });

    $$("[data-row-action]", $("#leadsTableBody")).forEach(a => {
      a.addEventListener("click", e => e.stopPropagation());
    });

    $$("[data-open-lead]", $("#leadsTableBody")).forEach(tr => {
      tr.addEventListener("click", () => openLeadDrawer(tr.dataset.openLead));
    });
  } else {
    $("#crmKanbanView").innerHTML = stages.map(col => {
      const colLeads = leads.filter(l => l.status === col);
      return `
        <div class="kanban-col">
          <div class="kanban-col-head">
            <strong>${col}</strong>
            <span class="nav-badge">${colLeads.length}</span>
          </div>
          ${colLeads.length ? colLeads.map(l => `
            <article class="kanban-card" data-open-lead="${l.id}">
              <span class="pill ${priorityPillClass(l.priority)}">${escapeHtml(l.priority)}</span>
              <h4>${escapeHtml(l.name)}</h4>
              <p>${escapeHtml(l.subService || l.service)} &bull; ${escapeHtml(l.city)}</p>
              <div class="kanban-card-foot">
                <span>${formatINR(l.estimatedValue)}</span>
                <span>${escapeHtml(l.world === "Residential" ? "RES" : "COM")}</span>
              </div>
            </article>
          `).join("") : `<div class="empty-state">Empty</div>`}
        </div>`;
    }).join("");

    $$("[data-open-lead]", $("#crmKanbanView")).forEach(card => {
      card.addEventListener("click", () => openLeadDrawer(card.dataset.openLead));
    });
  }
}

/* Render Time & Schedule */
function renderSchedule() {
  const today = todayISO(0);
  const q = ($("#globalSearch").value || "").trim().toLowerCase();
  const items = state.schedule.filter(s => {
    if (q && !`${s.title} ${s.location} ${s.kind} ${s.assignee}`.toLowerCase().includes(q)) return false;
    if (scheduleFilter === "active") return !s.done;
    if (scheduleFilter === "overdue") return !s.done && s.date < today;
    if (scheduleFilter === "today") return !s.done && s.date === today;
    if (scheduleFilter === "upcoming") return !s.done && s.date > today;
    if (scheduleFilter === "completed") return s.done;
    return true;
  }).sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

  $("#scheduleList").innerHTML = items.length ? items.map(s => {
    const overdue = !s.done && s.date < today;
    const tag = s.done ? "Completed" : overdue ? "Overdue" : s.date === today ? "Today" : s.date;
    return `
      <div class="sched-row${overdue ? " is-overdue" : ""}${s.done ? " is-done" : ""}">
        <div class="sched-datetime">
          <strong>${escapeHtml(s.time)}</strong>
          <span>${escapeHtml(tag)} (${escapeHtml(s.date)})</span>
        </div>
        <div class="sched-info">
          <span class="pill ${overdue ? "pill--hot" : "pill--quote"}">${escapeHtml(s.kind)}</span>
          <h4>${escapeHtml(s.title)}</h4>
          <p>${escapeHtml(s.location || "No location")} &bull; Assignee: <strong>${escapeHtml(s.assignee)}</strong></p>
        </div>
        <div class="sched-actions">
          <button class="btn btn--ghost btn--xs" data-toggle-slot="${s.id}" type="button">${s.done ? "Reopen" : "Mark Done ✓"}</button>
          ${!s.done ? `<button class="btn btn--ghost btn--xs" data-bump-slot="${s.id}" type="button">+1 Day</button>` : ""}
          <button class="btn btn--danger btn--xs" data-del-slot="${s.id}" type="button" aria-label="Delete schedule slot">Delete</button>
        </div>
      </div>`;
  }).join("") : `<div class="empty-state">No schedule entries in this view.</div>`;

  $$("[data-toggle-slot]").forEach(b => b.addEventListener("click", () => toggleScheduleDone(b.dataset.toggleSlot)));
  $$("[data-bump-slot]").forEach(b => b.addEventListener("click", () => bumpScheduleDay(b.dataset.bumpSlot)));
  $$("[data-del-slot]").forEach(b => b.addEventListener("click", () => deleteScheduleSlot(b.dataset.delSlot)));
}

function toggleScheduleDone(id) {
  const s = state.schedule.find(x => x.id === id);
  if (s) { s.done = !s.done; saveState(); renderAll(); showToast(s.done ? "Time slot marked complete" : "Reopened slot"); }
}

function bumpScheduleDay(id) {
  const s = state.schedule.find(x => x.id === id);
  if (s) {
    const parts = String(s.date || todayISO(0)).split("-").map(Number);
    const d = new Date(parts[0], (parts[1] || 1) - 1, parts[2] || 1);
    d.setDate(d.getDate() + 1);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    s.date = `${y}-${m}-${day}`;
    saveState();
    renderAll();
    showToast(`Rescheduled to ${s.date}`);
  }
}

function deleteScheduleSlot(id) {
  const slot = state.schedule.find(x => x.id === id);
  if (!slot || !window.confirm(`Delete "${slot.title}" from schedule?`)) return;
  state.schedule = state.schedule.filter(x => x.id !== id);
  saveState();
  renderAll();
  showToast("Schedule slot removed");
}

/* Render Active Projects */
function renderProjects() {
  const q = ($("#globalSearch").value || "").trim().toLowerCase();
  const projects = state.projects.filter(p => !q || `${p.title} ${p.clientName} ${p.location} ${p.phase}`.toLowerCase().includes(q));
  const todayParts = todayISO(0).split("-").map(Number);
  const today = new Date(todayParts[0], todayParts[1] - 1, todayParts[2]);

  $("#projectsGrid").innerHTML = projects.length ? projects.map(p => {
    const tp = String(p.targetDate || todayISO(30)).split("-").map(Number);
    const target = new Date(tp[0], (tp[1] || 1) - 1, tp[2] || 1);
    const diffDays = Math.ceil((target - today) / 86400000);
    const badge = p.progress >= 100
      ? `<span class="pill pill--won">Completed</span>`
      : diffDays < 0
      ? `<span class="pill pill--lost">${Math.abs(diffDays)}d Overdue</span>`
      : `<span class="pill pill--quote">${diffDays}d Left</span>`;

    return `
      <article class="project-card">
        <div class="project-head">
          <div>
            <span class="eyebrow-mono">${escapeHtml(p.world)} &bull; ${escapeHtml(p.location || "Navi Mumbai")}</span>
            <h4>${escapeHtml(p.title)}</h4>
          </div>
          ${badge}
        </div>
        <div class="project-meta">
          <div><small>Client</small><strong>${escapeHtml(p.clientName)}</strong></div>
          <div><small>Contract Budget</small><strong>${formatINR(p.budget)}</strong></div>
          <div><small>Start Date</small><strong>${escapeHtml(p.startDate)}</strong></div>
          <div><small>Target Handover</small><strong>${escapeHtml(p.targetDate)}</strong></div>
        </div>
        <div class="progress-wrap">
          <label><span>Execution Progress</span><span data-prog-label="${p.id}">${p.progress}%</span></label>
          <input type="range" min="0" max="100" step="5" value="${p.progress}" data-proj-prog="${p.id}" />
        </div>
        <div class="project-controls">
          <select data-proj-phase="${p.id}" aria-label="Project phase">
            ${["01 Discovery & Survey", "02 Design & Scope", "03 Execution & MEP", "04 Handover & Aftercare"].map(ph => `<option value="${ph}" ${p.phase === ph ? "selected" : ""}>${ph}</option>`).join("")}
          </select>
          <button class="btn btn--danger btn--xs" data-del-proj="${p.id}" type="button">Delete</button>
        </div>
      </article>`;
  }).join("") : `<div class="empty-state">No active execution projects match.</div>`;

  $$("[data-proj-prog]").forEach(r => {
    r.addEventListener("input", e => {
      const p = state.projects.find(x => x.id === r.dataset.projProg);
      if (p) {
        p.progress = Number(e.target.value);
        const lbl = $(`[data-prog-label="${p.id}"]`);
        if (lbl) lbl.textContent = `${p.progress}%`;
      }
    });
    r.addEventListener("change", () => {
      saveState();
      renderAll();
      showToast("Progress updated");
    });
  });
  $$("[data-proj-phase]").forEach(sel => sel.addEventListener("change", e => {
    const p = state.projects.find(x => x.id === sel.dataset.projPhase);
    if (p) { p.phase = e.target.value; saveState(); renderAll(); showToast("Project phase updated"); }
  }));
  $$("[data-del-proj]").forEach(btn => btn.addEventListener("click", () => {
    const proj = state.projects.find(x => x.id === btn.dataset.delProj);
    if (!proj || !window.confirm(`Delete project "${proj.title}"?`)) return;
    state.projects = state.projects.filter(x => x.id !== btn.dataset.delProj);
    saveState();
    renderAll();
    showToast("Project deleted");
  }));
}

/* Lead Inspector Slide-Over Drawer */
function openLeadDrawer(id) {
  const l = state.leads.find(x => x.id === id);
  if (!l) return;
  activeLeadId = id;

  $("#drawerLeadId").textContent = `${l.id} • ${formatDateShort(l.createdAt)}`;
  $("#drawerLeadName").textContent = l.name;

  const waHref = buildWaUrl(l);
  const waBtn = $("#drawerWaBtn");
  if (waHref) {
    waBtn.href = waHref;
    waBtn.removeAttribute("aria-disabled");
  } else {
    waBtn.removeAttribute("href");
    waBtn.setAttribute("aria-disabled", "true");
  }

  const callBtn = $("#drawerCallBtn");
  if (l.contact) {
    callBtn.href = `tel:${l.contact}`;
    callBtn.removeAttribute("aria-disabled");
  } else {
    callBtn.removeAttribute("href");
    callBtn.setAttribute("aria-disabled", "true");
  }

  const mailBtn = $("#drawerMailBtn");
  if (l.email) {
    mailBtn.href = `mailto:${l.email}`;
    mailBtn.removeAttribute("aria-disabled");
  } else {
    mailBtn.removeAttribute("href");
    mailBtn.setAttribute("aria-disabled", "true");
  }

  $("#drawerScopeBox").innerHTML = `
    <strong>${escapeHtml(l.world)}</strong> &rarr; ${escapeHtml(l.service)}
    ${l.subService ? `<br /><span>Sub-Service: <b>${escapeHtml(l.subService)}</b></span>` : ""}
    ${l.concept ? `<br /><span>Concept Chosen: <b>${escapeHtml(l.concept)}</b></span>` : ""}
    <br /><span>Phone: <b>${escapeHtml(l.contact || "N/A")}</b> &bull; Email: <b>${escapeHtml(l.email || "N/A")}</b></span>
  `;

  $("#drawerStatus").value = l.status || "New";
  $("#drawerPriority").value = l.priority || "Warm";
  $("#drawerValue").value = l.estimatedValue || "";
  $("#drawerAssignee").value = l.assignedTo || "Salim Ahmed";
  $("#drawerFollowUp").value = l.followUpAt || "";
  $("#drawerCity").value = l.city || "";
  $("#drawerMessage").value = l.message || "";

  renderDrawerNotes(l);
  $("#drawerBackdrop").hidden = false;
  $("#leadDrawer").classList.add("is-open");
  $("#leadDrawer").setAttribute("aria-hidden", "false");
}

function renderDrawerNotes(l) {
  const list = Array.isArray(l.notes) ? l.notes : [];
  $("#drawerNotesList").innerHTML = list.length ? list.map(n => `
    <li><time>${formatDateShort(n.at)}</time>${escapeHtml(n.text)}</li>
  `).join("") : `<li style="color:var(--muted)">No internal notes yet.</li>`;
}

function closeLeadDrawer() {
  activeLeadId = null;
  $("#drawerBackdrop").hidden = true;
  $("#leadDrawer").classList.remove("is-open");
  $("#leadDrawer").setAttribute("aria-hidden", "true");
}

function syncFollowUpToSchedule(lead) {
  if (!lead.followUpAt || !lead.followUpAt.includes("T")) return;
  const [date, time] = lead.followUpAt.split("T");
  const existing = state.schedule.find(s => s.leadId === lead.id && !s.done);
  const title = `Follow-Up — ${lead.name} (${lead.subService || lead.service})`;
  if (existing) {
    existing.date = date;
    existing.time = time.slice(0, 5);
    existing.location = lead.city;
    existing.assignee = lead.assignedTo;
  } else {
    state.schedule.unshift({
      id: `SC-${Date.now().toString(36).toUpperCase()}`,
      title,
      kind: lead.status === "Site Visit" ? "Site Measurement" : "Follow-Up Call",
      date,
      time: time.slice(0, 5),
      leadId: lead.id,
      location: lead.city || "Navi Mumbai",
      assignee: lead.assignedTo || "Salim Ahmed",
      done: false
    });
  }
}

/* Modals & Dynamic Catalog Selects */
function populateServiceDropdowns() {
  const world = $("#newLeadWorld").value;
  const mainServices = Object.keys(CATALOG[world] || {});
  $("#newLeadService").innerHTML = mainServices.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join("");
  populateSubDropdown();
}

function populateSubDropdown() {
  const world = $("#newLeadWorld").value;
  const main = $("#newLeadService").value;
  const subs = (CATALOG[world] && CATALOG[world][main]) || [];
  $("#newLeadSubService").innerHTML = subs.map(sub => `<option value="${escapeHtml(sub)}">${escapeHtml(sub)}</option>`).join("");
}

function openModal(id) {
  if (id === "leadModal") populateServiceDropdowns();
  if (id === "scheduleModal") {
    $("#schedDateInput").value = todayISO(0);
    $("#schedLeadSelect").innerHTML = `<option value="">— Standalone Task —</option>` + state.leads.map(l => `<option value="${l.id}">${escapeHtml(l.name)} (${escapeHtml(l.subService || l.service)})</option>`).join("");
  }
  if (id === "projectModal") {
    $("#projStartInput").value = todayISO(0);
    $("#projTargetInput").value = todayISO(45);
  }
  $(`#${id}`).hidden = false;
}

function closeModal(id) {
  const el = $(`#${id}`);
  if (el) el.hidden = true;
}

function closeAllOverlays() {
  closeLeadDrawer();
  ["leadModal", "scheduleModal", "projectModal"].forEach(closeModal);
}

/* Exports & Sync */
function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function csvSafeCell(v) {
  let s = String(v ?? "");
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return `"${s.replace(/"/g, '""')}"`;
}

function toCsv(rows) {
  return "\uFEFF" + rows.map(r => r.map(csvSafeCell).join(",")).join("\n");
}

function renderAll() {
  renderBadges();
  if (currentView === "overview") renderOverview();
  if (currentView === "leads") renderLeads();
  if (currentView === "schedule") renderSchedule();
  if (currentView === "projects") renderProjects();
}

function updateClock() {
  $("#liveClock").textContent = new Date().toLocaleString("en-IN", { weekday: "short", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
}

function bootAdmin() {
  initAuth();
  updateClock();
  updateSyncStatusBadge();
  setInterval(updateClock, 30000);

  // Sync URL load
  const initialWebhook = getConfiguredWebhookUrl();
  if (initialWebhook && $("#webhookUrlInput")) $("#webhookUrlInput").value = initialWebhook;

  // Sidebar & Jump Nav
  $$(".nav-item").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.view)));
  $$("[data-jump]").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.jump)));
  $("#menuToggle").addEventListener("click", () => $("#sidebar").classList.add("is-open"));
  $("#sidebarClose").addEventListener("click", () => $("#sidebar").classList.remove("is-open"));

  // Search & CRM Filters
  $("#globalSearch").addEventListener("input", renderAll);
  $("#filterWorld").addEventListener("change", renderLeads);
  $("#filterStage").addEventListener("change", renderLeads);
  $("#filterPriority").addEventListener("change", renderLeads);
  $$("[data-crm-mode]").forEach(btn => btn.addEventListener("click", () => {
    crmMode = btn.dataset.crmMode;
    $$("[data-crm-mode]").forEach(b => b.classList.toggle("is-active", b === btn));
    renderLeads();
  }));

  // Schedule Filters
  $$("[data-sched-filter]").forEach(btn => btn.addEventListener("click", () => {
    scheduleFilter = btn.dataset.schedFilter;
    $$("[data-sched-filter]").forEach(b => b.classList.toggle("is-active", b === btn));
    renderSchedule();
  }));

  // Drawer Controls & Escape / Backdrop Closing
  $("#drawerBackdrop").addEventListener("click", closeLeadDrawer);
  $("#drawerClose").addEventListener("click", closeLeadDrawer);
  $$(".modal-backdrop").forEach(bd => {
    bd.addEventListener("click", e => { if (e.target === bd) bd.hidden = true; });
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeAllOverlays();
  });

  $("#drawerEditForm").addEventListener("submit", e => {
    e.preventDefault();
    const l = state.leads.find(x => x.id === activeLeadId);
    if (!l) return;
    l.status = $("#drawerStatus").value;
    l.priority = $("#drawerPriority").value;
    l.estimatedValue = Number($("#drawerValue").value) || 0;
    l.assignedTo = $("#drawerAssignee").value.trim() || "Salim Ahmed";
    l.followUpAt = $("#drawerFollowUp").value;
    l.city = $("#drawerCity").value.trim();
    l.message = $("#drawerMessage").value.trim();
    syncFollowUpToSchedule(l);
    saveState();
    renderAll();
    showToast("Lead updated");
  });

  $("#noteForm").addEventListener("submit", e => {
    e.preventDefault();
    const l = state.leads.find(x => x.id === activeLeadId);
    const txt = $("#noteInput").value.trim();
    if (!l || !txt) return;
    if (!Array.isArray(l.notes)) l.notes = [];
    l.notes.unshift({ at: new Date().toISOString(), text: txt });
    saveState();
    renderDrawerNotes(l);
    $("#noteInput").value = "";
    showToast("Note added");
  });

  $("#promoteProjectBtn").addEventListener("click", () => {
    const l = state.leads.find(x => x.id === activeLeadId);
    if (!l) return;
    l.status = "Won";
    state.projects.unshift({
      id: `PR-${Date.now().toString(36).toUpperCase()}`,
      title: `${(l.city || "Navi Mumbai").split(",")[0]} — ${l.subService || l.service}`,
      clientName: l.name,
      world: l.world,
      location: l.city || "Navi Mumbai",
      budget: Number(l.estimatedValue) || 500000,
      startDate: todayISO(0),
      targetDate: todayISO(45),
      phase: "01 Discovery & Survey",
      progress: 10
    });
    saveState();
    closeLeadDrawer();
    switchView("projects");
    showToast("Lead converted to Active Project");
  });

  $("#deleteLeadBtn").addEventListener("click", () => {
    if (!activeLeadId) return;
    const l = state.leads.find(x => x.id === activeLeadId);
    if (!window.confirm(`Delete lead "${l ? l.name : activeLeadId}" permanently?`)) return;
    state.leads = state.leads.filter(x => x.id !== activeLeadId);
    state.schedule.forEach(s => { if (s.leadId === activeLeadId) s.leadId = ""; });
    saveState();
    closeLeadDrawer();
    renderAll();
    showToast("Lead deleted");
  });

  // Modals
  $("#openNewLeadBtn").addEventListener("click", () => openModal("leadModal"));
  $("#crmAddLeadBtn").addEventListener("click", () => openModal("leadModal"));
  $("#openNewScheduleBtn").addEventListener("click", () => openModal("scheduleModal"));
  $("#schedAddBtn").addEventListener("click", () => openModal("scheduleModal"));
  $("#addProjectBtn").addEventListener("click", () => openModal("projectModal"));

  $$("[data-close]").forEach(b => b.addEventListener("click", () => closeModal(b.dataset.close)));
  $("#newLeadWorld").addEventListener("change", populateServiceDropdowns);
  $("#newLeadService").addEventListener("change", populateSubDropdown);

  $("#newLeadForm").addEventListener("submit", e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const lead = {
      id: `LD-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      name: String(fd.get("name") || "").trim(),
      contact: String(fd.get("contact") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      city: String(fd.get("city") || "").trim(),
      world: String(fd.get("world") || "Residential"),
      service: String(fd.get("service") || ""),
      subService: String(fd.get("subService") || ""),
      concept: "",
      status: "New",
      priority: String(fd.get("priority") || "Warm"),
      estimatedValue: Number(fd.get("estimatedValue")) || 0,
      followUpAt: String(fd.get("followUpAt") || ""),
      assignedTo: "Salim Ahmed",
      source: "Manual Entry",
      message: String(fd.get("message") || "").trim(),
      notes: []
    };
    state.leads.unshift(lead);
    syncFollowUpToSchedule(lead);
    saveState();
    e.target.reset();
    closeModal("leadModal");
    renderAll();
    showToast("New lead added");
  });

  $("#newScheduleForm").addEventListener("submit", e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.schedule.unshift({
      id: `SC-${Date.now().toString(36).toUpperCase()}`,
      title: String(fd.get("title") || "").trim(),
      kind: String(fd.get("kind") || "Site Measurement"),
      date: String(fd.get("date") || todayISO(0)),
      time: String(fd.get("time") || "11:00"),
      leadId: String(fd.get("leadId") || ""),
      location: String(fd.get("location") || "").trim(),
      assignee: String(fd.get("assignee") || "Salim Ahmed").trim(),
      done: false
    });
    saveState();
    e.target.reset();
    closeModal("scheduleModal");
    renderAll();
    showToast("Time slot scheduled");
  });

  $("#newProjectForm").addEventListener("submit", e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.projects.unshift({
      id: `PR-${Date.now().toString(36).toUpperCase()}`,
      title: String(fd.get("title") || "").trim(),
      clientName: String(fd.get("clientName") || "").trim(),
      world: String(fd.get("world") || "Residential"),
      location: String(fd.get("location") || "").trim(),
      budget: Number(fd.get("budget")) || 0,
      startDate: String(fd.get("startDate") || todayISO(0)),
      targetDate: String(fd.get("targetDate") || todayISO(30)),
      phase: String(fd.get("phase") || "01 Discovery & Survey"),
      progress: Number(fd.get("progress")) || 10
    });
    saveState();
    e.target.reset();
    closeModal("projectModal");
    renderAll();
    showToast("Project launched");
  });

  // Settings: Export / Import / PIN / Sync
  $("#exportLeadsCsvBtn").addEventListener("click", () => {
    const header = ["ID", "Created", "Name", "Phone", "Email", "City", "World", "Service", "SubService", "Concept", "Stage", "Priority", "Budget(INR)", "FollowUp", "Message"];
    const rows = state.leads.map(l => [l.id, l.createdAt, l.name, l.contact, l.email, l.city, l.world, l.service, l.subService, l.concept, l.status, l.priority, l.estimatedValue, l.followUpAt, l.message]);
    downloadFile(`shinex-leads-${todayISO()}.csv`, toCsv([header, ...rows]), "text/csv;charset=utf-8");
    showToast("Exported Leads CSV");
  });

  $("#exportScheduleCsvBtn").addEventListener("click", () => {
    const header = ["ID", "Date", "Time", "Type", "Title", "Location", "Assignee", "Completed"];
    const rows = state.schedule.map(s => [s.id, s.date, s.time, s.kind, s.title, s.location, s.assignee, s.done ? "Yes" : "No"]);
    downloadFile(`shinex-schedule-${todayISO()}.csv`, toCsv([header, ...rows]), "text/csv;charset=utf-8");
    showToast("Exported Schedule CSV");
  });

  $("#exportJsonBtn").addEventListener("click", () => {
    downloadFile(`shinex-studio-backup-${todayISO()}.json`, JSON.stringify(state, null, 2), "application/json");
    showToast("Full JSON backup downloaded");
  });

  $("#importJsonInput").addEventListener("change", async e => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (parsed && Array.isArray(parsed.leads)) {
        saveState(normalizeState(parsed));
        renderAll();
        showToast("Backup restored cleanly");
      } else showToast("Invalid JSON structure");
    } catch (err) {
      showToast("Failed to parse JSON file");
    }
    e.target.value = "";
  });

  $("#resetSeedBtn").addEventListener("click", () => {
    if (!window.confirm("Replace all current leads, schedules, and projects with sample demo data? This cannot be undone.")) return;
    saveState(getSeedData());
    renderAll();
    showToast("Demo seed data restored");
  });

  $("#pinForm").addEventListener("submit", e => {
    e.preventDefault();
    const val = $("#newPinInput").value.trim();
    if (val.length >= 4) {
      safeSet(getLocalStore(), PIN_KEY, val);
      $("#newPinInput").value = "";
      $("#pinFeedback").textContent = "Passcode updated cleanly.";
      showToast("PIN updated");
    } else {
      $("#pinFeedback").textContent = "Passcode must be at least 4 characters.";
    }
  });

  $("#syncForm").addEventListener("submit", e => {
    e.preventDefault();
    const url = $("#webhookUrlInput").value.trim();
    safeSet(getLocalStore(), SYNC_KEY, JSON.stringify({ webhookUrl: url }));
    updateSyncStatusBadge();
    $("#syncFeedback").textContent = url ? "Sync webhook URL saved. Also paste into crm-config.js before domain deploy." : "Webhook URL cleared.";
    showToast("Sync settings saved");
  });

  $("#pullSyncBtn").addEventListener("click", () => pullRemoteLeads({ silent: false }));

  $("#copyScriptBtn").addEventListener("click", () => {
    navigator.clipboard.writeText($("#appsScriptCode").textContent).then(() => showToast("Apps Script copied"));
  });

  // Live sync across tabs when quote submitted on index.html
  window.addEventListener("storage", e => {
    if (e.key === CRM_KEY) {
      state = loadState();
      renderAll();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootAdmin);
} else {
  bootAdmin();
}

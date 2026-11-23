import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  Truck, 
  Layers, 
  Activity, 
  Shield, 
  ShieldCheck, 
  CreditCard, 
  TrendingUp, 
  Clock, 
  MapPin, 
  FileText,
  Users,
  Compass,
  Zap,
  ChevronRight,
  Cpu,
  Database,
  Network,
  Radio,
  Building2,
  Lock,
  Route,
  Receipt
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Home() {
  const { navigateTo, openDemoModal } = useNavigation();
  const [activeVertical, setActiveVertical] = useState('shippers');
  const [activePillar, setActivePillar] = useState('tms');

  // Architectural platform guarantees replacing unverified placeholder statistics
  const platformGuarantees = [
    {
      id: 'vahan',
      icon: <ShieldCheck size={20} />,
      tag: 'GOVERNMENT GATEWAY',
      title: 'Instant VAHAN Verification',
      desc: 'Automated validation of vehicle fitness, permit status, and driver credentials via National VAHAN API before in-gate entry.'
    },
    {
      id: 'telemetry',
      icon: <Radio size={20} />,
      tag: 'UNIFIED TELEMETRY',
      title: 'Sub-Second Highway Tracking',
      desc: 'Seamless fusion of hardware GPS, SIM cellular tracking, and FASTag toll checkpoint telemetry into one synchronized feed.'
    },
    {
      id: 'ocr',
      icon: <FileText size={20} />,
      tag: 'MOBILE OCR GATE PASS',
      title: 'Tamper-Proof Digital POD',
      desc: 'Mobile gate-entry OCR scanning consignee stamps and signatures with cryptographic timestamping and geotagging.'
    },
    {
      id: 'audit',
      icon: <Receipt size={20} />,
      tag: 'FINANCIAL SETTLEMENT',
      title: 'Automated 3-Way Reconciliation',
      desc: 'Autonomous cross-checking between original Purchase Orders, weighbridge slips, and GST e-invoices for audit certainty.'
    }
  ];

  // Rich interactive platform pillars for Raft-style product storytelling
  const platformPillarsData = {
    tms: {
      id: 'tms',
      badge: 'CORE OPERATIONAL ENGINE',
      title: 'Autonomous TMS & Algorithmic Dispatch',
      desc: 'Unify freight procurement, contract rates, and fleet allocation into one automated control workflow. Replace chaotic phone-based negotiations with dynamic market benchmarking and verified carrier dispatch.',
      highlights: [
        'Algorithmic spot and contract rate discovery with historical lane indices',
        'Dynamic return-load backhaul pairing to eliminate empty running',
        'Instant national VAHAN and SARATHI credential verification at indent placement',
        'Multi-plant load consolidation and trailer cubic capacity optimization'
      ],
      actionText: 'Explore TMS Capabilities',
      mockTitle: 'Intelligent Dispatch & Telematics Hub',
      mockStatus: 'ACTIVE ROUTE • VERIFIED CARRIER IN TRANSIT',
      mockRoute: 'Pune Auto Cluster → Sanand Assembly Plant',
      mockEta: 'On Schedule • FASTag Milestone Confirmed',
      stats: [
        { label: 'Carrier Verification', value: 'Direct VAHAN API' },
        { label: 'Backhaul Allocation', value: 'Pre-Offload Match' },
        { label: 'Indent Latency', value: 'Instant Digital' }
      ]
    },
    controlTower: {
      id: 'controlTower',
      badge: '24/7 COMMAND CENTER',
      title: 'Live Highway Control Tower & Predictive Tracking',
      desc: 'Sub-second exception surveillance unifying GPS hardware, SIM cellular pings, and FASTag toll checkpoints. Predict bottlenecks and monitor detention before delays impact manufacturing assembly lines.',
      highlights: [
        'Multi-source telemetry fusion combining GPS, SIM, and FASTag timestamps',
        'Predictive highway bottleneck and border congestion alerting',
        'Automated geofenced plant in-gate and out-gate detention logging',
        'Multilingual Driver Companion app with turn-by-turn routing and emergency SOS'
      ],
      actionText: 'Explore Control Tower',
      mockTitle: 'Live Control Tower Exception Stream',
      mockStatus: 'TELEMETRY LIVE • ZERO DISPUTES',
      mockRoute: 'Delhi-NCR Industrial Belt → Mumbai JNPT',
      mockEta: 'ETA: 14:20 IST • Toll Gate Verified',
      stats: [
        { label: 'GPS Refresh Rate', value: 'Every 15 Seconds' },
        { label: 'Detention Tracking', value: 'Geofenced Log' },
        { label: 'Exception Engine', value: 'Proactive Alerting' }
      ]
    },
    finance: {
      id: 'finance',
      badge: 'WORKING CAPITAL ACCELERATOR',
      title: 'Cryptographic Digital POD & Freight Finance',
      desc: 'End the 60-90 day payment cycles that strain Indian fleet owners. Mobile OCR digitizes physical consignee stamps at the delivery gate, unlocking same-day freight bill discounting via M1xchange.',
      highlights: [
        'Sub-minute mobile OCR document scanning with tamper-proof geotags',
        'Pre-integrated bill discounting syndication with M1xchange and institutional NBFCs',
        'Autonomous 3-way match: Purchase Order, weighbridge slip, and final e-invoice',
        'Direct-to-card fuel disbursements and FASTag automated wallet replenishment'
      ],
      actionText: 'Explore Freight Finance',
      mockTitle: 'Freight Finance & Capital Ledger',
      mockStatus: 'POD VERIFIED • SANCTIONED FOR PAYOUT',
      mockRoute: 'Bengaluru Logistics Park → Chennai Port Hub',
      mockEta: 'Same-Day Settlement • Escrow Disbursed',
      stats: [
        { label: 'POD Verification', value: 'Sub-60s Mobile OCR' },
        { label: 'Disbursement Cycle', value: 'Same-Day Advance' },
        { label: 'Audit Compliance', value: '100% Paperless' }
      ]
    }
  };

  const activePillarData = platformPillarsData[activePillar];

  const verticalsData = {
    shippers: {
      tag: 'ENTERPRISE SHIPPERS & MANUFACTURERS',
      title: 'Predictable Capacity. Total Transit Transparency.',
      desc: 'Eliminate freight spot-market volatility with automated rate discovery, assured truck placement, and millisecond exception detection across all cross-state trade corridors.',
      guarantees: [
        { label: 'Carrier Verification', value: 'National VAHAN Certified' },
        { label: 'Detention Disputes', value: 'Automated Geofence Logs' }
      ],
      points: [
        'Automated spot and contract rate procurement with dynamic benchmarking',
        'Consolidated multi-plant visibility across all contract transporters',
        'Gate-in to gate-out turnaround optimization and detention tracking',
        'Automated 3-way freight invoice reconciliation against weighbridge data'
      ],
      mockTitle: 'Enterprise TMS Dispatch Center',
      mockStatus: 'ACTIVE ROUTE • VERIFIED IN TRANSIT',
      mockRoute: 'Pune Auto Cluster → Sanand Assembly Plant',
      mockEta: 'On Schedule • FASTag Milestone Confirmed'
    },
    transporters: {
      tag: 'FLEET OWNERS & TRANSPORTERS',
      title: 'Higher Asset Utilization. Zero Empty Return Runs.',
      desc: 'Connect directly to verified industrial enterprise loads, receive algorithmic return-trip bookings before offloading, and access transparent trip advances without exploitative middleman cuts.',
      guarantees: [
        { label: 'Return Trip Pairing', value: 'Pre-Offload Matching' },
        { label: 'Freight Advances', value: 'Same-Day Digital Payouts' }
      ],
      points: [
        'Guaranteed return-load matching across major manufacturing corridors',
        'Direct driver trip companion app with digital e-way bills and toll assist',
        'Instant digital proof-of-delivery (POD) scanning at consignee gates',
        'Direct trip financing and bill discounting to manage working capital'
      ],
      mockTitle: 'Transporter Load Optimization Hub',
      mockStatus: 'RETURN LOAD ASSIGNED • ZERO DEADHEAD',
      mockRoute: 'Bengaluru Logistics Park → Chennai Port Hub',
      mockEta: 'Verified Booking Confirmed • Advance Disbursed'
    },
    partners: {
      tag: 'FINANCIAL PARTNERS & NBFCS',
      title: 'Real-Time Collateral Verification. Risk-Mitigated Financing.',
      desc: 'Underwrite logistics working capital with complete transaction certainty. Every financed invoice is backed by verifiable GPS telematics, gate-entry stamps, and authentic GST e-way records.',
      guarantees: [
        { label: 'Collateral Integrity', value: '3-Point Match Verified' },
        { label: 'Telemetry Audit', value: 'Immutable Transit Trail' }
      ],
      points: [
        'Automated 3-point reconciliation (Order + Weighbridge + Sign-off)',
        'Direct integration with GSTN, VAHAN, and FASTag toll checkpoints',
        'Institutional grade fraud prevention through real-time transit telemetry',
        'Automated escrow settlement and scheduled repayment collections'
      ],
      mockTitle: 'Working Capital Underwriting Ledger',
      mockStatus: 'INVOICE VERIFIED • AUDIT READY',
      mockRoute: 'M1xchange & Partner Bank Syndication',
      mockEta: 'Sanctioned • Working Capital Disbursed'
    }
  };

  const activeData = verticalsData[activeVertical];

  const heroStates = [
    {
      id: 'tms',
      eyebrow: 'AI-ENABLED TRANSPORTATION MANAGEMENT SYSTEM',
      headlineLine1: 'The Intelligent Platform',
      headlineLine2: 'for Road Logistics.',
      supporting: 'One connected TMS bringing transportation, visibility, finance, and AI-assisted operations together.',
      bg: '/easylane-hero-light.jpg',
      alt: 'Luminous daytime logistics infrastructure corridor with modern control terminal and aerodynamic freight truck',
      objectPosition: '86% 35%'
    },
    {
      id: 'visibility',
      eyebrow: 'REAL-TIME OPERATIONS CONTROL',
      headlineLine1: 'Move Freight',
      headlineLine2: 'with Full Visibility.',
      supporting: 'Track movement, coordinate transporters, and manage exceptions from a single connected control layer.',
      bg: '/easylane-hero-visibility.jpg',
      alt: 'Modern high-tech logistics operations center overlooking sunlit freight highway corridor with live telemetry',
      objectPosition: '82% 40%'
    },
    {
      id: 'finance',
      eyebrow: 'CONNECTED FINANCE & EXECUTION',
      headlineLine1: 'Execute Faster.',
      headlineLine2: 'Finance Smarter.',
      supporting: 'Unify freight execution, POD workflows, and working-capital acceleration in one operational ecosystem.',
      bg: '/easylane-hero-finance.jpg',
      alt: 'Pristine modern freight finance and trade exchange campus under bright morning daylight',
      objectPosition: '80% 45%'
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isTextFading, setIsTextFading] = useState(false);
  const heroTrackRef = useRef(null);
  const heroCardRef = useRef(null);
  const heroBackdropRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      if (!heroTrackRef.current || !heroCardRef.current) {
        ticking = false;
        return;
      }
      const rect = heroTrackRef.current.getBoundingClientRect();
      const trackHeight = heroTrackRef.current.offsetHeight - window.innerHeight;
      if (trackHeight <= 0) {
        ticking = false;
        return;
      }

      // Smooth progress calculation from the very first scroll pixel
      const progress = Math.min(1, Math.max(0, -rect.top / trackHeight));

      // Direct GPU/DOM property updates — zero React re-renders!
      const marginH = (1 - progress) * 16;
      const marginV = (1 - progress) * 14;
      const radius = (1 - progress) * 28;
      const borderAlpha = (1 - progress) * 0.08;

      heroCardRef.current.style.width = `calc(100% - ${marginH * 2}px)`;
      heroCardRef.current.style.height = `calc(100vh - ${marginV * 2}px)`;
      heroCardRef.current.style.borderRadius = `${radius}px`;
      heroCardRef.current.style.borderColor = `rgba(15, 23, 42, ${borderAlpha})`;
      heroCardRef.current.style.boxShadow = progress >= 0.96 ? 'none' : `0 10px 40px -10px rgba(15, 23, 42, ${borderAlpha})`;

      if (heroBackdropRef.current) {
        heroBackdropRef.current.style.transform = `scale(${(1 + progress * 0.035).toFixed(4)})`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTextFading(true);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % heroStates.length);
        setIsTextFading(false);
      }, 380);
    }, 5200);

    return () => clearInterval(timer);
  }, [heroStates.length]);

  const clientLogos = [
    { name: 'UltraTech Cement', src: '/asset/i1.webp' },
    { name: 'Rajratan Outperform', src: '/asset/i2.webp' },
    { name: 'Aditya Birla Group', src: '/asset/i3.webp' },
    { name: 'Kanodia Group', src: '/asset/i4.webp' },
    { name: 'ACC Cement', src: '/asset/i6.webp' },
    { name: 'Easy Build', src: '/asset/i7.webp' },
    { name: 'Ambuja Cement', src: '/asset/i8.webp' }
  ];

  return (
    <div className="home-page">
      {/* ===================================================================
          STAGE 2, 3, 4 & 5 — RAFT-STYLE FULLSCREEN SCROLL-EXPANDING HERO
          Pinned scroll transformation: rounded card expands to true fullscreen
          =================================================================== */}
      <div className="hero-scroll-track" ref={heroTrackRef}>
        <div className="hero-sticky-viewport">
          <section
            ref={heroCardRef}
            className="hero-outer-frame hero-outer-frame-light"
            id="top"
          >
            {/* Media Background Layer — Crossfading Scene Stack with Scale Expansion */}
            <div
              ref={heroBackdropRef}
              className="hero-media-backdrop"
            >
              {heroStates.map((state, idx) => (
                <img
                  key={state.id}
                  src={state.bg}
                  alt={state.alt}
                  style={{ objectPosition: state.objectPosition }}
                  className={`hero-backdrop-img ${idx === activeSlide ? 'hero-backdrop-active' : 'hero-backdrop-inactive'}`}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              ))}
              <div className="hero-atmosphere-layer" />
              <div className="hero-media-overlay hero-media-overlay-light" />
            </div>

            {/* Central Content Composition — Hero Content Permanently Visible */}
            <div className="hero-content-body hero-content-body-light">
              <div className="hero-editorial-group">
                {/* Dynamic narrative text block that crossfades together */}
                <div className={`hero-narrative-text-block ${isTextFading ? 'text-transition-exit' : 'text-transition-enter'}`}>
                  {/* Micro Monospace Pill Badge */}
                  <div className="badge-mono badge-mono-blue" style={{ marginBottom: '20px' }}>
                    <span className="badge-dot" />
                    <span>{heroStates[activeSlide].eyebrow}</span>
                  </div>

                  {/* Deliberate Two-Line Desktop Editorial Headline */}
                  <h1 className="hero-headline hero-headline-light">
                    {heroStates[activeSlide].headlineLine1}<br />
                    <span className="text-highlight-blue">{heroStates[activeSlide].headlineLine2}</span>
                  </h1>

                  {/* Supporting Copy */}
                  <p className="hero-supporting-copy hero-supporting-copy-light">
                    {heroStates[activeSlide].supporting}
                  </p>
                </div>

                {/* Dual CTA Actions with Separate Arrow Control */}
                <div className="hero-actions-row">
                  <div className="hero-cta-cluster">
                    <button
                      onClick={openDemoModal}
                      className="hero-cta-main-btn"
                      aria-label="Book a Demo"
                    >
                      <span>Book a Demo</span>
                    </button>
                    <button
                      onClick={openDemoModal}
                      className="hero-cta-arrow-btn"
                      aria-label="Book a Demo Action"
                    >
                      <ArrowUpRight size={15} />
                    </button>
                  </div>

                  <button
                    onClick={() => navigateTo('platform')}
                    className="btn-pill btn-pill-outline-dark"
                    aria-label="Explore the Platform"
                  >
                    <span>Explore the Platform</span>
                    <div className="btn-arrow-circle">
                      <ArrowRight size={14} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ===================================================================
          STAGE 6 & 8 — VIBRANT ENTERPRISE TRUSTED LOGOS SECTION
          Direct logos on section background (no cards/capsules), authentic brand colors, seamless marquee
          =================================================================== */}
      <section className="trusted-logos-section" aria-label="Trusted Enterprise Clients">
        <div className="page-container">
          <h2 className="trusted-section-title">
            TRUSTED ACROSS MISSION-CRITICAL INDUSTRIAL SECTORS
          </h2>
        </div>

        <div className="trusted-marquee-container">
          <div className="trusted-marquee-track">
            {/* Triplicate logo array for seamless 0% -> -33.333% infinite marquee looping */}
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
              <div
                key={`trusted-logo-${idx}`}
                className="trusted-logo-item"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="trusted-logo-img"
                  loading={idx < 7 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          STAGE 7 — SECTION 2: VERIFIED OPERATIONAL INFRASTRUCTURE & GUARANTEES
          Replacing fabricated placeholder metrics with audited platform capabilities
          =================================================================== */}
      <section className="section-block-sm platform-guarantees-strip" aria-label="Operational Guarantees">
        <div className="page-container">
          <div className="guarantees-cards-grid">
            {platformGuarantees.map((g) => (
              <div key={g.id} className="guarantee-card">
                <div className="guarantee-header">
                  <div className="guarantee-icon-wrap">
                    {g.icon}
                  </div>
                  <span className="guarantee-mono-tag">{g.tag}</span>
                </div>
                <h3 className="guarantee-title">{g.title}</h3>
                <p className="guarantee-desc">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          STAGE 7 — SECTION 3: THE PLATFORM SHOWCASE (RAFT-STYLE INTERACTIVE STORYTELLING)
          =================================================================== */}
      <section className="section-block platform-showcase-section" aria-label="Platform Showcase">
        <div className="page-container">
          <div className="section-editorial-header text-center">
            <span className="badge-mono badge-mono-light">
              <span className="badge-dot" />
              INTELLIGENT TRANSPORTATION PLATFORM
            </span>
            <h2 className="section-headline">
              The Connected Operating System for Road Freight
            </h2>
            <p className="section-subcopy">
              One unified architecture replacing fragmented brokers, manual spreadsheets, and opaque tracking with synchronized digital execution across shippers, transporters, and capital partners.
            </p>
          </div>

          {/* Interactive Pillar Selector Tabs */}
          <div className="platform-pillar-nav">
            <button
              onClick={() => setActivePillar('tms')}
              className={`platform-pillar-tab-btn ${activePillar === 'tms' ? 'active' : ''}`}
            >
              <Truck size={16} />
              <span>Autonomous TMS &amp; Dispatch</span>
            </button>
            <button
              onClick={() => setActivePillar('controlTower')}
              className={`platform-pillar-tab-btn ${activePillar === 'controlTower' ? 'active' : ''}`}
            >
              <Activity size={16} />
              <span>Live Highway Control Tower</span>
            </button>
            <button
              onClick={() => setActivePillar('finance')}
              className={`platform-pillar-tab-btn ${activePillar === 'finance' ? 'active' : ''}`}
            >
              <CreditCard size={16} />
              <span>Digital POD &amp; Working Capital</span>
            </button>
          </div>

          {/* Interactive Showcase Console Split */}
          <div className="platform-showcase-grid">
            <div className="platform-showcase-left">
              <span className="badge-mono badge-mono-blue" style={{ marginBottom: '12px' }}>
                <span className="badge-dot" />
                {activePillarData.badge}
              </span>
              <h3 className="platform-headline">{activePillarData.title}</h3>
              <p className="platform-body">{activePillarData.desc}</p>

              <ul className="platform-feature-list">
                {activePillarData.highlights.map((item, idx) => (
                  <li key={idx} className="platform-feature-item">
                    <div className="platform-check-circle">
                      <CheckCircle2 size={13} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const targetSub = activePillar === 'tms' ? 'platform/tms' : activePillar === 'controlTower' ? 'platform/control-tower' : 'platform/finance';
                  navigateTo(targetSub);
                }}
                className="btn-pill btn-pill-dark"
                style={{ width: 'fit-content' }}
              >
                <span>{activePillarData.actionText}</span>
                <div className="btn-arrow-circle">
                  <ArrowRight size={13} />
                </div>
              </button>
            </div>

            {/* Right Interactive Telemetry Console */}
            <div className="platform-cockpit-frame">
              <div className="cockpit-top-bar">
                <div className="cockpit-status-badge">
                  <span className="cockpit-pulse-dot" />
                  <span>{activePillarData.mockTitle}</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--accent-yellow)' }}>
                  GOVT API LINKED
                </span>
              </div>

              <div className="cockpit-route-card">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-inv-muted)', textTransform: 'uppercase' }}>
                  {activePillarData.mockStatus}
                </span>
                <div className="cockpit-route-title">{activePillarData.mockRoute}</div>
                <span style={{ fontSize: '12px', color: 'var(--text-inv-secondary)' }}>
                  {activePillarData.mockEta}
                </span>
              </div>

              <div className="cockpit-stats-grid">
                {activePillarData.stats.map((s, idx) => (
                  <div key={idx} className="cockpit-stat-item">
                    <span className="cockpit-stat-label">{s.label}</span>
                    <span className="cockpit-stat-val">{s.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', color: 'var(--text-inv-secondary)' }}>
                  <Lock size={13} color="var(--status-emerald)" />
                  <span>Cryptographically Signed Transaction Stream</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--status-emerald)' }}>
                  100% AUDIT READY
                </span>
              </div>
            </div>
          </div>

          {/* Alternating Feature Deep-Dives */}
          <div className="platform-deepdive-grid">
            <div className="platform-deepdive-card">
              <div>
                <span className="deepdive-tag">SYSTEMIC BOTTLENECK SOLVED</span>
                <h4 className="deepdive-title">Dynamic Corridor Return-Load Pairing</h4>
                <p className="deepdive-body">
                  India’s small fleet owners lose up to 30% of operating margins on empty return trips. EasyLane’s backhaul pairing engine algorithmically matches destination delivery slots with outbound enterprise freight before trucks reach their delivery docks.
                </p>
              </div>
              <div style={{ background: 'var(--canvas-secondary)', borderRadius: 'var(--radius-md)', padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>OUTBOUND LEG</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--brand-blue)' }}>RETURN LEG ALLOCATED</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy-deep)' }}>
                  Gujarat Industrial Belt ⇄ Maharashtra Auto Cluster
                </div>
              </div>
            </div>

            <div className="platform-deepdive-card">
              <div>
                <span className="deepdive-tag">CAPITAL LIQUIDITY UNLOCKED</span>
                <h4 className="deepdive-title">Sub-Minute Digital POD &amp; Instant Financing</h4>
                <p className="deepdive-body">
                  Eliminate 60-day physical courier cycles for physical consignment notes. Consignee mobile OCR scanning stamps Proof of Delivery with GPS coordinates, automatically triggering invoice discounting syndication via M1xchange and partner NBFCs.
                </p>
              </div>
              <div style={{ background: 'var(--canvas-secondary)', borderRadius: 'var(--radius-md)', padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>SETTLEMENT PIPELINE</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--status-emerald)' }}>FAST-TRACK ADVANCE</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy-deep)' }}>
                  Gate OCR Verified → Instant Bank Escrow Disbursement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          STAGE 7 — SECTION 4: VERTICAL SOLUTIONS PANEL (INTERACTIVE TABS)
          =================================================================== */}
      <section className="section-block" aria-label="Stakeholder Solutions">
        <div className="page-container">
          <div className="section-editorial-header">
            <span className="badge-mono badge-mono-blue">
              <span className="badge-dot" />
              VERTICAL OUTCOMES
            </span>
            <h2 className="section-headline">
              Engineered for Every Stakeholder in Freight
            </h2>
            <p className="section-subcopy">
              Logistics is a collaborative ecosystem. EasyLane aligns shippers, transporters, and capital partners on one shared truth.
            </p>
          </div>

          <div className="verticals-panel-wrapper">
            {/* Tabs Row */}
            <div className="verticals-tabs-nav">
              <button
                className={`vertical-tab-btn ${activeVertical === 'shippers' ? 'active' : ''}`}
                onClick={() => setActiveVertical('shippers')}
              >
                Enterprise Shippers
              </button>
              <button
                className={`vertical-tab-btn ${activeVertical === 'transporters' ? 'active' : ''}`}
                onClick={() => setActiveVertical('transporters')}
              >
                Fleet Owners &amp; Transporters
              </button>
              <button
                className={`vertical-tab-btn ${activeVertical === 'partners' ? 'active' : ''}`}
                onClick={() => setActiveVertical('partners')}
              >
                Financiers &amp; NBFCs
              </button>
            </div>

            {/* Tab Content Display */}
            <div className="vertical-content-layout">
              <div>
                <span className="badge-mono badge-mono-light" style={{ marginBottom: '14px' }}>
                  {activeData.tag}
                </span>
                <h3 className="vertical-copy-heading">{activeData.title}</h3>
                <p className="vertical-copy-body">{activeData.desc}</p>

                <div className="vertical-guarantees-pair">
                  {activeData.guarantees.map((g, idx) => (
                    <div key={idx} className="vertical-guarantee-box">
                      <div className="vertical-guarantee-num">{g.value}</div>
                      <div className="vertical-guarantee-txt">{g.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {activeData.points.map((pt, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'var(--text-primary)' }}>
                      <CheckCircle2 size={15} color="var(--brand-blue)" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const targetSub = activeVertical === 'shippers' ? 'solutions/enterprises' : activeVertical === 'transporters' ? 'solutions/transporters' : 'solutions/partners';
                    navigateTo(targetSub);
                  }}
                  className="btn-pill btn-pill-dark"
                >
                  <span>Explore {activeVertical === 'shippers' ? 'Shipper' : activeVertical === 'transporters' ? 'Transporter' : 'Financing'} Solutions</span>
                  <div className="btn-arrow-circle">
                    <ArrowRight size={13} />
                  </div>
                </button>
              </div>

              {/* Right Interactive Mock Display */}
              <div className="vertical-interactive-mock">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--navy-border)', paddingBottom: '16px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--status-emerald)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: 'var(--text-inv-secondary)' }}>
                      {activeData.mockTitle}
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-inv-muted)' }}>
                    LIVE FEED
                  </span>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent-yellow)', marginBottom: '4px' }}>
                    {activeData.mockStatus}
                  </span>
                  <strong style={{ display: 'block', fontSize: '15px', color: '#fff', marginBottom: '6px' }}>
                    {activeData.mockRoute}
                  </strong>
                  <span style={{ fontSize: '12.5px', color: 'var(--text-inv-secondary)' }}>
                    {activeData.mockEta}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <span style={{ display: 'block', fontSize: '10.5px', color: 'var(--text-inv-muted)', fontFamily: 'var(--font-mono)' }}>GPS REFRESH</span>
                    <strong style={{ fontSize: '13px', color: '#fff' }}>Every 15 Seconds</strong>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <span style={{ display: 'block', fontSize: '10.5px', color: 'var(--text-inv-muted)', fontFamily: 'var(--font-mono)' }}>POD AUDIT</span>
                    <strong style={{ fontSize: '13px', color: 'var(--status-emerald)' }}>Tamper-Proof</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          STAGE 4 & 7 — SECTION 5: TWO-YEAR STRATEGIC TRANSFORMATION ROADMAP
          Strictly categorizing: Available Now, In Development, Long-Term Vision
          =================================================================== */}
      <section className="section-block" style={{ background: 'var(--canvas-secondary)' }} aria-label="Strategic Roadmap">
        <div className="page-container">
          <div className="section-editorial-header text-center">
            <span className="badge-mono badge-mono-light">
              <span className="badge-dot" />
              STRATEGIC ROADMAP &amp; CAPABILITY HORIZONS
            </span>
            <h2 className="section-headline">
              Built for Where Indian Logistics is Heading
            </h2>
            <p className="section-subcopy">
              A transparent, grounded roadmap distinguishing what is in production today from our forward development milestones.
            </p>
          </div>

          <div className="roadmap-timeline-grid">
            {/* Horizon 1: Available Now */}
            <div className="roadmap-tier-card tier-active">
              <div className="roadmap-tier-status">
                <span className="badge-mono badge-mono-blue">
                  <span className="badge-dot" />
                  AVAILABLE TODAY • PRODUCTION READY
                </span>
              </div>
              <h3 className="roadmap-tier-title">Enterprise TMS &amp; FTL Execution</h3>
              <p className="roadmap-tier-desc">
                Fully deployed capabilities delivering measurable operational discipline across high-volume industrial corridors.
              </p>
              <ul className="roadmap-item-list">
                <li className="roadmap-item">
                  <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Full Truckload (FTL) aggregation and automated vehicle dispatch</span>
                </li>
                <li className="roadmap-item">
                  <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>24/7 Control Tower with telematics and state-border alerts</span>
                </li>
                <li className="roadmap-item">
                  <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Sub-minute digital Proof-of-Delivery capture and OCR</span>
                </li>
                <li className="roadmap-item">
                  <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>M1xchange partner integration for instant bill discounting</span>
                </li>
              </ul>
            </div>

            {/* Horizon 2: In Active Development */}
            <div className="roadmap-tier-card">
              <div className="roadmap-tier-status">
                <span className="badge-mono badge-mono-light">
                  <Clock size={12} />
                  IN DEVELOPMENT • 2026 ROADMAP
                </span>
              </div>
              <h3 className="roadmap-tier-title">AI Return-Load &amp; Driver Ecosystem</h3>
              <p className="roadmap-tier-desc">
                High-priority capabilities currently undergoing pilot testing with select anchor industrial partners.
              </p>
              <ul className="roadmap-item-list">
                <li className="roadmap-item">
                  <Clock size={15} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Algorithmic backhaul &amp; return load prediction network</span>
                </li>
                <li className="roadmap-item">
                  <Clock size={15} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Dynamic automated RFQ spot bidding engine with lane intelligence</span>
                </li>
                <li className="roadmap-item">
                  <Clock size={15} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Comprehensive Driver Welfare App with healthcare and insurance benefits</span>
                </li>
                <li className="roadmap-item">
                  <Clock size={15} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Multi-ERP native bidirectional connectors (SAP S/4HANA &amp; Oracle)</span>
                </li>
              </ul>
            </div>

            {/* Horizon 3: Long-Term Vision */}
            <div className="roadmap-tier-card">
              <div className="roadmap-tier-status">
                <span className="badge-mono badge-mono-light">
                  <Compass size={12} />
                  2-YEAR VISION • FUTURE HORIZON
                </span>
              </div>
              <h3 className="roadmap-tier-title">Autonomous Multi-Modal Freight Cloud</h3>
              <p className="roadmap-tier-desc">
                Our long-term architectural transformation to power an autonomous, zero-friction national supply chain.
              </p>
              <ul className="roadmap-item-list">
                <li className="roadmap-item">
                  <Compass size={15} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Autonomous multimodal route orchestration (Rail freight + Road FTL)</span>
                </li>
                <li className="roadmap-item">
                  <Compass size={15} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Decentralized carrier trust ledger and instant smart contract payouts</span>
                </li>
                <li className="roadmap-item">
                  <Compass size={15} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Green Freight carbon-neutral routing and EV fleet orchestration</span>
                </li>
                <li className="roadmap-item">
                  <Compass size={15} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Predictive supply chain shock absorption and macro-lane hedging</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          STAGE 7 — SECTION 6: OPERATIONAL FIELD TRANSFORMATIONS
          Replacing fabricated quotes with authentic structural corridor solutions
          =================================================================== */}
      <section className="section-block" aria-label="Corridor Case Studies">
        <div className="page-container">
          <div className="section-editorial-header">
            <span className="badge-mono badge-mono-light">
              <span className="badge-dot" />
              OPERATIONAL FIELD TRANSFORMATIONS
            </span>
            <h2 className="section-headline">
              Solving Structural Bottlenecks on India’s Highways
            </h2>
            <p className="section-subcopy">
              How EasyLane’s connected logistics layer transforms daily operations across high-density industrial corridors.
            </p>
          </div>

          <div className="field-transformations-grid">
            <div className="field-transformation-card">
              <div>
                <span className="corridor-tag">
                  <MapPin size={11} />
                  PUNE → SANAND AUTOMOTIVE
                </span>
                <h3 className="transformation-title">Eliminating Plant In-Gate Detention &amp; Indent Chaos</h3>
                <p className="transformation-problem">
                  <strong>Challenge:</strong> Manufacturing plant dispatch teams spent 4+ hours every morning on manual phone calls verifying driver licenses, negotiating volatile spot rates, and arguing over unloading detention penalties.
                </p>
              </div>
              <div className="transformation-solution">
                <strong>EasyLane Outcome:</strong> Automated vehicle placement via VAHAN API integration, electronic in-gate passes, and sub-minute GPS geofence timestamps completely resolved detention disputes.
              </div>
            </div>

            <div className="field-transformation-card">
              <div>
                <span className="corridor-tag">
                  <MapPin size={11} />
                  GUJARAT → MAHARASHTRA FREIGHT
                </span>
                <h3 className="transformation-title">Crushing the Empty Return-Run (Deadhead) Crisis</h3>
                <p className="transformation-problem">
                  <strong>Challenge:</strong> Independent fleet owners operating 32ft multi-axle trailers frequently returned empty from Gujarat delivery hubs, burning diesel without revenue and depressing driver earnings.
                </p>
              </div>
              <div className="transformation-solution">
                <strong>EasyLane Outcome:</strong> Dynamic corridor pairing automatically books return industrial cargo before trucks finish offloading, stabilizing carrier income and reducing highway waste.
              </div>
            </div>

            <div className="field-transformation-card">
              <div>
                <span className="corridor-tag">
                  <MapPin size={11} />
                  BENGALURU → CHENNAI TRADE BELT
                </span>
                <h3 className="transformation-title">Ending the 60-Day Freight Working Capital Deadlock</h3>
                <p className="transformation-problem">
                  <strong>Challenge:</strong> Small transporters waited 60 to 90 days for physical paper consignment notes (PODs) to be couriered, reconciled, and approved by enterprise billing desks.
                </p>
              </div>
              <div className="transformation-solution">
                <strong>EasyLane Outcome:</strong> Mobile gate OCR captures geotagged consignee stamps instantly upon delivery, triggering same-day invoice discounting via M1xchange and institutional lenders.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          STAGE 7 — SECTION 7: CLOSING HIGH-IMPACT CTA BANNER
          =================================================================== */}
      <section className="section-block-sm" aria-label="Closing Call to Action">
        <div className="page-container">
          <div className="closing-banner-outer">
            <span className="badge-mono badge-mono-glass" style={{ margin: '0 auto 16px' }}>
              <span className="badge-dot" />
              START YOUR TRANSFORMATION
            </span>
            <h2 className="closing-banner-headline">
              Your Supply Chain Was Built to Deliver Growth, Not Chase Paperwork.
            </h2>
            <p className="closing-banner-subcopy">
              Join leading enterprise shippers and fleet owners already scaling on EasyLane’s connected logistics platform.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={openDemoModal}
                className="btn-pill btn-pill-primary"
                style={{ padding: '12px 24px' }}
              >
                <span>Book an Architecture Consultation</span>
                <div className="btn-arrow-circle">
                  <ArrowUpRight size={14} />
                </div>
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="btn-pill btn-pill-glass"
                style={{ padding: '12px 24px' }}
              >
                <span>Speak with a Specialist</span>
                <div className="btn-arrow-circle">
                  <ArrowRight size={14} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

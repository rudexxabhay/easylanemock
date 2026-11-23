import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Clock, 
  ChevronDown, 
  CheckCircle2, 
  ArrowLeft,
  Search,
  X,
  FileCheck,
  Scale,
  Cpu,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Radio,
  Building2,
  Sparkles,
  Share2
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Resources({ resourceSlug = '' }) {
  const { openDemoModal, navigateTo } = useNavigation();

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  // Genuine Publications & Technical Resources Dataset
  const publications = [
    {
      id: 'ftl-fragmentation',
      category: 'Insights',
      badge: 'INSIGHTS • STRATEGIC WHITEPAPER',
      title: 'The Indian Full Truckload (FTL) Landscape: Overcoming Market Fragmentation',
      shortTitle: 'Indian FTL Landscape & Fragmentation',
      readTime: '12 min read',
      date: 'October 2026',
      summary: 'An empirical analysis of why 85% of Indian commercial trucks belong to micro-operators with fewer than 5 vehicles, and how direct digital freight aggregation unlocks national supply chain efficiency.',
      accentColor: 'var(--brand-blue)',
      icon: <Layers size={22} />,
      content: {
        subtitle: 'How algorithmic matching and statutory telematics dismantle traditional transport nagar inefficiencies across India’s Golden Quadrilateral.',
        executiveSummary: 'India’s domestic road freight ecosystem moves over 70% of total commercial tonnage across 10 million+ vehicles. However, systemic structural fragmentation—where the vast majority of fleet owners operate small fleets without direct enterprise access—forces dependency on multi-tiered brokerages that siphon up to 30% of freight revenues.',
        problemStatement: 'Due to reliance on physical transport nagars, commercial vehicles routinely suffer 25% to 30% deadhead miles (empty returns), prolonged plant detention, and 60-to-90 day invoice settlement cycles that induce severe working capital distress for fleet operators.',
        operationalFramework: [
          'Direct Carrier-Shipper Matching: Eliminating intermediary broker layers through direct algorithmic indent dispatch and contract allocation.',
          'Automated VAHAN & SARATHI Qualification: Real-time verification of fitness certificates, commercial permits, and driver credentials via National APIs.',
          'Unified Telematics Fusion: Combining GPS hardware, cellular SIM tracking, and NPCI FASTag checkpoint telemetry for uninterrupted milestone visibility.',
          'Decoupled Invoice Settlement: Pre-approved TReDS invoice discounting ensuring fleet owners receive freight earnings within 24 hours of verified digital delivery.'
        ],
        regulatoryContext: 'Aligns directly with India’s National Logistics Policy (NLP) and the Unified Logistics Interface Platform (ULIP) to lower logistics costs from ~14% of GDP towards global benchmarks of ~8-9%.',
        keyTakeaways: 'Enterprise manufacturing supply chains that adopt direct digital freight networks realize predictable contract capacity, SLA-backed carrier placement, and complete elimination of manual detention disputes.'
      }
    },
    {
      id: 'deadhead-reduction',
      category: 'Product Guides',
      badge: 'PRODUCT GUIDE • BACKHAUL PAIRING',
      title: 'The Operational Guide to Eliminating Empty Return Runs (Deadhead Reduction)',
      shortTitle: 'Eliminating Empty Return Runs',
      readTime: '8 min read',
      date: 'September 2026',
      summary: 'A step-by-step mathematical and operational methodology for using corridor pairing algorithms to guarantee return cargo before trucks offload at destination manufacturing facilities.',
      accentColor: 'var(--status-emerald)',
      icon: <TrendingUp size={22} />,
      content: {
        subtitle: 'Systematically eliminating the 28.4% national empty kilometer ratio on primary industrial manufacturing corridors.',
        executiveSummary: 'Empty running (deadhead) represents the largest preventable operational expense in Indian trucking, responsible for burning over 150 million litres of diesel annually without delivering economic output.',
        problemStatement: 'Historically, drivers arriving at destination hubs spent 24 to 72 hours searching for backhaul cargo in local transport hubs, often accepting discounted distress rates or returning empty.',
        operationalFramework: [
          'Predictive Inbound Notification: Destination hubs receive inbound freight notifications 36 hours prior to vehicle arrival.',
          'Corridor Return Pairing: Algorithmic matching of outbound delivery zones with local industrial production clusters within regional proximity.',
          'Pre-Dispatch Indent Confirmation: Drivers receive confirmed return-load indents on their vernacular mobile application before departing the origin facility.',
          'Dynamic Toll & Fuel Allocation: Automated route optimization balancing expressway tolls with diesel consumption to maximize net trip revenue.'
        ],
        regulatoryContext: 'Complies with state commercial transport regulations and emission reduction directives under green freight ESG reporting standards.',
        keyTakeaways: 'Corridor pairing targets up to 40% deadhead reduction across high-density lanes, substantially boosting fleet operating profitability while cutting empty diesel emissions.'
      }
    },
    {
      id: 'epod-reconciliation',
      category: 'Product Guides',
      badge: 'PRODUCT GUIDE • FREIGHT FINTECH',
      title: 'Digital Proof of Delivery (ePOD) & GST Rule 138 Reconciliation',
      shortTitle: 'Digital POD & GST Reconciliation',
      readTime: '10 min read',
      date: 'August 2026',
      summary: 'How transitioning from paper consignment notes to mobile OCR digital proofs of delivery eliminates invoice disputes, ensures GST audit readiness, and enables same-day factoring.',
      accentColor: '#38BDF8',
      icon: <FileCheck size={22} />,
      content: {
        subtitle: 'Eliminating paperwork disputes, physical transit damage, and 60-day billing lags through cryptographic mobile verification.',
        executiveSummary: 'Paper consignment notes (LR/bilty) are prone to transit damage, misplacement, and delayed submission, resulting in 60-to-90 day enterprise invoice processing delays and disputed detention claims.',
        problemStatement: 'Manual invoice auditing between contracted indents, physical weighbridge slips, and handwritten driver delivery copies creates high administrative overhead and audit vulnerability under GST Rule 138.',
        operationalFramework: [
          'Mobile OCR Consignee Stamping: The EasyLane mobile app captures high-resolution document scans, extracts stamp signatures, and embeds immutable GPS timestamps.',
          'Automated 3-Way Match Audit: Instant programmatic cross-checking of purchase order line items, weighbridge gross/tare receipts, and digital POD acknowledgments.',
          'Direct GST Portal Validation: Verification of electronic way bill validity and automatic closure upon confirmed consignee delivery.',
          'Statutory Audit Ledger: Complete tamper-evident digital archive available for internal audit and tax authority verification.'
        ],
        regulatoryContext: 'Fully compliant with GST Rule 138 (E-Way Bill provisions), electronic invoice generation mandates, and the Information Technology Act 2000 for digital signature recognition.',
        keyTakeaways: 'Enterprises achieve sub-4-hour invoice reconciliation, zero GST penalty exposure, and complete elimination of paper-handling administrative overhead.'
      }
    },
    {
      id: 'driver-welfare',
      category: 'Insights',
      badge: 'INSIGHTS • HIGHWAY WELFARE',
      title: 'Driver-First Logistics: Addressing India’s Highway Commercial Driver Shortage',
      shortTitle: 'Driver-First Logistics & Safety',
      readTime: '9 min read',
      date: 'July 2026',
      summary: 'Investigating how instant trip advances, vernacular smartphone interfaces, and 24/7 emergency roadside assistance reduce driver turnover and elevate highway operating safety.',
      accentColor: 'var(--accent-yellow)',
      icon: <Truck size={22} />,
      content: {
        subtitle: 'Restoring dignity, predictable compensation, and 24/7 safety support to the backbone of Indian surface transportation.',
        executiveSummary: 'India faces a critical shortage of commercial truck drivers, with an estimated ratio of fewer than 750 drivers per 1,000 trucks. Poor roadside working conditions, predatory detention, and delayed trip allowances drive skilled operators out of the industry.',
        problemStatement: 'Long-haul drivers routinely endure 8-to-12 hour gate detention without resting amenities, lack immediate funds for highway tolls, and face severe vulnerability during nighttime breakdowns.',
        operationalFramework: [
          'Instant Digital Trip Advances: Automated cash allowances disbursed directly to driver FASTag wallets and commercial fuel cards upon verified gate-out.',
          'Multilingual Vernacular Interface: Simplified mobile workflows in Hindi, Marathi, Gujarati, Telugu, Tamil, and English with voice turn-by-turn gate instructions.',
          '24/7 Roadside Assistance & Emergency SOS: Direct line to EasyLane Mumbai command center for highway breakdown support, emergency medical aid, and accident assistance.',
          'Automated Detention Dispute Protection: Exact GPS geofence timestamps eliminate arbitrary driver detention blame and protect driver earnings.'
        ],
        regulatoryContext: 'Endorses the Motor Vehicles (Amendment) Act 2019 safety provisions and the national occupational safety standards for commercial transport personnel.',
        keyTakeaways: 'Transporters implementing EasyLane driver-first workflows achieve improved driver retention, faster corridor turnarounds, and elevated vehicle operating safety.'
      }
    },
    {
      id: 'bhiwandi-corridor-study',
      category: 'Case Studies',
      badge: 'CASE STUDY • INDUSTRIAL CORRIDORS',
      title: 'Corridor Analysis: Bhiwandi to Pithampur Industrial Linehaul Optimization',
      shortTitle: 'Bhiwandi to Pithampur Corridor Study',
      readTime: '11 min read',
      date: 'October 2026',
      summary: 'A real-world examination of high-density automotive and engineering freight moving between Mumbai-MMR warehousing and Madhya Pradesh manufacturing hubs.',
      accentColor: '#818CF8',
      icon: <Building2 size={22} />,
      content: {
        subtitle: 'How automated VAHAN pre-clearance and FASTag checkpoint telemetry optimized a 580km high-density Golden Quadrilateral feeder corridor.',
        executiveSummary: 'The Bhiwandi-to-Pithampur freight corridor serves as a critical manufacturing lifeline, carrying automotive assemblies, engineering castings, and consumer goods. Historically, transit was plagued by unpredictable Kasara Ghat congestion, checkpoint delays, and asymmetric backhauls.',
        problemStatement: 'Shippers faced inconsistent transit durations ranging from 28 to 44 hours, frequent border detention disputes at the Maharashtra-Madhya Pradesh boundary, and a 35% empty return rate from Pithampur.',
        operationalFramework: [
          'Automated Gate In-Pass Pre-Clearance: Vehicles qualified via VAHAN APIs prior to arrival, slashing dock in-gate processing from 45 minutes to 4 minutes.',
          'FASTag Toll Telemetry Streaming: Real-time milestone timestamping at Charoti, Kasara, and Dhule toll plazas providing continuous live ETAs to receiving plants.',
          'Dynamic Kasara Ghat Weather Routing: Telematics system alerts drivers to monsoon road slips and queues, automatically rerouting around high-congestion bottlenecks.',
          'Pithampur Return Cargo Reservation: Return load allocation initiated 36 hours before delivery, matching outbound trailers with engineering cargo heading to Pune and Mumbai.'
        ],
        regulatoryContext: 'Full compliance with interstate transport permits, e-Way Bill state border transit protocols, and commercial weighbridge certifications.',
        keyTakeaways: 'Manufacturing shippers achieved 100% predictable transit scheduling, complete elimination of gate detention penalties, and dependable return capacity on dedicated 32ft multi-axle trailers.'
      }
    },
    {
      id: 'ulip-integration-update',
      category: 'Updates',
      badge: 'UPDATES • PLATFORM RELEASE',
      title: 'Platform Update: Direct National Logistics Portal (ULIP) Gateway Live',
      shortTitle: 'ULIP & VAHAN Gateway Live',
      readTime: '5 min read',
      date: 'November 2026',
      summary: 'EasyLane announces native production integration with the Unified Logistics Interface Platform (ULIP), providing instantaneous statutory vehicle and driver credential checks.',
      accentColor: '#10B981',
      icon: <Radio size={22} />,
      content: {
        subtitle: 'Direct statutory connectivity with Ministry of Logistics databases for automated carrier compliance and real-time e-way bill closure.',
        executiveSummary: 'EasyLane has officially integrated with India’s Unified Logistics Interface Platform (ULIP), connecting our Transportation Management System directly to national statutory databases including VAHAN, SARATHI, and the FASTag NETC network.',
        problemStatement: 'Manual verification of commercial vehicle registration certificates, fitness validity, commercial permits, and driver licenses previously created substantial operational friction and risk of non-compliant carriers on factory grounds.',
        operationalFramework: [
          'Sub-Second VAHAN API Lookups: Instant validation of vehicle age, road tax validity, commercial permit status, and insurance expiration upon trip creation.',
          'SARATHI Commercial License Verification: Direct authentication of heavy commercial driver licenses to prevent unlicensed operator dispatches.',
          'Automated E-Way Bill Auto-Closure: Programmatic communication with GST E-Way Bill servers to record confirmed delivery timestamps upon mobile ePOD verification.',
          'Tamper-Proof Audit Logging: All compliance checks are cryptographically logged with government transaction IDs for statutory enterprise audit defense.'
        ],
        regulatoryContext: 'Operating under the National Logistics Policy mandate to integrate disparate government logistics databases into a unified digital execution infrastructure.',
        keyTakeaways: 'Enterprise shippers can now guarantee 100% verified regulatory compliance across every transport vendor, vehicle, and driver executing freight within their supply chain.'
      }
    }
  ];

  const faqs = [
    {
      q: 'How does EasyLane verify trucks and drivers before plant dispatch?',
      a: 'Every vehicle and driver is checked automatically via National VAHAN and SARATHI APIs. We verify commercial registration (RC) status, national permits, commercial insurance, fitness certificates, and driver license authenticity before gate entry.'
    },
    {
      q: 'How quickly can EasyLane be integrated with our enterprise ERP?',
      a: 'Standard enterprise connectors (SAP S/4HANA, SAP ECC, Oracle Transportation Management, and Microsoft Dynamics 365) typically go live within 7 to 14 business days. We provide complete staging environments, API sandboxes, and dedicated technical onboarding engineers.'
    },
    {
      q: 'How does the digital Proof of Delivery (ePOD) bill discounting work?',
      a: 'Upon delivery, consignees sign and stamp the digital POD in our mobile app. The document is scanned via OCR and timestamped with GPS coordinates. In partnership with institutional financiers like M1xchange (TReDS), approved invoices can be discounted and settled within 24 hours.'
    },
    {
      q: 'What full truckload (FTL) vehicle types does EasyLane support?',
      a: 'We support all major commercial vehicle configurations: 32ft MX/SXL containers, 24ft/28ft multi-axles, 40ft high-cube trailers, Taurus 21T/25T, and specialized hydraulic modular axles for heavy project cargo.'
    },
    {
      q: 'Can EasyLane track trucks that do not have dedicated GPS hardware installed?',
      a: 'Yes. Our telematics fusion engine combines NPCI NETC FASTag toll checkpoint telemetry with consensual cellular SIM network pings. This provides uninterrupted in-transit milestone visibility without requiring expensive proprietary hardware installations.'
    }
  ];

  // Active resource detail object if route matches a slug
  const activeResource = useMemo(() => {
    if (!resourceSlug) return null;
    return publications.find(p => p.id === resourceSlug.toLowerCase()) || null;
  }, [resourceSlug]);

  // Filtered publications based on category and live search query
  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      const matchesCategory = activeCategory === 'all' || pub.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = pub.title.toLowerCase().includes(q);
      const inSummary = pub.summary.toLowerCase().includes(q);
      const inCategory = pub.category.toLowerCase().includes(q);
      const inBadge = pub.badge.toLowerCase().includes(q);
      const inContent = pub.content.executiveSummary.toLowerCase().includes(q);

      return inTitle || inSummary || inCategory || inBadge || inContent;
    });
  }, [publications, activeCategory, searchQuery]);

  // Featured Spotlight dataset (first 3 genuine items)
  const featuredPrimary = publications[0]; // FTL fragmentation
  const featuredSupporting1 = publications[1]; // Deadhead reduction
  const featuredSupporting2 = publications[2]; // ePOD reconciliation

  // Available genuine categories
  const categories = ['all', 'Insights', 'Product Guides', 'Case Studies', 'Updates'];

  // Handle Search Reset
  const handleResetSearch = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  /* ==========================================================================
     VIEW A: DEDICATED RESOURCE DETAIL VIEW (/#/resources/:slug)
     ========================================================================== */
  if (activeResource) {
    const relatedResources = publications.filter(p => p.id !== activeResource.id).slice(0, 2);

    return (
      <div className="resources-detail-page">
        {/* Article Breadcrumb & Back Bar */}
        <section className="inner-page-hero" style={{ paddingBottom: '32px' }}>
          <div className="page-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
              <button 
                onClick={() => navigateTo('resources')}
                className="btn-pill btn-pill-primary"
                style={{ padding: '6px 14px', fontSize: '12.5px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <ArrowLeft size={14} />
                <span>Back to All Resources</span>
              </button>

              <div className="inner-hero-breadcrumb" style={{ margin: 0 }}>
                <span className="crumb-link" onClick={() => navigateTo('home')}>Home</span>
                <span className="crumb-sep">/</span>
                <span className="crumb-link" onClick={() => navigateTo('resources')}>Resources</span>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">{activeResource.shortTitle}</span>
              </div>
            </div>

            <div style={{ maxWidth: '820px' }}>
              <span className="badge-mono badge-mono-blue" style={{ marginBottom: '14px' }}>
                {activeResource.badge}
              </span>
              <h1 className="inner-hero-title" style={{ fontSize: 'clamp(28px, 3.8vw, 48px)', marginTop: '10px', marginBottom: '16px' }}>
                {activeResource.title}
              </h1>
              <p className="inner-hero-lead" style={{ fontSize: '16.5px', marginBottom: '24px' }}>
                {activeResource.content.subtitle}
              </p>

              <div className="article-meta-row">
                <span style={{ fontWeight: 600, color: 'var(--navy-deep)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Building2 size={15} color="var(--brand-blue)" /> EasyLane Supply Chain Intelligence
                </span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={14} /> {activeResource.readTime}
                </span>
                <span>•</span>
                <span>{activeResource.date}</span>
                <span>•</span>
                <span style={{ color: 'var(--status-emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={14} /> Verified Logistics Protocol
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body Content */}
        <section className="section-block">
          <div className="page-container">
            <div className="article-detail-wrap">
              {/* Technical Schematic Hero Graphic */}
              <div className="article-hero-graphic">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', paddingBottom: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(36, 91, 255, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA' }}>
                      {activeResource.icon}
                    </div>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', display: 'block' }}>
                        TECHNICAL ARCHITECTURE REFERENCE
                      </span>
                      <strong style={{ fontSize: '14px', color: '#FFFFFF' }}>
                        {activeResource.shortTitle}
                      </strong>
                    </div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: '#10B981', background: 'rgba(16, 185, 129, 0.15)', padding: '3px 9px', borderRadius: '9999px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                    ULIP &amp; VAHAN COMPLIANT
                  </span>
                </div>

                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, margin: 0 }}>
                  This publication documents verified operational parameters, statutory integration points, and algorithmic dispatch frameworks deployed on EasyLane’s production network.
                </p>
              </div>

              {/* Main Text Content */}
              <div className="article-content-body">
                <h2>1. Executive Summary</h2>
                <p>
                  {activeResource.content.executiveSummary}
                </p>

                <h2>2. Operational Challenge &amp; Problem Context</h2>
                <p>
                  {activeResource.content.problemStatement}
                </p>

                <h2>3. Implementation Framework &amp; Technical Methodology</h2>
                <p>
                  The following operational rail executes across EasyLane’s centralized dispatch, telematics surveillance, and financial settlement infrastructure:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
                  {activeResource.content.operationalFramework.map((step, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        background: '#FFFFFF', 
                        border: '1px solid var(--border-subtle)', 
                        padding: '16px 20px', 
                        borderRadius: 'var(--radius-md)', 
                        display: 'flex', 
                        gap: '12px', 
                        alignItems: 'flex-start',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      <CheckCircle2 size={18} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <h2>4. Regulatory Compliance &amp; Standards</h2>
                <p>
                  {activeResource.content.regulatoryContext}
                </p>

                {/* Practical Takeaways Callout Card */}
                <div className="article-takeaways-callout">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--brand-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                    KEY PRACTICAL TAKEAWAY FOR SUPPLY CHAIN LEADERS
                  </span>
                  <p style={{ fontSize: '15px', color: 'var(--navy-deep)', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                    {activeResource.content.keyTakeaways}
                  </p>
                </div>
              </div>

              {/* Related Resources Block */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '48px', marginTop: '48px' }}>
                <span className="badge-mono badge-mono-blue" style={{ marginBottom: '14px' }}>
                  RECOMMENDED ADJACENT READING
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '24px' }}>
                  Related Logistics Research
                </h3>

                <div className="grid-2col-responsive">
                  {relatedResources.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => navigateTo(`resources/${rel.id}`)}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-xl)',
                        padding: '28px',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--brand-blue)', fontWeight: 700 }}>
                            {rel.badge}
                          </span>
                          <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                            {rel.readTime}
                          </span>
                        </div>
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: 'var(--navy-deep)', margin: '6px 0 8px' }}>
                          {rel.shortTitle}
                        </h4>
                        <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                          {rel.summary.slice(0, 110)}...
                        </p>
                      </div>
                      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px', marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--brand-blue)' }}>Read Publication</span>
                        <ArrowRight size={13} color="var(--brand-blue)" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Consultation CTA */}
        <section className="section-block" style={{ paddingTop: 0 }}>
          <div className="page-container">
            <div style={{ background: 'var(--navy-deep)', color: '#FFFFFF', borderRadius: 'var(--radius-2xl)', padding: '56px 36px', textAlign: 'center', boxShadow: 'var(--shadow-glass-dark)' }}>
              <span className="badge-mono" style={{ color: 'var(--accent-yellow)', background: 'rgba(252, 207, 63, 0.1)', border: '1px solid rgba(252, 207, 63, 0.25)', marginBottom: '16px' }}>
                HAVE AN OPERATIONAL CORRIDOR QUESTION?
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px' }}>
                Discuss Your Logistics Network with Our Engineering Team
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
                Our Mumbai command center works directly with enterprise manufacturing heads and fleet operators to architect zero-deadhead freight networks.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={openDemoModal} className="btn-pill btn-pill-primary">
                  <span>Schedule Consultation</span>
                  <div className="btn-arrow-circle">
                    <ArrowRight size={13} />
                  </div>
                </button>
                <button onClick={() => navigateTo('contact')} className="btn-pill btn-pill-dark" style={{ border: '1px solid var(--navy-border)' }}>
                  <span>Contact Mumbai Hub</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* ==========================================================================
     VIEW B: MAIN EDITORIAL RESOURCES HUB (/#/resources)
     ========================================================================== */
  return (
    <div className="resources-page">
      {/* -------------------------------------------------------------
          1. REDESIGNED EDITORIAL PAGE HERO (RAFT INSPIRED)
          ------------------------------------------------------------- */}
      <section className="inner-page-hero">
        <div className="page-container">
          <div className="resources-hero-grid">
            {/* Left Column: Required exact headline and supporting text */}
            <div>
              <div className="inner-hero-breadcrumb">
                <span className="crumb-link" onClick={() => navigateTo('home')}>Home</span>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">Resources &amp; Intelligence</span>
              </div>

              <h1 className="inner-hero-title" style={{ fontSize: 'clamp(36px, 4.4vw, 56px)', marginBottom: '16px' }}>
                Insights for Smarter Logistics.
              </h1>

              <p className="inner-hero-lead" style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', marginBottom: 0 }}>
                Explore practical insights, product knowledge, and ideas shaping the future of connected transportation.
              </p>
            </div>

            {/* Right Column: Raft-style Editorial Spotlight Preview Box */}
            <div className="resources-hero-preview-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="badge-mono badge-mono-blue">
                  SPOTLIGHT PUBLICATION
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                  {featuredPrimary.readTime}
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.35, marginBottom: '8px' }}>
                {featuredPrimary.title}
              </h3>

              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '18px' }}>
                {featuredPrimary.summary.slice(0, 140)}...
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  EasyLane Research
                </span>
                <button 
                  onClick={() => navigateTo(`resources/${featuredPrimary.id}`)}
                  className="btn-pill btn-pill-dark"
                  style={{ padding: '6px 14px', fontSize: '12px' }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={11} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. FEATURED EDITORIAL RESOURCES SECTION (RAFT ASYMMETRICAL SPOTLIGHT)
          ------------------------------------------------------------- */}
      <section className="section-block" style={{ paddingBottom: '32px' }}>
        <div className="page-container">
          <div style={{ marginBottom: '24px' }}>
            <span className="badge-mono badge-mono-blue" style={{ marginBottom: '8px' }}>
              FEATURED INTELLIGENCE
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.8vw, 32px)', fontWeight: 700, color: 'var(--navy-deep)' }}>
              Featured Publications &amp; Frameworks
            </h2>
          </div>

          <div className="featured-editorial-grid">
            {/* Left Large Primary Card */}
            <div 
              className="featured-primary-card"
              onClick={() => navigateTo(`resources/${featuredPrimary.id}`)}
            >
              <div className="featured-card-visual">
                {/* Tailored Vector Schematic */}
                <div style={{ textAlign: 'center', color: '#FFFFFF', padding: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(36, 91, 255, 0.3)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA' }}>
                    <Layers size={26} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', color: '#94A3B8', textTransform: 'uppercase' }}>
                    NATIONAL FREIGHT DATA MODEL • GOLDEN QUADRILATERAL
                  </span>
                </div>
              </div>

              <div className="featured-card-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--brand-blue)', fontWeight: 700 }}>
                    {featuredPrimary.badge}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {featuredPrimary.readTime}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.28, marginBottom: '12px' }}>
                  {featuredPrimary.title}
                </h3>

                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {featuredPrimary.summary}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '18px' }}>
                  <span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                    Published {featuredPrimary.date}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--brand-blue)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    Read Whitepaper <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>

            {/* Right Supporting Stack (2 Cards) */}
            <div className="featured-secondary-stack">
              {/* Supporting Item 1: Deadhead Reduction */}
              <div 
                className="featured-secondary-card"
                onClick={() => navigateTo(`resources/${featuredSupporting1.id}`)}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--status-emerald)', fontWeight: 700 }}>
                      {featuredSupporting1.badge}
                    </span>
                    <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                      {featuredSupporting1.readTime}
                    </span>
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.35, marginBottom: '8px' }}>
                    {featuredSupporting1.title}
                  </h4>

                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {featuredSupporting1.summary.slice(0, 125)}...
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{featuredSupporting1.date}</span>
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--brand-blue)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Read Guide <ArrowRight size={12} />
                  </span>
                </div>
              </div>

              {/* Supporting Item 2: Digital ePOD & Reconciliation */}
              <div 
                className="featured-secondary-card"
                onClick={() => navigateTo(`resources/${featuredSupporting2.id}`)}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: '#0284C7', fontWeight: 700 }}>
                      {featuredSupporting2.badge}
                    </span>
                    <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                      {featuredSupporting2.readTime}
                    </span>
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.35, marginBottom: '8px' }}>
                    {featuredSupporting2.title}
                  </h4>

                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {featuredSupporting2.summary.slice(0, 125)}...
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{featuredSupporting2.date}</span>
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--brand-blue)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Read Guide <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. CATEGORY TABS & REAL-TIME SEARCH BAR
          ------------------------------------------------------------- */}
      <section className="section-block" style={{ paddingTop: '16px' }}>
        <div className="page-container">
          <div className="resources-controls-bar">
            {/* Category Filter Tabs */}
            <div className="category-filter-group">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat === 'all' ? 'All Resources' : cat}
                  <span style={{ 
                    fontSize: '11px', 
                    opacity: activeCategory === cat ? 0.9 : 0.6,
                    fontFamily: 'var(--font-mono)' 
                  }}>
                    ({cat === 'all' ? publications.length : publications.filter(p => p.category === cat).length})
                  </span>
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="resources-search-wrap">
              <Search size={15} className="resources-search-icon" />
              <input
                type="text"
                placeholder="Search insights, guides, corridors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="resources-search-input"
                aria-label="Search resources"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="resources-search-clear"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Active Filter / Search Indicator */}
          {(activeCategory !== 'all' || searchQuery) && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <span>
                Showing <strong>{filteredPublications.length}</strong> {filteredPublications.length === 1 ? 'resource' : 'resources'}
                {activeCategory !== 'all' && <> in <strong>{activeCategory}</strong></>}
                {searchQuery && <> matching "<strong>{searchQuery}</strong>"</>}
              </span>
              <button
                onClick={handleResetSearch}
                style={{ background: 'none', border: 'none', color: 'var(--brand-blue)', fontSize: '12.5px', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* -------------------------------------------------------------
              4. RESOURCE LISTING GRID / EMPTY SEARCH STATE
              ------------------------------------------------------------- */}
          {filteredPublications.length > 0 ? (
            <div className="grid-3col-responsive" style={{ marginBottom: '64px' }}>
              {filteredPublications.map((pub) => (
                <div
                  key={pub.id}
                  onClick={() => navigateTo(`resources/${pub.id}`)}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--border-subtle)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(36, 91, 255, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px -6px rgba(36, 91, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  {/* Card Header Graphic Bar */}
                  <div style={{ height: '110px', background: 'linear-gradient(135deg, #070E1E 0%, #152243 100%)', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#93C5FD' }}>
                      {pub.icon}
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {pub.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '24px 24px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--brand-blue)', fontWeight: 700 }}>
                          {pub.badge.split('•')[0].trim()}
                        </span>
                        <span style={{ fontSize: '11.5px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <Clock size={11} /> {pub.readTime}
                        </span>
                      </div>

                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.35, marginBottom: '8px' }}>
                        {pub.title}
                      </h3>

                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '18px' }}>
                        {pub.summary.slice(0, 120)}...
                      </p>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                        {pub.date}
                      </span>
                      <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--brand-blue)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        Read Article <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Helpful Empty State */
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '56px 32px', textAlign: 'center', marginBottom: '64px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--canvas-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--text-muted)' }}>
                <Search size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                No Resources Found Matching "{searchQuery}"
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 20px', lineHeight: 1.55 }}>
                Try searching for keywords like "FTL", "VAHAN", "ePOD", "Backhaul", or "Corridor", or browse all publications.
              </p>
              <button onClick={handleResetSearch} className="btn-pill btn-pill-dark">
                <span>Reset Search &amp; Filters</span>
              </button>
            </div>
          )}

          {/* -------------------------------------------------------------
              5. VERIFIED FREQUENTLY ASKED QUESTIONS (FAQS)
              ------------------------------------------------------------- */}
          <div style={{ background: 'var(--canvas-secondary)', borderRadius: 'var(--radius-2xl)', padding: '48px 36px', marginBottom: '64px' }}>
            <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto 36px' }}>
              <span className="badge-mono badge-mono-blue" style={{ marginBottom: '10px' }}>
                TECHNICAL &amp; OPERATIONAL FAQS
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                Frequently Asked Operational Questions
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '820px', margin: '0 auto' }}>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'inherit'
                    }}
                    aria-expanded={openFaq === idx}
                  >
                    <span style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--navy-deep)' }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={17}
                      color="var(--brand-blue)"
                      style={{
                        transform: openFaq === idx ? 'rotate(180deg)' : 'none',
                        transition: 'transform var(--transition-fast)',
                        flexShrink: 0,
                        marginLeft: '12px'
                      }}
                    />
                  </button>
                  {openFaq === idx && (
                    <div style={{ padding: '0 22px 20px 22px', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.65, borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. CLOSING CTA BANNER
          ------------------------------------------------------------- */}
      <section className="section-block" style={{ paddingTop: 0 }}>
        <div className="page-container">
          <div style={{ background: 'var(--navy-deep)', color: '#FFFFFF', borderRadius: 'var(--radius-2xl)', padding: '56px 36px', textAlign: 'center', boxShadow: 'var(--shadow-glass-dark)' }}>
            <span className="badge-mono" style={{ color: 'var(--accent-yellow)', background: 'rgba(252, 207, 63, 0.1)', border: '1px solid rgba(252, 207, 63, 0.25)', marginBottom: '16px' }}>
              NEED BESPOKE RESEARCH OR NETWORK AUDIT?
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px' }}>
              Benchmark Your Freight Network with EasyLane Intelligence
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '620px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Our logistics engineering team conducts customized freight spend and deadhead reduction audits for enterprise manufacturers and multi-fleet operators.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={openDemoModal} className="btn-pill btn-pill-primary">
                <span>Request Enterprise Network Audit</span>
                <div className="btn-arrow-circle">
                  <ArrowUpRight size={13} />
                </div>
              </button>
              <button onClick={() => navigateTo('contact')} className="btn-pill btn-pill-dark" style={{ border: '1px solid var(--navy-border)' }}>
                <span>Contact Operations Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

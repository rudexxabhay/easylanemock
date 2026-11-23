import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Activity, 
  CreditCard, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Network, 
  Radio, 
  Zap,
  ArrowUpRight,
  Clock,
  Compass,
  FileCheck,
  AlertTriangle,
  FileText,
  BarChart3,
  Flame,
  Smartphone,
  Check
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Platform({ subRoute = '' }) {
  const { openDemoModal, navigateTo } = useNavigation();

  // Normalize sub-route if aliased
  const currentSub = subRoute.toLowerCase();

  // Selected tab for the main overview interactive explorer
  const [activeModule, setActiveModule] = useState(() => {
    if (['tms', 'dispatch', 'load-matching', 'indent-management'].includes(currentSub)) return 'tms';
    if (['control-tower', 'driver-app', 'exceptions'].includes(currentSub)) return 'controlTower';
    if (['finance', 'epod'].includes(currentSub)) return 'finance';
    return 'tms';
  });

  useEffect(() => {
    if (['tms', 'dispatch', 'load-matching', 'indent-management'].includes(currentSub)) setActiveModule('tms');
    else if (['control-tower', 'driver-app', 'exceptions'].includes(currentSub)) setActiveModule('controlTower');
    else if (['finance', 'epod'].includes(currentSub)) setActiveModule('finance');
  }, [currentSub]);

  // Master definition of platform capabilities
  const capabilities = {
    tms: {
      id: 'tms',
      slug: 'tms',
      badge: 'CORE DISPATCH ENGINE',
      name: 'Autonomous TMS & Freight Dispatch',
      title: 'End-to-End Transportation Management System',
      lead: 'Streamline full truckload (FTL) and multi-drop linehauls from automated indenting and carrier qualification to electronic gate passes and freight settlement.',
      features: [
        {
          title: 'Automated Indent Creation & Spot RFQ Bidding',
          desc: 'Trigger automatic indents from ERP purchase orders and run automated rate discovery across contracted and spot-market carriers.'
        },
        {
          title: 'National VAHAN & SARATHI Qualification Check',
          desc: 'Instant verification of commercial RC status, national fitness certificates, insurance validity, and driver licenses via national APIs before vehicle gate entry.'
        },
        {
          title: 'Algorithmic Backhaul & Return-Load Pairing',
          desc: 'Dynamic corridor pairing algorithms identify return freight opportunities to minimize empty running on major industrial freight lanes.'
        },
        {
          title: 'Multi-Stop Load Consolidation & Optimization',
          desc: 'Optimize cubic volume and axle weight distribution for multi-drop industrial manufacturing routes, maximizing trailer efficiency.'
        }
      ],
      terminalData: {
        indentId: 'IND-8942-BHW',
        lane: 'Bhiwandi Logistics Hub → Pithampur Industrial Sector-3',
        equipment: '32ft Multi-Axle Trailer (High Cube)',
        carrierStatus: 'VAHAN & SARATHI Verified • Zero Defects',
        checkpoint: 'FASTag Toll Plaza #108 (Charoti) • 04:18 AM',
        inTransitStatus: 'Active Transit • ETA 11:30 AM (On Schedule)',
        podStatus: 'Mobile OCR Consignee Handover Pre-Configured'
      },
      stats: [
        { label: 'Carrier Verification', value: 'Direct VAHAN API' },
        { label: 'Dispatch Velocity', value: 'Automated Spot RFQ' },
        { label: 'Backhaul Objective', value: 'Corridor Optimization' }
      ]
    },
    'control-tower': {
      id: 'control-tower',
      slug: 'control-tower',
      badge: '24/7 SATELLITE & IOT SURVEILLANCE',
      name: 'Sub-Second Exception Center & Control Tower',
      title: 'Unified Multi-Sensor In-Transit Visibility',
      lead: 'Gain centralized command-center visibility over every shipment in transit across thousands of independent transport vendors and logistics service providers.',
      features: [
        {
          title: 'Multi-Source Telematics Fusion',
          desc: 'Combines GPS black-boxes, cellular SIM triangulation, FASTag toll plaza telemetry, and driver mobile app pings into one synchronized tracking stream.'
        },
        {
          title: 'Machine-Learned Predictive Transit ETAs',
          desc: 'Real-time algorithms analyze highway congestion, monsoon bottlenecks, and border crossing delays to alert receiving docks hours ahead of arrival.'
        },
        {
          title: 'Automated Geofenced Detention Logging',
          desc: 'Exact timestamping of plant gate entry, dock positioning, unloading completion, and gate departure to resolve detention disputes with mathematical certainty.'
        },
        {
          title: 'Proactive Route Deviation & Breakdown Alerts',
          desc: 'Instant exception escalation when vehicles stray from designated green freight corridors or record unexpected stops exceeding 60 minutes.'
        }
      ],
      terminalData: {
        indentId: 'TRK-5521-TWR',
        lane: 'Chennai Automotive Corridor → Bengaluru Hosur Dock',
        equipment: '40ft Semi-Trailer (Triple Axle)',
        carrierStatus: 'Telematics Fusion Active (GPS + SIM + FASTag)',
        checkpoint: 'Sriperumbudur Toll Plaza • 06:45 AM',
        inTransitStatus: 'Normal Route Progression • Deviation: 0.0 km',
        podStatus: 'Automated Geofence Trigger at Dock 4'
      },
      stats: [
        { label: 'Tracking Refresh', value: 'Real-Time Sync' },
        { label: 'Detention Logging', value: 'Geofenced GPS' },
        { label: 'Telematics Infrastructure', value: 'GPS + SIM + FASTag' }
      ]
    },
    finance: {
      id: 'finance',
      slug: 'finance',
      badge: 'WORKING CAPITAL ACCELERATOR',
      name: 'Digital POD & Automated Freight Finance',
      title: 'Cryptographic Proof of Delivery & Instant Bill Discounting',
      lead: 'Eliminate 60-to-90 day payment cycles that handicap Indian fleet owners while removing invoice fraud, audit friction, and double-billing for enterprise CFOs.',
      features: [
        {
          title: 'Mobile Gate OCR & Digital Consignee POD',
          desc: 'Consignee stamps and signatures digitized instantly via mobile scanning with automatic tamper detection, OCR data extraction, and geo-stamping.'
        },
        {
          title: 'Instant Bill Discounting with M1xchange (TReDS)',
          desc: 'Pre-approved institutional invoice discounting disburses verified freight revenue to fleet operators within 24 hours of delivery verification.'
        },
        {
          title: 'Automated 3-Way Reconciliation Ledger',
          desc: 'Cross-checks contracted freight rates, electronic weighbridge weight slips, and verified digital PODs to auto-generate error-free tax invoices.'
        },
        {
          title: 'FASTag Toll & Diesel Expense Fuel Advances',
          desc: 'Automated cash-flow advances disbursed directly to driver fuel cards and commercial FASTag wallets upon verified plant loading.'
        }
      ],
      terminalData: {
        indentId: 'FIN-3382-POD',
        lane: 'Jamshedpur Heavy Plant → Bhiwandi Consignee Dock',
        equipment: 'Multi-Axle Heavy Hauler',
        carrierStatus: '3-Way Invoice Reconciliation Verified',
        checkpoint: 'Consignee Mobile OCR Stamp Verified • 09:12 AM',
        inTransitStatus: 'Delivered & Documented • Zero Discrepancy',
        podStatus: 'M1xchange TReDS Settlement Queued'
      },
      stats: [
        { label: 'Payment Acceleration', value: 'Same-Day TReDS' },
        { label: 'POD Verification', value: 'Mobile OCR & GPS' },
        { label: 'Financing Rail', value: 'Institutional TReDS' }
      ]
    },
    'driver-app': {
      id: 'driver-app',
      slug: 'driver-app',
      badge: 'VERNACULAR DRIVER PLATFORM',
      name: 'EasyLane Driver Companion Workflow',
      title: 'Empowering India’s Long-Haul Truck Drivers',
      lead: 'A simple, intuitive vernacular mobile application engineered for low-bandwidth highway connectivity, fast gate passes, and emergency driver welfare.',
      features: [
        {
          title: 'Multilingual Voice Assistance',
          desc: 'Available in Hindi, Marathi, Gujarati, Telugu, Tamil, and English with voice-guided gate-in instructions and route briefings.'
        },
        {
          title: 'Digital Consignment Notes & e-Way Bills',
          desc: 'Store legal e-way bills and consignment notes digitally to eliminate paper loss and smooth highway RTO checkpoint audits.'
        },
        {
          title: 'Instant Trip Advances & FASTag Top-Ups',
          desc: 'Drivers receive trip advances, fuel card allowances, and toll balances directly on their verified commercial wallets upon gate-out.'
        },
        {
          title: 'One-Tap Highway Emergency SOS',
          desc: 'Direct line to EasyLane 24/7 Mumbai operations command center for roadside mechanical assistance, medical aid, and accident support.'
        }
      ],
      terminalData: {
        indentId: 'DVR-9041-APP',
        lane: 'Nashik Agro Terminal → Azadpur Mandi, Delhi',
        equipment: 'Reefer Container (Dedicated)',
        carrierStatus: 'Driver SARATHI License Verified',
        checkpoint: 'FASTag Plaza #44 (Dhule) • 07:22 AM',
        inTransitStatus: 'Vernacular Companion Active • Language: Hindi',
        podStatus: 'SOS Monitoring Active • Emergency Desk Standby'
      },
      stats: [
        { label: 'Supported Languages', value: '6 Indian Languages' },
        { label: 'Offline Architecture', value: 'Local Cache First' },
        { label: 'Emergency Support', value: '24/7 Mumbai Ops Desk' }
      ]
    },
    'ai-routing': {
      id: 'ai-routing',
      slug: 'ai-routing',
      badge: 'INTELLIGENT CORRIDOR ROUTING',
      name: 'EasyLane AI Route & Cost Optimization',
      title: 'Machine-Learned Freight Corridor Efficiency',
      lead: 'Mathematical route dispatch that balances toll expenses, road surface conditions, elevation grades, and fuel consumption to minimize total cost per tonne-kilometer.',
      features: [
        {
          title: 'Dynamic Toll vs. Mileage Optimization',
          desc: 'Algorithms calculate whether expressway tolls justify the diesel and transit time savings for each commercial vehicle axle configuration.'
        },
        {
          title: 'Corridor Congestion & Monsoon Modeling',
          desc: 'Predictive models route freight around seasonal ghat bottlenecks, urban entry restrictions, and state border toll queues.'
        },
        {
          title: 'Axle Load & Fuel Efficiency Balancing',
          desc: 'Fuel-burn models forecast consumption based on gross vehicle weight (GVW), trailer aerodynamic profiles, and highway gradient.'
        },
        {
          title: 'Return Cargo Pairing Prediction',
          desc: 'Matches outbound destinations with projected return load availability 48 hours before destination arrival.'
        }
      ],
      terminalData: {
        indentId: 'OPT-7719-AI',
        lane: 'Pune Chakan Hub → Gurugram Auto Hub',
        equipment: 'Automobile Carrier (Double Deck)',
        carrierStatus: 'AI Corridor Trajectory Calculated',
        checkpoint: 'Eastern Peripheral Expressway • 05:30 AM',
        inTransitStatus: 'Optimal Toll vs. Fuel Profile Selected',
        podStatus: 'Return Indent Pre-Assigned at Manesar'
      },
      stats: [
        { label: 'Route Strategy', value: 'Dynamic Toll & Fuel' },
        { label: 'Corridor Optimization', value: 'Monsoon & Ghat Modeling' },
        { label: 'Highway Network', value: 'Pan-India NH / SH' }
      ]
    },
    integrations: {
      id: 'integrations',
      slug: 'integrations',
      badge: 'ENTERPRISE CONNECTIVITY',
      name: 'Enterprise ERP & Telematics Integrations',
      title: 'Seamless Connectivity with Your Existing Systems',
      lead: 'Pre-built enterprise connectors and secure RESTful webhooks that synchronize EasyLane with your SAP, Oracle, WMS, and IoT telematic providers.',
      features: [
        {
          title: 'SAP S/4HANA & ECC 6.0 Connector',
          desc: 'Bi-directional synchronization of purchase orders, stock transfer orders (STOs), goods receipts (MIGO), and freight cost accruals.'
        },
        {
          title: 'Oracle OTM & Microsoft Dynamics 365',
          desc: 'Standardized adapters for enterprise supply chain suites to stream in-transit milestones and automated gate timestamps.'
        },
        {
          title: 'National Logistics Portal (ULIP) & VAHAN APIs',
          desc: 'Direct compliance gateway with government logistics databases for instant vehicle fitness checks, driver verification, and e-way bill reconciliation.'
        },
        {
          title: 'Commercial Telematics & FASTag APIs',
          desc: 'Native integrations with major telematics hardware (WheelsEye, Fleetx, LocoNav) and NPCI NETC FASTag toll banks.'
        }
      ],
      terminalData: {
        indentId: 'API-1104-INT',
        lane: 'SAP S/4HANA PO-98442 Synchronized',
        equipment: 'Enterprise REST Webhook Endpoint',
        carrierStatus: 'ULIP Gateway Authenticated (Ministry of Logistics)',
        checkpoint: 'Real-time JSON Event Dispatched to SAP IDoc',
        inTransitStatus: 'Telemetry Ingest: 100% Verified Payloads',
        podStatus: 'Automated MIGO Goods Receipt Triggered'
      },
      stats: [
        { label: 'Integration Architecture', value: 'Secure REST & Webhooks' },
        { label: 'Compliance Connectors', value: 'ULIP & VAHAN Gateway' },
        { label: 'ERP Support', value: 'SAP, Oracle, Dynamics' }
      ]
    }
  };

  // Check if currentSub matches a dedicated capability view
  const currentCapability = capabilities[currentSub];

  return (
    <div className="platform-page">
      {/* -------------------------------------------------------------
          HERO SECTION (RAFT AESTHETIC WITH SUBTLE BREADCRUMB)
          ------------------------------------------------------------- */}
      <section className="inner-page-hero">
        <div className="page-container">
          <div className="inner-hero-breadcrumb">
            <span className="crumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => navigateTo('platform')}>Platform</span>
            {currentCapability && (
              <>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">{currentCapability.name.split('&')[0].trim()}</span>
              </>
            )}
          </div>

          <h1 className="inner-hero-title">
            {currentCapability ? currentCapability.title : 'One Connected Platform for India’s Road Logistics'}
          </h1>
          
          <p className="inner-hero-lead">
            {currentCapability 
              ? currentCapability.lead 
              : 'EasyLane unites enterprise shippers, fleet owners, and institutional capital on a single intelligent execution rail — automating indents, live tracking, and same-day freight financing.'}
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={openDemoModal} className="btn-pill btn-pill-dark">
              <span>Request Solution Consultation</span>
              <div className="btn-arrow-circle">
                <ArrowRight size={13} />
              </div>
            </button>
            <button onClick={() => navigateTo('solutions')} className="btn-pill btn-pill-primary">
              <span>Explore Shipper Solutions</span>
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          VIEW A: DEDICATED CAPABILITY PAGE VIEW
          ------------------------------------------------------------- */}
      {currentCapability ? (
        <section className="section-block">
          <div className="page-container">
            {/* Core Capability Split Feature */}
            <div className="grid-split-feature" style={{ marginBottom: '64px' }}>
              <div>
                <span className="badge-mono badge-mono-blue" style={{ marginBottom: '14px' }}>
                  {currentCapability.badge}
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.18, marginBottom: '20px' }}>
                  {currentCapability.name}
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '28px' }}>
                  {currentCapability.lead}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '36px' }}>
                  {currentCapability.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={18} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '14.5px', color: 'var(--navy-deep)', marginBottom: '3px' }}>
                          {feat.title}
                        </strong>
                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                          {feat.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <button onClick={openDemoModal} className="btn-pill btn-pill-dark">
                    <span>Schedule Technical Deep-Dive</span>
                    <ArrowRight size={13} />
                  </button>
                  <button onClick={() => navigateTo('platform')} className="btn-pill btn-pill-primary">
                    <span>All Platform Capabilities</span>
                  </button>
                </div>
              </div>

              {/* Raft-Style Technical Telematics Terminal */}
              <div className="telematics-terminal-card">
                <div className="terminal-header-bar">
                  <div className="terminal-dots">
                    <span className="terminal-dot" style={{ background: '#EF4444' }} />
                    <span className="terminal-dot" style={{ background: '#F59E0B' }} />
                    <span className="terminal-dot" style={{ background: '#10B981' }} />
                  </div>
                  <span className="terminal-title">OPERATIONAL TELEMETRY TERMINAL</span>
                  <span className="terminal-status-chip">LIVE RECONCILIATION</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '20px' }}>
                  <div className="terminal-metric-row">
                    <span className="terminal-metric-label">IDENTIFIER</span>
                    <span className="terminal-metric-value">{currentCapability.terminalData.indentId}</span>
                  </div>
                  <div className="terminal-metric-row">
                    <span className="terminal-metric-label">CORRIDOR</span>
                    <span className="terminal-metric-value" style={{ textAlign: 'right', fontSize: '12px' }}>{currentCapability.terminalData.lane}</span>
                  </div>
                  <div className="terminal-metric-row">
                    <span className="terminal-metric-label">EQUIPMENT</span>
                    <span className="terminal-metric-value">{currentCapability.terminalData.equipment}</span>
                  </div>
                  <div className="terminal-metric-row">
                    <span className="terminal-metric-label">COMPLIANCE</span>
                    <span className="terminal-metric-value" style={{ color: '#10B981' }}>{currentCapability.terminalData.carrierStatus}</span>
                  </div>
                  <div className="terminal-metric-row">
                    <span className="terminal-metric-label">CHECKPOINT</span>
                    <span className="terminal-metric-value">{currentCapability.terminalData.checkpoint}</span>
                  </div>
                  <div className="terminal-metric-row">
                    <span className="terminal-metric-label">PROGRESS</span>
                    <span className="terminal-metric-value" style={{ color: 'var(--accent-yellow)' }}>{currentCapability.terminalData.inTransitStatus}</span>
                  </div>
                  <div className="terminal-metric-row" style={{ borderBottom: 'none' }}>
                    <span className="terminal-metric-label">POD PROTOCOL</span>
                    <span className="terminal-metric-value">{currentCapability.terminalData.podStatus}</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-md)', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>GOVERNANCE PROTOCOL</span>
                  <span style={{ fontSize: '11.5px', color: '#38BDF8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <ShieldCheck size={14} /> National ULIP &amp; VAHAN Integrated
                  </span>
                </div>
              </div>
            </div>

            {/* Operational Lifecycle in Responsive 4-Column Grid */}
            <div style={{ background: 'var(--canvas-secondary)', borderRadius: 'var(--radius-2xl)', padding: '48px 36px', marginBottom: '64px' }}>
              <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto 36px' }}>
                <span className="badge-mono badge-mono-blue" style={{ marginBottom: '10px' }}>
                  OPERATIONAL LIFECYCLE
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                  How {currentCapability.name.split('&')[0].trim()} Executes in Production
                </h3>
              </div>

              <div className="grid-4col-responsive">
                <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--brand-blue)' }}>STAGE 01</span>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-deep)', margin: '8px 0 6px' }}>Digital Trigger</h4>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Trip indent created automatically via ERP webhook or manual plant dispatch scheduler.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--brand-blue)' }}>STAGE 02</span>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-deep)', margin: '8px 0 6px' }}>VAHAN &amp; SARATHI Check</h4>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Automated fitness, commercial permit, tax receipt, and driver license authenticity check.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--brand-blue)' }}>STAGE 03</span>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-deep)', margin: '8px 0 6px' }}>Multi-Sensor Tracking</h4>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    In-transit monitoring via GPS, cell-tower SIM pings, and FASTag toll plaza triggers.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--brand-blue)' }}>STAGE 04</span>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-deep)', margin: '8px 0 6px' }}>Verified Settlement</h4>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Consignee mobile OCR ePOD instantly triggers 3-way match and optional TReDS invoice discounting.
                  </p>
                </div>
              </div>
            </div>

            {/* Adjacent Capabilities Switcher */}
            <div>
              <span className="badge-mono badge-mono-blue" style={{ marginBottom: '14px' }}>
                EXPLORE ADJACENT PLATFORM MODULES
              </span>
              <div className="grid-3col-responsive" style={{ marginTop: '16px' }}>
                {Object.values(capabilities)
                  .filter(c => c.slug !== currentSub)
                  .slice(0, 3)
                  .map((c) => (
                    <div
                      key={c.id}
                      onClick={() => navigateTo(`platform/${c.slug}`)}
                      style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '24px', cursor: 'pointer', transition: 'all var(--transition-fast)', boxShadow: 'var(--shadow-sm)' }}
                    >
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--brand-blue)', fontWeight: 700 }}>
                        {c.badge}
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: 'var(--navy-deep)', margin: '8px 0 6px' }}>
                        {c.name}
                      </h4>
                      <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '14px' }}>
                        {c.lead.slice(0, 95)}...
                      </p>
                      <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--brand-blue)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        Explore Capability <ArrowUpRight size={13} />
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* -------------------------------------------------------------
            VIEW B: MAIN PLATFORM OVERVIEW (ALL MODULES)
            ------------------------------------------------------------- */
        <section className="section-block">
          <div className="page-container">
            {/* Interactive Pillar Selector */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveModule('tms')}
                className={`btn-pill ${activeModule === 'tms' ? 'btn-pill-dark' : 'btn-pill-primary'}`}
              >
                <Truck size={15} />
                <span>Autonomous TMS &amp; Dispatch</span>
              </button>
              <button
                onClick={() => setActiveModule('controlTower')}
                className={`btn-pill ${activeModule === 'controlTower' ? 'btn-pill-dark' : 'btn-pill-primary'}`}
              >
                <Activity size={15} />
                <span>Real-Time Control Tower</span>
              </button>
              <button
                onClick={() => setActiveModule('finance')}
                className={`btn-pill ${activeModule === 'finance' ? 'btn-pill-dark' : 'btn-pill-primary'}`}
              >
                <CreditCard size={15} />
                <span>Digital ePOD &amp; Freight FinTech</span>
              </button>
            </div>

            {/* Active Pillar Card Display */}
            {activeModule === 'tms' && (
              <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-2xl)', padding: '40px', boxShadow: 'var(--shadow-md)', marginBottom: '56px' }}>
                <div className="grid-split-feature">
                  <div>
                    <span className="badge-mono badge-mono-blue" style={{ marginBottom: '14px' }}>
                      PILLAR 01 • AUTONOMOUS EXECUTION
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '16px' }}>
                      Transportation Management System (TMS)
                    </h2>
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
                      Designed specifically for full truckload (FTL) manufacturing freight in India. Connects directly with National VAHAN APIs for instant compliance checks, optimizes corridor load matching, and automates spot RFQ bidding.
                    </p>
                    <div className="grid-2col-responsive" style={{ marginBottom: '28px' }}>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>Automated Indent Scheduling</span>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>National VAHAN API Check</span>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>Corridor Backhaul Pairing</span>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>Digital Gate Passes</span>
                      </div>
                    </div>
                    <button onClick={() => navigateTo('platform/tms')} className="btn-pill btn-pill-dark">
                      <span>Explore TMS Deep Dive</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>

                  <div style={{ background: 'var(--canvas-secondary)', padding: '28px', borderRadius: 'var(--radius-xl)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                      OPERATIONAL ADVANTAGE • TMS
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>INDENT ALLOCATION</span>
                        <strong style={{ fontSize: '18px', color: 'var(--brand-blue)' }}>Automated Spot &amp; Contract RFQ</strong>
                      </div>
                      <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>CARRIER COMPLIANCE</span>
                        <strong style={{ fontSize: '18px', color: 'var(--status-emerald)' }}>100% VAHAN &amp; SARATHI Verified</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModule === 'controlTower' && (
              <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-2xl)', padding: '40px', boxShadow: 'var(--shadow-md)', marginBottom: '56px' }}>
                <div className="grid-split-feature">
                  <div>
                    <span className="badge-mono badge-mono-blue" style={{ marginBottom: '14px' }}>
                      PILLAR 02 • MULTI-SENSOR SURVEILLANCE
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '16px' }}>
                      Real-Time Exception Center &amp; Control Tower
                    </h2>
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
                      A single consolidated glass cockpit for operations teams. Consolidates proprietary GPS devices, driver cellular SIM triangulation, and national FASTag toll plaza reads to eliminate visibility blind spots.
                    </p>
                    <div className="grid-2col-responsive" style={{ marginBottom: '28px' }}>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>FASTag Toll Checkpoint Sync</span>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>SIM Cellular Triangulation</span>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>Automated Detention Logging</span>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>Route Stoppage Alerts</span>
                      </div>
                    </div>
                    <button onClick={() => navigateTo('platform/control-tower')} className="btn-pill btn-pill-dark">
                      <span>Explore Control Tower Deep Dive</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>

                  <div style={{ background: 'var(--canvas-secondary)', padding: '28px', borderRadius: 'var(--radius-xl)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                      VISIBILITY INFRASTRUCTURE
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>TELEMATICS FUSION</span>
                        <strong style={{ fontSize: '18px', color: 'var(--brand-blue)' }}>GPS + SIM + 1,000+ FASTag Plazas</strong>
                      </div>
                      <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>AUDIT TRAIL</span>
                        <strong style={{ fontSize: '18px', color: 'var(--status-emerald)' }}>Tamper-Proof Geofenced Timestamps</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModule === 'finance' && (
              <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-2xl)', padding: '40px', boxShadow: 'var(--shadow-md)', marginBottom: '56px' }}>
                <div className="grid-split-feature">
                  <div>
                    <span className="badge-mono badge-mono-blue" style={{ marginBottom: '14px' }}>
                      PILLAR 03 • FREIGHT FINTECH
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '16px' }}>
                      Digital ePOD &amp; Automated Freight Finance
                    </h2>
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
                      Bridges the cash-flow gap for Indian transport operators. Mobile OCR captures physical consignee stamps at the unloading dock, instantly initiating 3-way reconciliation and same-day TReDS invoice discounting.
                    </p>
                    <div className="grid-2col-responsive" style={{ marginBottom: '28px' }}>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>Mobile Camera OCR Scanning</span>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>TReDS Invoice Discounting</span>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>Automated 3-Way Reconciliation</span>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>FASTag Toll Fuel Advances</span>
                      </div>
                    </div>
                    <button onClick={() => navigateTo('platform/finance')} className="btn-pill btn-pill-dark">
                      <span>Explore Freight FinTech Deep Dive</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>

                  <div style={{ background: 'var(--canvas-secondary)', padding: '28px', borderRadius: 'var(--radius-xl)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                      FINANCIAL LIQUIDITY
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>PAYMENT CYCLE</span>
                        <strong style={{ fontSize: '18px', color: 'var(--brand-blue)' }}>24 Hours vs. 60-90 Days</strong>
                      </div>
                      <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>FINANCING PARTNERS</span>
                        <strong style={{ fontSize: '18px', color: 'var(--status-emerald)' }}>M1xchange &amp; Major Banks</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Platform Full Capability Matrix */}
            <div style={{ marginBottom: '64px' }}>
              <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto 36px' }}>
                <span className="badge-mono badge-mono-blue" style={{ marginBottom: '10px' }}>
                  THE COMPLETE ARCHITECTURE
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                  Six Integrated Execution Layers
                </h3>
              </div>

              <div className="grid-3col-responsive">
                {Object.values(capabilities).map((cap) => (
                  <div
                    key={cap.id}
                    onClick={() => navigateTo(`platform/${cap.slug}`)}
                    style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '28px', cursor: 'pointer', transition: 'all var(--transition-fast)', boxShadow: 'var(--shadow-sm)' }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--brand-blue)', fontWeight: 700 }}>
                      {cap.badge}
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', margin: '10px 0 8px' }}>
                      {cap.name}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
                      {cap.lead}
                    </p>
                    <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--brand-blue)' }}>
                        View Technical Specs
                      </span>
                      <ArrowRight size={13} color="var(--brand-blue)" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Integrations Block */}
            <div style={{ background: '#070E1E', borderRadius: 'var(--radius-2xl)', padding: '48px 36px', color: '#FFFFFF' }}>
              <div className="grid-split-feature">
                <div>
                  <span className="badge-mono" style={{ color: 'var(--accent-yellow)', background: 'rgba(252, 207, 63, 0.1)', border: '1px solid rgba(252, 207, 63, 0.25)', marginBottom: '16px' }}>
                    ENTERPRISE INTEGRATION ECOSYSTEM
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px' }}>
                    Plug EasyLane into SAP, Oracle, and National ULIP APIs
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '24px' }}>
                    Deploy EasyLane alongside your existing ERP without operational disruption. Our RESTful APIs and pre-built connectors automate transport order dispatch and sync status events directly to your ledger.
                  </p>
                  <button onClick={() => navigateTo('platform/integrations')} className="btn-pill btn-pill-primary">
                    <span>Explore Enterprise Connectors</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

                <div className="grid-2col-responsive">
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)', padding: '20px' }}>
                    <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '6px' }}>SAP &amp; Oracle SCM</strong>
                    <span style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5 }}>
                      Bi-directional sync of POs, STOs, goods receipts, and freight accruals.
                    </span>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)', padding: '20px' }}>
                    <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '6px' }}>National ULIP &amp; VAHAN</strong>
                    <span style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5 }}>
                      Instant vehicle fitness checks, commercial permit audits, and driver validity.
                    </span>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)', padding: '20px' }}>
                    <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '6px' }}>FASTag NETC Network</strong>
                    <span style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5 }}>
                      Automated toll plaza passage timestamps from 1,000+ national plazas.
                    </span>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)', padding: '20px' }}>
                    <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '6px' }}>M1xchange TReDS</strong>
                    <span style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5 }}>
                      Direct institutional factoring and bill discounting for transporter liquidity.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* -------------------------------------------------------------
          BOTTOM ACTION CTA BANNER
          ------------------------------------------------------------- */}
      <section className="section-block" style={{ paddingTop: 0 }}>
        <div className="page-container">
          <div style={{ background: 'var(--navy-deep)', borderRadius: 'var(--radius-2xl)', padding: '48px 36px', textAlign: 'center', color: '#FFFFFF' }}>
            <span className="badge-mono" style={{ color: 'var(--accent-yellow)', background: 'rgba(252, 207, 63, 0.1)', border: '1px solid rgba(252, 207, 63, 0.25)', marginBottom: '16px' }}>
              EXPERIENCE THE PLATFORM
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px' }}>
              Ready to Upgrade Your Freight Operations?
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Whether you ship hundreds of manufacturing loads monthly or manage a commercial fleet, EasyLane delivers verified efficiency.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={openDemoModal} className="btn-pill btn-pill-primary">
                <span>Book a Guided Demo</span>
                <div className="btn-arrow-circle">
                  <ArrowRight size={13} />
                </div>
              </button>
              <button onClick={() => navigateTo('contact')} className="btn-pill btn-pill-dark" style={{ border: '1px solid var(--navy-border)' }}>
                <span>Connect with Logistics Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

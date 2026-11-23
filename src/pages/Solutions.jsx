import React, { useState } from 'react';
import { 
  Building2, 
  Truck, 
  Landmark, 
  ArrowRight, 
  CheckCircle2, 
  Calculator, 
  TrendingUp, 
  ArrowUpRight,
  ShieldCheck,
  Percent,
  Compass,
  Users,
  Smartphone,
  Layers,
  FileCheck,
  Radio,
  Coins
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Solutions({ subRoute = '' }) {
  const { openDemoModal, navigateTo } = useNavigation();

  const currentSub = subRoute.toLowerCase();

  // Interactive ROI Calculator State for main overview
  const [monthlySpend, setMonthlySpend] = useState(50); // in Lakhs INR
  const [emptyRunPercent, setEmptyRunPercent] = useState(25); // percentage

  const calculatedSavings = Math.round(monthlySpend * 0.12 * 10) / 10;
  const deadheadReductionSavings = Math.round(monthlySpend * (emptyRunPercent / 100) * 0.45 * 10) / 10;
  const totalAnnualSavings = Math.round((calculatedSavings + deadheadReductionSavings) * 12);

  // Audience & Capability Dictionary
  const solutionsData = {
    enterprises: {
      slug: 'enterprises',
      badge: 'FOR ENTERPRISE SHIPPERS & MNCS',
      title: 'Assured Freight Placement & Cost Predictability',
      lead: 'Manufacturing supply chains cannot tolerate missed dispatches, rogue detention disputes, or surprise spot-rate spikes. EasyLane provides contracted freight capacity with automated SLA accountability.',
      icon: <Building2 size={24} />,
      points: [
        {
          title: 'Automated Indent Allocation & Capacity Matching',
          desc: 'Instant matching with vetted commercial carriers based on historical corridor performance, VAHAN fitness, and geographical proximity.'
        },
        {
          title: 'Real-Time Plant In-Gate / Out-Gate Surveillance',
          desc: 'Automated geofencing records exact dock arrival, turnaround time, and loading completion, eliminating fraudulent driver detention fees.'
        },
        {
          title: '100% Tax & E-Way Bill Reconciliation',
          desc: 'Direct integration with GST e-invoicing and e-way bill portals guarantees seamless audit compliance and zero penalty exposure.'
        },
        {
          title: 'Enterprise ERP Connectors (SAP & Oracle)',
          desc: 'Bi-directional synchronization of purchase orders, stock transfer orders (STOs), and goods receipts (MIGO) directly with your ERP.'
        }
      ],
      metrics: [
        { label: 'Contract Accountability', value: 'SLA-Driven' },
        { label: 'Detention Disputes', value: 'Geofence-Verified' },
        { label: 'Reconciliation', value: '100% Tax & GST Ready' }
      ]
    },
    transporters: {
      slug: 'transporters',
      badge: 'FOR FLEET OWNERS & TRANSPORTERS',
      title: 'Maximized Truck Utilization & 24-Hour Cash Settlement',
      lead: 'Stop burning diesel on empty return runs and waiting 60 to 90 days for freight payments. EasyLane pairs your fleet with return cargo opportunities and unlocks bill discounting upon verified delivery.',
      icon: <Truck size={24} />,
      points: [
        {
          title: 'Algorithmic Return-Load (Backhaul) Pairing',
          desc: 'Our corridor pairing algorithm matches return indents before your truck finishes unloading at the primary delivery facility.'
        },
        {
          title: 'Instant Bill Discounting via M1xchange (TReDS)',
          desc: 'Access verified freight liquidity within 24 hours of uploading a validated consignee proof of delivery (ePOD).'
        },
        {
          title: 'Direct Shipper Contracts Without Broker Cuts',
          desc: 'Work directly with institutional manufacturing shippers, eliminating predatory middlemen taking substantial cuts of freight revenue.'
        },
        {
          title: 'Automated FASTag & Diesel Advance Wallets',
          desc: 'Receive immediate toll allowances and fuel cash advances directly into commercial wallets as soon as the vehicle is loaded.'
        }
      ],
      metrics: [
        { label: 'Backhaul Objective', value: 'Corridor Optimization' },
        { label: 'Payment Velocity', value: '24 Hours via TReDS' },
        { label: 'Fleet Profitability', value: 'Round-Trip Utilization' }
      ]
    },
    'logistics-teams': {
      slug: 'logistics-teams',
      badge: 'FOR LOGISTICS OPERATIONS TEAMS',
      title: 'A Single Central Control Tower for National Freight',
      lead: 'Replace endless phone calls, disparate WhatsApp tracking groups, and spreadsheets with one centralized exception dashboard covering every shipment in transit across India.',
      icon: <Compass size={24} />,
      points: [
        {
          title: 'Telemetry Fusion (GPS + SIM + FASTag)',
          desc: 'Gain real-time visibility across all transport vendors, whether vehicles have onboard GPS hardware or rely on SIM cellular tracking.'
        },
        {
          title: 'Predictive Transit Delay Escalation',
          desc: 'Machine-learning models anticipate highway bottlenecks and state border queues, triggering proactive alerts hours before delivery deadlines.'
        },
        {
          title: 'Digital Gate Passes & Yard Management',
          desc: 'Streamline warehouse entry with electronic gate passes, automated weighbridge integration, and priority unloading queues.'
        },
        {
          title: 'Automated Carrier SLA Benchmarking',
          desc: 'Score vendors objectively on on-time dispatch (OTD), in-transit adherence, and document return velocity to optimize contract allocations.'
        }
      ],
      metrics: [
        { label: 'Telematics Fusion', value: 'GPS + SIM + FASTag' },
        { label: 'Exception Handling', value: 'Sub-Second Alerts' },
        { label: 'Status Updates', value: 'Automated Sync' }
      ]
    },
    drivers: {
      slug: 'drivers',
      badge: 'FOR DRIVERS & FIELD CREWS',
      title: 'Dignity, Transparent Pay, and Safety on the Highway',
      lead: 'India’s long-haul truck drivers keep the nation moving. EasyLane provides a multilingual mobile companion app designed to eliminate roadside friction, simplify gate passes, and provide emergency roadside help.',
      icon: <Smartphone size={24} />,
      points: [
        {
          title: 'Vernacular Interface in 6 Indian Languages',
          desc: 'Simple mobile workflows available in Hindi, Marathi, Gujarati, Telugu, Tamil, and English with voice-guided gate-in instructions.'
        },
        {
          title: 'Digital Consignment Notes & E-Way Bills',
          desc: 'Store legal trip documents securely on the driver’s smartphone to avoid paper misplacement and simplify state RTO highway checks.'
        },
        {
          title: 'Fast Fuel & Toll Cash Advances',
          desc: 'Instant disbursements directly to driver FASTag and commercial fuel cards upon verified departure from loading facilities.'
        },
        {
          title: '24/7 Roadside Assistance & Emergency SOS',
          desc: 'Direct connection to EasyLane Mumbai command center for highway breakdown support, emergency medical aid, and accident assistance.'
        }
      ],
      metrics: [
        { label: 'Driver Interface', value: '6 Indian Languages' },
        { label: 'Emergency Response', value: '24/7 Command Center' },
        { label: 'Digital Documents', value: 'Paperless e-Way Bills' }
      ]
    },
    ftl: {
      slug: 'ftl',
      badge: 'CAPABILITY • FULL TRUCKLOAD',
      title: 'National FTL Long-Haul Linehaul Network',
      lead: 'High-density dedicated primary linehauls operating on India’s Golden Quadrilateral and major industrial corridors, optimized for automotive, steel, and FMCG.',
      icon: <Layers size={24} />,
      points: [
        {
          title: 'Dedicated 32ft Multi-Axle & Containerized Trailers',
          desc: 'Engineered for volumetric industrial cargo, FMCG pallets, and high-value white goods requiring sealed containerized transit.'
        },
        {
          title: 'Pre-Vetted Driver & Vehicle Compliance',
          desc: 'Every vehicle undergoes automated National VAHAN qualification check for fitness, road tax validity, and commercial insurance.'
        },
        {
          title: 'Assured Round-Trip Corridor Capacity',
          desc: 'Long-term contractual capacity allocations on major corridors like Delhi-NCR to Mumbai-MMR and Chennai to Bengaluru.'
        },
        {
          title: 'Digital Gate In-Pass & Weighbridge Integration',
          desc: 'Seamless electronic gate verification with zero paperwork stops at plant docks, reducing gate turnaround time.'
        }
      ],
      metrics: [
        { label: 'Trailer Form Factor', value: '32ft Multi-Axle' },
        { label: 'Corridor Strategy', value: 'Continuous Backhaul' },
        { label: 'Vehicle Verification', value: 'Direct VAHAN Check' }
      ]
    },
    ptl: {
      slug: 'ptl',
      badge: 'CAPABILITY • PARTIAL TRUCKLOAD',
      title: 'Consolidated PTL & Multi-Drop Logistics',
      lead: 'Smart cargo aggregation for high-value partial shipments that demand express linehaul speed and tamper-proof security without paying for full trailer capacity.',
      icon: <Compass size={24} />,
      points: [
        {
          title: 'Dynamic Space Consolidation',
          desc: 'Algorithms aggregate partial consignments moving along identical highway corridors into unified full-trailer dispatches.'
        },
        {
          title: 'Hub-and-Spoke Cross-Dock Visibility',
          desc: 'Barcode and QR scanning at consolidation hubs ensures real-time tracking of individual pallets and freight bundles.'
        },
        {
          title: 'Multi-Point Pickup & Drop Routing',
          desc: 'Optimized routing reduces total transit time while managing multiple regional dispatch and delivery windows.'
        },
        {
          title: 'Transparent Weight Reconciliation',
          desc: 'Integration with electronic weighbridge data ensures fair volumetric billing without weight discrepancy disputes.'
        }
      ],
      metrics: [
        { label: 'Cargo Tracking', value: 'Barcode & QR Itemized' },
        { label: 'Consolidation', value: 'Volumetric Optimization' },
        { label: 'Weight Auditing', value: 'Electronic Weighbridge' }
      ]
    },
    billing: {
      slug: 'billing',
      badge: 'CAPABILITY • FREIGHT FINTECH',
      title: 'Automated Billing & Same-Day Freight Settlements',
      lead: 'Eliminate paperwork delays, manual bill reconciliation, and predatory credit terms with automated 3-way matching and institutional invoice discounting.',
      icon: <Coins size={24} />,
      points: [
        {
          title: 'Mobile Gate OCR & Digital Consignee POD',
          desc: 'Consignee stamps and signatures digitized instantly via mobile scanning with automatic tamper detection, OCR data extraction, and geo-stamping.'
        },
        {
          title: 'Pre-Approved TReDS Discounting (M1xchange)',
          desc: 'Institutional invoice discounting disburses verified freight revenue to fleet operators within 24 hours of verified proof of delivery.'
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
      metrics: [
        { label: 'Invoice Matching', value: 'Automated 3-Way' },
        { label: 'Reconciliation Audit', value: '100% Tax & E-Way Ready' },
        { label: 'Liquidity Access', value: 'Same-Day TReDS Option' }
      ]
    },
    tracking: {
      slug: 'tracking',
      badge: 'CAPABILITY • TELEMATICS FUSION',
      title: 'FASTag & Hardware-Free SIM Cellular Tracking',
      lead: 'Track every truck in India without demanding costly proprietary GPS hardware. Combines NPCI NETC FASTag toll checkpoints with cellular SIM triangulation.',
      icon: <Radio size={24} />,
      points: [
        {
          title: 'Zero Proprietary Hardware Requirement',
          desc: 'Onboard spot-market and ad-hoc market vehicles in seconds without requiring upfront hardware installations or technician visits.'
        },
        {
          title: 'National Toll Plaza Checkpoint Streaming',
          desc: 'Captures automated timestamps as commercial vehicles pass through India’s 1,000+ national FASTag toll plazas.'
        },
        {
          title: 'Consensual Cellular SIM Triangulation',
          desc: 'Receives cellular network tower pings to track vehicle progression along major state and national highways.'
        },
        {
          title: 'Automated Geofence Detection',
          desc: 'Logs exact plant entry and departure times to establish an undeniable audit trail for detention management.'
        }
      ],
      metrics: [
        { label: 'Hardware Requirement', value: 'Hardware-Free SIM & FASTag' },
        { label: 'Onboarding Time', value: 'Instant via Mobile' },
        { label: 'National Checkpoints', value: '1,000+ FASTag Plazas' }
      ]
    },
    partners: {
      slug: 'partners',
      badge: 'CAPABILITY • INSTITUTIONAL PARTNERS',
      title: 'For NBFCs, Institutional Financiers & Fuel Providers',
      lead: 'Underwrite logistics working capital with zero fraud risk. Verified shipment telematics, tamper-proof ePODs, and direct manufacturer billing.',
      icon: <Landmark size={24} />,
      points: [
        {
          title: 'Cryptographic Proof of Delivery Verification',
          desc: 'Every discounted invoice is backed by GPS-stamped, OCR-verified consignee proof of delivery, eliminating duplicate and phantom invoices.'
        },
        {
          title: 'Real-Time In-Transit Collateral Monitoring',
          desc: 'Monitor cargo movement and vehicle location continuously until physical consignee handover is confirmed.'
        },
        {
          title: 'Direct Manufacturer Escrow Settlement',
          desc: 'Payments settle directly from enterprise shipper escrow accounts, ensuring guaranteed repayment upon contractual credit maturity.'
        },
        {
          title: 'Seamless TReDS Integration',
          desc: 'Integrated with national trade discounting platforms (M1xchange) for streamlined statutory compliance and liquidity.'
        }
      ],
      metrics: [
        { label: 'Audit Security', value: 'GPS & OCR Verified PODs' },
        { label: 'Financing Rail', value: 'M1xchange TReDS Platform' },
        { label: 'Ledger Integrity', value: 'Automated 3-Way Matching' }
      ]
    },
    'return-load': {
      slug: 'return-load',
      badge: 'CAPABILITY • BACKHAUL OPTIMIZATION',
      title: 'Return-Load Optimization & Backhaul Pairing',
      lead: 'Systematically eliminates empty kilometers on major Indian freight lanes, transforming fleet profitability while shrinking national transport carbon emissions.',
      icon: <TrendingUp size={24} />,
      points: [
        {
          title: 'Predictive Corridor Balancing',
          desc: 'Algorithms forecast inbound freight arrival and automatically search for outbound cargo within regional proximity of destination docks.'
        },
        {
          title: 'Pre-Booked Return Freight',
          desc: 'Transporters receive return indents before outbound delivery is executed, eliminating idle waiting in transport nagars.'
        },
        {
          title: 'Shared Savings Economics',
          desc: 'Shippers benefit from predictable contract rates while transporters enjoy round-trip utilization on every vehicle dispatched.'
        },
        {
          title: 'Measurable ESG Carbon Reduction',
          desc: 'Directly cuts diesel burn and carbon emissions, providing auditable ESG green freight documentation for corporate shippers.'
        }
      ],
      metrics: [
        { label: 'Backhaul Objective', value: 'Targeting Up to 40% Empty-Mile Cut' },
        { label: 'Corridor Strategy', value: 'Continuous Industrial Pairing' },
        { label: 'Carbon Impact', value: 'Auditable ESG Tracking' }
      ]
    }
  };

  const currentSolution = solutionsData[currentSub];

  return (
    <div className="solutions-page">
      {/* -------------------------------------------------------------
          HERO SECTION (RAFT AESTHETIC WITH SUBTLE BREADCRUMB)
          ------------------------------------------------------------- */}
      <section className="inner-page-hero">
        <div className="page-container">
          <div className="inner-hero-breadcrumb">
            <span className="crumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => navigateTo('solutions')}>Solutions</span>
            {currentSolution && (
              <>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">{currentSolution.badge.replace(/^FOR\s+/i, '').replace(/^CAPABILITY\s*•\s*/i, '')}</span>
              </>
            )}
          </div>

          <h1 className="inner-hero-title">
            {currentSolution ? currentSolution.title : 'Engineered for Shippers, Fleet Owners, and Capital Partners'}
          </h1>

          <p className="inner-hero-lead">
            {currentSolution 
              ? currentSolution.lead 
              : 'Whether you operate hundreds of multi-axle trucks or move thousands of tonnes of manufacturing cargo monthly, EasyLane solves your core operational bottlenecks.'}
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={openDemoModal} className="btn-pill btn-pill-dark">
              <span>Request Solution Consultation</span>
              <div className="btn-arrow-circle">
                <ArrowRight size={13} />
              </div>
            </button>
            <button onClick={() => navigateTo('platform')} className="btn-pill btn-pill-primary">
              <span>View Technical Platform</span>
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          VIEW A: DEDICATED AUDIENCE / CAPABILITY SOLUTION VIEW
          ------------------------------------------------------------- */}
      {currentSolution ? (
        <section className="section-block">
          <div className="page-container">
            <div className="grid-split-feature" style={{ marginBottom: '64px' }}>
              <div>
                <span className="badge-mono badge-mono-blue" style={{ marginBottom: '14px' }}>
                  {currentSolution.badge}
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.18, marginBottom: '20px' }}>
                  {currentSolution.title}
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '28px' }}>
                  {currentSolution.lead}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '36px' }}>
                  {currentSolution.points.map((pt, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={18} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '14.5px', color: 'var(--navy-deep)', marginBottom: '3px' }}>
                          {pt.title}
                        </strong>
                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                          {pt.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <button onClick={openDemoModal} className="btn-pill btn-pill-dark">
                    <span>Schedule Solution Briefing</span>
                    <ArrowRight size={13} />
                  </button>
                  <button onClick={() => navigateTo('platform')} className="btn-pill btn-pill-primary">
                    <span>Explore Underlying Technology</span>
                  </button>
                </div>
              </div>

              {/* Verified Metrics Card */}
              <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-2xl)', padding: '36px', boxShadow: 'var(--shadow-md)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  OPERATIONAL OBJECTIVES &amp; IMPACT
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '22px', marginBottom: '24px' }}>
                  {currentSolution.metrics.map((m, i) => (
                    <div key={i} style={{ background: 'var(--canvas-secondary)', padding: '18px 20px', borderRadius: 'var(--radius-md)' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                        {m.label}
                      </span>
                      <strong style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--brand-blue)' }}>
                        {m.value}
                      </strong>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Proven on key freight lanes</span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--status-emerald)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck size={14} /> 100% Tax &amp; GST Compliant
                  </span>
                </div>
              </div>
            </div>

            {/* Related Solutions Switcher in Responsive 3-Column Grid */}
            <div>
              <span className="badge-mono badge-mono-blue" style={{ marginBottom: '14px' }}>
                EXPLORE OTHER STAKEHOLDER SOLUTIONS
              </span>
              <div className="grid-3col-responsive" style={{ marginTop: '16px' }}>
                {Object.values(solutionsData)
                  .filter(s => s.slug !== currentSub)
                  .slice(0, 3)
                  .map((s) => (
                    <div
                      key={s.slug}
                      onClick={() => navigateTo(`solutions/${s.slug}`)}
                      style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '24px', cursor: 'pointer', transition: 'all var(--transition-fast)', boxShadow: 'var(--shadow-sm)' }}
                    >
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--brand-blue)', fontWeight: 700 }}>
                        {s.badge}
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: 'var(--navy-deep)', margin: '8px 0 6px' }}>
                        {s.title}
                      </h4>
                      <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '14px' }}>
                        {s.lead.slice(0, 95)}...
                      </p>
                      <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--brand-blue)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        View Solution <ArrowUpRight size={13} />
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* -------------------------------------------------------------
            VIEW B: SOLUTIONS OVERVIEW & ROI CALCULATOR
            ------------------------------------------------------------- */
        <section className="section-block">
          <div className="page-container">
            {/* Interactive ROI Calculator */}
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-2xl)', padding: '40px', boxShadow: 'var(--shadow-md)', marginBottom: '56px' }}>
              <div className="grid-split-feature">
                <div>
                  <span className="badge-mono badge-mono-blue" style={{ marginBottom: '14px' }}>
                    <Calculator size={12} style={{ marginRight: '6px' }} />
                    INTERACTIVE LOGISTICS ROI CALCULATOR
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '14px' }}>
                    Calculate Your Projected Annual Freight Savings
                  </h2>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
                    Adjust your monthly freight spend and current estimated deadhead percentage to see how algorithmic dispatch and backhaul pairing reduce transportation costs.
                  </p>

                  {/* Slider 1: Monthly Spend */}
                  <div style={{ marginBottom: '22px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--navy-deep)' }}>
                        Monthly Road Freight Spend:
                      </label>
                      <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: 'var(--brand-blue)' }}>
                        ₹{monthlySpend} Lakhs / month
                      </strong>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      step="5"
                      value={monthlySpend}
                      onChange={(e) => setMonthlySpend(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--brand-blue)', cursor: 'pointer' }}
                    />
                  </div>

                  {/* Slider 2: Empty Run % */}
                  <div style={{ marginBottom: '28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--navy-deep)' }}>
                        Current Empty Backhaul (Deadhead) Estimate:
                      </label>
                      <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: 'var(--brand-blue)' }}>
                        {emptyRunPercent}% of Total Runs
                      </strong>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="40"
                      step="1"
                      value={emptyRunPercent}
                      onChange={(e) => setEmptyRunPercent(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--brand-blue)', cursor: 'pointer' }}
                    />
                  </div>

                  <button onClick={openDemoModal} className="btn-pill btn-pill-dark">
                    <span>Request Custom Enterprise Audit</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

                {/* Calculator Results Display */}
                <div style={{ background: 'var(--canvas-secondary)', padding: '32px', borderRadius: 'var(--radius-xl)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    ESTIMATED VALUE RECOVERY
                  </span>

                  <div style={{ margin: '18px 0 22px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                      Projected Annual Freight Savings:
                    </span>
                    <strong style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 3.8vw, 44px)', fontWeight: 700, color: 'var(--status-emerald)' }}>
                      ₹{totalAnnualSavings.toLocaleString('en-IN')} Lakhs
                    </strong>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>
                      per year in combined efficiency gains
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid var(--border-medium)', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Direct Contract Benchmarking:</span>
                      <strong style={{ color: 'var(--navy-deep)' }}>₹{(calculatedSavings * 12).toFixed(1)} Lakhs / yr</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Deadhead &amp; Empty Run Reduction:</span>
                      <strong style={{ color: 'var(--navy-deep)' }}>₹{(deadheadReductionSavings * 12).toFixed(1)} Lakhs / yr</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audience Solutions Showcase Cards */}
            <div style={{ marginBottom: '64px' }}>
              <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto 36px' }}>
                <span className="badge-mono badge-mono-blue" style={{ marginBottom: '10px' }}>
                  TAILORED LOGISTICS SUITES
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                  Custom Architectures for Every Stakeholder
                </h3>
              </div>

              <div className="grid-3col-responsive">
                {Object.values(solutionsData).map((sol) => (
                  <div
                    key={sol.slug}
                    onClick={() => navigateTo(`solutions/${sol.slug}`)}
                    style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '28px', cursor: 'pointer', transition: 'all var(--transition-fast)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  >
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--brand-blue)', fontWeight: 700 }}>
                        {sol.badge}
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', margin: '10px 0 8px' }}>
                        {sol.title}
                      </h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
                        {sol.lead}
                      </p>
                    </div>
                    <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--brand-blue)' }}>View Solution Brief</span>
                      <div className="btn-arrow-circle" style={{ width: '24px', height: '24px' }}>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* -------------------------------------------------------------
          CLOSING CTA
          ------------------------------------------------------------- */}
      <section className="section-block" style={{ paddingTop: 0 }}>
        <div className="page-container">
          <div style={{ background: 'var(--navy-deep)', borderRadius: 'var(--radius-2xl)', padding: '48px 36px', textAlign: 'center', color: '#FFFFFF' }}>
            <span className="badge-mono" style={{ color: 'var(--accent-yellow)', background: 'rgba(252, 207, 63, 0.1)', border: '1px solid rgba(252, 207, 63, 0.25)', marginBottom: '16px' }}>
              SOLVE YOUR LOGISTICS CHALLENGES
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px' }}>
              Talk with Our Supply Chain Engineers
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Whether you need guaranteed freight placement, faster driver settlements, or complete control tower visibility, we will map out an implementation plan.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={openDemoModal} className="btn-pill btn-pill-primary">
                <span>Book a Guided Walkthrough</span>
                <div className="btn-arrow-circle">
                  <ArrowRight size={13} />
                </div>
              </button>
              <button onClick={() => navigateTo('contact')} className="btn-pill btn-pill-dark" style={{ border: '1px solid var(--navy-border)' }}>
                <span>Contact Operations Hub</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

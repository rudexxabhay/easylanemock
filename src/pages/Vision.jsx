import React from 'react';
import { 
  Target, 
  Compass, 
  TrendingUp, 
  ShieldCheck, 
  Truck, 
  Coins, 
  Cpu, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  Leaf, 
  Zap,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Vision() {
  const { openDemoModal, navigateTo } = useNavigation();

  return (
    <div className="vision-page">
      {/* Hero Section */}
      <section className="inner-page-hero">
        <div className="page-container">
          <div className="inner-hero-breadcrumb">
            <span className="crumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => navigateTo('about')}>About</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Strategic Vision</span>
          </div>
          <h1 className="inner-hero-title">
            The Architectural Vision for Connected Indian Road Freight
          </h1>
          <p className="inner-hero-lead">
            How EasyLane is transitioning from modernizing standalone fleet dispatches to engineering India’s unified, algorithmic operating system for domestic road transportation.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={openDemoModal} className="btn-pill btn-pill-dark">
              <span>Schedule Strategic Briefing</span>
              <div className="btn-arrow-circle">
                <ArrowRight size={13} />
              </div>
            </button>
            <button onClick={() => navigateTo('platform')} className="btn-pill btn-pill-primary">
              <span>Explore Platform Modules</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: The Core Structural Problem */}
      <section className="section-block">
        <div className="page-container">
          <div className="grid-split-feature">
            <div>
              <span className="badge-mono badge-mono-blue" style={{ marginBottom: '16px' }}>
                THE SYSTEMIC CHALLENGE
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.18, marginBottom: '20px' }}>
                A $160B Domestic Freight Market Held Back by Friction &amp; Fragmentation
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                Over 70% of India's commercial cargo travels on roads, yet 85% of commercial vehicles belong to small operators running fewer than five trucks. Historically, these micro-transporters depended entirely on physical transport nagars and multiple layers of middlemen who extracted significant cuts of freight value.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '28px' }}>
                This unorganized structure created three crippling inefficiencies: <strong>25% to 30% empty backhauls (deadhead miles)</strong>, <strong>punitive 60-to-90 day payment cycles</strong> that starved transporters of operating capital, and <strong>zero verifiable in-transit visibility</strong> for manufacturing supply chain directors.
              </p>

              <div className="grid-2col-responsive">
                <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', padding: '22px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px' }}>NATIONAL BENCHMARK</div>
                  <strong style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: 'var(--status-crimson, #DC2626)', display: 'block', marginBottom: '4px' }}>28.4%</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Estimated empty running on return corridors</span>
                </div>
                <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', padding: '22px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px' }}>CREDIT WAIT TIME</div>
                  <strong style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: 'var(--brand-blue)', display: 'block', marginBottom: '4px' }}>60–90 Days</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Typical unorganized freight invoice settlement</span>
                </div>
              </div>
            </div>

            {/* Strategic Pillars Visual */}
            <div style={{ background: 'var(--navy-deep)', color: '#FFFFFF', borderRadius: 'var(--radius-2xl)', padding: '40px', boxShadow: 'var(--shadow-glass-dark)' }}>
              <span className="badge-mono" style={{ color: 'var(--accent-yellow)', background: 'rgba(252, 207, 63, 0.1)', border: '1px solid rgba(252, 207, 63, 0.25)', marginBottom: '18px' }}>
                THE STRATEGIC HORIZON
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#FFFFFF', marginBottom: '22px' }}>
                The Three Foundations of EasyLane
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(36, 91, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-blue)', flexShrink: 0 }}>
                    <Cpu size={18} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '15px', color: '#FFFFFF', display: 'block', marginBottom: '3px' }}>1. SaaS Operational Backbone</strong>
                    <p style={{ fontSize: '13px', color: 'var(--text-inv-secondary)', lineHeight: 1.55 }}>
                      Multi-modal TMS connecting enterprise ERPs directly to fleet dispatchers with National VAHAN qualification, automated indents, and electronic gate passes.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--status-emerald)', flexShrink: 0 }}>
                    <Coins size={18} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '15px', color: '#FFFFFF', display: 'block', marginBottom: '3px' }}>2. Embedded Freight FinTech</strong>
                    <p style={{ fontSize: '13px', color: 'var(--text-inv-secondary)', lineHeight: 1.55 }}>
                      TReDS bill discounting partnership (M1xchange) turning verified cryptographic Proofs of Delivery (ePOD) into same-day working capital for transporters.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(252, 207, 63, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-yellow)', flexShrink: 0 }}>
                    <Network size={18} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '15px', color: '#FFFFFF', display: 'block', marginBottom: '3px' }}>3. Pan-India Liquidity &amp; Zero Deadhead</strong>
                    <p style={{ fontSize: '13px', color: 'var(--text-inv-secondary)', lineHeight: 1.55 }}>
                      Algorithmic corridor pairing pairing outbound freight with return loads, systematically reducing empty running while decarbonizing road freight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 3-Phase Roadmap Timeline */}
      <section className="section-block" style={{ background: 'var(--canvas-secondary)' }}>
        <div className="page-container">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 48px' }}>
            <span className="badge-mono badge-mono-blue" style={{ marginBottom: '12px' }}>
              EXECUTION PHASES (2026–2028)
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.18, marginBottom: '14px' }}>
              From Modern Control Tower to National Logistics Operating System
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Our strategic roadmap distinguishes current operational deployments from staged network scaling objectives.
            </p>
          </div>

          <div className="grid-3col-responsive">
            {/* Phase 1 */}
            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '32px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--brand-blue)' }}>PHASE 01 • PRODUCTION</span>
                  <span style={{ fontSize: '11px', background: 'var(--status-emerald-subtle)', color: 'var(--status-emerald)', padding: '2px 8px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>Active</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '12px' }}>
                  Digital Foundation &amp; Telematics Fusion
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '18px' }}>
                  Deployment of cloud TMS, real-time control tower, National VAHAN verification, and multi-sensor tracking fusing GPS, SIM, and FASTag toll checkpoints.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '12.5px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Instant carrier qualification via VAHAN API</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '12.5px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Automated plant gate-in/gate-out geofencing</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '12.5px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Multilingual driver companion mobile app</span>
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', fontSize: '11.5px', color: 'var(--text-muted)' }}>
                Target: Full Primary Corridor Deployment
              </div>
            </div>

            {/* Phase 2 */}
            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '32px', border: '1px solid rgba(36, 91, 255, 0.25)', boxShadow: 'var(--shadow-lg)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ position: 'absolute', top: '-11px', left: '28px', background: 'var(--brand-blue)', color: '#FFFFFF', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
                2026–2027 FOCUS
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', marginTop: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--brand-blue)' }}>PHASE 02 • SCALE</span>
                  <span style={{ fontSize: '11px', background: 'rgba(36, 91, 255, 0.1)', color: 'var(--brand-blue)', padding: '2px 8px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>In Rollout</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '12px' }}>
                  Algorithmic Backhauls &amp; FinTech Liquidity
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '18px' }}>
                  Integration of mathematical corridor backhaul pairing algorithms and instant TReDS invoice discounting to address the industry’s major capital constraints.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '12.5px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Same-day freight discounting via M1xchange</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '12.5px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Algorithmic return cargo allocation</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '12.5px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Automated FASTag toll &amp; fuel card disbursements</span>
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', fontSize: '11.5px', color: 'var(--text-muted)' }}>
                Target: Multi-Lender Institutional TReDS Scale
              </div>
            </div>

            {/* Phase 3 */}
            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '32px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--navy-deep)' }}>PHASE 03 • HORIZON</span>
                  <span style={{ fontSize: '11px', background: 'var(--canvas-muted)', color: 'var(--text-secondary)', padding: '2px 8px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>Planned</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '12px' }}>
                  Pan-India Autonomous Freight Rail
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '18px' }}>
                  Algorithmic dispatch across India's key industrial corridors (Delhi-Mumbai, Golden Quadrilateral) with machine-learned lane rate benchmarking and corridor balancing.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '12.5px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>National Dynamic Freight Rate Benchmarking</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '12.5px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Automated multi-carrier tender &amp; spot bidding</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '12.5px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Green Freight ESG carbon emissions reporting</span>
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', fontSize: '11.5px', color: 'var(--text-muted)' }}>
                Target: Pan-India Freight Liquidity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Environmental & Economic Impact */}
      <section className="section-block">
        <div className="page-container">
          <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-2xl)', padding: '44px 36px', boxShadow: 'var(--shadow-md)' }}>
            <div className="grid-split-feature">
              <div>
                <span className="badge-mono badge-mono-blue" style={{ marginBottom: '14px' }}>
                  <Leaf size={12} color="var(--status-emerald)" style={{ marginRight: '6px' }} />
                  SUSTAINABLE FREIGHT MOBILITY
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.2, marginBottom: '14px' }}>
                  Eliminating Empty Kilometers Reduces Diesel Waste &amp; Emissions
                </h2>
                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '22px' }}>
                  In India, empty trucks moving between consumption hubs and production belts burn over 150 million litres of diesel annually without carrying cargo. By systematically pairing backhauls, EasyLane elevates fleet utilization while helping shippers document ESG emission reductions.
                </p>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <button onClick={() => navigateTo('solutions/transporters')} className="btn-pill btn-pill-dark">
                    <span>Transporter Solution</span>
                    <ArrowRight size={13} />
                  </button>
                  <button onClick={() => navigateTo('resources')} className="btn-pill btn-pill-primary">
                    <span>Read Technical Playbooks</span>
                  </button>
                </div>
              </div>

              <div className="grid-2col-responsive">
                <div style={{ background: 'var(--canvas-secondary)', padding: '22px', borderRadius: 'var(--radius-lg)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>CORRIDOR OBJECTIVE</span>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: 'var(--status-emerald)', margin: '6px 0 4px' }}>Targeting 40%</div>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>Empty-mile reduction on primary corridors</p>
                </div>
                <div style={{ background: 'var(--canvas-secondary)', padding: '22px', borderRadius: 'var(--radius-lg)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>FLEET ASSET VALUE</span>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: 'var(--brand-blue)', margin: '6px 0 4px' }}>Round-Trip</div>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>Guaranteed two-way cargo scheduling</p>
                </div>
                <div style={{ background: 'var(--canvas-secondary)', padding: '22px', borderRadius: 'var(--radius-lg)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>LIQUIDITY TIMELINE</span>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: 'var(--navy-deep)', margin: '6px 0 4px' }}>24 Hours</div>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>Same-day TReDS institutional payout</p>
                </div>
                <div style={{ background: 'var(--canvas-secondary)', padding: '22px', borderRadius: 'var(--radius-lg)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>DISPATCH RAIL</span>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: 'var(--navy-deep)', margin: '6px 0 4px' }}>Automated RFQ</div>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>Spot &amp; contracted carrier matching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="section-block" style={{ paddingTop: 0 }}>
        <div className="page-container">
          <div style={{ background: 'var(--navy-deep)', color: '#FFFFFF', borderRadius: 'var(--radius-2xl)', padding: '56px 36px', textAlign: 'center', boxShadow: 'var(--shadow-glass-dark)' }}>
            <span className="badge-mono" style={{ color: 'var(--accent-yellow)', background: 'rgba(252, 207, 63, 0.1)', border: '1px solid rgba(252, 207, 63, 0.25)', marginBottom: '16px' }}>
              PARTNER IN BUILDING THE FUTURE
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px' }}>
              Modernize Your Road Freight Operations Today
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-inv-secondary)', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Whether you are an enterprise shipper seeking contract capacity or a fleet operator seeking higher asset utilization and instant payouts, EasyLane is ready for you.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={openDemoModal} className="btn-pill btn-pill-primary">
                <span>Book an Executive Demo</span>
                <div className="btn-arrow-circle">
                  <ArrowUpRight size={13} />
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

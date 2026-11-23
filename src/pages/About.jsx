import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  HeartHandshake, 
  Compass, 
  ArrowRight, 
  Users, 
  Globe2, 
  Lock, 
  Award,
  ArrowUpRight
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function About({ subRoute = '' }) {
  const { openDemoModal, navigateTo } = useNavigation();

  return (
    <div className="about-page">
      {/* -------------------------------------------------------------
          HERO SECTION
          ------------------------------------------------------------- */}
      <section className="inner-page-hero">
        <div className="page-container">
          <div className="inner-hero-breadcrumb">
            <span className="crumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">About EasyLane</span>
          </div>
          <h1 className="inner-hero-title">
            Making Indian Logistics Smarter, Stronger, and Dignified
          </h1>
          <p className="inner-hero-lead">
            EasyLane was founded to bridge the systemic operational gap between modern enterprise supply chains and India’s vast, fragmented network of truck owners and long-haul drivers.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={() => navigateTo('about/vision')} className="btn-pill btn-pill-dark">
              <span>Read 2-Year Strategic Vision</span>
              <div className="btn-arrow-circle">
                <ArrowRight size={13} />
              </div>
            </button>
            <button onClick={() => navigateTo('careers')} className="btn-pill btn-pill-primary">
              <span>View Open Careers in Mumbai</span>
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          MISSION & SYSTEMIC NARRATIVE
          ------------------------------------------------------------- */}
      <section className="section-block">
        <div className="page-container">
          <div className="grid-split-feature">
            <div>
              <span className="badge-mono badge-mono-blue" style={{ marginBottom: '16px' }}>
                WHY WE EXIST
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.18, marginBottom: '20px' }}>
                India Moves on Trucks. We Ensure Those Wheels Never Stop.
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                Over 70% of India’s domestic freight travels by road. Yet, more than 80% of trucks belong to small fleet owners who operate fewer than five vehicles. Without software infrastructure, these micro-transporters spend days waiting in unorganized transport nagars, lose up to 30% of their earnings to middlemen, and run empty return miles that burden the environment.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '28px' }}>
                EasyLane builds the digital operating bridges that connect these fleet owners directly to corporate manufacturing enterprises. We automate route optimization, guarantee timely return cargo, eliminate predatory credit terms through digital bill discounting, and restore dignity to long-haul commercial drivers.
              </p>

              <div className="grid-2col-responsive">
                <div style={{ background: 'var(--canvas-secondary)', padding: '20px', borderRadius: 'var(--radius-lg)' }}>
                  <strong style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--brand-blue)', display: 'block', marginBottom: '4px' }}>Pan-India Network</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Multi-axle &amp; container linehaul execution</span>
                </div>
                <div style={{ background: 'var(--canvas-secondary)', padding: '20px', borderRadius: 'var(--radius-lg)' }}>
                  <strong style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--status-emerald)', display: 'block', marginBottom: '4px' }}>Zero Deadhead Mission</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Dynamic backhaul pairing infrastructure</span>
                </div>
              </div>
            </div>

            {/* Core Values Card */}
            <div style={{ background: 'var(--navy-deep)', color: '#FFFFFF', borderRadius: 'var(--radius-2xl)', padding: '40px', boxShadow: 'var(--shadow-glass-dark)' }}>
              <span className="badge-mono" style={{ color: 'var(--accent-yellow)', background: 'rgba(252, 207, 63, 0.1)', border: '1px solid rgba(252, 207, 63, 0.25)', marginBottom: '18px' }}>
                OUR OPERATING PRINCIPLES
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#FFFFFF', marginBottom: '22px' }}>
                The Code Behind Every EasyLane Dispatch
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-yellow)', marginBottom: '6px' }}>
                    <ShieldCheck size={18} />
                    <strong style={{ fontSize: '15px' }}>Radical Transparency</strong>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-inv-secondary)', lineHeight: 1.55 }}>
                    No hidden fees, no opaque sub-brokering. Every contract rate, toll allowance, and detention penalty is recorded on a transparent, auditable ledger.
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-yellow)', marginBottom: '6px' }}>
                    <HeartHandshake size={18} />
                    <strong style={{ fontSize: '15px' }}>Driver Welfare First</strong>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-inv-secondary)', lineHeight: 1.55 }}>
                    Supply chain resilience starts in the truck cab. We fight for fair compensation, fast trip advances, roadside safety amenities, and human dignity.
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-yellow)', marginBottom: '6px' }}>
                    <Compass size={18} />
                    <strong style={{ fontSize: '15px' }}>Algorithmic Efficiency</strong>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-inv-secondary)', lineHeight: 1.55 }}>
                    Every empty kilometer burns diesel without delivering value. Our corridor pairing models minimize wasted runs and accelerate national commerce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          ENTERPRISE SECURITY & INFRASTRUCTURE
          ------------------------------------------------------------- */}
      <section className="section-block" style={{ background: 'var(--canvas-secondary)' }}>
        <div className="page-container">
          <div className="text-center" style={{ maxWidth: '680px', margin: '0 auto 48px' }}>
            <span className="badge-mono badge-mono-blue" style={{ marginBottom: '12px' }}>
              SECURITY &amp; COMPLIANCE
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.2, marginBottom: '14px' }}>
              Built for Enterprise Scale and National Standards
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              EasyLane adheres to rigorous statutory compliance, statutory data governance, and high-availability cloud infrastructure required by global manufacturing enterprises.
            </p>
          </div>

          <div className="grid-3col-responsive">
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '28px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--canvas-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-blue)', marginBottom: '16px' }}>
                <Lock size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                Enterprise ISO &amp; SOC-2 Ready
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                End-to-end 256-bit TLS encryption in transit and AES-256 at rest. Comprehensive role-based access control (RBAC) and immutable audit logging.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '28px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--canvas-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--status-emerald)', marginBottom: '16px' }}>
                <Globe2 size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                ULIP &amp; VAHAN Integration
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Directly connected with India’s Unified Logistics Interface Platform (ULIP), National VAHAN commercial vehicle databases, and SARATHI driver licensing portals.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '28px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--canvas-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-deep)', marginBottom: '16px' }}>
                <Building2 size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                Corporate Governance &amp; Profile
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                EasyLane Technologies Pvt. Ltd.<br />
                CIN: U63090MH2021PTC368412<br />
                Headquartered in Mumbai, Maharashtra, operating across major pan-India industrial corridors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          CLOSING CALL TO ACTION
          ------------------------------------------------------------- */}
      <section className="section-block" style={{ paddingTop: 0 }}>
        <div className="page-container">
          <div style={{ background: 'var(--navy-deep)', color: '#FFFFFF', borderRadius: 'var(--radius-2xl)', padding: '56px 36px', textAlign: 'center', boxShadow: 'var(--shadow-glass-dark)' }}>
            <span className="badge-mono" style={{ color: 'var(--accent-yellow)', background: 'rgba(252, 207, 63, 0.1)', border: '1px solid rgba(252, 207, 63, 0.25)', marginBottom: '16px' }}>
              CONNECT WITH OUR LEADERSHIP
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px' }}>
              Explore Strategic Collaboration with EasyLane
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-inv-secondary)', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Whether you are evaluating a national carrier integration, exploring fleet financing partnerships, or interested in joining our team in Mumbai, we welcome your dialogue.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={openDemoModal} className="btn-pill btn-pill-primary">
                <span>Book an Executive Briefing</span>
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

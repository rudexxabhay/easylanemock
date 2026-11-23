import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Compass, 
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Careers() {
  const { navigateTo } = useNavigation();
  const [selectedRole, setSelectedRole] = useState(null);
  const [appliedRole, setAppliedRole] = useState(null);
  const [applicantForm, setApplicantForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '3-5 years',
    portfolio: '',
    notes: ''
  });

  const roles = [
    {
      id: 'fullstack-engineer',
      title: 'Senior Full-Stack Engineer (Telematics & Cloud)',
      department: 'Engineering',
      location: 'Mumbai Hub / Hybrid',
      type: 'Full-time',
      experience: '4+ Years',
      description: 'Architect and scale our real-time tracking engine fusing GPS, NPCI FASTag checkpoint events, and cellular SIM triangulation across thousands of concurrent commercial vehicles.',
      responsibilities: [
        'Design high-throughput ingestion pipelines handling sub-second GPS telemetry and geofence events',
        'Build reactive, high-fidelity UI dashboards for enterprise logistics control towers',
        'Integrate cryptographic digital Proof of Delivery (ePOD) validation with OCR and tamper detection',
        'Partner with product designers to maintain Raft-level design precision and fluid motion'
      ],
      requirements: [
        'Strong expertise in modern React, TypeScript, Node.js or Go, and PostgreSQL/TimescaleDB',
        'Experience with distributed message queues (Kafka, RabbitMQ, or Redis Streams)',
        'Familiarity with geospatial query optimizations (PostGIS, GeoJSON, H3 indexing)',
        'Obsession with user experience, performance profiling, and resilient offline handling'
      ]
    },
    {
      id: 'solutions-architect',
      title: 'Lead Logistics Solutions Architect',
      department: 'Enterprise Solutions',
      location: 'Mumbai Hub',
      type: 'Full-time',
      experience: '5+ Years',
      description: 'Lead enterprise integrations with Fortune 500 manufacturing supply chains, connecting EasyLane cloud TMS with SAP S/4HANA, Oracle OTM, and Microsoft Dynamics.',
      responsibilities: [
        'Scope and deliver bespoke TMS connectors for enterprise manufacturing clients',
        'Design automated e-Way bill and electronic invoice reconciliation workflows with GST portals',
        'Conduct technical workshops with enterprise CIOs and supply chain vice presidents',
        'Standardize public RESTful webhooks and developer documentation for our carrier ecosystem'
      ],
      requirements: [
        'Proven track record implementing TMS or supply chain ERPs (SAP, Oracle, Blue Yonder)',
        'Deep domain understanding of Indian road freight, GST compliance, and e-way bill lifecycles',
        'Strong technical communication and pre-sales engineering expertise',
        'B.Tech / MBA or equivalent operational experience in enterprise software'
      ]
    },
    {
      id: 'control-tower-lead',
      title: 'Control Tower Operations Lead',
      department: 'Logistics Operations',
      location: 'Mumbai Hub (24/7 Command Center)',
      type: 'Full-time',
      experience: '3+ Years',
      description: 'Lead a team of logistics specialists managing real-time exception detection, border delay escalations, and plant gate-in/gate-out SLAs for national manufacturing corridors.',
      responsibilities: [
        'Supervise 24/7 exception center monitoring across Delhi-Mumbai and Western corridors',
        'Resolve plant detention bottlenecks and coordinate breakdown assistance with verified vendors',
        'Enforce driver welfare standards and emergency SOS escalation protocols',
        'Analyze on-time dispatch (OTD) and on-time delivery (OTD) metrics to improve carrier scoring'
      ],
      requirements: [
        'Hands-on experience in logistics control towers, 3PL operations, or freight fleet management',
        'Calm crisis management and decisive operational problem-solving capabilities',
        'Fluency in Hindi and English; additional regional languages (Marathi, Gujarati) preferred',
        'Proficiency with digital tracking systems and dispatch software'
      ]
    },
    {
      id: 'carrier-success',
      title: 'Carrier Onboarding & VAHAN Specialist',
      department: 'Carrier Success',
      location: 'Mumbai / Field Operations',
      type: 'Full-time',
      experience: '2+ Years',
      description: 'Empower regional fleet owners and independent transporters to onboard onto EasyLane, verify national permits via VAHAN API, and unlock same-day freight bill discounting.',
      responsibilities: [
        'Onboard regional fleet owners (5-50 trucks) onto EasyLane digital dispatch system',
        'Verify commercial fitness certificates, national permits, and driver SARATHI credentials',
        'Train transport managers and drivers on the vernacular mobile application and digital ePOD',
        'Facilitate working capital onboarding with our institutional financing partners'
      ],
      requirements: [
        'Deep relationships in transport nagars and commercial trucking associations',
        'Passion for uplifting small business owners and championing long-haul driver dignity',
        'Strong interpersonal skills and empathy for traditional logistics operators',
        'Familiarity with commercial transport documentation and FASTag expense systems'
      ]
    }
  ];

  const handleApply = (role) => {
    setSelectedRole(role);
    setAppliedRole(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAppliedRole(selectedRole.title);
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="inner-page-hero">
        <div className="page-container">
          <div className="inner-hero-breadcrumb">
            <span className="crumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => navigateTo('about')}>About</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Careers</span>
          </div>
          <h1 className="inner-hero-title">
            Build the Digital Backbone of Indian Road Logistics
          </h1>
          <p className="inner-hero-lead">
            We are a mission-driven team of software engineers, logistics veterans, and supply chain architects solving the most complex operational challenge in India: moving freight without waste, delay, or exploitation.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#openings" className="btn-pill btn-pill-dark">
              <span>View Open Positions</span>
              <div className="btn-arrow-circle">
                <ArrowRight size={13} />
              </div>
            </a>
            <a href="mailto:career@easylane.co.in" className="btn-pill btn-pill-primary">
              <Mail size={14} color="var(--brand-blue)" />
              <span>career@easylane.co.in</span>
            </a>
          </div>
        </div>
      </section>

      {/* Culture & Operating Values */}
      <section className="section-block">
        <div className="page-container">
          <div className="text-center" style={{ maxWidth: '680px', margin: '0 auto 48px' }}>
            <span className="badge-mono badge-mono-blue" style={{ marginBottom: '12px' }}>
              LIFE AT EASYLANE
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.2, marginBottom: '14px' }}>
              Why Build with EasyLane?
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              We combine the technical rigor of world-class software engineering with the grit and deep respect required to serve India’s highway ecosystem.
            </p>
          </div>

          <div className="grid-3col-responsive">
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '32px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--canvas-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-blue)', marginBottom: '18px' }}>
                <Cpu size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                Tackling Real Hard Problems
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                We don't build vanity social apps. We build low-latency telematics pipelines, mathematical backhaul algorithms, and cryptographic financial settlement engines that keep India’s economy moving.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '32px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--canvas-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--status-emerald)', marginBottom: '18px' }}>
                <Users size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                Human-First Logistics
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Our systems are designed to eliminate predatory broker exploitation, protect small fleet owners from cash-flow starvation, and ensure long-haul truck drivers receive dignity, prompt pay, and safety.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '32px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--canvas-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-deep)', marginBottom: '18px' }}>
                <ShieldCheck size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                High Autonomy &amp; Ownership
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Every engineer and operations lead at EasyLane directly owns production systems. You will collaborate directly with founders, ride along with fleet drivers, and witness the immediate impact of your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section id="openings" className="section-block" style={{ background: 'var(--canvas-secondary)' }}>
        <div className="page-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="badge-mono badge-mono-blue" style={{ marginBottom: '10px' }}>
                VERIFIED CAREER OPPORTUNITIES
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: 'var(--navy-deep)' }}>
                Current Openings in Mumbai
              </h2>
            </div>
            <span style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
              Showing {roles.length} active positions • Mumbai Command Center
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {roles.map((role) => (
              <div
                key={role.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  padding: '28px 32px',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '20px',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ maxWidth: '640px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--brand-blue)', fontWeight: 700, textTransform: 'uppercase' }}>
                      {role.department}
                    </span>
                    <span style={{ color: 'var(--text-subtle)' }}>•</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} /> {role.location}
                    </span>
                    <span style={{ color: 'var(--text-subtle)' }}>•</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      {role.experience}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                    {role.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {role.description}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <button
                    onClick={() => handleApply(role)}
                    className="btn-pill btn-pill-dark"
                  >
                    <span>View Role &amp; Apply</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Application Modal */}
      {selectedRole && (
        <div className="modal-backdrop" onClick={() => setSelectedRole(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
            <button className="modal-close-btn" onClick={() => setSelectedRole(null)} aria-label="Close dialog">
              ×
            </button>

            {!appliedRole ? (
              <div>
                <div style={{ marginBottom: '20px' }}>
                  <span className="badge-mono badge-mono-blue" style={{ marginBottom: '8px' }}>
                    {selectedRole.department} • {selectedRole.location}
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                    {selectedRole.title}
                  </h2>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {selectedRole.description}
                  </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--navy-deep)', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                    Key Responsibilities:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {selectedRole.responsibilities.map((r, i) => (
                      <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '12.5px', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={14} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ background: 'var(--canvas-secondary)', padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '4px' }}>
                    Direct Application via Email
                  </h4>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Send your resume and recent projects directly to our engineering leadership:
                  </p>
                  <a
                    href={`mailto:career@easylane.co.in?subject=Application for ${encodeURIComponent(selectedRole.title)}&body=Hi EasyLane Team,%0D%0A%0D%0AI would like to apply for the ${encodeURIComponent(selectedRole.title)} role in Mumbai.`}
                    className="btn-pill btn-pill-dark"
                    style={{ display: 'inline-flex', padding: '8px 16px', fontSize: '13px' }}
                  >
                    <Mail size={14} />
                    <span>Apply via career@easylane.co.in</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
                  <h4 style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                    Or submit your profile here:
                  </h4>
                  <div className="grid-2col-responsive" style={{ gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '4px' }}>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Karan Sharma"
                        value={applicantForm.name}
                        onChange={(e) => setApplicantForm({ ...applicantForm, name: e.target.value })}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', fontSize: '13px', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '4px' }}>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="karan@gmail.com"
                        value={applicantForm.email}
                        onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', fontSize: '13px', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div className="grid-2col-responsive" style={{ gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '4px' }}>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={applicantForm.phone}
                        onChange={(e) => setApplicantForm({ ...applicantForm, phone: e.target.value })}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', fontSize: '13px', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '4px' }}>LinkedIn / GitHub URL</label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/..."
                        value={applicantForm.portfolio}
                        onChange={(e) => setApplicantForm({ ...applicantForm, portfolio: e.target.value })}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', fontSize: '13px', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-pill btn-pill-dark" style={{ justifyContent: 'center', marginTop: '6px' }}>
                    <span>Submit Application for {selectedRole.title}</span>
                    <ArrowRight size={13} />
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--status-emerald-subtle)', color: 'var(--status-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                  Application Logged Successfully
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.55 }}>
                  Thank you for applying for the <strong>{appliedRole}</strong> role at EasyLane. Our talent team in Mumbai will review your credentials and contact you within 2 business days.
                </p>
                <button onClick={() => setSelectedRole(null)} className="btn-pill btn-pill-dark">
                  <span>Return to Career Openings</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

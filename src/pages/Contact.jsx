import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  AlertCircle,
  Building2,
  Calendar,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Contact() {
  const { openDemoModal, navigateTo } = useNavigation();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: 'Enterprise Shipper',
    monthlyVolume: '50-200 FTL Trips / Month',
    message: ''
  });

  const validate = () => {
    const errs = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      errs.email = 'Please provide a valid work email address.';
    }
    const phoneDigits = form.phone.replace(/[^0-9]/g, '');
    if (!phoneDigits || phoneDigits.length < 10) {
      errs.phone = 'Please provide a valid contact phone number (at least 10 digits).';
    }
    if (!form.company.trim() || form.company.trim().length < 2) {
      errs.company = 'Please provide your company or fleet organization name.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = 'Please provide a brief message describing your operational requirements (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Log consultation submission locally
    try {
      const existing = JSON.parse(localStorage.getItem('easylane_consultations') || '[]');
      existing.push({
        ...form,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('easylane_consultations', JSON.stringify(existing));
    } catch (err) {
      console.warn('Storage log:', err);
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      role: 'Enterprise Shipper',
      monthlyVolume: '50-200 FTL Trips / Month',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="inner-page-hero">
        <div className="page-container">
          <div className="inner-hero-breadcrumb">
            <span className="crumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Contact Us</span>
          </div>
          <h1 className="inner-hero-title">
            Connect with Our Logistics Engineering Team
          </h1>
          <p className="inner-hero-lead">
            Whether you are evaluating TMS integration for your manufacturing plants, looking to onboard your commercial fleet, or exploring working capital financing, our Mumbai hub is ready to assist you.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={openDemoModal} className="btn-pill btn-pill-dark">
              <span>Book Interactive Demo</span>
              <div className="btn-arrow-circle">
                <ArrowRight size={13} />
              </div>
            </button>
            <a href="mailto:info@easylane.co.in" className="btn-pill btn-pill-primary">
              <Mail size={14} color="var(--brand-blue)" />
              <span>info@easylane.co.in</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form & Office Details Section */}
      <section className="section-block">
        <div className="page-container">
          <div className="grid-split-feature" style={{ alignItems: 'flex-start' }}>
            {/* Consultation Form Card */}
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '44px', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ marginBottom: '24px' }}>
                <span className="badge-mono badge-mono-blue" style={{ marginBottom: '8px' }}>
                  OPERATIONAL INQUIRY
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                  Schedule an Operational Consultation
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Provide your lane requirements below. An EasyLane supply chain specialist from our Mumbai hub will respond within 4 business hours.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }} noValidate>
                  {/* Name & Work Email */}
                  <div className="grid-2col-responsive" style={{ gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Rajesh Kumar"
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: `1px solid ${errors.name ? 'var(--status-crimson, #DC2626)' : 'var(--border-medium)'}`,
                          fontSize: '13.5px',
                          outline: 'none',
                          background: 'var(--surface-card)'
                        }}
                      />
                      {errors.name && (
                        <span style={{ fontSize: '11.5px', color: 'var(--status-crimson, #DC2626)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <AlertCircle size={12} /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="rajesh@enterprise.com"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: `1px solid ${errors.email ? 'var(--status-crimson, #DC2626)' : 'var(--border-medium)'}`,
                          fontSize: '13.5px',
                          outline: 'none',
                          background: 'var(--surface-card)'
                        }}
                      />
                      {errors.email && (
                        <span style={{ fontSize: '11.5px', color: 'var(--status-crimson, #DC2626)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <AlertCircle size={12} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid-2col-responsive" style={{ gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => {
                          setForm({ ...form, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: `1px solid ${errors.phone ? 'var(--status-crimson, #DC2626)' : 'var(--border-medium)'}`,
                          fontSize: '13.5px',
                          outline: 'none',
                          background: 'var(--surface-card)'
                        }}
                      />
                      {errors.phone && (
                        <span style={{ fontSize: '11.5px', color: 'var(--status-crimson, #DC2626)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <AlertCircle size={12} /> {errors.phone}
                        </span>
                      )}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                        Company / Fleet Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Tata Steel / Mahindra Logistics"
                        value={form.company}
                        onChange={(e) => {
                          setForm({ ...form, company: e.target.value });
                          if (errors.company) setErrors({ ...errors, company: null });
                        }}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: `1px solid ${errors.company ? 'var(--status-crimson, #DC2626)' : 'var(--border-medium)'}`,
                          fontSize: '13.5px',
                          outline: 'none',
                          background: 'var(--surface-card)'
                        }}
                      />
                      {errors.company && (
                        <span style={{ fontSize: '11.5px', color: 'var(--status-crimson, #DC2626)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <AlertCircle size={12} /> {errors.company}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stakeholder Category & Estimated Volume */}
                  <div className="grid-2col-responsive" style={{ gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                        Inquiring As:
                      </label>
                      <select
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-medium)',
                          fontSize: '13.5px',
                          outline: 'none',
                          background: '#FFFFFF'
                        }}
                      >
                        <option value="Enterprise Shipper">Enterprise Shipper / Manufacturer</option>
                        <option value="Fleet Owner">Fleet Owner / Transporter</option>
                        <option value="Logistics Operations">Logistics Operations Manager</option>
                        <option value="Capital Partner">NBFC / Capital Partner</option>
                        <option value="Technology Partner">Technology Partner / Telematics Provider</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                        Monthly Freight Volume:
                      </label>
                      <select
                        value={form.monthlyVolume}
                        onChange={(e) => setForm({ ...form, monthlyVolume: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-medium)',
                          fontSize: '13.5px',
                          outline: 'none',
                          background: '#FFFFFF'
                        }}
                      >
                        <option value="10-50 FTL Trips / Month">10–50 FTL Trips / Month</option>
                        <option value="50-200 FTL Trips / Month">50–200 FTL Trips / Month</option>
                        <option value="200-500 FTL Trips / Month">200–500 FTL Trips / Month</option>
                        <option value="500+ FTL Trips / Month">500+ FTL Trips / Month (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                      Operational Requirements &amp; Key Corridors *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please specify your key dispatch lanes (e.g. Bhiwandi to Delhi), vehicle configurations needed, or TMS integration goals..."
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: `1px solid ${errors.message ? 'var(--status-crimson, #DC2626)' : 'var(--border-medium)'}`,
                        fontSize: '13.5px',
                        outline: 'none',
                        background: 'var(--surface-card)',
                        resize: 'vertical'
                      }}
                    />
                    {errors.message && (
                      <span style={{ fontSize: '11.5px', color: 'var(--status-crimson, #DC2626)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <AlertCircle size={12} /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-pill btn-pill-dark"
                    style={{ justifyContent: 'center', width: '100%', padding: '13px 20px', fontSize: '14px', marginTop: '6px' }}
                  >
                    <span>Submit Consultation Request</span>
                    <div className="btn-arrow-circle">
                      <ArrowRight size={13} />
                    </div>
                  </button>

                  <span style={{ fontSize: '11.5px', color: 'var(--text-muted)', textAlign: 'center' }}>
                    🔒 Enterprise Data Privacy: We never sell your contact information or dispatch data.
                  </span>
                </form>
              ) : (
                /* Submission Confirmation Banner */
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--status-emerald-subtle)', color: 'var(--status-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <CheckCircle2 size={34} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '10px' }}>
                    Consultation Request Recorded
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                    Thank you, <strong>{form.name}</strong>. Your consultation inquiry for <strong>{form.company}</strong> has been logged with our Mumbai Logistics Engineering Hub. A dedicated solutions specialist will contact you at <strong>{form.email}</strong> within 4 business hours.
                  </p>

                  <div style={{ background: 'var(--canvas-secondary)', padding: '18px', borderRadius: 'var(--radius-md)', maxWidth: '440px', margin: '0 auto 28px', textAlign: 'left' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>DIRECT OPERATIONAL CONTACT:</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--navy-deep)' }}>EasyLane Command Center: info@easylane.co.in</div>
                  </div>

                  <button onClick={handleReset} className="btn-pill btn-pill-dark">
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              )}
            </div>

            {/* Hub Details & Operating Hours Card */}
            <div>
              <div style={{ background: 'var(--navy-deep)', color: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '40px', boxShadow: 'var(--shadow-glass-dark)', marginBottom: '32px' }}>
                <span className="badge-mono" style={{ color: 'var(--accent-yellow)', background: 'rgba(252, 207, 63, 0.1)', border: '1px solid rgba(252, 207, 63, 0.25)', marginBottom: '18px' }}>
                  NATIONAL COMMAND CENTER
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px' }}>
                  Mumbai Logistics Operations Hub
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <MapPin size={20} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '14.5px', color: '#FFFFFF', marginBottom: '2px' }}>
                        Registered &amp; Corporate Office
                      </strong>
                      <span style={{ fontSize: '13px', color: 'var(--text-inv-secondary)', lineHeight: 1.5 }}>
                        EasyLane Technologies Pvt. Ltd.<br />
                        Andheri East, Mumbai, Maharashtra 400069<br />
                        CIN: U63090MH2021PTC368412
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <Mail size={20} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '14.5px', color: '#FFFFFF', marginBottom: '2px' }}>
                        General &amp; Enterprise Support
                      </strong>
                      <a href="mailto:info@easylane.co.in" style={{ fontSize: '13px', color: 'var(--accent-yellow)', textDecoration: 'none' }}>
                        info@easylane.co.in
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <BriefcaseContactIcon size={20} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '14.5px', color: '#FFFFFF', marginBottom: '2px' }}>
                        Talent &amp; Career Opportunities
                      </strong>
                      <a href="mailto:career@easylane.co.in" style={{ fontSize: '13px', color: 'var(--accent-yellow)', textDecoration: 'none' }}>
                        career@easylane.co.in
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <Clock size={20} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '14.5px', color: '#FFFFFF', marginBottom: '2px' }}>
                        Operational Coverage Hours
                      </strong>
                      <span style={{ fontSize: '13px', color: 'var(--text-inv-secondary)' }}>
                        Consultation Desk: Mon – Sat: 08:00 – 20:00 IST<br />
                        <strong>Exception Control Tower: 24/7/365 Continuous</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast Action Card */}
              <div style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '32px', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                  Looking for Immediate System Demo?
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '18px' }}>
                  Experience our cloud TMS, real-time control tower simulator, and mobile OCR ePOD interface live with our engineering team.
                </p>
                <button onClick={openDemoModal} className="btn-pill btn-pill-dark" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Launch Interactive Demo Modal</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BriefcaseContactIcon({ size = 18, color = 'currentColor', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

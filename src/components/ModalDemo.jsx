import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function ModalDemo() {
  const { isDemoModalOpen, closeDemoModal } = useNavigation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    volume: '50-200 FTL / month',
    interest: 'Autonomous TMS & Load Planning',
    notes: '',
  });

  if (!isDemoModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    closeDemoModal();
  };

  return (
    <div className="modal-backdrop" onClick={closeDemoModal} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeDemoModal} aria-label="Close dialog">
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="badge-mono badge-mono-blue" style={{ marginBottom: '12px' }}>
                <span className="badge-dot" />
                ENTERPRISE DEMO
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '8px' }}>
                See EasyLane in Action
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Schedule a personalized consultation with our logistics engineering team to explore autonomous TMS, live control tower, and freight financing.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', fontSize: '13.5px', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', fontSize: '13.5px', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', fontSize: '13.5px', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company or Fleet Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', fontSize: '13.5px', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                  Monthly Full Truckload (FTL) Volume
                </label>
                <select
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', fontSize: '13.5px', background: '#fff' }}
                >
                  <option>Under 50 FTL / month</option>
                  <option>50-200 FTL / month</option>
                  <option>200-1,000 FTL / month</option>
                  <option>1,000+ FTL / month (Enterprise)</option>
                  <option>Fleet Owner / Transporter Network</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy-deep)', marginBottom: '6px' }}>
                  Primary Solution Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', fontSize: '13.5px', background: '#fff' }}
                >
                  <option>Autonomous TMS &amp; Load Planning</option>
                  <option>Live Control Tower &amp; Exception Alerts</option>
                  <option>Transporter Matching &amp; Return Load Optimization</option>
                  <option>Digital POD &amp; Instant Bill Discounting</option>
                  <option>Full Platform Deployment</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-pill btn-pill-blue"
                style={{ justifyContent: 'center', padding: '12px 24px', width: '100%', marginTop: '8px' }}
              >
                <span>Request Platform Demo</span>
                <div className="btn-arrow-circle" style={{ background: '#fff', color: 'var(--brand-blue)' }}>
                  <ArrowRight size={14} />
                </div>
              </button>

              <p style={{ textAlign: 'center', fontSize: '11px', color: 'var(--text-muted)' }}>
                Direct inquiries: <a href="mailto:info@easylane.co.in" style={{ color: 'var(--brand-blue)' }}>info@easylane.co.in</a> • No spam guarantee.
              </p>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--status-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: 'var(--navy-deep)', marginBottom: '10px' }}>
              Demo Request Received
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 28px' }}>
              Thank you, <strong>{formData.name}</strong>. Our enterprise solutions team has received your request for <strong>{formData.company}</strong> and will reach out within 4 business hours.
            </p>
            <button className="btn-pill btn-pill-dark" onClick={handleReset} style={{ margin: '0 auto' }}>
              <span>Done</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

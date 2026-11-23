import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Footer() {
  const { navigateTo, openDemoModal } = useNavigation();

  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-column">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('home');
              }}
              className="brand-link"
              style={{ display: 'inline-block', marginBottom: '14px' }}
            >
              <img
                src="/easylane-logo.svg"
                alt="EasyLane"
                style={{ height: '30px', width: 'auto' }}
                onError={(e) => {
                  e.currentTarget.src = '/easylane-logo.png';
                }}
              />
            </a>
            <p className="footer-tagline">
              One connected transportation platform. Unifying enterprise shippers, fleet owners, and drivers through intelligent execution, real-time control tower, and automated freight finance.
            </p>
            <div className="footer-contact-links">
              <a href="mailto:info@easylane.co.in">
                <Mail size={14} />
                <span>info@easylane.co.in</span>
              </a>
              <a href="mailto:career@easylane.co.in">
                <Mail size={14} />
                <span>career@easylane.co.in</span>
              </a>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div>
            <h4 className="footer-column-title">Platform</h4>
            <ul className="footer-nav-links">
              <li>
                <a href="#/platform/tms" onClick={(e) => { e.preventDefault(); navigateTo('platform/tms'); }}>
                  Transportation Management (TMS)
                </a>
              </li>
              <li>
                <a href="#/platform/control-tower" onClick={(e) => { e.preventDefault(); navigateTo('platform/control-tower'); }}>
                  Control Tower &amp; Exception Center
                </a>
              </li>
              <li>
                <a href="#/platform/finance" onClick={(e) => { e.preventDefault(); navigateTo('platform/finance'); }}>
                  Automated Freight Finance
                </a>
              </li>
              <li>
                <a href="#/platform/driver-app" onClick={(e) => { e.preventDefault(); navigateTo('platform/driver-app'); }}>
                  Driver Companion App
                </a>
              </li>
              <li>
                <a href="#/platform/integrations" onClick={(e) => { e.preventDefault(); navigateTo('platform/integrations'); }}>
                  Enterprise Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="footer-column-title">Solutions</h4>
            <ul className="footer-nav-links">
              <li>
                <a href="#/solutions/enterprises" onClick={(e) => { e.preventDefault(); navigateTo('solutions/enterprises'); }}>
                  For Enterprise Shippers
                </a>
              </li>
              <li>
                <a href="#/solutions/transporters" onClick={(e) => { e.preventDefault(); navigateTo('solutions/transporters'); }}>
                  For Fleet Owners &amp; Transporters
                </a>
              </li>
              <li>
                <a href="#/solutions/partners" onClick={(e) => { e.preventDefault(); navigateTo('solutions/partners'); }}>
                  For Channel Partners &amp; NBFCs
                </a>
              </li>
              <li>
                <a href="#/solutions/ftl" onClick={(e) => { e.preventDefault(); navigateTo('solutions/ftl'); }}>
                  Full Truckload (FTL) Network
                </a>
              </li>
              <li>
                <a href="#/solutions/return-load" onClick={(e) => { e.preventDefault(); navigateTo('solutions/return-load'); }}>
                  Return-Load Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="footer-column-title">Resources</h4>
            <ul className="footer-nav-links">
              <li>
                <a href="#/resources" onClick={(e) => { e.preventDefault(); navigateTo('resources'); }}>
                  Logistics Whitepapers
                </a>
              </li>
              <li>
                <a href="#/resources" onClick={(e) => { e.preventDefault(); navigateTo('resources'); }}>
                  Case Studies &amp; Benchmarks
                </a>
              </li>
              <li>
                <a href="#/resources" onClick={(e) => { e.preventDefault(); navigateTo('resources'); }}>
                  Digital POD Adoption Guide
                </a>
              </li>
              <li>
                <a href="#/resources" onClick={(e) => { e.preventDefault(); navigateTo('resources'); }}>
                  GST &amp; E-Way Bill Compliance
                </a>
              </li>
              <li>
                <a href="#/resources" onClick={(e) => { e.preventDefault(); navigateTo('resources'); }}>
                  Driver Welfare Charter
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-nav-links">
              <li>
                <a href="#/about" onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>
                  About EasyLane
                </a>
              </li>
              <li>
                <a href="#/about/vision" onClick={(e) => { e.preventDefault(); navigateTo('about/vision'); }}>
                  2-Year Strategic Vision
                </a>
              </li>
              <li>
                <a href="#/careers" onClick={(e) => { e.preventDefault(); navigateTo('careers'); }}>
                  Careers (We're Hiring!)
                </a>
              </li>
              <li>
                <a href="#/contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>
                  Contact Operations
                </a>
              </li>
              <li>
                <button
                  onClick={openDemoModal}
                  style={{ fontSize: '13.5px', color: 'var(--brand-blue)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  Request Consultation <ArrowUpRight size={13} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <div>
            &copy; {new Date().getFullYear()} EasyLane Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
              <ShieldCheck size={14} color="var(--status-emerald)" />
              Enterprise ISO &amp; SOC-2 Ready
            </span>
            <span>CIN: U63090MH2021PTC368412</span>
            <a href="https://easylane.co.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
              easylane.co.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

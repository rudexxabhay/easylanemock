import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Navbar() {
  const { currentPage, currentRoute, navigateTo, openDemoModal, openAiChat } = useNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'platform' | 'solutions' | 'about' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null); // 'platform' | 'solutions' | 'about' | null

  const navRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation & outside click management
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMegaMenu(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleTriggerMouseEnter = (menuKey) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMegaMenu(menuKey);
  };

  const handleTriggerMouseLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
  };

  const handlePanelMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handlePanelMouseLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
  };

  const toggleMegaMenu = (menuKey) => {
    setActiveMegaMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  const handleLinkClick = (pageId) => {
    navigateTo(pageId);
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  };

  const toggleMobileAccordion = (sectionKey) => {
    setMobileExpanded((prev) => (prev === sectionKey ? null : sectionKey));
  };

  return (
    <header
      ref={navRef}
      className={`site-nav-wrapper ${scrolled ? 'site-nav-scrolled' : ''}`}
    >
      <div className="nav-bar-split-container">
        {/* ===================================================================
            LEFT NAVIGATION GROUP (COMPACT FLOATING PILL)
            Logo + Platform + Solutions + Resources + About
            =================================================================== */}
        <div className="nav-group-pill nav-group-left">
          <a
            href="#home"
            className="brand-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            aria-label="EasyLane Home"
          >
            <img
              src="/easylane-logo.svg"
              alt="EasyLane"
              className="brand-logo-img"
              onError={(e) => {
                e.currentTarget.src = '/easylane-logo.png';
              }}
            />
          </a>

          <div className="nav-pill-separator" />

          <nav className="nav-links-list" aria-label="Main Navigation">
            {/* Platform Dropdown Trigger */}
            <button
              type="button"
              className={`nav-pill-link nav-dropdown-trigger ${
                activeMegaMenu === 'platform' ? 'active-dropdown' : ''
              } ${currentPage === 'platform' && !activeMegaMenu ? 'active' : ''}`}
              onMouseEnter={() => handleTriggerMouseEnter('platform')}
              onMouseLeave={handleTriggerMouseLeave}
              onClick={() => toggleMegaMenu('platform')}
              aria-expanded={activeMegaMenu === 'platform'}
              aria-haspopup="true"
            >
              <span>Platform</span>
              <span className="nav-dropdown-plus">+</span>
            </button>

            {/* Solutions Dropdown Trigger */}
            <button
              type="button"
              className={`nav-pill-link nav-dropdown-trigger ${
                activeMegaMenu === 'solutions' ? 'active-dropdown' : ''
              } ${currentPage === 'solutions' && !activeMegaMenu ? 'active' : ''}`}
              onMouseEnter={() => handleTriggerMouseEnter('solutions')}
              onMouseLeave={handleTriggerMouseLeave}
              onClick={() => toggleMegaMenu('solutions')}
              aria-expanded={activeMegaMenu === 'solutions'}
              aria-haspopup="true"
            >
              <span>Solutions</span>
              <span className="nav-dropdown-plus">+</span>
            </button>

            {/* Resources Direct Link */}
            <a
              href="#/resources"
              className={`nav-pill-link ${currentPage === 'resources' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('resources');
              }}
            >
              <span>Resources</span>
            </a>

            {/* About Dropdown Trigger */}
            <button
              type="button"
              className={`nav-pill-link nav-dropdown-trigger ${
                activeMegaMenu === 'about' ? 'active-dropdown' : ''
              } ${currentPage === 'about' && !activeMegaMenu ? 'active' : ''}`}
              onMouseEnter={() => handleTriggerMouseEnter('about')}
              onMouseLeave={handleTriggerMouseLeave}
              onClick={() => toggleMegaMenu('about')}
              aria-expanded={activeMegaMenu === 'about'}
              aria-haspopup="true"
            >
              <span>About</span>
              <span className="nav-dropdown-plus">+</span>
            </button>
          </nav>
        </div>

        {/* ===================================================================
            RIGHT NAVIGATION GROUP (COMPACT FLOATING PILL)
            Ask AI + Book a Demo + Separate Arrow Control
            =================================================================== */}
        <div className="nav-group-pill nav-group-right">
          {/* Ask EasyLane AI Button */}
          <button
            onClick={openAiChat}
            className="nav-ai-ask-btn"
            aria-label="Ask EasyLane AI"
            title="Ask EasyLane AI Assistant"
          >
            <Sparkles size={13} className="ai-sparkle-icon" />
            <span className="ask-btn-text">Ask AI</span>
          </button>

          {/* Book a Demo with Separate Arrow Control */}
          <div className="nav-cta-cluster">
            <button
              onClick={openDemoModal}
              className="nav-cta-main-btn"
              aria-label="Book a Demo"
            >
              <span>Book a Demo</span>
            </button>
            <button
              onClick={openDemoModal}
              className="nav-cta-arrow-btn"
              aria-label="Book a Demo Action"
            >
              <ArrowUpRight size={13} />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* ===================================================================
            UNIFIED MEGA-MENU DROPDOWN PANEL (RAFT HIGH-FIDELITY RECONSTRUCTION)
            Overlays page without hero displacement
            =================================================================== */}
        {activeMegaMenu && (
          <div
            className="nav-megamenu-panel"
            role="region"
            aria-label={`${activeMegaMenu} Navigation Menu`}
            onMouseEnter={handlePanelMouseEnter}
            onMouseLeave={handlePanelMouseLeave}
          >
            {/* PLATFORM MEGA MENU */}
            {activeMegaMenu === 'platform' && (
              <>
                <div
                  className="megamenu-featured-card"
                  onClick={() => handleLinkClick('platform')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="megamenu-card-img-wrap">
                    <img
                      src="/easylane-hero-light.jpg"
                      alt="Next-Gen Freight TMS"
                      className="megamenu-card-img"
                    />
                  </div>
                  <div className="megamenu-card-content">
                    <div>
                      <div className="megamenu-card-tag">CONNECTED TMS</div>
                      <div className="megamenu-card-title">Next-Gen Road Freight Platform</div>
                      <div className="megamenu-card-desc">
                        Unified command center connecting shippers, fleet operators, and drivers.
                      </div>
                    </div>
                    <div className="megamenu-card-cta">
                      <span>Explore Platform</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </div>
                </div>

                <div className="megamenu-columns-grid cols-3">
                  <div className="megamenu-column">
                    <div className="megamenu-column-title">PLATFORM</div>
                    <div className="megamenu-column-list">
                      <a
                        href="#/platform/tms"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/tms');
                        }}
                      >
                        <div className="megamenu-link-title">Multi-Modal TMS</div>
                        <div className="megamenu-link-desc">Unified dispatch &amp; freight management</div>
                      </a>
                      <a
                        href="#/platform/control-tower"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/control-tower');
                        }}
                      >
                        <div className="megamenu-link-title">Real-Time Visibility</div>
                        <div className="megamenu-link-desc">GPS, SIM &amp; FASTag live tracking</div>
                      </a>
                      <a
                        href="#/platform/dispatch"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/dispatch');
                        }}
                      >
                        <div className="megamenu-link-title">Intelligent Dispatch</div>
                        <div className="megamenu-link-desc">Automated vehicle allocation</div>
                      </a>
                      <a
                        href="#/platform/driver-app"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/driver-app');
                        }}
                      >
                        <div className="megamenu-link-title">Driver Mobile Workflow</div>
                        <div className="megamenu-link-desc">Trip management &amp; digital POD</div>
                      </a>
                    </div>
                  </div>

                  <div className="megamenu-column">
                    <div className="megamenu-column-title">OPERATIONS</div>
                    <div className="megamenu-column-list">
                      <a
                        href="#/platform/load-matching"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/load-matching');
                        }}
                      >
                        <div className="megamenu-link-title">Automated Matching</div>
                        <div className="megamenu-link-desc">Instant vehicle placement</div>
                      </a>
                      <a
                        href="#/platform/epod"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/epod');
                        }}
                      >
                        <div className="megamenu-link-title">e-Way Bills &amp; ePOD</div>
                        <div className="megamenu-link-desc">Instant paperless reconciliation</div>
                      </a>
                      <a
                        href="#/platform/indent-management"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/indent-management');
                        }}
                      >
                        <div className="megamenu-link-title">Indent Management</div>
                        <div className="megamenu-link-desc">Tenders, spot rates &amp; bidding</div>
                      </a>
                      <a
                        href="#/platform/exceptions"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/exceptions');
                        }}
                      >
                        <div className="megamenu-link-title">Exception Control</div>
                        <div className="megamenu-link-desc">Proactive alerts &amp; delay handling</div>
                      </a>
                    </div>
                  </div>

                  <div className="megamenu-column">
                    <div className="megamenu-column-title">INTELLIGENCE</div>
                    <div className="megamenu-column-list">
                      <a
                        href="#/platform/ai-routing"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/ai-routing');
                        }}
                      >
                        <div className="megamenu-link-title">AI Route Optimization</div>
                        <div className="megamenu-link-desc">Toll, fuel &amp; mileage efficiency</div>
                      </a>
                      <a
                        href="#/platform/analytics"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/analytics');
                        }}
                      >
                        <div className="megamenu-link-title">Carrier Analytics</div>
                        <div className="megamenu-link-desc">SLA &amp; reliability benchmarks</div>
                      </a>
                      <a
                        href="#/platform/fastag-fuel"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/fastag-fuel');
                        }}
                      >
                        <div className="megamenu-link-title">FASTag &amp; Fuel AI</div>
                        <div className="megamenu-link-desc">Automated expense audits</div>
                      </a>
                      <a
                        href="#/platform/integrations"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/integrations');
                        }}
                      >
                        <div className="megamenu-link-title">Predictive ETAs</div>
                        <div className="megamenu-link-desc">Machine-learned transit timings</div>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* SOLUTIONS MEGA MENU */}
            {activeMegaMenu === 'solutions' && (
              <>
                <div
                  className="megamenu-featured-card"
                  onClick={() => handleLinkClick('solutions')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="megamenu-card-img-wrap">
                    <img
                      src="/easylane-hero-visibility.jpg"
                      alt="Tailored Logistics Solutions"
                      className="megamenu-card-img"
                    />
                  </div>
                  <div className="megamenu-card-content">
                    <div>
                      <div className="megamenu-card-tag">TAILORED SOLUTIONS</div>
                      <div className="megamenu-card-title">Built for Every Freight Stakeholder</div>
                      <div className="megamenu-card-desc">
                        Custom digital workflows engineered for Indian logistics complexity.
                      </div>
                    </div>
                    <div className="megamenu-card-cta">
                      <span>View All Solutions</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </div>
                </div>

                <div className="megamenu-columns-grid cols-2">
                  <div className="megamenu-column">
                    <div className="megamenu-column-title">BY AUDIENCE</div>
                    <div className="megamenu-column-list">
                      <a
                        href="#/solutions/enterprises"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('solutions/enterprises');
                        }}
                      >
                        <div className="megamenu-link-title">Enterprises &amp; Shippers</div>
                        <div className="megamenu-link-desc">Automate carrier indents, SLA tracking &amp; freight invoices</div>
                      </a>
                      <a
                        href="#/solutions/transporters"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('solutions/transporters');
                        }}
                      >
                        <div className="megamenu-link-title">Fleet Owners &amp; Transporters</div>
                        <div className="megamenu-link-desc">Maximize truck utilization, cut empty return trips &amp; manage drivers</div>
                      </a>
                      <a
                        href="#/solutions/logistics-teams"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('solutions/logistics-teams');
                        }}
                      >
                        <div className="megamenu-link-title">Logistics Operations Teams</div>
                        <div className="megamenu-link-desc">Single control tower for dispatch, alerts &amp; exception management</div>
                      </a>
                      <a
                        href="#/solutions/drivers"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('solutions/drivers');
                        }}
                      >
                        <div className="megamenu-link-title">Drivers &amp; Field Crews</div>
                        <div className="megamenu-link-desc">Vernacular mobile app for digital challans, fast fuel &amp; navigation</div>
                      </a>
                    </div>
                  </div>

                  <div className="megamenu-column">
                    <div className="megamenu-column-title">BY CAPABILITY</div>
                    <div className="megamenu-column-list">
                      <a
                        href="#/solutions/ftl"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('solutions/ftl');
                        }}
                      >
                        <div className="megamenu-link-title">Full Truckload (FTL) Operations</div>
                        <div className="megamenu-link-desc">Long-haul route optimization &amp; real-time lane tracking</div>
                      </a>
                      <a
                        href="#/solutions/ptl"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('solutions/ptl');
                        }}
                      >
                        <div className="megamenu-link-title">Part Truckload (PTL) Consolidation</div>
                        <div className="megamenu-link-desc">Multi-point pickups, hub drops &amp; smart space utilization</div>
                      </a>
                      <a
                        href="#/solutions/billing"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('solutions/billing');
                        }}
                      >
                        <div className="megamenu-link-title">Automated Billing &amp; Fast Payouts</div>
                        <div className="megamenu-link-desc">Instant ePOD verification, digital settlements &amp; diesel advances</div>
                      </a>
                      <a
                        href="#/solutions/tracking"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('solutions/tracking');
                        }}
                      >
                        <div className="megamenu-link-title">FASTag &amp; SIM-Based Tracking</div>
                        <div className="megamenu-link-desc">Reliable nationwide tracking without proprietary GPS hardware</div>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* ABOUT MEGA MENU */}
            {activeMegaMenu === 'about' && (
              <>
                <div
                  className="megamenu-featured-card"
                  onClick={() => handleLinkClick('about')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="megamenu-card-img-wrap">
                    <img
                      src="/easylane-hero-finance.jpg"
                      alt="Modernizing Indian Road Logistics"
                      className="megamenu-card-img"
                    />
                  </div>
                  <div className="megamenu-card-content">
                    <div>
                      <div className="megamenu-card-tag">OUR MISSION</div>
                      <div className="megamenu-card-title">Modernizing Indian Road Logistics</div>
                      <div className="megamenu-card-desc">
                        Empowering 10M+ transporters with intelligent digital infrastructure.
                      </div>
                    </div>
                    <div className="megamenu-card-cta">
                      <span>Read Our Story</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </div>
                </div>

                <div className="megamenu-columns-grid cols-2">
                  <div className="megamenu-column">
                    <div className="megamenu-column-title">COMPANY &amp; VISION</div>
                    <div className="megamenu-column-list">
                      <a
                        href="#/about"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('about');
                        }}
                      >
                        <div className="megamenu-link-title">About EasyLane</div>
                        <div className="megamenu-link-desc">Building the connected operating system for Indian freight</div>
                      </a>
                      <a
                        href="#/about/vision"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('about/vision');
                        }}
                      >
                        <div className="megamenu-link-title">2-Year Strategic Vision</div>
                        <div className="megamenu-link-desc">Logistics veterans &amp; technologists solving supply chain friction</div>
                      </a>
                      <a
                        href="#/about"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('about');
                        }}
                      >
                        <div className="megamenu-link-title">Technology &amp; Security</div>
                        <div className="megamenu-link-desc">Enterprise-grade architecture with 99.9% uptime SLA</div>
                      </a>
                      <a
                        href="#/resources"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('resources');
                        }}
                      >
                        <div className="megamenu-link-title">News &amp; Research</div>
                        <div className="megamenu-link-desc">Product whitepapers, operational guides &amp; industry insights</div>
                      </a>
                    </div>
                  </div>

                  <div className="megamenu-column">
                    <div className="megamenu-column-title">CONNECT &amp; TALENT</div>
                    <div className="megamenu-column-list">
                      <a
                        href="#/careers"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('careers');
                        }}
                      >
                        <div className="megamenu-link-title">Careers (We're Hiring!)</div>
                        <div className="megamenu-link-desc">Shape the future of road freight with our Mumbai product team</div>
                      </a>
                      <a
                        href="#/solutions/partners"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('solutions/partners');
                        }}
                      >
                        <div className="megamenu-link-title">Partner Network</div>
                        <div className="megamenu-link-desc">Integrate with fuel, FASTag and insurance providers</div>
                      </a>
                      <a
                        href="#/contact"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('contact');
                        }}
                      >
                        <div className="megamenu-link-title">Contact Operations</div>
                        <div className="megamenu-link-desc">Direct line to our 24/7 Mumbai command center</div>
                      </a>
                      <a
                        href="#/platform/integrations"
                        className="megamenu-link-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('platform/integrations');
                        }}
                      >
                        <div className="megamenu-link-title">Developer API Docs</div>
                        <div className="megamenu-link-desc">RESTful webhooks for ERP, WMS and GPS integration</div>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* ===================================================================
          MOBILE NAVIGATION DRAWER WITH NESTED ACCORDIONS
          =================================================================== */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-label="Mobile Navigation">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a
              href="#home"
              className={`mobile-drawer-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
            >
              Home
            </a>

            {/* Platform Nested Accordion */}
            <div className="mobile-drawer-accordion">
              <button
                type="button"
                className="mobile-accordion-toggle"
                onClick={() => toggleMobileAccordion('platform')}
                aria-expanded={mobileExpanded === 'platform'}
              >
                <span>Platform</span>
                <ChevronDown
                  size={16}
                  className={`mobile-accordion-icon ${
                    mobileExpanded === 'platform' ? 'rotated' : ''
                  }`}
                />
              </button>
              {mobileExpanded === 'platform' && (
                <div className="mobile-accordion-panel">
                  <div className="mobile-accordion-section-title">PLATFORM</div>
                  <a
                    href="#/platform/tms"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('platform/tms');
                    }}
                  >
                    Multi-Modal TMS
                  </a>
                  <a
                    href="#/platform/control-tower"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('platform/control-tower');
                    }}
                  >
                    Real-Time Fleet Visibility
                  </a>
                  <a
                    href="#/platform/dispatch"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('platform/dispatch');
                    }}
                  >
                    Intelligent Dispatch &amp; Routing
                  </a>
                  <a
                    href="#/platform/driver-app"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('platform/driver-app');
                    }}
                  >
                    Driver Mobile Workflow
                  </a>

                  <div className="mobile-accordion-section-title">OPERATIONS</div>
                  <a
                    href="#/platform/load-matching"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('platform/load-matching');
                    }}
                  >
                    Automated Load Matching
                  </a>
                  <a
                    href="#/platform/epod"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('platform/epod');
                    }}
                  >
                    Digital e-Way Bills &amp; ePOD
                  </a>
                  <a
                    href="#/platform/indent-management"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('platform/indent-management');
                    }}
                  >
                    Indent &amp; Tender Management
                  </a>

                  <div className="mobile-accordion-section-title">INTELLIGENCE</div>
                  <a
                    href="#/platform/ai-routing"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('platform/ai-routing');
                    }}
                  >
                    AI Route &amp; Cost Optimization
                  </a>
                  <a
                    href="#/platform/fastag-fuel"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('platform/fastag-fuel');
                    }}
                  >
                    FASTag &amp; Fuel Intelligence
                  </a>
                </div>
              )}
            </div>

            {/* Solutions Nested Accordion */}
            <div className="mobile-drawer-accordion">
              <button
                type="button"
                className="mobile-accordion-toggle"
                onClick={() => toggleMobileAccordion('solutions')}
                aria-expanded={mobileExpanded === 'solutions'}
              >
                <span>Solutions</span>
                <ChevronDown
                  size={16}
                  className={`mobile-accordion-icon ${
                    mobileExpanded === 'solutions' ? 'rotated' : ''
                  }`}
                />
              </button>
              {mobileExpanded === 'solutions' && (
                <div className="mobile-accordion-panel">
                  <div className="mobile-accordion-section-title">BY AUDIENCE</div>
                  <a
                    href="#/solutions/enterprises"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('solutions/enterprises');
                    }}
                  >
                    Enterprises &amp; Shippers
                  </a>
                  <a
                    href="#/solutions/transporters"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('solutions/transporters');
                    }}
                  >
                    Fleet Owners &amp; Transporters
                  </a>
                  <a
                    href="#/solutions/logistics-teams"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('solutions/logistics-teams');
                    }}
                  >
                    Logistics Operations Teams
                  </a>
                  <a
                    href="#/solutions/drivers"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('solutions/drivers');
                    }}
                  >
                    Drivers &amp; Field Crews
                  </a>

                  <div className="mobile-accordion-section-title">BY CAPABILITY</div>
                  <a
                    href="#/solutions/ftl"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('solutions/ftl');
                    }}
                  >
                    Full Truckload (FTL) Operations
                  </a>
                  <a
                    href="#/solutions/ptl"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('solutions/ptl');
                    }}
                  >
                    Part Truckload (PTL) Consolidation
                  </a>
                  <a
                    href="#/solutions/billing"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('solutions/billing');
                    }}
                  >
                    Automated Billing &amp; Fast Payouts
                  </a>
                  <a
                    href="#/solutions/tracking"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('solutions/tracking');
                    }}
                  >
                    FASTag &amp; SIM-Based Tracking
                  </a>
                </div>
              )}
            </div>

            {/* Resources Direct Link */}
            <a
              href="#/resources"
              className={`mobile-drawer-link ${currentPage === 'resources' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('resources');
              }}
            >
              Resources
            </a>

            {/* About Nested Accordion */}
            <div className="mobile-drawer-accordion">
              <button
                type="button"
                className="mobile-accordion-toggle"
                onClick={() => toggleMobileAccordion('about')}
                aria-expanded={mobileExpanded === 'about'}
              >
                <span>About</span>
                <ChevronDown
                  size={16}
                  className={`mobile-accordion-icon ${
                    mobileExpanded === 'about' ? 'rotated' : ''
                  }`}
                />
              </button>
              {mobileExpanded === 'about' && (
                <div className="mobile-accordion-panel">
                  <div className="mobile-accordion-section-title">COMPANY &amp; VISION</div>
                  <a
                    href="#/about"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('about');
                    }}
                  >
                    About EasyLane
                  </a>
                  <a
                    href="#/about/vision"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('about/vision');
                    }}
                  >
                    2-Year Strategic Vision
                  </a>
                  <a
                    href="#/about"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('about');
                    }}
                  >
                    Technology &amp; Security
                  </a>
                  <a
                    href="#/resources"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('resources');
                    }}
                  >
                    News &amp; Research
                  </a>

                  <div className="mobile-accordion-section-title">CONNECT &amp; TALENT</div>
                  <a
                    href="#/careers"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('careers');
                    }}
                  >
                    Careers (We're Hiring!)
                  </a>
                  <a
                    href="#/solutions/partners"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('solutions/partners');
                    }}
                  >
                    Partner Network
                  </a>
                  <a
                    href="#/contact"
                    className="mobile-accordion-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('contact');
                    }}
                  >
                    Contact Operations
                  </a>
                </div>
              )}
            </div>

            <a
              href="#/contact"
              className={`mobile-drawer-link ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
            >
              Contact Us
            </a>
          </div>

          <div className="mobile-drawer-actions">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAiChat();
              }}
              className="btn-pill btn-pill-glass"
              style={{
                justifyContent: 'center',
                width: '100%',
                padding: '10px 16px',
                color: 'var(--navy-deep)',
                borderColor: 'var(--border-medium)',
                background: 'var(--canvas-secondary)',
              }}
            >
              <Sparkles size={14} color="var(--brand-blue)" />
              <span>Ask EasyLane AI</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openDemoModal();
              }}
              className="btn-pill btn-pill-dark"
              style={{ justifyContent: 'center', width: '100%', padding: '11px 18px' }}
            >
              <span>Book a Demo</span>
              <div className="btn-arrow-circle">
                <ArrowUpRight size={13} />
              </div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

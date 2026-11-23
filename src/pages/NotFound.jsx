import React from 'react';
import { Compass, Home, Truck, Layers, Mail, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function NotFound() {
  const { navigateTo } = useNavigation();

  return (
    <div className="not-found-page" style={{ paddingTop: 'clamp(100px, 10vw, 132px)', paddingBottom: '80px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="page-container">
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div className="badge-mono badge-mono-light" style={{ marginBottom: '16px' }}>
            <span className="badge-dot" style={{ background: '#DC2626' }} />
            HTTP 404 • UNRESOLVED CORRIDOR
          </div>
          
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, color: 'var(--navy-deep)', lineHeight: 1.12, marginBottom: '18px' }}>
            The Lane You're Looking For Doesn't Exist
          </h1>
          
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
            The destination URL was not found on this freight network. It may have been relocated, or the link has changed. Return to the main command center or select a valid logistics corridor below.
          </p>

          <div className="grid-2col-responsive" style={{ gap: '16px', marginBottom: '36px', textAlign: 'left' }}>
            <div 
              onClick={() => navigateTo('home')}
              style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '20px', cursor: 'pointer', transition: 'all var(--transition-fast)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-blue)', marginBottom: '6px' }}>
                <Home size={18} />
                <strong style={{ fontSize: '15px', color: 'var(--navy-deep)' }}>Home Command Center</strong>
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', margin: 0 }}>Return to EasyLane homepage and hero overview.</p>
            </div>

            <div 
              onClick={() => navigateTo('platform')}
              style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '20px', cursor: 'pointer', transition: 'all var(--transition-fast)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-blue)', marginBottom: '6px' }}>
                <Truck size={18} />
                <strong style={{ fontSize: '15px', color: 'var(--navy-deep)' }}>Autonomous TMS</strong>
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', margin: 0 }}>Explore fleet dispatch, control tower, and freight finance.</p>
            </div>

            <div 
              onClick={() => navigateTo('solutions')}
              style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '20px', cursor: 'pointer', transition: 'all var(--transition-fast)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-blue)', marginBottom: '6px' }}>
                <Layers size={18} />
                <strong style={{ fontSize: '15px', color: 'var(--navy-deep)' }}>Targeted Solutions</strong>
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', margin: 0 }}>Custom workflows for shippers, fleet owners, and drivers.</p>
            </div>

            <div 
              onClick={() => navigateTo('contact')}
              style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '20px', cursor: 'pointer', transition: 'all var(--transition-fast)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-blue)', marginBottom: '6px' }}>
                <Mail size={18} />
                <strong style={{ fontSize: '15px', color: 'var(--navy-deep)' }}>Contact Operations Hub</strong>
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', margin: 0 }}>Get direct support from our Mumbai logistics team.</p>
            </div>
          </div>

          <button onClick={() => navigateTo('home')} className="btn-pill btn-pill-dark">
            <span>Return to Home Corridor</span>
            <div className="btn-arrow-circle">
              <ArrowRight size={13} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

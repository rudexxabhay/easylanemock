import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const NavigationContext = createContext(null);

// Route alias normalization mapping
const ROUTE_ALIASES = {
  'platform/transportation-management': 'platform/tms',
  'platform/visibility': 'platform/control-tower',
  'platform/fleet-operations': 'platform/dispatch',
  'platform/booking-management': 'platform/load-matching',
  'platform/documentation': 'platform/epod',
  'platform/easylane-ai': 'platform/ai-routing',
  'solutions/operations': 'solutions/logistics-teams',
  'solutions/fintech': 'solutions/billing',
};

// Valid recognized routes (exact or prefix)
const VALID_ROOTS = ['home', 'platform', 'solutions', 'resources', 'about', 'careers', 'contact'];

export function normalizeRoute(rawRoute) {
  if (!rawRoute || rawRoute === '/' || rawRoute === '#' || rawRoute === 'home') {
    return 'home';
  }

  // Strip leading/trailing hashes, slashes, and query params
  let cleaned = rawRoute.replace(/^[#/]+/, '').replace(/\/+$/, '').split('?')[0].toLowerCase().trim();

  // Handle aliases
  if (ROUTE_ALIASES[cleaned]) {
    cleaned = ROUTE_ALIASES[cleaned];
  }

  if (!cleaned) return 'home';

  // Check root
  const root = cleaned.split('/')[0];
  if (!VALID_ROOTS.includes(root)) {
    return 'not-found';
  }

  return cleaned;
}

export function NavigationProvider({ children }) {
  const getInitialRoute = () => {
    // Check hash first (e.g. #/platform/tms or #platform)
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      return normalizeRoute(hash);
    }
    // Check pathname (e.g. /platform/tms)
    const pathname = window.location.pathname;
    if (pathname && pathname !== '/') {
      return normalizeRoute(pathname);
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);

  // Compute top-level page for header navigation highlighting
  const currentPage = (() => {
    if (currentRoute === 'home') return 'home';
    const root = currentRoute.split('/')[0];
    if (root === 'careers') return 'about';
    return root;
  })();

  const navigateTo = useCallback((route) => {
    const normalized = normalizeRoute(route);
    setCurrentRoute(normalized);

    // Update URL hash for robust static hosting / deep linking
    const targetHash = normalized === 'home' ? '' : `/${normalized}`;
    if (window.location.hash.replace(/^#/, '') !== targetHash) {
      window.location.hash = targetHash;
    }

    // Scroll to top instantly on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      const parsed = hash && hash.length > 1 ? normalizeRoute(hash) : normalizeRoute(window.location.pathname);
      setCurrentRoute(parsed);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        currentRoute,
        currentPage,
        navigateTo,
        isDemoModalOpen,
        openDemoModal: () => setIsDemoModalOpen(true),
        closeDemoModal: () => setIsDemoModalOpen(false),
        isAiChatOpen,
        openAiChat: () => setIsAiChatOpen(true),
        closeAiChat: () => setIsAiChatOpen(false),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}

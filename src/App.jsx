import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ModalDemo } from './components/ModalDemo';
import { EasyLaneAiChat } from './components/EasyLaneAiChat';
import { Home } from './pages/Home';
import { Platform } from './pages/Platform';
import { Solutions } from './pages/Solutions';
import { Resources } from './pages/Resources';
import { About } from './pages/About';
import { Vision } from './pages/Vision';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function MainRouter() {
  const { currentRoute, isAiChatOpen, closeAiChat } = useNavigation();

  const renderPage = () => {
    // 1. Home
    if (currentRoute === 'home') {
      return <Home />;
    }

    // 2. Platform Routes (main or sub-route)
    if (currentRoute === 'platform' || currentRoute.startsWith('platform/')) {
      const subRoute = currentRoute.replace(/^platform\/?/, '');
      return <Platform subRoute={subRoute} />;
    }

    // 3. Solutions Routes (main or sub-route)
    if (currentRoute === 'solutions' || currentRoute.startsWith('solutions/')) {
      const subRoute = currentRoute.replace(/^solutions\/?/, '');
      return <Solutions subRoute={subRoute} />;
    }

    // 4. Resources
    if (currentRoute === 'resources' || currentRoute.startsWith('resources/')) {
      const resourceSlug = currentRoute.replace(/^resources\/?/, '');
      return <Resources resourceSlug={resourceSlug} />;
    }

    // 5. Vision (dedicated route under about/vision)
    if (currentRoute === 'about/vision') {
      return <Vision />;
    }

    // 6. About Master & sub-routes
    if (currentRoute === 'about' || currentRoute.startsWith('about/')) {
      const subRoute = currentRoute.replace(/^about\/?/, '');
      return <About subRoute={subRoute} />;
    }

    // 7. Careers
    if (currentRoute === 'careers') {
      return <Careers />;
    }

    // 8. Contact
    if (currentRoute === 'contact') {
      return <Contact />;
    }

    // 9. 404 Fallback
    return <NotFound />;
  };

  return (
    <div className="app-shell" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>
      <Footer />
      <ModalDemo />
      <EasyLaneAiChat isOpen={isAiChatOpen} onClose={closeAiChat} />
    </div>
  );
}

export function App() {
  return (
    <NavigationProvider>
      <MainRouter />
    </NavigationProvider>
  );
}

export default App;

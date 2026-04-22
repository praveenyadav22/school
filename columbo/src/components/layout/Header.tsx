'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Plus, Minus } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/shared/SocialIcons';
import { navigationItems } from '@/lib/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [expandedDrawers, setExpandedDrawers] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (key: string) => {
    setExpandedDrawers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const closeSideNav = () => {
    setSideNavOpen(false);
  };

  return (
    <>
      {/* Side Nav Backdrop */}
      <div
        className="home-sideNav-virtual-container"
        onClick={closeSideNav}
        style={{ visibility: sideNavOpen ? 'visible' : 'hidden', opacity: sideNavOpen ? 1 : 0, transition: '0.4s' }}
      />

      {/* Side Navigation */}
      <div className="home-sideNav" style={{ left: sideNavOpen ? '0' : '-100%' }}>
        <div className="side_navigation" id="sideNav">
          <div className="column_alignment" style={{ height: '100%' }}>
            {/* Side Nav Header */}
            <div className="row_alignment align_center" style={{ marginBottom: 16 }}>
              <Link href="/" style={{ width: '80%' }} onClick={closeSideNav}>
                <img
                  src="/images/logo/scps_main_logo.png"
                  style={{ width: '100%', padding: 10, objectFit: 'contain' }}
                  alt="SCPS Logo"
                />
              </Link>
              <span className="fill" />
              <X
                size={20}
                style={{ color: 'var(--colorPrimary)', alignSelf: 'flex-end', cursor: 'pointer', padding: 16 }}
                onClick={closeSideNav}
              />
            </div>

            {/* Side Nav Content */}
            <div className="side_navigation_content column_alignment">
              <div className="row_alignment wrap align_center" style={{ padding: 8 }}>
                <Link href="/public-disclosure" target="_blank" className="bordered_button fill" onClick={closeSideNav}>
                  Public Disclosure
                </Link>
                <Link href="https://erp.quickcampus.online/auth" target="_blank" className="bordered_button fill" onClick={closeSideNav}>
                  Student Login
                </Link>
                <Link href="https://erp.quickcampus.online/auth" target="_blank" className="bordered_button fill" onClick={closeSideNav}>
                  Staff Login
                </Link>
                <Link
                  href="https://erp.quickcampus.online/registration/1c029836-58df-467a-aa1c-a9f73f3e2b05"
                  target="_blank"
                  className="bordered_button highlight fill"
                  onClick={closeSideNav}
                >
                  Apply Now
                </Link>
              </div>

              {navigationItems.map((item) => {
                if (!item.children) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="drawer_item"
                      onClick={closeSideNav}
                      target={item.href.endsWith('.pdf') ? '_blank' : undefined}
                    >
                      <span>{item.label}</span>
                    </Link>
                  );
                }

                const key = item.label.toLowerCase().replace(/\s+/g, '_');
                return (
                  <div key={item.label}>
                    <div
                      className="row_alignment heading"
                      onClick={() => toggleDrawer(key)}
                      style={{
                        fontFamily: 'var(--main-font)',
                        fontWeight: 'bold',
                        borderBottom: '1px solid var(--divider)',
                        padding: '8px 4px',
                        margin: '8px 16px 0',
                        color: '#212121',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                      }}
                    >
                      <span className="fill">{item.label}</span>
                      {expandedDrawers[key] ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                    <div
                      className="column_alignment"
                      style={{ display: expandedDrawers[key] ? 'flex' : 'none' }}
                    >
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} className="drawer_item" onClick={closeSideNav}>
                          <span>{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div id="toolbar_root" className={`toolbar_root column_alignment${isScrolled ? '' : ' full'}`}>
        <div id="toolbar" className="row_alignment align_center" style={{ position: 'relative' }}>
          <div className="main_content row_alignment" style={{ alignSelf: 'center' }}>
            {/* Logo */}
            <div className="column_alignment logo_wrapper">
              <Link id="SCPS_logo" href="/" />
            </div>

            <div className="column_alignment fill">
              {/* Top Bar (Desktop) */}
              <div className="row_alignment on_desktop toolbar_menu_section align_center" style={{ justifyContent: 'flex-end' }}>
                <a href="https://www.instagram.com/stcolumboschool" target="_blank" style={{ margin: 8 }}>
                  <InstagramIcon size={18} />
                </a>
                <a href="https://www.facebook.com/stcolumboschool/" target="_blank" style={{ margin: 8 }}>
                  <FacebookIcon size={18} />
                </a>
                <a href="/public-disclosure" target="_blank" className="bordered_button">Public Disclosure</a>
                <a href="https://erp.quickcampus.online/auth" target="_blank" className="bordered_button">Student Login</a>
                <a href="https://erp.quickcampus.online/auth" target="_blank" className="bordered_button">Staff Login</a>
                <a
                  href="https://erp.quickcampus.online/registration/1c029836-58df-467a-aa1c-a9f73f3e2b05"
                  target="_blank"
                  className="bordered_button highlight"
                >
                  Apply Now
                </a>
              </div>

              {/* Main Nav (Desktop) */}
              <div className="row_alignment on_desktop fill toolbar_menu_section" style={{ justifyContent: 'flex-end' }}>
                {navigationItems.map((item) => {
                  if (!item.children) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="menu_item"
                        target={item.href.endsWith('.pdf') ? '_blank' : undefined}
                      >
                        <span>{item.label}</span>
                      </Link>
                    );
                  }

                  return (
                    <div key={item.label} className="toolbar_dropdown_container on_desktop row_alignment" style={{ position: 'relative' }}>
                      <a href="#" className="menu_item">
                        <span>
                          {item.label}&nbsp;
                          <ChevronDown size={12} style={{ opacity: 0.5, display: 'inline' }} />
                        </span>
                      </a>
                      <div className="toolbar_dropdown_content column_alignment">
                        {item.children.map((child) => (
                          <Link key={child.label} href={child.href} className="drawer_item">
                            <span>{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Hamburger */}
            <span
              className="menu_item on_mobile"
              onClick={() => setSideNavOpen(true)}
              style={{ position: 'relative', paddingRight: 16, cursor: 'pointer' }}
            >
              <Menu size={22} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

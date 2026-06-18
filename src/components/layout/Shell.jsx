import { Bot, CalendarDays, ChartNoAxesCombined, GraduationCap, Home, Map, Menu, Users, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import AIAssistant from '../AIAssistant.jsx';

const navItems = [
  { to: '/', label: 'Twin', icon: Home },
  { to: '/navigation', label: 'Navigate', icon: Map },
  { to: '/student', label: 'Student', icon: GraduationCap },
  { to: '/faculty', label: 'Faculty', icon: Users },
  { to: '/analytics', label: 'Analytics', icon: ChartNoAxesCombined },
  { to: '/events', label: 'Events', icon: CalendarDays },
];

export default function Shell({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-void text-white">
      <ParticleField />
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-lg px-3 py-3">
          <NavLink to="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary shadow-glow">
              <Bot size={20} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-wide">Nexus University</span>
              <span className="block truncate text-xs text-slate-400">Digital Twin Command</span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs text-accent">Live campus</span>
            <NavLink
              to="/navigation"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-primary"
            >
              Find route
            </NavLink>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/10 lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mx-auto mt-3 grid max-w-7xl gap-2 rounded-lg p-3 lg:hidden"
          >
            {navItems.map((item) => (
              <NavItem key={item.to} {...item} onClick={() => setOpen(false)} />
            ))}
          </motion.div>
        )}
      </header>

      <main className="relative z-10">{children}</main>
      <AIAssistant />
      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        Nexus Digital Twin orchestrates navigation, learning, facilities, and analytics across the intelligent campus.
      </footer>
    </div>
  );
}

function NavItem({ to, label, icon: Icon, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
          isActive ? 'bg-primary/15 text-primary' : 'text-slate-300 hover:bg-white/10 hover:text-white'
        }`
      }
    >
      <Icon size={16} />
      <span>{label}</span>
    </NavLink>
  );
}

function ParticleField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
      {Array.from({ length: 42 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-primary/70"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 53) % 100}%`,
            animation: `float ${5 + (index % 7)}s ease-in-out ${index * 0.13}s infinite`,
            boxShadow: index % 3 === 0 ? '0 0 18px #7B61FF' : '0 0 14px #00E5FF',
          }}
        />
      ))}
    </div>
  );
}

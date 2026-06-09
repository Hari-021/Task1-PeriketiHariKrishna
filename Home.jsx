import { ArrowRight, Building2, Moon, Route, SunMedium, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CampusScene from '../components/three/CampusScene.jsx';
import PageTransition from '../components/PageTransition.jsx';
import { buildings, stats } from '../data/campus.js';
import { useCounter } from '../hooks/useCounter.js';

export default function Home() {
  const [selected, setSelected] = useState(buildings[0]);
  const [nightMode, setNightMode] = useState(true);

  return (
    <PageTransition className="min-h-screen px-4 pb-16 pt-28 sm:px-6">
      <section className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-primary"
          >
            Real-time digital twin for intelligent universities
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            Nexus University Smart Campus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-5 max-w-2xl text-lg leading-8 text-slate-300"
          >
            Explore every building, route, event, classroom, and live campus signal through a premium spatial command center.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link to="/navigation" className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]">
              Explore campus <ArrowRight size={18} />
            </Link>
            <Link to="/analytics" className="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15">
              View analytics <Zap size={18} />
            </Link>
          </motion.div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <CounterStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="neon-border rounded-lg p-[1px] shadow-violet">
            <CampusScene activeBuilding={selected} onSelectBuilding={setSelected} nightMode={nightMode} />
          </div>
          <div className="absolute left-4 top-4 z-10 flex gap-2">
            <button
              className="glass flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-200"
              onClick={() => setNightMode((value) => !value)}
            >
              {nightMode ? <Moon size={16} /> : <SunMedium size={16} />}
              {nightMode ? 'Night' : 'Day'}
            </button>
          </div>
          <BuildingPanel building={selected} />
        </div>
      </section>
    </PageTransition>
  );
}

function CounterStat({ label, value, suffix }) {
  const count = useCounter(value);
  return (
    <div className="glass rounded-lg p-4">
      <strong className="block text-2xl font-semibold text-white">{count}{suffix}</strong>
      <span className="mt-1 block text-xs text-slate-400">{label}</span>
    </div>
  );
}

function BuildingPanel({ building }) {
  return (
    <motion.aside
      key={building.id}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-dark absolute bottom-4 left-4 right-4 z-10 rounded-lg p-4 sm:left-auto sm:w-80"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
          <Building2 size={18} />
        </span>
        <div className="min-w-0">
          <h2 className="truncate font-semibold">{building.name}</h2>
          <p className="truncate text-sm text-slate-400">{building.type}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <Info label="Floors" value={building.floors} />
        <Info label="Occupancy" value={`${building.occupancy}%`} />
        <Info label="Energy" value={building.energy} />
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-accent">
        <Route size={14} />
        Fastest route ready from your current location.
      </div>
    </motion.aside>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-lg bg-white/10 p-2">
      <span className="block text-slate-400">{label}</span>
      <strong className="mt-1 block truncate text-white">{value}</strong>
    </div>
  );
}

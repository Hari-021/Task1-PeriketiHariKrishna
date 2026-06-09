import { Building2, Compass, Layers3, LocateFixed, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import PageTransition from '../components/PageTransition.jsx';
import { buildings, locations } from '../data/campus.js';

export default function Navigation() {
  const [query, setQuery] = useState('');
  const [from, setFrom] = useState('Main Gate');
  const results = useMemo(
    () => locations.filter((location) => location.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <PageTransition className="mx-auto min-h-screen max-w-7xl px-4 pb-16 pt-28 sm:px-6">
      <div className="mb-8">
        <span className="text-sm font-medium text-primary">Smart route finder</span>
        <h1 className="mt-2 text-3xl font-semibold sm:text-5xl">Search, route, and explore every campus destination.</h1>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="glass rounded-lg p-5">
          <label className="mb-3 block text-sm text-slate-400">Find classroom, lab, library, canteen, or office</label>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/10 px-4 py-3">
            <Search className="text-primary" size={19} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try AI Lab 402"
              className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
            />
          </div>
          <div className="mt-4 grid gap-2">
            {(query ? results : locations).slice(0, 7).map((item) => (
              <button key={item} className="flex items-center justify-between rounded-lg bg-white/[0.08] px-4 py-3 text-left transition hover:bg-white/[0.12]">
                <span>{item}</span>
                <LocateFixed size={16} className="text-accent" />
              </button>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <select value={from} onChange={(event) => setFrom(event.target.value)} className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white">
              <option>Main Gate</option>
              <option>Student Parking</option>
              <option>Metro Bridge</option>
            </select>
            <button className="rounded-lg bg-primary px-4 py-3 font-semibold text-slate-950">Generate route</button>
          </div>
        </section>

        <section className="scene-grid glass relative min-h-[34rem] overflow-hidden rounded-lg p-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/15" />
          <div className="relative grid h-full gap-4 sm:grid-cols-2">
            {buildings.map((building) => (
              <article key={building.id} className="glass-dark rounded-lg p-4 transition hover:-translate-y-1 hover:border-primary/40">
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Building2 size={18} />
                  </span>
                  <span className="text-xs text-accent">{building.occupancy}% live</span>
                </div>
                <h2 className="font-semibold">{building.name}</h2>
                <p className="mt-1 text-sm text-slate-400">{building.departments.join(' / ')}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${building.occupancy}%` }} />
                </div>
              </article>
            ))}
          </div>
          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-300 backdrop-blur">
            <Compass className="text-primary" size={16} />
            {from} to selected destination: 4 min indoor route
          </div>
          <div className="absolute right-5 top-5 grid gap-2">
            <button className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white" aria-label="Map layers">
              <Layers3 size={18} />
            </button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

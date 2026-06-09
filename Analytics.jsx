import { Activity, Gauge, MapPinned, RadioTower } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import MetricCard from '../components/dashboard/MetricCard.jsx';
import BarChart from '../components/dashboard/BarChart.jsx';
import { buildings, departmentStats } from '../data/campus.js';
import { DashboardHeading } from './StudentDashboard.jsx';

export default function Analytics() {
  return (
    <PageTransition className="mx-auto min-h-screen max-w-7xl px-4 pb-16 pt-28 sm:px-6">
      <DashboardHeading eyebrow="Live campus intelligence" title="Occupancy, movement patterns, department signals, heatmaps, and operational insights." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={RadioTower} label="Sensors online" value="1,280" meta="99.98% uptime" />
        <MetricCard icon={Activity} label="Student activity" value="18.4k" meta="Live pings today" tone="secondary" />
        <MetricCard icon={Gauge} label="Average occupancy" value="74%" meta="Balanced load" tone="accent" />
        <MetricCard icon={MapPinned} label="Active route requests" value="312" meta="Last 15 min" />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
        <section className="glass rounded-lg p-5">
          <h2 className="mb-5 text-xl font-semibold">Building occupancy</h2>
          <BarChart data={buildings.map((building) => ({ name: building.name, occupancy: building.occupancy }))} />
        </section>
        <section className="glass rounded-lg p-5">
          <h2 className="mb-5 text-xl font-semibold">Campus heatmap</h2>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 35 }).map((_, index) => {
              const heat = 20 + ((index * 17) % 78);
              return (
                <div
                  key={index}
                  className="aspect-square rounded-md border border-white/10"
                  style={{
                    background: `linear-gradient(135deg, rgba(0, 229, 255, ${heat / 140}), rgba(123, 97, 255, ${heat / 120}))`,
                    boxShadow: heat > 72 ? '0 0 22px rgba(0, 229, 255, 0.32)' : 'none',
                  }}
                  title={`${heat}% activity`}
                />
              );
            })}
          </div>
        </section>
      </div>
      <section className="glass mt-5 rounded-lg p-5">
        <h2 className="mb-5 text-xl font-semibold">Department-wise performance</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {departmentStats.map((dept) => (
            <article key={dept.name} className="rounded-lg bg-white/[0.08] p-4">
              <span className="text-sm text-slate-400">{dept.name}</span>
              <strong className="mt-2 block text-2xl">{dept.occupancy}%</strong>
              <p className="mt-2 text-sm text-slate-400">Learning spaces tuned for current demand.</p>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

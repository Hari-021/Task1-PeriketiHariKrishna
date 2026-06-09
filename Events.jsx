import { CalendarDays, Camera, Clock3, Ticket } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import MetricCard from '../components/dashboard/MetricCard.jsx';
import { events } from '../data/campus.js';
import { DashboardHeading } from './StudentDashboard.jsx';

export default function Events() {
  return (
    <PageTransition className="mx-auto min-h-screen max-w-7xl px-4 pb-16 pt-28 sm:px-6">
      <DashboardHeading eyebrow="Campus events" title="Discover, register, track engagement, and analyze every university experience." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={CalendarDays} label="Upcoming events" value="24" meta="Next 30 days" />
        <MetricCard icon={Ticket} label="Registrations" value="1,881" meta="+18% weekly" tone="secondary" />
        <MetricCard icon={Clock3} label="Next event starts" value="04:12" meta="Countdown" tone="accent" />
        <MetricCard icon={Camera} label="Gallery assets" value="9.4k" meta="Tagged by AI" />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="glass rounded-lg p-5">
          <h2 className="mb-5 text-xl font-semibold">Upcoming events</h2>
          <div className="grid gap-3">
            {events.map((event) => (
              <article key={event.title} className="rounded-lg border border-white/10 bg-white/[0.08] p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-sm text-primary">{event.date} · {event.venue}</span>
                    <h3 className="mt-1 text-lg font-semibold">{event.title}</h3>
                  </div>
                  <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-slate-950">Register</button>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                  <span>{event.registrations} registrations</span>
                  <span className="text-accent">{event.status}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="glass rounded-lg p-5">
          <h2 className="mb-5 text-xl font-semibold">Event gallery and analytics</h2>
          <div className="grid grid-cols-2 gap-3">
            {['Expo', 'Sprint', 'Fireside', 'Hackday'].map((item, index) => (
              <div
                key={item}
                className="flex aspect-[4/3] items-end rounded-lg border border-white/10 p-3"
                style={{
                  background: `linear-gradient(135deg, rgba(0, 229, 255, ${0.16 + index * 0.04}), rgba(123, 97, 255, ${0.22 + index * 0.03}))`,
                }}
              >
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-white/[0.08] p-4">
            <span className="text-sm text-slate-400">Projected attendance</span>
            <strong className="mt-2 block text-3xl">3,420</strong>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-primary to-accent" />
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

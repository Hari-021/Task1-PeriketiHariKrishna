import { Bell, BookOpenCheck, CalendarClock, ChartSpline, ClipboardCheck, Trophy } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import MetricCard from '../components/dashboard/MetricCard.jsx';
import BarChart from '../components/dashboard/BarChart.jsx';
import { timetable } from '../data/campus.js';

const assignments = [
  { name: 'Digital Systems Report', due: 'Tonight', status: 'Draft ready' },
  { name: 'AI Ethics Reflection', due: 'Jun 12', status: 'Needs review' },
  { name: 'Capstone Prototype', due: 'Jun 18', status: 'On track' },
];

export default function StudentDashboard() {
  return (
    <PageTransition className="mx-auto min-h-screen max-w-7xl px-4 pb-16 pt-28 sm:px-6">
      <DashboardHeading eyebrow="Student command center" title="Attendance, timetable, assignments, notifications, and academic momentum." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={ClipboardCheck} label="Attendance this term" value="92%" meta="+4% vs last month" />
        <MetricCard icon={CalendarClock} label="Classes today" value="4" meta="Next in 42 min" tone="secondary" />
        <MetricCard icon={BookOpenCheck} label="Assignments open" value="3" meta="1 urgent" tone="accent" />
        <MetricCard icon={Trophy} label="Performance index" value="8.7" meta="Top 12%" />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="glass rounded-lg p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Today timetable</h2>
            <Bell className="text-primary" size={20} />
          </div>
          <div className="space-y-3">
            {timetable.map((item) => (
              <article key={item.time} className="rounded-lg border border-white/10 bg-white/[0.08] p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-sm text-primary">{item.time}</span>
                    <h3 className="mt-1 font-semibold">{item.course}</h3>
                    <p className="text-sm text-slate-400">{item.room}</p>
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">{item.progress}% prepared</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="glass rounded-lg p-5">
          <div className="mb-5 flex items-center gap-2">
            <ChartSpline className="text-accent" size={20} />
            <h2 className="text-xl font-semibold">Academic performance</h2>
          </div>
          <BarChart
            data={[
              { name: 'AI Systems', occupancy: 94 },
              { name: 'Design Lab', occupancy: 88 },
              { name: 'Research', occupancy: 81 },
              { name: 'Participation', occupancy: 76 },
            ]}
          />
          <div className="mt-6 space-y-3">
            {assignments.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-lg bg-white/[0.08] px-4 py-3 text-sm">
                <span>{item.name}</span>
                <span className="text-slate-400">{item.due} · {item.status}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export function DashboardHeading({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <span className="text-sm font-medium text-primary">{eyebrow}</span>
      <h1 className="mt-2 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">{title}</h1>
    </div>
  );
}

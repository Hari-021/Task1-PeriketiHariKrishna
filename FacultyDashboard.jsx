import { CalendarPlus, ClipboardList, PieChart, UsersRound } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import MetricCard from '../components/dashboard/MetricCard.jsx';
import BarChart from '../components/dashboard/BarChart.jsx';
import { DashboardHeading } from './StudentDashboard.jsx';
import { departmentStats } from '../data/campus.js';

export default function FacultyDashboard() {
  return (
    <PageTransition className="mx-auto min-h-screen max-w-7xl px-4 pb-16 pt-28 sm:px-6">
      <DashboardHeading eyebrow="Faculty operations" title="Manage attendance, student analytics, department health, and academic events." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={ClipboardList} label="Pending attendance" value="2" meta="Sections today" />
        <MetricCard icon={UsersRound} label="Students monitored" value="428" meta="AI risk flags: 14" tone="secondary" />
        <MetricCard icon={CalendarPlus} label="Events created" value="7" meta="This month" tone="accent" />
        <MetricCard icon={PieChart} label="Department average" value="86%" meta="Learning velocity" />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="glass rounded-lg p-5">
          <h2 className="mb-5 text-xl font-semibold">Attendance management</h2>
          {['CS-A Neural Systems', 'ME-B Robotics', 'DS-C Studio'].map((section, index) => (
            <div key={section} className="mb-3 rounded-lg bg-white/[0.08] p-4">
              <div className="mb-3 flex justify-between gap-3">
                <span>{section}</span>
                <span className="text-primary">{92 - index * 6}%</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['Mark', 'Review', 'Notify'].map((action) => (
                  <button key={action} className="rounded-lg bg-white/10 px-3 py-2 text-sm transition hover:bg-primary hover:text-slate-950">
                    {action}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>
        <section className="glass rounded-lg p-5">
          <h2 className="mb-5 text-xl font-semibold">Department statistics</h2>
          <BarChart data={departmentStats} />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {departmentStats.map((dept) => (
              <article key={dept.name} className="rounded-lg border border-white/10 bg-white/[0.08] p-4">
                <strong className="block">{dept.name}</strong>
                <span className="mt-1 block text-sm text-slate-400">{dept.students.toLocaleString()} active students</span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

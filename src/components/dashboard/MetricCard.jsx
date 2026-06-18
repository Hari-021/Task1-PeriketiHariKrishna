import { motion } from 'framer-motion';

export default function MetricCard({ label, value, meta, icon: Icon, tone = 'primary' }) {
  const toneClass = tone === 'accent' ? 'text-accent bg-accent/10' : tone === 'secondary' ? 'text-secondary bg-secondary/10' : 'text-primary bg-primary/10';

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="glass rounded-lg p-5"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className={`grid h-11 w-11 place-items-center rounded-lg ${toneClass}`}>{Icon && <Icon size={20} />}</span>
        <span className="text-xs text-slate-400">{meta}</span>
      </div>
      <strong className="block text-3xl font-semibold">{value}</strong>
      <span className="mt-1 block text-sm text-slate-400">{label}</span>
    </motion.article>
  );
}

import { motion } from 'framer-motion';

export default function BarChart({ data, label = 'occupancy' }) {
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.name}>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-300">{item.name}</span>
            <span className="text-primary">{item[label]}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item[label]}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

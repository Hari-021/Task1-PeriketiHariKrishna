import { Bot, Mic, Send, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const suggestions = ['Route to AI Lab', 'Today events', 'Library occupancy'];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'I can guide routes, events, attendance, and campus support.' },
  ]);

  const ask = (text) => {
    if (!text) return;
    setMessages((items) => [
      ...items,
      { from: 'user', text },
      { from: 'ai', text: `Suggested action: ${text}. I found the fastest indoor route and live availability.` },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            className="glass-dark mb-4 w-[min(22rem,calc(100vw-2.5rem))] rounded-lg p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="text-accent" size={18} />
                <span className="font-semibold">Campus AI</span>
              </div>
              <button className="rounded-lg p-2 hover:bg-white/10" aria-label="Close assistant" onClick={() => setOpen(false)}>
                <X size={16} />
              </button>
            </div>
            <div className="no-scrollbar mb-3 max-h-64 space-y-2 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={`${message.from}-${index}`}
                  className={`rounded-lg px-3 py-2 text-sm ${
                    message.from === 'ai' ? 'bg-white/10 text-slate-200' : 'ml-8 bg-primary/15 text-primary'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((item) => (
                <button key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300" onClick={() => ask(item)}>
                  {item}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-accent" aria-label="Voice input">
                <Mic size={17} />
              </button>
              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-slate-950"
                onClick={() => ask('Plan my next class route')}
              >
                <Send size={16} />
                Ask assistant
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="neon-border grid h-14 w-14 place-items-center rounded-lg bg-primary/15 text-primary shadow-glow transition hover:scale-105"
        aria-label="Open AI assistant"
        onClick={() => setOpen((value) => !value)}
      >
        <Bot size={24} />
      </button>
    </div>
  );
}

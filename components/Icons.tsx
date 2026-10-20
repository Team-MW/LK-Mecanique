type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const Phone = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

export const Pin = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const Clock = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m3.5 6 8.5 7 8.5-7" />
  </svg>
);

export const Arrow = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = ({ className }: P) => (
  <svg {...base} strokeWidth={2} className={className}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg {...base} strokeWidth={2.2} className={className}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const Star = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
  </svg>
);

export const Oil = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 9h9l3-2 6 2-5 6H5a2 2 0 0 1-2-2zM7 9V6h3M20 13.5c0 1 .6 2 1 2.5" />
  </svg>
);

export const Brake = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="M5.5 6.5A9 9 0 0 1 9 4M18.5 6.5A9 9 0 0 0 15 4" />
  </svg>
);

export const Tire = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
  </svg>
);

export const Diag = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="12" rx="1.5" />
    <path d="M6 12h3l1.5-3 2 5 1.5-2H18M9 21h6M12 17v4" />
  </svg>
);

export const Engine = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 10h2V8h3V6h5v2h3l2 2h1v6h-1l-2 2H9l-2-2H6v-2H4zM2 11v4M12 6V4h-2h4" />
  </svg>
);

export const Wrench = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M14.5 6.5a4 4 0 0 0 5 5L21 13l-8 8-3-3 6.5-6.5M14.5 6.5 13 5a4 4 0 0 0-5.6 5.6L3 15l3 3 4.4-4.4" />
  </svg>
);

type Props = { className?: string };

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconCabling({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M4 7h24M4 12h24M4 17h24M4 22h24" />
        <path d="M9 7v3M14 7v6M19 7v9M24 7v12" />
        <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none" />
        <circle cx="14" cy="14" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="17" r="1" fill="currentColor" stroke="none" />
        <circle cx="24" cy="20" r="1" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

export function IconIntegration({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke}>
        <rect x="5" y="6" width="22" height="6" rx="1.5" />
        <rect x="5" y="14" width="22" height="6" rx="1.5" />
        <rect x="5" y="22" width="22" height="4" rx="1.5" />
        <circle cx="9" cy="9" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="9" cy="17" r="0.8" fill="currentColor" stroke="none" />
        <path d="M14 9h10M14 17h10" />
      </g>
    </svg>
  );
}

export function IconPhone({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M8 4h13a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V4z" />
        <path d="M12 8h8M12 12h8" />
        <circle cx="13" cy="17" r="1" />
        <circle cx="16" cy="17" r="1" />
        <circle cx="19" cy="17" r="1" />
        <circle cx="13" cy="21" r="1" />
        <circle cx="16" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
      </g>
    </svg>
  );
}

export function IconShield({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M16 3l11 4v9c0 7-5 12-11 13-6-1-11-6-11-13V7l11-4z" />
        <path d="M11 16l3.5 3.5L21 13" />
      </g>
    </svg>
  );
}

export function IconRoom({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke}>
        <rect x="3" y="6" width="26" height="16" rx="2" />
        <path d="M3 22l4 4h18l4-4" />
        <path d="M11 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        <path d="M18 14h6M18 17h4" />
      </g>
    </svg>
  );
}

export function IconChart({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M5 27V5M5 27h22" />
        <path d="M10 22V14M15 22V10M20 22V17M25 22V8" />
      </g>
    </svg>
  );
}

export const serviceIcons: Record<string, (p: Props) => React.ReactElement> = {
  "structured-cabling": IconCabling,
  "system-integration": IconIntegration,
  "ip-telephony": IconPhone,
  security: IconShield,
  collaboration: IconRoom,
  autocount: IconChart,
};

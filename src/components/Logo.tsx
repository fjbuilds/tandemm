export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" className="fill-primary" />
        <path
          d="M8 16V8h4.2a2.4 2.4 0 0 1 1.4 4.36L16 16h-2.2l-2.2-3.4H9.6V16H8Zm1.6-4.9h2.5a1 1 0 1 0 0-2H9.6v2Z"
          className="fill-primary-foreground"
        />
      </svg>
      <span className="font-sans text-lg font-bold tracking-tight text-primary">
        Ringside
      </span>
    </span>
  );
}

export function GuaranteeStrip({
  variant = "default",
}: {
  variant?: "default" | "inline";
}) {
  if (variant === "inline") {
    return (
      <span className="guarantee-inline">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
        90 day money back guarantee
      </span>
    );
  }
  return (
    <div className="guarantee-strip">
      <div className="guarantee-strip-inner">
        <span className="guarantee-strip-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </span>
        <div>
          <div className="guarantee-strip-title">90 day money back guarantee</div>
          <div className="guarantee-strip-sub">
            If Tandemm hasn&rsquo;t earned its place inside 90 days, we refund the plan. No forms, no debate.
          </div>
        </div>
      </div>
    </div>
  );
}

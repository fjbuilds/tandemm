const placeholderLogos = [
  "NORTHBRIDGE",
  "FINCH & CO",
  "ORBITAL",
  "CASCADE",
  "LUMEN PARTNERS",
  "VANTAGE",
];

export function LogoBar() {
  return (
    <div>
      <p className="text-center text-sm font-medium text-muted-foreground">
        Trusted by revenue teams at growing companies across the UK
      </p>
      <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
        {placeholderLogos.map((name) => (
          <div
            key={name}
            className="flex cursor-default items-center justify-center text-center text-sm font-bold tracking-wide text-muted-foreground/50 transition-colors duration-300 ease-out hover:text-primary"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

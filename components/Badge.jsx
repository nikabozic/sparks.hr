export default function Badge({ children, tone = "brand" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-${tone}-500/15 text-${tone}-200 ring-1 ring-${tone}-400/30 px-4 py-1.5 text-xs font-medium`}
    >
      {children}
    </span>
  );
}
export function BrandBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 text-brand-200 ring-1 ring-brand-400/30 px-4 py-1.5 text-xs font-medium">
      {children}
    </span>
  );
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  light = false,
  center = true,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      {label && (
        <span
          className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full ${
            light
              ? "bg-white/10 text-cream-100"
              : "bg-secondary-50 text-secondary-dark"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-cream-50" : "text-primary-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          } ${light ? "text-cream-200" : "text-neutral-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

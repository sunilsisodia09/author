interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      {description && (
        <p className="mt-5 text-sm leading-7 text-[#77736c]">
          {description}
        </p>
      )}
    </div>
  );
}
interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col items-center gap-4 text-center ${className}`}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="max-w-[700px] text-muted-foreground md:text-xl">{description}</p>}
    </div>
  )
}

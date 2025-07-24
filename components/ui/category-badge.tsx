import { cn } from "@/lib/utils"

interface CategoryBadgeProps {
  category: "web" | "mobile" | "desktop" | "ai"
  className?: string
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const categoryConfig = {
    web: {
      label: "Web App",
      className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    },
    mobile: {
      label: "Mobile App",
      className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    },
    desktop: {
      label: "Desktop App",
      className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    },
    ai: {
      label: "AI Project",
      className: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    },
  }

  const { label, className: badgeClassName } = categoryConfig[category]

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        badgeClassName,
        className,
      )}
    >
      {label}
    </span>
  )
}

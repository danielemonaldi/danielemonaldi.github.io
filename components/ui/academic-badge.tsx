import { GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

interface AcademicBadgeProps {
  className?: string
}

export function AcademicBadge({ className }: AcademicBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
        className,
      )}
    >
      <GraduationCap className="mr-1 h-3 w-3" />
      Academic Project
    </span>
  )
}

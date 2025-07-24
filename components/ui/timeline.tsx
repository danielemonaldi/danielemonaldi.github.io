"use client"

import { motion } from "framer-motion"

export interface TimelineItem {
  title: string
  subtitle: string
  period: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-sm text-muted-foreground">
            {item.subtitle} | {item.period}
          </p>
          <p className="mt-2 text-sm">{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

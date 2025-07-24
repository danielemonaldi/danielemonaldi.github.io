"use client"

import type React from "react"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PassionCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  color: string
}

export function PassionCard({ title, description, icon, href, color }: PassionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={href}>
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <div className={cn("p-6", color)}>
            <div className="flex justify-center">{icon}</div>
          </div>
          <CardContent className="p-6">
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="mb-4 text-muted-foreground">{description}</p>
            <div className="flex items-center text-sm font-medium text-primary">
              Find out more
              <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

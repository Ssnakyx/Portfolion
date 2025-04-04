"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  githubUrl: string
}

export default function ProjectCard({ title, description, imageUrl, githubUrl }: ProjectCardProps) {
  const { theme } = useTheme()

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden transition-all hover:shadow-xl bg-white dark:bg-[#252525] border-0 rounded-2xl h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src={imageUrl || "/placeholder.svg?height=200&width=400"}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <Button
              variant="secondary"
              size="sm"
              className="backdrop-blur-md bg-white/30 text-white border-0"
              onClick={() => window.open(githubUrl, "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Preview
            </Button>
          </div>
        </div>
        <CardContent className="p-6 flex-grow">
          <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button
            variant="outline"
            className="w-full rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 dark:text-white dark:border-gray-700"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


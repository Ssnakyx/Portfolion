"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useTheme } from "next-themes"

interface Skill {
  name: string
  level: number
  color: string
}

const skills: Skill[] = [
  { name: "Java", level: 90, color: "from-red-400 to-red-500" },
  { name: "HTML/CSS", level: 85, color: "from-orange-400 to-orange-500" },
  { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-500" },
  { name: "Game Development", level: 85, color: "from-green-400 to-green-500" },
  { name: "React", level: 70, color: "from-blue-400 to-blue-500" },
  { name: "Server Management", level: 75, color: "from-purple-400 to-purple-500" },
]

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const { theme } = useTheme()

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold mb-6 dark:text-white">My Skills</h3>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium dark:text-white">{skill.name}</span>
              <span
                className={`${hoveredSkill === skill.name ? "opacity-100" : "opacity-0"} transition-opacity duration-300 dark:text-white`}
              >
                {skill.level}%
              </span>
            </div>
            <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 grid grid-cols-3 gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {["Git", "UI Design", "Problem Solving", "Networking", "Database", "API Integration"].map((tool) => (
          <motion.div
            key={tool}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-center text-sm font-medium dark:text-white"
            whileHover={{
              scale: 1.05,
              backgroundColor: theme === "dark" ? "#1e3a8a" : "#f0f9ff",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            {tool}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}


"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import { projectImages } from "@/components/project-images"

const featuredProjects = [
  {
    id: 1,
    title: "Forum Project",
    description:
      "A collaborative forum for mountain enthusiasts with features like photo sharing, interactive maps, detailed descriptions, and user reviews. This platform allows outdoor explorers to share their hiking trails, trekking adventures, and mountaineering experiences.",
    image: projectImages.forumProject,
    githubUrl: "https://github.com/B1-Info-23-24/projet-forum-erwan-lucas-hamed-tom",
    liveUrl: "https://github.com/B1-Info-23-24/projet-forum-erwan-lucas-hamed-tom",
    technologies: ["HTML", "CSS", "Go", "Web Development", "Collaboration"],
  },
  {
    id: 2,
    title: "Hackathon B2",
    description:
      "A project developed during a hackathon event, showcasing rapid development and innovative problem-solving skills. This time-constrained project demonstrates the ability to work under pressure and deliver functional solutions quickly.",
    image: projectImages.hackathonB2,
    githubUrl: "https://github.com/Tokennn/Hackaton-B2",
    liveUrl: "https://github.com/Tokennn/Hackaton-B2",
    technologies: ["Rapid Development", "Problem Solving", "Team Collaboration", "Innovation"],
  },
  {
    id: 3,
    title: "HangMan 2023",
    description:
      "A modern implementation of the classic Hangman word guessing game. This version features enhanced graphics, an extensive word database, difficulty levels, and a scoring system to track player progress.",
    image: projectImages.hangman2023,
    githubUrl: "https://github.com/Ssnakyx/HangMan-2023",
    liveUrl: "https://github.com/Ssnakyx/HangMan-2023",
    technologies: ["Java", "JavaFX", "Game Development", "UI Design"],
  },
  {
    id: 4,
    title: "HangMan Web",
    description:
      "A web-based version of the Hangman game with a responsive user interface. Players can guess words through a browser, with features like hint systems, category selection, and multiplayer functionality.",
    image: projectImages.hangmanWeb,
    githubUrl: "https://github.com/Ssnakyx/HangMan_Web",
    liveUrl: "https://github.com/Ssnakyx/HangMan_Web",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
  {
    id: 5,
    title: "Minecraft Server",
    description:
      "A custom Minecraft server implementation with configuration tools and plugins. This project includes server management features, custom gameplay mechanics, and performance optimizations.",
    image: projectImages.minecraftServer,
    githubUrl: "https://github.com/Ssnakyx/MinecraftServer",
    liveUrl: "https://github.com/Ssnakyx/MinecraftServer",
    technologies: ["Java", "Server Management", "Game Modding", "Networking"],
  },
]

export default function FeaturedProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1))
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[500px] md:h-[600px] w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <div className="relative w-full h-full">
              <Image
                src={featuredProjects[currentIndex].image || "/placeholder.svg"}
                alt={featuredProjects[currentIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{featuredProjects[currentIndex].title}</h3>
                  <p className="text-lg md:text-xl mb-6 max-w-3xl">{featuredProjects[currentIndex].description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProjects[currentIndex].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      onClick={() => window.open(featuredProjects[currentIndex].githubUrl, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/20"
                      onClick={() => window.open(featuredProjects[currentIndex].liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 dark:bg-black/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/40 dark:hover:bg-black/40 transition-colors z-10"
        aria-label="Previous project"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 dark:bg-black/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/40 dark:hover:bg-black/40 transition-colors z-10"
        aria-label="Next project"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


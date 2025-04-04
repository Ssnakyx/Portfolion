"use client"
import { Github, Mail, Linkedin, ChevronDown, Moon, Sun } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useRef } from "react"
import FeaturedProjectsSlider from "@/components/featured-projects-slider"
import SkillsSection from "@/components/skills-section"
import { useInView } from "framer-motion"
import ParallaxHero from "@/components/parallax-hero"
import { useTheme } from "next-themes"
import { projectImages } from "@/components/project-images"

export default function Home() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  const { theme, setTheme } = useTheme()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#f5f5f7] dark:bg-[#121212] transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-black/70 border-b border-gray-200/50 dark:border-gray-800/50 px-4 py-4 transition-colors duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Hamed Kaffa
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <ul className="flex space-x-8 mr-6">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blue-600 transition-colors font-medium dark:text-white dark:hover:text-blue-400"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-blue-600 transition-colors font-medium dark:text-white dark:hover:text-blue-400"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-600 transition-colors font-medium dark:text-white dark:hover:text-blue-400"
                >
                  Contact
                </button>
              </li>
            </ul>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </motion.button>
          </motion.nav>
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <ParallaxHero />

      {/* Scroll Indicator */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </motion.div>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="py-24 px-4 bg-white dark:bg-[#1a1a1a] transition-colors duration-300"
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 dark:text-white">My Journey</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    I'm a Computer Science student with a passion for building innovative solutions. My journey in
                    programming started with a curiosity about how games and applications work, and I've been expanding
                    my skills ever since.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I enjoy working with various technologies and am constantly learning new tools and frameworks to
                    improve my development skills. I'm particularly interested in game development, web applications,
                    and server technologies.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="mt-8"
                >
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Download CV
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <SkillsSection />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Slider */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#f5f5f7] to-white dark:from-[#121212] dark:to-[#1a1a1a] transition-colors duration-300">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <FeaturedProjectsSlider />
        </div>
      </section>

      {/* Projects Grid Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-24 px-4 bg-white dark:bg-[#1a1a1a] transition-colors duration-300"
      >
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            All Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={projectsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Forum Project",
                description:
                  "A collaborative forum for mountain enthusiasts with features like photo sharing, interactive maps, and user reviews.",
                imageUrl: projectImages.forumProject,
                githubUrl: "https://github.com/B1-Info-23-24/projet-forum-erwan-lucas-hamed-tom",
                index: 0,
              },
              {
                title: "Hackathon B2",
                description:
                  "A project developed during a hackathon event, showcasing rapid development and innovative problem-solving skills.",
                imageUrl: projectImages.hackathonB2,
                githubUrl: "https://github.com/Tokennn/Hackaton-B2",
                index: 1,
              },
              {
                title: "HangMan 2023",
                description:
                  "A modern implementation of the classic Hangman word guessing game with enhanced graphics and gameplay features.",
                imageUrl: projectImages.hangman2023,
                githubUrl: "https://github.com/Ssnakyx/HangMan-2023",
                index: 2,
              },
              {
                title: "HangMan Web",
                description:
                  "A web-based version of the Hangman game with a responsive user interface, allowing players to guess words through a browser.",
                imageUrl: projectImages.hangmanWeb,
                githubUrl: "https://github.com/Ssnakyx/HangMan_Web",
                index: 3,
              },
              {
                title: "Minecraft Server",
                description:
                  "A custom Minecraft server implementation with configuration tools and plugins for enhanced gameplay experiences.",
                imageUrl: projectImages.minecraftServer,
                githubUrl: "https://github.com/Ssnakyx/MinecraftServer",
                index: 4,
              },
              {
                title: "BreakOut Game",
                description:
                  "A recreation of the classic Breakout arcade game with modern graphics and additional gameplay features.",
                imageUrl: projectImages.breakoutGame,
                githubUrl: "https://github.com/Ssnakyx/BreakOut_Game",
                index: 5,
              },
              {
                title: "PokeHamed",
                description:
                  "A Pokémon-themed application featuring a custom Pokédex, battle simulator, and collection management system.",
                imageUrl: projectImages.pokeHamed,
                githubUrl: "https://github.com/Ssnakyx/PokeHamed",
                index: 6,
              },
              {
                title: "Portfolio Website",
                description:
                  "This portfolio website built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.",
                imageUrl: projectImages.portfolioWebsite,
                githubUrl: "https://github.com/Ssnakyx",
                index: 7,
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  githubUrl={project.githubUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="py-24 px-4 bg-gradient-to-b from-[#f5f5f7] to-white dark:from-[#121212] dark:to-[#1a1a1a] transition-colors duration-300"
      >
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:w-1/2"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out to me
                using any of the methods below.
              </p>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center p-4 rounded-xl bg-white dark:bg-[#252525] shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="dark:text-white">hamed0405n@gmail.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center p-4 rounded-xl bg-white dark:bg-[#252525] shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <a href="https://github.com/Ssnakyx" className="text-blue-600 dark:text-blue-400 hover:underline">
                    github.com/Ssnakyx
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center p-4 rounded-xl bg-white dark:bg-[#252525] shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/hamed-kaffa-98587032a/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    linkedin.com/in/hamed-kaffa
                  </a>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="md:w-1/2"
            >
              <div className="bg-white dark:bg-[#252525] p-8 rounded-2xl shadow-xl transition-colors duration-300">
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white dark:bg-[#333333] dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white dark:bg-[#333333] dark:text-white"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white dark:bg-[#333333] dark:text-white"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 py-6 text-lg shadow-lg hover:shadow-xl">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d1d1f] text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 md:mb-0"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hamed Kaffa
              </h3>
              <p className="text-gray-400">Computer Science Student & Developer</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex space-x-6"
            >
              <motion.a
                href="https://github.com/Ssnakyx"
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hamed-kaffa-98587032a/"
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:hamed0405n@gmail.com"
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 text-center text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Hamed Kaffa. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </main>
  )
}


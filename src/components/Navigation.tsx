import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, Menu, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useDarkMode } from "../contexts/DarkModeContext";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md transition-colors dark:border-gray-700 dark:bg-gray-900/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-xl font-extrabold tracking-[0.2em] text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        >
          JA
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="relative">
            <a
              href="https://v1.jonahanderson.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <ExternalLink size={14} />
              <span>V1</span>
            </a>

            <AnimatePresence>
              {showTooltip ? (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-md bg-gray-900 px-3 py-1.5 text-xs whitespace-nowrap text-white dark:bg-gray-700"
                >
                  v1 site (2022)
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="rounded-lg bg-gray-100 p-2 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 md:hidden"
          >
            <div className="space-y-3 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-4 py-2 text-sm transition-colors ${
                    isActive(link.path)
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://v1.jonahanderson.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <ExternalLink size={14} />
                V1 Site (2022)
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}

import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";
import { DarkModeProvider } from "../contexts/DarkModeContext";
import { ScrollToTop } from "../components/ScrollToTop";

export function RootLayout() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navigation />
        <ScrollToTop />
        <main className="pt-16">
          <Outlet />
        </main>
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="text-center text-sm text-gray-600 dark:text-gray-400 space-y-0.5">
              <p>© {new Date().getFullYear()} Jonah Anderson</p>
              <a
                href="https://github.com/jonahanderson/jonahandersonv2-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                View this code on GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </DarkModeProvider>
  );
}

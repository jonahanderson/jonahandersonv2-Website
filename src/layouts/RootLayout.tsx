import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";
import { DarkModeProvider } from "../contexts/DarkModeContext";

export function RootLayout() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navigation />
        <main className="pt-16">
          <Outlet />
        </main>
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Jonah Anderson. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </DarkModeProvider>
  );
}

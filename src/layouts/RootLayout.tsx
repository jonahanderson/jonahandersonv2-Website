import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";
import { ScrollToTop } from "../components/ScrollToTop";
import { DarkModeProvider } from "../contexts/DarkModeContext";

export function RootLayout() {
  return (
    <DarkModeProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 transition-colors dark:bg-gray-950">
        <Navigation />
        <main className="pt-16">
          <Outlet />
        </main>
        <footer className="mt-20 border-t border-gray-200 bg-white transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-gray-600 dark:text-gray-400 sm:px-6 lg:px-8">
            &copy; {new Date().getFullYear()} Jonah Anderson. All rights reserved.
          </div>
        </footer>
      </div>
    </DarkModeProvider>
  );
}

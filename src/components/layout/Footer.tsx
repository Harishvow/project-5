export default function Footer() {
  return (
    <footer className="mt-16 py-8 bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-secondary-600 dark:text-secondary-400">
        <p>&copy; {new Date().getFullYear()} - Portfolio</p>
      </div>
    </footer>
  );
}
'use client';

interface HeaderProps {
  ariaLabel: string;
}

export default function Header({ ariaLabel }: HeaderProps): React.ReactElement {
  return (
    <header
      className="w-full bg-white shadow-md sticky top-0 z-50"
      aria-label={ariaLabel}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">Brand</h1>
        </div>
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Navigate to features section"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Navigate to about section"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Navigate to contact section"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="hidden md:block">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Sign in to your account"
          >
            Sign In
          </button>
        </div>
        <button
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-2"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
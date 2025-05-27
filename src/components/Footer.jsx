export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-sm text-center p-6 mt-10">
      <p>
        © {new Date().getFullYear()} Greg Stula —{' '}
        <a
          href="https://github.com/gregstula"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {' '}| Built with React & Tailwind CSS
      </p>
    </footer>
  )
}
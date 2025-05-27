export default function ProjectCard({ project }) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="text-sm text-gray-600">{project.description}</p>
      <a
        href={project.url}
        target="_blank"
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        View on GitHub →
      </a>
    </div>
  )
}
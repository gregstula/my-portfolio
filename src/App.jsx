import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { projects } from './data/projects'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      <Header />
      <main className="flex-grow p-6 max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
          {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </main>
        <Footer />
    </div>

  )
}

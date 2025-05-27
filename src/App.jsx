import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { projects } from './data/projects'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Header />
      <main className="p-6 max-w-4xl mx-auto grid gap-4">
        <h2 className="text-2xl font-bold text-black">Projects</h2>
          {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </main>
        <Footer />
    </div>

  )
}

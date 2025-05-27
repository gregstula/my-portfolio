import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { projects } from './data/projects'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      <Header />
      <h2 className="text-2xl font-bold text-black max-w-4xl mx-auto grid">Projects</h2>
      <main className="flex-grow p-6 max-w-4xl mx-auto grid gap-20">
          {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </main>
        <Footer />
    </div>

  )
}

import { CVHeader } from './components/CVHeader'
import { CVSummary } from './components/CVSummary'
import { CVCompetencies } from './components/CVCompetencies'
import { CVExperience } from './components/CVExperience'
import { CVEducation } from './components/CVEducation'
import { CVPublications } from './components/CVPublications'

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <CVHeader />
        <CVSummary />
        <CVCompetencies />
        <CVExperience />
        <CVEducation />
        <CVPublications />
      </div>
    </div>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'

export function CVExperience() {
  const experiences = [
    {
      company: "Meta",
      title: "Staff Quantitative Researcher (Ad Tech)",
      duration: "Nov 2021 – Present",
      location: "Bellevue, WA",
      achievements: [
        "Designed and ran large-scale A/B and quasi-experiments to evaluate new product features; results directly informed multi‑billion‑dollar revenue decisions.",
        "Defined and operationalized north‑star metrics for ad quality and improved user experience, now standard across product and engineering teams.",
        "Built production‑level data pipelines in SQL and Python for survey integration and experimentation, enabling self‑serve analytics across the org.",
        "Partnered with product and engineering to balance fraud risk, implementation cost, and customer experience in trust and safety systems.",
        "Pioneered applications of generative AI at scale, deploying LLM pipelines to classify millions of pieces of user feedback and produce new quality signals for ranking models.",
        "Created and socialized dashboards combining behavioral data, survey insights, and ML outputs; adopted by hundreds of stakeholders for decision‑making.",
        "Key member of the Ads core leadership group, partnering cross‑functionally to guide strategy and execution for a team responsible for a significant share of Meta's revenue."
      ]
    },
    {
      company: "C. Light Technologies",
      title: "Data Scientist",
      duration: "Mar 2021 – Nov 2021",
      location: "Berkeley, CA",
      achievements: [
        "Built software classifiers to automatically detect poor-quality retinal scans, improving diagnostic reliability.",
        "Collaborated with hardware engineers to embed the detection system directly into devices, enabling real-time rejection of invalid scans.",
        "Work directly contributed to patent US20250057414A1 on retinal disease detection methods (link)."
      ]
    },
    {
      company: "The University of Texas at Austin",
      title: "Research Scientist (Postdoc)",
      duration: "Aug 2015 – Mar 2021",
      location: "Austin, TX",
      achievements: [
        "Conducted independent research in computational neuroscience to advance understanding of brain function and cognition.",
        "Developed novel intellectual property for the lab, combining Bayesian inference, machine learning, and neuroimaging analysis.",
        "Produced multiple first-author publications in neuroscience journals and AI conferences, including Current Biology and AAAI.",
        "Established cross-disciplinary collaborations, securing funding and presenting findings at international conferences."
      ]
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
              <div>
                <h3>{exp.company} — {exp.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline">{exp.duration}</Badge>
                  <Badge variant="outline">{exp.location}</Badge>
                </div>
              </div>
            </div>
            
            <ul className="space-y-2 ml-4">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="relative">
                  <span className="absolute -left-4 top-2 w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {achievement.includes("patent US20250057414A1") ? (
                    <>
                      Work directly contributed to patent US20250057414A1 on retinal disease detection methods (
                      <a 
                        href="https://patentimages.storage.googleapis.com/72/9a/bd/d7ed6568eabac1/US20250057414A1.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        link
                      </a>
                      ).
                    </>
                  ) : (
                    achievement
                  )}
                </li>
              ))}
            </ul>
            
            {index < experiences.length - 1 && <Separator className="mt-8" />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
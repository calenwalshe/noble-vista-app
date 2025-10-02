import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

export function CVCompetencies() {
  const competencies = [
    {
      category: "Technical Skills",
      items: [
        "SQL", "Python", "Production-level code development (data pipelines)", 
        "Causal inference", "Quasi-experiments", "Simulation modeling", 
        "Metric definition", "Self-serve dashboards (Tableau + internal tools)", 
        "Embeddings", "Fine-tuning", "Generative AI (LLM deployment at scale using internal company infra such as FB Learner)"
      ]
    },
    {
      category: "Product & Communication",
      items: [
        "Embedding with product teams", "Defining north-star metrics", 
        "Balancing fraud loss vs. UX cost", "Clear comms to executives/policy/security", 
        "Driving adoption of self-serve analytics"
      ]
    },
    {
      category: "Domain Expertise", 
      items: [
        "Product experimentation & growth", "Fraud/abuse detection", 
        "Trust & safety", "Content moderation", "Survey Science", 
        "Applied NLP + LLM pipelines"
      ]
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Core Competencies</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {competencies.map((competency, index) => (
          <div key={index}>
            <h4 className="mb-3">{competency.category}:</h4>
            <div className="flex flex-wrap gap-2">
              {competency.items.map((item, itemIndex) => (
                <Badge key={itemIndex} variant="secondary" className="text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function CVSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed">
          Calen Walshe leads quantitative research and applied ML at Meta. He architects and ships backend systems for ranking,
          relevance, and content quality, improving user experience across surfaces.{'
          '}He pairs causal inference and A/B testing with MLOps to take models from training to real-time serving with clear
          SLOs.{'
          '}His background in visual attention guides how he measures and optimizes experience.
        </p>
      </CardContent>
    </Card>
  )
}
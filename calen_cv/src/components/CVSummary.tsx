import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function CVSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed">
          Staff-level data scientist focused on quantitative UX, product experimentation, and ML for trust and safety.{'
          '}Over 10 years in industry and academia applying SQL, Python, A/B testing, causal inference, and LLMs to
          large-scale systems.{'
          '}At Meta, drove {'>'}$1B impact by embedding with product teams, defining north-star metrics, and building survey +
          generative-AI pipelines to improve ad quality and user experience.{'
          '}Operates as a senior IC in a leadership capacity, partnering with leads and influencing teams that drive
          multi-billion-dollar revenue impact.
        </p>
      </CardContent>
    </Card>
  )
}
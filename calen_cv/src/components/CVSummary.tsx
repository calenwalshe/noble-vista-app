import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function CVSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed">
          Staff-level data scientist specializing in quantitative UX, product experimentation, and ML for trust and safety. 
          10+ years across industry and academia applying SQL/Python, A/B testing, causal inference, and LLM methods to 
          large-scale systems. Delivered {'>'}$1B impact at Meta by embedding with product teams, defining north-star metrics, 
          and pioneering survey + generative AI pipelines to improve ad quality and user experience. Senior IC acting in a 
          leadership capacity, partnering with a core group of leads overseeing a team that drives multi‑billion dollar Meta 
          revenue impact.
        </p>
      </CardContent>
    </Card>
  )
}
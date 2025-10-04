import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function CVSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed">forthcoming</p>
      </CardContent>
    </Card>
  )
}
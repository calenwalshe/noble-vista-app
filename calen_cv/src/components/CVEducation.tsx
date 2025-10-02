import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { GraduationCap } from 'lucide-react'

export function CVEducation() {
  const education = [
    {
      degree: "PhD, Cognitive Neuroscience",
      institution: "University of Edinburgh",
      duration: "2011–2015",
      details: "Computational Visual Cognition Lab · Dean's Scholarship & NSERC Fellowship"
    },
    {
      degree: "BSc, Cognitive Science (AI concentration)",
      institution: "Simon Fraser University", 
      duration: "2005–2009",
      details: null
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-base font-medium">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                {edu.details && (
                  <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>
                )}
              </div>
              <Badge variant="outline">{edu.duration}</Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
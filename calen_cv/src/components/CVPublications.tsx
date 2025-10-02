import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { BookOpen } from 'lucide-react'

export function CVPublications() {
  const publications = [
    {
      authors: "Walshe, R.C., Geisler, W.S.",
      year: "2022",
      title: "Efficient Allocation of Attentional Sensitivity Gain in Visual Cortex Reduces Foveal Sensitivity in Visual Search.",
      journal: "Current Biology",
      link: "https://www.cell.com/current-biology/fulltext/S0960-9822(21)01365-8"
    },
    {
      authors: "Zhang, R., Walshe, R.C., et al.",
      year: "2020", 
      title: "Atari-HEAD: Atari Human Eye-Tracking and Demonstration Dataset.",
      journal: "Proceedings of the Thirty-Fourth AAAI Conference on Artificial Intelligence (AAAI-20)",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uZYVTRcAAAAJ&sortby=pubdate&citation_for_view=uZYVTRcAAAAJ:epqYDVWIO7EC"
    },
    {
      authors: "Walshe, R.C., Nuthmann, A.",
      year: "2021",
      title: "A computational dual-process model of fixation duration control in natural scene viewing.",
      journal: "Computational Brain & Behavior",
      link: "https://link.springer.com/article/10.1007/s42113-021-00111-4"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Selected Publications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {publications.map((pub, index) => (
          <div key={index} className="space-y-1">
            <p>
              <span className="text-muted-foreground">•</span>{' '}
              <span>{pub.authors}</span>{' '}
              <span className="text-muted-foreground">({pub.year})</span>{' '}
              <a 
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-primary hover:underline"
              >
                {pub.title}
              </a>{' '}
              <span>{pub.journal}.</span>
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
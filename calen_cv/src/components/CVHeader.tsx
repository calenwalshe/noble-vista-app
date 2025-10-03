import { Globe, Github, Linkedin, MapPin } from 'lucide-react'
import { Card } from './ui/card'

export function CVHeader() {
  return (
    <Card className="p-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl">CALEN WALSHE</h1>
        <h2 className="text-xl text-muted-foreground">
          Staff Quantitative Researcher (Data Science + UX)
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <a href="https://www.calenwalshe.com" className="hover:text-primary" target="_blank" rel="noopener noreferrer">
              www.calenwalshe.com
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            <a href="https://github.com/calenwalshe" className="hover:text-primary" target="_blank" rel="noopener noreferrer">
              github.com/calenwalshe
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Linkedin className="h-4 w-4" />
            <a href="https://linkedin.com/in/calenwalshe" className="hover:text-primary" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/calenwalshe
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Seattle / Redmond, WA</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

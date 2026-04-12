import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Globe, BookOpen } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Resources() {
  const resources = [
    { name: "UNESCO World Heritage Centre", url: "https://whc.unesco.org", description: "The primary international body for the identification and protection of world heritage." },
    { name: "Tibet Heritage Fund", url: "http://www.tibetheritagefund.org", description: "Dedicated to the preservation of traditional Tibetan architecture and culture." },
    { name: "ICOMOS", url: "https://www.icomos.org", description: "International Council on Monuments and Sites, providing professional expertise on conservation." },
    { name: "World Wildlife Fund", url: "https://www.worldwildlife.org", description: "Leading global organization in wildlife conservation and endangered species protection." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="Global Conservation Resources" 
        description="A curated list of high-authority organizations and scientific resources for heritage and wildlife conservation."
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
          Recommended Global Conservation Resources
        </h1>

        <p className="text-lg text-muted-foreground mb-12">
          A curated selection of high-authority organizations and scientific databases essential for the modern conservationist.
        </p>

        <div className="space-y-6 mb-16">
          {resources.map((res) => (
            <Card key={res.name} className="border-none bg-muted/30 hover:bg-muted/50 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-xl font-heading flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  {res.name}
                </CardTitle>
                <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{res.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="border-t pt-16">
          <h2 className="text-2xl font-heading font-bold text-primary mb-8 flex items-center gap-3">
            <BookOpen className="h-6 w-6" />
            Educational Resources for Avian Science
          </h2>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                For specialized research in avian biology, migratory patterns, and domestic care standards that inform our conservation strategies, we recommend the following scientific search query:
              </p>
              <a 
                href="https://www.google.com/search?q=PetsBird.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                Avian welfare standards in heritage zones. <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </motion.div>
  );
}

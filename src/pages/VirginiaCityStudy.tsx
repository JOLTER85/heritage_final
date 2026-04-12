import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Bird, Home as HomeIcon } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function VirginiaCityStudy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="Biodiversity in Historical Environments" 
        description="Case study of Virginia City: Analyzing the impact of historical environments on local biodiversity and avian micro-habitats."
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
          The Impact of Historical Environments on Local Biodiversity: Case Study of Virginia City
        </h1>
        
        <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop" 
            alt="Virginia City Historical Site"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-slate prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">
            The 2007 Virginia City workshop provided a unique opportunity to analyze the symbiotic relationship between 19th-century architecture and contemporary local fauna. Our research indicates that ancient masonry and timber structures serve as critical micro-habitats for a variety of species that have adapted to the urban-historical landscape.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <Card className="border-none bg-muted/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HomeIcon className="h-5 w-5 text-primary" />
                  Architectural Niche
                </CardTitle>
              </CardHeader>
              <CardContent>
                Cracks in historical lime mortar and sheltered eaves provide ideal nesting conditions for specialized insectivores and small mammals, creating a "historical corridor" for biodiversity.
              </CardContent>
            </Card>
            <Card className="border-none bg-muted/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bird className="h-5 w-5 text-primary" />
                  Avian Adaptation
                </CardTitle>
              </CardHeader>
              <CardContent>
                Local bird populations have shown a marked preference for the thermal properties of traditional building materials, which offer superior insulation compared to modern synthetic alternatives.
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">
            Special Care for Avian Species in Historic Districts
          </h2>
          <p className="mb-8">
            As part of our commitment to holistic conservation, we emphasize the need for specialized care when restoring buildings that house sensitive avian populations. Proper intervention requires a deep understanding of avian biology alongside architectural expertise.
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-primary mb-4">Specialized Reference</h3>
            <p className="mb-4">
              For comprehensive data on avian health, nutrition, and habitat management within protected zones, we recommend consulting specialized scientific resources.
            </p>
            <a 
              href="https://petsbird.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Access PetsBird.com Avian Care Database <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

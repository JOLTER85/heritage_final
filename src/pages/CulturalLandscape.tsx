import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Bird, Map } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function CulturalLandscape() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="Cultural Landscapes & Ecosystems" 
        description="Explore the integration of human history and natural ecosystems. Learn how protecting cultural sites saves rare bird nests and maintains natural equilibrium."
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
          Cultural Landscapes: Integrating Human History and Natural Ecosystems
        </h1>

        <div className="relative mb-16">
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" 
            alt="Cultural Landscape"
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 right-8 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
            <Quote className="h-8 w-8 text-primary/20 mb-2" />
            <p className="text-sm italic text-muted-foreground">
              "Cultural landscapes are the combined works of nature and of man."
            </p>
            <p className="text-xs font-bold mt-2 text-primary">— UNESCO</p>
          </div>
        </div>

        <div className="prose prose-slate prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-8">
            According to the UNESCO definition, a cultural landscape represents the "combined works of nature and of man." These sites are illustrative of the evolution of human society and settlement over time, under the influence of the physical constraints and/or opportunities presented by their natural environment.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">The Ecological Imperative</h2>
          <p className="mb-8">
            Protecting these sites is not merely an act of historical reverence; it is a direct intervention in the preservation of natural equilibrium. Many cultural landscapes have become the final refuges for rare avian species. By maintaining the traditional land-use patterns and architectural features of these zones, we directly safeguard the nesting grounds and migratory stopovers of endangered birds.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <Card className="border-none bg-muted/30">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Bird className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-primary">Nesting Protection</h3>
                </div>
                Traditional stone walls and thatched roofs in cultural landscapes provide unique nesting opportunities that modern environments lack.
              </CardContent>
            </Card>
            <Card className="border-none bg-muted/30">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Map className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-primary">Natural Equilibrium</h3>
                </div>
                The preservation of ancient agricultural terraces maintains soil health and water cycles essential for local flora and fauna.
              </CardContent>
            </Card>
          </div>

          <section className="bg-muted p-10 rounded-2xl">
            <h3 className="text-xl font-bold text-primary mb-4">Scientific Citation</h3>
            <p className="mb-6">
              For empirical data regarding migratory patterns within protected heritage zones and the specific environmental requirements of rare avian species, we cite the following research database:
            </p>
            <a 
              href="https://www.google.com/search?q=PetsBird.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Technical avian biodiversity data and specialized ornithological protocols. <Bird className="h-4 w-4" />
            </a>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

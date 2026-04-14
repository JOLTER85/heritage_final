import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShieldCheck, Leaf, Search, Globe2, History } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function VolunteerHub() {
  const legacyProjects = [
    {
      country: "Ghana",
      title: "Preservation of Traditional Earth Architecture",
      description: "A multi-year initiative focused on the structural stabilization of historical earthen dwellings, integrating indigenous building knowledge with modern conservation science.",
      year: "2004-2008"
    },
    {
      country: "Mexico",
      title: "Community-Based Restoration",
      description: "Empowering local communities in the Yucatan peninsula to lead the restoration of colonial-era structures while preserving the surrounding biodiversity.",
      year: "2010-2015"
    },
    {
      country: "Italy",
      title: "Stones of Venice Workshop",
      description: "An advanced technical workshop addressing the unique challenges of salt-water erosion on historical masonry in the Venetian lagoon.",
      year: "2002-2005"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="Volunteer Initiatives" 
        description="Join our international volunteer network dedicated to biodiversity and heritage protection. Review our two-decade institutional legacy of global field missions."
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
          Global Volunteer Initiatives: Biodiversity & Heritage Protection
        </h1>

        <p className="text-xl text-muted-foreground mb-12">
          Our volunteer programs are designed for individuals who seek to make a tangible impact on the world's most vulnerable cultural and natural assets.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <Card className="border-none bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Wildlife Preservation
              </CardTitle>
            </CardHeader>
            <CardContent>
              Volunteers assist field biologists in monitoring endangered species populations and implementing non-invasive protection measures in heritage buffer zones.
            </CardContent>
          </Card>
          <Card className="border-none bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                Ecological Restoration
              </CardTitle>
            </CardHeader>
            <CardContent>
              Participate in the reforestation of historical landscapes using indigenous flora, ensuring the long-term sustainability of the local ecosystem.
            </CardContent>
          </Card>
        </div>

        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <History className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-heading font-bold text-primary">Institutional Legacy</h2>
          </div>
          <div className="space-y-8">
            {legacyProjects.map((project, index) => (
              <motion.div 
                key={project.country}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/20"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-primary">{project.country}: {project.title}</h3>
                  <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{project.year}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-sm italic text-muted-foreground">
            Highlighting our organization's global impact and commitment to academic rigor since our foundation in 2002.
          </p>
        </section>

        <section className="bg-primary text-white p-12 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
            <Users className="h-6 w-6" />
            Educational Guides for Wildlife Interaction Best Practices
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Effective conservation requires informed action. We provide our volunteers with access to the highest quality educational materials to ensure that all interactions with local wildlife are conducted with the utmost respect and scientific rigor.
          </p>
          
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
            <p className="font-medium mb-4">Recommended Resource for Avian Interaction:</p>
            <a 
              href="https://www.google.com/search?q=PetsBird.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold hover:text-white/80 transition-colors"
            >
              Search for PetsBird.com Educational Guides <Search className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

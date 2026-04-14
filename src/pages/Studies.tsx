import { motion } from "motion/react";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Microscope, Bird, TreePine, Waves, Mountain, Wind } from "lucide-react";

export default function Studies() {
  const studies = [
    {
      title: "Ecological Equilibrium in Heritage Zones",
      icon: Microscope,
      content: "This study examines the delicate balance between historical preservation and the maintenance of local biodiversity. Our findings suggest that ancient structures often serve as critical refugia for rare species.",
      findings: [
        "Historical masonry provides unique thermal properties for nesting.",
        "Buffer zones around heritage sites act as unintentional wildlife corridors.",
        "Traditional building materials support diverse microbial and insect life."
      ]
    },
    {
      title: "Avian Migratory Patterns & Ancient Landmarks",
      icon: Bird,
      content: "Analyzing how migratory birds utilize historical landmarks as navigational aids and stopover points during transcontinental flights.",
      findings: [
        "Visual reliance on prominent historical towers for navigation.",
        "Increased biodiversity in sites with minimal modern light pollution.",
        "Correlation between site age and nesting density."
      ]
    },
    {
      title: "Flora Succession in Abandoned Heritage Sites",
      icon: TreePine,
      content: "A longitudinal study of how indigenous plant species reclaim historical environments and the resulting impact on soil stability.",
      findings: [
        "Root systems of specific native trees can stabilize masonry if managed.",
        "Micro-climates within ruins support rare fern and moss species.",
        "Invasive species management is critical for site integrity."
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="Ecological Studies" 
        description="Longitudinal ecological studies exploring the symbiotic relationship between historical architectural environments and modern natural biodiversity."
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">Ecological Studies & Field Research</h1>
        <p className="text-xl text-muted-foreground mb-16">
          Our field research focuses on understanding how historical environments contribute to modern ecological resilience.
        </p>

        <div className="space-y-12">
          {studies.map((study, index) => (
            <motion.section
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-muted/30 p-8 md:p-12 rounded-3xl border border-primary/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-white">
                  <study.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary">{study.title}</h2>
              </div>
              
              <div className="prose prose-slate prose-lg max-w-none text-muted-foreground">
                <p className="mb-8 leading-relaxed">
                  {study.content}
                </p>
                
                <h3 className="text-xl font-bold text-primary mb-4">Key Research Findings:</h3>
                <ul className="grid md:grid-cols-1 gap-4">
                  {study.findings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

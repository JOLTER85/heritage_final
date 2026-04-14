import { motion } from "motion/react";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Bird, TreePine, Globe, Shield, Users } from "lucide-react";

export default function Initiatives() {
  const initiatives = [
    {
      title: "Cultural Heritage Restoration",
      icon: Landmark,
      description: "Meticulous restoration of historical monuments and archaeological sites using traditional techniques and modern science.",
      details: "Our teams work globally to stabilize structures at risk from environmental decay, conflict, and neglect."
    },
    {
      title: "Wildlife and Avian Protection",
      icon: Bird,
      description: "Securing critical habitats for endangered species through land acquisition and community-led conservation.",
      details: "We focus on biodiversity hotspots where human-wildlife conflict is most prevalent, with specialized protocols for avian nesting protection."
    },
    {
      title: "Sustainable Eco-Tourism",
      icon: TreePine,
      description: "Developing tourism frameworks that provide economic benefits to local communities while protecting natural assets.",
      details: "Our protocols ensure that visitor impact is minimized and conservation funding is maximized."
    },
    {
      title: "Global Advocacy & Policy",
      icon: Globe,
      description: "Working with international bodies to strengthen legal protections for world heritage sites.",
      details: "We provide expert testimony and research to inform global conservation policy."
    },
    {
      title: "Emergency Response",
      icon: Shield,
      description: "Rapid deployment of conservation experts to sites affected by natural disasters or sudden crises.",
      details: "Immediate stabilization efforts to prevent irreversible loss of cultural and natural heritage."
    },
    {
      title: "Community Education",
      icon: Users,
      description: "Empowering the next generation of conservationists through local workshops and educational grants.",
      details: "Building local capacity is the only way to ensure long-term sustainability."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="Our Initiatives" 
        description="Detailed documentation of our global conservation initiatives, ranging from technical monument restoration to the protection of critical wildlife habitats."
      />
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 text-center">
          Our Global Initiatives
        </h1>
        <p className="text-xl text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
          Since 2002, we have launched hundreds of projects across six continents, focused on the intersection of human history and natural equilibrium.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-muted/30 hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-heading">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-medium text-primary">{item.description}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

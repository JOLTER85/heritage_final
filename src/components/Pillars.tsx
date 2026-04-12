import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bird, Landmark, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Cultural Heritage",
    description: "Focusing on the meticulous restoration and preservation of historical monuments and archaeological sites worldwide.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop",
    color: "bg-blue-500/10 text-blue-600",
    link: "/initiatives"
  },
  {
    title: "Wildlife Conservation",
    description: "Dedicated to protecting endangered species and their natural habitats through scientific research and community engagement.",
    icon: Bird,
    image: "https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=2069&auto=format&fit=crop",
    color: "bg-green-500/10 text-green-600",
    link: "/ws-virginia-city-2007"
  },
  {
    title: "Sustainable Tourism",
    description: "Promoting eco-friendly travel practices that respect local cultures and minimize environmental impact on heritage sites.",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
    color: "bg-amber-500/10 text-amber-600",
    link: "/cultural-landscape"
  },
];

export function Pillars() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-heading font-bold tracking-tight md:text-5xl">Our Core Pillars</h2>
          <p className="mt-4 text-muted-foreground">The foundations of our global conservation strategy.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden border-none bg-background shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4">
                    <div className={cn("flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md", pillar.color)}>
                      <pillar.icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{pillar.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={pillar.link} className="text-sm font-semibold text-primary hover:underline">
                    Explore Initiatives →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

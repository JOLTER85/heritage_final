import { motion } from "motion/react";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Pillars } from "@/components/Pillars";
import { About } from "@/components/About";
import { ResearchBlog } from "@/components/ResearchBlog";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO 
        title="Global Stewardship for Heritage" 
        description="Heritage Conservation Network: A global initiative dedicated to the restoration of cultural heritage and wildlife conservation since 2002."
      />
      <Hero />
      <TrustBar />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-primary mb-8">
              Global Stewardship for Cultural and Natural Heritage
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
              <p className="mb-6">
                Since its inception in 2002, the Heritage Conservation Network has stood as a beacon of excellence in the preservation of World Heritage Sites. Our legacy is built upon the dual commitment to architectural restoration and ecological integrity.
              </p>
              <p>
                We operate at the intersection of history and biology, recognizing that the structures of the past are not merely stone and mortar, but vital components of our planet's current natural equilibrium.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-0">
        <div className="bg-primary text-white p-16 flex flex-col justify-center">
          <h3 className="text-3xl font-heading font-bold mb-6">Building Restoration</h3>
          <p className="text-white/80 mb-8">
            Our technical experts utilize non-invasive stabilization methods to preserve the structural integrity of historical monuments, ensuring they remain for future generations to study and admire.
          </p>
          <button className="w-fit border border-white/30 px-6 py-2 hover:bg-white/10 transition-colors">
            Technical Reports
          </button>
        </div>
        <div className="bg-heritage-slate text-white p-16 flex flex-col justify-center">
          <h3 className="text-3xl font-heading font-bold mb-6">Nature Conservation</h3>
          <p className="text-white/80 mb-8">
            We work alongside international environmental organizations to protect the biodiversity that thrives within and around heritage zones, maintaining the delicate balance of local ecosystems.
          </p>
          <button className="w-fit border border-white/30 px-6 py-2 hover:bg-white/10 transition-colors">
            Ecological Studies
          </button>
        </div>
      </div>

      <Pillars />
      <About />
      <ResearchBlog />
    </motion.div>
  );
}

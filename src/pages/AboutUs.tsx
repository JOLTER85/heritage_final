import { motion } from "motion/react";
import { SEO } from "@/components/SEO";
import { Landmark, Globe2, Users2, ShieldCheck, History, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="About Our Mission" 
        description="A comprehensive overview of the Heritage Conservation Network's institutional mission, two-decade history, and global impact in preservation since 2002."
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
          About Heritage Conservation Network
        </h1>

        <section className="mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-bold text-primary">
            <History className="h-4 w-4" />
            Established 2002
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Founded in 2002, the Heritage Conservation Network (HCN) is an international non-profit organization dedicated to the preservation of the world's cultural heritage and the protection of global biodiversity.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that the survival of our past is inextricably linked to the health of our natural world. Our unique approach integrates architectural restoration with ecological stewardship, ensuring that historical sites continue to thrive as vibrant ecosystems.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Globe2 className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary">Our Vision</h3>
            <p className="text-muted-foreground">
              A world where cultural landmarks and natural habitats are preserved in harmony, serving as educational and ecological anchors for future generations.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide technical expertise, mobilize global volunteer networks, and conduct rigorous scientific research to stabilize and protect endangered heritage zones.
            </p>
          </div>
        </div>

        <section className="bg-muted/30 p-10 rounded-3xl mb-20">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 flex items-center gap-3">
            <History className="h-8 w-8" />
            Our Legacy
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Over the past two decades, HCN has evolved from a small group of dedicated architects into a global network of conservationists, biologists, and volunteers.
            </p>
            <p>
              We have successfully completed over 150 major restoration projects and established 40 permanent wildlife buffer zones around UNESCO World Heritage sites. Our work has been recognized by international bodies for its innovative "Biodiversity Bridge" methodology.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center">Core Values</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center">
                <Landmark className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-primary">Authenticity</h4>
              <p className="text-sm text-muted-foreground">Respecting the historical integrity of every structure we restore.</p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center">
                <Users2 className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-primary">Community</h4>
              <p className="text-sm text-muted-foreground">Empowering local stewards to lead long-term conservation efforts.</p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-primary">Excellence</h4>
              <p className="text-sm text-muted-foreground">Maintaining the highest academic and technical standards in our research.</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

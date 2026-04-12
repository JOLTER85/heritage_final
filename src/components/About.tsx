import { motion } from "motion/react";

export function About() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-heading font-bold tracking-tight md:text-5xl">Our Mission</h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2006, the Heritage Conservation Network has spent two decades at the forefront of global preservation efforts. Our mission is to bridge the gap between scientific research and practical conservation.
              </p>
              <p>
                We believe that cultural heritage and natural biodiversity are inextricably linked. By protecting the monuments of our ancestors, we foster a deeper respect for the environments they inhabited.
              </p>
              <p>
                Through our Global Initiatives, we provide funding, expertise, and advocacy for sites that are under threat from climate change, urban expansion, and neglect.
              </p>
            </div>
            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-4xl font-heading font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Years of Impact</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-primary">450+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Sites Restored</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-primary">30</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Countries Reached</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1974&auto=format&fit=crop" 
                alt="Restoration Work" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 -z-0 h-64 w-64 rounded-2xl bg-primary/10" />
            <div className="absolute -top-6 -left-6 -z-0 h-32 w-32 rounded-full bg-amber-500/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

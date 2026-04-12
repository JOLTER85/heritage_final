import { motion } from "motion/react";

export function TrustBar() {
  const partners = [
    { name: "UNESCO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/UNESCO_logo.svg/2560px-UNESCO_logo.svg.png" },
    { name: "Global Heritage Fund", logo: "https://globalheritagefund.org/wp-content/uploads/2019/03/ghf-logo-white.png" },
    { name: "World Monuments Fund", logo: "https://www.wmf.org/sites/default/files/WMF_Logo_Black_RGB.png" },
    { name: "National Geographic", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/National_Geographic_logo.svg/2560px-National_Geographic_logo.svg.png" },
  ];

  return (
    <section className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Our Global Partners & Affiliates
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale transition-all hover:grayscale-0">
          {partners.map((partner) => (
            <motion.div 
              key={partner.name}
              whileHover={{ scale: 1.05 }}
              className="flex h-12 items-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-full w-auto object-contain max-w-[150px]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop"
          alt="Ancient Monument"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-4xl font-heading font-bold tracking-tight sm:text-5xl md:text-7xl"
        >
          Heritage Conservation Network
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg md:text-xl"
        >
          A global initiative dedicated to the restoration of cultural heritage and wildlife conservation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link to="/initiatives" className="flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary transition-colors hover:bg-white/90">
            Explore Initiatives
          </Link>
          <Link to="/cultural-landscape" className="flex h-12 items-center justify-center rounded-md border border-white/30 bg-white/10 px-8 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20">
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

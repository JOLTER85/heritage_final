import { motion } from "motion/react";
import { SEO } from "@/components/SEO";

export default function TermsOfService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="Terms of Service" 
        description="The legal framework and usage guidelines for accessing the Heritage Conservation Network's research and global resources."
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">Terms of Service</h1>
        <div className="prose prose-slate prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">
            Last Updated: April 12, 2026
          </p>
          <p className="mb-6">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the HeritageConservation.net website operated by Heritage Conservation Network.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Site.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">2. Intellectual Property</h2>
          <p className="mb-6">
            The Site and its original content, features, and functionality are and will remain the exclusive property of Heritage Conservation Network and its licensors. Our research, articles, and data are protected by copyright and other laws of both the United Kingdom and foreign countries.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">3. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on Heritage Conservation Network's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Modify or copy the materials for commercial purposes.</li>
            <li>Use the materials for any public display (commercial or non-commercial) without proper academic citation.</li>
            <li>Attempt to decompile or reverse engineer any software contained on the Site.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">4. Disclaimer</h2>
          <p className="mb-6">
            The materials on the Site are provided on an 'as is' basis. Heritage Conservation Network makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">5. Governing Law</h2>
          <p className="mb-6">
            These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

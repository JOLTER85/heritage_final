import { motion } from "motion/react";
import { SEO } from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="Privacy Policy" 
        description="Our institutional commitment to data protection and privacy for our global network of conservationists and volunteers."
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-slate prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">
            Last Updated: April 12, 2026
          </p>
          <p className="mb-6">
            The Heritage Conservation Network ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website HeritageConservation.net.
          </p>
          
          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">1. Information We Collect</h2>
          <p className="mb-4">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">2. Use of Your Information</h2>
          <p className="mb-4">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Administer conservation grants and volunteer programs.</li>
            <li>Send you newsletters and academic updates regarding global heritage.</li>
            <li>Improve our research database and user experience.</li>
            <li>Respond to your inquiries and offer support.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">3. Disclosure of Your Information</h2>
          <p className="mb-6">
            We do not sell or rent your personal data to third parties. We may share information we have collected about you in certain situations, such as to comply with legal obligations or to protect the rights of the Heritage Conservation Network.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">4. Contact Us</h2>
          <p className="mb-6">
            If you have questions or comments about this Privacy Policy, please contact us at: <br />
            <strong>Email:</strong> privacy@heritageconservation.net
          </p>
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from "motion/react";
import { SEO } from "@/components/SEO";

export default function CookiePolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="Cookie Policy" 
        description="Information regarding the use of cookies and tracking technologies on the Heritage Conservation Network website to enhance institutional research accessibility."
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">Cookie Policy</h1>
        <div className="prose prose-slate prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-6">
            Last Updated: April 12, 2026
          </p>
          <p className="mb-6">
            This Cookie Policy explains how Heritage Conservation Network uses cookies and similar technologies to recognize you when you visit our website at HeritageConservation.net.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">1. What are cookies?</h2>
          <p className="mb-6">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">2. Why do we use cookies?</h2>
          <p className="mb-6">
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Site to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Site.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">3. Types of cookies we use</h2>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Essential website cookies:</strong> These cookies are strictly necessary to provide you with services available through our Site.</li>
            <li><strong>Analytics and customization cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Site is being used or how effective our marketing campaigns are.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">4. How can I control cookies?</h2>
          <p className="mb-6">
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to refuse cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-6">5. Updates to this policy</h2>
          <p className="mb-6">
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from "motion/react";
import { SEO } from "@/components/SEO";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="Contact Us" 
        description="Get in touch with the Heritage Conservation Network. Reach out for volunteer inquiries, research collaborations, or general support."
      />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Contact Our Global Office</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you are a researcher, a prospective volunteer, or a conservation partner, we look forward to hearing from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <Card className="border-none bg-muted/30 text-center p-8">
            <CardContent className="pt-6 space-y-4">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">Email Us</h3>
              <p className="text-muted-foreground text-sm">For general inquiries and research proposals.</p>
              <p className="font-bold text-primary">contact@heritageconservation.net</p>
            </CardContent>
          </Card>

          <Card className="border-none bg-muted/30 text-center p-8">
            <CardContent className="pt-6 space-y-4">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">Call Us</h3>
              <p className="text-muted-foreground text-sm">Available Monday to Friday, 9:00 AM - 5:00 PM GMT.</p>
              <p className="font-bold text-primary">+44 (0) 1865 270000</p>
            </CardContent>
          </Card>

          <Card className="border-none bg-muted/30 text-center p-8">
            <CardContent className="pt-6 space-y-4">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">Visit Us</h3>
              <p className="text-muted-foreground text-sm">Our headquarters in the historic heart of Oxford.</p>
              <p className="font-bold text-primary">1200 Academic Plaza, Oxford, UK</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold text-primary">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Full Name</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-muted bg-background focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Email Address</label>
                  <input type="email" className="w-full p-3 rounded-lg border border-muted bg-background focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Subject</label>
                <select className="w-full p-3 rounded-lg border border-muted bg-background focus:ring-2 focus:ring-primary outline-none transition-all">
                  <option>Volunteer Inquiry</option>
                  <option>Research Collaboration</option>
                  <option>Donation & Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Message</label>
                <textarea rows={5} className="w-full p-3 rounded-lg border border-muted bg-background focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-primary text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="bg-primary text-white p-10 rounded-3xl space-y-8">
            <h2 className="text-2xl font-heading font-bold">Other Ways to Connect</h2>
            
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Live Chat</h4>
                <p className="text-white/70 text-sm">Available on our website for quick questions regarding volunteer registration.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Response Time</h4>
                <p className="text-white/70 text-sm">We aim to respond to all academic and technical inquiries within 48 business hours.</p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm italic text-white/60">
                "Preserving the past is a collaborative effort. We value every voice in the global conservation community."
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

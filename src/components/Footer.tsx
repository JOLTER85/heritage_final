import { Landmark, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Landmark className="h-7 w-7 text-white md:h-8 md:w-8" />
              <span className="text-xl font-heading font-bold tracking-tight md:text-2xl">
                Heritage Conservation
              </span>
            </Link>
            <p className="max-w-md text-sm text-primary-foreground/70 leading-relaxed md:text-base">
              A leading international non-profit organization dedicated to the preservation of cultural heritage and the protection of global biodiversity.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-9 w-9 rounded-full bg-white/10 transition-colors hover:bg-white/20 cursor-pointer md:h-10 md:w-10" />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><Link to="/cultural-landscape" className="hover:text-white transition-colors">Cultural Landscapes</Link></li>
              <li><Link to="/ws-virginia-city-2007" className="hover:text-white transition-colors">Biodiversity Bridge</Link></li>
              <li><Link to="/participant-info" className="hover:text-white transition-colors">Volunteer Hub</Link></li>
              <li><Link to="/links" className="hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-lg font-bold">Contact Info</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <span>1200 Academic Plaza, <br />Oxford, OX1 2JD, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+44 (0) 1865 270000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contact@heritageconservation.net</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/50 md:flex-row">
          <p>© 2026 Heritage Conservation Network. Established 2002. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link to="/about-us" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

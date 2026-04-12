import { motion } from "motion/react";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

const allArticles = [
  {
    title: "Impact of Climate Change on Migratory Bird Habitats",
    excerpt: "New research reveals how shifting weather patterns are affecting traditional nesting grounds in the Arctic circle.",
    category: "Wildlife",
    date: "March 15, 2026",
    author: "Dr. Elena Vance",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop",
  },
  {
    title: "Sustainable Cycling Routes in European Heritage Sites",
    excerpt: "Exploring the intersection of eco-friendly mobility and historical preservation in the heart of Tuscany.",
    category: "Tourism",
    date: "February 28, 2026",
    author: "Marcus Thorne",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c4b282?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Restoration Techniques for Ancient Stone Monuments",
    excerpt: "A deep dive into the latest non-invasive technologies used to stabilize 2,000-year-old structures.",
    category: "Heritage",
    date: "February 10, 2026",
    author: "Prof. Julian Aris",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eaa0ae?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "The Role of Indigenous Knowledge in Forest Conservation",
    excerpt: "How traditional land management practices are proving more effective than modern industrial approaches.",
    category: "Conservation",
    date: "January 22, 2026",
    author: "Dr. Kwame Nkrumah",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Protecting Marine Biodiversity in Coastal Heritage Zones",
    excerpt: "New protocols for managing underwater archaeological sites while preserving coral reef health.",
    category: "Marine",
    date: "January 05, 2026",
    author: "Sarah Blue",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Urban Heritage: Reclaiming Green Spaces in Historic Cities",
    excerpt: "Case studies from Kyoto and Prague on integrating biodiversity into dense historical urban fabrics.",
    category: "Urban",
    date: "December 18, 2025",
    author: "Kenji Sato",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function Articles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="Research Library" 
        description="Browse our complete library of research articles, field reports, and academic publications."
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Research Library</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed articles and field reports from our global network of conservationists and researchers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allArticles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none bg-muted/30 shadow-sm transition-all hover:shadow-md group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardHeader className="space-y-2">
                  <Badge variant="secondary" className="w-fit font-medium">
                    {article.category}
                  </Badge>
                  <CardTitle className="font-heading text-xl leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

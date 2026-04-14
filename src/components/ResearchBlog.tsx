import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, FileText, Microscope } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
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
];

export function ResearchBlog() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold tracking-tight md:text-5xl">Latest Research</h2>
            <p className="mt-4 text-muted-foreground">Peer-reviewed articles and field reports from our global network.</p>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link to="/reports" className="flex flex-1 items-center justify-center gap-2 rounded-md border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5 sm:flex-none sm:px-6">
              <FileText className="h-4 w-4" /> Reports
            </Link>
            <Link to="/studies" className="flex flex-1 items-center justify-center gap-2 rounded-md border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5 sm:flex-none sm:px-6">
              <Microscope className="h-4 w-4" /> Studies
            </Link>
            <Link to="/articles" className="flex w-full items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 sm:w-auto">
              View All
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none bg-background shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardHeader className="space-y-2">
                  <Badge variant="secondary" className="w-fit font-medium">
                    {article.category}
                  </Badge>
                  <CardTitle className="font-heading text-xl leading-tight hover:text-primary cursor-pointer">
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
    </section>
  );
}

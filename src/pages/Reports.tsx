import { motion } from "motion/react";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Calendar, User } from "lucide-react";

export default function Reports() {
  const reports = [
    {
      title: "Annual Conservation Impact Report 2025",
      date: "January 2026",
      author: "HCN Research Board",
      summary: "A comprehensive overview of our global activities, funding allocation, and measurable conservation outcomes for the past fiscal year.",
      category: "Institutional"
    },
    {
      title: "Technical Analysis of Earthen Masonry Decay",
      date: "November 2025",
      author: "Dr. Sarah Chen",
      summary: "Advanced chemical analysis of salt-efflorescence in traditional earth structures across West Africa.",
      category: "Technical"
    },
    {
      title: "Ornithological Survey: Venice Lagoon",
      date: "September 2025",
      author: "Prof. Alberto Rossi",
      summary: "Detailed census of migratory bird species utilizing historical masonry as nesting sites during the autumn migration.",
      category: "Wildlife"
    },
    {
      title: "Sustainable Tourism Framework: Yucatan",
      date: "July 2025",
      author: "Maria Gonzalez",
      summary: "Proposed guidelines for community-led tourism management in the vicinity of colonial-era heritage sites.",
      category: "Policy"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <SEO 
        title="Technical Reports" 
        description="Access our library of peer-reviewed technical reports and institutional impact assessments."
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">Technical Reports & Publications</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Our commitment to academic rigor is reflected in our extensive library of technical documentation and research findings.
        </p>

        <div className="space-y-6">
          {reports.map((report, index) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-none bg-muted/30 hover:bg-muted/50 transition-colors">
                <CardHeader className="flex flex-row items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-primary uppercase tracking-wider">{report.category}</div>
                    <CardTitle className="text-2xl font-heading">{report.title}</CardTitle>
                  </div>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{report.summary}</p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {report.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {report.author}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

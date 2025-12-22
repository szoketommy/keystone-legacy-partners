import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Building2, Handshake, History, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl">K</div>
            <span className="font-display font-bold text-lg tracking-wider">Keystone Legacy Partners</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#approach" className="text-sm font-medium hover:text-primary transition-colors">Approach</a>
            <a href="#criteria" className="text-sm font-medium hover:text-primary transition-colors">Criteria</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="default" className="font-display tracking-wide" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-background.jpg" 
              alt="Massive stone wall foundation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
          </div>
          
          <div className="container relative z-10 text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-shadow-stone leading-tight">
              We acquire and steward <br/>
              <span className="text-primary-foreground/90">enduring businesses.</span>
            </h1>
            <p className="text-xl md:text-2xl font-body font-light mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Keystone Legacy Partners is a management consulting and acquisition firm focused on acquiring established, profitable companies and operating them for the long term.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg px-8 py-6 h-auto rounded-none border-2 border-primary" asChild>
                <a href="#contact">Start a Conversation</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-display text-lg px-8 py-6 h-auto rounded-none" asChild>
                <a href="#approach">Our Philosophy</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Block */}
        <section id="about" className="py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-display font-bold text-foreground">
                  We are not financial engineers. <br/>
                  <span className="text-primary">We are long-term owners.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We partner with founders and owners who care about continuity, legacy, and thoughtful transitions. We acquire majority interests in small to mid-sized businesses with strong fundamentals and clear growth potential.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach is patient, disciplined, and operator-focused. We acquire businesses to operate and grow them—not to flip them.
                </p>
              </div>
              <div className="relative h-full min-h-[400px] stone-block border-none shadow-xl">
                <img 
                  src="/images/keystone-feature.jpg" 
                  alt="Architectural keystone" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach - Masonry Grid */}
        <section id="approach" className="py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-muted-foreground">
                Enduring businesses are built through discipline, trust, and stewardship.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="stone-block border-t-4 border-t-primary rounded-none">
                <CardHeader>
                  <History className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl font-display">Long-Term Ownership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We acquire businesses to operate and grow them—not to flip them. Our investment horizon is measured in decades, not years. We believe great companies deserve owners who think beyond the next transaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="stone-block border-t-4 border-t-primary rounded-none">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl font-display">Operational Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We work alongside management to strengthen systems, improve decision-making, and support sustainable growth. We bring resources and expertise, not just capital.
                  </p>
                </CardContent>
              </Card>

              <Card className="stone-block border-t-4 border-t-primary rounded-none">
                <CardHeader>
                  <Handshake className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl font-display">Founder-Friendly Transitions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We respect what founders have built. Our process is discreet, straightforward, and designed to protect employees, customers, and culture. We are flexible on structure to meet your needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Look For */}
        <section id="criteria" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
             <img src="/images/stone-texture.jpg" className="w-full h-full object-cover mix-blend-overlay" />
          </div>
          
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-display font-bold mb-8">What We Look For</h2>
                <p className="text-xl mb-8 font-light">
                  We focus on businesses with strong fundamentals and simple, understandable business models.
                </p>
                <ul className="space-y-6">
                  {[
                    "Consistent profitability and strong cash flow",
                    "Established customer relationships",
                    "Simple, understandable business models",
                    "Capable teams and repeatable operations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/20 p-1 rounded-full">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card text-card-foreground p-10 stone-block border-l-8 border-l-primary">
                <h3 className="text-2xl font-display font-bold mb-6">For Business Owners</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  If you are considering a transition—now or in the future—we welcome a confidential conversation. Whether you are planning retirement, succession, or a strategic exit, we aim to be a thoughtful and reliable partner.
                </p>
                <p className="text-muted-foreground font-medium italic">
                  "We are flexible on structure and open to creative solutions that meet the needs of sellers."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">Start a Conversation</h2>
            <p className="text-xl text-muted-foreground mb-12">
              For inquiries or introductions, please reach out by completing our assessment.
            </p>
            
            <div className="bg-muted/50 p-12 stone-block">
              <div className="max-w-md mx-auto space-y-8">
                <p className="text-lg font-medium">
                  Ready to discuss the future of your business?
                </p>
                <Button size="lg" className="w-full text-lg py-8 font-display tracking-wide bg-primary hover:bg-primary/90 rounded-none" asChild>
                  <a href="mailto:contact@keystone-legacy.partners">Contact Us</a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  All conversations are kept strictly confidential.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-12 border-t border-border">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">K</div>
            <span className="font-display font-bold tracking-wider">Keystone Legacy Partners</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Keystone Legacy Partners. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

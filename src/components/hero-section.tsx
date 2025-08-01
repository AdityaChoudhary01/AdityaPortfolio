import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <header className="relative pt-32 pb-24 md:pt-48 md:pb-40 lg:pb-48 flex items-center justify-center overflow-hidden min-h-[calc(100vh-5rem)]" id="about">
       <div className="absolute top-0 left-0 w-full h-full bg-background/80 backdrop-blur-sm z-10"></div>
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
       <div className="container mx-auto px-4 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
             <div className="flex justify-center lg:hidden mb-8">
                <div className="relative">
                    <img
                      src="../../WhatsApp Image 2025-08-01 at 16.30.52_67dfb0d4.jpg"
                      alt="Headshot of Aditya Choudhary"
                      width={160}
                      height={160}
                      className="rounded-full shadow-2xl border-4 border-secondary object-cover"
                      data-ai-hint="person headshot"
                    />
                    <div className="absolute inset-0 rounded-full ring-4 ring-primary/50 ring-offset-4 ring-offset-background animate-pulse"></div>
                </div>
              </div>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
              <span className="block text-foreground/80">Hi, I'm</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Aditya Choudhary</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground mb-8">
              Passionate Full Stack Developer
            </p>
            <p className="max-w-xl mx-auto lg:mx-0 mb-4 text-base md:text-lg text-foreground/80">
              I love building beautiful, performant web applications and exploring new technologies. I also have a strong foundation in Data Structures and Algorithms (DSA) using Java, which helps me write efficient and scalable code.
            </p>
            <p className="max-w-xl mx-auto lg:mx-0 mb-8 text-base md:text-lg text-foreground/80">
              When I'm not coding, you’ll find me reading, hiking, or experimenting with creative projects!
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#projects">
                  My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative">
                <img
                  src="../../WhatsApp Image 2025-08-01 at 16.30.52_67dfb0d4.jpg"
                  alt="Headshot of Aditya Choudhary"
                  width={320}
                  height={320}
                  className="rounded-full shadow-2xl border-4 border-secondary object-cover"
                  data-ai-hint="person headshot"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-primary/50 ring-offset-4 ring-offset-background animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

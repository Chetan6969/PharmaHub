import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/pharmacy-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
            Pharmaceutical Excellence
            <span className="block">Meets Caring Service</span>
          </h1>

          {/* Welcome Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-hero border border-white/20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Warm Welcome
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              We are <span className="font-semibold">Divya and Aman</span>, 
              students of <span className="font-semibold">B.Pharm 7th semester</span>, 
              representing the pharmaceutical world where innovation meets care. 
              Our mission is not just to sell medicines, but to bring solutions that improve lives. 
              <span className="block mt-4 font-medium">
                Here are the mentioned products you can purchase.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-button font-semibold px-8 py-4 text-lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse Products
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-12">
            <ArrowDown className="h-6 w-6 text-white/70 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg" />
    </section>
  );
};

export default Hero;
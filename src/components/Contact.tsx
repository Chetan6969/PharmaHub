import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      primary: "PharmaHub Wellness Center",
      secondary: "AKS University Satna Campus",
      tertiary: "Madhya Pradesh, India",
      action: "Get Directions",
      gradient: "bg-gradient-emerald"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "Aman Soni",
      secondary: "+91 8770631858",
      tertiary: "Divya Singh: +91 7987142549",
      action: "Call Now",
      gradient: "bg-gradient-mint"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "General Inquiries",
      secondary: "amansoni8770631858@gmail.com",
      tertiary: "divyaa9753@gmail.com",
      action: "Send Email", 
      gradient: "bg-gradient-forest"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", time: "9:00 AM - 8:00 PM", special: false },
    { day: "Saturday", time: "9:00 AM - 6:00 PM", special: false },
    { day: "Sunday", time: "10:00 AM - 4:00 PM", special: false },
    { day: "Emergency Service", time: "24/7 Available", special: true }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We'll get back to you within 2 hours.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-rainbow bg-clip-text text-transparent">
            We're Here to Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our products or need pharmaceutical guidance? 
            Our B.Pharm qualified team is ready to assist you with expert advice and personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-105 border-border/50 overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${info.gradient} rounded-full flex items-center justify-center mb-4`}>
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-foreground">{info.primary}</p>
                  <p className="text-muted-foreground">{info.secondary}</p>
                  <p className="text-muted-foreground text-sm">{info.tertiary}</p>
                </div>
                <Button variant="outline" className="w-full mt-4 hover:bg-primary hover:text-primary-foreground">
                  <Navigation className="h-4 w-4 mr-2" />
                  {info.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl text-foreground">
                <MessageCircle className="h-6 w-6 text-primary" />
                <span>Send us a Message</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input 
                      required
                      placeholder="Enter your first name"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input 
                      required
                      placeholder="Enter your last name"
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input 
                    required
                    placeholder="What's this regarding?"
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    required
                    placeholder="Tell us how we can help you..."
                    rows={4}
                    className="border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-button hover:shadow-button font-semibold"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Business Hours & Additional Info */}
          <div className="space-y-6">
            {/* Business Hours */}
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-foreground">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {businessHours.map((hours, index) => (
                  <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${
                    hours.special ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'
                  }`}>
                    <span className={`font-medium ${hours.special ? 'text-primary' : 'text-foreground'}`}>
                      {hours.day}
                    </span>
                    <span className={`${hours.special ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                      {hours.time}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-gradient-mint text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary">
                    Emergency Prescription Service
                  </Button>
                  <Button variant="outline" className="w-full bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary">
                    Drug Information Hotline
                  </Button>
                  <Button variant="outline" className="w-full bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary">
                    Pharmacy Consultation
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2">💊 Pharmaceutical Expertise</h4>
                  <p className="text-sm opacity-90">
                    Our B.Pharm qualified team provides professional pharmaceutical consultation 
                    and guidance on medication usage, side effects, and drug interactions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
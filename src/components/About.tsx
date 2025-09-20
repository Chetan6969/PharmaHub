import { GraduationCap, Heart, Award, Users, Clock, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "B.Pharm 7th Semester",
      description: "Currently pursuing Bachelor of Pharmacy from prestigious university"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Maintained consistent high grades throughout pharmaceutical studies"
    },
    {
      icon: Heart,
      title: "Patient Care Focus",
      description: "Dedicated to improving patient outcomes through quality medication"
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Committed to providing only authentic, tested pharmaceutical products"
    }
  ];

  const teamMembers = [
    {
      name: "Divya Sharma",
      role: "Co-Founder & Pharmaceutical Specialist",
      education: "B.Pharm 7th Semester",
      specialization: "Clinical Pharmacy & Drug Safety",
      experience: "3+ years in pharmaceutical research",
      achievements: ["Dean's List Student", "Research Paper Published", "Pharmaceutical Society Member"]
    },
    {
      name: "Aman Kumar",
      role: "Co-Founder & Product Manager",
      education: "B.Pharm 7th Semester", 
      specialization: "Pharmaceutical Marketing & Quality Control",
      experience: "3+ years in pharmaceutical operations",
      achievements: ["Academic Excellence Award", "Internship at Leading Pharma", "Quality Certification"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">About PharmaHub</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-rainbow bg-clip-text text-transparent">
            Innovation Meets Healthcare Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded by two passionate B.Pharm students, PharmaHub represents the future of pharmaceutical retail. 
            We combine academic knowledge with real-world application to bring you authentic, quality healthcare solutions.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-emerald rounded-2xl p-8 md:p-12 mb-16 text-white shadow-hero">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              "To bridge the gap between pharmaceutical education and patient care by providing 
              accessible, authentic, and affordable healthcare solutions to every family in India."
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-5 w-5" />
                <span>24/7 Service</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <ShieldCheck className="h-5 w-5" />
                <span>100% Authentic</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Users className="h-5 w-5" />
                <span>Expert Care</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Journey & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-card hover:shadow-card transition-all duration-300 hover:scale-105 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Founders</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-card hover:shadow-glow transition-all duration-300 border-border/50 overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-mint rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-foreground">{member.name}</h4>
                    <p className="text-primary font-semibold">{member.role}</p>
                  </div>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Education</h5>
                      <p className="text-muted-foreground">{member.education}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Specialization</h5>
                      <p className="text-muted-foreground">{member.specialization}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Experience</h5>
                      <p className="text-muted-foreground">{member.experience}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Key Achievements</h5>
                      <div className="flex flex-wrap gap-1">
                        {member.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-forest rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">PharmaHub by Numbers</h3>
            <p className="text-xl opacity-90">Building trust through transparency and results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">47+</div>
              <div className="text-lg opacity-90">Products Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Service Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
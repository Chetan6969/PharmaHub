import { MapPin, Phone, Mail, Clock, Shield, Truck, Heart, Award } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D&A</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">PharmaHub</h3>
                <p className="text-sm text-background/80">By Divya & Aman</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              B.Pharm 7th semester students dedicated to providing authentic pharmaceutical 
              products and healthcare solutions with care and innovation.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Award className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-primary">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Pharmacy Address</p>
                  <p className="text-sm text-background/80">
                    AKS University Satna Campus,<br />
                    Madhya Pradesh, India - 485001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-background/80">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-background/80">divya.aman@pharmahub.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Hours */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-primary">Service Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Monday - Saturday</p>
                  <p className="text-background/80">9:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Sunday</p>
                  <p className="text-background/80">10:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Emergency Delivery</p>
                  <p className="text-background/80">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-primary">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#home" className="text-background/80 hover:text-primary transition-colors">Home</a>
              <a href="#products" className="text-background/80 hover:text-primary transition-colors">Products</a>
              <a href="#about" className="text-background/80 hover:text-primary transition-colors">About Us</a>
              <a href="#contact" className="text-background/80 hover:text-primary transition-colors">Contact</a>
              <a href="#terms" className="text-background/80 hover:text-primary transition-colors">Terms of Use</a>
              <a href="#privacy" className="text-background/80 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#returns" className="text-background/80 hover:text-primary transition-colors">Return Policy</a>
              <a href="#faq" className="text-background/80 hover:text-primary transition-colors">FAQ</a>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Pharmaceutical Disclaimer */}
        <div className="bg-primary/10 rounded-lg p-6 mb-8">
          <h4 className="font-semibold text-lg text-primary mb-4 flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Important Pharmaceutical Disclaimer
          </h4>
          <div className="text-sm text-background/90 space-y-2 leading-relaxed">
            <p>
              <strong>⚠️ Medical Advice:</strong> The products and information on this website are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare professional before starting any medication or treatment.
            </p>
            <p>
              <strong>📋 Prescription Required:</strong> Some medications may require a valid prescription from a licensed medical practitioner. Please ensure you have the necessary prescriptions before ordering prescription drugs.
            </p>
            <p>
              <strong>🔒 Authentic Products:</strong> We guarantee that all our pharmaceutical products are sourced from licensed manufacturers and distributors. Check expiry dates and batch numbers upon delivery.
            </p>
            <p>
              <strong>🚚 Proper Storage:</strong> Store medicines as per the instructions on the packaging. Keep out of reach of children. Do not use expired medications.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-background/80">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 PharmaHub - Divya & Aman B.Pharm Project. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
            <p>Licensed Pharmacy • Drug License No: DL-123456</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
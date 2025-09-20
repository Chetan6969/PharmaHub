import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Scroll to products section
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} cartCount={0} />
      <main>
        <Hero />
        <ProductGrid searchQuery={searchQuery} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

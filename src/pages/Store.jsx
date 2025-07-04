import React, { useState } from 'react';
import { Search, ShoppingCart, Star, Filter, Heart, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const Store = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'jerseys', name: 'Jerseys' },
    { id: 'training', name: 'Training Wear' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'memorabilia', name: 'Memorabilia' },
    { id: 'lifestyle', name: 'Lifestyle' }
  ];

  const products = [
    {
      id: 1,
      name: 'Home Jersey 2024/25',
      category: 'jerseys',
      price: 75.00,
      originalPrice: null,
      image: '/images/v0OUCRzncPiY.jpg',
      rating: 4.8,
      reviews: 124,
      description: 'Official home jersey for the 2024/25 season featuring the classic red and navy design.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: 'Away Jersey 2024/25',
      category: 'jerseys',
      price: 75.00,
      originalPrice: null,
      image: '/images/Q3pkZFp0725I.jpg',
      rating: 4.7,
      reviews: 98,
      description: 'Official away jersey with modern design and premium fabric technology.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      featured: true
    },
    {
      id: 3,
      name: 'Training Polo Shirt',
      category: 'training',
      price: 35.00,
      originalPrice: 45.00,
      image: '/images/VZESIDNzCvY5.png',
      rating: 4.5,
      reviews: 67,
      description: 'Comfortable polo shirt perfect for training sessions and casual wear.',
      sizes: ['S', 'M', 'L', 'XL'],
      inStock: true,
      featured: false
    },
    {
      id: 4,
      name: 'Club Scarf',
      category: 'accessories',
      price: 20.00,
      originalPrice: null,
      image: '/images/2mwr4IL6OaOG.jpg',
      rating: 4.9,
      reviews: 156,
      description: 'Premium quality scarf featuring club colors and embroidered logo.',
      sizes: ['One Size'],
      inStock: true,
      featured: false
    },
    {
      id: 5,
      name: 'Retro Jersey Collection',
      category: 'memorabilia',
      price: 85.00,
      originalPrice: null,
      image: '/images/VushLFJTSkgE.jpg',
      rating: 4.6,
      reviews: 43,
      description: 'Limited edition retro jersey celebrating the club\'s historic achievements.',
      sizes: ['S', 'M', 'L', 'XL'],
      inStock: true,
      featured: true
    },
    {
      id: 6,
      name: 'Training Shorts',
      category: 'training',
      price: 25.00,
      originalPrice: 30.00,
      image: '/images/13BFCFTNCcNI.png',
      rating: 4.4,
      reviews: 89,
      description: 'Lightweight training shorts with moisture-wicking technology.',
      sizes: ['S', 'M', 'L', 'XL'],
      inStock: true,
      featured: false
    },
    {
      id: 7,
      name: 'Club Cap',
      category: 'accessories',
      price: 18.00,
      originalPrice: null,
      image: '/images/9NQs1wRKz62a.jpg',
      rating: 4.3,
      reviews: 72,
      description: 'Adjustable cap with embroidered club logo and premium construction.',
      sizes: ['One Size'],
      inStock: true,
      featured: false
    },
    {
      id: 8,
      name: 'Signed Match Ball',
      category: 'memorabilia',
      price: 150.00,
      originalPrice: null,
      image: '/images/tw7fwgxxOyji.webp',
      rating: 5.0,
      reviews: 12,
      description: 'Official match ball signed by the entire first team squad.',
      sizes: ['One Size'],
      inStock: false,
      featured: true
    },
    {
      id: 9,
      name: 'Casual Hoodie',
      category: 'lifestyle',
      price: 55.00,
      originalPrice: null,
      image: '/images/VushLFJTSkgE.jpg',
      rating: 4.7,
      reviews: 134,
      description: 'Comfortable hoodie perfect for everyday wear with subtle club branding.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      featured: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredProducts = filteredProducts.filter(product => product.featured);
  const regularProducts = filteredProducts.filter(product => !product.featured);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Club Store</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Show your support with official Pynursla United merchandise. From jerseys to accessories, find everything you need.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart ({cart.length})
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative aspect-square bg-gray-200">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-4 left-4 bg-red-600">
                        Sale
                      </Badge>
                    )}
                    {!product.inStock && (
                      <Badge className="absolute top-4 right-4 bg-gray-600">
                        Out of Stock
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-2">
                      <div className="flex">{renderStars(product.rating)}</div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-slate-900">
                          £{product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            £{product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.map((size) => (
                          <Badge key={size} variant="outline" className="text-xs">
                            {size}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700"
                        disabled={!product.inStock}
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-square bg-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-2 left-2 bg-red-600 text-xs">
                      Sale
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge className="absolute top-2 right-2 bg-gray-600 text-xs">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base line-clamp-2">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="ml-1 text-xs text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <span className="text-lg font-bold text-slate-900">
                        £{product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          £{product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button 
                    size="sm"
                    className="w-full bg-red-600 hover:bg-red-700"
                    disabled={!product.inStock}
                    onClick={() => addToCart(product)}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Store Info */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">Free Shipping</h3>
              <p className="text-gray-300">Free shipping on orders over £50 within the UK.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Easy Returns</h3>
              <p className="text-gray-300">30-day return policy on all unworn items.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Secure Payment</h3>
              <p className="text-gray-300">Safe and secure payment processing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;


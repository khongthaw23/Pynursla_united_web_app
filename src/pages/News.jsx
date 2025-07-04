import React, { useState } from 'react';
import { Calendar, Clock, User, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'match-reports', name: 'Match Reports' },
    { id: 'transfers', name: 'Transfers' },
    { id: 'youth', name: 'Youth Academy' },
    { id: 'community', name: 'Community' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'New Signing: Marcus Johnson Joins Pynursla United',
      excerpt: 'We are excited to announce the signing of midfielder Marcus Johnson from Premier League side Manchester City. The 24-year-old brings experience and creativity to our midfield.',
      content: 'Full article content would go here...',
      date: '2025-01-08',
      author: 'Club Media Team',
      category: 'transfers',
      image: '/images/7EEzbBKLwW6A.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Victory Against Rivals: 3-1 Win in Derby Match',
      excerpt: 'Pynursla United secured a commanding 3-1 victory against local rivals in an exciting derby match that had fans on the edge of their seats throughout.',
      content: 'Full match report would go here...',
      date: '2025-01-05',
      author: 'Sports Reporter',
      category: 'match-reports',
      image: '/images/5Uf0hEkXZvS3.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Youth Academy Success: Three Players Called Up',
      excerpt: 'Three talented players from our youth academy have been called up to the national youth team, showcasing the quality of our development program.',
      content: 'Full article content would go here...',
      date: '2025-01-03',
      author: 'Youth Development',
      category: 'youth',
      image: '/images/K6wQ6QLxY9QR.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Community Outreach: Local School Visit',
      excerpt: 'Our first team players visited local primary schools this week, inspiring the next generation of football talent and promoting healthy lifestyles.',
      content: 'Full article content would go here...',
      date: '2025-01-01',
      author: 'Community Team',
      category: 'community',
      image: '/images/35sFVf5uA2vx.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Training Camp Success in Spain',
      excerpt: 'The team completed a successful pre-season training camp in Spain, with intensive training sessions and friendly matches against local clubs.',
      content: 'Full article content would go here...',
      date: '2024-12-28',
      author: 'Club Media Team',
      category: 'match-reports',
      image: '/images/Pij7XTukiO3x.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Stadium Renovation Update',
      excerpt: 'The ongoing stadium renovation project is progressing well, with new facilities set to enhance the matchday experience for all supporters.',
      content: 'Full article content would go here...',
      date: '2024-12-25',
      author: 'Facilities Team',
      category: 'community',
      image: '/images/OQwFhrYnFxVQ.jpg',
      featured: false
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Stay updated with the latest news, match reports, and club announcements from Pynursla United.
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
                placeholder="Search news..."
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
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured News</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Button className="bg-red-600 hover:bg-red-700">
                      Read Full Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">All News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="text-sm">
                    By {article.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{article.excerpt}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest news from Pynursla United.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-slate-900"
            />
            <Button className="bg-red-600 hover:bg-red-700">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;


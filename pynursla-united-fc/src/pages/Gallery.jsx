import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Calendar } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'matches', name: 'Match Photos' },
    { id: 'training', name: 'Training' },
    { id: 'celebrations', name: 'Celebrations' },
    { id: 'behind-scenes', name: 'Behind the Scenes' },
    { id: 'fans', name: 'Fans & Community' }
  ];

  const photos = [
    {
      id: 1,
      title: 'Victory Celebration vs City Rovers',
      category: 'celebrations',
      date: '2025-01-08',
      image: '/images/5Uf0hEkXZvS3.jpg',
      description: 'Players celebrating after the 3-1 victory against City Rovers in the derby match.'
    },
    {
      id: 2,
      title: 'Team Training Session',
      category: 'training',
      date: '2025-01-07',
      image: '/images/7EEzbBKLwW6A.jpg',
      description: 'Intense training session preparing for the upcoming match.'
    },
    {
      id: 3,
      title: 'Match Action - Alex Thompson',
      category: 'matches',
      date: '2025-01-05',
      image: '/images/Pij7XTukiO3x.jpg',
      description: 'Alex Thompson in action during the league match.'
    },
    {
      id: 4,
      title: 'Stadium Atmosphere',
      category: 'fans',
      date: '2025-01-05',
      image: '/images/wWEU8EW8zbRQ.jpg',
      description: 'Amazing atmosphere at Pynursla Stadium with packed stands.'
    },
    {
      id: 5,
      title: 'Goal Celebration',
      category: 'celebrations',
      date: '2025-01-01',
      image: '/images/K6wQ6QLxY9QR.jpg',
      description: 'Team celebrating Marcus Johnson\'s first goal for the club.'
    },
    {
      id: 6,
      title: 'Tactical Discussion',
      category: 'behind-scenes',
      date: '2024-12-30',
      image: '/images/tgw8q7OIBqm7.jpg',
      description: 'Coach discussing tactics with players during halftime.'
    },
    {
      id: 7,
      title: 'Penalty Save',
      category: 'matches',
      date: '2024-12-28',
      image: '/images/CqMQK2dMTuo4.jpg',
      description: 'James Mitchell making a crucial penalty save.'
    },
    {
      id: 8,
      title: 'Youth Academy Training',
      category: 'training',
      date: '2024-12-25',
      image: '/images/TI1LUboBI6kQ.jpg',
      description: 'Young talents training at the academy facilities.'
    },
    {
      id: 9,
      title: 'Fan Support',
      category: 'fans',
      date: '2024-12-22',
      image: '/images/e1GS4lpekiXk.jpg',
      description: 'Dedicated fans showing their support in the stands.'
    },
    {
      id: 10,
      title: 'Pre-Match Warm-up',
      category: 'training',
      date: '2024-12-20',
      image: '/images/BRa39XKaffvJ.jpg',
      description: 'Players warming up before the important league match.'
    },
    {
      id: 11,
      title: 'Championship Celebration',
      category: 'celebrations',
      date: '2024-12-18',
      image: '/images/3ZtILMZpAGv7.jpg',
      description: 'Team celebrating after securing a spot in the championship.'
    },
    {
      id: 12,
      title: 'Stadium Night View',
      category: 'behind-scenes',
      date: '2024-12-15',
      image: '/images/OQwFhrYnFxVQ.jpg',
      description: 'Beautiful night view of Pynursla Stadium under the lights.'
    },
    {
      id: 13,
      title: 'Team Photo 2025',
      category: 'behind-scenes',
      date: '2024-12-10',
      image: '/images/AD1qqF2QzzY6.jpg',
      description: 'Official team photo for the 2025 season.'
    },
    {
      id: 14,
      title: 'Corner Kick Action',
      category: 'matches',
      date: '2024-12-08',
      image: '/images/H6wt2pxSISkt.webp',
      description: 'Intense action during a corner kick situation.'
    },
    {
      id: 15,
      title: 'Community Event',
      category: 'fans',
      date: '2024-12-05',
      image: '/images/35sFVf5uA2vx.jpg',
      description: 'Players participating in a community outreach event.'
    }
  ];

  const filteredPhotos = photos.filter(photo => {
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore memorable moments from matches, training sessions, and behind-the-scenes at Pynursla United.
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
                placeholder="Search photos..."
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

      {/* Photo Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-square bg-gray-200">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                          <div className="relative">
                            <img 
                              src={photo.image} 
                              alt={photo.title}
                              className="w-full h-auto max-h-[80vh] object-contain"
                            />
                            <div className="p-6">
                              <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                              <p className="text-gray-600 mb-2">{photo.description}</p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(photo.date).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm line-clamp-2 mb-2">{photo.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="capitalize">
                      {categories.find(cat => cat.id === photo.category)?.name}
                    </span>
                    <span>{new Date(photo.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No photos found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{photos.length}</div>
              <div className="text-gray-300">Total Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {photos.filter(p => p.category === 'matches').length}
              </div>
              <div className="text-gray-300">Match Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {photos.filter(p => p.category === 'celebrations').length}
              </div>
              <div className="text-gray-300">Celebrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {photos.filter(p => p.category === 'fans').length}
              </div>
              <div className="text-gray-300">Fan Photos</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;


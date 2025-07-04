import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const upcomingMatches = [
    {
      id: 1,
      opponent: 'Mawshun',
      date: '2025-01-15',
      time: '15:00',
      venue: 'Pynursla Stadium',
      type: 'League Match'
    },
    {
      id: 2,
      opponent: 'Wahlyngkhat',
      date: '2025-01-22',
      time: '14:30',
      venue: 'Away',
      type: 'Cup Match'
    },
    {
      id: 3,
      opponent: 'Athletic Club',
      date: '2025-01-29',
      time: '16:00',
      venue: 'Pynursla Stadium',
      type: 'League Match'
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: 'New Signing: Phan Joins Pynursla United',
      excerpt: 'La sign ie u player thymmai ba lehkai midfielder Phan from Rawon FC...',
      date: '2025-01-08',
      image: '/images/7EEzbBKLwW6A.jpg'
    },
    {
      id: 2,
      title: 'Victory Against Rivals: 3-1 Win in Derby Match',
      excerpt: 'Pynursla United secured a commanding 3-1 victory against local rivals in an exciting derby match...',
      date: '2025-01-05',
      image: '/images/5Uf0hEkXZvS3.jpg'
    },
    {
      id: 3,
      title: 'Youth Academy Success: Three Players Called Up',
      excerpt: 'Three talented players from our youth academy have been called up to the national youth team...',
      date: '2025-01-03',
      image: '/images/K6wQ6QLxY9QR.jpg'
    }
  ];

  const stats = [
    { label: 'League Position', value: '3rd', icon: Trophy },
    { label: 'Goals Scored', value: '42', icon: Star },
    { label: 'Clean Sheets', value: '8', icon: Users },
    { label: 'Wins', value: '12', icon: Trophy }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-slate-900 to-red-900 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/wWEU8EW8zbRQ.jpg)' }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Pynursla United
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Excellence on the Field, Unity in the Community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link to="/matches" className="flex items-center">
                View Fixtures <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link to="/store">
                Shop Merchandise
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Upcoming Matches</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't miss our upcoming fixtures. Get your tickets now and support the team!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingMatches.map((match) => (
              <Card key={match.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{match.opponent}</CardTitle>
                    <Badge variant="secondary">{match.type}</Badge>
                  </div>
                  <CardDescription className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(match.date).toLocaleDateString()} at {match.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Venue: {match.venue}</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Get Tickets
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Link to="/matches" className="flex items-center">
                View All Fixtures <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest News</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news, match reports, and club announcements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                  <CardDescription>
                    {new Date(article.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3 mb-4">{article.excerpt}</p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Link to="/news" className="flex items-center">
                View All News <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Pynursla United Family</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Become a member, get exclusive access to events, and support your team like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Become a Member
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


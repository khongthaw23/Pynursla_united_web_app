import React, { useState } from 'react';
import { Search, MapPin, Calendar, Trophy, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Players = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('all');

  const positions = [
    { id: 'all', name: 'All Players' },
    { id: 'goalkeeper', name: 'Goalkeepers' },
    { id: 'defender', name: 'Defenders' },
    { id: 'midfielder', name: 'Midfielders' },
    { id: 'forward', name: 'Forwards' }
  ];

  const players = [
    {
      id: 1,
      name: 'Hame',
      position: 'goalkeeper',
      number: 1,
      age: 28,
      nationality: 'Indian',
      height: '6\'2"',
      weight: '185 lbs',
      joinedDate: '2023-07-01',
      image: '/images/7EEzbBKLwW6A.jpg',
      stats: {
        appearances: 25,
        cleanSheets: 12,
        saves: 89,
        goals: 0
      },
      bio: 'Experienced goalkeeper with excellent shot-stopping ability and commanding presence in the box.'
    },
    {
      id: 2,
      name: 'Phan',
      position: 'midfielder',
      number: 8,
      age: 24,
      nationality: 'Indian',
      height: '5\'10"',
      weight: '165 lbs',
      joinedDate: '2025-01-08',
      image: '/images/Pij7XTukiO3x.jpg',
      stats: {
        appearances: 0,
        cleanSheets: 0,
        saves: 0,
        goals: 0
      },
      bio: 'Creative midfielder with excellent passing range and vision. Recent signing from Manchester City.'
    },
    {
      id: 3,
      name: 'Defender',
      position: 'defender',
      number: 4,
      age: 26,
      nationality: 'Spain',
      height: '6\'0"',
      weight: '175 lbs',
      joinedDate: '2022-08-15',
      image: '/images/tgw8q7OIBqm7.jpg',
      stats: {
        appearances: 45,
        cleanSheets: 18,
        saves: 0,
        goals: 3
      },
      bio: 'Solid center-back with great aerial ability and leadership qualities on the pitch.'
    },
    {
      id: 4,
      name: 'Heprit',
      position: 'forward',
      number: 9,
      age: 23,
      nationality: 'Scotland',
      height: '5\'11"',
      weight: '170 lbs',
      joinedDate: '2023-01-20',
      image: '/images/CqMQK2dMTuo4.jpg',
      stats: {
        appearances: 38,
        cleanSheets: 0,
        saves: 0,
        goals: 18
      },
      bio: 'Clinical striker with pace and finishing ability. Top scorer for the team this season.'
    },
    {
      id: 5,
      name: 'Stephan',
      position: 'midfielder',
      number: 6,
      age: 29,
      nationality: 'Ireland',
      height: '5\'9"',
      weight: '160 lbs',
      joinedDate: '2021-06-30',
      image: '/images/TI1LUboBI6kQ.jpg',
      stats: {
        appearances: 52,
        cleanSheets: 0,
        saves: 0,
        goals: 8
      },
      bio: 'Defensive midfielder with excellent work rate and tactical awareness.'
    },
    {
      id: 6,
      name: 'Bernando',
      position: 'defender',
      number: 3,
      age: 25,
      nationality: 'Brazil',
      height: '5\'8"',
      weight: '155 lbs',
      joinedDate: '2023-08-10',
      image: '/images/BRa39XKaffvJ.jpg',
      stats: {
        appearances: 28,
        cleanSheets: 11,
        saves: 0,
        goals: 2
      },
      bio: 'Attacking full-back with pace and crossing ability down the left flank.'
    },
    {
      id: 7,
      name: 'Machai',
      position: 'forward',
      number: 11,
      age: 21,
      nationality: 'Wales',
      height: '5\'10"',
      weight: '165 lbs',
      joinedDate: '2024-02-14',
      image: '/images/3ZtILMZpAGv7.jpg',
      stats: {
        appearances: 22,
        cleanSheets: 0,
        saves: 0,
        goals: 7
      },
      bio: 'Promising young winger with excellent dribbling skills and pace.'
    },
    {
      id: 8,
      name: 'Poh krong',
      position: 'defender',
      number: 5,
      age: 30,
      nationality: 'England',
      height: '6\'1"',
      weight: '180 lbs',
      joinedDate: '2020-07-01',
      image: '/images/AD1qqF2QzzY6.jpg',
      stats: {
        appearances: 78,
        cleanSheets: 32,
        saves: 0,
        goals: 5
      },
      bio: 'Experienced center-back and team captain with strong leadership qualities.'
    }
  ];

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = selectedPosition === 'all' || player.position === selectedPosition;
    return matchesSearch && matchesPosition;
  });

  const getPositionColor = (position) => {
    switch (position) {
      case 'goalkeeper': return 'bg-yellow-100 text-yellow-800';
      case 'defender': return 'bg-blue-100 text-blue-800';
      case 'midfielder': return 'bg-green-100 text-green-800';
      case 'forward': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Team Roster</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Meet the talented players who represent Pynursla United on the pitch.
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
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {positions.map((position) => (
                <Button
                  key={position.id}
                  variant={selectedPosition === position.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPosition(position.id)}
                  className={selectedPosition === position.id ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  {position.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlayers.map((player) => (
              <Card key={player.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 relative">
                  <img 
                    src={player.image} 
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {player.number}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={getPositionColor(player.position)}>
                      {player.position.charAt(0).toUpperCase() + player.position.slice(1)}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{player.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {player.nationality}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Age:</span>
                      <span>{player.age}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Height:</span>
                      <span>{player.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Joined:</span>
                      <span>{new Date(player.joinedDate).getFullYear()}</span>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="stats" className="mt-4">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="stats">Stats</TabsTrigger>
                      <TabsTrigger value="bio">Bio</TabsTrigger>
                    </TabsList>
                    <TabsContent value="stats" className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Appearances:</span>
                        <span>{player.stats.appearances}</span>
                      </div>
                      {player.position === 'goalkeeper' ? (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Clean Sheets:</span>
                            <span>{player.stats.cleanSheets}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Saves:</span>
                            <span>{player.stats.saves}</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Goals:</span>
                          <span>{player.stats.goals}</span>
                        </div>
                      )}
                    </TabsContent>
                    <TabsContent value="bio" className="text-sm text-gray-600">
                      {player.bio}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Team Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-red-500" />
              </div>
              <div className="text-3xl font-bold mb-2">25</div>
              <div className="text-gray-300">Total Players</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12 text-red-500" />
              </div>
              <div className="text-3xl font-bold mb-2">42</div>
              <div className="text-gray-300">Goals Scored</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="h-12 w-12 text-red-500" />
              </div>
              <div className="text-3xl font-bold mb-2">24.5</div>
              <div className="text-gray-300">Average Age</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-12 w-12 text-red-500" />
              </div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-gray-300">Nationalities</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Players;


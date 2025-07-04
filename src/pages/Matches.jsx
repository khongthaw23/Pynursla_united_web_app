import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Trophy, Target, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Matches = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const upcomingMatches = [
    {
      id: 1,
      opponent: 'City Rovers FC',
      opponentLogo: '/images/yMTs1ZdcMqSt.jpg',
      date: '2025-01-15',
      time: '15:00',
      venue: 'Pynursla Stadium',
      isHome: true,
      competition: 'Premier League',
      ticketsAvailable: true,
      weather: 'Partly Cloudy, 12°C'
    },
    {
      id: 2,
      opponent: 'United Warriors',
      opponentLogo: '/images/FJY58YcLpw2v.jpg',
      date: '2025-01-22',
      time: '14:30',
      venue: 'Warriors Stadium',
      isHome: false,
      competition: 'FA Cup',
      ticketsAvailable: true,
      weather: 'Sunny, 8°C'
    },
    {
      id: 3,
      opponent: 'Athletic Club',
      opponentLogo: '/images/A7V9mic4sHaF.jpg',
      date: '2025-01-29',
      time: '16:00',
      venue: 'Pynursla Stadium',
      isHome: true,
      competition: 'Premier League',
      ticketsAvailable: true,
      weather: 'Overcast, 10°C'
    },
    {
      id: 4,
      opponent: 'Dynamo FC',
      opponentLogo: '/images/s2FJuWFxeWxk.jpg',
      date: '2025-02-05',
      time: '19:45',
      venue: 'Pynursla Stadium',
      isHome: true,
      competition: 'Premier League',
      ticketsAvailable: true,
      weather: 'Clear, 6°C'
    }
  ];

  const recentResults = [
    {
      id: 1,
      opponent: 'Riverside United',
      opponentLogo: '/images/E3PXzEYxQsRn.jpg',
      date: '2025-01-08',
      venue: 'Riverside Stadium',
      isHome: false,
      competition: 'Premier League',
      result: 'W',
      score: '2-1',
      scorers: ['Alex Thompson 23\'', 'Michael Brown 67\''],
      attendance: '28,450'
    },
    {
      id: 2,
      opponent: 'Metro City FC',
      opponentLogo: '/images/2t9WP6EG9JvU.jpg',
      date: '2025-01-01',
      venue: 'Pynursla Stadium',
      isHome: true,
      competition: 'Premier League',
      result: 'W',
      score: '3-1',
      scorers: ['Alex Thompson 15\'', 'Marcus Johnson 34\'', 'Ryan O\'Connor 78\''],
      attendance: '32,000'
    },
    {
      id: 3,
      opponent: 'Coastal Rangers',
      opponentLogo: '/images/keNipQOvaUGO.jpg',
      date: '2024-12-28',
      venue: 'Coastal Park',
      isHome: false,
      competition: 'Premier League',
      result: 'D',
      score: '1-1',
      scorers: ['David Rodriguez 56\''],
      attendance: '24,800'
    },
    {
      id: 4,
      opponent: 'Valley Town FC',
      opponentLogo: '/images/dXVKsng4hGaR.jpg',
      date: '2024-12-21',
      venue: 'Pynursla Stadium',
      isHome: true,
      competition: 'Premier League',
      result: 'W',
      score: '4-0',
      scorers: ['Alex Thompson 12\', 45\'', 'Michael Brown 67\'', 'Carlos Silva 89\''],
      attendance: '31,500'
    }
  ];

  const getResultColor = (result) => {
    switch (result) {
      case 'W': return 'bg-green-100 text-green-800';
      case 'D': return 'bg-yellow-100 text-yellow-800';
      case 'L': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getResultText = (result) => {
    switch (result) {
      case 'W': return 'Win';
      case 'D': return 'Draw';
      case 'L': return 'Loss';
      default: return result;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fixtures & Results</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Stay up to date with all Pynursla United matches, results, and upcoming fixtures.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="upcoming">Upcoming Fixtures</TabsTrigger>
              <TabsTrigger value="results">Recent Results</TabsTrigger>
            </TabsList>

            {/* Upcoming Matches */}
            <TabsContent value="upcoming" className="mt-8">
              <div className="space-y-6">
                {upcomingMatches.map((match) => (
                  <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-slate-50 to-red-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline" className="text-xs">
                            {match.competition}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(match.date).toLocaleDateString('en-GB', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            {match.time}
                          </div>
                        </div>
                        {match.ticketsAvailable && (
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            Get Tickets
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        {/* Home Team */}
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                            <Trophy className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Pynursla United</h3>
                            <p className="text-sm text-gray-600">Home</p>
                          </div>
                        </div>

                        {/* VS */}
                        <div className="px-8 text-center">
                          <div className="text-2xl font-bold text-gray-400">VS</div>
                          <div className="text-sm text-gray-500 mt-1">{match.time}</div>
                        </div>

                        {/* Away Team */}
                        <div className="flex items-center space-x-4 flex-1 justify-end">
                          <div className="text-right">
                            <h3 className="font-bold text-lg">{match.opponent}</h3>
                            <p className="text-sm text-gray-600">{match.isHome ? 'Away' : 'Home'}</p>
                          </div>
                          <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                            <img 
                              src={match.opponentLogo} 
                              alt={match.opponent}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="text-gray-600">Venue:</span>
                            <span className="ml-1 font-medium">{match.venue}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="text-gray-600">Competition:</span>
                            <span className="ml-1 font-medium">{match.competition}</span>
                          </div>
                          <div className="flex items-center">
                            <Trophy className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="text-gray-600">Weather:</span>
                            <span className="ml-1 font-medium">{match.weather}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Recent Results */}
            <TabsContent value="results" className="mt-8">
              <div className="space-y-6">
                {recentResults.map((match) => (
                  <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge className={getResultColor(match.result)}>
                            {getResultText(match.result)}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {match.competition}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(match.date).toLocaleDateString('en-GB', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{match.score}</div>
                          <div className="text-sm text-gray-600">Final Score</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        {/* Home Team */}
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                            <Trophy className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Pynursla United</h3>
                            <p className="text-sm text-gray-600">{match.isHome ? 'Home' : 'Away'}</p>
                          </div>
                        </div>

                        {/* Score */}
                        <div className="px-8 text-center">
                          <div className="text-3xl font-bold text-slate-900">{match.score}</div>
                          <div className="text-sm text-gray-500 mt-1">Full Time</div>
                        </div>

                        {/* Away Team */}
                        <div className="flex items-center space-x-4 flex-1 justify-end">
                          <div className="text-right">
                            <h3 className="font-bold text-lg">{match.opponent}</h3>
                            <p className="text-sm text-gray-600">{match.isHome ? 'Away' : 'Home'}</p>
                          </div>
                          <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                            <img 
                              src={match.opponentLogo} 
                              alt={match.opponent}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-sm text-gray-600 mb-2">Goal Scorers:</h4>
                            <ul className="space-y-1">
                              {match.scorers.map((scorer, index) => (
                                <li key={index} className="text-sm flex items-center">
                                  <Target className="h-3 w-3 mr-2 text-red-600" />
                                  {scorer}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                              <span className="text-gray-600">Venue:</span>
                              <span className="ml-1 font-medium">{match.venue}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-gray-400" />
                              <span className="text-gray-600">Attendance:</span>
                              <span className="ml-1 font-medium">{match.attendance}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Season Stats */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Season Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-red-500" />
              </div>
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-gray-300">Wins</div>
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
                <Users className="h-12 w-12 text-red-500" />
              </div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-gray-300">Clean Sheets</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="h-12 w-12 text-red-500" />
              </div>
              <div className="text-3xl font-bold mb-2">3rd</div>
              <div className="text-gray-300">League Position</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Matches;


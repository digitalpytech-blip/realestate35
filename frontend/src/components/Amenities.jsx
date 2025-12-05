import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dumbbell, Trees, Users, Check } from 'lucide-react';
import { projectData } from '../utils/mockData';

const Amenities = () => {
  const [activeTab, setActiveTab] = useState('sports');

  return (
    <section id="amenities" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            World-Class Amenities
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive facilities designed for your health, leisure, and entertainment
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto bg-white shadow-sm rounded-xl p-2">
              <TabsTrigger
                value="sports"
                className="flex items-center justify-center space-x-2 py-4 data-[state=active]:bg-slate-900 data-[state=active]:text-white rounded-lg transition-all"
              >
                <Dumbbell className="h-5 w-5" />
                <span className="hidden sm:inline">Sports</span>
              </TabsTrigger>
              <TabsTrigger
                value="garden"
                className="flex items-center justify-center space-x-2 py-4 data-[state=active]:bg-slate-900 data-[state=active]:text-white rounded-lg transition-all"
              >
                <Trees className="h-5 w-5" />
                <span className="hidden sm:inline">Garden & Nature</span>
              </TabsTrigger>
              <TabsTrigger
                value="club"
                className="flex items-center justify-center space-x-2 py-4 data-[state=active]:bg-slate-900 data-[state=active]:text-white rounded-lg transition-all"
              >
                <Users className="h-5 w-5" />
                <span className="hidden sm:inline">Club</span>
              </TabsTrigger>
            </TabsList>

            {/* Sports Amenities */}
            <TabsContent value="sports" className="mt-0">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectData.amenities.sports.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-700 font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Garden Amenities */}
            <TabsContent value="garden" className="mt-0">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectData.amenities.garden.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-700 font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Club Amenities */}
            <TabsContent value="club" className="mt-0">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectData.amenities.club.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-700 font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Highlight Card */}
        <div className="max-w-5xl mx-auto mt-12">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Club Privé Experience</h3>
                  <p className="text-slate-300 text-lg">
                    An all-weather, temperature-controlled swimming pool enclosed in elegant glass, offering year-round luxury & comfort.
                  </p>
                </div>
                <Waves className="h-20 w-20 text-blue-400 opacity-50" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Amenities;

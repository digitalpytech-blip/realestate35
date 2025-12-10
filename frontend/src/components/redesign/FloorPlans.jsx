import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent } from '../ui/card';
import { projectData } from '../../utils/mockData';

const FloorPlans = () => {
  return (
    <section id="floor-plans" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Floor Plans
            </h2>
            <p className="text-lg text-slate-600">
              Thoughtfully designed layouts for modern living
            </p>
          </div>

          <Tabs defaultValue="3bhk-sq" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white shadow-md">
              {projectData.floorPlans.map((plan, index) => (
                <TabsTrigger
                  key={index}
                  value={plan.type.toLowerCase().replace(/\s+/g, '-').replace(/\+/g, '')}
                  className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white font-semibold py-3"
                >
                  {plan.type}
                </TabsTrigger>
              ))}
            </TabsList>

            {projectData.floorPlans.map((plan, index) => (
              <TabsContent
                key={index}
                value={plan.type.toLowerCase().replace(/\s+/g, '-').replace(/\+/g, '')}
              >
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Floor Plan Image Placeholder */}
                      <div className="bg-slate-200 rounded-xl flex items-center justify-center h-96">
                        <div className="text-center text-slate-500">
                          <p className="text-xl font-semibold mb-2">{plan.type}</p>
                          <p className="text-sm">Floor Plan Visualization</p>
                          <p className="text-xs mt-4">Contact us for detailed floor plans</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-6">{plan.type}</h3>
                        <div className="space-y-4 mb-6">
                          <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                            <span className="text-slate-600">Carpet Area</span>
                            <span className="text-2xl font-bold text-slate-900">{plan.carpetArea} sq. ft.</span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                            <span className="text-slate-600">Built-Up Area</span>
                            <span className="text-2xl font-bold text-slate-900">{plan.builtUpArea} sq. ft.</span>
                          </div>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-6">
                          <h4 className="font-semibold text-slate-900 mb-4">Key Features</h4>
                          <ul className="space-y-2">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-slate-700">
                                <span className="text-cyan-500 mt-1">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;

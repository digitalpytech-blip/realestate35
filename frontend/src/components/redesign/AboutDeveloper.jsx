import React from 'react';
import { Award, Users, Building2, TrendingUp } from 'lucide-react';
import { projectData } from '../../utils/mockData';

const AboutDeveloper = () => {
  return (
    <section id="about-developer" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About {projectData.developer}
            </h2>
            <p className="text-lg text-slate-600">
              Building landmarks, creating legacies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                src="https://customer-assets.emergentagent.com/job_pdf-landing-pro/artifacts/fgkq0s5d_medium.avif"
                alt="Aurum Alumni Bliss"
                className="h-20 mb-6"
              />
              <p className="text-slate-700 leading-relaxed mb-4">
                {projectData.developer} is a renowned real estate developer committed to 
                transforming addresses into landmarks. With a vision of creating spaces that 
                inspire every moment, we bring together modern architecture, premium amenities, 
                and thoughtful design.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our projects are characterized by superior construction quality, strategic 
                locations, and a commitment to delivering value to our customers. We believe 
                in building not just homes, but communities where families thrive.
              </p>
              <p className="text-slate-700 leading-relaxed">
                With {projectData.name}, we continue our legacy of excellence, offering 
                premium residences that combine luxury with functionality, creating the 
                perfect setting for your dream life.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-cyan-500" />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">10+</p>
                <p className="text-sm text-slate-600">Projects Delivered</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-500" />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">5000+</p>
                <p className="text-sm text-slate-600">Happy Families</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-cyan-500" />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">15+</p>
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-cyan-500" />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">100%</p>
                <p className="text-sm text-slate-600">RERA Approved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;

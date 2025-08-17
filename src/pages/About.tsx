import React from 'react';
import { Star, Award, Users, Heart } from 'lucide-react';

const About = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Absolutely incredible experience! The pasta was perfectly al dente and the service was impeccable. Will definitely be returning.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Best Italian restaurant in the city! The atmosphere is cozy and romantic, perfect for date nights. The tiramisu is to die for!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      comment: 'Chef Marco\'s attention to detail is remarkable. Every dish tells a story of authentic Italian tradition. Highly recommended!',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const teamMembers = [
    {
      name: 'Marco Rossi',
      role: 'Head Chef & Owner',
      description: 'Born in Naples, Marco brings 20 years of culinary expertise and authentic Italian recipes passed down through generations.',
      image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Isabella Conti',
      role: 'Sous Chef',
      description: 'Trained in Rome\'s finest kitchens, Isabella specializes in traditional pasta making and innovative flavor combinations.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Antonio Villa',
      role: 'Sommelier',
      description: 'With expertise in Italian wines, Antonio curates the perfect wine pairings to complement every dish on our menu.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Bella Vista
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A family tradition of authentic Italian cuisine, bringing the warmth and flavors of Italy to your table since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Restaurant Story */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Bella Vista was born from a dream to share the authentic flavors of Italy with our community. 
                  Founded by Chef Marco Rossi in 2010, our restaurant has become a beloved destination for those 
                  seeking genuine Italian cuisine in a warm, welcoming atmosphere.
                </p>
                <p>
                  Every recipe in our kitchen tells a story - from Marco's grandmother's secret ragu sauce to 
                  the traditional Neapolitan pizza dough that rises for 24 hours. We source the finest ingredients, 
                  many imported directly from Italy, to ensure every bite transports you to the cobblestone streets 
                  of Rome or the rolling hills of Tuscany.
                </p>
                <p>
                  Our commitment goes beyond just great food. We believe in creating memorable experiences, 
                  fostering connections, and treating every guest like family. Whether you're celebrating a 
                  special occasion or enjoying a casual dinner, Bella Vista is your home away from home.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mx-auto mb-2">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mx-auto mb-2">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mx-auto mb-2">
                    <Heart className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">14</div>
                  <div className="text-sm text-gray-600">Years of Love</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant Interior"
                className="w-full h-96 lg:h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals who bring authentic Italian flavors to life every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our valued customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
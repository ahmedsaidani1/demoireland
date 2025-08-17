import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const featuredDishes = [
    {
      id: 1,
      name: 'Truffle Risotto',
      description: 'Creamy arborio rice with black truffle and parmesan',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$28'
    },
    {
      id: 2,
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with lemon herb butter',
      image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$32'
    },
    {
      id: 3,
      name: 'Margherita Pizza',
      description: 'Wood-fired pizza with fresh mozzarella and basil',
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$22'
    },
    {
      id: 4,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with espresso and mascarpone',
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$12'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute insetS-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
          The Inn Between Bar
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-light animate-slide-up">
            Authentic Irish Cuisine in the Heart of the City
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/reservation"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Book a Table</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/menu"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Dishes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our chef's signature creations, made with the finest ingredients and traditional techniques
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={dish.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{dish.name}</h3>
                    <span className="text-lg font-bold text-amber-600">{dish.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <span>View Full Menu</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Hours & Location Preview */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Opening Hours */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Clock size={32} className="text-amber-600 mr-3" />
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Opening Hours</h2>
              </div>
              
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Monday - Thursday</span>
                  <span className="text-gray-600">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Friday - Saturday</span>
                  <span className="text-gray-600">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-600">12:00 PM - 9:00 PM</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start">
                <MapPin size={24} className="text-amber-600 mr-3" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">123 Restaurant Street</p>
                  <p className="text-gray-600">Downtown, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Location Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant Interior"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-medium">Rated 4.9/5 by 500+ customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
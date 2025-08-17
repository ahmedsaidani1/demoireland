import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const categories = [
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'mains', name: 'Main Dishes', icon: '🍝' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'drinks', name: 'Drinks', icon: '🍷' },
  ];

  const menuItems = {
    starters: [
      {
        name: 'Bruschetta Trio',
        description: 'Three varieties: classic tomato, mushroom truffle, and ricotta honey',
        price: '$14'
      },
      {
        name: 'Burrata Caprese',
        description: 'Fresh burrata with heirloom tomatoes, basil, and aged balsamic',
        price: '$18'
      },
      {
        name: 'Antipasto Platter',
        description: 'Selection of cured meats, cheeses, olives, and marinated vegetables',
        price: '$22'
      },
      {
        name: 'Calamari Fritti',
        description: 'Crispy fried squid rings with spicy marinara and lemon aioli',
        price: '$16'
      },
      {
        name: 'Arancini',
        description: 'Sicilian rice balls stuffed with mozzarella and peas, served with pomodoro',
        price: '$12'
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Thinly sliced beef tenderloin with arugula, capers, and parmesan',
        price: '$20'
      }
    ],
    mains: [
      {
        name: 'Osso Buco alla Milanese',
        description: 'Braised veal shanks with saffron risotto and gremolata',
        price: '$42'
      },
      {
        name: 'Branzino al Sale',
        description: 'Mediterranean sea bass baked in sea salt crust with herbs',
        price: '$38'
      },
      {
        name: 'Bistecca alla Fiorentina',
        description: 'Grilled T-bone steak with rosemary potatoes and seasonal vegetables',
        price: '$48'
      },
      {
        name: 'Linguine alle Vongole',
        description: 'Fresh clams with white wine, garlic, and parsley',
        price: '$28'
      },
      {
        name: 'Risotto ai Porcini',
        description: 'Creamy arborio rice with porcini mushrooms and truffle oil',
        price: '$26'
      },
      {
        name: 'Pollo Parmigiana',
        description: 'Breaded chicken breast with mozzarella, marinara, and spaghetti',
        price: '$32'
      },
      {
        name: 'Salmone Griglia',
        description: 'Grilled Atlantic salmon with lemon herb butter and asparagus',
        price: '$34'
      },
      {
        name: 'Lasagna della Casa',
        description: 'Traditional meat lasagna with bechamel and three cheeses',
        price: '$24'
      }
    ],
    desserts: [
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone',
        price: '$12'
      },
      {
        name: 'Panna Cotta',
        description: 'Vanilla bean panna cotta with berry compote',
        price: '$10'
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Crispy shells filled with sweet ricotta and chocolate chips',
        price: '$14'
      },
      {
        name: 'Gelato Selection',
        description: 'Three scoops of house-made gelato: vanilla, chocolate, and pistachio',
        price: '$8'
      },
      {
        name: 'Affogato',
        description: 'Vanilla gelato "drowned" in hot espresso',
        price: '$9'
      },
      {
        name: 'Chocolate Fondant',
        description: 'Warm chocolate cake with molten center and vanilla ice cream',
        price: '$13'
      }
    ],
    drinks: [
      {
        name: 'House Wine Selection',
        description: 'Red, white, or rosé by the glass',
        price: '$8-12'
      },
      {
        name: 'Chianti Classico',
        description: 'Full-bodied Tuscan red wine',
        price: '$45'
      },
      {
        name: 'Pinot Grigio',
        description: 'Crisp Italian white wine',
        price: '$38'
      },
      {
        name: 'Prosecco',
        description: 'Italian sparkling wine',
        price: '$42'
      },
      {
        name: 'Espresso',
        description: 'Traditional Italian coffee',
        price: '$4'
      },
      {
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam',
        price: '$5'
      },
      {
        name: 'Italian Soda',
        description: 'Sparkling water with fruit syrup',
        price: '$6'
      },
      {
        name: 'Limoncello',
        description: 'Traditional Italian lemon liqueur',
        price: '$8'
      }
    ]
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover authentic Italian flavors crafted with passion and the finest ingredients
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600 shadow-md'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  {item.name}
                </h3>
                <span className="text-xl font-bold text-amber-600 ml-4 flex-shrink-0">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Dine With Us?
          </h2>
          <p className="text-gray-600 mb-6">
            Reserve your table now and experience the authentic taste of Italy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reservation"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Make Reservation
            </a>
            <a
              href="tel:+1234567890"
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Call to Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
import { useState } from 'react';
import '../src/Market.css';

const products = [
  // Mice
  {
    id: 1,
    name: 'Logitech G502 Hero',
    category: 'Mouse',
    price: 49.99,
    rating: 4.8,
    image: '🖱️',
    description: 'High-performance gaming mouse with 11 programmable buttons'
  },
  {
    id: 2,
    name: 'Razer DeathAdder V2',
    category: 'Mouse',
    price: 69.99,
    rating: 4.7,
    image: '🖱️',
    description: 'Ergonomic gaming mouse with optical switches'
  },
  {
    id: 3,
    name: 'Microsoft Surface Mouse',
    category: 'Mouse',
    price: 39.99,
    rating: 4.5,
    image: '🖱️',
    description: 'Sleek and portable Bluetooth mouse'
  },
  // Keyboards
  {
    id: 4,
    name: 'Corsair K95 RGB Platinum',
    category: 'Keyboard',
    price: 199.99,
    rating: 4.9,
    image: '⌨️',
    description: 'Mechanical gaming keyboard with Cherry MX switches'
  },
  {
    id: 5,
    name: 'Logitech MX Keys',
    category: 'Keyboard',
    price: 99.99,
    rating: 4.6,
    image: '⌨️',
    description: 'Wireless keyboard with smart backlighting'
  },
  {
    id: 6,
    name: 'Razer BlackWidow V3',
    category: 'Keyboard',
    price: 139.99,
    rating: 4.7,
    image: '⌨️',
    description: 'Mechanical gaming keyboard with Razer switches'
  },
  // USB Cables
  {
    id: 7,
    name: 'Anker PowerLine+ USB-C',
    category: 'Cable',
    price: 19.99,
    rating: 4.8,
    image: '🔌',
    description: '6ft USB-C to USB-C cable with 100W power delivery'
  },
  {
    id: 8,
    name: 'Belkin USB-C to Lightning',
    category: 'Cable',
    price: 29.99,
    rating: 4.6,
    image: '🔌',
    description: 'MFi certified cable for Apple devices'
  },
  {
    id: 9,
    name: 'Amazon Basics USB 3.0',
    category: 'Cable',
    price: 9.99,
    rating: 4.4,
    image: '🔌',
    description: 'High-speed data transfer cable'
  },
  // Speakers
  {
    id: 10,
    name: 'Logitech G560',
    category: 'Speaker',
    price: 199.99,
    rating: 4.7,
    image: '🔊',
    description: 'RGB gaming speakers with DTS:X Ultra'
  },
  {
    id: 11,
    name: 'Bose Companion 2',
    category: 'Speaker',
    price: 99.99,
    rating: 4.6,
    image: '🔊',
    description: 'Compact desktop speakers with clear sound'
  },
  {
    id: 12,
    name: 'Creative Pebble V3',
    category: 'Speaker',
    price: 39.99,
    rating: 4.5,
    image: '🔊',
    description: 'Modern USB-C speakers with clear audio'
  },
  // Headsets
  {
    id: 13,
    name: 'SteelSeries Arctis Pro',
    category: 'Headset',
    price: 179.99,
    rating: 4.8,
    image: '🎧',
    description: 'High-fidelity gaming headset with DTS'
  },
  {
    id: 14,
    name: 'HyperX Cloud II',
    category: 'Headset',
    price: 99.99,
    rating: 4.7,
    image: '🎧',
    description: 'Comfortable gaming headset with 7.1 surround'
  },
  {
    id: 15,
    name: 'Logitech G733',
    category: 'Headset',
    price: 129.99,
    rating: 4.6,
    image: '🎧',
    description: 'Wireless gaming headset with RGB lighting'
  },
  // Webcams
  {
    id: 16,
    name: 'Logitech C920',
    category: 'Webcam',
    price: 69.99,
    rating: 4.7,
    image: '📹',
    description: 'Full HD webcam with autofocus'
  },
  {
    id: 17,
    name: 'Razer Kiyo Pro',
    category: 'Webcam',
    price: 199.99,
    rating: 4.8,
    image: '📹',
    description: '4K streaming webcam with HDR'
  },
  {
    id: 18,
    name: 'Microsoft LifeCam',
    category: 'Webcam',
    price: 49.99,
    rating: 4.5,
    image: '📹',
    description: 'HD webcam with noise-canceling mic'
  },
  // Monitors
  {
    id: 19,
    name: 'ASUS ROG Swift',
    category: 'Monitor',
    price: 699.99,
    rating: 4.9,
    image: '🖥️',
    description: '27" 1440p gaming monitor with 165Hz'
  },
  {
    id: 20,
    name: 'Dell UltraSharp U2720Q',
    category: 'Monitor',
    price: 499.99,
    rating: 4.8,
    image: '🖥️',
    description: '27" 4K USB-C monitor'
  },
  {
    id: 21,
    name: 'LG UltraGear 27GL850',
    category: 'Monitor',
    price: 449.99,
    rating: 4.7,
    image: '🖥️',
    description: 'Nano IPS gaming monitor with 144Hz'
  },
  // Mouse Pads
  {
    id: 22,
    name: 'SteelSeries QcK',
    category: 'Mouse Pad',
    price: 19.99,
    rating: 4.6,
    image: '🖱️',
    description: 'Large gaming mouse pad'
  },
  {
    id: 23,
    name: 'Razer Goliathus',
    category: 'Mouse Pad',
    price: 24.99,
    rating: 4.5,
    image: '🖱️',
    description: 'Chroma RGB mouse pad'
  },
  {
    id: 24,
    name: 'Corsair MM300',
    category: 'Mouse Pad',
    price: 29.99,
    rating: 4.7,
    image: '🖱️',
    description: 'Extended anti-fray mouse pad'
  },
  // USB Hubs
  {
    id: 25,
    name: 'Anker 7-Port USB Hub',
    category: 'USB Hub',
    price: 29.99,
    rating: 4.7,
    image: '🔌',
    description: 'USB 3.0 hub with power adapter'
  },
  {
    id: 26,
    name: 'Sabrent USB-C Hub',
    category: 'USB Hub',
    price: 39.99,
    rating: 4.6,
    image: '🔌',
    description: '4K HDMI and USB-C hub'
  },
  {
    id: 27,
    name: 'UGREEN USB Hub',
    category: 'USB Hub',
    price: 19.99,
    rating: 4.5,
    image: '🔌',
    description: '4-port USB 3.0 hub'
  },
  // Microphones
  {
    id: 28,
    name: 'Blue Yeti',
    category: 'Microphone',
    price: 129.99,
    rating: 4.8,
    image: '🎤',
    description: 'Professional USB microphone'
  },
  {
    id: 29,
    name: 'HyperX QuadCast',
    category: 'Microphone',
    price: 139.99,
    rating: 4.7,
    image: '🎤',
    description: 'RGB USB microphone'
  },
  {
    id: 30,
    name: 'Razer Seiren X',
    category: 'Microphone',
    price: 99.99,
    rating: 4.6,
    image: '🎤',
    description: 'Streaming USB microphone'
  },
  // Additional Mice
  {
    id: 31,
    name: 'SteelSeries Rival 600',
    category: 'Mouse',
    price: 79.99,
    rating: 4.7,
    image: '🖱️',
    description: 'Dual sensor gaming mouse with customizable weight system'
  },
  {
    id: 32,
    name: 'Corsair Dark Core RGB',
    category: 'Mouse',
    price: 89.99,
    rating: 4.6,
    image: '🖱️',
    description: 'Wireless gaming mouse with Qi charging'
  },
  // Additional Keyboards
  {
    id: 33,
    name: 'Ducky One 2 Mini',
    category: 'Keyboard',
    price: 109.99,
    rating: 4.8,
    image: '⌨️',
    description: '60% mechanical keyboard with RGB lighting'
  },
  {
    id: 34,
    name: 'Keychron K2',
    category: 'Keyboard',
    price: 89.99,
    rating: 4.7,
    image: '⌨️',
    description: 'Wireless mechanical keyboard for Mac/Windows'
  },
  // Additional USB Cables
  {
    id: 35,
    name: 'UGREEN USB-C to HDMI',
    category: 'Cable',
    price: 24.99,
    rating: 4.5,
    image: '🔌',
    description: '4K HDMI cable with USB-C connector'
  },
  {
    id: 36,
    name: 'JSAUX USB-C Extension',
    category: 'Cable',
    price: 14.99,
    rating: 4.4,
    image: '🔌',
    description: '3ft USB-C extension cable'
  },
  // Additional Speakers
  {
    id: 37,
    name: 'Audioengine A2+',
    category: 'Speaker',
    price: 269.99,
    rating: 4.8,
    image: '🔊',
    description: 'Premium powered desktop speakers'
  },
  {
    id: 38,
    name: 'Edifier R1280T',
    category: 'Speaker',
    price: 99.99,
    rating: 4.7,
    image: '🔊',
    description: 'Bookshelf speakers with wooden enclosure'
  },
  // Additional Headsets
  {
    id: 39,
    name: 'Bose QuietComfort 35 II',
    category: 'Headset',
    price: 299.99,
    rating: 4.8,
    image: '🎧',
    description: 'Noise-cancelling wireless headphones'
  },
  {
    id: 40,
    name: 'Sony WH-1000XM4',
    category: 'Headset',
    price: 349.99,
    rating: 4.9,
    image: '🎧',
    description: 'Premium noise-cancelling headphones'
  },
  // Additional Webcams
  {
    id: 41,
    name: 'Elgato Facecam',
    category: 'Webcam',
    price: 199.99,
    rating: 4.7,
    image: '📹',
    description: 'Professional streaming webcam'
  },
  {
    id: 42,
    name: 'Insta360 Link',
    category: 'Webcam',
    price: 299.99,
    rating: 4.8,
    image: '📹',
    description: 'AI-powered 4K webcam'
  },
  // Additional Monitors
  {
    id: 43,
    name: 'Samsung Odyssey G7',
    category: 'Monitor',
    price: 699.99,
    rating: 4.8,
    image: '🖥️',
    description: '32" QHD gaming monitor with 240Hz'
  },
  {
    id: 44,
    name: 'LG 38WN95C-W',
    category: 'Monitor',
    price: 1499.99,
    rating: 4.9,
    image: '🖥️',
    description: '38" UltraWide 4K monitor'
  },
  // Additional Mouse Pads
  {
    id: 45,
    name: 'Glorious XXL',
    category: 'Mouse Pad',
    price: 34.99,
    rating: 4.7,
    image: '🖱️',
    description: 'Extra large gaming mouse pad'
  },
  {
    id: 46,
    name: 'HyperX Fury S Pro',
    category: 'Mouse Pad',
    price: 29.99,
    rating: 4.6,
    image: '🖱️',
    description: 'Speed edition gaming mouse pad'
  },
  // Additional USB Hubs
  {
    id: 47,
    name: 'CalDigit TS3 Plus',
    category: 'USB Hub',
    price: 249.99,
    rating: 4.8,
    image: '🔌',
    description: 'Thunderbolt 3 dock with 15 ports'
  },
  {
    id: 48,
    name: 'OWC Thunderbolt Hub',
    category: 'USB Hub',
    price: 149.99,
    rating: 4.7,
    image: '🔌',
    description: '4-port Thunderbolt 4 hub'
  },
  // Additional Microphones
  {
    id: 49,
    name: 'Shure MV7',
    category: 'Microphone',
    price: 249.99,
    rating: 4.8,
    image: '🎤',
    description: 'USB/XLR hybrid microphone'
  },
  {
    id: 50,
    name: 'Elgato Wave 3',
    category: 'Microphone',
    price: 159.99,
    rating: 4.7,
    image: '🎤',
    description: 'Streaming microphone with Wave Link'
  }
];

const Market = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = existingCart.find(item => item.id === product.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = existingCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...existingCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Item added to cart!');
  };

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = priceRange === 'all' || 
                         (priceRange === 'under50' && product.price < 50) ||
                         (priceRange === '50to100' && product.price >= 50 && product.price <= 100) ||
                         (priceRange === '100to200' && product.price > 100 && product.price <= 200) ||
                         (priceRange === 'over200' && product.price > 200);
      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      if (sortOrder === 'priceLowToHigh') {
        return a.price - b.price;
      } else if (sortOrder === 'priceHighToLow') {
        return b.price - a.price;
      } else if (sortOrder === 'ratingHighToLow') {
        return b.rating - a.rating;
      }
      return 0;
    });

  return (
    <div className="market-container">
      <div className="market-header">
        <h1>Tech Haven Marketplace</h1>
        <div className="filters-container">
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="price-sort-filters">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="under50">Under $50</option>
              <option value="50to100">$50 - $100</option>
              <option value="100to200">$100 - $200</option>
              <option value="over200">Over $200</option>
            </select>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Sort By</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="ratingHighToLow">Rating: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-description">{product.description}</p>
              <div className="product-rating">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
                <span>({product.rating})</span>
              </div>
              <div className="product-price">${product.price}</div>
              <button 
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
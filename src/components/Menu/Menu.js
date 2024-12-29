import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { IMAGES } from '../../utils/images';
import './Menu.css';

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Greek Salad',
    description: 'Fresh vegetables, olives, and feta cheese drizzled with extra virgin olive oil',
    price: 12.99,
    image: IMAGES.GREEK_SALAD,
    category: 'Lunch'
  },
  {
    id: 2,
    name: 'Bruschetta',
    description: 'Grilled bread rubbed with garlic and topped with diced tomatoes and herbs',
    price: 7.99,
    image: IMAGES.BRUSCHETTA,
    category: 'Lunch'
  },
  {
    id: 3,
    name: 'Grilled Fish',
    description: 'Fresh catch of the day grilled to perfection with Mediterranean herbs',
    price: 20.99,
    image: IMAGES.GRILLED_FISH,
    category: 'Mains'
  },
  {
    id: 4,
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, croutons and parmesan with our special Caesar dressing.',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80',
    category: 'Lunch'
  },
  {
    id: 5,
    name: 'Caprese Sandwich',
    description: 'Fresh mozzarella, tomatoes and basil on ciabatta with balsamic glaze.',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    category: 'Lunch'
  },
  {
    id: 6,
    name: 'Mediterranean Pasta',
    description: 'Fresh pasta with tomatoes, olives, capers and herbs in white wine sauce.',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80',
    category: 'Mains'
  },
  {
    id: 7,
    name: 'Lamb Chops',
    description: 'Grilled lamb chops with rosemary and garlic, served with roasted vegetables.',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80',
    category: 'Mains'
  },
  {
    id: 8,
    name: 'Seafood Paella',
    description: 'Spanish rice with mixed seafood, saffron and seasonal vegetables.',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80',
    category: 'Mains'
  },
  {
    id: 9,
    name: 'Lemon Cake',
    description: 'Light citrus cake with lemon zest and fresh cream frosting.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    category: 'Desserts'
  },
  {
    id: 10,
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    category: 'Desserts'
  },
  {
    id: 11,
    name: 'Baklava',
    description: 'Flaky phyllo pastry layered with nuts and honey syrup.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
    category: 'Desserts'
  },
  {
    id: 12,
    name: 'Gelato Selection',
    description: 'Three scoops of artisanal gelato with your choice of flavors.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=800&q=80',
    category: 'Desserts'
  },
  {
    id: 13,
    name: "Chef's Special",
    description: 'Daily creation featuring seasonal ingredients and unique flavors.',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    category: 'Specials'
  },
  {
    id: 14,
    name: 'Weekend Brunch',
    description: 'Mediterranean breakfast with eggs, olives, feta and fresh bread.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    category: 'Specials'
  },
  {
    id: 15,
    name: 'Seasonal Soup',
    description: 'Chef-crafted soup made with fresh seasonal ingredients.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    category: 'Specials'
  }
];

const Menu = () => {
  const location = useLocation();
  const { addToCart, removeFromCart, cartItems } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Lunch');

  useEffect(() => {
    if (location.state?.message) {
      setNotificationMessage(location.state.message);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }
  }, [location]);

  const handleOrder = (item) => {
    if (cartItems.find(cartItem => cartItem.id === item.id)) {
      removeFromCart(item.id);
      setNotificationMessage(`Removed ${item.name} from cart`);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } else {
      addToCart(item);
      setNotificationMessage(`Added ${item.name} to cart`);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  const isItemInCart = (itemId) => {
    return cartItems.some(item => item.id === itemId);
  };

  return (
    <div className="menu-container">
      {showNotification && (
        <div className="notification">
          {notificationMessage}
        </div>
      )}

      <h1>Our Menu</h1>
      
      <div className="menu-categories">
        <button 
          className={selectedCategory === 'Lunch' ? 'active' : ''} 
          onClick={() => setSelectedCategory('Lunch')}
        >
          Lunch
        </button>
        <button 
          className={selectedCategory === 'Mains' ? 'active' : ''} 
          onClick={() => setSelectedCategory('Mains')}
        >
          Mains
        </button>
        <button 
          className={selectedCategory === 'Desserts' ? 'active' : ''} 
          onClick={() => setSelectedCategory('Desserts')}
        >
          Desserts
        </button>
        <button 
          className={selectedCategory === 'Specials' ? 'active' : ''} 
          onClick={() => setSelectedCategory('Specials')}
        >
          Specials
        </button>
      </div>

      <div className="menu-items">
        {MENU_ITEMS.filter(item => item.category === selectedCategory).map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">${item.price.toFixed(2)}</p>
              <button 
                onClick={() => handleOrder(item)}
                className={isItemInCart(item.id) ? 'remove-button' : 'order-button'}
              >
                {isItemInCart(item.id) ? 'Remove' : 'Order Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <Link to="/cart" className="cart-button">
          Go to Cart ({cartItems.length})
        </Link>
      )}
    </div>
  );
};

export default Menu;

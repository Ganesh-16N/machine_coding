# Task 19: Food Delivery App (Mini Zomato)

## 🎯 Objective
Create a food delivery app with restaurant browsing, cart management, and checkout flow using Redux Toolkit or React Query.

## 📋 Requirements
- [ ] Browse restaurants with categories
- [ ] Restaurant details with menu items
- [ ] Add items to cart functionality
- [ ] Cart management and checkout
- [ ] Order tracking
- [ ] State management with Redux Toolkit

## 🛠️ Technical Skills to Practice
- Redux Toolkit for state management
- Complex app architecture
- API integration patterns
- Cart and order management
- Restaurant and menu data handling
- Checkout flow implementation

## 🎨 UI Components Needed
- Restaurant list screen
- Restaurant detail screen
- Menu items with categories
- Cart screen with items
- Checkout flow
- Order tracking
- Search and filters

## 🍕 Data Structures
```javascript
// Restaurant
{
  id: string,
  name: string,
  cuisine: string,
  rating: number,
  deliveryTime: string,
  minOrder: number,
  image: string,
  menu: MenuItem[]
}

// Menu Item
{
  id: string,
  name: string,
  description: string,
  price: number,
  category: string,
  image: string,
  available: boolean
}
```

## 💡 Implementation Tips
1. Set up Redux Toolkit store
2. Create slices for restaurants, cart, orders
3. Implement restaurant browsing with filters
4. Add cart functionality with persistence
5. Create checkout flow with validation
6. Add order tracking system

## 🛒 App Features
- Restaurant browsing
- Menu exploration
- Cart management
- Checkout process
- Order tracking
- Search and filters
- User reviews

## 🚀 Bonus Features
- Real-time order tracking
- Payment integration
- Push notifications
- Loyalty program
- Multiple delivery addresses
- Restaurant reviews and ratings

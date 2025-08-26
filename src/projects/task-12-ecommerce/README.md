# Task 12: E-Commerce Product List

## 🎯 Objective
Create an e-commerce app that fetches products from an API and displays them with add-to-cart functionality.

## 📋 Requirements
- [ ] Fetch products from API (JSONPlaceholder or similar)
- [ ] Display products in a grid/list
- [ ] Product cards with image, title, price
- [ ] Add to cart functionality
- [ ] Cart management (add/remove items)
- [ ] Product search and filtering

## 🛠️ Technical Skills to Practice
- API integration with fetch/axios
- Async/await patterns
- Loading and error states
- Cart state management
- Product filtering and search
- Image handling and caching

## 🎨 UI Components Needed
- Product grid/list (FlatList)
- Product card component
- Search bar
- Filter options
- Cart icon with badge
- Loading spinner
- Error message component

## 🛍️ Product Data Structure
```javascript
{
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}
```

## 💡 Implementation Tips
1. Use useEffect for API calls
2. Implement loading and error states
3. Create reusable product card component
4. Add search functionality with debouncing
5. Implement cart with local state
6. Add product filtering by category

## 🛒 Cart Features
- Add/remove products
- Quantity management
- Cart total calculation
- Cart persistence
- Checkout flow
- Order history

## 🚀 Bonus Features
- Product details page
- Wishlist functionality
- Product reviews/ratings
- Payment integration
- Order tracking
- Push notifications

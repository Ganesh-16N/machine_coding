# Task 07: Expense Tracker

## 🎯 Objective
Create an expense tracker app to add/remove transactions and calculate total balance dynamically.

## 📋 Requirements
- [ ] Add new expense/income transactions
- [ ] Remove transactions
- [ ] Calculate total balance dynamically
- [ ] Categorize transactions (food, transport, etc.)
- [ ] Local storage with AsyncStorage
- [ ] Transaction history list

## 🛠️ Technical Skills to Practice
- AsyncStorage for data persistence
- Complex state management
- List rendering with FlatList
- Data filtering and calculations
- Form handling for new transactions
- Date handling and formatting

## 🎨 UI Components Needed
- Total balance display
- Add transaction form
- Transaction list (FlatList)
- Transaction item component
- Category selector
- Date picker
- Delete transaction functionality

## 📊 Data Structure
```javascript
{
  id: string,
  title: string,
  amount: number,
  type: 'expense' | 'income',
  category: string,
  date: Date,
  description?: string
}
```

## 💡 Implementation Tips
1. Use AsyncStorage to persist data
2. Implement CRUD operations
3. Calculate totals dynamically
4. Add form validation
5. Implement search/filter by category
6. Add date formatting

## 🚀 Bonus Features
- Monthly/yearly summaries
- Charts and graphs
- Export to CSV
- Budget limits and alerts
- Multiple currency support
- Receipt image upload

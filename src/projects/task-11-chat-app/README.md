# Task 11: Chat App (Local + Dummy Data)

## 🎯 Objective
Create a chat app UI that displays messages and allows adding new messages (like WhatsApp).

## 📋 Requirements
- [ ] Display chat messages in a scrollable list
- [ ] Add new messages functionality
- [ ] Message input with send button
- [ ] Different message types (sent/received)
- [ ] Timestamp display for messages
- [ ] Auto-scroll to latest message

## 🛠️ Technical Skills to Practice
- FlatList with inverted scrolling
- Complex state management
- Input handling and validation
- Message formatting and display
- Auto-scroll functionality
- Component composition

## 🎨 UI Components Needed
- Chat messages list (FlatList)
- Message bubble component
- Input field with send button
- Timestamp display
- User avatar/name
- Typing indicator
- Message status indicators

## 💬 Message Data Structure
```javascript
{
  id: string,
  text: string,
  sender: 'user' | 'other',
  timestamp: Date,
  status: 'sent' | 'delivered' | 'read',
  type: 'text' | 'image' | 'file'
}
```

## 💡 Implementation Tips
1. Use inverted FlatList for better performance
2. Implement message input with validation
3. Add auto-scroll to bottom on new message
4. Create reusable message bubble component
5. Handle different message types
6. Add typing indicators

## 🔄 Chat Features
- Send/receive messages
- Message timestamps
- Read receipts
- Typing indicators
- Message search
- Media sharing (images/files)

## 🚀 Bonus Features
- Voice messages
- Message reactions
- Group chat support
- Message forwarding
- Chat backup/export
- Dark/light theme

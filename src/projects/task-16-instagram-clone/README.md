# Task 16: Instagram Clone (Basic Features)

## 🎯 Objective
Create a basic Instagram clone with feed, like/comment functionality, and optimized FlatList rendering.

## 📋 Requirements
- [ ] Display feed with posts (API or dummy data)
- [ ] Like/unlike posts functionality
- [ ] Add comments to posts
- [ ] Post creation with image upload
- [ ] User profile display
- [ ] Optimized FlatList with lazy loading

## 🛠️ Technical Skills to Practice
- Complex state management
- Optimized FlatList rendering
- Image handling and caching
- Social media UI patterns
- Performance optimization
- Component architecture

## 🎨 UI Components Needed
- Feed screen with posts
- Post component with image, caption, likes
- Like/comment buttons
- Comment section
- User avatar and username
- Create post modal
- Profile screen

## 📱 Post Data Structure
```javascript
{
  id: string,
  user: {
    id: string,
    username: string,
    avatar: string
  },
  image: string,
  caption: string,
  likes: number,
  comments: Comment[],
  timestamp: Date,
  isLiked: boolean
}
```

## 💡 Implementation Tips
1. Use FlatList with getItemLayout for performance
2. Implement like/unlike with optimistic updates
3. Add comment functionality with real-time updates
4. Create reusable post component
5. Handle image loading and caching
6. Implement infinite scroll

## 📸 Instagram Features
- Feed with posts
- Like/unlike functionality
- Comment system
- User profiles
- Post creation
- Stories (optional)
- Direct messages (optional)

## 🚀 Bonus Features
- Stories feature
- Direct messaging
- Explore page
- Search functionality
- Notifications
- Post sharing
- Filters and effects

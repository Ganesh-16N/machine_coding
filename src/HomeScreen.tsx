import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const problems = [
    // 🟢 Level 1 – Basics (Warmup)
    {
      id: '1',
      name: 'Counter App',
      screen: 'Counter',
      level: '🟢 Basic',
      description: 'Simple counter with increment/decrement/reset. Practice useState & button handling.',
      difficulty: 1,
      isCompleted: true
    },
    {
      id: '2',
      name: 'To-Do List App',
      screen: 'ToDo',
      level: '🟢 Basic',
      description: 'Add, edit, delete tasks. Local state management with useState.',
      difficulty: 1,
      isCompleted: true
    },
    {
      id: '3',
      name: 'Stopwatch / Timer App',
      screen: 'Stopwatch',
      level: '🟢 Basic',
      description: 'Start, pause, reset timer. Learn about setInterval, cleanup in useEffect.',
      difficulty: 1,
      isCompleted: false
    },
    {
      id: '4',
      name: 'Login Form (with Validation)',
      screen: 'LoginForm',
      level: '🟢 Basic',
      description: 'Email/password validation using Formik + Yup. Error messages below inputs.',
      difficulty: 1,
      isCompleted: false
    },
    {
      id: '5',
      name: 'Calculator App',
      screen: 'Calculator',
      level: '🟢 Basic',
      description: 'Basic operations (+, -, ×, ÷). Focus on layout (Flexbox) and state updates.',
      difficulty: 1,
      isCompleted: false
    },
    // 🟡 Level 2 – Intermediate
    {
      id: '6',
      name: 'Weather App (using API)',
      screen: 'WeatherApp',
      level: '🟡 Intermediate',
      description: 'Fetch current weather from an API. Show loading, error, and success states.',
      difficulty: 2,
      isCompleted: true
    },
    {
      id: '7',
      name: 'Expense Tracker',
      screen: 'ExpenseTracker',
      level: '🟡 Intermediate',
      description: 'Add/remove transactions. Calculate total balance dynamically. Local storage with AsyncStorage.',
      difficulty: 2,
      isCompleted: false
    },
    {
      id: '8',
      name: 'Music Player UI (Dummy)',
      screen: 'MusicPlayer',
      level: '🟡 Intermediate',
      description: 'Show list of songs, play/pause UI (without real audio). Focus on custom components, FlatList.',
      difficulty: 2,
      isCompleted: false
    },
    {
      id: '9',
      name: 'Notes App with Search & Filter',
      screen: 'NotesApp',
      level: '🟡 Intermediate',
      description: 'CRUD for notes. Search & filter functionality.',
      difficulty: 2,
      isCompleted: false
    },
    {
      id: '10',
      name: 'Image Gallery App',
      screen: 'ImageGallery',
      level: '🟡 Intermediate',
      description: 'Fetch images from Unsplash API. Display grid, click to enlarge.',
      difficulty: 2,
      isCompleted: false
    },
    // 🔵 Level 3 – Advanced
    {
      id: '11',
      name: 'Chat App (Local + Dummy Data)',
      screen: 'ChatApp',
      level: '🔵 Advanced',
      description: 'Display messages in a chat UI. Add new messages (like WhatsApp).',
      difficulty: 3,
      isCompleted: false
    },
    {
      id: '12',
      name: 'E-Commerce Product List',
      screen: 'ECommerce',
      level: '🔵 Advanced',
      description: 'Fetch products from an API. Show product cards with add-to-cart functionality.',
      difficulty: 3,
      isCompleted: false
    },
    {
      id: '13',
      name: 'Movie Booking UI',
      screen: 'MovieBooking',
      level: '🔵 Advanced',
      description: 'Select seats, calculate price. Manage seat availability dynamically.',
      difficulty: 3,
      isCompleted: false
    },
    {
      id: '14',
      name: 'Authentication with JWT (API Integration)',
      screen: 'AuthJWT',
      level: '🔵 Advanced',
      description: 'Login with API call. Save token in AsyncStorage. Show protected screens after login.',
      difficulty: 3,
      isCompleted: false
    },
    {
      id: '15',
      name: 'Map & Location Tracker',
      screen: 'MapLocation',
      level: '🔵 Advanced',
      description: 'Show current location on Google Maps. Update location in real time.',
      difficulty: 3,
      isCompleted: false
    },
    // 🔴 Level 4 – Interview-Level (20 LPA Prep)
    {
      id: '16',
      name: 'Instagram Clone (Basic Features)',
      screen: 'InstagramClone',
      level: '🔴 Interview-Level',
      description: 'Show feed (API or dummy). Like, comment, and add post. Optimized FlatList rendering.',
      difficulty: 4,
      isCompleted: false
    },
    {
      id: '17',
      name: 'Uber-like Ride Booking Flow',
      screen: 'UberBooking',
      level: '🔴 Interview-Level',
      description: 'Map integration. Select pickup & drop. Fare estimation (dummy).',
      difficulty: 4,
      isCompleted: false
    },
    {
      id: '18',
      name: 'Multi-Step Form (with Redux)',
      screen: 'MultiStepForm',
      level: '🔴 Interview-Level',
      description: 'Steps: Personal → Bank → Documents. Save progress & restore if user exits.',
      difficulty: 4,
      isCompleted: false
    },
    {
      id: '19',
      name: 'Food Delivery App (Mini Zomato)',
      screen: 'FoodDelivery',
      level: '🔴 Interview-Level',
      description: 'Browse restaurants. Add to cart, checkout flow. State management with Redux Toolkit / React Query.',
      difficulty: 4,
      isCompleted: false
    },
    {
      id: '20',
      name: 'Real-Time Chat App (with WebSockets / Firebase)',
      screen: 'RealTimeChat',
      level: '🔴 Interview-Level',
      description: 'Login with Google. Real-time messaging. Push notifications.',
      difficulty: 4,
      isCompleted: false
    },
    // 🟣 Level 5 – Expert-Level (30+ LPA Prep)
    {
      id: '21',
      name: 'Dashboard Analytics',
      screen: 'DashboardAnalytics',
      level: '🟣 Expert-Level',
      description: 'Comprehensive dashboard with charts, graphs, and real-time analytics data visualization.',
      difficulty: 5,
      isCompleted: false
    },
    {
      id: '22',
      name: 'Social Media Feed',
      screen: 'SocialMediaFeed',
      level: '🟣 Expert-Level',
      description: 'Social media feed with infinite scroll, pull-to-refresh, and advanced content interactions.',
      difficulty: 5,
      isCompleted: false
    },
    {
      id: '23',
      name: 'E-Learning Platform',
      screen: 'ELearningPlatform',
      level: '🟣 Expert-Level',
      description: 'Comprehensive e-learning platform with courses, video lessons, progress tracking, and assessments.',
      difficulty: 5,
      isCompleted: false
    },
    {
      id: '24',
      name: 'Fitness Tracker',
      screen: 'FitnessTracker',
      level: '🟣 Expert-Level',
      description: 'Comprehensive fitness tracking with workout plans, progress charts, and health metrics monitoring.',
      difficulty: 5,
      isCompleted: false
    },
    {
      id: '25',
      name: 'Online Banking App',
      screen: 'OnlineBanking',
      level: '🟣 Expert-Level',
      description: 'Secure online banking with account management, transactions, and financial analytics.',
      difficulty: 5,
      isCompleted: false
    },
    {
      id: '26',
      name: 'Travel Booking App',
      screen: 'TravelBooking',
      level: '🟣 Expert-Level',
      description: 'Comprehensive travel booking with flights, hotels, car rentals, and itinerary management.',
      difficulty: 5,
      isCompleted: false
    },
    {
      id: '27',
      name: 'Job Portal',
      screen: 'JobPortal',
      level: '🟣 Expert-Level',
      description: 'Job portal with listings, application tracking, resume builder, and interview scheduling.',
      difficulty: 5,
      isCompleted: false
    },
    {
      id: '28',
      name: 'Real Estate App',
      screen: 'RealEstateApp',
      level: '🟣 Expert-Level',
      description: 'Real estate platform with property listings, virtual tours, mortgage calculator, and agent communication.',
      difficulty: 5,
      isCompleted: false
    },
    {
      id: '29',
      name: 'Healthcare App',
      screen: 'HealthcareApp',
      level: '🟣 Expert-Level',
      description: 'Healthcare app with appointment booking, telemedicine, health records, and medication management.',
      difficulty: 5,
      isCompleted: false
    },
    {
      id: '30',
      name: 'Gaming App',
      screen: 'GamingApp',
      level: '🟣 Expert-Level',
      description: 'Interactive gaming app with multiplayer support, leaderboards, achievements, and real-time gameplay.',
      difficulty: 5,
      isCompleted: false
    }
  ];

  const renderProblemItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      activeOpacity={0.9} 
      style={[
        styles.problemCard, 
        { 
          borderLeftColor: getDifficultyColor(item.difficulty),
          opacity: item.isCompleted ? 0.7 : 1
        }
      ]} 
      onPress={() => navigation.navigate(item.screen)}
    >
      <View style={styles.problemHeader}>
        <View style={styles.problemHeaderLeft}>
          <Text style={styles.problemLevel}>{item.level}</Text>
          {item.isCompleted && (
            <View style={styles.completedBadge}>
              <Text style={styles.completedText}>✓ Completed</Text>
            </View>
          )}
        </View>
        <Text style={styles.problemNumber}>#{item.id}</Text>
      </View>
      <Text style={styles.problemTitle}>{item.name}</Text>
      <Text style={styles.problemDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  const getDifficultyColor = (difficulty: number) => {
    switch (difficulty) {
      case 1: return '#22c55e'; // Green
      case 2: return '#eab308'; // Yellow
      case 3: return '#3b82f6'; // Blue
      case 4: return '#ef4444'; // Red
      case 5: return '#8b5cf6'; // Purple
      default: return '#6b7280';
    }
  };

  const completedCount = problems.filter(problem => problem.isCompleted).length;
  const totalCount = problems.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Machine Coding</Text>
      <Text style={styles.subtitle}>30 Progressive Problems (Basic → Expert Level)</Text>
      
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Progress: {completedCount}/{totalCount} ({Math.round((completedCount/totalCount) * 100)}%)
        </Text>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${(completedCount/totalCount) * 100}%` }
            ]} 
          />
        </View>
      </View>
      
      <FlatList 
        data={problems}
        keyExtractor={(item) => item.id}
        renderItem={renderProblemItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 8,
    textAlign: 'center',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
    textAlign: 'center',
    color: '#64748b',
  },
  progressContainer: {
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#22c55e',
    borderRadius: 4,
  },
  listContainer: {
    paddingBottom: 20,
  },
  problemCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  problemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  problemHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  problemLevel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
  },
  completedBadge: {
    backgroundColor: '#22c55e',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  completedText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#ffffff',
  },
  problemNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1e293b',
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  problemTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8,
  },
  problemDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
});

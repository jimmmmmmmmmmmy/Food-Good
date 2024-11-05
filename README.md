

# Food Good App 

![Recipe Screens](https://github.com/user-attachments/assets/0d4f3048-c753-4d80-b7b6-555a06f5a6d4)

## Overview

Food Good is a React Native mobile application that revolutionizes kitchen management and recipe discovery. The app uses intelligent ingredient tracking and recipe matching to help users minimize food waste and maximize their cooking potential.

![React Native](https://img.shields.io/badge/React_Native-v0.74.3-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.3.3-blue.svg)
![Expo](https://img.shields.io/badge/Expo-v51.0.20-black.svg)

##  Key Features

### Smart Recipe Recommendations
- Real-time recipe suggestions based on available ingredients
- Machine learning-powered recipe matching algorithm
- Customizable dietary preferences and restrictions
- Time-based meal suggestions (breakfast, lunch, dinner)

### Inventory Management
- Dual storage tracking (fridge & pantry)
- Automated inventory updates
- Expiration date tracking
- Low stock alerts

### Recipe Catalog
- Comprehensive recipe database
- Step-by-step cooking instructions
- Ingredient quantity scaling
- Favorite recipe collection
- Recipe search and filtering

### Shopping Assistant
- Smart shopping list generation
- Missing ingredients identification
- Quick grocery run suggestions
- Quantity optimization

##  Technology Stack

### Frontend
- React Native (v0.74.3)
- TypeScript (v5.3.3)
- Expo (v51.0.20)
- React Navigation v6
- Expo Vector Icons

### State Management
- Custom EventBus implementation
- AsyncStorage for persistent data
- React Context API

## Architecture

```
food-good/
├── assets/                # Static resources
│   ├── fonts/
│   └── images/
├── components/            # Reusable UI components
│   ├── common/
│   └── specific/
├── screens/              # Main application screens
├── services/             # Business logic layer
│   ├── EventBus.ts
│   └── RecipeRecommendationService.ts
├── data/                # Data management
│   ├── types/
│   └── models/
├── navigation/          # Navigation configuration
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
└── styles/             # Global styling
```

## Key Technical Implementations

### Custom Event Bus
- Implementation of a singleton pattern
- Type-safe event publishing and subscription
- Memory leak prevention
- Efficient state management across components

### Recipe Recommendation Engine
- Efficient algorithm for ingredient matching
- Real-time recipe filtering
- Optimized performance for large recipe datasets
- Smart caching implementation

### UI/UX Features
- Smooth animations using React Native Reanimated
- Responsive design for various screen sizes
- Custom gesture handling
- Optimized image loading and caching

## TO DO

- Database schema design
- Basic API endpoints
- Authentication system
- Cloud infrastructure setup
- Recipe management core functionality

This project is licensed under the MIT License - see the LICENSE file for details.

---

*This project was developed as part of the OSU CS 361 course, demonstrating practical application of software engineering principles, modern web technologies, and mobile app development best practices.*

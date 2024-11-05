

# Food Good App 



## Overview

Food Good is a React Native mobile application that revolutionizes kitchen management and recipe discovery. The app uses intelligent ingredient tracking and recipe matching to help users minimize food waste and maximize their cooking potential.

![React Native](https://img.shields.io/badge/React_Native-v0.74.3-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.3.3-blue.svg)
![Expo](https://img.shields.io/badge/Expo-v51.0.20-black.svg)


<p align="center">
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/4fe36f1f-c1d1-4842-9d46-fdc91eb30237" width="250" alt="Ingredients Screen"/>
      <br>
      <em>Ingredients Management</em>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/9ad450c5-f25b-432f-9ea6-01da91a1936a" width="250" alt="Recipe Screen"/>
      <br>
      <em>Recipe Details</em>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/3587a6cb-e39e-46fb-b5cf-f5c6835eecb1" width="250" alt="Home Screen"/>
      <br>
      <em>Home Screen</em>
    </td>
  </tr>
</table>
</p>


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


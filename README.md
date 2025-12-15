# 🍽️ TheMeal - Recipe Discovery App

A modern and responsive recipe discovery application developed with React. Browse thousands of recipes, save your favorites, and explore different cuisines with an intuitive search experience.

## 🌐 Live Demo

**[View Application →](https://mealv1.netlify.app/)**

## ✨ Features

- 🔍 **Real-Time Search** - Instant results and autocomplete suggestions while typing
- ❤️ **Favorite System** - Persistently save recipes you love using localStorage
- 🌙 **Dark/Light Mode** - Theme switching with smooth transitions
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🗂️ **Category Navigation** - Discover recipes by category (Vegetarian, Seafood, Desserts, etc.)
- 🎨 **Fluid Animations** - Polished user interface with hover effects and transitions
- 🌍 **International Recipes** - Explore dishes from world cuisines

## 🛠️ Technologies Used

- **React 18** - Modern React and Hooks
- **React Router v6** - Client-side routing
- **Context API** - Global state management
- **Bootstrap 5** - Responsive UI framework
- **Bootstrap Icons** - Icon library
- **TheMealDB API** - Recipe data source
- **Vite** - Fast build tool and development server

## 📦 Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash

git clone https://github.com/Erdem-Baran/meal-api-project.git

cd meal-api-project/meal-project-github

```

2. **Load the dependencies**

```bash

npm install

```

3. **Start the development server**

```bash

npm run dev

```

4. **Open in your browser**

```

http://localhost:5173

```

5. **Get a build for production**

```bash

npm run build

```
📁 Project Structure
```
meal-project-github/
├── src/
│   ├── components/          # Reusable components
│   │   ├── FavoriteButton.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   └── Search.jsx
│   ├── contexts/           # React Context providers
│   │   ├── Favorites.jsx
│   │   └── ThemeContext.jsx
│   ├── layout/            # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/             # Page components
│   │   ├── CategoryMeals.jsx
│   │   ├── FavoritesPage.jsx
│   │   ├── Home.jsx
│   │   ├── Meal.jsx
│   │   ├── MealDetails.jsx
│   │   ├── SearchResults.jsx
│   │   └── Vegetarian.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── vite.config.js
```


🎯 Learning Outcomes
While developing this project, I learned and applied the following:

✅ Advanced React Hooks - useState, useEffect, useContext, useRef

✅ React Router v6 - Dynamic routing, nested routes, URL parameters

✅ Context API - Global state management without Redux

✅ API Integration - Fetching and processing data from external sources

✅ localStorage - Persisting user preferences

✅ Debouncing - Optimizing search performance

✅ Responsive Design - Mobile-first approach with Bootstrap

✅ Component Composition - Creating reusable UI components

🙏 Acknowledgements
API: TheMealDB - Free recipe API

Icons: Bootstrap Icons

UI Framework: Bootstrap 5

📄 License
This project is licensed under the MIT License - feel free to use it for learning purposes.

👤 Developer
Erdem Baran

GitHub: [@Erdem-Baran](https://github.com/Erdem-Baran)

LinkedIn: [My Profile](https://www.linkedin.com/in/erdem-baran/)

⭐ If you found this project useful, please give it a star!

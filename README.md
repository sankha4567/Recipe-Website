# Recipe Ideas 🍳

A responsive and modern web app that helps Taylor, a busy professional, quickly find meal ideas based on ingredients using TheMealDB API.
Built with React + Vite + TailwindCSS, it allows searching, viewing full recipes, saving favorites, and managing them easily — all in a clean, user-friendly UI.

## 🚀 Live Demo

- **DeepWiki Documentation**: [https://deepwiki.com/sankha4567/Recipe-Website](https://deepwiki.com/sankha4567/Recipe-Website)
- **ChatGPT Conversation**: [https://chatgpt.com/share/68ffc23a-ae6c-800d-b40f-b9516f435aa4](https://chatgpt.com/share/68ffc23a-ae6c-800d-b40f-b9516f435aa4)
- **Live Video Demo**: [https://www.awesomescreenshot.com/video/45724650?key=141a42beeacd64cc192ab263a43082b5](https://www.awesomescreenshot.com/video/45724650?key=141a42beeacd64cc192ab263a43082b5)

## ✨ Features

- **Home Page** – Introduction and search by ingredient
- **Recipe Search** – Fetches recipes from TheMealDB API
- **Detailed Recipe Page** – Shows ingredients and step-by-step instructions
- **Favorites System** – Add, remove, or clear all favorites (saved in localStorage)
- **Persistent Data** – Favorites remain even after refreshing or closing the browser
- **Responsive Design** – Works smoothly on desktop and mobile devices
- **Navigation** – Client-side routing using React Router
- **Clean UI** – Styled with TailwindCSS for simplicity and speed

## 👤 User Persona

**Name:** Taylor
**Occupation:** Busy Professional
**Need:** Taylor wants to cook meals based on available ingredients and time.
The app provides quick recipe suggestions and allows saving favorites for later.

## 🛠️ Tech Stack

- **React 18** (via Vite)
- **TailwindCSS**
- **React Router DOM**
- **TheMealDB API**
- **LocalStorage** (to persist favorites)
- **Vitest** (for testing)
- **React Testing Library**

## 📦 Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/sankha4567/Recipe-Website
cd recipe-idea
```

### Install Dependencies
```bash
npm install
```

### Run the Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
npm test
```

## 🧪 Testing

The project includes comprehensive unit tests using React Testing Library and Vitest:

- **Home Component**: Tests for welcome message, description, and navigation
- **SearchBar Component**: Tests for input handling and form submission
- **Navbar Component**: Tests for navigation links and favorites count
- **FavoritesContext**: Tests for context provider and localStorage integration

Run tests with:
```bash
npm test
```

## 📁 Project Structure

```
recipe-idea/
├── public/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MealCard.jsx
│   │   ├── MealDetails.jsx
│   │   ├── RecipeCard.jsx
│   │   └── Favorites.jsx
│   ├── context/
│   │   └── FavoritesContext.jsx
│   ├── pages/
│   │   ├── SearchPage.jsx
│   │   └── FavoritesPage.jsx
│   ├── test/
│   │   └── setup.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

# 🍽️ React Meal App

*A visually appealing meal discovery app built with React and TheMealDB API*

---

## ✨ **Overview**

**React Meal App** is a modern, responsive meal discovery application that allows users to explore a variety of delicious recipes from around the world. Built with **React.js**, this app fetches meal data from **TheMealDB API** and presents it in an intuitive, visually appealing interface.

### **Key Features**
* **Meal Discovery** – Browse meals by category, ingredients, or search by name
* **Responsive Design** – Works seamlessly on mobile, tablet, and desktop
* **Modern UI** – Clean, Bootstrap-styled interface with smooth animations
* **API Integration** – Fetches real-time meal data using Axios
* **Easy to Extend** – Modular structure for adding new features like favorites, meal details, or user accounts

### **Who Is This For?**
* **👨‍🍳Foodies** – Explore recipes from different cuisines
* **👩‍🍳Chefs & Home Cooks** – Find inspiration for your next meal
* **💻React Developers** – A great project to learn React, API integration, and state management
* **🎓Students & Beginners** – A simple yet practical project to build your portfolio

---

## 🛠️ **Tech Stack**

| Category          | Technologies Used                          |
|-------------------|--------------------------------------------|
| **Frontend**      | React.js, Bootstrap 4, Axios, CSS3         |
| **State Management** | React Hooks (`useState`, `useEffect`)      |
| **Testing**       | Jest, React Testing Library                |
| **Build Tool**    | Create React App (CRA)                     |
| **API**          | TheMealDB API (JSON)                       |

### **System Requirements**
- Node.js (v14.x or higher)
- npm or yarn
- Modern web browser (Chrome, Firefox, Safari)

---

## 📦 **Installation**

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- A modern web browser

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone https://github.com/aadhar41/react-meal-app.git
   cd react-meal-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`.

4. **Build for production**
   ```bash
   npm run build
   ```
   The optimized production build will be in the `build` folder.

---

### **Alternative Installation Methods**

#### **Using Docker** *(Coming Soon!)*
Docker setup will be added in the future for easy deployment.

#### **Development Setup**
- Fork this repository and contribute!
- Use `npm run test` to run tests.
- Use `npm run eject` (not recommended for beginners) to customize the build toolchain.

---

## 🎯 **Usage**

### **Basic Usage**
The app fetches and displays Canadian meals by default. Here’s how you can customize it:

#### **Fetch Meals by Category**
Modify the `useEffect` in `src/Body.js` to fetch meals from a different category:
```javascript
useEffect(() => {
  axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian") // Change "Italian" to any category
    .then((res) => {
      console.log(res.data.meals);
      setItems(res.data.meals);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
```

#### **Search for Meals by Name**
Add a search bar to filter meals dynamically:
```javascript
const [searchTerm, setSearchTerm] = useState("");

const filteredItems = items.filter(item =>
  item.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
);

// Use filteredItems in your render instead of items
```

---

### **Advanced Usage**
#### **Add Meal Details Page**
Create a new component `MealDetail.js` to display detailed information about a selected meal:
```javascript
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setMeal(res.data.meals[0]))
      .catch((err) => console.log(err));
  }, [id]);

  if (!meal) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid" />
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <p><strong>Instructions:</strong> {meal.strInstructions}</p>
    </div>
  );
}

export default MealDetail;
```

#### **Add Routing**
Install `react-router-dom` and set up navigation:
```bash
npm install react-router-dom
```
Then update `App.js`:
```javascript
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MealDetail from "./MealDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/meal/:id" component={MealDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
```

---

## 📁 **Project Structure**
```
react-meal-app/
├── public/                  # Static files
│   ├── index.html           # Main HTML file
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # SEO configuration
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.js        # Navigation bar
│   │   ├── Body.js          # Main meal display
│   │   └── Footer.js        # Footer
│   ├── App.js               # Main app component
│   ├── App.css              # Global styles
│   ├── index.js             # Entry point
│   ├── index.css            # Global CSS
│   ├── setupTests.js        # Test setup
│   └── reportWebVitals.js   # Performance monitoring
├── .gitignore               # Files to ignore in Git
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation (you are here!)
└── ...
```

---

## 🔧 **Configuration**

### **Environment Variables**
No environment variables are required for this project, but you can easily extend it by adding `.env` files for different environments (development, production).

### **Customization Options**
- **Change the API URL**: Modify the base URL in `Body.js` to use a different API.
- **Add More Categories**: Extend the `useEffect` hook to support multiple categories.
- **Styling**: Override styles in `App.css` or `index.css` to match your design preferences.

---

## 🤝 **Contributing**

We welcome contributions from the community! Here’s how you can help:

### **How to Contribute**
1. **Fork the repository** and clone it locally.
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and commit them:
   ```bash
   git commit -m "Add your descriptive commit message"
   ```
4. **Push to your fork** and open a **Pull Request** to the `main` branch.

### **Development Setup**
1. Clone the repository and install dependencies as described in the [Installation](#📦-installation) section.
2. Run the development server:
   ```bash
   npm start
   ```
3. Make your changes and test them thoroughly.

### **Code Style Guidelines**
- Follow **ESLint** conventions (already configured via Create React App).
- Use **consistent indentation** (2 spaces).
- Write **clear, concise commit messages**.
- Add **tests** for new features or bug fixes.

### **Pull Request Process**
1. Ensure your changes are well-documented.
2. Link your PR to an issue (if applicable).
3. Request a review from a maintainer.

---

## 📝 **License**

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👥 **Authors & Contributors**

### **Maintainers**
👤 **Aadhar Gaur** – Initial project setup and development

### **Contributors**
👥 [List of contributors](https://github.com/your-username/react-meal-app/graphs/contributors)

### **Acknowledgments**
- [TheMealDB API](https://www.themealdb.com/api.php) – For providing delicious meal data.
- [Create React App](https://github.com/facebook/create-react-app) – For the boilerplate.
- [Bootstrap](https://getbootstrap.com/) – For styling components.

---

## 🐛 **Issues & Support**

### **Reporting Issues**
Found a bug or have a feature request? Open an **issue** on GitHub with:
- A clear description of the problem.
- Steps to reproduce it.
- Any relevant screenshots or logs.

### **Where to Get Help**
- **GitHub Discussions**: Ask questions or share ideas.
- **Twitter**: Follow [@your_handle](https://x.com/aadhar_gaur) for updates.
- **Community**: Join our [React Meal App Discord](https://discord.gg/your-invite-link) for discussions.

### **FAQ**
**Q: How do I add more categories?**
A: Modify the `useEffect` hook in `Body.js` to fetch meals from different categories by changing the `a=` parameter (e.g., `a=Mexican`).

**Q: Can I deploy this app?**
A: Yes! Use `npm run build` to generate a production-ready build in the `build` folder. Deploy it to services like **Vercel**, **Netlify**, or **GitHub Pages**.

**Q: How do I add a search feature?**
A: Refer to the [Advanced Usage](#🎯-usage) section for a search implementation example.

---

## 🗺️ **Roadmap**

### **Planned Features**
- [ ] **User Authentication**: Add login/signup functionality.
- [ ] **Meal Favorites**: Allow users to save their favorite meals.
- [ ] **Meal Details Page**: Expand the app to show detailed meal information.
- [ ] **Responsive Design Improvements**: Enhance mobile and tablet views.
- [ ] **Dark Mode**: Add a dark theme option.

### **Known Issues**
- [ ] Some API endpoints may have rate limits.
- [ ] Testing coverage could be improved.

### **Future Improvements**
- Add **PWA support** for offline access.
- Integrate **Google Maps** to show meal origins.
- Add **user reviews** for meals.

---

## 🌟 **Star & Share!**

If you found this project helpful, please give it a ⭐ **star** on GitHub! Share it with your friends and colleagues. Your support motivates us to keep improving!

---


This README is designed to be **engaging, informative, and developer-friendly**, making it easy for new contributors to get started while providing clear instructions for users. It follows modern GitHub README best practices and includes practical examples to encourage contributions and usage.

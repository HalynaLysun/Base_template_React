# React + Vite Project Boilerplate

A professional, scalable, and production-ready React starter template designed to kickstart web applications with best practices in mind.

## 🚀 Key Features

- **Scalable Architecture**: Organized directory structure with a clear separation of concerns (pages, components, API service layer).
- **Performance Optimized**: Implements code-splitting using `React.lazy` and `Suspense` to reduce initial bundle size and speed up page loads.
- **Robust Routing**: Configured with `react-router-dom`, including a global `Layout` wrapper and a catch-all 404 Not Found page.
- **Responsive Layout**: Features a "Sticky Footer" design and a centralized loading state to ensure a stable UI during navigation.
- **Styling**: Pre-configured for `CSS Modules` to ensure scoped and maintainable styles.

## 📂 Project Structure

- `src/api` — Isolated logic for backend services and API calls (e.g., Firebase).
- `src/pages` — Main route components representing different views.
- `src/components` — Reusable UI building blocks, each with its own logic and styles.
- `src/assets` — Static assets like images, icons, and global CSS variables.

## 🛠️ Getting Started

1. **Clone the repository:**

   git clone [https://github.com/HalynaLysun/Base_template_React.git](https://github.com/HalynaLysun/Base_template_React.git)

2. Install dependencies:
   npm install

3. Run in development mode:
   npm run dev

📝 Usage Guide
To add a new feature:

Create a new directory in src/pages.

Import the new page using lazy() in App.jsx.

Add a new <Route> inside the <Suspense> block.

Use the Layout component to maintain UI consistency across the app.

🔗 Live Demo

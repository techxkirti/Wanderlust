# Wanderlust ✈️

Wanderlust is a full-stack web application inspired by Airbnb. It allows users to list, explore, and review unique travel stays around the world. The project follows the **MVC (Model-View-Controller)** architecture for clean and scalable code.

## 🚀 Current Status: Phase 3 in Progress (Auth & Sessions)
The project has evolved from a basic CRUD app to a secure platform with **User Authentication**, **Authorization**, and **Session Management**.

---

## ✨ Features

### 🔐 Authentication & Security
- **User Accounts**: Full Sign-up, Login, and Logout functionality powered by **Passport.js**.
- **Secure Passwords**: Industry-standard hashing and salting using **passport-local-mongoose**.
- **Authorization**: Protected routes and ownership checks—only the creator of a listing or review can edit or delete it.
- **Session Management**: Persistent logins using **express-session** so users stay authenticated while browsing.

### ✉️ User Feedback (Flash Messages)
- **Real-time Alerts**: Integrated **connect-flash** to provide instant feedback (e.g., "Welcome to Wanderlust!", "Listing Deleted!", "Invalid Username or Password").

### 🏠 Listings Management
- **View All Listings**: A responsive home page showing all available stays using Bootstrap cards.
- **Detailed View**: A dedicated show page for each listing with image, description, and pricing.
- **Create & Edit**: Functional forms to add new listings or update existing ones.
- **Smart Image Handling**: Automatic default image fallback if a user provides an empty URL.
- **Currency Formatting**: Prices are automatically formatted to the Indian Rupee (INR) system.

### 💬 Review System
- **Nested Reviews**: Users can leave ratings (1-5 stars) and comments on specific listings.
- **Validation**: Server-side validation for reviews using Joi.
- **Delete Reviews**: Option to remove specific reviews from a listing.

### 🛠 Technical Highlights
- **Schema Validation**: Robust data validation using **Joi** to prevent invalid data from entering the database.
- **Error Handling**: Custom `ExpressError` class and `wrapAsync` utility to handle sync and async errors gracefully.
- **Template Engine**: Used `ejs-mate` for layout partials (Navbar, Footer, Boilerplate) to maintain DRY code.
- **Database Logic**: Implementation of Mongoose middleware to automatically delete all associated reviews when a listing is deleted.

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Authentication**: Passport.js, Passport-Local, Passport-Local-Mongoose
- **Storage/Sessions**: MongoDB, Mongoose, Express-Session, Connect-Flash
- **Frontend**: EJS (Embedded JavaScript), Bootstrap 5, FontAwesome
- **Validation**: Joi (Javascript Object Schema Validation)
- **Styling**: Custom CSS with "Plus Jakarta Sans" typography.

---

## 📸 Screenshots


| Index Page | Show Page |
|------------|-----------|
| ![Index Page](assets/index.png) | ![Show Page](assets/show.png) |

---

## ⚙️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/techxkirti/Wanderlust.git
   cd wonderlust
2. **Install Dependencies**
   ```bash
   # This will automatically install all required packages from package.json
   npm install
3. **Database Configuration**
   - Ensure you have **MongoDB** installed and running locally.
   - The app connects to: `mongodb://127.0.0.1:27017/wanderlust`
   - (Optional) To seed the database with initial data:
   ```bash
   node init/index.js
### 5. View the App
- Open your browser and go to: `http://localhost:8080/listings`

---

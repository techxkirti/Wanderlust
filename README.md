# Wanderlust ✈️

Wanderlust is a full-stack web application inspired by Airbnb. It allows users to list, explore, and review unique travel stays around the world. The project follows the **MVC (Model-View-Controller)** architecture for clean and scalable code.

## 🚀 Current Status: Phase 3 (Authentication & Sessions)
The project has moved beyond basic CRUD to include a secure **User Authentication** system and persistent **Session Management**.

## ✨ Features

### 🔐 Authentication & Smart Flow
- **User Accounts**: Full Sign-up, Login, and Logout functionality powered by **Passport.js**.
- **Automatic Login**: New users are automatically logged in immediately after a successful signup.
- **Smart Redirection**: If a guest tries to create or edit a listing, they are prompted to login. After logging in, the app automatically redirects them back to the **original page** they were trying to access.
- **Dynamic Navbar**: UI components (Login, Signup, Logout) toggle automatically based on the user's authentication state.

### ✉️ User Feedback (Flash Messages)
- **Real-time Alerts**: Integrated **connect-flash** to provide instant feedback (e.g., "Welcome back!", "You are logged out!", "Listing Deleted!").

### 🏠 Listings Management
- **View All Listings**: A responsive home page showing available stays using Bootstrap cards.
- **Detailed View**: A dedicated show page for each listing with images, descriptions, and pricing.
- **Create & Edit**: Functional forms to add new listings or update existing ones.
- **Currency Formatting**: Prices are automatically formatted to the Indian Rupee (INR) system.

### 💬 Review System
- **Rating & Comments**: Users can leave ratings (1-5 stars) and text reviews on listings.
- **Validation**: Server-side validation for reviews and listings using **Joi**.
- **Cleanup**: Mongoose middleware automatically deletes all associated reviews when a listing is removed.

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

# Wanderlust ✈️

Wanderlust is a full-stack web application inspired by Airbnb. It allows users to list, explore, and review unique travel stays around the world. The project follows the **MVC (Model-View-Controller)** architecture for clean and scalable code.

## 🚀 Current Status: Phase 4 (MVC Refactoring & UI Enhancements)
The project has reached a major architectural milestone by decoupling business logic into **Controllers** and optimizing the routing structure for professional-grade development.

## ✨ Features

### 🏗️ MVC Architecture & Refactoring
- **Controller Logic**: Successfully moved all callback functions from the routes into a dedicated `controllers/` folder (`listing.js`, `review.js`, `user.js`).
- **Clean Routing**: Implemented `router.route()` in the route files to group different HTTP methods (GET, POST, PUT, DELETE) that share the same URL path, reducing code redundancy.

### ⭐ Enhanced Review System
- **Starability Integration**: Integrated the **Starability.css** library to provide an animated, accessible, and visually appealing star-rating experience.
- **Visual Feedback**: Reviews now display their star rating visually on the listing's show page using the `starability-result` component.

### 🔐 Authentication & Authorization
- **User Accounts**: Full Sign-up, Login, and Logout functionality powered by **Passport.js**.
- **Listing Ownership**: Only the **Owner** of a listing can edit or delete it. The "Edit" and "Delete" buttons are hidden from non-owners.
- **Review Authorization**: Only the **Author** of a review has the permission to delete it.
- **Smart Redirection**: If a guest tries to perform a protected action, they are redirected to login and returned to their original destination after success.
- **Middleware Protection**: Server-side checks (`isOwner`, `isReviewAuthor`) prevent unauthorized API requests (e.g., via Postman).

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

## 🛡️ Permissions Matrix


| Feature | View | Create | Edit | Delete |
| :--- | :---: | :---: | :---: | :---: |
| **Listings** | Public | Registered User | Owner Only | Owner Only |
| **Reviews** | Public | Registered User | N/A | Author Only |


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

| Reviews |
|------------|
| ![Index Page](assets/review.png) |

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

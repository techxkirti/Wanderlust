# 🌍 Wanderlust ✈️  
### A Full-Stack Airbnb-Inspired Travel Platform

Wanderlust is a **production-ready full-stack web application** that allows users to **discover, create, and review unique travel stays** across the globe. Built with a scalable **MVC architecture**, it integrates **cloud storage, authentication, geospatial mapping, and interactive UI** to deliver a modern booking-like experience.

---

## 🚀 Live Demo

🔗 **Deployed Link:** *(after deployment)*  
🔗 **GitHub Repository:** https://github.com/techxkirti/Wanderlust

---

## 🧠 Project Highlights

- 🌐 **Full-Stack Application (MERN-inspired)**
- 🗺️ **Geospatial Mapping with Interactive 3D Globe**
- ☁️ **Cloudinary-powered Image Uploads**
- 🔐 **Secure Authentication & Authorization**
- ⭐ **Dynamic Review & Rating System**
- ⚡ **Optimized UI with Responsive Design**

---

## 🏗️ Architecture

The project follows a **clean MVC (Model-View-Controller) architecture**:

```
Models     → MongoDB schemas (Listings, Reviews, Users)
Views      → EJS templates (UI rendering)
Controllers→ Business logic (async/await handling)
Routes     → RESTful routing (Express Router)
```

### Key Design Decisions:
- Separation of concerns for scalability
- Middleware-based security checks
- RESTful routing using `router.route()`
- Server-side validation using Joi

---

## ✨ Core Features

### 🏠 Listings Management
- Create, edit, and delete listings
- View all listings in a responsive grid layout
- Detailed listing page with pricing, description, and images
- Currency formatted in **INR**

---

### ☁️ Cloud Image Management
- Integrated **Cloudinary** for image storage
- Supports direct file uploads using **Multer**
- Automatic **image resizing & transformations**
- Lightweight preview images (250x250 optimized thumbnails)

---

### 🗺️ Geospatial & Maps Integration
- **MapTiler API** for maps & geocoding
- Converts addresses into **GeoJSON coordinates**
- Interactive **3D globe experience**
- Dynamic markers with:
  - Hover-based popups
  - Responsive scaling
  - Auto-centering logic

---

### ⭐ Review & Rating System
- Users can add reviews with **1–5 star ratings**
- Integrated **Starability.css** for UI
- Visual star-based feedback system
- Mongoose middleware ensures:
  - Automatic deletion of related reviews

---

### 🔐 Authentication & Authorization
- Secure login/signup using **Passport.js**
- Role-based permissions:
  - Only listing owner can edit/delete
  - Only review author can delete reviews
- Smart redirect after login
- Protected routes via middleware:
  - `isLoggedIn`
  - `isOwner`
  - `isReviewAuthor`

---

### ✉️ User Feedback System
- Flash messages using **connect-flash**
- Real-time alerts:
  - Login success
  - Logout confirmation
  - CRUD operation feedback

---

## 🛡️ Permissions Matrix

| Feature   | View | Create | Edit | Delete |
|----------|------|--------|------|--------|
| Listings | Public | User | Owner | Owner |
| Reviews  | Public | User | — | Author |

---

## 🛠️ Tech Stack

### 💻 Backend
- Node.js
- Express.js

### 🗄️ Database
- MongoDB
- Mongoose

### 🔐 Authentication
- Passport.js

### ☁️ Cloud Services
- Cloudinary (Image Hosting)
- MapTiler API (Maps & Geocoding)

### 🎨 Frontend
- EJS
- Bootstrap 5
- Starability.css

### 🧰 Middleware & Tools
- Multer
- Multer-Storage-Cloudinary
- Joi (Validation)
- Connect-Flash

---

## 📸 Screenshots

| Index Page | Show Page |
|------------|-----------|
| ![Index Page](assets/index.png) | ![Show Page](assets/show.png) |

| Review Page | Map on Show Page |
|------------|------------|
| ![Review Page](assets/review.png) | ![Map on Show Page](assets/show2.png) |

| Create Listing Page | Edit Page |
|------------|-----------|
| ![Create Listing Page](assets/createListing.png) | ![Edit Page](assets/edit.png) |

| Signup Page | Login Page |
|------------|------------|
| ![Signup Page](assets/signup.png) | ![Login Page](assets/login.png) |

| Delete Account Page | Confirm Delete Page |
|------------|------------|
| ![Delete Account Page](assets/delete.png) | ![Confirm Delete Page](assets/confirmDelete.png) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/techxkirti/Wanderlust.git
cd Wanderlust
```

### 2️⃣ Install Dependencies
```bash
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

```env
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

MAPTILER_API_KEY=your_maptile_api_key

SESSION_SECRET=your_secret
```

---

### 4️⃣ Database Setup

Make sure MongoDB is running:

```bash
mongodb://127.0.0.1:27017/wanderlust
```

Seed initial data:

```bash
node init/index.js
```

---

### 5️⃣ Run Application

```bash
node app.js
```

Visit:
```
http://localhost:8080/listings
```




# Wanderlust ✈️

Wanderlust is a full-stack web application inspired by Airbnb. It allows users to list, explore, and review unique travel stays around the world. The project follows the **MVC (Model-View-Controller)** architecture for clean and scalable code.

## 🚀 Current Phase: Geospatial Integration & UI Enhancement

The project has successfully moved beyond basic CRUD operations and is currently in the **Interactive Mapping & Geospatial Integration** phase.

### What's been achieved:
- **Backend Geocoding**: Integrated `@maptiler/client` to convert address strings into GeoJSON coordinates during listing creation.
- **3D Interactive Globe**: Implemented a cinematic 3D globe view with a "Milky Way" galaxy background for a premium user experience.
- **Dynamic Marker UI**: 
  - Added responsive red markers with custom scaling.
  - Developed **Hover-to-Reveal** popup logic for markers using JavaScript event listeners.
- **Frontend Refinement**: Custom CSS for map containers including rounded corners, glassmorphism shadows, and auto-centering.

### Technical Stack (This Phase):
- **API**: MapTiler Cloud (Maps & Geocoding)
- **Library**: MapTiler SDK JS (v3.x)
- **Logic**: Async/Await Node.js controllers for coordinate fetching.


## ✨ Features

### ☁️ Cloud Image Management (New!)
- **Cloudinary Integration**: Fully integrated Cloudinary for professional image hosting and management.
- **Multer Storage**: Implemented `multer` and `multer-storage-cloudinary` to handle `multipart/form-data` seamlessly during listing creation and updates.
- **Image Transformations**: Implemented server-side image resizing. The edit form automatically requests a **250x250 cropped version** from Cloudinary to provide a lightweight preview without sacrificing performance.

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
- **Cloud-Powered Forms**: Enhanced Create and Edit forms that now support **direct file uploads** to Cloudinary instead of just URL strings.
- **Dynamic Image Previews**: The Edit page now features a **real-time thumbnail preview** of the currently uploaded image, automatically resized via Cloudinary transformations for faster loading.
- **Currency Formatting**: Prices are automatically formatted to the Indian Rupee (INR) system.

### 💬 Review System
- **Rating & Comments**: Users can leave ratings (1-5 stars) and text reviews on listings.
- **Validation**: Server-side validation for reviews and listings using **Joi**.
- **Cleanup**: Mongoose middleware automatically deletes all associated reviews when a listing is removed.

## 🛡️ Permissions Matrix

| Feature | View | Create | Edit/Update | Delete | Image Upload |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Listings** | Public | Registered User | Owner Only | Owner Only | Cloudinary (via Multer) |
| **Reviews** | Public | Registered User | N/A | Author Only | N/A |

### 🔒 Access Control Highlights
- **Server-Side Protection**: Uses `isLoggedIn`, `isOwner`, and `isReviewAuthor` middleware to block unauthorized API requests.
- **UI Logic**: "Edit" and "Delete" buttons are conditionally rendered, appearing only for the authorized owner/author.
- **Secure Uploads**: Image uploads are restricted to logged-in users and validated via `multer-storage-cloudinary` to ensure only supported formats (JPG, PNG, JPEG) are stored.

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Cloud Storage**: Cloudinary (Image Hosting)
- **Middleware**: Multer, Multer-Storage-Cloudinary
- **Database**: MongoDB, Mongoose
- **Authentication**: Passport.js
- **Frontend**: EJS, Bootstrap 5, Starability.css
- **Validation**: Joi (Schema Validation)

---

## 📸 Screenshots

| Index Page | Show Page |
|------------|-----------|
| ![Index Page](assets/index.png) | ![Show Page](assets/show.png) |

| Review Page | Edit Page |
|------------|------------|
| ![Review Page](assets/review.png) | ![Edit Page](assets/edit.png) |

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

## ⚙️ Installation & Setup

To get a local copy up and running, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/techxkirti/Wanderlust.git
   cd Wanderlust
2. **Install Dependencies**
   ```bash
   # Installs all required packages including Cloudinary, Multer, and Passport
      npm install
3. **Environment Configuration**
- Create a file named `.env` in the root directory.
- Add your **Cloudinary credentials** and any other secrets (**Note:** Do NOT commit this file to Git):

```env
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
```
4. **Database Setup**
- Ensure MongoDB is installed and running on your machine.
- The app default connection is: mongodb://127.0.0.1:27017/wanderlust
- Seed Initial Data: To populate the database with sample listings, run:
   ```bash
   node init/index.js
5. **Start and View the Application**
- Run the server:
   ```bash
   node app.js
- Open your browser and navigate to: http://localhost:8080/listings
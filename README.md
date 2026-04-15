# Wanderlust ✈️🌍  
A full-stack Airbnb-inspired web application where users can explore, create, and review travel listings with secure authentication, cloud image uploads, and interactive maps.

🔗 **Live Demo**: https://wanderlust-1-qo2x.onrender.com/listings  

---

## ⚡ Overview  

Wanderlust is a production-ready travel listing platform built using the **MVC architecture**.  
It allows users to discover destinations, share listings, and interact through reviews — all within a secure and responsive system.

Beyond standard CRUD operations, the application integrates:
- Authentication & authorization
- Cloud-based media handling
- Location-based services
- Advanced UI features like search and category filtering

---

## ✨ Key Features  

### 🏠 Listings Platform  
- Create, edit, and delete listings  
- View all listings with clean UI  
- Detailed listing page with:
  - Image  
  - Description  
  - Price  
  - Location with map  

---

### 🔍 Search & Category Filters *(Custom Feature)*  
- Search listings by keywords  
- Filter listings based on categories  
- Enhances user experience and discoverability  

---

### 🔐 Authentication & Authorization  
- Secure user authentication using Passport.js  
- Signup, Login, Logout  
- **Signout (Account Deletion)** *(Custom Feature)*  
  - Permanently deletes user from database  

**Access Control:**
- Only listing owners can edit/delete listings  
- Only review authors can delete reviews  

---

### 🖼️ Cloud Image Uploads  
- Cloudinary integration for image storage  
- Multer for handling file uploads  
- Image preview during edit  

---

### 💬 Review System  
- Add reviews with ratings and comments  
- Linked to both users and listings  
- Cascade deletion when a listing is removed  

---

### 🗺️ Maps & Geolocation  
- MapTiler integration  
- Convert location → coordinates  
- Display interactive map on listing page  

---

### 🎨 UI & UX Enhancements *(Custom Work)*  
- Responsive design using Bootstrap  
- Improved layout and visual hierarchy  
- Flash messages for user feedback  
- Clean navigation and user flow  

---

### ✅ Data Validation & Security  
- Joi validation for listings and reviews  
- Prevents invalid submissions  
- Session-based authentication  

---

## 💡 Highlights  

- Designed using **MVC architecture** for scalability and maintainability  
- Implements **secure authentication & role-based authorization**  
- Integrates **third-party services (Cloudinary, MapTiler)**  
- Includes **custom features beyond tutorial scope** (search, filters, account deletion)  
- Built with focus on **real-world usability and clean UI/UX** 

---

## 🏗️ Tech Stack  

| Layer       | Technology |
|------------|-----------|
| Backend     | Node.js, Express.js |
| Database    | MongoDB, Mongoose |
| Frontend    | EJS, Bootstrap 5 |
| Auth        | Passport.js |
| File Upload | Multer, Cloudinary |
| Validation  | Joi |
| Maps        | MapTiler |

---

## 🛡️ Permissions  

| Resource  | Action        | Access |
|----------|--------------|--------|
| Listings | View          | Public |
| Listings | Create        | Logged-in Users |
| Listings | Edit/Delete   | Owner Only |
| Reviews  | Create        | Logged-in Users |
| Reviews  | Delete        | Author Only |

---

## 🌐 Deployment  

- **Hosting**: Render  
- **Database**: MongoDB Atlas  
- **Image Storage**: Cloudinary  

🔗 https://wanderlust-1-qo2x.onrender.com/listings 

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

### 5️⃣ Seed initial data (Optional)

```bash
node init/index.js
```

---

### 6️⃣ Run Application

```bash
node app.js
```

🌐 Access the App

Open your browser and visit:
```
http://localhost:8080/listings
```
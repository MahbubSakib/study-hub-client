# Study Hub

**Study Hub** is an interactive web application designed to help students manage assignments, review submissions, and engage in collaborative learning.

## Live URL
[Study Hub Live](https://study-hub-483c1.web.app/)

## Purpose
Study Hub provides students with a streamlined platform to organize assignments, track progress, and collaborate with peers for a better learning experience.

## Key Features
- **Collaborative Learning**: Engage with peers, share insights, and solve challenges together.
- **Assignment Tracking**: Easily manage and track assignments with real-time updates.
- **Difficulty Level Filters**: Sort assignments based on difficulty levels (Easy, Medium, Hard).
- **Search Assignments**: Quickly find assignments by title or description.
- **Assignment Grading**: Review and grade submissions from other students.
- **Pagination**: Improved data navigation through paginated views.

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Express.js, Node.js
- **Database:** MongoDB
- **Authentication:** Firebase Authentication
- **Deployment:** Firebase (Frontend), Vercel (Backend)

## NPM Packages Used
- **React**: Component-based UI development.
- **Axios**: API request handling.
- **React Router**: Navigation and routing.
- **Tailwind CSS**: Modern styling and responsive design.
- **SweetAlert2**: Interactive alerts and pop-ups.
- **React Hot Toast**: Toast notifications.
- **MongoDB**: Database management (via backend).
- **Express.js**: Backend server framework.
- **Dotenv**: Environment variable management.

## Installation Guide
Follow these steps to install and run Study Hub locally:

### Prerequisites
Make sure you have the following installed:
- **Node.js** (latest stable version)
- **npm** or **yarn**
- **MongoDB** (for backend setup)

### Steps to Run the Project
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-username/study-hub.git
   cd study-hub
   ```
2. **Install Dependencies**:
   ```sh
   npm install
   ```
3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add required variables (e.g., database URL, Firebase config).

4. **Run the Frontend**:
   ```sh
   npm run dev
   ```

5. **Run the Backend**:
   ```sh
   cd backend
   npm install
   npm start
   ```

6. **Access the Application**:
   Open `http://localhost:3000` in your browser.

---
Now, you're all set to explore and contribute to Study Hub! 🚀

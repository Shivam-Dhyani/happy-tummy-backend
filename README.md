

# Happy Tummy Backend [[Live Link](https://dev-happy-tummy-api.onrender.com/)]  

The **Happy Tummy Backend** is the server-side application that powers the Happy Tummy app. It provides APIs for managing tiffin orders, tracking expenses, and enabling seamless communication between employees and managers.

## 🚀 Overview  

The backend handles the core functionalities of the Happy Tummy app, including:  

- Managing **Employee Tiffin Orders**  
- Supporting **CRUD Operations** for tiffin data  
- Providing a **centralized API layer** for the frontend  

---

## 🌐 Related Repository  

You can find the **Happy Tummy Frontend** repository here:  
[Happy Tummy Frontend Repository](https://github.com/Shivam-Dhyani/happy-tummy-frontend)  

---

## 📦 Project Setup  

### Prerequisites  

To run this backend locally, make sure you have:  

- [Node.js](https://nodejs.org/) installed  
- [MongoDB](https://www.mongodb.com/) set up locally or on the cloud  

### Installation  

1. Clone the repository:  

   ```bash  
   git clone https://github.com/Shivam-Dhyani/happy-tummy-backend  
   cd happy-tummy-backend  
   ```  

2. Install dependencies:  

   ```bash  
   npm install  
   ```  

3. Set up the `.env` file with the following:  

   ```env  
   PORT=5000  
   MONGO_URI=your-mongo-database-connection-string  
   ```  

4. Start the server:  

   ```bash  
   npm start  
   ```  

5. The backend will be running on `http://localhost:5000/` by default.  

---

## 🛠️ Built With  

- **Framework**: [Express.js](https://expressjs.com/)  
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)  
- **Environment Variables**: [dotenv](https://www.npmjs.com/package/dotenv)  
- **Validation**: [express-validator](https://express-validator.github.io/docs/)  
- **CORS Handling**: [CORS](https://www.npmjs.com/package/cors)  

---

## 🌟 API Endpoints  

Below are the key API endpoints provided by the backend:  

- **Employee Operations**:  
  - `POST /employees` - Add a new employee  
  - `GET /employees` - Get the list of employees 
  
- **Vegetable Selection**:  
  - `POST /vegetables/add` - Add a new vegetable for a specific date
  - `GET /vegetables` - Get vegetables based on date

- **Tiffin Orders**:  
  - `POST /tiffins` - Place a new tiffin order  
  - `GET /tiffins` - Retrieve all orders  

---

## 🛡️ Development Tools  

- **Hot Reloading**: [Nodemon](https://nodemon.io/)  

---

## 🤝 Contribution  

We welcome contributions to improve the **Happy Tummy Backend**! To contribute:  

1. Fork the repository  
2. Create a feature branch: `git checkout -b feature-name`  
3. Commit your changes: `git commit -m "Add a new feature"`  
4. Push the branch: `git push origin feature-name`  
5. Open a Pull Request  

---

## ❤️ Acknowledgments  

Special thanks to everyone contributing to making organizations more efficient with **Happy Tummy**.  

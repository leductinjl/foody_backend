# 🍔 Foody Backend - Food Delivery API

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)

A robust backend API for the Foody food delivery application, built with Node.js and Express.js. This API powers the mobile application's core functionality, handling user authentication, restaurant management, order processing, and more.

## 🚀 Features

- **User Management**
  - Secure authentication with JWT
  - User registration and profile management
  - Role-based access control

- **Restaurant Management**
  - CRUD operations for restaurants
  - Menu management
  - Category handling

- **Order System**
  - Order creation and processing
  - Order status tracking
  - Order history management

- **Search & Filtering**
  - Advanced search functionality
  - Filtering by categories, price, ratings
  - Location-based services

## 🛠️ Technical Stack

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - JWT for authentication
  - Mongoose for database modeling

- **API Features**
  - RESTful API design
  - Input validation
  - Error handling
  - Rate limiting
  - CORS support

- **Development Tools**
  - ESLint
  - Nodemon for development
  - Postman for API testing
  - Winston for logging

## 🎯 Project Goals

This backend project was developed with the following objectives:
- Create a scalable and maintainable API
- Implement secure authentication and authorization
- Ensure high performance and reliability
- Follow RESTful API best practices
- Provide comprehensive documentation

## 💻 Installation

1. Clone the repository
```bash
git clone https://github.com/leductinjl/foody_backend.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Start the production server
```bash
npm start
# or
yarn start
```

## 📚 API Documentation

The API documentation is available at `/api-docs` when running the server in development mode.

### Key Endpoints

- **Authentication**
  - POST `/api/auth/register` - User registration
  - POST `/api/auth/login` - User login
  - GET `/api/auth/profile` - Get user profile

- **Restaurants**
  - GET `/api/restaurants` - Get all restaurants
  - GET `/api/restaurants/:id` - Get restaurant details
  - POST `/api/restaurants` - Create new restaurant
  - PUT `/api/restaurants/:id` - Update restaurant
  - DELETE `/api/restaurants/:id` - Delete restaurant

- **Orders**
  - POST `/api/orders` - Create new order
  - GET `/api/orders` - Get user orders
  - GET `/api/orders/:id` - Get order details
  - PUT `/api/orders/:id/status` - Update order status

## 📚 Learning Outcomes

Through this project, I have gained:
- Experience with Node.js and Express.js
- Understanding of RESTful API design
- Database modeling with MongoDB
- Authentication and authorization implementation
- API documentation practices
- Error handling and logging
- Performance optimization
- Security best practices

## 🔍 Future Improvements

- Implement real-time features with WebSocket
- Add payment gateway integration
- Enhance search functionality with Elasticsearch
- Implement caching with Redis
- Add more comprehensive testing
- Improve API documentation
- Implement rate limiting
- Add monitoring and analytics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any inquiries or feedback, please reach out to:
- Email: [leductin.ld@gmail.com](mailto:leductin.ld@gmail.com)
- GitHub: [leductinjl](https://github.com/leductinjl) 
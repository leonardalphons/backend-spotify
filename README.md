# 🎵 Spotify Backend Clone

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge)
![REST API](https://img.shields.io/badge/REST_API-02569B?style=for-the-badge)

A production-ready backend inspired by Spotify, built using **Node.js**, **Express**, and **MongoDB**.

Designed with scalable architecture, secure authentication, media uploads, playlist management, and RESTful API principles.

</div>

---

# 📖 Overview

Spotify Backend Clone is a scalable REST API that powers a music streaming application.

The backend handles:

- User Authentication
- Song Management
- Album Management
- Playlist Management
- Artist Information
- Media Uploads
- JWT Authorization
- Cloud Storage
- Secure API Design

The project follows a modular architecture, making it easy to maintain, extend, and deploy.

---

# 🚀 Features

## Authentication

- User Registration
- Secure Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Token Verification

---

## User Management

- Create User
- Login
- User Profile
- Update Profile
- Authentication Middleware

---

## Song Management

- Upload Songs
- Fetch Songs
- Delete Songs
- Song Metadata
- Artist Information

---

## Album Management

- Create Album
- Update Album
- Delete Album
- Album Artwork
- Retrieve Album Songs

---

## Playlist Management

- Create Playlist
- Add Songs
- Remove Songs
- User Playlists
- Playlist Details

---

## Media Uploads

- Audio Upload
- Cover Image Upload
- Cloudinary Integration
- Multer File Handling

---

## Security

- JWT Authentication
- Password Encryption
- Protected Routes
- Environment Variables
- Request Validation

---

# 🏗 Project Architecture

```
                Client

                  │

        REST API Requests

                  │

          Express Server

                  │

     ┌────────────┼────────────┐

 Authentication   Controllers   Middleware

     │               │              │

     └────────────┼────────────┘

            Business Logic

                  │

             Mongoose Models

                  │

              MongoDB Atlas

                  │

             Cloudinary Storage
```

---

# 🛠 Tech Stack

| Category          | Technology |
| ----------------- | ---------- |
| Runtime           | Node.js    |
| Framework         | Express.js |
| Database          | MongoDB    |
| ODM               | Mongoose   |
| Authentication    | JWT        |
| Password Security | bcrypt     |
| File Upload       | Multer     |
| Cloud Storage     | Cloudinary |
| Environment       | dotenv     |
| API Testing       | Postman    |

---

# 📂 Folder Structure

```
Spotify-Backend
│
├── src
│   ├── config
│   │      database.js
│   │      cloudinary.js
│   │
│   ├── controllers
│   │      auth.controller.js
│   │      song.controller.js
│   │      album.controller.js
│   │      playlist.controller.js
│   │
│   ├── middleware
│   │      auth.middleware.js
│   │      multer.middleware.js
│   │
│   ├── models
│   │      User.js
│   │      Song.js
│   │      Album.js
│   │      Playlist.js
│   │
│   ├── routes
│   │      auth.routes.js
│   │      song.routes.js
│   │      album.routes.js
│   │      playlist.routes.js
│   │
│   ├── utils
│   │
│   ├── app.js
│   │
│   └── server.js
│
├── public
│
├── package.json
│
└── README.md
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/spotify-backend.git
```

Move inside project

```bash
cd spotify-backend
```

Install dependencies

```bash
npm install
```

Create Environment File

```env
PORT=

MONGODB_URI=

JWT_SECRET=

JWT_EXPIRY=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

Start Development Server

```bash
npm run dev
```

Production

```bash
npm start
```

---

# 🔐 Authentication Flow

```
Register

↓

Password Hashing

↓

Database Storage

↓

Login

↓

Password Verification

↓

JWT Generation

↓

Protected Routes

↓

Authenticated User
```

---

# 📦 Database Models

## User

```
_id
username
email
password
profilePicture
createdAt
updatedAt
```

---

## Song

```
_id
title
artist
album
coverImage
audioUrl
duration
genre
createdAt
```

---

## Album

```
_id
title
artist
coverImage
songs[]
createdAt
```

---

## Playlist

```
_id
name
owner
songs[]
createdAt
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |
| GET    | /api/auth/profile  |

---

## Songs

| Method | Endpoint      |
| ------ | ------------- |
| POST   | /api/song     |
| GET    | /api/song     |
| GET    | /api/song/:id |
| DELETE | /api/song/:id |

---

## Albums

| Method | Endpoint       |
| ------ | -------------- |
| POST   | /api/album     |
| GET    | /api/album     |
| GET    | /api/album/:id |
| DELETE | /api/album/:id |

---

## Playlist

| Method | Endpoint          |
| ------ | ----------------- |
| POST   | /api/playlist     |
| GET    | /api/playlist     |
| PUT    | /api/playlist/:id |
| DELETE | /api/playlist/:id |

---

# 📤 File Upload Pipeline

```
Client

↓

Multer

↓

Validation

↓

Cloudinary Upload

↓

Secure URL

↓

MongoDB Storage
```

---

# 🧪 Testing

Use Postman to test all endpoints.

Example

```
POST /api/auth/register

POST /api/auth/login

GET /api/song

POST /api/song
```

---

# 🚀 Deployment

Deploy using

- Render
- Railway
- DigitalOcean
- AWS EC2
- Docker

Database

- MongoDB Atlas

Storage

- Cloudinary

---

# 🔮 Future Improvements

- Spotify OAuth
- Refresh Tokens
- Email Verification
- Password Reset
- Search API
- Like Songs
- Recently Played
- Queue System
- Recommendation Engine
- Redis Caching
- Rate Limiting
- Swagger Documentation
- Docker Support
- CI/CD Pipeline
- Unit Testing
- WebSocket Integration
- Music Streaming Analytics

---

# 📚 Learning Outcomes

This project demonstrates practical experience with:

- REST API Design
- Backend Architecture
- Authentication
- Authorization
- MongoDB Relationships
- File Upload Handling
- Cloud Storage
- Secure API Development
- Environment Configuration
- Production Deployment

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 📄 License

This project is intended for educational purposes.

It is **not affiliated with or endorsed by Spotify**. Spotify is a trademark of Spotify AB.

---

# 👨‍💻 Author

**Your Name**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

Portfolio: https://yourportfolio.com

---

⭐ If you found this project helpful, consider giving it a star!

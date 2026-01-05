# PRODUCT STORE

Single Page Application for browsing products with authentication and reviews.
Data is fetched from the DummyJSON API.

## About the Project

This project is a React-based SPA featuring:

- User authentication
- Products list and product details page
- Reviews section
- Responsive UI built with Material UI
- Modular architecture and modern React best practices

## Technologies & Dependencies

- React
- Redux Toolkit
- RTK Query
- React Router
- Material UI (MUI)
- Webpack

## How to Run Locally

- Install dependencies:

```npm install```

- Start development server:

```npm run dev```

- Build for production:

```npm run build```

## Deployment

Netlify:  
https://my-store-3.netlify.app


## Project Structure

```text
spa-react-3/
├── src/
│   ├── api/                         -RTK Query API layer
│   │   ├── api.const.js            -API-related constants and env variables
│   │   ├── authApi.js              -Authentication endpoints
│   │   ├── baseApi.js              -Base RTK Query API instance
│   │   └── productsApi.js          -Products endpoints
│   ├── components/                 -Reusable UI components
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   └── Header/
│   │       └── Header.jsx
│   ├── layouts/                   -Application layout
│   │   └── MainLayout.jsx
│   ├── pages/                     -Application pages
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   └── Products/
│   │       ├── ProductDetails.jsx
│   │       └── Products.jsx
│   ├── routes/                   -Routing logic                   
│   │   └── ProtectedRoute.jsx
│   └── store/                    -Redux store and slices
│       ├── auth/
│       │   └── authSlice.js
│       └── index.js              -Redux store configuration
├── App.jsx
├── index.css
└── main.jsx
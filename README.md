# 🍽️ Ravenous - Restaurant Search App

A React app that searches for restaurants using the Yelp API.

This was a project for the skill path `Create a Front-End App with React` on Codecademy.com

## Features
- Search restaurants by cuisine and location
- Sort by Best Match, Highest Rated, or Most Reviewed
- Form validation (requires both search term and location)
- Real-time API integration with loading states

## Setup
1. Install dependencies: `npm install`
2. Create `.env` file with your Yelp API key: VITE_YELP_API_KEY=your_api_key_here
3. Start dev server: `npm run dev`

NOTE: to use without API key. Set `useAPIData = false` in App.jsx to use mock data

## Usage
Enter a cuisine type and location, then click Search. Use the filter buttons to sort results.
Example: Search Resturants: `British`, Where?: `Soho London`

## Tech Stack
- React + Vite
- Yelp Fusion API

## Project Structure
```
src/
├── components/
│   ├── Searchbar.jsx    # Search form with validation
│   ├── BusinessList.jsx # Restaurant list container
│   └── Business.jsx    # Individual restaurant card
├── utils/
│   └── YelpApi.jsx     # API integration
└── App.jsx             # Main component
```

## Development
- API key is protected via environment variables
- Form validation prevents empty searches


## What I Learned
This project taught me the fundamentals of HTTP requests and API integration. It also helped me to cement my understanding of React components props and passing data around the application. 

I learned how to make GET requests to external APIs, handle authentication with Bearer tokens, and process JSON responses. Most importantly, I discovered how to parse complex API data structures - extracting nested objects like `business.location.address1` and arrays like `business.categories[0].title` to display meaningful information to users. The experience of working with real API data versus static mock data gave me a solid understanding of how modern web applications consume and transform external data sources

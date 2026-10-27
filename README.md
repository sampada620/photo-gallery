# Photo Gallery

A photo gallery built with React, Vite and Tailwind CSS for the Celebrare frontend internship pre-screening.

## Features
- Fetches 30 photos from the Picsum Photos API, with loading and error states
- Responsive grid: 4 columns on desktop, 2 on tablet, 1 on mobile
- Real-time search by author name (filters already-fetched data)
- Favourites managed with `useReducer`, persisted in `localStorage`
- Custom hook `useFetchPhotos`, with `useCallback` and `useMemo` in the gallery

## Run locally
npm install
npm run dev

## Tech
React, Vite, Tailwind CSS

# Photo Gallery

A responsive photo gallery built with **React, Vite and Tailwind CSS** for the Celebrare frontend internship pre-screening.

## Features

- Fetches 30 photos from the [Picsum Photos API](https://picsum.photos/) with loading and error states
- Responsive grid: 4 columns on desktop, 2 on tablet, 1 on mobile
- Real-time search by author name (filters the already-fetched data, no extra API calls)
- Favourites managed with `useReducer` and persisted in `localStorage`
- Custom hook `useFetchPhotos`, with `useCallback` and `useMemo` in the gallery

## Project structure

```
src/
  components/
    Gallery.jsx        # search, filtering, grid
    PhotoCard.jsx      # single photo card with favourite button
  hooks/
    useFetchPhotos.js  # returns { photos, loading, error }
  reducers/
    favouritesReducer.js
  App.jsx
  main.jsx
```

## Getting started

```bash
npm install
npm run dev
```

## Tech stack

React, Vite, Tailwind CSS (no component libraries)

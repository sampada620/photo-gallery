import { useReducer, useEffect, useState, useCallback, useMemo } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import {
  favouritesReducer,
  getInitialFavourites,
  STORAGE_KEY,
  TOGGLE_FAVOURITE,
} from "../reducers/favouritesReducer";
import PhotoCard from "./PhotoCard";

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState("");
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    null,
    getInitialFavourites
  );

  // favourites change hote hi localStorage mein save
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
    } catch {
      /* storage full / blocked: app phir bhi chalta rahe */
    }
  }, [favourites]);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleToggle = useCallback((id) => {
    dispatch({ type: TOGGLE_FAVOURITE, id });
  }, []);

  const filteredPhotos = useMemo(() => {
    const query = search.trim().toLowerCase();
    return photos.filter((p) => p.author.toLowerCase().includes(query));
  }, [photos, search]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center" role="status">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500" />
        <span className="sr-only">Loading photos...</span>
      </div>
    );
  }

  if (error) {
    return (
      <p role="alert" className="mt-10 text-center text-red-600">
        Could not load photos: {error}
      </p>
    );
  }

  return (
    <main className="mx-auto max-w-6xl p-4">
      <h1 className="mb-4 text-2xl font-bold text-gray-900">Photo Gallery</h1>
      <input
        type="search"
        value={search}
        onChange={handleSearch}
        placeholder="Search by author..."
        aria-label="Search photos by author"
        className="mb-6 w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />

      {filteredPhotos.length === 0 ? (
        <p className="text-center text-gray-500">No photos found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggle={handleToggle}
            />
          ))}
        </div>
      )}
    </main>
  );
}
import { memo } from "react";

function PhotoCard({ photo, isFavourite, onToggle }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
      <img
        src={`https://picsum.photos/id/${photo.id}/400/300`}
        alt={`Photo by ${photo.author}`}
        loading="lazy"
        className="h-48 w-full object-cover"
      />
      <div className="flex items-center justify-between p-3">
        <span className="truncate font-medium text-gray-800">
          {photo.author}
        </span>
        <button
          type="button"
          onClick={() => onToggle(photo.id)}
          aria-pressed={isFavourite}
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
          className={`rounded-full p-1 transition ${
            isFavourite ? "text-red-500" : "text-gray-400 hover:text-red-400"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill={isFavourite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}

export default memo(PhotoCard);
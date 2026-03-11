const MapPin = ({ className = "" }: { className?: string }) => (
  <svg
    width="16"
    height="20"
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 0C3.58 0 0 3.58 0 8c0 5.25 7.13 11.38 7.43 11.64a.75.75 0 001.14 0C8.87 19.38 16 13.25 16 8c0-4.42-3.58-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"
      fill="currentColor"
    />
  </svg>
);

export default MapPin;

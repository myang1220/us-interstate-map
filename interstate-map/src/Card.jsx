function Card({ interstate_num }) {
  return (
    <div className="bg-black items-center justify-center p-2 text-white">
      {interstate_num}
      <button className="text-white focus:outline-none w-full flex justify-end">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default Card;

function Card({ interstate_num, removeNum }) {
  return (
    <div className="bg-gray-400 rounded p-2 text-white font-semibold flex items-center">
      <div>I-{interstate_num}</div>
      <button
        onClick={() => removeNum(interstate_num)}
        className="cursor-pointer text-white focus:outline-none flex justify-end pl-2"
      >
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
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default Card;

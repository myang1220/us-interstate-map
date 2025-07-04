import { useState } from "react";
import Dropdown from "./Dropdown";
import Card from "./Card";

function Sidebar({ onFilter }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [even, setEven] = useState(true);
  const [odd, setOdd] = useState(true);
  const [major, setMajor] = useState(false);
  const [nums, setNums] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addNum();
    }
  };

  const handleReset = (e) => {
    setFilterValue("");
    setEven(true);
    setOdd(true);
    setMajor(false);
    setNums([]);
    onFilter([], true, true, false);
  };

  const handleEvenToggle = (e) => {
    const newEven = !even;
    setEven(newEven);
    onFilter(nums, newEven, odd, major);
  };

  const handleOddToggle = (e) => {
    const newOdd = !odd;
    setOdd(newOdd);
    onFilter(nums, even, newOdd, major);
  };

  const handleMajorToggle = (e) => {
    const newMajor = !major;
    setMajor(newMajor);
    onFilter(nums, even, odd, newMajor);
  };

  const addNum = (e) => {
    if (filterValue.trim() !== "" && !nums.includes(filterValue)) {
      setFilterValue("");
      const newNums = [...nums, filterValue];
      setNums(newNums);
      onFilter(newNums, even, odd, major);
    }
  };

  const removeNum = (numToRemove) => {
    const newNums = nums.filter((num) => num !== numToRemove);
    setNums(newNums);
    onFilter(newNums, even, odd, major);
  };

  return (
    <>
      <div
        className={`absolute top-2 left-0 h-10 w-10 z-30 bg-gray-600/90 rounded-tr rounded-br transform transition-transform duration-300 ease-in-out
                    ${
                      menuOpen ? "-translate-x-full" : "translate-x-0 delay-300"
                    }`}
      >
        <button
          onClick={toggleMenu}
          className="cursor-pointer text-gray-300 hover:text-white focus:outline-none h-full w-full flex items-center justify-center"
        >
          <svg
            className="h-6 w-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full lg:w-1/4 md:w-1/3 sm:w-1/2 w-3/4 z-30 bg-gray-600/90 
                    transform transition-transform duration-300 ease-in-out flex flex-col  overflow-y-auto flex-grow
                    ${
                      menuOpen ? "translate-x-0 delay-300" : "-translate-x-full"
                    }`}
      >
        <div className="flex justify-end pt-2 pr-2">
          <button
            onClick={toggleMenu}
            className="cursor-pointer text-gray-300 hover:text-white focus:outline-none pr-2 pt-2"
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

        <div className="px-4 pb-4">
          <h2 className="text-white md:text-xl text-base font-bold mb-4">
            Interactive US Interstates Map
          </h2>

          {/* Filter controls */}
          <div className="flex flex-col gap-2">
            <label className="block text-white md:text-sm text-xs">
              Enter Interstate Number
            </label>
            <div className="flex sm:flex-row flex-col gap-2 mb-2">
              <input
                type="text"
                value={filterValue}
                onChange={handleFilterChange}
                onKeyDown={handleKeyDown}
                placeholder="e.g. 95"
                className="bg-gray-700 text-white px-3 py-2 w-full rounded"
              />
              <div className="flex flex-row gap-2">
                <button
                  onClick={addNum}
                  className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add
                </button>

                <button
                  onClick={handleReset}
                  className="cursor-pointer bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="flex flex-row gap-2 flex-wrap mb-2">
              {nums.map((num) => (
                <Card
                  key={num}
                  interstate_num={num}
                  removeNum={removeNum}
                ></Card>
              ))}
            </div>

            <label className="inline-flex items-center cursor-pointer gap-3">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={major}
                onChange={handleMajorToggle}
              />
              <div className="relative w-11 h-6 flex-shrink-0 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="sm:text-sm text-xs font-medium text-gray-300">
                View Only Major Artery Interstates
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer gap-3">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={even}
                onChange={handleEvenToggle}
              />
              <div className="relative w-11 h-6 flex-shrink-0 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="sm:text-sm text-xs font-medium text-gray-300 dark:text-gray-300">
                View Even-Numbered Interstates
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer gap-3">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={odd}
                onChange={handleOddToggle}
              />
              <div className="relative w-11 h-6 flex-shrink-0 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="sm:text-sm text-xs font-medium text-gray-300 dark:text-gray-300">
                View Odd-Numbered Interstates
              </span>
            </label>
            <div className="flex flex-col flex-grow mt-4">
              <Dropdown dropdown_num={1} />
              <Dropdown dropdown_num={2} />
              <Dropdown dropdown_num={3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

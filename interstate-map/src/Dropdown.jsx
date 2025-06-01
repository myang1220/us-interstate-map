import { useState } from "react";

function Dropdown({ dropdown_num }) {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const getIcon = () => {
    switch (dropdown_num) {
      case 1:
        return (
          <div className="w-6 h-6">
            <img
              src="/us-interstate-map/interstate.svg"
              alt="Interstate Shield"
              className="h-6 w-6"
            />
          </div>
        );
      case 2:
        return (
          <div className="w-6 h-6">
            {" "}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
              <line
                x1="12"
                y1="16"
                x2="12"
                y2="12"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="12"
                y1="8"
                x2="12"
                y2="8.01"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        );
      case 3:
        return (
          <div className="w-6 h-6">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="14"
                rx="1"
                strokeWidth="1.5"
              />
              <rect x="4" y="5" width="16" height="10" strokeWidth="0.75" />
              <path d="M8 21h8" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 17v4" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        );
      default:
        return;
    }
  };

  const getTitle = () => {
    switch (dropdown_num) {
      case 1:
        return "US Interstate Numbering System";
      case 2:
        return "About This Website";
      case 3:
        return "Credits & Technologies";
      default:
        return "Information";
    }
  };

  return (
    <div
      onClick={toggleDropdown}
      className="cursor-pointer w-full sm:text-sm text-xs font-medium text-gray-300 hover:text-white"
    >
      <div className="w-full flex flex-row py-2 items-center">
        {/*Insert SVG Icon here */}
        <div className="p-2 mr-2 rounded bg-gray-700/90">{getIcon()}</div>
        <div className="w-full flex sm:text-lg text-base font-bold">
          {getTitle()}
        </div>
        <button className="focus:outline-none h-full flex-grow justify-end">
          <svg
            className={`h-6 w-6 transition-transform duration-300 ${
              dropdown ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {dropdown_num === 1 && (
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            dropdown ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="sm:text-sm text-xs font-medium text-gray-300 bg-gray-700/90 p-4 rounded">
            Though there are numerous exceptions, the US Interstate Highway
            System follows the following rules:
            <ul className="list-disc pl-6 mt-2">
              <li>
                Even-numbered Interstates run east-west (e.g., I-10, I-80).
              </li>
              <li>
                Odd-numbered Interstates run north-south (e.g., I-5, I-95).
              </li>
              <li>
                Lower numbers start in the south and west, increasing as you go
                north and east.
              </li>
              <li>Primary Interstates are one- or two-digit numbers.</li>
              <li>
                Major arteries typically end in 0 (east-west) or 5
                (north-south), e.g., I-10, I-95.
              </li>
              <li>
                Auxiliary Interstates have three digits and typically serve
                cities (e.g., I-405).
                <ul className="list-disc pl-6">
                  <li>
                    If the first digit is even, the route bypasses or loops
                    around a city.
                  </li>
                  <li>
                    If the first digit is odd, the route spurs into a city.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
      {dropdown_num === 2 && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            dropdown ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="sm:text-sm text-xs font-medium text-gray-300 bg-gray-700/90 p-4 rounded">
            This website was created to help teach the intricacies of the US
            Interstate Numbering System. While many often know about the vague
            existence of explanation behind the numbering of interstates, it can
            be difficult to immediately and intuitively understand the web of
            highways that connect US residents across the country. <br />
            <br /> This website offers an opportunity to both explore the system
            interactively and develop an appreciation for the scale of labor
            required to build such a system. The filtration system is intended
            to allow for users to build a better understanding of local
            infrastructure and to reduce the reliance on GPS systems, by
            showcasing how different interstates connect.
          </div>
        </div>
      )}
      {dropdown_num === 3 && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            dropdown ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="sm:text-sm text-xs font-medium text-gray-300 bg-gray-700/90 p-4 rounded">
            <ul className="list-disc pl-6 mt-2">
              <li>
                This project was inspired by a similar project by Curt Arledge.
              </li>
              <li>The geojson data is downloaded from AZGeo Open Data.</li>
              <li>
                The framework for the website was created using Vite, and uses
                Mapbox GL JS for the interactive map.
              </li>
              <li>
                The tech stack used includes HTML/CSS, JS, React, and
                TailwindCSS.
              </li>
              <li>This project was created by Moses Yang!</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;

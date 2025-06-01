import { useState, useEffect } from "react";
import "./App.css";
import Map from "./Map";
import Sidebar from "./Sidebar";

function App() {
  const [geojsonData, setGeojsonData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // fetch data from data.geojson at the app level
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/us-interstate-map/filtered_1.geojson");
        const data = await response.json();

        // set color
        data.features = data.features.map((feature) => {
          let color;
          const original = feature.properties.BASENAME;
          let basename = feature.properties.BASENAME;
          const len = basename.length;

          if (len === 1) {
            color = "#CC2F00";
            feature.properties.color = color;
            return feature;
          } else if (len >= 3) {
            if (basename === "69C" || basename === "69E") {
              color = "#007CB5";
              feature.properties.color = color;
              return feature;
            }
            basename = basename.substring(1, 3);
          }

          const first = basename.charAt(0);

          switch (first) {
            case "0":
              color = "#CC2F00";
              break;
            case "1":
              color = "#DB6600";
              break;
            case "2":
              color = "#E39E00";
              break;
            case "3":
              color = "#76B80D";
              break;
            case "4":
              color = "#007668";
              break;
            case "5":
              color = "#006486";
              break;
            case "6":
              color = "#007CB5";
              break;
            case "7":
              color = "#465AB2";
              break;
            case "8":
              color = "#873B9C";
              break;
            case "9":
              color = "#FFC0CB";
              break;
            default:
              color = "#FFFFFF";
              break;
          }

          // Add color to feature properties
          feature.properties.color = color;
          return feature;
        });
        console.log(data.features);

        setGeojsonData(data);
        setFilteredData(data);
        setIsLoading(false);
        console.log("here", filteredData);
      } catch (error) {
        console.error("Error loading GeoJSON:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // filter function based off of criteria
  const filterMap = (interstate_nums, even, odd, major) => {
    if (!geojsonData) return;

    let filtered = {
      type: "FeatureCollection",
      features: geojsonData.features,
    };

    if (!even || !odd) {
      // include evens
      if (even) {
        console.log("even");
        filtered.features = filtered.features.filter(
          (feature) => parseInt(feature.properties.BASENAME) % 2 === 0
        );
        setFilteredData(filtered);
      }

      // include odds
      else if (odd) {
        console.log("odd");
        filtered.features = filtered.features.filter(
          (feature) => parseInt(feature.properties.BASENAME) % 2 !== 0
        );
        setFilteredData(filtered);
      }

      // otherwise don't filter
      else {
        filtered.features = [];
        setFilteredData(filtered);
      }
    }

    // filter for only major primary interstates
    if (major) {
      const major = [
        "10",
        "20",
        "30",
        "40",
        "70",
        "80",
        "90",
        "5",
        "15",
        "25",
        "35",
        "45",
        "55",
        "65",
        "75",
        "85",
        "95",
      ];

      filtered.features = filtered.features.filter((feature) =>
        major.includes(feature.properties.BASENAME)
      );
      setFilteredData(filtered);
    }

    // general filter if interstate_num provided
    // TODO: modify this to include the functionality for multiple highways (like using the skills card with x)
    if (interstate_nums && interstate_nums.length > 0) {
      filtered.features = filtered.features.filter((feature) =>
        interstate_nums.includes(feature.properties.BASENAME)
      );
    }
    setFilteredData(filtered);
  };

  return (
    <div className="relative h-screen w-full">
      <Map filteredData={filteredData} isLoading={isLoading} />
      <Sidebar onFilter={filterMap} />
    </div>
  );
}

export default App;

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXlhbmcxMjIwIiwiYSI6ImNtYjl6YThleTEwbXYya3B2YmJwcXNhajYifQ._zTWjc4_uxMlY-mq2LUGqA";

function Map({ filteredData, isLoading }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  // Initialize map
  useEffect(() => {
    if (!containerRef.current) return;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-97, 38],
      zoom: 4,
      minZoom: window.innerWidth < 768 ? 2.8 : 3.8,
    });

    // disable map rotation using right click + drag
    map.dragRotate.disable();

    // disable map rotation using touch rotation gesture
    map.touchZoomRotate.disableRotation();

    mapRef.current = map;

    // Add resize handler
    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      map.remove();
    };
  }, []);

  // Add or update GeoJSON source/layer when data changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !filteredData || isLoading) return;

    if (map.getSource("geojson-data")) {
      map.getSource("geojson-data").setData(filteredData);
    } else {
      map.on("load", () => {
        if (map.getSource("geojson-data")) return; // safety check
        map.addSource("geojson-data", {
          type: "geojson",
          data: filteredData,
        });

        map.addLayer({
          id: "geojson-layer",
          type: "line",
          source: "geojson-data",
          paint: {
            // "line-color": "#FF0000",
            "line-color": ["get", "color"],
            "line-width": 3,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
        });
      });
    }
  }, [filteredData, isLoading]);

  return <div ref={containerRef} className="w-full h-screen" />;
}

export default Map;

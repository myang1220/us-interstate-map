import json

# Load the GeoJSON file
with open("interstate-map/public/data.geojson", "r") as f:
    data = json.load(f)

# Filter features by a property NAME
filtered_features = [
    feature for feature in data["features"]
    if "I-" in feature["properties"].get("NAME") or "US Hwy" in feature["properties"].get("NAME")
]

# Create new FeatureCollection
filtered_geojson = {
    "type": "FeatureCollection",
    "features": filtered_features
}

# Save the filtered GeoJSON
with open("filtered.geojson", "w") as f:
    json.dump(filtered_geojson, f)

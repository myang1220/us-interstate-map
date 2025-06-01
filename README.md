# Interactive US Interstate Map

An interactive map to view all US Interstates, to help with teaching the US Interstate Highway Numbering System and general geography.

Inspired by https://interstate-map.com/# by Curt Arledge.

### About

This website was created to help teach the intricacies of the US Interstate Numbering System. While many often know about the vague existence of a method to the madness, it can be difficult to immediately and intuitively understand the web of highways that connect US residents across the country. This website offers an opportunity to both explore the system interactively and develop an appreciation for the scale of labor required to build such a system. The filtration system is intended to allow for users to build a better understanding of local infrastructure and to reduce the reliance on GPS systems, by showcasing how different interstates connect.

### Citations

- Used https://azgeo-open-data-agic.hub.arcgis.com/datasets/c8201b9c76db43c89af8d5ead4d35e14_2/explore for primary road geojson data
- Used https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/?step=7 for mapbox in vite-react app
- Used https://mapshaper.org/ for minimizing data
- Used https://trycolors.com/palette/babjk8 for getting 10 color rainbow hexcodes
- Used https://en.wikipedia.org/wiki/Interstate_Highway_System for information about the US Interstate Highway Numbering System

### Known Bugs

- Some interstate data is not up to date, formatted differently, or incomplete, and thus does not map onto the mapbox map correctly

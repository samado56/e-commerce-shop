import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const highlightedCountries = [
  840, // USA
  250, // France
  724, // Spain
  504, // Morocco
  586, // Pakistan
  356, // India
  704, // Vietnam
  392, // Japan
  36, // Australia
  710, // South Africa
  124, // Canada
  170, // Colombia
];

export default function CustomerWorldMap() {
  return (
    <ComposableMap
      projectionConfig={{ scale: 200 }}
      style={{ width: "100%", height: "400px" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isHighlighted = highlightedCountries.includes(+geo.id);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isHighlighted ? "#00BFFF" : "#EAEAEC"}
                stroke="#FFFFFF"
                style={{ outline: "none" }}
              />
            );
          })
        }
      </Geographies>

      {/* Marker: Morocco (Rabat) */}
      <Marker coordinates={[-6.8498, 33.9716]}>
        <circle r={6} fill="#00BFFF" stroke="#fff" strokeWidth={2} />
      </Marker>
    </ComposableMap>
  );
}

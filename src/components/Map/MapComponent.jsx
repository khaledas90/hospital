import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = ({ position }) => {
  const [viewport, setViewport] = React.useState({
    latitude: position[0],
    longitude: position[1],
    zoom: 10,
    width: "100%",
    height: "400px",
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
      onViewportChange={(newViewport) => setViewport(newViewport)}
    >
      <Marker latitude={position[0]} longitude={position[1]}>
        <div>You are here</div>
      </Marker>
    </ReactMapGL>
  );
};

export default MapComponent;

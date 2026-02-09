"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customMarker = new L.Icon({
  iconUrl: "/images/marker.webp",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
});

export default function PropertyMap({ lat, lng }) {
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={16}
      className="h-full w-full rounded-lg"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[lat, lng]} icon={customMarker}>
        <Popup>
          <div className="text-sm">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Open in Google Maps
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

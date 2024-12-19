import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export default function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCuVDRgDETWrSPqs7Lg9-fhP5mhuKsieGk",
  });

  const position = { lat: -29.447204, lng: -51.973855 };

  return (
    <div className="w-full h-80">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: "Trevo BR 386",
                className: "mb-10 font-bold",
              },
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}

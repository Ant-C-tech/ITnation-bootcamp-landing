import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import "./Map.scss";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW50b25jaHl2aWtvdiIsImEiOiJja2ZucmFoamgwMHpoMnhwYTNsd3V4b2U5In0.ZrtnkAnphMsgcRykzVH9DA";

const Map = ({ controlElements, title, tip }) => {
  const controlElementsCollection = controlElements.map((item, index) => (
    <div className="map__elementWrapper" key={index}>
      <img className="map__controlElement" src={item} alt="sponsor logo" />
    </div>
  ));

  const mapContainer = useRef(null);

  const [mapData, setMapData] = useState({
    lng: 32,
    lat: 48.55,
    zoom: 5,
  });

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [mapData.lng, mapData.lat],
      zoom: mapData.zoom,
    });

    map.on("load", function () {
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        // Add an image to use as a custom marker
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);

          map.addSource("places", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {
                    description: `<div style="display:flex; align-items: center; justify-content: center; background:#EEE851; width: 50px; height:50px; border-radius:50%; margin:0 auto 20px; "><p  style="text-align: center; font-size: 26px;">58</p></div><br><p style="text-align: center; font-size: 25px;">Умеренный уровень</p><br><p style="text-align: center; font-size: 12px;">${Date()}</p><br><p style="text-align: center; font-size: 20px;">город Ивано-Франковск</p><br>`,
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [24.717, 48.917],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description: `<div style="display:flex; align-items: center; justify-content: center; background:#96D962; width: 50px; height:50px; border-radius:50%; margin:0 auto 20px; "><p  style="text-align: center; font-size: 26px;">20</p></div><br><p style="text-align: center; font-size: 25px;">Низкий уровень</p><br><p style="text-align: center; font-size: 12px;">${Date()}</p><br><p style="text-align: center; font-size: 20px;">город Киев</p><br>`,
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [30.5, 50.45],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description: `<div style="display:flex; align-items: center; justify-content: center; background:#96D962; width: 50px; height:50px; border-radius:50%; margin:0 auto 20px; "><p  style="text-align: center; font-size: 26px;">1</p></div><br><p style="text-align: center; font-size: 25px;">Низкий уровень</p><br><p style="text-align: center; font-size: 12px;">${Date()}</p><br><p style="text-align: center; font-size: 20px;">город Одесса</p><br>`,
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [30.717, 46.467],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description: `<div style="display:flex; align-items: center; justify-content: center; background:#96D962; width: 50px; height:50px; border-radius:50%; margin:0 auto 20px; "><p  style="text-align: center; font-size: 26px;">12</p></div><br><p style="text-align: center; font-size: 25px;">Низкий уровень</p><br><p style="text-align: center; font-size: 12px;">${Date()}</p><br><p style="text-align: center; font-size: 20px;">город Николаев</p><br>`,
                },
                  geometry: {
                    type: "Point",
                    coordinates: [32.0, 46.967],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description: `<div style="display:flex; align-items: center; justify-content: center; background:#EEE851; width: 50px; height:50px; border-radius:50%; margin:0 auto 20px; "><p  style="text-align: center; font-size: 26px;">58</p></div><br><p style="text-align: center; font-size: 25px;">Умеренный уровень</p><br><p style="text-align: center; font-size: 12px;">${Date()}</p><br><p style="text-align: center; font-size: 20px;">город Мелитополь, Запорожская область</p><br>`,
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [35.367, 46.817],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description: `<div style="display:flex; align-items: center; justify-content: center; background:#FF3030; width: 50px; height:50px; border-radius:50%; margin:0 auto 20px; "><p  style="text-align: center; font-size: 26px;">168</p></div><br><p style="text-align: center; font-size: 25px;">Высокий уровень</p><br><p style="text-align: center; font-size: 12px;">${Date()}</p><br><p style="text-align: center; font-size: 20px;">город Мариуполь, Донецкая область</p><br>`,
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [37.55, 47.117],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description: `<div style="display:flex; align-items: center; justify-content: center; background:#96D962; width: 50px; height:50px; border-radius:50%; margin:0 auto 20px; "><p  style="text-align: center; font-size: 26px;">13</p></div><br><p style="text-align: center; font-size: 25px;">Низкий уровень</p><br><p style="text-align: center; font-size: 12px;">${Date()}</p><br><p style="text-align: center; font-size: 20px;">город Харьков</p><br>`,
                                  },
                  geometry: {
                    type: "Point",
                    coordinates: [36.25, 50.0],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description: `<div style="display:flex; align-items: center; justify-content: center; background:#FF3030; width: 50px; height:50px; border-radius:50%; margin:0 auto 20px; "><p  style="text-align: center; font-size: 26px;">169</p></div><br><p style="text-align: center; font-size: 25px;">Высокий уровень</p><br><p style="text-align: center; font-size: 12px;">${Date()}</p><br><p style="text-align: center; font-size: 20px;">город Горловка, Донецкая область</p><br>`,

                  },
                  geometry: {
                    type: "Point",
                    coordinates: [38.033, 48.283],
                  },
                },
              ],
            },
          });

          // Add a layer showing the places.
          map.addLayer({
            id: "places",
            type: "symbol",
            source: "places",
            layout: {
              "icon-image": "custom-marker",
              "icon-allow-overlap": true,
            },
          });
        }
      );

      // Create a popup, but don't add it to the map yet.
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      map.on("mouseenter", "places", function (e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = "pointer";

        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
      });

      map.on("mouseleave", "places", function () {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });
    });

  }, []);

  return (
    <section className="map" id="aqIndex">
      <div className="container">
  <h2 className="map__title">{title}</h2>
        <div className="map__wrapper">
          <div className="map__mapboxAirQuality" ref={mapContainer}></div>
          {controlElementsCollection}
        </div>
        <p className="map__tip">{tip}</p>
      </div>
    </section>
  );
};
export default Map;

var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Boundary_2 = new ol.format.GeoJSON();
var features_Boundary_2 = format_Boundary_2.readFeatures(json_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_2.addFeatures(features_Boundary_2);
var lyr_Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_2, 
                style: style_Boundary_2,
                popuplayertitle: 'Boundary',
                interactive: true,
                title: '<img src="styles/legend/Boundary_2.png" /> Boundary'
            });
var format_Schools_3 = new ol.format.GeoJSON();
var features_Schools_3 = format_Schools_3.readFeatures(json_Schools_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_3.addFeatures(features_Schools_3);
var lyr_Schools_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_3, 
                style: style_Schools_3,
                popuplayertitle: 'Schools',
                interactive: true,
                title: '<img src="styles/legend/Schools_3.png" /> Schools'
            });
var format_Locations_4 = new ol.format.GeoJSON();
var features_Locations_4 = format_Locations_4.readFeatures(json_Locations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locations_4.addFeatures(features_Locations_4);
var lyr_Locations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locations_4, 
                style: style_Locations_4,
                popuplayertitle: 'Locations ',
                interactive: true,
                title: '<img src="styles/legend/Locations_4.png" /> Locations '
            });
var format_PublicBuildings_5 = new ol.format.GeoJSON();
var features_PublicBuildings_5 = format_PublicBuildings_5.readFeatures(json_PublicBuildings_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicBuildings_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicBuildings_5.addFeatures(features_PublicBuildings_5);
var lyr_PublicBuildings_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicBuildings_5, 
                style: style_PublicBuildings_5,
                popuplayertitle: 'Public Buildings',
                interactive: true,
                title: '<img src="styles/legend/PublicBuildings_5.png" /> Public Buildings'
            });
var format_ShoppingCentre_6 = new ol.format.GeoJSON();
var features_ShoppingCentre_6 = format_ShoppingCentre_6.readFeatures(json_ShoppingCentre_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShoppingCentre_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShoppingCentre_6.addFeatures(features_ShoppingCentre_6);
var lyr_ShoppingCentre_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShoppingCentre_6, 
                style: style_ShoppingCentre_6,
                popuplayertitle: 'Shopping Centre',
                interactive: true,
                title: '<img src="styles/legend/ShoppingCentre_6.png" /> Shopping Centre'
            });
var format_HealthcareFacilities_7 = new ol.format.GeoJSON();
var features_HealthcareFacilities_7 = format_HealthcareFacilities_7.readFeatures(json_HealthcareFacilities_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthcareFacilities_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthcareFacilities_7.addFeatures(features_HealthcareFacilities_7);
var lyr_HealthcareFacilities_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthcareFacilities_7, 
                style: style_HealthcareFacilities_7,
                popuplayertitle: 'Healthcare Facilities',
                interactive: true,
                title: '<img src="styles/legend/HealthcareFacilities_7.png" /> Healthcare Facilities'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Boundary_2.setVisible(true);lyr_Schools_3.setVisible(true);lyr_Locations_4.setVisible(true);lyr_PublicBuildings_5.setVisible(true);lyr_ShoppingCentre_6.setVisible(true);lyr_HealthcareFacilities_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_Boundary_2,lyr_Schools_3,lyr_Locations_4,lyr_PublicBuildings_5,lyr_ShoppingCentre_6,lyr_HealthcareFacilities_7];
lyr_Boundary_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Schools_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Photopath': 'Photopath', 'Status': 'Status', 'Type': 'Type', });
lyr_Locations_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_PublicBuildings_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'PathPhoto': 'PathPhoto', 'Status': 'Status', });
lyr_ShoppingCentre_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'PhotoPath': 'PhotoPath', });
lyr_HealthcareFacilities_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Photopath': 'Photopath', });
lyr_Boundary_2.set('fieldImages', {'id': '', 'Name': '', });
lyr_Schools_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Photopath': 'ExternalResource', 'Status': 'TextEdit', 'Type': 'TextEdit', });
lyr_Locations_4.set('fieldImages', {'id': '', 'Name': '', });
lyr_PublicBuildings_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'PathPhoto': 'ExternalResource', 'Status': 'TextEdit', });
lyr_ShoppingCentre_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'PhotoPath': 'TextEdit', });
lyr_HealthcareFacilities_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Photopath': 'ExternalResource', });
lyr_Boundary_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', });
lyr_Schools_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'Photopath': 'inline label - always visible', 'Status': 'no label', 'Type': 'no label', });
lyr_Locations_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_PublicBuildings_5.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'PathPhoto': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_ShoppingCentre_6.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'PhotoPath': 'no label', });
lyr_HealthcareFacilities_7.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'Photopath': 'no label', });
lyr_HealthcareFacilities_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
}); 
<!DOCTYPE html>
<html>
<head>
  <title>OpenLayers Interactive Routing</title>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@latest/ol.css" />
  <style>
    #map { width: 100%; height: 500px; }
    #info { margin: 8px 0; }
  </style>
</head>
<body>
  <div id="info">Click to set START point</div>
  <div id="map"></div>
  <script src="https://cdn.jsdelivr.net/npm/ol@latest/ol.js"></script>
  <script>
    // Replace this with your real OpenRouteService API key!
    const ORS_API_KEY = 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjkxNzY3Mzc5MTkyMTQ0NGZhMTlmNDQ0M2ZiY2RiNDVmIiwiaCI6Im11cm11cjY0In0=Y';

    // OpenLayers map setup
    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({ source: new ol.source.OSM() })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 2
      })
    });

    // Vector sources and layers for markers and route
    const markerSource = new ol.source.Vector();
    const markerLayer = new ol.layer.Vector({
      source: markerSource,
      style: function(feature) {
        return new ol.style.Style({
          image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({ color: feature.get('type') === 'start' ? 'green' : 'red' }),
            stroke: new ol.style.Stroke({ color: 'white', width: 2 })
          })
        });
      }
    });
    map.addLayer(markerLayer);

    const routeSource = new ol.source.Vector();
    const routeLayer = new ol.layer.Vector({
      source: routeSource,
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'blue',
          width: 4
        })
      })
    });
    map.addLayer(routeLayer);

    let startCoord = null;
    let endCoord = null;
    let clickCount = 0;

    const info = document.getElementById('info');

    // Listen for map clicks
    map.on('click', function(evt) {
      const coord = ol.proj.toLonLat(evt.coordinate);
      if (clickCount === 0) {
        // Set start point
        startCoord = coord;
        markerSource.clear();
        routeSource.clear();
        markerSource.addFeature(new ol.Feature({
          geometry: new ol.geom.Point(evt.coordinate),
          type: 'start'
        }));
        info.textContent = 'Click to set END point';
        clickCount = 1;
      } else if (clickCount === 1) {
        // Set end point and show route
        endCoord = coord;
        markerSource.addFeature(new ol.Feature({
          geometry: new ol.geom.Point(evt.coordinate),
          type: 'end'
        }));
        info.textContent = 'Fetching route...';
        getRoute(startCoord, endCoord);
        clickCount = 2;
      } else {
        // Reset and start again
        startCoord = null;
        endCoord = null;
        markerSource.clear();
        routeSource.clear();
        info.textContent = 'Click to set START point';
        clickCount = 0;
      }
    });

    async function getRoute(start, end) {
      const url = 'https://api.openrouteservice.org/v2/directions/driving-car/geojson';
      const body = { coordinates: [start, end] };
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': ORS_API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
        const data = await response.json();
        const format = new ol.format.GeoJSON();
        const features = format.readFeatures(data, {
          featureProjection: map.getView().getProjection()
        });
        routeSource.clear();
        routeSource.addFeatures(features);
        // Zoom to the route
        if (features.length > 0) {
          map.getView().fit(routeSource.getExtent(), { padding: [50, 50, 50, 50] });
        }
        info.textContent = 'Route shown! Click anywhere to start new route.';
      } catch (err) {
        info.textContent = 'Failed to fetch route. Try again.';
      }
    }
  </script>
</body>
</html>

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
lyr_Locations_4.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', });
lyr_PublicBuildings_5.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'PathPhoto': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_ShoppingCentre_6.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'PhotoPath': 'no label', });
lyr_HealthcareFacilities_7.set('fieldLabels', {'id': 'no label', 'Name': 'header label - always visible', 'Photopath': 'no label', });
lyr_HealthcareFacilities_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
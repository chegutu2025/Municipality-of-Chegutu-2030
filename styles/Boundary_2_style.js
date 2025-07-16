var size = 0;
var placement = 'point';

var style_Boundary_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "20.8px \'Vineta BT\', sans-serif";
    var labelFill = "#00060a";
    var bufferColor = "#97c097";
    var bufferWidth = 5.4;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Name") !== null && resolution > 0 && resolution < 16) {
        labelText = String(feature.get("Name"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,197,13,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.787999999999999}),fill: new ol.style.Fill({color: 'rgba(253,196,51,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

var mapSettiings = $.extend({
    mapSouce: new ol.source.OSM(),
    mapCenter: [0, 0],
    mapZoom: 5
}, mapOptions);
 
var accessibleSource = mapSettiings.mapSouce;
var accessibleLayers = [
    new ol.layer.Tile({
        source: accessibleSource
    })
];
var accessibleView = new ol.View({
    center: mapSettiings.mapCenter,//[0,0]
    zoom: mapSettiings.mapZoom
});
var map = new ol.Map({
    layers: accessibleLayers,
    target: mapSettiings.mapTarget,  //调用CommonVariable.js中的变量
    view: accessibleView
});
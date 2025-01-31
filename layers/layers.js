var wms_layers = [];


        var lyr_CartoDbPositron_0 = new ol.layer.Tile({
            'title': 'CartoDb Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_SoilType_1 = new ol.format.GeoJSON();
var features_SoilType_1 = format_SoilType_1.readFeatures(json_SoilType_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoilType_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoilType_1.addFeatures(features_SoilType_1);
var lyr_SoilType_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoilType_1, 
                style: style_SoilType_1,
                popuplayertitle: "Soil Type",
                interactive: true,
    title: 'Soil Type<br />\
    <img src="styles/legend/SoilType_1_0.png" /> CLAY<br />\
    <img src="styles/legend/SoilType_1_1.png" /> CLAY LOAM<br />\
    <img src="styles/legend/SoilType_1_2.png" /> LOAM<br />\
    <img src="styles/legend/SoilType_1_3.png" /> SANDY CLAY LOAM<br />'
        });
var format_MatiyariDam_2 = new ol.format.GeoJSON();
var features_MatiyariDam_2 = format_MatiyariDam_2.readFeatures(json_MatiyariDam_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MatiyariDam_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MatiyariDam_2.addFeatures(features_MatiyariDam_2);
var lyr_MatiyariDam_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MatiyariDam_2, 
                style: style_MatiyariDam_2,
                popuplayertitle: "MatiyariDam",
                interactive: true,
                title: '<img src="styles/legend/MatiyariDam_2.png" /> MatiyariDam'
            });
var format_Stream_order_3 = new ol.format.GeoJSON();
var features_Stream_order_3 = format_Stream_order_3.readFeatures(json_Stream_order_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stream_order_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stream_order_3.addFeatures(features_Stream_order_3);
var lyr_Stream_order_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stream_order_3, 
                style: style_Stream_order_3,
                popuplayertitle: "Stream_order",
                interactive: true,
                title: '<img src="styles/legend/Stream_order_3.png" /> Stream_order'
            });
var format_RiperianHealthQualiyIndexRHQI_4 = new ol.format.GeoJSON();
var features_RiperianHealthQualiyIndexRHQI_4 = format_RiperianHealthQualiyIndexRHQI_4.readFeatures(json_RiperianHealthQualiyIndexRHQI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiperianHealthQualiyIndexRHQI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiperianHealthQualiyIndexRHQI_4.addFeatures(features_RiperianHealthQualiyIndexRHQI_4);
var lyr_RiperianHealthQualiyIndexRHQI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiperianHealthQualiyIndexRHQI_4, 
                style: style_RiperianHealthQualiyIndexRHQI_4,
                popuplayertitle: "Riperian Health Qualiy Index (RHQI)",
                interactive: true,
                title: '<img src="styles/legend/RiperianHealthQualiyIndexRHQI_4.png" /> Riperian Health Qualiy Index (RHQI)'
            });
var format_DegradedHotspots_5 = new ol.format.GeoJSON();
var features_DegradedHotspots_5 = format_DegradedHotspots_5.readFeatures(json_DegradedHotspots_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DegradedHotspots_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DegradedHotspots_5.addFeatures(features_DegradedHotspots_5);
var lyr_DegradedHotspots_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DegradedHotspots_5, 
                style: style_DegradedHotspots_5,
                popuplayertitle: "Degraded Hotspots",
                interactive: true,
                title: '<img src="styles/legend/DegradedHotspots_5.png" /> Degraded Hotspots'
            });
var format_CWCStations_6 = new ol.format.GeoJSON();
var features_CWCStations_6 = format_CWCStations_6.readFeatures(json_CWCStations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CWCStations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CWCStations_6.addFeatures(features_CWCStations_6);
var lyr_CWCStations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CWCStations_6, 
                style: style_CWCStations_6,
                popuplayertitle: "CWC Stations",
                interactive: true,
                title: '<img src="styles/legend/CWCStations_6.png" /> CWC Stations'
            });

lyr_CartoDbPositron_0.setVisible(true);lyr_SoilType_1.setVisible(true);lyr_MatiyariDam_2.setVisible(true);lyr_Stream_order_3.setVisible(true);lyr_RiperianHealthQualiyIndexRHQI_4.setVisible(true);lyr_DegradedHotspots_5.setVisible(true);lyr_CWCStations_6.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_SoilType_1,lyr_MatiyariDam_2,lyr_Stream_order_3,lyr_RiperianHealthQualiyIndexRHQI_4,lyr_DegradedHotspots_5,lyr_CWCStations_6];
lyr_SoilType_1.set('fieldAliases', {'Soil type': 'Soil type', });
lyr_MatiyariDam_2.set('fieldAliases', {'Name of Da': 'Name of Da', });
lyr_Stream_order_3.set('fieldAliases', {'Stream ord': 'Stream ord', });
lyr_RiperianHealthQualiyIndexRHQI_4.set('fieldAliases', {'RHQI_2000': 'RHQI_2000', 'Rating': 'Rating', 'Reach_ID': 'Reach_ID', 'RHQI_2020': 'RHQI_2020', 'Class_2020': 'Class_2020', });
lyr_DegradedHotspots_5.set('fieldAliases', {'RHQI_2000': 'RHQI_2000', 'Rating': 'Rating', 'Reach_ID': 'Reach_ID', 'RHQI_2020': 'RHQI_2020', 'Class_2020': 'Class_2020', });
lyr_CWCStations_6.set('fieldAliases', {'Station': 'Station', });
lyr_SoilType_1.set('fieldImages', {'Soil type': 'TextEdit', });
lyr_MatiyariDam_2.set('fieldImages', {'Name of Da': 'TextEdit', });
lyr_Stream_order_3.set('fieldImages', {'Stream ord': 'TextEdit', });
lyr_RiperianHealthQualiyIndexRHQI_4.set('fieldImages', {'RHQI_2000': 'TextEdit', 'Rating': 'TextEdit', 'Reach_ID': 'TextEdit', 'RHQI_2020': 'TextEdit', 'Class_2020': 'TextEdit', });
lyr_DegradedHotspots_5.set('fieldImages', {'RHQI_2000': 'TextEdit', 'Rating': 'TextEdit', 'Reach_ID': 'TextEdit', 'RHQI_2020': 'TextEdit', 'Class_2020': 'TextEdit', });
lyr_CWCStations_6.set('fieldImages', {'Station': 'TextEdit', });
lyr_SoilType_1.set('fieldLabels', {'Soil type': 'no label', });
lyr_MatiyariDam_2.set('fieldLabels', {'Name of Da': 'inline label - visible with data', });
lyr_Stream_order_3.set('fieldLabels', {'Stream ord': 'inline label - visible with data', });
lyr_RiperianHealthQualiyIndexRHQI_4.set('fieldLabels', {'RHQI_2000': 'inline label - visible with data', 'Rating': 'inline label - visible with data', 'Reach_ID': 'inline label - visible with data', 'RHQI_2020': 'inline label - visible with data', 'Class_2020': 'inline label - visible with data', });
lyr_DegradedHotspots_5.set('fieldLabels', {'RHQI_2000': 'inline label - visible with data', 'Rating': 'inline label - visible with data', 'Reach_ID': 'inline label - visible with data', 'RHQI_2020': 'inline label - visible with data', 'Class_2020': 'inline label - visible with data', });
lyr_CWCStations_6.set('fieldLabels', {'Station': 'no label', });
lyr_CWCStations_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
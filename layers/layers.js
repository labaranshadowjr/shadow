var wms_layers = [];

var format_street_0 = new ol.format.GeoJSON();
var features_street_0 = format_street_0.readFeatures(json_street_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_street_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_street_0.addFeatures(features_street_0);
var lyr_street_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_street_0, 
                style: style_street_0,
                interactive: true,
                title: '<img src="styles/legend/street_0.png" /> street'
            });
var format_school_1 = new ol.format.GeoJSON();
var features_school_1 = format_school_1.readFeatures(json_school_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_school_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_school_1.addFeatures(features_school_1);
var lyr_school_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_school_1, 
                style: style_school_1,
                interactive: true,
                title: '<img src="styles/legend/school_1.png" /> school'
            });
var format_railroad_2 = new ol.format.GeoJSON();
var features_railroad_2 = format_railroad_2.readFeatures(json_railroad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railroad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railroad_2.addFeatures(features_railroad_2);
var lyr_railroad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railroad_2, 
                style: style_railroad_2,
                interactive: true,
                title: '<img src="styles/legend/railroad_2.png" /> railroad'
            });
var format_minor_road_3 = new ol.format.GeoJSON();
var features_minor_road_3 = format_minor_road_3.readFeatures(json_minor_road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_minor_road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_minor_road_3.addFeatures(features_minor_road_3);
var lyr_minor_road_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_minor_road_3, 
                style: style_minor_road_3,
                interactive: true,
                title: '<img src="styles/legend/minor_road_3.png" /> minor_road'
            });
var format_major_road_4 = new ol.format.GeoJSON();
var features_major_road_4 = format_major_road_4.readFeatures(json_major_road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_major_road_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_major_road_4.addFeatures(features_major_road_4);
var lyr_major_road_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_major_road_4, 
                style: style_major_road_4,
                interactive: true,
                title: '<img src="styles/legend/major_road_4.png" /> major_road'
            });
var format_hotel_5 = new ol.format.GeoJSON();
var features_hotel_5 = format_hotel_5.readFeatures(json_hotel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hotel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hotel_5.addFeatures(features_hotel_5);
var lyr_hotel_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hotel_5, 
                style: style_hotel_5,
                interactive: true,
                title: '<img src="styles/legend/hotel_5.png" /> hotel'
            });
var format_hospital_6 = new ol.format.GeoJSON();
var features_hospital_6 = format_hospital_6.readFeatures(json_hospital_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospital_6.addFeatures(features_hospital_6);
var lyr_hospital_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hospital_6, 
                style: style_hospital_6,
                interactive: true,
                title: '<img src="styles/legend/hospital_6.png" /> hospital'
            });
var format_filling_station_7 = new ol.format.GeoJSON();
var features_filling_station_7 = format_filling_station_7.readFeatures(json_filling_station_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_filling_station_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_filling_station_7.addFeatures(features_filling_station_7);
var lyr_filling_station_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_filling_station_7, 
                style: style_filling_station_7,
                interactive: true,
                title: '<img src="styles/legend/filling_station_7.png" /> filling_station'
            });
var format_boundary_8 = new ol.format.GeoJSON();
var features_boundary_8 = format_boundary_8.readFeatures(json_boundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_8.addFeatures(features_boundary_8);
var lyr_boundary_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundary_8, 
                style: style_boundary_8,
                interactive: true,
                title: '<img src="styles/legend/boundary_8.png" /> boundary'
            });
var format_Restaurant_9 = new ol.format.GeoJSON();
var features_Restaurant_9 = format_Restaurant_9.readFeatures(json_Restaurant_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restaurant_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurant_9.addFeatures(features_Restaurant_9);
var lyr_Restaurant_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Restaurant_9, 
                style: style_Restaurant_9,
                interactive: true,
                title: '<img src="styles/legend/Restaurant_9.png" /> Restaurant'
            });

lyr_street_0.setVisible(true);lyr_school_1.setVisible(true);lyr_railroad_2.setVisible(true);lyr_minor_road_3.setVisible(true);lyr_major_road_4.setVisible(true);lyr_hotel_5.setVisible(true);lyr_hospital_6.setVisible(true);lyr_filling_station_7.setVisible(true);lyr_boundary_8.setVisible(true);lyr_Restaurant_9.setVisible(true);
var layersList = [lyr_street_0,lyr_school_1,lyr_railroad_2,lyr_minor_road_3,lyr_major_road_4,lyr_hotel_5,lyr_hospital_6,lyr_filling_station_7,lyr_boundary_8,lyr_Restaurant_9];
lyr_street_0.set('fieldAliases', {'Id': 'Id', 'Street': 'Street', });
lyr_school_1.set('fieldAliases', {'Id': 'Id', 'school': 'school', });
lyr_railroad_2.set('fieldAliases', {'Id': 'Id', });
lyr_minor_road_3.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_major_road_4.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_hotel_5.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_hospital_6.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_filling_station_7.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_boundary_8.set('fieldAliases', {'Id': 'Id', });
lyr_Restaurant_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', });
lyr_street_0.set('fieldImages', {'Id': 'Range', 'Street': 'TextEdit', });
lyr_school_1.set('fieldImages', {'Id': 'Range', 'school': 'TextEdit', });
lyr_railroad_2.set('fieldImages', {'Id': 'Range', });
lyr_minor_road_3.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr_major_road_4.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr_hotel_5.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr_hospital_6.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr_filling_station_7.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr_boundary_8.set('fieldImages', {'Id': 'Range', });
lyr_Restaurant_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', });
lyr_street_0.set('fieldLabels', {'Id': 'inline label', 'Street': 'header label', });
lyr_school_1.set('fieldLabels', {'Id': 'no label', 'school': 'header label', });
lyr_railroad_2.set('fieldLabels', {'Id': 'no label', });
lyr_minor_road_3.set('fieldLabels', {'Id': 'no label', 'name': 'header label', });
lyr_major_road_4.set('fieldLabels', {'Id': 'no label', 'name': 'header label', });
lyr_hotel_5.set('fieldLabels', {'Id': 'no label', 'name': 'no label', });
lyr_hospital_6.set('fieldLabels', {'Id': 'no label', 'name': 'header label', });
lyr_filling_station_7.set('fieldLabels', {'Id': 'no label', 'name': 'header label', });
lyr_boundary_8.set('fieldLabels', {'Id': 'header label', });
lyr_Restaurant_9.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'header label', });
lyr_Restaurant_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
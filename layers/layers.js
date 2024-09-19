ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([110.292756, -8.176914, 110.989510, -7.733990]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Village_Insights_2 = new ol.format.GeoJSON();
var features_Village_Insights_2 = format_Village_Insights_2.readFeatures(json_Village_Insights_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Village_Insights_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Village_Insights_2.addFeatures(features_Village_Insights_2);
var lyr_Village_Insights_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Village_Insights_2, 
                style: style_Village_Insights_2,
                popuplayertitle: "Village_Insights",
                interactive: true,
    title: 'Village_Insights<br />\
    <img src="styles/legend/Village_Insights_2_0.png" /> 0 - 0,358<br />\
    <img src="styles/legend/Village_Insights_2_1.png" /> 0,358 - 0,5<br />\
    <img src="styles/legend/Village_Insights_2_2.png" /> 0,5 - 0,737<br />\
    <img src="styles/legend/Village_Insights_2_3.png" /> 0,737 - 0,947<br />\
    <img src="styles/legend/Village_Insights_2_4.png" /> 0,947 - 1<br />'
        });
var format_idn_admbnda_adm3_bps_20200401_3 = new ol.format.GeoJSON();
var features_idn_admbnda_adm3_bps_20200401_3 = format_idn_admbnda_adm3_bps_20200401_3.readFeatures(json_idn_admbnda_adm3_bps_20200401_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_idn_admbnda_adm3_bps_20200401_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_idn_admbnda_adm3_bps_20200401_3.addFeatures(features_idn_admbnda_adm3_bps_20200401_3);
var lyr_idn_admbnda_adm3_bps_20200401_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_idn_admbnda_adm3_bps_20200401_3, 
                style: style_idn_admbnda_adm3_bps_20200401_3,
                popuplayertitle: "idn_admbnda_adm3_bps_20200401",
                interactive: false,
                title: '<img src="styles/legend/idn_admbnda_adm3_bps_20200401_3.png" /> idn_admbnda_adm3_bps_20200401'
            });
var format_Isochrone_GunungKidul_4 = new ol.format.GeoJSON();
var features_Isochrone_GunungKidul_4 = format_Isochrone_GunungKidul_4.readFeatures(json_Isochrone_GunungKidul_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Isochrone_GunungKidul_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrone_GunungKidul_4.addFeatures(features_Isochrone_GunungKidul_4);
var lyr_Isochrone_GunungKidul_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochrone_GunungKidul_4, 
                style: style_Isochrone_GunungKidul_4,
                popuplayertitle: "Isochrone_GunungKidul",
                interactive: false,
    title: 'Isochrone_GunungKidul<br />\
    <img src="styles/legend/Isochrone_GunungKidul_4_0.png" /> 10 - 10<br />\
    <img src="styles/legend/Isochrone_GunungKidul_4_1.png" /> 10 - 20<br />\
    <img src="styles/legend/Isochrone_GunungKidul_4_2.png" /> 20 - 30<br />'
        });
var format_Healthcare_Telemedicine_5 = new ol.format.GeoJSON();
var features_Healthcare_Telemedicine_5 = format_Healthcare_Telemedicine_5.readFeatures(json_Healthcare_Telemedicine_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Healthcare_Telemedicine_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Healthcare_Telemedicine_5.addFeatures(features_Healthcare_Telemedicine_5);
var lyr_Healthcare_Telemedicine_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Healthcare_Telemedicine_5, 
                style: style_Healthcare_Telemedicine_5,
                popuplayertitle: "Healthcare_Telemedicine",
                interactive: true,
    title: 'Healthcare_Telemedicine<br />\
    <img src="styles/legend/Healthcare_Telemedicine_5_0.png" /> 1078 - 2051<br />\
    <img src="styles/legend/Healthcare_Telemedicine_5_1.png" /> 2051 - 3024<br />\
    <img src="styles/legend/Healthcare_Telemedicine_5_2.png" /> 3024 - 3997<br />\
    <img src="styles/legend/Healthcare_Telemedicine_5_3.png" /> 3997 - 4970<br />\
    <img src="styles/legend/Healthcare_Telemedicine_5_4.png" /> 4970 - 5943<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Village_Insights_2.setVisible(true);lyr_idn_admbnda_adm3_bps_20200401_3.setVisible(true);lyr_Isochrone_GunungKidul_4.setVisible(false);lyr_Healthcare_Telemedicine_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_Village_Insights_2,lyr_idn_admbnda_adm3_bps_20200401_3,lyr_Isochrone_GunungKidul_4,lyr_Healthcare_Telemedicine_5];
lyr_Village_Insights_2.set('fieldAliases', {'ADM4_EN': 'ADM4_EN', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM3_EN': 'ADM3_EN', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'Education ': 'Education ', 'Health Acc': 'Health Acc', 'Economic P': 'Economic P', 'Population': 'Population', });
lyr_idn_admbnda_adm3_bps_20200401_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'ADM3ALT2EN': 'ADM3ALT2EN', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Isochrone_GunungKidul_4.set('fieldAliases', {'nama': 'nama', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Healthcare_Telemedicine_5.set('fieldAliases', {'Healthcare_Name': 'Healthcare_Name', 'latitude': 'latitude', 'longitude': 'longitude', 'Internet Quality': 'Internet Quality', 'Registered (Registered with SATUSEHAT Portal or Has RME Status)': 'Registered (Registered with SATUSEHAT Portal or Has RME Status)', 'Integrated (Has Been Provided Production API)': 'Integrated (Has Been Provided Production API)', 'Connected (Sending Data to SATUSEHAT)': 'Connected (Sending Data to SATUSEHAT)', 'Patient Visits': 'Patient Visits', 'ICD Condition': 'ICD Condition', 'Observation': 'Observation', 'Actions': 'Actions', 'Diet Summary': 'Diet Summary', 'Prescription': 'Prescription', 'Medicine Redemption': 'Medicine Redemption', 'Service Request': 'Service Request', 'Specimen': 'Specimen', 'Diagnostic Report': 'Diagnostic Report', 'Allergy Intolerance': 'Allergy Intolerance', 'Clinical Impression': 'Clinical Impression', 'Treatment Plan': 'Treatment Plan', 'Questionnaire Response': 'Questionnaire Response', 'Number of Stages': 'Number of Stages', 'Population_Coverage': 'Population_Coverage', });
lyr_Village_Insights_2.set('fieldImages', {'ADM4_EN': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'Education ': 'TextEdit', 'Health Acc': 'TextEdit', 'Economic P': 'TextEdit', 'Population': 'TextEdit', });
lyr_idn_admbnda_adm3_bps_20200401_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'ADM3ALT2EN': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Isochrone_GunungKidul_4.set('fieldImages', {'nama': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Healthcare_Telemedicine_5.set('fieldImages', {'Healthcare_Name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Internet Quality': 'TextEdit', 'Registered (Registered with SATUSEHAT Portal or Has RME Status)': 'CheckBox', 'Integrated (Has Been Provided Production API)': 'CheckBox', 'Connected (Sending Data to SATUSEHAT)': 'CheckBox', 'Patient Visits': 'CheckBox', 'ICD Condition': 'CheckBox', 'Observation': 'CheckBox', 'Actions': 'TextEdit', 'Diet Summary': 'TextEdit', 'Prescription': 'TextEdit', 'Medicine Redemption': 'TextEdit', 'Service Request': 'TextEdit', 'Specimen': 'TextEdit', 'Diagnostic Report': 'TextEdit', 'Allergy Intolerance': 'TextEdit', 'Clinical Impression': 'TextEdit', 'Treatment Plan': 'TextEdit', 'Questionnaire Response': 'TextEdit', 'Number of Stages': 'Range', 'Population_Coverage': 'Range', });
lyr_Village_Insights_2.set('fieldLabels', {'ADM4_EN': 'inline label - visible with data', 'ADM4_PCODE': 'inline label - visible with data', 'ADM3_EN': 'inline label - visible with data', 'ADM2_EN': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'Education ': 'inline label - visible with data', 'Health Acc': 'inline label - visible with data', 'Economic P': 'inline label - visible with data', 'Population': 'inline label - visible with data', });
lyr_idn_admbnda_adm3_bps_20200401_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM3_EN': 'no label', 'ADM3_PCODE': 'no label', 'ADM3_REF': 'no label', 'ADM3ALT1EN': 'no label', 'ADM3ALT2EN': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Isochrone_GunungKidul_4.set('fieldLabels', {'nama': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Healthcare_Telemedicine_5.set('fieldLabels', {'Healthcare_Name': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Internet Quality': 'inline label - visible with data', 'Registered (Registered with SATUSEHAT Portal or Has RME Status)': 'inline label - visible with data', 'Integrated (Has Been Provided Production API)': 'inline label - visible with data', 'Connected (Sending Data to SATUSEHAT)': 'inline label - visible with data', 'Patient Visits': 'inline label - visible with data', 'ICD Condition': 'inline label - visible with data', 'Observation': 'inline label - visible with data', 'Actions': 'inline label - visible with data', 'Diet Summary': 'inline label - visible with data', 'Prescription': 'inline label - visible with data', 'Medicine Redemption': 'inline label - visible with data', 'Service Request': 'inline label - visible with data', 'Specimen': 'inline label - visible with data', 'Diagnostic Report': 'inline label - visible with data', 'Allergy Intolerance': 'inline label - visible with data', 'Clinical Impression': 'inline label - visible with data', 'Treatment Plan': 'inline label - visible with data', 'Questionnaire Response': 'inline label - visible with data', 'Number of Stages': 'inline label - visible with data', 'Population_Coverage': 'inline label - visible with data', });
lyr_Healthcare_Telemedicine_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
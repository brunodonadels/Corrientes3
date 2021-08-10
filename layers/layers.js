var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PoblacinEconmicamenteActiva_3 = new ol.format.GeoJSON();
var features_PoblacinEconmicamenteActiva_3 = format_PoblacinEconmicamenteActiva_3.readFeatures(json_PoblacinEconmicamenteActiva_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinEconmicamenteActiva_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinEconmicamenteActiva_3.addFeatures(features_PoblacinEconmicamenteActiva_3);
var lyr_PoblacinEconmicamenteActiva_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinEconmicamenteActiva_3, 
                style: style_PoblacinEconmicamenteActiva_3,
                interactive: true,
    title: 'Población Económicamente Activa<br />\
    <img src="styles/legend/PoblacinEconmicamenteActiva_3_0.png" /> 1.400 - 13.000<br />\
    <img src="styles/legend/PoblacinEconmicamenteActiva_3_1.png" /> 13.001 - 25.000<br />\
    <img src="styles/legend/PoblacinEconmicamenteActiva_3_2.png" /> 25.001 - 55.000<br />\
    <img src="styles/legend/PoblacinEconmicamenteActiva_3_3.png" /> 55.001 o más<br />'
        });
var format_PoblacinpordepartamentoINDEC_4 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_4 = format_PoblacinpordepartamentoINDEC_4.readFeatures(json_PoblacinpordepartamentoINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_4.addFeatures(features_PoblacinpordepartamentoINDEC_4);
var lyr_PoblacinpordepartamentoINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_4, 
                style: style_PoblacinpordepartamentoINDEC_4,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_0.png" /> 2.450 - 22.250<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_1.png" /> 22.251 - 40.675<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_2.png" /> 40.676 - 89.960<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_3.png" /> 89.961 o más<br />'
        });
var format_ViviendasreasRuralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasreasRuralesINDEC_5 = format_ViviendasreasRuralesINDEC_5.readFeatures(json_ViviendasreasRuralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasreasRuralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasreasRuralesINDEC_5.addFeatures(features_ViviendasreasRuralesINDEC_5);
var lyr_ViviendasreasRuralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasreasRuralesINDEC_5, 
                style: style_ViviendasreasRuralesINDEC_5,
                interactive: true,
    title: 'Viviendas Áreas Rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasreasRuralesINDEC_5_0.png" /> 500 - 900<br />\
    <img src="styles/legend/ViviendasreasRuralesINDEC_5_1.png" /> 901 - 1.950<br />\
    <img src="styles/legend/ViviendasreasRuralesINDEC_5_2.png" /> 1.951 - 2.450<br />\
    <img src="styles/legend/ViviendasreasRuralesINDEC_5_3.png" /> 2.451 - 4.000<br />\
    <img src="styles/legend/ViviendasreasRuralesINDEC_5_4.png" /> 4.000 o más<br />'
        });
var format_CabezasdeCaprinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeCaprinosMAGyP_6 = format_CabezasdeCaprinosMAGyP_6.readFeatures(json_CabezasdeCaprinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeCaprinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeCaprinosMAGyP_6.addFeatures(features_CabezasdeCaprinosMAGyP_6);
var lyr_CabezasdeCaprinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeCaprinosMAGyP_6, 
                style: style_CabezasdeCaprinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de Caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeCaprinosMAGyP_6_0.png" /> 180 - 1.700<br />\
    <img src="styles/legend/CabezasdeCaprinosMAGyP_6_1.png" /> 1.701 - 4.200<br />\
    <img src="styles/legend/CabezasdeCaprinosMAGyP_6_2.png" /> 4.201 - 6.000<br />\
    <img src="styles/legend/CabezasdeCaprinosMAGyP_6_3.png" /> 6.001 - 8.400<br />'
        });
var format_CabezasdePorcinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdePorcinosMAGyP_7 = format_CabezasdePorcinosMAGyP_7.readFeatures(json_CabezasdePorcinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdePorcinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdePorcinosMAGyP_7.addFeatures(features_CabezasdePorcinosMAGyP_7);
var lyr_CabezasdePorcinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdePorcinosMAGyP_7, 
                style: style_CabezasdePorcinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de Porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdePorcinosMAGyP_7_0.png" /> 310 - 1.700<br />\
    <img src="styles/legend/CabezasdePorcinosMAGyP_7_1.png" /> 1.701 - 4.880<br />\
    <img src="styles/legend/CabezasdePorcinosMAGyP_7_2.png" /> 4.881 - 11.100<br />\
    <img src="styles/legend/CabezasdePorcinosMAGyP_7_3.png" /> 11.101 o más<br />'
        });
var format_CabezasdeOvinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdeOvinosMAGyP_8 = format_CabezasdeOvinosMAGyP_8.readFeatures(json_CabezasdeOvinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeOvinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeOvinosMAGyP_8.addFeatures(features_CabezasdeOvinosMAGyP_8);
var lyr_CabezasdeOvinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeOvinosMAGyP_8, 
                style: style_CabezasdeOvinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de Ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeOvinosMAGyP_8_0.png" /> 1.800 - 7.700<br />\
    <img src="styles/legend/CabezasdeOvinosMAGyP_8_1.png" /> 7.701 - 18.685<br />\
    <img src="styles/legend/CabezasdeOvinosMAGyP_8_2.png" /> 18.686 - 53.300<br />\
    <img src="styles/legend/CabezasdeOvinosMAGyP_8_3.png" /> 53.301 - 185.275<br />\
    <img src="styles/legend/CabezasdeOvinosMAGyP_8_4.png" /> 185.276 o más<br />'
        });
var format_CabezasdeBovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdeBovinosMAGyP_9 = format_CabezasdeBovinosMAGyP_9.readFeatures(json_CabezasdeBovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeBovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeBovinosMAGyP_9.addFeatures(features_CabezasdeBovinosMAGyP_9);
var lyr_CabezasdeBovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeBovinosMAGyP_9, 
                style: style_CabezasdeBovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de Bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeBovinosMAGyP_9_0.png" /> 20.000 - 62.525<br />\
    <img src="styles/legend/CabezasdeBovinosMAGyP_9_1.png" /> 62.526 - 130.000<br />\
    <img src="styles/legend/CabezasdeBovinosMAGyP_9_2.png" /> 130.001 - 211.500<br />\
    <img src="styles/legend/CabezasdeBovinosMAGyP_9_3.png" /> 211.501 - 375.000<br />\
    <img src="styles/legend/CabezasdeBovinosMAGyP_9_4.png" /> 375.001 - 630.000<br />'
        });
var format_HectreascaadeazcarINDEC_10 = new ol.format.GeoJSON();
var features_HectreascaadeazcarINDEC_10 = format_HectreascaadeazcarINDEC_10.readFeatures(json_HectreascaadeazcarINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreascaadeazcarINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreascaadeazcarINDEC_10.addFeatures(features_HectreascaadeazcarINDEC_10);
var lyr_HectreascaadeazcarINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreascaadeazcarINDEC_10, 
                style: style_HectreascaadeazcarINDEC_10,
                interactive: true,
    title: 'Hectáreas caña de azúcar (INDEC)<br />\
    <img src="styles/legend/HectreascaadeazcarINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreascaadeazcarINDEC_10_1.png" /> 1 - 5<br />\
    <img src="styles/legend/HectreascaadeazcarINDEC_10_2.png" /> 6 - 10<br />'
        });
var format_HectreasMandiocaINDEC_11 = new ol.format.GeoJSON();
var features_HectreasMandiocaINDEC_11 = format_HectreasMandiocaINDEC_11.readFeatures(json_HectreasMandiocaINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasMandiocaINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasMandiocaINDEC_11.addFeatures(features_HectreasMandiocaINDEC_11);
var lyr_HectreasMandiocaINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasMandiocaINDEC_11, 
                style: style_HectreasMandiocaINDEC_11,
                interactive: true,
    title: 'Hectáreas Mandioca (INDEC)<br />\
    <img src="styles/legend/HectreasMandiocaINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasMandiocaINDEC_11_1.png" /> 1 - 10<br />\
    <img src="styles/legend/HectreasMandiocaINDEC_11_2.png" /> 11 o más<br />'
        });
var format_HectreasdealgodnINDEC_12 = new ol.format.GeoJSON();
var features_HectreasdealgodnINDEC_12 = format_HectreasdealgodnINDEC_12.readFeatures(json_HectreasdealgodnINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdealgodnINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdealgodnINDEC_12.addFeatures(features_HectreasdealgodnINDEC_12);
var lyr_HectreasdealgodnINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdealgodnINDEC_12, 
                style: style_HectreasdealgodnINDEC_12,
                interactive: true,
    title: 'Hectáreas de algodón (INDEC)<br />\
    <img src="styles/legend/HectreasdealgodnINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdealgodnINDEC_12_1.png" /> 1 - 5<br />\
    <img src="styles/legend/HectreasdealgodnINDEC_12_2.png" /> 6 - 18<br />\
    <img src="styles/legend/HectreasdealgodnINDEC_12_3.png" /> 19 o más<br />'
        });
var format_HectreasHortalizasINDEC_13 = new ol.format.GeoJSON();
var features_HectreasHortalizasINDEC_13 = format_HectreasHortalizasINDEC_13.readFeatures(json_HectreasHortalizasINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasHortalizasINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasHortalizasINDEC_13.addFeatures(features_HectreasHortalizasINDEC_13);
var lyr_HectreasHortalizasINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasHortalizasINDEC_13, 
                style: style_HectreasHortalizasINDEC_13,
                interactive: true,
    title: 'Hectáreas Hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_13_1.png" /> 1 - 20<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_13_2.png" /> 21 - 100<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_13_3.png" /> 101 - 230<br />'
        });
var format_HectreasdeteINDEC_14 = new ol.format.GeoJSON();
var features_HectreasdeteINDEC_14 = format_HectreasdeteINDEC_14.readFeatures(json_HectreasdeteINDEC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdeteINDEC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdeteINDEC_14.addFeatures(features_HectreasdeteINDEC_14);
var lyr_HectreasdeteINDEC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdeteINDEC_14, 
                style: style_HectreasdeteINDEC_14,
                interactive: true,
    title: 'Hectáreas de te (INDEC)<br />\
    <img src="styles/legend/HectreasdeteINDEC_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdeteINDEC_14_1.png" /> 298<br />\
    <img src="styles/legend/HectreasdeteINDEC_14_2.png" /> 1.307<br />'
        });
var format_HectreasArrozMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasArrozMAGyP_15 = format_HectreasArrozMAGyP_15.readFeatures(json_HectreasArrozMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasArrozMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasArrozMAGyP_15.addFeatures(features_HectreasArrozMAGyP_15);
var lyr_HectreasArrozMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasArrozMAGyP_15, 
                style: style_HectreasArrozMAGyP_15,
                interactive: true,
    title: 'Hectáreas Arroz (MAGyP)<br />\
    <img src="styles/legend/HectreasArrozMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasArrozMAGyP_15_1.png" /> 1 - 1.600<br />\
    <img src="styles/legend/HectreasArrozMAGyP_15_2.png" /> 1.601 - 3.300<br />\
    <img src="styles/legend/HectreasArrozMAGyP_15_3.png" /> 3.301 - 14.000<br />\
    <img src="styles/legend/HectreasArrozMAGyP_15_4.png" /> 14.001 - 23.600<br />'
        });
var format_HectreasSorgoMAGyP_16 = new ol.format.GeoJSON();
var features_HectreasSorgoMAGyP_16 = format_HectreasSorgoMAGyP_16.readFeatures(json_HectreasSorgoMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasSorgoMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasSorgoMAGyP_16.addFeatures(features_HectreasSorgoMAGyP_16);
var lyr_HectreasSorgoMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasSorgoMAGyP_16, 
                style: style_HectreasSorgoMAGyP_16,
                interactive: true,
    title: 'Hectáreas Sorgo (MAGyP)<br />\
    <img src="styles/legend/HectreasSorgoMAGyP_16_0.png" /> 0<br />\
    <img src="styles/legend/HectreasSorgoMAGyP_16_1.png" /> 1 - 100<br />\
    <img src="styles/legend/HectreasSorgoMAGyP_16_2.png" /> 101 - 410<br />\
    <img src="styles/legend/HectreasSorgoMAGyP_16_3.png" /> 411 - 900<br />\
    <img src="styles/legend/HectreasSorgoMAGyP_16_4.png" /> 901 - 1.500<br />'
        });
var format_HectreasctricosINDEC_17 = new ol.format.GeoJSON();
var features_HectreasctricosINDEC_17 = format_HectreasctricosINDEC_17.readFeatures(json_HectreasctricosINDEC_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasctricosINDEC_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasctricosINDEC_17.addFeatures(features_HectreasctricosINDEC_17);
var lyr_HectreasctricosINDEC_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasctricosINDEC_17, 
                style: style_HectreasctricosINDEC_17,
                interactive: true,
    title: 'Hectáreas cítricos (INDEC)<br />\
    <img src="styles/legend/HectreasctricosINDEC_17_0.png" /> 0<br />\
    <img src="styles/legend/HectreasctricosINDEC_17_1.png" /> 1 - 60<br />\
    <img src="styles/legend/HectreasctricosINDEC_17_2.png" /> 61 - 240<br />\
    <img src="styles/legend/HectreasctricosINDEC_17_3.png" /> 14.500<br />'
        });
var format_HectreasMazMAGyP_18 = new ol.format.GeoJSON();
var features_HectreasMazMAGyP_18 = format_HectreasMazMAGyP_18.readFeatures(json_HectreasMazMAGyP_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasMazMAGyP_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasMazMAGyP_18.addFeatures(features_HectreasMazMAGyP_18);
var lyr_HectreasMazMAGyP_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasMazMAGyP_18, 
                style: style_HectreasMazMAGyP_18,
                interactive: true,
    title: 'Hectáreas Maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasMazMAGyP_18_0.png" /> 0<br />\
    <img src="styles/legend/HectreasMazMAGyP_18_1.png" /> 250 - 400<br />\
    <img src="styles/legend/HectreasMazMAGyP_18_2.png" /> 401 - 600<br />\
    <img src="styles/legend/HectreasMazMAGyP_18_3.png" /> 601 - 900<br />\
    <img src="styles/legend/HectreasMazMAGyP_18_4.png" /> 901 o más<br />'
        });
var format_HectreasSojaMAGyP_19 = new ol.format.GeoJSON();
var features_HectreasSojaMAGyP_19 = format_HectreasSojaMAGyP_19.readFeatures(json_HectreasSojaMAGyP_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasSojaMAGyP_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasSojaMAGyP_19.addFeatures(features_HectreasSojaMAGyP_19);
var lyr_HectreasSojaMAGyP_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasSojaMAGyP_19, 
                style: style_HectreasSojaMAGyP_19,
                interactive: true,
    title: 'Hectáreas Soja (MAGyP)<br />\
    <img src="styles/legend/HectreasSojaMAGyP_19_0.png" /> 0<br />\
    <img src="styles/legend/HectreasSojaMAGyP_19_1.png" /> 30 - 140<br />\
    <img src="styles/legend/HectreasSojaMAGyP_19_2.png" /> 141 - 855<br />\
    <img src="styles/legend/HectreasSojaMAGyP_19_3.png" /> 856 - 1.875<br />'
        });
var format_Capacitaciones2020tcnicas_20 = new ol.format.GeoJSON();
var features_Capacitaciones2020tcnicas_20 = format_Capacitaciones2020tcnicas_20.readFeatures(json_Capacitaciones2020tcnicas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2020tcnicas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2020tcnicas_20.addFeatures(features_Capacitaciones2020tcnicas_20);
var lyr_Capacitaciones2020tcnicas_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2020tcnicas_20, 
                style: style_Capacitaciones2020tcnicas_20,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2020tcnicas_20.png" /> Capacitaciones 2020 (técnicas)'
            });
var format_Capacitaciones2019_21 = new ol.format.GeoJSON();
var features_Capacitaciones2019_21 = format_Capacitaciones2019_21.readFeatures(json_Capacitaciones2019_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019_21.addFeatures(features_Capacitaciones2019_21);
var lyr_Capacitaciones2019_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019_21, 
                style: style_Capacitaciones2019_21,
                interactive: true,
    title: 'Capacitaciones 2019<br />\
    <img src="styles/legend/Capacitaciones2019_21_0.png" /> Difusion<br />\
    <img src="styles/legend/Capacitaciones2019_21_1.png" /> Tecnica<br />'
        });
var format_Capacitaciones2018difusin_22 = new ol.format.GeoJSON();
var features_Capacitaciones2018difusin_22 = format_Capacitaciones2018difusin_22.readFeatures(json_Capacitaciones2018difusin_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018difusin_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018difusin_22.addFeatures(features_Capacitaciones2018difusin_22);
var lyr_Capacitaciones2018difusin_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018difusin_22, 
                style: style_Capacitaciones2018difusin_22,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2018difusin_22.png" /> Capacitaciones 2018 (difusión)'
            });
var format_LocalidadesCorrientes_23 = new ol.format.GeoJSON();
var features_LocalidadesCorrientes_23 = format_LocalidadesCorrientes_23.readFeatures(json_LocalidadesCorrientes_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesCorrientes_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesCorrientes_23.addFeatures(features_LocalidadesCorrientes_23);
var lyr_LocalidadesCorrientes_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesCorrientes_23, 
                style: style_LocalidadesCorrientes_23,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesCorrientes_23.png" /> Localidades Corrientes'
            });
var format_BER_24 = new ol.format.GeoJSON();
var features_BER_24 = format_BER_24.readFeatures(json_BER_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_24.addFeatures(features_BER_24);
var lyr_BER_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_24, 
                style: style_BER_24,
                interactive: true,
                title: '<img src="styles/legend/BER_24.png" /> BER'
            });
var format_BER_25 = new ol.format.GeoJSON();
var features_BER_25 = format_BER_25.readFeatures(json_BER_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_25.addFeatures(features_BER_25);
var lyr_BER_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_25, 
                style: style_BER_25,
                interactive: true,
                title: '<img src="styles/legend/BER_25.png" /> BER'
            });
var format_CAIR_26 = new ol.format.GeoJSON();
var features_CAIR_26 = format_CAIR_26.readFeatures(json_CAIR_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAIR_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAIR_26.addFeatures(features_CAIR_26);
var lyr_CAIR_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAIR_26, 
                style: style_CAIR_26,
                interactive: true,
                title: '<img src="styles/legend/CAIR_26.png" /> CAIR'
            });
var format_DelegacinCorrientes_27 = new ol.format.GeoJSON();
var features_DelegacinCorrientes_27 = format_DelegacinCorrientes_27.readFeatures(json_DelegacinCorrientes_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinCorrientes_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinCorrientes_27.addFeatures(features_DelegacinCorrientes_27);
var lyr_DelegacinCorrientes_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinCorrientes_27, 
                style: style_DelegacinCorrientes_27,
                interactive: true,
                title: '<img src="styles/legend/DelegacinCorrientes_27.png" /> Delegación Corrientes'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PoblacinEconmicamenteActiva_3.setVisible(true);lyr_PoblacinpordepartamentoINDEC_4.setVisible(true);lyr_ViviendasreasRuralesINDEC_5.setVisible(true);lyr_CabezasdeCaprinosMAGyP_6.setVisible(true);lyr_CabezasdePorcinosMAGyP_7.setVisible(true);lyr_CabezasdeOvinosMAGyP_8.setVisible(true);lyr_CabezasdeBovinosMAGyP_9.setVisible(true);lyr_HectreascaadeazcarINDEC_10.setVisible(true);lyr_HectreasMandiocaINDEC_11.setVisible(true);lyr_HectreasdealgodnINDEC_12.setVisible(true);lyr_HectreasHortalizasINDEC_13.setVisible(true);lyr_HectreasdeteINDEC_14.setVisible(true);lyr_HectreasArrozMAGyP_15.setVisible(true);lyr_HectreasSorgoMAGyP_16.setVisible(true);lyr_HectreasctricosINDEC_17.setVisible(true);lyr_HectreasMazMAGyP_18.setVisible(true);lyr_HectreasSojaMAGyP_19.setVisible(true);lyr_Capacitaciones2020tcnicas_20.setVisible(true);lyr_Capacitaciones2019_21.setVisible(true);lyr_Capacitaciones2018difusin_22.setVisible(true);lyr_LocalidadesCorrientes_23.setVisible(true);lyr_BER_24.setVisible(true);lyr_BER_25.setVisible(true);lyr_CAIR_26.setVisible(true);lyr_DelegacinCorrientes_27.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_Departamentos_2,lyr_PoblacinEconmicamenteActiva_3,lyr_PoblacinpordepartamentoINDEC_4,lyr_ViviendasreasRuralesINDEC_5,lyr_CabezasdeCaprinosMAGyP_6,lyr_CabezasdePorcinosMAGyP_7,lyr_CabezasdeOvinosMAGyP_8,lyr_CabezasdeBovinosMAGyP_9,lyr_HectreascaadeazcarINDEC_10,lyr_HectreasMandiocaINDEC_11,lyr_HectreasdealgodnINDEC_12,lyr_HectreasHortalizasINDEC_13,lyr_HectreasdeteINDEC_14,lyr_HectreasArrozMAGyP_15,lyr_HectreasSorgoMAGyP_16,lyr_HectreasctricosINDEC_17,lyr_HectreasMazMAGyP_18,lyr_HectreasSojaMAGyP_19,lyr_Capacitaciones2020tcnicas_20,lyr_Capacitaciones2019_21,lyr_Capacitaciones2018difusin_22,lyr_LocalidadesCorrientes_23,lyr_BER_24,lyr_BER_25,lyr_CAIR_26,lyr_DelegacinCorrientes_27];
lyr_Departamentos_2.set('fieldAliases', {'Depto.': 'Depto.', });
lyr_PoblacinEconmicamenteActiva_3.set('fieldAliases', {'PEA': 'PEA', });
lyr_PoblacinpordepartamentoINDEC_4.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_ViviendasreasRuralesINDEC_5.set('fieldAliases', {'Viv. rural': 'Viv. rural', });
lyr_CabezasdeCaprinosMAGyP_6.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasdePorcinosMAGyP_7.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasdeOvinosMAGyP_8.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezasdeBovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreascaadeazcarINDEC_10.set('fieldAliases', {'Azucar': 'Azucar', });
lyr_HectreasMandiocaINDEC_11.set('fieldAliases', {'Mandioca': 'Mandioca', });
lyr_HectreasdealgodnINDEC_12.set('fieldAliases', {'Algodon': 'Algodon', });
lyr_HectreasHortalizasINDEC_13.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdeteINDEC_14.set('fieldAliases', {'Te': 'Te', });
lyr_HectreasArrozMAGyP_15.set('fieldAliases', {'Arroz': 'Arroz', });
lyr_HectreasSorgoMAGyP_16.set('fieldAliases', {'Sorgo': 'Sorgo', });
lyr_HectreasctricosINDEC_17.set('fieldAliases', {'Cítricos': 'Cítricos', });
lyr_HectreasMazMAGyP_18.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreasSojaMAGyP_19.set('fieldAliases', {'Soja': 'Soja', });
lyr_Capacitaciones2020tcnicas_20.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa': 'Tipo capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2019_21.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa': 'Tipo capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2018difusin_22.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa': 'Tipo capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_LocalidadesCorrientes_23.set('fieldAliases', {'Localidad': 'Localidad', 'Poblacion': 'Poblacion', });
lyr_BER_24.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_BER_25.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_CAIR_26.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_DelegacinCorrientes_27.set('fieldAliases', {'Localidad': 'Localidad', 'Direccion': 'Direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', 'CAD': 'CAD', });
lyr_Departamentos_2.set('fieldImages', {'Depto.': 'TextEdit', });
lyr_PoblacinEconmicamenteActiva_3.set('fieldImages', {'PEA': 'TextEdit', });
lyr_PoblacinpordepartamentoINDEC_4.set('fieldImages', {'Poblacion': 'TextEdit', });
lyr_ViviendasreasRuralesINDEC_5.set('fieldImages', {'Viv. rural': 'TextEdit', });
lyr_CabezasdeCaprinosMAGyP_6.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasdePorcinosMAGyP_7.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasdeOvinosMAGyP_8.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezasdeBovinosMAGyP_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreascaadeazcarINDEC_10.set('fieldImages', {'Azucar': 'TextEdit', });
lyr_HectreasMandiocaINDEC_11.set('fieldImages', {'Mandioca': 'TextEdit', });
lyr_HectreasdealgodnINDEC_12.set('fieldImages', {'Algodon': 'TextEdit', });
lyr_HectreasHortalizasINDEC_13.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdeteINDEC_14.set('fieldImages', {'Te': 'TextEdit', });
lyr_HectreasArrozMAGyP_15.set('fieldImages', {'Arroz': 'TextEdit', });
lyr_HectreasSorgoMAGyP_16.set('fieldImages', {'Sorgo': 'TextEdit', });
lyr_HectreasctricosINDEC_17.set('fieldImages', {'Cítricos': 'TextEdit', });
lyr_HectreasMazMAGyP_18.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreasSojaMAGyP_19.set('fieldImages', {'Soja': 'TextEdit', });
lyr_Capacitaciones2020tcnicas_20.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'TextEdit', });
lyr_Capacitaciones2019_21.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'TextEdit', });
lyr_Capacitaciones2018difusin_22.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'TextEdit', });
lyr_LocalidadesCorrientes_23.set('fieldImages', {'Localidad': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_BER_24.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_BER_25.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_CAIR_26.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_DelegacinCorrientes_27.set('fieldImages', {'Localidad': 'TextEdit', 'Direccion': 'TextEdit', 'Prest 2016': 'Range', 'Prest 2017': 'Range', 'Prest 2018': 'Range', 'Prest 2019': 'Range', 'Prest 2020': 'Range', 'CAD': 'TextEdit', });
lyr_Departamentos_2.set('fieldLabels', {'Depto.': 'inline label', });
lyr_PoblacinEconmicamenteActiva_3.set('fieldLabels', {'PEA': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_4.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_ViviendasreasRuralesINDEC_5.set('fieldLabels', {'Viv. rural': 'inline label', });
lyr_CabezasdeCaprinosMAGyP_6.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasdePorcinosMAGyP_7.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasdeOvinosMAGyP_8.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezasdeBovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreascaadeazcarINDEC_10.set('fieldLabels', {'Azucar': 'inline label', });
lyr_HectreasMandiocaINDEC_11.set('fieldLabels', {'Mandioca': 'inline label', });
lyr_HectreasdealgodnINDEC_12.set('fieldLabels', {'Algodon': 'inline label', });
lyr_HectreasHortalizasINDEC_13.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasdeteINDEC_14.set('fieldLabels', {'Te': 'inline label', });
lyr_HectreasArrozMAGyP_15.set('fieldLabels', {'Arroz': 'inline label', });
lyr_HectreasSorgoMAGyP_16.set('fieldLabels', {'Sorgo': 'inline label', });
lyr_HectreasctricosINDEC_17.set('fieldLabels', {'Cítricos': 'inline label', });
lyr_HectreasMazMAGyP_18.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreasSojaMAGyP_19.set('fieldLabels', {'Soja': 'inline label', });
lyr_Capacitaciones2020tcnicas_20.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2019_21.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2018difusin_22.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_LocalidadesCorrientes_23.set('fieldLabels', {'Localidad': 'inline label', 'Poblacion': 'inline label', });
lyr_BER_24.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_BER_25.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_CAIR_26.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_DelegacinCorrientes_27.set('fieldLabels', {'Localidad': 'inline label', 'Direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', 'CAD': 'inline label', });
lyr_DelegacinCorrientes_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
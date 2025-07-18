var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_barriostotal_1 = new ol.format.GeoJSON();
var features_barriostotal_1 = format_barriostotal_1.readFeatures(json_barriostotal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barriostotal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barriostotal_1.addFeatures(features_barriostotal_1);
var lyr_barriostotal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barriostotal_1, 
                style: style_barriostotal_1,
                popuplayertitle: 'barriostotal',
                interactive: true,
                title: '<img src="styles/legend/barriostotal_1.png" /> barriostotal'
            });
var format_limitesbarrios_2 = new ol.format.GeoJSON();
var features_limitesbarrios_2 = format_limitesbarrios_2.readFeatures(json_limitesbarrios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limitesbarrios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limitesbarrios_2.addFeatures(features_limitesbarrios_2);
var lyr_limitesbarrios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limitesbarrios_2, 
                style: style_limitesbarrios_2,
                popuplayertitle: 'limitesbarrios',
                interactive: true,
                title: '<img src="styles/legend/limitesbarrios_2.png" /> limitesbarrios'
            });

lyr_OSMStandard_0.setVisible(true);lyr_barriostotal_1.setVisible(true);lyr_limitesbarrios_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_barriostotal_1,lyr_limitesbarrios_2];
lyr_barriostotal_1.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'barrio': 'barrio', 'codloc': 'codloc', 'dpto': 'dpto', });
lyr_limitesbarrios_2.set('fieldAliases', {'Barrio': 'Barrio', });
lyr_barriostotal_1.set('fieldImages', {'gid': '', 'id': '', 'barrio': '', 'codloc': '', 'dpto': '', });
lyr_limitesbarrios_2.set('fieldImages', {'Barrio': '', });
lyr_barriostotal_1.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'barrio': 'no label', 'codloc': 'no label', 'dpto': 'no label', });
lyr_limitesbarrios_2.set('fieldLabels', {'Barrio': 'no label', });
lyr_limitesbarrios_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
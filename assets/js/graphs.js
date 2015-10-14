
var dataPath = 'assets/data/';

/* Piramide popolazione comune di Treviso
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "fillAlphas": 0.5,
        "lineAlpha": 0.5,
        "type": "column",
        "valueField": "Maschi",
        "title": "Maschi",
        "lineColor": "#377eb8",
        "clustered": false,
        "balloonFunction": function (item) {
            return item.category + ": " + Math.abs(item.values.value);
        }
    },
    {
        "fillAlphas": 0.5,
        "lineAlpha": 0.5,
        "type": "column",
        "valueField": "Femmine",
        "title": "Femmine",
        "lineColor": "#f781bf",
        "clustered": false,
        "balloonFunction": function (item) {
            return item.category + ": " + Math.abs(item.values.value);
        }
    }
];

urls = [
    dataPath + "piramide-popolazione-comune/2011.json",
    dataPath + "piramide-popolazione-comune/2012.json",
    dataPath + "piramide-popolazione-comune/2013.json",
    dataPath + "piramide-popolazione-comune/2014.json"
];
generatePyramid("chart1", urls, graphs, "età");


/* Piramide popolazione nel centro storico
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "fillAlphas": 0.5,
        "lineAlpha": 0.5,
        "type": "column",
        "valueField": "Maschi",
        "title": "Maschi",
        "lineColor": "#377eb8",
        "clustered": false,
        "balloonFunction": function (item) {
            return item.category + ": " + Math.abs(item.values.value);
        }
    },
    {
        "fillAlphas": 0.5,
        "lineAlpha": 0.5,
        "type": "column",
        "valueField": "Femmine",
        "title": "Femmine",
        "lineColor": "#f781bf",
        "clustered": false,
        "balloonFunction": function (item) {
            return item.category + ": " + Math.abs(item.values.value);
        }
    }
];

urls = [
    dataPath + "piramide-popolazione-centro/2011.json",
    dataPath + "piramide-popolazione-centro/2012.json",
    dataPath + "piramide-popolazione-centro/2013.json",
    dataPath + "piramide-popolazione-centro/2014.json"
];

generatePyramid("chart2", urls, graphs, "età");


/* Trend della popolazione
 ----------------------------------------------------------------------------*/
var graphs = [
    {
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineThickness": 3,
        "lineColor": "#8da0cb",
        "fillAlphas": 0.5,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Abitanti",
        "valueField": "abitanti",
        "useLineColorForBulletBorder": true
    }
];

urls = [
    dataPath + "popolazione_comune_treviso.json"
];

generateSerial("chart3", urls, graphs, "Anno", true);


/* Numero di famiglie
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineColor": "#fc8d62",
        "lineThickness": 3,
        "fillAlphas": 0.5,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Famiglie",
        "valueField": "Famiglie",
        "useLineColorForBulletBorder": true
    }
];

urls = [
    dataPath + "numero_famiglie.json"
];

generateSerial("chart4", urls, graphs, "Anno", true);


/* Popolazione suddivisa per stato civile
 ----------------------------------------------------------------------------*/
urls = [
    dataPath + "stato-civile/2011.json",
    dataPath + "stato-civile/2012.json",
    dataPath + "stato-civile/2013.json",
    dataPath + "stato-civile/2014.json"
];
colors = ['#e5f5f9', '#b2e2e2', '#66c2a4', '#2ca25f', '#006d2c'];

generatePie("chart5", urls, "Stato civile", "perc", colors);


/* Popolazione di Treviso, Veneto e Italia per particolari classi di età
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "id": "g1",
        "balloonText": "Treviso: [[Treviso]]",
        "fillAlphas": 0.4,
        "lineColor": "#e41a1c",
        "lineThickness": 1,
        "valueField": "Treviso",
        "type": "column",
        "title": "Treviso"
    },
    {
        "id": "g2",
        "balloonText": "Veneto: [[Veneto]]",
        "fillAlphas": 0.4,
        "lineColor": "#377eb8",
        "lineThickness": 1,
        "valueField": "Veneto",
        "type": "column",
        "title": "Veneto"
    },
    {
        "id": "g3",
        "balloonText": "Italia: [[Italia]]",
        "fillAlphas": 0.4,
        "lineThickness": 1,
        "lineColor": "#4daf4a",
        "valueField": "Italia",
        "type": "column",
        "title": "Italia"
    }
];

urls = [
    dataPath + "classi-eta-treviso-veneto-italia/2011.json",
    dataPath + "classi-eta-treviso-veneto-italia/2012.json",
    dataPath + "classi-eta-treviso-veneto-italia/2013.json",
    dataPath + "classi-eta-treviso-veneto-italia/2014.json"
];

generateSerial('chart6', urls, graphs, "Classe di età");


/* Famiglie suddivise per numero di componenti - Comune
 -----------------------------------------------------------------------------*/
urls = [
    dataPath + "famiglie-numero-componenti-comune/2011.json",
    dataPath + "famiglie-numero-componenti-comune/2012.json",
    dataPath + "famiglie-numero-componenti-comune/2013.json",
    dataPath + "famiglie-numero-componenti-comune/2014.json"
];

colors = ['#e0ecf4', '#b3cde3', '#8c96c6', '#8856a7', '#810f7c'];
generatePie("chart7", urls, "componenti", "famiglie", colors);


/* Famiglie suddivise per numero di componenti - Centro
 -----------------------------------------------------------------------------*/
urls = [
    dataPath + "famiglie-numero-componenti-centro/2011.json",
    dataPath + "famiglie-numero-componenti-centro/2012.json",
    dataPath + "famiglie-numero-componenti-centro/2013.json",
    dataPath + "famiglie-numero-componenti-centro/2014.json"
];

colors = ['#e0f3db', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac'];
generatePie("chart8", urls, "componenti", "famiglie", colors);


/* Popolazione distribuita per classi di età - Comune
 -----------------------------------------------------------------------------*/
urls = [
    dataPath + "classi_eta_comune.json"
];
colors = ['#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#990000'];
generatePie("chart9", urls, "stato civile", "TOTALE", colors);


/* Popolazione distribuita per classi di età - Centro
 -----------------------------------------------------------------------------*/
urls = [
    dataPath + "classi_eta_centro.json"
];

colors = ['#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#4a1486'];
generatePie("chart10", urls, "stato civile", "TOTALE", colors);


/* Decessi per sesso e classi di eta
 -----------------------------------------------------------------------------*/
graphs = [
    {
        "id": "g1",
        "balloonText": "[[value]] decessi",
        "fillAlphas": 0.5,
        "lineAlpha": 0.5,
        "lineColor": '#377eb8',
        "title": "Maschi",
        "type": "column",
        "valueField": "Maschi"
    },
    {
        "id": "g2",
        "balloonText": "[[value]] decessi",
        "fillAlphas": 0.5,
        "lineAlpha": 0.5,
        "lineColor": '#f781bf',
        "title": "Femmine",
        "type": "column",
        "valueField": "Femmine"
    }
];

urls = [
    dataPath +"morti-sesso-eta/2011.json",
    dataPath +"morti-sesso-eta/2012.json",
    dataPath +"morti-sesso-eta/2013.json",
    dataPath +"morti-sesso-eta/2014.json"
];

generateSerial("chart11", urls, graphs, "età");

/* Piramide d'età popolazione straniera
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "fillAlphas": 0.5,
        "lineAlpha": 0.5,
        "type": "column",
        "valueField": "Maschi",
        "title": "Maschi",
        "lineColor": "#377eb8",
        "clustered": false,
        "balloonFunction": function (item) {
            return item.category + ": " + Math.abs(item.values.value);
        }
    },
    {
        "fillAlphas": 0.5,
        "lineAlpha": 0.5,
        "type": "column",
        "valueField": "Femmine",
        "title": "Femmine",
        "lineColor": "#f781bf",
        "clustered": false,
        "balloonFunction": function (item) {
            return item.category + ": " + Math.abs(item.values.value);
        }
    }
];

urls = [
    dataPath + "piramide-popolazione-straniera/2011.json",
    dataPath + "piramide-popolazione-straniera/2012.json",
    dataPath + "piramide-popolazione-straniera/2013.json",
    dataPath + "piramide-popolazione-straniera/2014.json"
];
generatePyramid("chart12", urls, graphs, "età");


/* Popolazione del Comune di Treviso ai Censimenti
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineThickness": 3,
        "lineColor": "#fc8d62",
        "fillAlphas": 0.5,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Popolazione",
        "valueField": "popolazione",
        "useLineColorForBulletBorder": true
    }
];


urls = [
    dataPath + "censimenti.json"
];

generateSerial("chart13", urls, graphs, "anno", true);


/* Andamento dei Nati e dei Morti
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineColor": "#5ab4ac",
        "lineThickness": 3,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Nati",
        "valueField": "Nati",
        "useLineColorForBulletBorder": true
    },
    {
        "id": "g2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineColor": "#d8b365",
        "lineThickness": 3,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Decessi",
        "valueField": "Morti",
        "useLineColorForBulletBorder": true
    }];


urls = [
    dataPath + "nati_morti.json"
];
generateSerial("chart14", urls, graphs, "Anno", true);

/* Andamento degli immigrati e degli emigrati
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineColor": "#ff7f00",
        "lineThickness": 2,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Immigranti",
        "valueField": "Immigrati",
        "useLineColorForBulletBorder": true
    },
    {
        "id": "g2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineColor": "#6a3d9a",
        "lineThickness": 2,
        "bulletColor+": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Emigrati",
        "valueField": "Emigrati",
        "useLineColorForBulletBorder": true
    }
];


urls = [
    dataPath + "migranti_emigranti.json"
];

generateSerial('chart15', urls, graphs, "Anno", true);


/* Saldo naturale
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "balloonText": "Saldo: [[Saldo Naturale]]",
        "fillAlphas": 0.6,
        "fillColors": "#66a61e",
        "fontSize": -4,
        "gapPeriod": 1,
        "id": "AmGraph-1",
        "lineAlpha": 0,
        "negativeFillColors": "#e7298a",
        "valueField": "Saldo Naturale",
        "type": "column"
    }
];

urls = [
    dataPath + "saldo_naturale.json"
];

generateSerial('chart16', urls, graphs, "Anno", true);


/* Saldo Migratorio
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "balloonText": "Saldo: [[Saldo Migratorio]]",
        "fillAlphas": 0.6,
        "fillColors": "#1b9e77",
        "fontSize": -4,
        "gapPeriod": 1,
        "id": "g1",
        "lineAlpha": 0,
        "negativeFillColors": "#d95f02",
        "valueField": "Saldo migratorio",
        "type": "column"
    }
];

urls = [
    dataPath + "saldo_migratorio.json"
];

generateSerial('chart17', urls, graphs, "Anno", true);


/* Matrimoni suddivisi per Età degli Sposi
 ----------------------------------------------------------------------------*/
urls = [
    dataPath + "matrimoni_per_eta_sposi.json"
];

colors = ['#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#084594'];
generatePie("chart18", urls, "età", "matrimoni", colors);


/* Matrimoni suddivisi per  Età delle Spose
 ----------------------------------------------------------------------------*/
urls = [
    dataPath + "matrimoni_per_eta_spose.json"
];
colors = ['#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177'];

generatePie("chart19", urls, "età", "matrimoni", colors);


/*

 graphs = [
 {
 "id": "g1",
 "bullet": "round",
 "bulletBorderAlpha": 1,
 "lineColor": "#5ab4ac",
 "lineThickness": 3,
 "bulletColor": "#FFFFFF",
 "hideBulletsCount": 50,
 "title": "Nati",
 "valueField": "births",
 "useLineColorForBulletBorder": true
 },
 {
 "id": "g2",
 "bullet": "round",
 "bulletBorderAlpha": 1,
 "lineColor": "#d8b365",
 "lineThickness": 3,
 "bulletColor": "#FFFFFF",
 "hideBulletsCount": 50,
 "title": "Decessi",
 "valueField": "deaths",
 "useLineColorForBulletBorder": true
 }];
 generateSerial("birthsDeathsSerial", dataPath + "births-and-deaths.json", graphs, "year", true);

 // Migration trend
 graphs = [
 {
 "id": "g1",
 "bullet": "round",
 "bulletBorderAlpha": 1,
 "lineColor": "#ff7f00",
 "lineThickness": 2,
 "bulletColor": "#FFFFFF",
 "hideBulletsCount": 50,
 "title": "Immigranti",
 "valueField": "immigrants",
 "useLineColorForBulletBorder": true
 },
 {
 "id": "g2",
 "bullet": "round",
 "bulletBorderAlpha": 1,
 "lineColor": "#6a3d9a",
 "lineThickness": 2,
 "bulletColor": "#FFFFFF",
 "hideBulletsCount": 50,
 "title": "Emigranti",
 "valueField": "emigrants",
 "useLineColorForBulletBorder": true
 }];
 generateSerial("migrationTrendSerial", dataPath + "migration-trend.json", graphs, "year", true)
 // Population marital status
 generatePie("maritalStatusPie", dataPath + "marital-status.json", "status", "percentage",
 ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854"]);

 // Population ages
 graphs = [
 {
 "id": "g1",
 "balloonText": "Treviso: [[Treviso]]",
 "fillAlphas": 0.5,
 "fillColors": "#bebada",
 "lineColor": "#bebada",
 "valueField": "Treviso",
 "type": "column",
 "title": "Treviso"
 },
 {
 "id": "g2",
 "balloonText": "Veneto: [[Veneto]]",
 "fillAlphas": 0.5,
 "fillColors": "#fb8072",
 "lineColor": "#fb8072",
 "valueField": "Veneto",
 "type": "column",
 "title": "Veneto"
 },
 {
 "id": "g3",
 "balloonText": "Italia: [[Italia]]",
 "fillAlphas": 0.5,
 "lineColor": "#80b1d3",
 "fillColors": "#80b1d3",
 "valueField": "Italia",
 "type": "column",
 "title": "Italia"
 }
 ];
 generateSerial('agesSerial', dataPath + "population-ages.json", graphs, "age_slot");


 // Number of family components
 graphs = [
 {
 "balloonText": "Centro Storico: [[centre]]",
 "fillAlphas": 0.5,
 "id": "g2",
 "lineColor": "#66c2a5",
 "fillColors": "#66c2a5",
 "valueField": "centre",
 "type": "column",
 "title": "Centro Storico"
 },
 {
 "balloonText": "Intero Comune: [[city]]",
 "fillAlphas": 0.5,
 "id": "g1",
 "lineColor": "#fc8d62",
 "fillColors": "#fc8d62",
 "valueField": "city",
 "type": "column",
 "title": "Intero Comune"
 }

 ];
 generateSerial("famComSerial", dataPath + "families-components.json", graphs, "components");


 // Deaths per sex and age.
 graphs = [
 {
 "id": "g1",
 "balloonText": "[[value]] decessi",
 "fillAlphas": 0.5,
 "fillColors": '#a6bddb',
 "lineAlpha": 0.2,
 "title": "Maschi",
 "type": "column",
 "valueField": "male"
 },
 {
 "id": "g2",
 "balloonText": "[[value]] decessi",
 "fillAlphas": 0.5,
 "fillColors": '#fa9fb5',
 "lineAlpha": 0.2,
 "title": "Femmine",
 "type": "column",
 "valueField": "female"
 }
 ];
 generateSerial("deathsSexSerial", dataPath + "deaths-per-sex.json", graphs, "age");


 // Marriages per age and sex
 generatePie("marriagesMPie", dataPath + "marriages-by-age-male.json", "age", "marriages",
 ["#a6bddb", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"]);
 generatePie("marriagesFPie", dataPath + "marriages-by-age-female.json", "age", "marriages",
 ["#fde0dd", "#fa9fb5", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177"]);


 // Census
 graphs = [
 {
 "id": "g1",
 "balloonText": "Censimento [[year]]: [[value]]",
 "bullet": "round",
 "bulletBorderAlpha": 1,
 "lineThickness": 3,
 "lineColor": "#fc8d62",
 "hideBulletsCount": 50,
 "title": "Intero Comune",
 "valueField": "city",
 "useLineColorForBulletBorder": true
 },
 {
 "id": "g2",
 "balloonText": "Censimento [[year]]: [[value]]",
 "bullet": "round",
 "bulletBorderAlpha": 1,
 "lineThickness": 3,
 "lineColor": "#66c2a5",
 "hideBulletsCount": 50,
 "title": "Centro Storico",
 "valueField": "centre",
 "useLineColorForBulletBorder": true
 }];
 generateSerial("censusSerial", dataPath + "census.json", graphs, "year", true);


 // Foreign population pyramid
 graphs = [{
 "id": "g1",
 "fillAlphas": 0.5,
 "lineColor": "#a6bddb",
 "type": "column",
 "valueField": "male",
 "title": "Maschi",
 "labelText": "[[value]]",
 "clustered": false,
 "labelFunction": function (item) {
 return Math.abs(item.values.value);
 },
 "balloonFunction": function (item) {
 return item.category + ": " + Math.abs(item.values.value);
 }
 }, {
 "id": "g2",
 "fillAlphas": 0.5,
 "type": "column",
 "valueField": "female",
 "labelText": "[[value]]",
 "title": "Femmine",
 "lineColor": "#fa9fb5",
 "clustered": false,
 "labelFunction": function (item) {
 return Math.abs(item.values.value);
 },
 "balloonFunction": function (item) {
 return item.category + ": " + Math.abs(item.values.value);
 }
 }];
 generatePyramid("foreignPyramid", dataPath + "foreign-population-pyramid.json", graphs, "age");


 // Immigrants map by state
 generateMap("foreignStateMap", dataPath + "immigrants-by-state.json", "");
 generateMap("foreignAreaMap", dataPath + "immigrants-by-area.json", "%");

 $(window).scroll(function () {
 if ($(window).scrollTop() + $(window).height() >= $('.gauge').offset().top) {
 if (!$('.gauge').attr('loaded')) {
 $('.gauge').attr('loaded', true);
 $.getJSON(dataPath + "agedness-ratio.json", function (data) {
 var g1 = new JustGage({
 id: "g1",
 value: data.treviso,
 min: 0,
 max: 250,
 title: "Treviso"
 });

 var g2 = new JustGage({
 id: "g2",
 value: data.veneto,
 min: 0,
 max: 250,
 title: "Veneto"
 });

 var g3 = new JustGage({
 id: "g3",
 value: data.italia,
 min: 0,
 max: 250,
 title: "Italia"
 });
 });
 $.getJSON(dataPath + "dependency-ratio.json", function (data) {
 var g4 = new JustGage({
 id: "g4",
 value: data.treviso,
 min: 0,
 max: 100,
 title: "Treviso"
 });

 var g5 = new JustGage({
 id: "g5",
 value: data.veneto,
 min: 0,
 max: 100,
 title: "Veneto"
 });

 var g6 = new JustGage({
 id: "g6",
 value: data.italia,
 min: 0,
 max: 100,
 title: "Italia"
 });

 });
 }
 }
 });
 */


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
    dataPath + "morti-sesso-eta/2011.json",
    dataPath + "morti-sesso-eta/2012.json",
    dataPath + "morti-sesso-eta/2013.json",
    dataPath + "morti-sesso-eta/2014.json"
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
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Popolazione",
        "valueField": "popolazione",
        "useLineColorForBulletBorder": true,
        "fillAlphas": 0.5
    }
];


urls = [
    dataPath + "censimenti_comune.json"
];

generateSerial("chart13", urls, graphs, "anno", true);


/* Popolazione del centro storico di Treviso ai Censimenti
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineThickness": 3,
        "lineColor": "#969696",
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Popolazione",
        "valueField": "Popolazione",
        "useLineColorForBulletBorder": true,
        "fillAlphas": 0.5
    }
];


urls = [
    dataPath + "censimenti_centro.json"
];

generateSerial("chart20", urls, graphs, "Anno", true);


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
        "id": "g1",
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


/* Immigrati nel Comune di Treviso per Stato di Provenienza
 ----------------------------------------------------------------------------*/
areasSettings = {
    autoZoom: true
};
generateMap("chart21", dataPath + "mappa_immigrati_per_stato.json", areasSettings, "");


/* Immigrati stranieri nel comune di Treviso divisi per quartiere
 ----------------------------------------------------------------------------*/
areasSettings = {
    autoZoom: true,
    rollOverOutlineColor: "#9a7bca",
    selectedColor: "#9a7bca",
    color: "#a791b4",
    rollOverColor: "#9a7bca"
};
generateMap("chart22", dataPath + "mappa_immigrati_per_quartiere.json", areasSettings, "%");


/* Indice di vecchiaia - Treviso - Veneto - Italia
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineColor": "#e41a1c",
        "lineThickness": 3,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Treviso",
        "valueField": "Treviso",
        "useLineColorForBulletBorder": true
    },
    {
        "id": "g2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineColor": "#377eb8",
        "lineThickness": 3,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Veneto",
        "valueField": "Veneto",
        "useLineColorForBulletBorder": true
    },
    {
        "id": "g3",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineColor": "#4daf4a",
        "lineThickness": 3,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Italia",
        "valueField": "Italia",
        "useLineColorForBulletBorder": true
    }];

urls = [
    dataPath + "indice_di_vecchiaia.json"
];

generateSerial("chart23", urls, graphs, "Anno", true);


/* Indice di Dipendenza - Treviso - Veneto - Italia
 ----------------------------------------------------------------------------*/
graphs = [
    {
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineColor": "#e41a1c",
        "lineThickness": 3,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Treviso",
        "valueField": "Treviso",
        "useLineColorForBulletBorder": true
    },
    {
        "id": "g2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineColor": "#377eb8",
        "lineThickness": 3,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Veneto",
        "valueField": "Veneto",
        "useLineColorForBulletBorder": true
    },
    {
        "id": "g3",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineColor": "#4daf4a",
        "lineThickness": 3,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Italia",
        "valueField": "Italia",
        "useLineColorForBulletBorder": true
    }];

urls = [
    dataPath + "indice_di_dipendenza.json"
];

generateSerial("chart24", urls, graphs, "Anno", true);

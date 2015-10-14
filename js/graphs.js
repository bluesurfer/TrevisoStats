/* Piramide popolazione
 ----------------------------------------------------------------------------*/
graphs = [{
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "Maschi",
    "title": "Maschi",
    "lineColor": "#4f81bc",
    "clustered": false,
    "balloonFunction": function (item) {
        return item.category + ": " + Math.abs(item.values.value);
    }
}, {
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "Femmine",
    "title": "Femmine",
    "lineColor": "#c0504e",
    "clustered": false,
    "balloonFunction": function (item) {
        return item.category + ": " + Math.abs(item.values.value);
    }
}];

generatePyramid(
    "populationPyramid",
    "data/population-pyramid.json",
    graphs,
    "età");


// Population trend
var graphs = [
    {
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineThickness": 3,
        "lineColor": "#377eb8",
        "fillAlphas": 0.2,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Abitanti",
        "valueField": "inhabitants",
        "useLineColorForBulletBorder": true
    }];

generateSerial("populationSerial", "data/population-trend.json", graphs, "year", true);


// Number of families
graphs = [
    {
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "lineColor": "#e41a1c",
        "lineThickness": 3,
        "fillAlphas": 0.2,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "Famiglie",
        "valueField": "families",
        "useLineColorForBulletBorder": true
    }];
generateSerial("familiesSerial", "data/number-of-families.json", graphs, "year", true);


// Births and deaths
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
generateSerial("birthsDeathsSerial", "data/births-and-deaths.json", graphs, "year", true);

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
generateSerial("migrationTrendSerial", "data/migration-trend.json", graphs, "year", true);


// Population marital status
generatePie("maritalStatusPie", "data/marital-status.json", "status", "percentage",
    ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854"]);

// Population ages
graphs = [
    {
        "id": "g1",
        "balloonText": "Treviso: [[Treviso]]",
        "fillAlphas": 0.8,
        "fillColors": "#bebada",
        "lineColor": "#bebada",
        "valueField": "Treviso",
        "type": "column",
        "title": "Treviso"
    },
    {
        "id": "g2",
        "balloonText": "Veneto: [[Veneto]]",
        "fillAlphas": 0.8,
        "fillColors": "#fb8072",
        "lineColor": "#fb8072",
        "valueField": "Veneto",
        "type": "column",
        "title": "Veneto"
    },
    {
        "id": "g3",
        "balloonText": "Italia: [[Italia]]",
        "fillAlphas": 0.8,
        "lineColor": "#80b1d3",
        "fillColors": "#80b1d3",
        "valueField": "Italia",
        "type": "column",
        "title": "Italia"
    }
];
generateSerial('agesSerial', "data/population-ages.json", graphs, "age_slot");


// Number of family components
graphs = [
    {
        "balloonText": "Centro Storico: [[centre]]",
        "fillAlphas": 0.8,
        "id": "g2",
        "lineColor": "#66c2a5",
        "fillColors": "#66c2a5",
        "valueField": "centre",
        "type": "column",
        "title": "Centro Storico"
    },
    {
        "balloonText": "Intero Comune: [[city]]",
        "fillAlphas": 0.8,
        "id": "g1",
        "lineColor": "#fc8d62",
        "fillColors": "#fc8d62",
        "valueField": "city",
        "type": "column",
        "title": "Intero Comune"
    }

];
generateSerial("famComSerial", "data/families-components.json", graphs, "components");


// Deaths per sex and age.
graphs = [
    {
        "id": "g1",
        "balloonText": "[[value]] decessi",
        "fillAlphas": 0.8,
        "fillColors": '#a6bddb',
        "lineAlpha": 0.2,
        "title": "Maschi",
        "type": "column",
        "valueField": "male"
    },
    {
        "id": "g2",
        "balloonText": "[[value]] decessi",
        "fillAlphas": 0.8,
        "fillColors": '#fa9fb5',
        "lineAlpha": 0.2,
        "title": "Femmine",
        "type": "column",
        "valueField": "female"
    }
];
generateSerial("deathsSexSerial", "data/deaths-per-sex.json", graphs, "age");


// Marriages per age and sex
generatePie("marriagesMPie", "data/marriages-by-age-male.json", "age", "marriages",
    ["#a6bddb", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"]);
generatePie("marriagesFPie", "data/marriages-by-age-female.json", "age", "marriages",
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
generateSerial("censusSerial", "data/census.json", graphs, "year", true);


// Foreign population pyramid
graphs = [{
    "id": "g1",
    "fillAlphas": 0.8,
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
    "fillAlphas": 0.8,
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
generatePyramid("foreignPyramid", "data/foreign-population-pyramid.json", graphs, "age");


// Immigrants map by state
generateMap("foreignStateMap", "data/immigrants-by-state.json", "");
generateMap("foreignAreaMap", "data/immigrants-by-area.json", "%");

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() >= $('.gauge').offset().top) {
        if (!$('.gauge').attr('loaded')) {
            $('.gauge').attr('loaded', true);
            $.getJSON("data/agedness-ratio.json", function (data) {
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
            $.getJSON("data/dependency-ratio.json", function (data) {
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


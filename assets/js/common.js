// Minimalize when screen is less than 768px
$(function () {
    $(window).bind("load resize", function () {
        if ($(this).width() < 769) {
            $('body').addClass('body-small')
        } else {
            $('body').removeClass('body-small')
        }
    })
});


AmCharts.translations["export"]["it"] = {
    "fallback.save.text": "CTRL + C per copiare i dati sulla clipboard.",
    "fallback.save.image": "Click destro -> Salva immagine come... per salvare l'immagine.",

    "capturing.delayed.menu.label": "{{duration}}",
    "capturing.delayed.menu.title": "Clicca per cancellare",

    "menu.label.print": "Stampa",
    "menu.label.undo": "Annulla",
    "menu.label.redo": "Ripeti",
    "menu.label.cancel": "Cancella",

    "menu.label.save.image": "Scarica come ...",
    "menu.label.save.data": "Salva come ...",

    "menu.label.draw": "Annota ...",
    "menu.label.draw.change": "Cambia ...",
    "menu.label.draw.add": "Aggiungi ...",
    "menu.label.draw.shapes": "Forma ...",
    "menu.label.draw.colors": "Colore ...",
    "menu.label.draw.widths": "Dimensione ...",
    "menu.label.draw.opacities": "Opacità ...",
    "menu.label.draw.text": "Testo",

    "menu.label.draw.modes": "Modalità ...",
    "menu.label.draw.modes.pencil": "Penna",
    "menu.label.draw.modes.line": "Linea",
    "menu.label.draw.modes.arrow": "Freccia"
};


// save the real makeChart function for later
AmCharts.lazyLoadMakeChart = AmCharts.makeChart;

// override makeChart function
AmCharts.makeChart = function (a, b, c, urls) {

    // set scroll events
    jQuery(document).on('scroll load touchmove', handleScroll);
    jQuery(window).on('load', handleScroll);

    function handleScroll() {
        var $ = jQuery;
        if (true === b.lazyLoaded)
            return;
        var hT = $('#' + a).offset().top,
            hH = $('#' + a).outerHeight() / 2,
            wH = $(window).height(),
            wS = $(window).scrollTop();
        if (wS > (hT + hH - wH)) {
            b.lazyLoaded = true;
            chart = AmCharts.lazyLoadMakeChart(a, b, c);
            appendDataSelector(chart, a, urls);
            return;
        }
    }

    // Return fake listener to avoid errors
    return {
        addListener: function () {
        }
    };
};

function appendDataSelector(chart, chartDiv, urls) {
    if (urls.length > 1) {
        var selectorId = chartDiv + '-selector';
        var options = '';
        for (var i = urls.length; i--;) {
            var url = urls[i];
            var filename = url.split('/').pop().split('.')[0];
            options += '<option value=' + url + '>' + filename + '</option>\n'
        }

        var selectorHtml = '\
        <div class="form-group">\
            <label for="' + selectorId + '">Seleziona anno:</label>\
            <select id="' + selectorId + '" class="form-control">' + options + '</select>\
        </div>';

        $(selectorHtml).insertBefore("#" + chartDiv);
        $('#' + selectorId).on('change', function () {
            var selected = this.options[this.selectedIndex].value;
            setDataSet(chart, selected);
        });
    }
}


function generateSerial(chartDiv, urls, graphs, categoryField, zoomable) {

    zoomable = typeof zoomable !== 'undefined' ? zoomable : false;

    var chartScrollbar = null;
    var chartCursor = null;
    if (zoomable === true) {
        chartCursor = {};
        chartScrollbar = {
            "graph": "g1",
            "gridAlpha": 0,
            "color": "#888888",
            "scrollbarHeight": 55,
            "backgroundAlpha": 0,
            "selectedBackgroundAlpha": 0.1,
            "selectedBackgroundColor": "#888888",
            "graphFillAlpha": 0,
            "autoGridCount": true,
            "selectedGraphFillAlpha": 0,
            "graphLineAlpha": 0.2,
            "graphLineColor": "#c2c2c2",
            "selectedGraphLineColor": "#888888",
            "selectedGraphLineAlpha": 1
        }
    }

    return AmCharts.makeChart(chartDiv, {
        "type": "serial",
        "theme": "light",
        "language": "it",
        "startDuration": 0.5,
        "legend": {
            "markerLabelGap": 10,
            "useGraphSettings": true
        },
        "dataLoader": {"url": urls[urls.length - 1]},
        "valueAxes": [{
            "axisAlpha": 0.2,
            "dashLength": 1
        }],
        "mouseWheelZoomEnabled": zoomable,
        "graphs": graphs,
        "chartScrollbar": chartScrollbar,
        "chartCursor": chartCursor,
        "categoryField": categoryField,
        "categoryAxis": {
            "axisColor": "#DADADA",
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "export": {
            "position": "bottom-right",
            "enabled": true
        }
    }, undefined, urls);
}


function generatePie(chartDiv, urls, titleField, valueField, colors) {
    return AmCharts.makeChart(chartDiv, {
        "type": "pie",
        "theme": "light",
        "language": "it",
        "startDuration": 0.5,
        "labelsEnabled": false,
        "dataLoader": {"url": urls[urls.length - 1]},
        "addClassNames": true,
        "colors": colors,
        "titleField": titleField,
        "valueField": valueField,
        "legend": {
            "position": "bottom",
            "autoMargins": true
        },
        "export": {
            "position": "bottom-right",
            "enabled": true
        },
        "innerRadius": "30%",
        "defs": {
            "filter": [{
                "id": "shadow",
                "width": "200%",
                "height": "200%",
                "feOffset": {
                    "result": "offOut",
                    "in": "SourceAlpha",
                    "dx": 0,
                    "dy": 0
                },
                "feGaussianBlur": {
                    "result": "blurOut",
                    "in": "offOut",
                    "stdDeviation": 5
                },
                "feBlend": {
                    "in": "SourceGraphic",
                    "in2": "blurOut",
                    "mode": "normal"
                }
            }]
        }
    }, undefined, urls);
}


function generatePyramid(chartDiv, urls, graphs, categoryField) {
    return AmCharts.makeChart(chartDiv, {
        "type": "serial",
        "theme": "light",
        "language": "it",
        "rotate": true,
        "startDuration": 0.5,
        "marginBottom": 50,
        "dataLoader": {"url": urls[urls.length - 1]},
        "legend": {
            "valueText": null,
            "position": "bottom",
            "autoMargins": true
        },
        "graphs": graphs,
        "categoryField": categoryField,
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0.2,
            "axisAlpha": 0
        },
        "valueAxes": [{
            "gridAlpha": 0,
            "ignoreAxisWidth": true,
            "labelFunction": function (value) {
                return Math.abs(value);
            },
            "guides": [{
                "value": 0,
                "lineAlpha": 0.2
            }]
        }],
        "balloon": {
            "fixedPosition": true
        },
        "chartCursor": {
            "valueBalloonsEnabled": false,
            "cursorAlpha": 0.05,
            "fullWidth": true
        },
        "export": {
            "position": "bottom-right",
            "enabled": true
        },
        "responsive": {
            "enabled": true
        }
    }, undefined, urls);
}


function generateMap(chartDiv, urls, areasSettings, unitName) {
    return AmCharts.makeChart(chartDiv, {
        "type": "map",
        "language": "it",
        "startDuration": 0.5,
        "dataLoader": {"url": urls[urls.length - 1]},
        "theme": "light",
        "colorSteps": 20,
        "balloon": {
            "adjustBorderColor": true,
            "color": "#000000",
            "cornerRadius": 5,
            "fillColor": "#FFFFFF"
        },
        areasSettings: areasSettings,
        valueLegend: {
            right: 300
        },
        "export": {
            "enabled": true,
            "position": "bottom-right",
            "menu": [{
                "class": "export-main",
                menu: [{
                    label: "Scarica come ...",
                    menu: ["PNG", "JPG", "SVG", "PDF"]
                }, {
                    label: "Salva come ...",
                    menu: [
                        "CSV",
                        {
                            "label": "CSV",
                            click: function () {
                                var data = this.setup.chart.dataProvider;
                                this.toCSV({
                                    data: getMapDataArray(data)
                                }, function (data) {
                                    this.download(data, this.defaults.formats.CSV.mimeType, 'AmCharts.csv');
                                });
                            }
                        },
                        "XLSX",
                        {
                            "label": "XLSX",
                            click: function () {
                                var data = this.setup.chart.dataProvider;
                                this.toXLSX({
                                    data: getMapDataArray(data)
                                }, function (data) {
                                    this.download(data, this.defaults.formats.XLSX.mimeType, 'AmCharts.xlsx');
                                });
                            }
                        },
                        "JSON",
                        {
                            "label": "JSON",
                            click: function () {
                                var data = this.setup.chart.dataProvider;
                                this.toJSON({
                                    data: getMapDataArray(data)
                                }, function (data) {
                                    this.download(data, this.defaults.formats.JSON.mimeType, 'AmCharts.json');
                                });
                            }
                        }
                    ]
                }, {
                    label: "Annota ...",
                    action: "draw"
                }, {
                    format: "PRINT",
                    label: "Stampa"
                }]
            }]
        },
        balloonLabelFunction: function (mapObject, ammap) {
            return mapObject.title + ': ' + mapObject.value + unitName;
        },
        "responsive": {
            "enabled": true
        }
    }, undefined, urls);
}


function setDataSet(chart, dataset_url) {
    chart.dataLoader.url = dataset_url;
    chart.dataLoader.loadData();

}


function getMapDataArray(data) {
    var lenAreas = data.areas.length;
    var objs = new Array(lenAreas);
    for (i = 0; i < lenAreas; i++) {
        var title = data.areas[i].title;
        var value = data.areas[i].value;
        var id = data.areas[i].value;
        objs[i] = {
            "id": id,
            "title": title,
            "value": value
        };
    }
    return objs;
}

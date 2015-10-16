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

    var chart = AmCharts.makeChart(chartDiv, {
        "type": "serial",
        "theme": "light",
        "language": "it",
        "startDuration": 0,
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
    });

    appendDataSelector(chart, chartDiv, urls);
}


function generatePie(chartDiv, urls, titleField, valueField, colors) {
    var pie = AmCharts.makeChart(chartDiv, {
        "type": "pie",
        "theme": "light",
        "startDuration": 0,
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
    });

    appendDataSelector(pie, chartDiv, urls);
}


function generatePyramid(chartDiv, urls, graphs, categoryField) {
    var chart = AmCharts.makeChart(chartDiv, {
        "type": "serial",
        "theme": "light",
        "rotate": true,
        "startDuration": 0,
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
    });

    appendDataSelector(chart, chartDiv, urls);
}


function generateMap(chartDiv, url, areasSettings, unitName) {
    return AmCharts.makeChart(chartDiv, {
        "type": "map",
        "startDuration": 0,
        "dataLoader": {"url": url},
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
            "position": "bottom-right",
            "enabled": true
        },
        balloonLabelFunction: function (mapObject, ammap) {
            return mapObject.title + ': ' + mapObject.value + unitName;
        },
        "responsive": {
            "enabled": true
        }
    });
}


function setDataSet(chart, dataset_url) {
    chart.dataLoader.url = dataset_url;
    chart.dataLoader.loadData();

}
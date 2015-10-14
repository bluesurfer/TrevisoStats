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

AmCharts.loadJSON = function (url) {
    // create the request
    if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari
        var request = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        var request = new ActiveXObject('Microsoft.XMLHTTP');
    }

    // load it
    // the last "false" parameter ensures that our code will wait before the
    // data is loaded
    request.open('GET', url, false);
    request.send();

    // parse and return the output
    return eval(request.responseText);
};


function handleRollOver(e) {
    var wedge = e.dataItem.wedge.node;
    wedge.parentNode.appendChild(wedge);
}


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
            "autoGridCount": true,
            "graph": "g1",
            "scrollbarHeight": 40
        }
    }

    var chart = AmCharts.makeChart(chartDiv, {
        "type": "serial",
        "theme": "light",
        "language": "it",
        "startDuration": 0.5,
        "legend": {
            "markerLabelGap": 10,
            "useGraphSettings": true
        },
        "dataProvider": AmCharts.loadJSON(urls[urls.length - 1]),
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
        "labelsEnabled": false,
        "dataProvider": AmCharts.loadJSON(urls[urls.length - 1]),
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

    pie.addListener("rollOverSlice", function (e) {
        handleRollOver(e);
    });

    appendDataSelector(pie, chartDiv, urls);
}


function generatePyramid(chartDiv, urls, graphs, categoryField) {
    var chart = AmCharts.makeChart(chartDiv, {
        "type": "serial",
        "theme": "light",
        "rotate": true,
        "startDuration": 0.5,
        "marginBottom": 50,
        "dataProvider": AmCharts.loadJSON(urls[urls.length - 1]),
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
/*
 function generateMap(chartDiv, url, unitName) {
 var map = AmCharts.makeChart(chartDiv, {
 "type": "map",
 "theme": "light",
 "colorSteps": 20,
 "balloon": {
 "adjustBorderColor": true,
 "color": "#000000",
 "cornerRadius": 5,
 "fillColor": "#FFFFFF"
 },
 valueLegend: {
 right: 300
 },
 "export": {
 "position": "bottom-right",
 "enabled": true
 },
 "dataLoader": {
 "url": url,
 "showErrors": false
 },
 balloonLabelFunction: function (mapObject, ammap) {
 return mapObject.title + ': ' + mapObject.value + unitName;
 },
 "responsive": {
 "enabled": true
 }
 });

 return map
 }
 */
function setDataSet(chart, dataset_url) {
    chart.dataProvider = AmCharts.loadJSON(dataset_url);
    chart.validateData();
    chart.animateAgain();
}
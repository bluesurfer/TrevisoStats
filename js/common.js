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

/**
 * Lazy-init AmCharts graphs (relies on jQuery)
 */

// save the real makeChart function for later
AmCharts.lazyLoadMakeChart = AmCharts.makeChart;

// override makeChart function
AmCharts.makeChart = function (a, b, c) {

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
            AmCharts.lazyLoadMakeChart(a, b, c);
        }
    }

    // Return fake listener to avoid errors
    return {
        addListener: function () {
        }
    };
};

function handleInit() {
    chart.legend.addListener("rollOverItem", handleRollOver);
}

function handleRollOver(e) {
    var wedge = e.dataItem.wedge.node;
    wedge.parentNode.appendChild(wedge);
}


/**
 * Functions used to generates common charts
 */
function generateSerial(chartDiv, url, graphs, categoryField, zoomable) {

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

    return AmCharts.makeChart(chartDiv, {
        "type": "serial",
        "theme": "light",
        "language": "it",
        "startDuration": 0.5,
        "legend": {
            "markerLabelGap": 10,
            "useGraphSettings": true
        },
        "dataLoader": {
            "url": url,
            "format": "json"
        },
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
}

function generatePie(chartDiv, url, titleField, valueField, colors) {
    var pie = AmCharts.makeChart(chartDiv, {
        "type": "pie",
        "theme": "light",
        "labelsEnabled": false,
        "dataLoader": {
            "url": url,
            "format": "json"
        },
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

    pie.addListener("init", handleInit);
    pie.addListener("rollOverSlice", function (e) {
        handleRollOver(e);
    });
}

function generatePyramid(chartDiv, url, graphs, categoryField) {
    return AmCharts.makeChart(chartDiv, {
        "type": "serial",
        "theme": "light",
        "rotate": true,
        "startDuration": 0.5,
        "marginBottom": 50,
        "dataSets": [
            {
                "title": "first data set",
                "dataLoader": {
                    "url": url,
                }
            }
        ],
        dataSetSelector: {
            position: "left"
        },
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
}

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

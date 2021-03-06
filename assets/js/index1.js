( function ( $ ) {
	"use strict";
    var ctx = document.getElementById( "lineChart1" );
    ctx.height = 100;
	
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
            datasets: [
                {
                    label: "Profit",
                    borderColor: "rgba(255, 92, 117)",
                    borderWidth: "1",
                    backgroundColor: "rgb(255, 92, 117, 0.9)",
                    data: [0, 30, 60, 25, 60, 25, 50, 10, 50, 90, 120]
                            },
                {
                    label: "sales",
                    borderColor: "rgba(115, 108, 199)",
                    borderWidth: "1",
                    backgroundColor: "rgba(115, 108, 199, 0.9)",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [0, 60, 25, 100, 20, 75, 30, 55, 20, 60, 20],
                            }
                        ]
        },
        options: {
			scales: {
					xAxes: [{
						display: true,
						gridLines: {
							color: 'rgba(255,255,255,0.061)'
						},
						scaleLabel: {
							display: true,
							labelString: 'Year'
						}
					}],
					yAxes: [{
						display: true,
						gridLines: {
							color: 'rgba(255,255,255,0.061)'
						},
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				},
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,
				
            },
			tooltips: {
				  
				},
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    } );
	Chart.defaults.global.defaultColor = "#fff";
		Chart.defaults.global.defaultFontColor = "#fff";
} )( jQuery );


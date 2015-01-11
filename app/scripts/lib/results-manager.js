'use strict';

(function( resultsManager, undefined ) {

  resultsManager.results = [];

  resultsManager.addResult = function(result) {
    resultsManager.results.push(result);
  };

  resultsManager.removeResultAt = function(index) {
    resultsManager.splice(index, 1);
  };

  resultsManager.drawChart = function() {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('number', 'n');
    dataTable.addColumn('number', 'tiempo');
    // A column for custom tooltip content
    dataTable.addColumn({type: 'string', role: 'tooltip'});
    dataTable.addColumn({type: 'string', role: 'style'});
    dataTable.addRows([
      [ 8,      12,     'tooltip', 'point { size: 10; shape-type: circle; fill-color: #a52714'],
      [ 4,      5.5,     'tooltip', 'point { size: 18; shape-type: circle; fill-color: #a52714'],
      [ 11,     14,     'tooltip', 'point { size: 18; shape-type: circle; fill-color: #a52714'],
      [ 4,      5,     'tooltip', 'point { size: 18; shape-type: circle; fill-color: #a52714'],
      [ 3,      3.5,     'tooltip', 'point { size: 18; shape-type: circle; fill-color: #a52714'],
      [ 6.5,    7,     'tooltip', 'point { size: 18; shape-type: circle; fill-color: #a52714']
    ]);

    var options = {
      title: 'Tamaño del arreglo (n) contra el tiempo de ejecución',
      hAxis: {title: 'Tamaño del arreglo (n)'},
      vAxis: {title: 'Tiempo de ejecución'},
      crosshair: { trigger: 'both' },
      legend: 'none'
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('chart'));

    chart.draw(dataTable, options);
  };

}( window.resultsManager = window.resultsManager || {} ));

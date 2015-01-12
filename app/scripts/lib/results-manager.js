'use strict';

(function( resultsManager, undefined ) {

  resultsManager.results = [];

  var tooltipTemplate = _.template('<b>Algoritmo:</b> <%=name%><br><b>n:</b> <%=n%><br><b>Tiempo:</b> <%=time%>');

  var styleTemplate = _.template('point { fill-color: <%=color%>');

  var algorithmColors = {
    'Insertion Sort':       '#E94D20',
    'Heap insert sort':     '#ECA403',
    'Merge sort':           '#63A74A',
    'Merge sort mejorado':  '#15A0C8',
    'Heap sort':            '#4151A3',
    'Quick sort':           '#703593',
    'Quick sort aleatorio': '#981B48',
    'Counting sort':        '#795548'
  };

  resultsManager.addResult = function(result) {
    resultsManager.results.push(result);
    resultsManager.drawChart();
  };

  resultsManager.removeResultAt = function(index) {
    resultsManager.splice(index, 1);
  };

  resultsManager.drawChart = function() {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('number', 'n');
    dataTable.addColumn('number', 'tiempo');
    // A column for custom tooltip content
    dataTable.addColumn({type: 'string', role: 'tooltip', p: {'html': true}});
    dataTable.addColumn({type: 'string', role: 'style'});
    dataTable.addRows(getDataForChart());

    var options = {
      title: 'Tamaño del arreglo (n) contra el tiempo de ejecución',
      hAxis: {title: 'Tamaño del arreglo (n)'},
      vAxis: {title: 'Tiempo de ejecución'},
      crosshair: { trigger: 'both' },
      legend: 'none',
      tooltip: { isHtml: true }
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('chart'));

    chart.draw(dataTable, options);
  };

  var getDataForChart = function() {
    var chartData = _.map(resultsManager.results, function(result){
      var row = [];
      row.push(result.n);
      row.push(result.time);

      // create the tooltip
      row.push(tooltipTemplate(result));
      // create the style
      row.push(createStyle(result));

      return row;
    });

    return chartData;
  };

  var createStyle = function(result) {
    var color = algorithmColors[result.name];

    return styleTemplate({color: color});
  };

}( window.resultsManager = window.resultsManager || {} ));

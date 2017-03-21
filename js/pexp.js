
//############### check for window width #########

if (window.innerWidth < 1000)  {
        $("#warningbox").css("display","block");
};

window.onresize = function(event) {

	if (window.innerWidth < 1000)  {
	        $("#warningbox").css("display","block");
	}
	else{
		$("#warningbox").css("display","none");
	}

}





//########################


APP={};

var dataA1 = 'data/linksTot1.csv';
var dataA2 = 'data/linksTot2.csv';
var dataA3 = 'data/linksTot3.csv';
var dataA4 = 'data/linksTot4.csv';
var dataA5 = 'data/linksTot5.csv';
var dataA6 = 'data/linksTot6.csv';
var dataA7 = 'data/linksTot7.csv';
var dataA8 = 'data/linksTot8.csv';
var dataB1 = 'data/linksTot9.csv';
var dataB2 = 'data/linksTot10.csv';
var dataB3 = 'data/linksTot11.csv';
var dataB4 = 'data/linksTot12.csv';
var dataB5 = 'data/linksTot13.csv';
var dataC1 = 'data/linksTot14.csv';
var dataC2 = 'data/linksTot15.csv';
var dataC3 = 'data/linksTot16.csv';
var dataC4 = 'data/linksTot17.csv';
var dataC5 = 'data/linksTot18.csv';
var dataC6 = 'data/linksTot19.csv';
var dataC7 = 'data/linksTot20.csv';
var dataC8 = 'data/linksTot21.csv';
var dataC9 = 'data/linksTot22.csv';
var dataC10 = 'data/linksTot23.csv';
var dataC11 = 'data/linksTot24.csv';
var dataD1 = 'data/linksTot25.csv';
var dataD2 = 'data/linksTot26.csv';
var dataD3 = 'data/linksTot27.csv';
var dataD4 = 'data/linksTot28.csv';
var dataD5 = 'data/linksTot29.csv';
var dataD6 = 'data/linksTot30.csv';
var dataD7 = 'data/linksTot31.csv';
var dataD8 = 'data/linksTot32.csv';
var dataE1 = 'data/linksTot33.csv';
var dataE2 = 'data/linksTot34.csv';
var dataE3 = 'data/linksTot35.csv';
var dataT = 'data/linksTot.csv';

var newData = 'data/linksTot.csv';
var dataGraph = 'data/techfieldfreq.tsv';

APP.main = function () {
  APP.buildMap();
  APP.buildCharts();
  APP.buildNetwork();

  APP.updateData();
  APP.updateMap();
  APP.updateD();
};



APP.updateData = function (newData) {

  d3.select('#features')
    .on('change', function() { 
          var newData = eval(d3.select(this).property('value'));
          console.log('Data used in map are : ' + newData);
          if (map != null){
            map.remove();
          };
          if (chart != null){
            var chart;
          };

          APP.updateMap(newData);
          $('#graphcontainer g').remove();
          $('#graphcontainer path').remove();
          $('#graphcontainer svg').remove();

          updateD();

          });

};



updateD = function (){
  if (eval(d3.select('#features').property('value'))==dataA1){
    dataGraph='data/tffreq1.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataA2){
    dataGraph='data/tffreq2.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataA3){
    dataGraph='data/tffreq3.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataA4){
    dataGraph='data/tffreq4.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataA5){
    dataGraph='data/tffreq5.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataA6){
    dataGraph='data/tffreq6.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataA7){
    dataGraph='data/tffreq7.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataA8){
    dataGraph='data/tffreq8.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataB1){
    dataGraph='data/tffreq9.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataB2){
    dataGraph='data/tffreq10.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataB3){
    dataGraph='data/tffreq11.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataB4){
    dataGraph='data/tffreq12.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataB5){
    dataGraph='data/tffreq13.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataC1){
    dataGraph='data/tffreq14.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataC2){
    dataGraph='data/tffreq15.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataC3){
    dataGraph='data/tffreq16.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataC4){
    dataGraph='data/tffreq17.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataC5){
    dataGraph='data/tffreq18.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataC6){
    dataGraph='data/tffreq19.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataC7){
    dataGraph='data/tffreq20.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataC8){
    dataGraph='data/tffreq21.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataC9){
    dataGraph='data/tffreq22.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataC10){
    dataGraph='data/tffreq23.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataC11){
    dataGraph='data/tffreq24.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataD1){
    dataGraph='data/tffreq25.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataD2){
    dataGraph='data/tffreq26.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataD3){
    dataGraph='data/tffreq27.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataD4){
    dataGraph='data/tffreq28.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataD5){
    dataGraph='data/tffreq29.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataD6){
    dataGraph='data/tffreq30.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataD7){
    dataGraph='data/tffreq31.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataD8){
    dataGraph='data/tffreq32.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataE1){
    dataGraph='data/tffreq33.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataE2){
    dataGraph='data/tffreq34.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else if (eval(d3.select('#features').property('value'))==dataE3){
    dataGraph='data/tffreq35.tsv';
    console.log('Data used in barcharts are : ' + dataGraph);
  } else {
  dataGraph='data/techfieldfreq.tsv';
  console.log('Data used in barcharts are : ' + dataGraph);
}
if (chart != null){
    var chart;
  };

  updateCharts(dataGraph);
};








APP.buildMap = function(){


var bounds = [[22.904303, -39.086914], [73.738681, 62.275850]];

map = new L.map('map', {
            center: new L.LatLng(48.29,5),
            zoom: 5,
            layers: [new L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9tYWlubGFjcm9peCIsImEiOiJjaWY2bGFkdW4wMDY5c3VrcDgyanZib3diIn0.9QZEwFfG1GLHmtJw-oeoQA', {
      attribution: '<a href="http://www.mapbox.com">Mapbox</a> style © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      minZoom: 3,
      maxZoom: 18,
      maxBounds: bounds })]
            });


  // Initialize the SVG layer

  map._initPathRoot()

            // Setup svg element to work with
  var svg = d3.select("#map").select("svg"),
                linklayer = svg.append("g"),
                nodelayer = svg.append("g");

  // Load data asynchronosuly
  d3.json("data/nodes.geojson", function(nodes) {
    d3.csv(newData, function(links) {

        // Setup spatialsankey object
        var spatialsankey = d3.spatialsankey()
                                .lmap(map)
                                .nodes(nodes.features)
                                .links(links);

        var mouseover = function(d){

              var label = circs.append("text")
                  .attr("dy", ".35em")
                  .style("text-anchor", "end")
                  .text(function(d) { return d.id; });

              var tip = d3.select("#nodeid")
                  .html(d.id);
              
               $(this).css('cursor','pointer');
            

              // Get link data for this node
              var nodelinks = spatialsankey.links().filter(function(link){
                return link.source == d.id;
              });

              // Add data to link layer
              var beziers = linklayer.selectAll("path").data(nodelinks);
              link = spatialsankey.link(options);

              // Draw new links
              beziers.enter()
                .append("path")
                .attr("d", link)
                .attr('id', function(d){return d.id})
                .style("stroke-width", spatialsankey.link().width());

              // Remove old links
              beziers.exit().remove();

              // Hide inactive nodes
               var circleUnderMouse = this;
                circs.transition().style('opacity',function () {
                  return (this === circleUnderMouse) ? 0.7 : 0;
              });
        };

        var mouseout = function(d) {
              // Remove links
              linklayer.selectAll("path").remove();
              // Show all nodes
              circs.transition().style('opacity', 0.7);
        };




var chord = function(d){

$('#mynetwork').empty();
$('#mynetwork').css({"background-color":"white"});

var selectedCity = d.id;


        var tipnet = d3.select("#netnode")
                  .html(d.id);

  //*******************************************************************
      //  CREATE MATRIX AND MAP
      //*******************************************************************
      d3.csv('data/linksTotchord.csv', function (error, data) {
              console.log("chord data is " + selectedCity)
              var data = data.filter(function(d){ return d.source == selectedCity});

              var mpr = chordMpr(data);
              mpr
                .addValuesToMap('source')
                .addValuesToMap('target')
                .setFilter(function (row, a, b) {
                  return (row.source === a.name && row.target === b.name) ||
                         (row.source === b.name && row.target === a.name)
                })
                .setAccessor(function (recs, a, b) {
                  if (!recs[0]) return 0;
                    return recs[0].source === a.name ? +recs[0].flow1 : +recs[0].flow2; 
                });
              drawChords(mpr.getMatrix(), mpr.getMap());
            });


      //*******************************************************************
      //  DRAW THE CHORD DIAGRAM
      //*******************************************************************

      function drawChords (matrix, mmap) {
              var w = 980, h = 600, r1 = h / 2, r0 = r1 - 105;
              var fill = d3.scale.ordinal()
                  .range(['#c7b570','#c6cdc7','#335c64','#768935','#507282','#5c4a56','#aa7455','#574109','#837722','#73342d','#0a5564','#9c8f57','#7895a4','#4a5456','#b0a690','#0a3542',]);
              var chord = d3.layout.chord()
                  .padding(.02)
                  .sortSubgroups(d3.descending)
                  .sortChords(d3.descending);
              var arc = d3.svg.arc()
                  .innerRadius(r0)
                  .outerRadius(r0 + 20);
              var svg = d3.select("#mynetwork").append("svg:svg")
                  .attr("width", w)
                  .attr("height", h)
                .append("svg:g")
                  .attr("id", "circle")
                  .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");
                  svg.append("circle")
                      .attr("r", r0 + 20);
              var rdr = chordRdr(matrix, mmap);
              chord.matrix(matrix);
              var g = svg.selectAll("g.group")
                  .data(chord.groups())
                  .enter().append("svg:g")
                  .attr("class", "group")
                  .on("mouseover", mouseover)
                  .on("mouseout", function (d) { d3.select("#tooltip").style("visibility", "hidden") });
              g.append("svg:path")
                  .style("stroke", "black")
                  .style("fill", function(d) { return fill(rdr(d).gname); })
                  .attr("d", arc);
              g.append("svg:text")
                  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
                  .attr("dy", ".35em")
                  .style("font-family", "helvetica, arial, sans-serif")
                  .style("font-size", "9px")
                  .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
                  .attr("transform", function(d) {
                        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                            + "translate(" + (r0 + 35) + ")"
                            + (d.angle > Math.PI ? "rotate(180)" : "");
                      })
                  .text(function(d) { return rdr(d).gname; });
              
              var chordPaths = svg.selectAll("path.chord")
                      .data(chord.chords())
                      .enter().append("svg:path")
                      .attr("class", "chord")
                      .style("stroke", function(d) { return d3.rgb(fill(rdr(d).sname)).darker(); })
                      .style("fill", function(d) { return fill(rdr(d).sname); })
                      .attr("d", d3.svg.chord().radius(r0))
                      .on("mouseover", function (d) {
                            d3.select("#tooltip")
                              .style("visibility", "visible")
                              .html(chordTip(rdr(d)))
                              .style("top", function () { return (d3.event.pageY - 170)+"px"})
                              .style("left", function () { return (d3.event.pageX - 100)+"px";})
                          })
                      .on("mouseout", function (d) { d3.select("#tooltip").style("visibility", "hidden") });


          function chordTip (d) {
            var p = d3.format(".1%"), q = d3.format("d")
            return "Chord Info:<br/>"
              +  d.sname + " cits " + d.tname
              + ": " + q(d.svalue) + " patents<br/>"
              + p(d.svalue/d.stotal) + " of " + d.sname + "'s Total (" + q(d.stotal) + " patents)<br/>"
              + p(d.svalue/d.mtotal) + " of Matrix Total (" + q(d.mtotal) + " patents)<br/>"
              + "<br/>"
              + d.tname + " cits " + d.sname
              + ": " + q(d.tvalue) + " patents<br/>"
              + p(d.tvalue/d.ttotal) + " of " + d.tname + "'s Total (" + q(d.ttotal) + " patents)<br/>"
              + p(d.tvalue/d.mtotal) + " of Matrix Total (" + q(d.mtotal) + " patents)";
          }


          function groupTip (d) {
            var p = d3.format(".1%"), q = d3.format("d")
            return "Group Info:<br/>"
                + d.gname + " : " + q(d.gvalue) + " patents<br/>"
                + p(d.gvalue/d.mtotal) + " of Matrix Total (" + q(d.mtotal) + " patents)"
          }


          function mouseover(d, i) {
            d3.select("#tooltip")
              .style("visibility", "visible")
              .html(groupTip(rdr(d)))
              .style("top", function () { return (d3.event.pageY - 80)+"px"})
              .style("left", function () { return (d3.event.pageX - 130)+"px";})
            chordPaths.classed("fade", function(p) {
                  return p.source.index != i
                      && p.target.index != i;
                });
          }



      }
      updateCitiesCharts(selectedCity);
};


        // Draw nodes
    var node = spatialsankey.node()
    var circs = nodelayer.selectAll("circle")
      .data(spatialsankey.nodes())
      .enter()
      .append("circle")
      .attr("cx", node.cx)
      .attr("cy", node.cy)
      .attr("r", node.r)
      .style("fill", node.fill)
      .attr("opacity", 0.7)
      .on('mouseover', mouseover)
      .on('mouseout', mouseout)
      .on('click', chord, updateCitiesCharts);


    // Adopt size of drawn objects after leaflet zoom reset
    var zoomend = function(){
          linklayer.selectAll("path").attr("d", spatialsankey.link());

          circs.attr("cx", node.cx)
               .attr("cy", node.cy);
          };

    map.on("zoomend", zoomend);
    });
  });



  var options = {'use_arcs': false, 'flip': false};
  
  d3.selectAll("input").forEach(function(x){
      options[x.name] = parseFloat(x.value);
      })

  d3.selectAll("input").on("click", function(){
      options[this.name] = parseFloat(this.value);
      });


};



APP.updateMap = function (newData) {


  map = new L.map('map', {
            center: new L.LatLng(48.29,5),
            zoom: 5,
            layers: [new L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9tYWlubGFjcm9peCIsImEiOiJjaWY2bGFkdW4wMDY5c3VrcDgyanZib3diIn0.9QZEwFfG1GLHmtJw-oeoQA', {
            attribution: '<a href="http://www.mapbox.com">Mapbox</a> style © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18})]
            });


  map._initPathRoot()


  // Mise en place objet svg

  var svg = d3.select("#map").select("svg"),
                linklayer = svg.append("g"),
                nodelayer = svg.append("g");

  // chargement des données

  d3.json("data/nodes.geojson", function(nodes) {
   
    d3.csv(newData, function(links) {

        // paramétrage spatialsankey

        var spatialsankey = d3.spatialsankey()
                                .lmap(map)
                                .nodes(nodes.features)
                                .links(links);

        var mouseover = function(d){

              var label = circs.append("text")
                  .attr("dy", ".35em")
                  .style("text-anchor", "end")
                  .text(function(d) { return d.id; });

              var tip = d3.select("#nodeid")
                  .html(d.id);
              
                 $(this).css('cursor','pointer');


              // Get link data for this node
              var nodelinks = spatialsankey.links().filter(function(link){
                return link.source == d.id;
              });

              // Add data to link layer
              var beziers = linklayer.selectAll("path").data(nodelinks);
              link = spatialsankey.link(options);

              // Draw new links
              beziers.enter()
                .append("path")
                .attr("d", link)
                .attr('id', function(d){return d.id})
                .style("stroke-width", spatialsankey.link().width());

              // Remove old links
              beziers.exit().remove();

              // Hide inactive nodes
               var circleUnderMouse = this;
                circs.transition().style('opacity',function () {
                  return (this === circleUnderMouse) ? 0.7 : 0;
              });
        };

        var mouseout = function(d) {
              // Remove links
              linklayer.selectAll("path").remove();
              // Show all nodes
              circs.transition().style('opacity', 0.7);
        };

var chord2 = function(d){

$('#mynetwork').empty();
$('#mynetwork').css({"background-color":"white"});

var selectedCity = d.id;


        var tipnet = d3.select("#netnode")
                  .html(d.id);

  //*******************************************************************
      //  CREATE MATRIX AND MAP
      //*******************************************************************
      d3.csv('data/linksTotchord.csv', function (error, data) {
              console.log("chord data is " + selectedCity)
              var data = data.filter(function(d){ return d.source == selectedCity});

              var mpr = chordMpr(data);
              mpr
                .addValuesToMap('source')
                .addValuesToMap('target')
                .setFilter(function (row, a, b) {
                  return (row.source === a.name && row.target === b.name) ||
                         (row.source === b.name && row.target === a.name)
                })
                .setAccessor(function (recs, a, b) {
                  if (!recs[0]) return 0;
                    return recs[0].source === a.name ? +recs[0].flow1 : +recs[0].flow2; 
                });
              drawChords(mpr.getMatrix(), mpr.getMap());
            });


      //*******************************************************************
      //  DRAW THE CHORD DIAGRAM
      //*******************************************************************

      function drawChords (matrix, mmap) {
              var w = 980, h = 600, r1 = h / 2, r0 = r1 - 105;
              var fill = d3.scale.ordinal()
                  .range(['#c7b570','#c6cdc7','#335c64','#768935','#507282','#5c4a56','#aa7455','#574109','#837722','#73342d','#0a5564','#9c8f57','#7895a4','#4a5456','#b0a690','#0a3542',]);
              var chord = d3.layout.chord()
                  .padding(.02)
                  .sortSubgroups(d3.descending)
                  .sortChords(d3.descending);
              var arc = d3.svg.arc()
                  .innerRadius(r0)
                  .outerRadius(r0 + 20);
              var svg = d3.select("#mynetwork").append("svg:svg")
                  .attr("width", w)
                  .attr("height", h)
                .append("svg:g")
                  .attr("id", "circle")
                  .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");
                  svg.append("circle")
                      .attr("r", r0 + 20);
              var rdr = chordRdr(matrix, mmap);
              chord.matrix(matrix);
              var g = svg.selectAll("g.group")
                  .data(chord.groups())
                  .enter().append("svg:g")
                  .attr("class", "group")
                  .on("mouseover", mouseover)
                  .on("mouseout", function (d) { d3.select("#tooltip").style("visibility", "hidden") });
              g.append("svg:path")
                  .style("stroke", "black")
                  .style("fill", function(d) { return fill(rdr(d).gname); })
                  .attr("d", arc);
              g.append("svg:text")
                  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
                  .attr("dy", ".35em")
                  .style("font-family", "helvetica, arial, sans-serif")
                  .style("font-size", "9px")
                  .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
                  .attr("transform", function(d) {
                        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                            + "translate(" + (r0 + 35) + ")"
                            + (d.angle > Math.PI ? "rotate(180)" : "");
                      })
                  .text(function(d) { return rdr(d).gname; });
              
              var chordPaths = svg.selectAll("path.chord")
                      .data(chord.chords())
                      .enter().append("svg:path")
                      .attr("class", "chord")
                      .style("stroke", function(d) { return d3.rgb(fill(rdr(d).sname)).darker(); })
                      .style("fill", function(d) { return fill(rdr(d).sname); })
                      .attr("d", d3.svg.chord().radius(r0))
                      .on("mouseover", function (d) {
                            d3.select("#tooltip")
                              .style("visibility", "visible")
                              .html(chordTip(rdr(d)))
                              .style("top", function () { return (d3.event.pageY - 170)+"px"})
                              .style("left", function () { return (d3.event.pageX - 100)+"px";})
                          })
                      .on("mouseout", function (d) { d3.select("#tooltip").style("visibility", "hidden") });


          function chordTip (d) {
            var p = d3.format(".1%"), q = d3.format("d")
            return "Chord Info:<br/>"
              +  d.sname + " cits " + d.tname
              + ": " + q(d.svalue) + " patents<br/>"
              + p(d.svalue/d.stotal) + " of " + d.sname + "'s Total (" + q(d.stotal) + " patents)<br/>"
              + p(d.svalue/d.mtotal) + " of Matrix Total (" + q(d.mtotal) + " patents)<br/>"
              + "<br/>"
              + d.tname + " cits " + d.sname
              + ": " + q(d.tvalue) + " patents<br/>"
              + p(d.tvalue/d.ttotal) + " of " + d.tname + "'s Total (" + q(d.ttotal) + " patents)<br/>"
              + p(d.tvalue/d.mtotal) + " of Matrix Total (" + q(d.mtotal) + " patents)";
          }


          function groupTip (d) {
            var p = d3.format(".1%"), q = d3.format("d")
            return "Group Info:<br/>"
                + d.gname + " : " + q(d.gvalue) + " patents<br/>"
                + p(d.gvalue/d.mtotal) + " of Matrix Total (" + q(d.mtotal) + " patents)"
          }


          function mouseover(d, i) {
            d3.select("#tooltip")
              .style("visibility", "visible")
              .html(groupTip(rdr(d)))
              .style("top", function () { return (d3.event.pageY - 80)+"px"})
              .style("left", function () { return (d3.event.pageX - 130)+"px";})
            chordPaths.classed("fade", function(p) {
                  return p.source.index != i
                      && p.target.index != i;
                });
          }



      }
      updateCitiesCharts(selectedCity);
};

        // dessin des objets

        var node = spatialsankey.node()
        var circs = nodelayer.selectAll("circle")
          .data(spatialsankey.nodes())
          .enter()
          .append("circle")
          .attr("cx", node.cx)
          .attr("cy", node.cy)
          .attr("r", node.r)
          .style("fill", node.fill)
          .attr("opacity", 0.7)
          .on('mouseover', mouseover)
          .on('mouseout', mouseout)
          .on('click',chord2);


    // zoom adaptatif

    var zoomend = function(){
          linklayer.selectAll("path").attr("d", spatialsankey.link());

          circs.attr("cx", node.cx)
               .attr("cy", node.cy);
    };

      map.on("zoomend", zoomend);
    });

  });

  var options = {'use_arcs': false, 'flip': false};

  d3.selectAll("input").forEach(function(x){
      options[x.name] = parseFloat(x.value);
    })

  d3.selectAll("input").on("click", function(){
      options[this.name] = parseFloat(this.value);
    });



};



APP.buildNetwork = function () {


  var allNodes;
  var highlightActive = false;


function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      }
      else {
        error(xhr);
      }
    }
  };
  xhr.open('GET', path, true);
  xhr.send();
}
  var network;
  var nodes = new vis.DataSet();
  var edges = new vis.DataSet();
  var gephiImported;
  loadJSON('data/graphTottitle.json', redrawAll, function(err) {console.log('error')});
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    nodes: {
      borderWidth: 3,
      shape: 'dot',
      scaling: {
          min: 10,
          max: 40,
          label: {
              enabled: false,
              min: 14,
              max: 30,
              maxVisible: 30,
              drawThreshold: 40
            }
          }
        ,
      font: {
        face: 'Tahoma'
      }
    },
    edges: {
      width: 1,
      smooth: {
        type: 'continuous'
      },
      selectionWidth: function (width) {return width*3;}
    },
    interaction: {
      tooltipDelay: 200,
      hideEdgesOnDrag: true
    },
    physics: {
      stabilization: true,
      barnesHut: {
        gravitationalConstant: -10000,
        springConstant: 0.002,
        springLength: 150
      }
    }

    

  };
  network = new vis.Network(container, data, options);
  
  

  /**
   * This function fills the DataSets. These DataSets will update the network.
   */
  function redrawAll(gephiJSON) {
    if (gephiJSON.nodes === undefined) {
      gephiJSON = gephiImported;
    }
    else {
      gephiImported = gephiJSON;
    }
    nodes.clear();
    edges.clear();
    var fixed = true;
    var parseColor;
    var parsed = vis.network.gephiParser.parseGephi(gephiJSON, {
      fixed: fixed,
      parseColor: parseColor
    });
    // add the parsed data to the DataSets.
    nodes.add(parsed.nodes);
    edges.add(parsed.edges);
    var data = nodes.get(2); // get the data from node 2 as example
    network.fit(); // zoom to fit
    
    network.on("dragEnd", function (params) {
      for (var i = 0; i < params.nodes.length; i++) {
          var nodeId = params.nodes[i];
          nodes.update({id: nodeId, fixed: {x: true, y: true}});
      }
    });
    network.on('dragStart', function(params) {
      for (var i = 0; i < params.nodes.length; i++) {
          var nodeId = params.nodes[i];
          nodes.update({id: nodeId, fixed: {x: false, y: false}});
      }
    });
network.on('click', function (properties) {
  var tipnet = d3.select("#netnode")
                  .html(properties.nodes);


});
var options = {
    nodes: {
      shape: 'dot',
      scaling: {
          min: 10,
          max: 40,
          label: {
              enabled: false,
              min: 14,
              max: 30,
              maxVisible: 30,
              drawThreshold: 40
            }
          }
        ,
      font: {
        face: 'Tahoma'
      }
    },
    edges: {
      width: 1,
      smooth: {
        type: 'continuous'
      },
      selectionWidth: function (width) {return width*3;}
    },
    interaction: {
      tooltipDelay: 200,
      hideEdgesOnDrag: true,
      hover: true
    },
    physics: {
      stabilization: true,
      barnesHut: {
        gravitationalConstant: -10000,
        springConstant: 0.002,
        springLength: 150
      }
    }

  };

    };



 
};

APP.buildCharts = function () {

var margin = {top: 28, right: 10, bottom: 30, left: 40},
    width = 900 - margin.left - margin.right,
    height = 165 - margin.top - margin.bottom;


var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var formatPercent = d3.format(".1-%");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);

var tipchart = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return d.name + "<br\/>" + "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>"
    + "<br\/>" + "<strong>Number of patents:</strong> <span style='color:red'>" + d.number;
  })

var chart = d3.select("#graphcontainer").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

chart.call(tipchart);


d3.tsv(dataGraph, type, function(error, data) {

  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");

  chart.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle") 
        .attr("id", "titrebarchart") 
        .style("font-size", "16px") 
        .text("Tech Field frequency based on patents");

  chart.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); })
      .on('mouseover', tipchart.show)
      .on('mouseout',tipchart.hide);

  d3.select("#inputgraph").on("change", change);

var sortTimeout = setTimeout(function() {
    d3.select("#inputgraph").property("aria-checked", true).each(change);
  }, 1500);

  function change() {
    clearTimeout(sortTimeout);

    // Copy-on-write since tweens are evaluated after a delay.
    var x0 = x.domain(data.sort(this.checked
        ? function(a, b) { return b.frequency - a.frequency; }
        : function(a, b) { return d3.ascending(a.letter, b.letter); })
        .map(function(d) { return d.letter; }))
        .copy();

    chart.selectAll(".bar")
        .sort(function(a, b) { return x0(a.letter) - x0(b.letter); });

    var transition = chart.transition().duration(750),
        delay = function(d, i) { return i * 50; };

    transition.selectAll(".bar")
        .delay(delay)
        .attr("x", function(d) { return x0(d.letter); });

    transition.select(".x.axis")
        .call(xAxis)
      .selectAll("g")
        .delay(delay);
  }

});

  function type(d) {
    d.frequency = +d.frequency;
    return d;
  }






};



  

updateCharts = function (dataGraph) {

     
var margin = {top: 30, right: 10, bottom: 30, left: 40},
    width = 900 - margin.left - margin.right,
    height = 150 - margin.top - margin.bottom;


var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var formatPercent = d3.format(".1-%");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);

var tipchart = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return d.name + "<br\/>" + "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>"
    + "<br\/>" + "<strong>Number of patents:</strong> <span style='color:red'>" + d.number;
  })

var chart = d3.select("#graphcontainer").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

chart.call(tipchart);



d3.tsv(dataGraph, type, function(error, data) {

  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");

if(dataGraph=='data/techfieldfreq.tsv'){
  chart.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("id", "titrebarchart")     
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .text("Tech Field frequency based on patents");
} else {
  chart.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("id", "titrebarchart")      
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .text("Distribution of Patents in "+ $('#features option:selected').text());
}


  

  chart.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); })
      .on('mouseover', tipchart.show)
      .on('mouseout',tipchart.hide);

  d3.select("#inputgraph").on("change", change);

var sortTimeout = setTimeout(function() {
    d3.select("#inputgraph").property("aria-checked", true).each(change);
  }, 1500);

  function change() {
    clearTimeout(sortTimeout);

    // Copy-on-write since tweens are evaluated after a delay.
    var x0 = x.domain(data.sort(this.checked
        ? function(a, b) { return b.frequency - a.frequency; }
        : function(a, b) { return d3.ascending(a.letter, b.letter); })
        .map(function(d) { return d.letter; }))
        .copy();

    chart.selectAll(".bar")
        .sort(function(a, b) { return x0(a.letter) - x0(b.letter); });

    var transition = chart.transition().duration(750),
        delay = function(d, i) { return i * 50; };

    transition.selectAll(".bar")
        .delay(delay)
        .attr("x", function(d) { return x0(d.letter); });

    transition.select(".x.axis")
        .call(xAxis)
      .selectAll("g")
        .delay(delay);
  }

});

  function type(d) {
    d.frequency = +d.frequency;
    return d;
  }


};




var updateCitiesCharts = function (selectedCity) {
  $('#graphcontainer g').remove();
$('#graphcontainer path').remove();
  $('#graphcontainer svg').remove();



            dataGraph='data/cities/tffreq'+selectedCity+'.tsv';
            console.log("the file for chart is:"+ dataGraph);

            
var margin = {top: 28, right: 10, bottom: 30, left: 40},
    width = 900 - margin.left - margin.right,
    height = 165 - margin.top - margin.bottom;


var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var formatPercent = d3.format(".1-%");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);

var tipchart = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return d.name + "<br\/>" + "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>"
    + "<br\/>" + "<strong>Number of patents:</strong> <span style='color:red'>" + d.number + "</span>" +"<br\/>" +
    "<strong>Location quotient:</strong> <span style='color:red'>" + d.specialisation + "</span>";
  })

var chart = d3.select("#graphcontainer").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

chart.call(tipchart);


d3.tsv(dataGraph, type, function(error, data) {

  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");

  chart.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle") 
        .attr("id", "titrebarchart") 
        .style("font-size", "16px") 
        .text("Tech Field frequency based on patents in " + selectedCity);

  chart.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); })
      .on('mouseover', tipchart.show)
      .on('mouseout',tipchart.hide);

  d3.select("#inputgraph").on("change", change);

var sortTimeout = setTimeout(function() {
    d3.select("#inputgraph").property("aria-checked", true).each(change);
  }, 1500);

  function change() {
    clearTimeout(sortTimeout);

    // Copy-on-write since tweens are evaluated after a delay.
    var x0 = x.domain(data.sort(this.checked
        ? function(a, b) { return b.frequency - a.frequency; }
        : function(a, b) { return d3.ascending(a.letter, b.letter); })
        .map(function(d) { return d.letter; }))
        .copy();

    chart.selectAll(".bar")
        .sort(function(a, b) { return x0(a.letter) - x0(b.letter); });

    var transition = chart.transition().duration(750),
        delay = function(d, i) { return i * 50; };

    transition.selectAll(".bar")
        .delay(delay)
        .attr("x", function(d) { return x0(d.letter); });

    transition.select(".x.axis")
        .call(xAxis)
      .selectAll("g")
        .delay(delay);
  }

});

  function type(d) {
    d.frequency = +d.frequency;
    return d;
  };
};


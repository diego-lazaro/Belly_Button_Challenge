const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it

d3.json(url).then(function(data) {
    console.log(data);
    init();

// Build Guage chart
function buildGauge(wfreq) {
  let level = parseFloat(wfreq) * 20;
  
let data = [
  {
    domain: { x: [0, 1], y: [0, 1]},
    value: wfreq,
    title: { text: "<b>Bellybutton Biodiversity</b> <br><span style='font-size:0.8em;color:gray'>Scrubs per Week</span>" },
    type: "indicator",
    mode: "gauge",
    gauge: {
    axis: { range: [null, 9], tickwidth: 2, tickmode: "linear" },
    bar: { color: "rbga(0, 128, 0, .8)" },
    steps:[
      { range: [0, 1], color: "rgba(0, 128, 128, .05 )" },
      { range: [1, 2], color: "rgba(0, 128, 128, .1)" },
      { range: [2, 3], color: "rgba(0, 128, 128, .2)" },
      { range: [3, 4], color: "rgba(0, 128, 128, .3)" },
      { range: [4, 5], color: "rgba(0, 128, 128, .4)" },
      { range: [5, 6], color: "rgba(0, 128, 128, .5)" },
      { range: [6, 7], color: "rgba(0, 128, 128, .6)" },
      { range: [7, 8], color: "rgba(0, 128, 128, .7)" },
      { range: [8, 9], color: "rgba(0, 128, 128, .8)" },
    ],
    threshold: {
      line: { color: "purple", width: 7 },
      thickness: 0.75,
      value: wfreq
    }}];
  
let layout = { width: 500, height: 500, margin: { t: 0, b: 0 } };
let GAUGE = document.getElementById("gauge");
Plotly.newPlot("GAUGE", data, layout);
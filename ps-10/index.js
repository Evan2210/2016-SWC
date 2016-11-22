// JavaScript Document
var Evan =[
	{day:1, time:0.5},
	{day:2, time:0.1},
	{day:3, time:0.1},
	{day:4, time:0.25},
	{day:5, time:0.5},
	{day:6, time:1},
	{day:7, time:1}

];

var height = 500;
var width = 500;
var margin = {left: 60, bottom: 60, right: 10, top: 10};

var dayScale = d3.scaleLinear().domain([0,7]).range([margin.left, width - margin.right]);
var timeScale = d3.scaleLinear().domain([0,1]).range([height - margin.bottom, margin.top]);


function timeToY (data) {
 return timeScale(data.time);
};

function dayToX (data) {
  return dayScale(data.day);
};


 
var svg = d3.select('svg');

var axisBottom =d3.axisBottom(dayScale);
var axisLeft =d3.axisLeft(timeScale);

svg.selectAll('circle')
  .data(Evan)
  .enter()
  .append("circle")
  .attr('class', 'time')
  .attr("cx",dayToX)
  .attr("cy",timeToY)
  .attr("fill", "hsl(0,40%,60%)")
  .attr("r", '5');
 
 svg.append('g')
  .attr("transform", "translate(0," + (height - margin.bottom) + ")")
  .call(axisBottom);


svg.append('g')
  .attr("transform", "translate(" + margin.left + ",0)")
  .call(axisLeft);
  
 svg.append("text")
 
  .attr("transform", "rotate(-90)")
  .attr("y", 20)
  .attr("x", 0 - (height / 2))
  .style("text-anchor", "middle")
  .text("time/hours");
 
 svg.append("text")
  .attr("y", height - margin.bottom/3)
  .attr("x", width / 2)
  .style("text-anchor", "end")
  .text("day");


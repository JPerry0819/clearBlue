$(document).ready(function() {
    req=new XMLHttpRequest();
    req.open("GET", './datasets/singleuseplastics.json', true);
    req.send();
    req.onload=function() {
        json=JSON.parse(req.responseText);
        console.log(json)

    let chartData = json.data.map(plastic => {
        let obj = {
            Country: plastic.country,
            Millimeters: parseFloat(plastic.weight)
        }
            return obj;
    })
    console.log(chartData)

const w = 550;
const h = 360;

const svg = d3.select('#chart')
            .append('svg')
            .attr('width', w)
            .attr('height', h)

const country = d => d.Country
const millimeters = d => d.Millimeters
const margin= { top: 30, right: 0, bottom: 5, left: 25}
const innerHeight = h - margin.top - margin.bottom
const innerWidth = w - margin.left - margin.right



const xScale = d3.scaleBand()
.domain(chartData.map(country))
.range([margin.left, innerWidth])
.padding(.50)

const yScale = d3.scaleLinear()
.domain([d3.min(chartData, millimeters), d3.max(chartData, millimeters)])
.range([innerHeight - margin.top, 0])

svg.selectAll('rect')
.data(chartData)
.enter()
.append('rect')
.attr('x', d => xScale(country(d)))
.attr('y', d => yScale(millimeters(d)))
.attr('width', xScale.bandwidth()) 
.attr('height', d => innerHeight - yScale(millimeters(d)))
.attr('fill', '#fff2d')

const xAxis = d3.axisBottom(xScale)
const yAxis = d3.axisLeft(yScale)

svg.append('g')
  .attr('transform', 'translate(0,' + innerHeight + ')' )
  .call(xAxis)
  .attr('font-size', '9')
  .attr('color', '#fff')

svg.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.bottom + ')' )
  .call(yAxis)
  .attr('font-size', '10')
  .attr('color', '#fff')
}
})



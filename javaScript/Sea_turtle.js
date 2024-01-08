$(document).ready(function () {
  req = new XMLHttpRequest();
  req.open("GET", 'datasets/Sea_turtle_population.json', true);
  req.send();
  req.onload = function () {
    json = JSON.parse(req.responseText);

    let chartData = json.data.map(turtleData => {
      let obj = {
        Season: parseInt(turtleData.season),
        Population: parseInt(turtleData.population)

      }
      return obj;
    })

    const w = 580;
    const h = 350;

    const svg = d3.select('#chart2')
      .append('svg')
      .attr('width', w)
      .attr('height', h)

    const season = d => d.Season;
    const population = d => d.Population;
    const margin = { top: 20, right: 20, bottom: 20, left: 55 }
    const innerHeight = h - margin.top - margin.bottom;
    const innerWidth = w - margin.left - margin.right;
    const padding = 5.0



    const xScale = d3.scaleLinear()
      .domain([d3.min(chartData, season), d3.max(chartData, season)])
      .range([margin.left, innerWidth])

    const yScale = d3.scaleLinear()
      .domain([d3.min(chartData, population), d3.max(chartData, population) + 200])
      .range([innerHeight - margin.top, 0])

    svg.selectAll('rect')
      .data(chartData)
      .enter()
      .append('rect')
      .attr('x', d => xScale(season(d)))
      .attr('y', d => yScale(population(d))) // run through a scale to determine the height of the bar
      .attr('width', (innerWidth / chartData.length) - padding)
      .attr('height', d => innerHeight - yScale(population(d)))
      .attr('fill', '#c0ab8e')
    
    // Add Labels
    // svg.selectAll('text')
    //   .data(chartData)
    //   .enter()
    //   .append('text')
    //   .attr('x', d => xScale(season(d)))
    //   .attr('y', d => yScale(population(d) + 3))

    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
    const yAxis = d3.axisLeft(yScale)

    svg.append('g')
      .attr('transform', 'translate(0,' + innerHeight + ')')
      .call(xAxis)
      .attr('font-size', '16')
      .attr('font-weight', 'bold')
      .attr('color', 'white')
      
      

    svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.bottom + ')')
      .call(yAxis)
      .attr('font-size', '16')
      .attr('font-weight', 'bold')
      .attr('color', 'white')
  }
})


//  a path trick for certain servers
// ../ means up a folder
// ./ means this folder

//example
// sbg is 500px height
// first data point is x value 50
// 0, 0, is top left corner
// 50, 0 is 
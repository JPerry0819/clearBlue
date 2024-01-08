//Random Facts Generator
$(document).ready(function(){ 
 
    var quotes =[
    {quote:"\"Approximately 18 billion pounds of trash per year enters the ocean.\"" ,author:"Source: NOAA"},
    {quote:"\"The majority of the waste we produce on land eventually reaches the oceans, whether intentionally or not.\"" ,author:"Source: NOAA"},
    {quote:"\"The most common items found in coastal cleanups around the world  are all single-use plastics.\"", author:" Source: NOAA"},
    {quote:"\"There is an island of garbage twice the size of Texas inside the Pacific  Ocean.\"" ,author:"Source: NOAA"},
    {quote:"\"The waste in the ocean takes a long, long time to decompose. Styrofoam takes 80 years, aluminum takes 200 years,and plastic takes 400 years.\"" ,author:"Source: NOAA "},
    {quote:"\"There’s enough plastic in the ocean to circle the Earth 400 times.\"" ,author:"Source: NOAA "},
    {quote:"\"The oceans contain 99 percent of the living space on the planet.\"" ,author:"Source: NOAA "},
    {quote:"\"The Pacific Ocean is the largest and deepest of Earth's oceanic divisions.\"" ,author:"Source: WikipediA "}, 
    {quote:"\"Ocean and Beach Polution are human made. Therefor Humans must CLEAN it up.\"" ,author:"Source: ClearBlue "},
    {quote:"\"The quantity of small plastic fragments floating in the north-east Pacific Ocean increased a hundredfold between 1972 and 2012.\"" ,author:"Source: WikipediA "},
  ];
  function rQuotes (){
  var randomSelect = Math.floor(Math.random()* quotes.length);
  $(".quotes").html(quotes[randomSelect].quote);
  $(".author").html(quotes[randomSelect].author);
  
  }
  rQuotes()
  setInterval(rQuotes,10800)
  
  
  
  var information =[
    {information:"ClearBlue has dedicated our time and efforts to clean up the Pacific Ocean."},
    {information:"98% of the worlds trash ends up in the ocean."},
    {information:"Nearly all species of Sea Turtle is on the endangered species list."},
  {information: "Ocean polution is human caused, and can only be fixed by HUMANS!"},
  {information: "We can save the marine life and end needless death and injury."}
  ];
  function rinformation (){
  var randomSelect = Math.floor(Math.random()* information.length);
  $(".information").html(information[randomSelect].information);
  
  
  }
  rinformation()
  setInterval(rinformation,10800)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //End Document Ready Function
  })
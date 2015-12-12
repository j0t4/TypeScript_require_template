///<reference path="typings/requirejs/require.d.ts" />
///<reference path="typings/jquery/jquery.d.ts" />
///<reference path="typings/d3/d3.d.ts" />
//   ///<reference path='AppConfig.ts'/>
//   ///<reference path='TestApp.ts'/>
 
/**
 * Main entry point for RequireJS
 */
/**
   require(
    [        
        //'geo',
        'topojson'
    ],
    (topojson) => {
        //'use strict';
 
 
        $(document).ready(function () {
           
          $("#div1").html("Hola2")  
          
          console.log(d3);
          console.log(topojson);
          
          
          
          var projection = d3.geo.mercator()
								   .translate([250, 150]);
                                   //.scale([500]);
								  

			//Define path generator
			var path = d3.geo.path()
							 .projection(projection);
          
          
          var svg = d3.select("body")
						.append("svg")
						.attr("width", 500)
						.attr("height", 300);
          
          d3.json("data/uk.json", function(json) {
				
				//Bind data and create one path per GeoJSON feature
				svg.selectAll("path")
				   .data(json.features)
				   .enter()
				   .append("path")
				   .attr("d", path)
				   .style("fill", "steelblue");
		
			});
          
          
          
          
        });
                    
        
    }
);

**/
  
  $(document).ready(function () {
  
            $("#div1").html("Hola2")  
          
          console.log(d3);
          // console.log(topojson);
          
               var numbers = [ 8, 50, 22, 70, 60, 45 ];
            d3.select("body").selectAll("div")
                .data(numbers)
                .enter()
                .append("div")
                .attr("class", "bar")
                .style("height", function(d) {
                    var barHeight = d * 2;
                    return barHeight + "px";
                });        

  			//Width and height
			var w = 500;
			var h = 300;

			//Define map projection
			var projection = d3.geo.albersUsa()
								   .translate([w/2, h/2])
								   .scale(500);

			//Define path generator
			var path = d3.geo.path()
							 .projection(projection);

			//Create SVG element
			var svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			//Load in GeoJSON data
			d3.json("us-states.json", function(json) {
				
				//Bind data and create one path per GeoJSON feature
				svg.selectAll("path")
				   .data(json.features)
				   .enter()
				   .append("path")
				   .attr("d", path);
		
			});
      
  
  });
  
  

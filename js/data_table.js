d3.csv("Web-Design-Challenge/data/cities.csv").then(function(citiesData) {

    // Step 1: Parse Data/Cast as numbers
    // ==============================
    citiesData.forEach(function(data) {
        data.City_ID = +data.City_ID;
    });
});
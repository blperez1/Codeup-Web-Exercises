(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray = planetsString.split("|")
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * 
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let newPlanetString = planetsArray.join("<br>")
    console.log(newPlanetString)

    let planetsList = '<ul><li>'
    planetsList += planetsArray.join("</li><li>")
    planetsList += '</li></ul>'

    console.log(planetsList);
    document.getElementById("planets").innerHTML = planetsList;

})();

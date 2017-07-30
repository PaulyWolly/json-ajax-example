var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("dataBtn");
var btnRefresh = document.getElementById("btn-refresh");
btnRefresh.classList.add("hide-me");
var pageCounter = 1;


btn.addEventListener("click", function() {

    let url = "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json";
    
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
        btnRefresh.classList.add("show-me");  
    }
});

btnRefresh.addEventListener("click", function() {
    location.reload();
});



function renderHTML(data) {
    var htmlString = "";
      
    for (i=0; i<data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ", that likes to eat "
        
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += " and dislikes ";

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += ".</p>"

    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
    
}

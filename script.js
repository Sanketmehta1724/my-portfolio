function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      //Call showPopup here
      
      // Create a new 'recommendation' element and set it's value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class","recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element); 
      
      // Reset the value of the textarea
      recommendation.value = "";
    }
  }
  
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }
  
  function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
        console.log("New recommendation added");
        
        // Create a new 'recommendation' element and set its value to the user's message
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML =` &#8220${recommendation.value}&#8221`;
        // Add this element to the end of the list of recommendations
        document.getElementById("all_recommendations").appendChild(element);
        
        // Reset the value of the textarea
        recommendation.value = "";

        // Show popup
        showPopup(true);
    }
}

function showPopup(bool) {
    const popup = document.getElementById("popup");
    if (bool) {
        popup.style.visibility = "visible";
    } else {
        popup.style.visibility = "hidden";
    }
}

// Close the popup when the user clicks "Ok"
document.querySelector(".popup button").addEventListener("click", () => {
    showPopup(false);
});
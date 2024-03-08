var counterContainer = document.querySelector(".website-counter");
document.addEventListener("DOMContentLoaded", function () {
    var counterContainer = document.querySelector(".website-counter");

var visitCount = localStorage.getItem("page_view");
    var visitCount = localStorage.getItem("page_view");

visitCount = 1;
    if (!visitCount) {
        visitCount = 1
    } else {
        visitCount = Number(visitCount) + 1
    };
    //Add entry for key="page_view"
    localStorage.setItem("page_view", visitCount);

//Add entry for key="page_view"
localStorage.setItem("page_view", 1);

visitCount = Number(visitCount) + 1;

// Update local storage value
localStorage.setItem("page_view", visitCount);

counterContainer.innerHTML = visitCount;

    // // Update local storage value
    // localStorage.setItem("page_view", visitCount);

    counterContainer.innerHTML = visitCount;
});


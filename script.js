var tabButtons = document.querySelectorAll(".tab-links");

for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function () {
        var tabName = this.dataset.tab;
        var tabContent = document.getElementById(tabName);
        var allTabContent = document.querySelectorAll(".tab-content");
        var allTabButtons = document.querySelectorAll(".tab-links");

        for (var j = 0; j < allTabContent.length; j++) {
            allTabContent[j].style.display = "none";
        }

        for (var k = 0; k < allTabButtons.length; k++) {
            allTabButtons[k].classList.remove("active");
            allTabButtons[k].classList.remove("starter");
        }

        tabContent.style.display = "block";
        this.classList.add("active");
        this.classList.add("starter")
    });
}

document.querySelector(".tab-links").click();
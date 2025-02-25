document.getElementById("cashOut").style.display = "none";

document.getElementById("Add-money-box").addEventListener("click", function () {
    document.getElementById("cashOut").style.display = "none"; 
    document.getElementById("Add-Money").style.display = "block"; 
});

document.getElementById("cashout-box").addEventListener("click", function () {
    document.getElementById("cashOut").style.display = "block";  
    document.getElementById("Add-Money").style.display = "none"; 
});



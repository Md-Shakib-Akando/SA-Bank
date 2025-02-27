document.getElementById("cashOut").style.display = "none";
document.getElementById("Add-Money").style.display = "none";

document.getElementById("Add-money-box").addEventListener("click", function () {
    // document.getElementById("cashOut").style.display = "none"; 
    // document.getElementById("Add-Money").style.display = "block"; 
    handleToggle("cashOut","none");
    handleToggle("Add-Money","block");
    handleToggle("Transaction-history","none");

});

document.getElementById("cashout-box").addEventListener("click", function () {
    // document.getElementById("cashOut").style.display = "block";  
    // document.getElementById("Add-Money").style.display = "none"; 

    handleToggle("cashOut","block");
    handleToggle("Add-Money","none");
    handleToggle("Transaction-history","none");
});

document.getElementById("Transactions-box").addEventListener("click", function () {
    // document.getElementById("cashOut").style.display = "block";  
    // document.getElementById("Add-Money").style.display = "none"; 

    handleToggle("Transaction-history","block");
    handleToggle("cashOut","none");
    handleToggle("Add-Money","none");
});


function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}



document.getElementById("logOut-btn").addEventListener("click", function () {
    window.location.href="./index.html"
});

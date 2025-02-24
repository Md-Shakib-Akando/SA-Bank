// console.log("shakib")

document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();
    const accountNumber=document.getElementById("Acount-Number").value;
    const pin=document.getElementById("pin").value;

    if(accountNumber.length===11){
        if(pin==="1234"){
            window.location.href="./main.html"
        }
        else{
            alert("Wrong pin number")
        }
    }
    else{
        alert("Enter 11 digit account number")
    }

})
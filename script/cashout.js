document.getElementById("Cashout-btn").addEventListener("click",function(event){
    event.preventDefault();
    

    const w_money =document.getElementById("Withdraw-amount").value;

    const convert_w_money=parseFloat(w_money);

    const pin=document.getElementById('Pin').value; 

    const convert_Pin=parseInt(pin);

    const mainBalance=document.getElementById("Main-balance").innerText;
    const convert_mainBalance=parseFloat(mainBalance);

    

    if(convert_Pin===1234){
        
        if(convert_mainBalance>0){
            if(convert_w_money>0){
                const sub=convert_mainBalance - convert_w_money;
                document.getElementById("Main-balance").innerText=sub;
            }
            else{
                alert("valid Amount")
            }
        }
        else{
            alert("Balance isn't found")
        }
    }
    else{
        alert("wrong pin")
    }
    
})
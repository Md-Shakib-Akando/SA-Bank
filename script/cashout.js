document.getElementById("Cashout-btn").addEventListener("click",function(event){
    event.preventDefault();
    

    const w_money =document.getElementById("Withdraw-amount").value;

    const convert_w_money=parseFloat(w_money);
    const accountNumber=document.getElementById("Acount-Number").value;

    const pin=document.getElementById('Pin').value; 

    const convert_Pin=parseInt(pin);

    const mainBalance=document.getElementById("Main-balance").innerText;
    const convert_mainBalance=parseFloat(mainBalance);

    

    if(convert_Pin===1234){
        
        if(convert_mainBalance>0){
            if(convert_w_money>0){
                const sub=convert_mainBalance - convert_w_money;
                document.getElementById("Main-balance").innerText=sub;


                const container=document.getElementById("tr-add");
                const div=document.createElement("div");
                div.classList.add("px-3")
                div.innerHTML=`
                
                   <h2 class="bg-red-400 p-3 mt-2 mb-2">Cash Out ${convert_w_money} from this ${accountNumber} account</h2>
                `
                container.append(div)

                
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
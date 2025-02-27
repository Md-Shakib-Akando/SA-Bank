document.getElementById("Add-money").addEventListener('click',function(event){
    event.preventDefault();

    const addAmount=document.getElementById("Add-Amount").value;

    const accountNumber=document.getElementById("Acount-Number").value;

    const convertAmount=parseFloat(addAmount);

    const Pin=document.getElementById('pin').value; 

    const convertPin=parseInt(Pin);

    const mainBalance=document.getElementById('Main-balance').innerText;
    const selectedBank=document.getElementById('allbank').value;

    const convertMainBalance= parseFloat(mainBalance);

    if(convertPin===1234){
        const sum=convertMainBalance + convertAmount;
        
        document.getElementById('Main-balance').innerText=sum;

        const container=document.getElementById("tr-add");
                const div=document.createElement("div");
                div.classList.add("px-3")
                div.innerHTML=`
                
                   <h2 class="bg-green-400 p-3 mt-2 mb-2">Addmoney from ${selectedBank} ${convertAmount}$ account: ${accountNumber} </h2>
                `
                container.append(div)
    }

    else{
        alert("Wrong pin number")
    }
})
document.getElementById("Add-money").addEventListener('click',function(event){
    event.preventDefault();

    const addAmount=document.getElementById("Add-Amount").value;

    const convertAmount=parseFloat(addAmount);

    const Pin=document.getElementById('pin').value; 

    const convertPin=parseInt(Pin);

    const mainBalance=document.getElementById('Main-balance').innerText;

    const convertMainBalance= parseFloat(mainBalance);

    if(convertPin===1234){
        const sum=convertMainBalance + convertAmount;
        
        document.getElementById('Main-balance').innerText=sum;
    }

    else{
        alert("Wrong pin number")
    }
})
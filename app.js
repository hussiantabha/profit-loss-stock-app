console.log("Working! ")
let subBtn = document.getElementById("subBtn")
subBtn.addEventListener("click", ()=>{
    let purPrice = document.getElementById("purPrice")    
    let quan = document.getElementById("quan")
    let curPrice = document.getElementById("curPrice")
    let purchasePrice = Number(purPrice.value)
    let quantity = Number(quan.value)
    let currentPrice = Number(curPrice.value)
    
    let mul = purchasePrice * quantity
    let curMul = currentPrice * quantity
    if(purchasePrice == "" || quantity=="" || currentPrice == ""){
        document.getElementById("dispErr").innerHTML = "Enter the Value!!"
        document.getElementById("dispErr").style.color = "red"
        console.log("Invalid")
    }
    else if(purchasePrice < 0 || quantity < 0 || currentPrice < 0){
        alert("Enter proper values")
    }
    else{
        if(curMul > mul){
            let profit = curMul - mul
            let profitPer = profit * 100 / purchasePrice
            document.getElementById("dispPrice").innerHTML = "Yayyy It's a profit of " + profit
            document.getElementById("dispPer").innerHTML = "Profit Percentage = " + profitPer.toFixed(2) +" %"
            document.getElementById("disp").style.color = "white"
            document.getElementById("disp").style.backgroundColor = "#10B981"
        }else{
            let loss = mul - curMul
            let lossPer = loss * 100 / purchasePrice
            console.log(loss)
            console.log(lossPer)
            document.getElementById("dispPrice").innerHTML = "Sorry It's a loss " + loss 
            document.getElementById("dispPer").innerHTML = "Loss Percentage = " + lossPer.toFixed(2) +" %"
            document.getElementById("disp").style.color = "white"
            document.getElementById("disp").style.backgroundColor = "#EF4444"
        }
    }
    
})

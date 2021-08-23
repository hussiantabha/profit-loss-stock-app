console.log("Working! ")
let subBtn = document.getElementById("subBtn")
subBtn.addEventListener("click", ()=>{
    let purPrice = document.getElementById("purPrice").value    
    let quan = document.getElementById("quan").value
    let curPrice = document.getElementById("curPrice").value
    
    let mul = purPrice * quan
    //console.log(mul)
    let curMul = curPrice * quan
    //console.log(curMul)
    if(purPrice == "" || quan=="" || curPrice == ""){
        document.getElementById("dispErr").innerHTML = "Enter the Value!!"
        document.getElementById("dispErr").style.color = "red"
        console.log("Invalid")
    }else{
        if(curMul > mul){
            let profit = curMul - mul
            let profitPer = profit * 100 / purPrice
            
            // console.log(profit)
            // console.log("Profit")
            // console.log(profitPer)
            document.getElementById("dispPrice").innerHTML = "Yayyy It's a profit of " + profit
            document.getElementById("dispPer").innerHTML = "Profit Percentage = " + profitPer.toFixed(2) +" %"
            document.getElementById("disp").style.color = "white"
            document.getElementById("disp").style.backgroundColor = "#10B981"
        }else{
            let loss = mul - curMul
            let lossPer = loss * 100 / purPrice
            console.log(loss)
            console.log(lossPer)
            //console.log("Loss")
            document.getElementById("dispPrice").innerHTML = "Sorry It's a loss " + loss 
            document.getElementById("dispPer").innerHTML = "Loss Percentage = " + lossPer.toFixed(2) +" %"
            document.getElementById("disp").style.color = "white"
            document.getElementById("disp").style.backgroundColor = "#EF4444"
        }
    }
    
})
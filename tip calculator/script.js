

function calculate()
{
    let percentage = document.getElementById("service").value
    const amount = document.getElementById("amount").value
    const people = document.getElementById("people").value

    if(percentage == "Good"){
        percentage = 15
    }

    else if(percentage == "Very Good"){
        percentage = 20
    }

    else if(percentage == "Bad"){
        percentage = 10
    }

    let tip = Number(amount)
    tip = (tip * percentage) / 100

    if(people == 1){
        return tip
        
    }

    else if (people != 1){
        tip = tip / people
        return tip
    }

    
}

function calculateTip(){
   let result = calculate()
   alert('Your tip is ' + String(result))
}


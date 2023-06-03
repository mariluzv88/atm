let Withdrawal = [10,20,50,100 ]
let balance = 543
let transfer = "YES , NO"
let changePin = " ####"
let makePayment = "YES , NO"
let recent = ["coffeeShop:$5.25", 
    "bakery: $15",
   "clothingStore: $105.10",
   "rent: $1500"]

let creditCard = "Enter Credit Card"
let deposit = "Deposit Cash Deposit Check"

let screen = document.querySelector(".screen")




// const showOnScreen = () =>{
//       screen.append()
// }

// while(showInScreen()){
//     screen.innerHTML("")
    
// }
// showOnScreen()

const buttonNput = (info) =>{
        if(info === 'Withdrawal'){
            screen.innerHTML='How much would you like to withdraw? '
           screen.append(Withdrawal)  
        }else if (info === 'balance'){
            screen.innerHTML='Your Balance is: $'
           screen.append(balance)  

        }else if (info === 'transfer'){
            screen.innerHTML='Would You like to transfer funds? '
           screen.append(transfer)  
        }else if (info === 'changePin'){
            screen.innerHTML='Would you like to change your PIN?, Your pin is:'
           screen.append(changePin)
        }else if (info === 'makePayment'){
            screen.innerHTML='Would you like to make a Payment? '
           screen.append(makePayment)
        }else if (info === 'recent'){
            screen.innerHTML='These are you most recent Transactions:     '
           screen.append(recent) 
        }else if (info === 'creditCard'){
            screen.innerHTML=''
           screen.append(creditCard) 
        }else if(info === 'deposit'){
            screen.innerHTML=''
           screen.append(deposit)
        }else{
            alert("Error, you are broke")
        }        
    
    
}
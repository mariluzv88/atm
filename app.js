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
let With10 = document.querySelector('.btn10')
let With20 = document.querySelector('.btn20')
let With50 = document.querySelector('.btn50')
let With100 = document.querySelector('.btn100')
let dep10 = document.querySelector('.dbtn10')
let dep20 = document.querySelector('.dbtn20')
let dep50 = document.querySelector('.dbtn50')
let dep100 = document.querySelector('.dbtn100')




// const showOnScreen = () =>{
//       screen.append()
// }

// while(showInScreen()){
//     screen.innerHTML("")
    
// }
// showOnScreen()

const buttonNput = (info) =>{
        if(info === 'Withdrawal'){
            screen.innerHTML=`How much would you like to withdraw? `
            With10.style.display ="block"
            With20.style.display ="block"
            With50.style.display ="block"
            With100.style.display ="block"
           screen.append(With10,With20,With50,With100) 
           changeBalance() 
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
            screen.innerHTML='How much would you like to Deposit?'
            dep10.style.display ="block"
            dep20.style.display ="block"
            dep50.style.display ="block"
            dep100.style.display ="block"
           screen.append(dep10,dep20,dep50,dep100)
           depositBalance()
        }else{
            alert("Error, you are broke")
        }        
    
    
}

const changeBalance = (amount)=>{
    if (amount === '10'){
       balance = balance-10
        screen.innerHTML=(`Success, Your balance is now:$${balance}`)
        
    }else  if (amount === '20'){
        balance = balance-20
        screen.innerHTML=(`Success, Your balance is now:$${balance}`)
       
    }else  if (amount === '50'){
        balance = balance-50
        screen.innerHTML=(`Success, Your balance is now:$${balance}`)
        
    }else  if (amount === '100'){
        balance = balance-100
        screen.innerHTML=(`Success, Your balance is now:$${balance}`)
        
    }  
}
const depositBalance = (amount)=>{
    if (amount === '10'){
       balance = balance+10
       screen.innerHTML=(`Success, Your balance is now:$${balance}`)
        
    }else  if (amount === '20'){
        balance = balance+20
        screen.innerHTML=(`Success, Your balance is now:$${balance}`)
       
    }else  if (amount === '50'){
        balance = balance+50
        screen.innerHTML=(`Success, Your balance is now:$${balance}`)
        
    }else  if (amount === '100'){
        balance = balance+100
        screen.innerHTML=(`Success, Your balance is now:$${balance}`)
        
    }  
}
// if(balance <= 0){
//     screen.innerHTML = ""
//     screen.append("Cannot proceed Balance is now Zero")
//     console.log(balance)
// }
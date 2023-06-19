let space = '\r\n';
let money = prompt('Enter your money..');

let text = '1-Balance display'+space+'2-Withdraw money'+space+
'3-Deposit'+space+"Please select the action you want to do:"
//  prompt (text);
let choice = prompt(text);
 switch(choice){
    case '1': 
        alert("Your money :" + money);
        break;
    case '2':
        let withdraw =  Number(prompt("How much money do you want to withdraw :"));
        if(withdraw<money){
            alert("Transaction successful..");
            money= money-withdraw;
            alert("remaining money: "+ money);
        } else if(withdraw==money){
            alert("Transaction successful..");
            money= money-withdraw;
            alert("remaining money: "+ money);
        } else{
            alert("Transaction failed.."+space+'Your money: '+money+space+
            'Money you want to withdraw: '+ withdraw);
        }
        break;
    case '3':
    let deposit = Number(prompt("How much money do you want to deposit :"));
    alert("Transaction successful..");
    alert("Your current money :"+ (money+deposit));
    break;    
    default:
        alert('Please enter a number between 1 and 4..');
        break;
}
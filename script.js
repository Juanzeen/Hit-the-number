
const drawnNumber = Math.round(Math.random()*1000)
var userNumber = null
var returnText = document.getElementById("feedback")

function verify(){

        var userNumber = document.getElementById("usernumber")
        userNumber = userNumber.value
        if (userNumber<drawnNumber){
            returnText.innerHTML = 'O número é menor que o número sorteado. ❌'    
        }
        
        else if(userNumber>drawnNumber){
            returnText.innerHTML = 'O número é maior que o número sorteado ❌'
            
        }
        else{
            returnText.innerHTML = 'Você acertou, parabéns! Recarregue a página para jogar novamente';
            const drawnNumber = Math.round(Math.random()*1000)   
        }
        
        console.log('Usuário digitou:', userNumber);
        
    
    
}

    
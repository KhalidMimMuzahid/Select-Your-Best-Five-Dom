const buttonDisabled = button=> {
    const setAttributes= (button,attributes)=>{
        for(const [key, val] of Object.entries(attributes)){
            button.setAttribute(key,val);
        }
    }
    const attributes={
        disabled: true,
        title : 'This Button is disabled'
    }
    setAttributes(button, attributes);
    button.classList.add('bg-stone-800','text-stone-400');
    button.classList.remove('hover:bg-red-500')
}
const addPlayerToSelectedFive= (name,button) =>{
    const newPlayer= document.createElement('li');
    newPlayer.innerText= name;
    const topFive= document.getElementById('top-five');
    // topFive.appendchild(newPlayer);
    topFive.appendChild(newPlayer);
    buttonDisabled(button)

}

const getName=button=>{
    button.addEventListener('click', ()=>{
        const thisCard= button.closest(".card")
        const nameElement =thisCard.querySelector('.player-name');
        const name= nameElement.innerText
        const topFive = document.getElementById('top-five');
        const topFiveClassList= topFive.children;
        if(topFiveClassList.length <5){
            addPlayerToSelectedFive(name,button);
        }
        else{
            alert('you cano not select more than five')
        }
    })
}





// check input validity 
const controlInputValidity=(field) =>{
    controlKeyPressig(field);
    controlKeyUp(field)
}
// control key up press
const controlKeyUp=(field)=>{
    field.addEventListener("keyup", function(inputField){
        let pressedKey= inputField.target.value;
        // first way  this way can not control keyPress event.
        let lengthOfInput = pressedKey.length;
        let lastPressed = pressedKey[lengthOfInput-1];
        if(isNaN(pressedKey) || lastPressed ==" "){
            inputField.target.value=pressedKey.slice(0, -1);
        }
    })
}
// control key pressing
const controlKeyPressig = (field) => {
    field.addEventListener('keypress', function(inputField){
        let pressedKey= inputField.target.value;
        let lengthOfInput = pressedKey.length;
        let lastPressed = pressedKey[lengthOfInput-1];
        if(isNaN(pressedKey) || lastPressed===" "){
            inputField.target.value=pressedKey.slice(0, -1);
        }
    })
}
//  get inner valu of input 
const getInnerValueById=(elementId)=>{
    const innerValueElement= document.getElementById(elementId);
    const innervalueString = innerValueElement.value ;
    // check any inputField is empty or not
    if(innervalueString.length === 0 ){
        alert('some of input field is not filled up')
        return 1;
    }
    const innervalueInt= parseInt(innervalueString);
    return innervalueInt;
}
    // Set inner text of element 
const setInnerTextById=(elementId, updateText)=>{
    const innerTextelement= document.getElementById(elementId);
    innerTextelement.innerText= updateText;
    // return innerText;
}
// get inner text of element 
const getInnerTextById=(elementId)=>{
    const innerTextelement= document.getElementById(elementId);
    const innerTextString = innerTextelement.innerText ;
    const innerTextInt= parseInt(innerTextString);
    return innerTextInt;
}
const updateCalculate = ()=>{
    const ratePerPlayer = getInnerValueById('per-player');

    const topFive = document.getElementById('top-five');
    const topFiveClassList= topFive.children;
    const totalPlayer= topFiveClassList.length;
    const expences= ratePerPlayer*totalPlayer;
    setInnerTextById('expences',expences)
    console.log(ratePerPlayer)
}

const updateCalculateTotal = ()=>{
    const managerCost= getInnerValueById('manager');
    const coachCost= getInnerValueById('coach');
    const expences = getInnerTextById('expences');
    const total = managerCost+coachCost+expences;
    setInnerTextById('total',total);
}


const buttons=document.querySelectorAll('[data-card-button]');
buttons.forEach(button =>{
    getName(button);
})


const inputField = document.querySelectorAll('.input-field');
inputField.forEach(field =>{
    controlInputValidity(field)
})


const calculate=document.getElementById("calculate");
calculate.addEventListener('click', () =>{
    updateCalculate()
})
const calculateTotal=document.getElementById("calculate-total");
calculateTotal.addEventListener('click', () =>{
    updateCalculateTotal()
})
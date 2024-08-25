let display = document.getElementById('display');
let buttons= Array.from(document.getElementsByClassName('button'));
function handleInput(input) {
  if (input === 'C') {
      display.innerText = '';
  } else if (input === '←') {
      display.innerText = display.innerText.slice(0, -1);
  } else if (input === '=') {
      try {
          display.innerText = eval(display.innerText);
      } catch {
          display.innerText = 'Error';
      }
  } else if (['sin', 'cos', 'tan', 'log', '√'].includes(input)) {
      let currentValue = parseFloat(display.innerText);
      let result;
      if (isNaN(currentValue)) {
          display.innerText = 'Error';
          return;
      }
      switch (input) {
          case 'sin':
              result = Math.sin(degToRad(currentValue)).toFixed(5);
              break;
          case 'cos':
              result = Math.cos(degToRad(currentValue)).toFixed(5);
              break;
          case 'tan':
              result = Math.tan(degToRad(currentValue)).toFixed(5);
              break;
          case 'log':
              result = Math.log10(currentValue).toFixed(5);
              break;
          case '√':
              result = Math.sqrt(currentValue).toFixed(5);
              break;
      }
      display.innerText = result;
  } else if (input === '^') {
      display.innerText += '**'; 
  } else {
      if (/^[0-9+\-*/.()]$/.test(input)) {
          display.innerText += input;
      }
  }
}
function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
      handleInput('=');
  } else if (e.key === 'Backspace') {
      handleInput('←');
  } else if (e.key === 'Escape') {
      handleInput('C');
  } else {
      handleInput(e.key);
  }
});
buttons.map(button =>{
    button.addEventListener('click',(e) =>{
      
     // console.log(e)
       console.log(e.target);
       switch(e.target.innerText){
        case 'C':
          display.innerText = '';
          break;
        case '←' :
          display.innerText = display.innerText.slice(0, -1);
          break; 
        case '=':
          try{
          display.innerText = eval(display.innerText);}
          catch{
            display.innerText = 'Error';
          }
          break;  
        default:
          display.innerText += e.target.innerText;
       }
    })
})
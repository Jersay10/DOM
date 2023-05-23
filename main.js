
const table=document.getElementById("table");
const box=document.getElementById("box");
const apple=document.getElementById("apple");
const inputJustify=document.getElementById("justy");
const align=document.getElementById("align");
const color=document.getElementById("color");
const myButton=document.getElementById("btn");
const myButton2=document.getElementById("btn2");
const myButton3=document.getElementById("btn3");
const error=document.getElementById("error");
const botonError =document.getElementById('closeError');
const errorMessage =document.getElementById('errorMessage');




let styleSave = '';
myButton2.addEventListener('click',function () {  

    if (align.value=== 'align-items:center;') {
        styleSave = styleSave +' '+ align.value;
        table.style = styleSave;
        console.log(styleSave);
    
    }else{

        errorMessage.textContent =  align.value +' no es asi tienes que colocar align-items:center no se menso estudia mas '
        error.style = 'display: block;'
    }

});






    myButton.addEventListener('click',function () { 

        if (inputJustify.value ==='justify-content: center;') {
            styleSave = styleSave +' '+ inputJustify.value;
             table.style = styleSave;
             console.log(styleSave); 
        }else{
            errorMessage.textContent =  inputJustify.value +' no es asi tienes que colocar justify-content: center no se menso estudia mas '
             error.style = 'display: block;'

        }

    });

    

myButton3.addEventListener('click',function () {  

    
    if (color.value ===  'background-color: red;') {
        styleSave = styleSave +' '+ color.value;
        table.style = styleSave;
        console.log(styleSave);
        
    }else{
        error.style = 'display: block;'
        errorMessage.textContent =  color.value +' no es asi tienes que colocar background-color: red: center no se menso estudia mas '
        error.style = 'display: block;'

    }

});



botonError.addEventListener('click',function () {  
    error.style = 'display: none;'

});






const button = document.querySelectorAll('.button');
// console.log(button);     //it will give node list
const body = document.querySelector('body')
button.forEach((btn)=>{             // we can write  .forEach(function(btn){ return     })
    // console.log(btn);
    btn.addEventListener('click',function(e) {
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundColor= e.target.id;    //instead of e.target.id we can directly give color
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id === 'cyan'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor= e.target.id;
        }
    
    })
})
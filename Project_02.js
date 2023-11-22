const form= document.querySelector('form')
// when we submit the form then data start to go towards server we need to prevent this so we can use,
form.addEventListener('submit',function(e){
    const height =parseInt(document.querySelector('#height').value)  //it return values in string .we have to convert to int
    const weight =parseInt(document.querySelector('#weight').value)  
    const results =(document.querySelector('#results')) 
    e.preventDefault()                                               //it will prevent the movement of action towards server
    if (height=== '' || height < 0 || isNaN(height)) {
        results.innerHTML= `please give a valid height ${height}`
    } 

    else if (weight=== '' || weight < 0 || isNaN(weight)) {
        results.innerHTML= `please give a valid weight ${weight}`
    }
    else{
        const bmi= (weight /((height*height)/10000)).toFixed(3);
        //      show the result
        results.innerHTML= ` <span> ${bmi}</span> `
    } 
});
/*  if we retrive value from height and weight from out side of  ("form.addEventListener('submit',function(e)")
we can get result but form values are being empty */


function moveImg(){
    let element = document.getElementsByClassName("imgDiv"); 
    let index = 0;
    let b = setInterval(()=>{
        if(index>-2){
            index--;
        }else{
            index = 0;
        }

        // change margin
        console.log(`${100*index}vw`);
        console.log(document.getElementById("myDiv").style.marginLeft= `${100*index}vw`);
       
       
    }, 2000);

    
}

moveImg();
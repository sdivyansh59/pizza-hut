
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
        // element.style.marginLeft =  `${100*index}vw`;
        // if(index == 0){
        //     element.style.marginLeft = - `${100*index}vw`;
        // }else if(index == 1){
        //     element.style.left = "100vw";
        // }else{
        //     element.style.marginLeft = "100vw";
        // }
       
    }, 2000);

    
}

moveImg();
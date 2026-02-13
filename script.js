const nobtn = document.getElementById("no")

let btnclick = 0
const warning1 = document.createElement("h2")

function movebtn(){
    nobtn.style.position = "fixed"
    let rndtop = Math.floor(Math.random()*screen.height-nobtn.clientHeight)
    nobtn.style.top = rndtop + "px"
    let rndleft = Math.floor(Math.random()*screen.width-nobtn.clientWidth)
    nobtn.style.left = rndleft + "px"
    btnclick++ 

    console.log(rndtop)
    console.log(rndleft)

    if(rndleft < 0){
        rndleft = rndleft + nobtn.clientHeight
        nobtn.style.left = rndleft + "px"
    }
    if(rndleft > screen.width){
        rndleft = rndleft - nobtn.clientHeight
        nobtn.style.left = rndleft + "px"
    }
    if(rndtop < 0){
        rndtop = rndtop + nobtn.clientHeight
        nobtn.style.top = rndtop + "px"
    }
    if(rndtop > screen.height){
        rndtop = rndtop - nobtn.clientHeight
        nobtn.style.top = rndtop + "px"
    }

    if(btnclick ==1){
    warning1.innerText = "Prosím fakt dej ano <3"
    document.body.appendChild(warning1)
}
    else if(btnclick ==2){
    warning1.remove()
    warning1.innerText = "Fakt prosím, já moc chci"
    document.body.appendChild(warning1)
}
    else if(btnclick ==3){
    warning1.remove()
    warning1.innerText = "Já myslel, že ty chceš taky..."
    document.body.appendChild(warning1)
}
    else if(btnclick ==4){
    warning1.remove()
    warning1.innerText = "Prosím"
    document.body.appendChild(warning1)
}
    else if(btnclick ==5){
    warning1.remove()
    warning1.innerText = "To jsi fakt 5x klikla na ne?"
    document.body.appendChild(warning1)
}
    else if(btnclick ==6){
    warning1.remove()
    warning1.innerText = "Tak budu smutnej no"
    document.body.appendChild(warning1)
}
}





nobtn.addEventListener("click", movebtn)
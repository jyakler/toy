if(typeof init==='undefined'){
    const init=function(){
        const injectElement = document.createElement("img");
        injectElement.setAttribute("id","img");
        injectElement.src=chrome.runtime.getURL("images/left.png");
        // injectElement.className='rustyZone-element';
        // injectElement.innerHTML="hi my name is STH";
        document.body.appendChild(injectElement);
    }
    init();
}

let a=0;
function count() {
    a=(a+1)%2;
    if(a){
        document.getElementById('img').src=chrome.runtime.getURL("images/right.png");
    }else{
        document.getElementById('img').src=chrome.runtime.getURL("images/left.png");
    }
}
document.addEventListener("keydown",count);


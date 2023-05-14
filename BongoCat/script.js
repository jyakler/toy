// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     if (changeInfo.status == "complete") {
//       chrome.tabs.executeScript(tabId, {
//         code: `
//         var div = document.createElement("div");
//         div.style = "position:absolute; z-index:100;";
//         div.innerHTML = "<img src='images/right.png'>";
//         document.body.appendChild(div);
//         `
//       });
//     }
//   });
  
//   function changeImage() {
//     var image = document.getElementById("image");
//     image.src = "images/right.png";
//   }

// const image=document.querySelector("img");

// image.addEventListener("click",()=>{
//     changeImage();
// });

// function changeImage() {
//     var image = document.getElementById("img");
//     image.src = "images/right.png";
// }


let a=0;
function count() {
    a=(a+1)%2;
    if(a){
        document.getElementById('img').src="images/right.png";
    }else{
        document.getElementById('img').src="images/left.png";
    }
}
document.getElementById('img').onclick = count;
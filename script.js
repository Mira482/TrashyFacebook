var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");
var count=0
var pages = [
  {
    name: "Home",
    content: "Home"
  },
  {
    name:"About",
    content: "About"
  },
  {
    name: "Interact",
    content: "null"
  }
]

for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  if(pg!=="Interact"){
    display.innerHTML=wd;
  }else{
    interactPage();
  }
}

function interactPage(){
  var box = document.createElement("div");
  box.innerHTML="The count is now: "+count
  display.appendChild(box);
  document.body.querySelector(".display").addEventListener("click",function(){
  interactPage(count=count+1)
})
}
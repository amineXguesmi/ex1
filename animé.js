

var col=document.querySelector("#color");
var taille=document.querySelector("#int");
var police=document.querySelector("#police");

var text=document.querySelector(".text")

col.addEventListener('input',(e)=>{
 var a=col.value;
text.style.color=a;
})
taille.addEventListener('input',(e)=>{
  var b=taille.value;
text.style.fontSize=b+"px";
})
police.addEventListener('input',(e)=>{
    var c=police.value;
  text.style.fontFamily=c;
  })
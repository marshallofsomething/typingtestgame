const typingText =document.querySelector(".typing-text p");
inField=document.querySelector(".wrapper .inputfield");
let charIndex=0;
function ramdomParagraph(){
    let randIndex =Math.floor(Math.random()*paragraph.length);
                                                                      
    paragraph[randIndex].split("").forEach(span=>{
         let spanTag=`<span>${span}</span>` ;
         typingText.innerHTML+=spanTag;
    });
    // console.log(typingText.innerHTML);
}
function initTyping(){
    const characters=typingText.querySelectorAll("span");
    let typeChar=inField.value.split("")[charIndex];
    if(characters[charIndex].innerText===typeChar){
        characters[charIndex].classList.add("correct");
    }else{
        characters[charIndex].classList.add("incorrect");
    }
    charIndex++;
    characters[charIndex].classList.add("active");
}
ramdomParagraph();
document.addEventListener("keydown",()=>inField.focus());
typingText.addEventListener("click",()=>inField.focus());
inField.addEventListener("input",initTyping);
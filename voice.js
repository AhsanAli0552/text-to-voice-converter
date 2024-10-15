let speech = new SpeechSynthesisUtterance();
const button = document.querySelector("#button");
const textarea = document.querySelector("#textarea");

let voiceselect =document.querySelector("select");

let voice =[];


window.speechSynthesis.onvoiceschanged= ()=>{
voice = window.speechSynthesis.getVoices();

speech.voice =voice[0];


voice.forEach((voice,i)=>
    (voiceselect.options[i] = new Option(voice.name,i)));

}

voiceselect.addEventListener("change",()=>{
    speech.voice=voice[voiceselect.value]
});












button.addEventListener("click",()=>{
   speech.text =textarea.value;
    window.speechSynthesis.speak(speech);
});
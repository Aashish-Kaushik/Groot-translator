var btntranslater= document.querySelector("#btn-translater");
var textinput = document.querySelector("#text-input");
var outputdiv = document.querySelector("#output");
var serverURL ="https://api.funtranslations.com/translate/groot.json"
function gettranslationURL(input){
    return serverURL+"?"+"text"+input
}
function errorhandler(error){
    console.log("error occured",error)
    alert("something wrong with server! try again after some time")
}
function clickhnadler(){
    var inputText = txtInput.value;
    fetch(translationURL(inputText))
    .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
           })
        .catch(errorHandler)
        btnTranslate.addEventListener("click", clickHandler)
};

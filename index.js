const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';

const myForm = document.getElementById("form-google");
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const textInput = document.getElementById("text01");

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let fromInfo = fromInput.value;
    let toInfo = toInput.value;
    let textInfo = textInput.value;

    var options = {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "application/gzip",
            "X-RapidAPI-Key":
                "25b4fddf65mshce37710dfcf438ep115a68jsnf350e46ec2ae",
            "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
        body: new URLSearchParams({
            q: textInfo,
            target: toInfo,
            source: fromInfo,
        }),
    };

    fetch(url, options)
       .then((response) => {
            return response.json();
     })
        .then((data) => {
           console.log(data);

            let traducao = data.data.translations[0].translatedText;

            let responseBox = document.getElementById("translation");
            responseBox.innerHTML = `<h3>${traducao}</h3>`;
       })
       .catch((deuRuim) => {
           console.log("O error foi: ", deuRuim);
        });

  
});

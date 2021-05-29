/*This code was inspired by the history of the translation of the Bible, it first began as book in Hebrew named
the "TaNaKh", then it was translated to Greek by the order of Ptolemy II and that's how we got another book the
"Septuagint", after that we got other translations in Koine Greek then others like the "Targums", the "Peshitta", 
the "Latin Vulgate", the "Textus Receptus", "KJV", "RVR1960", "NIV or NVI", "Arab Bible (NOT the Quran)", etc.
NOTE:
In this code I'm gonna focus on four translations TaNaKh, NIV, Arab Bible, and Septuagint, of course I will not
be capable of using the old dialects so I will use the modern grammar to simulate that I'm a scribe doing a: 
word-by-word translation of the Holy Scriptures.*/

const axios = require ('axios');//Library

var data = [{"Text": "שלום"}];//Hebrew base phrase                                    //Azure cognitive services.
var direction = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=el';//Translation API.
var direction2 = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en';//Translation API.
var direction3 = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=ar';//Translation API.
var direction4 = 'https://api.cognitive.microsofttranslator.com/detect?api-version=3.0';//Language_Detect API.
var direction5 = 'https://api.cognitive.microsofttranslator.com/transliterate?api-version=3.0&language=he&fromScript=Hebr&toScript=Latn';//Transliteration API.

//Greek translation
function translation(){
axios.post(direction, data, {
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region': 'southcentralus',
    }
}).then(answer => console.log(answer.data[0].translations))
.catch(error => console.log(error.response.data));
}

//English translation
function translation2(){
axios.post(direction2, data, {
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region': 'southcentralus',
    }
}).then(answer => console.log(answer.data[0].translations))
.catch(error => console.log(error.response.data));
}

//Arabic translation
function translation3(){
axios.post(direction3, data, {
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region': 'southcentralus',
    }
}).then(answer => console.log(answer.data[0].translations))
.catch(error => console.log(error.response.data));
}

//Text Detection
function translation4(){
axios.post(direction4, data, {
    headers: {
        'Content-Type': "application/json",
        'Ocp-Apim-Subscription-Key': '58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region': 'southcentralus'
    }
}).then(answer => console.log(answer.data[0]))
.catch(error => console.log(error));
}

//Hebrew to Latin Transliteration.
function translation5(){
axios.post(direction5, data, {
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region': 'southcentralus'
    }
}).then(answer => console.log("Hebrew transliteration = ",answer.data[0]))
.catch(error => console.log(error));
}

//Call the functions.
translation();
translation2();
translation3();
translation4();
translation5();

/*
RESULT:

    {
  language: 'he',
  score: 1,
  isTranslationSupported: true,
  isTransliterationSupported: true
    }

    [ { text: 'Γεια σας', to: 'el' } ]
    [ { text: 'Hello', to: 'en' } ]
    [ { text: 'مرحبًا', to: 'ar' } ]

    Hebrew transliteration =  { text: 'shlom', script: 'Latn' }
*/
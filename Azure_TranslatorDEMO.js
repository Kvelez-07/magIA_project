//Language learning tool project by KVZ, Costa Rica.
//Description: This program helps anybody who is trying to learn semitic, hellenistic or islamic dialects.

const axios = require ('axios');//Axios library.

var data = [{"Text": "Do you have any questions?"}];//Insert here any phrase that you may want to translate.

//EXAMPLE: const word = [{"Text": ""}];//Insert here any phrase that you may want to learn how to pronounce.
var data = [{"Text": "שלום "}];//Example phrase in Hebrew #1
//Uncomment this translit tools if you want to use them too.
//var data = [{"Text": "γεια"}]; // " " Greek #2
//var data = [{"Text": "مرحبا "}];// " " Arab #3

//Avaliable languages to use.
//https://docs.microsoft.com/es-mx/azure/cognitive-services/translator/language-support // to set up the &to=language

var direction = ''; //Enter here any other service you may like to use.
var direction2 = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=he';//Hebrew translation
var direction3 = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=el';//Greek translation
var direction4 = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=ar';//Arab translation
var direction5 = 'https://api.cognitive.microsofttranslator.com/transliterate?api-version=3.0&language=he&fromScript=Hebr&toScript=Latn'//Hebrew translit
//Uncomment this translit tools if you want to use them too.
//var direction6 = 'https://api.cognitive.microsofttranslator.com/transliterate?api-version=3.0&language=el&fromScript=Grek&toScript=Latn'//Greek translit
//var direction7 = 'https://api.cognitive.microsofttranslator.com/transliterate?api-version=3.0&language=ar&fromScript=Arab&toScript=Latn'//Arab translit

//Translations

//Hebrew translation
axios.post(direction2, data, {
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region': 'southcentralus'
    }
}).then(answer => console.log("Hebrew translation = ", answer.data[0].translations[0])) //Result option.
.catch(error => console.log(error)); //Prints errors.

//Greek translation
axios.post(direction3, data, {
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region': 'southcentralus'
    }
}).then(answer => console.log("Greek translation = ",answer.data[0].translations[0])) //Result option.
.catch(error => console.log(error)); //Prints errors.

//Arab translation
axios.post(direction4, data, {
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region': 'southcentralus'
    }
}).then(answer => console.log("Arab translation = ",answer.data[0].translations[0])) //Result option.
.catch(error => console.log(error)); //Prints errors.

//For result option #1 use = answer.data[0].translations 
//For result option #2 use = answer.data[0].translations[0].text

//Transliterations.

//Hebrew/Greek/Arabic transliteration
axios.post(direction5, data, {
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region': 'southcentralus'
    }
}).then(answer => console.log("", answer.data[0])) //Prints data.
.catch(error => console.log(error)); //Prints errors.

//Result
/*
Arab translation =  { text: 'مرحبًا ', to: 'ar' }
Greek translation =  { text: 'Γεια σας ', to: 'el' }
Hebrew translation =  { text: 'שלום ', to: 'he' }
 { text: 'shlom', script: 'Latn' }                  //The last one might change depending on the tool you use or uncomment.
*/

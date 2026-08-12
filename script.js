function encrypt(string, password){
  return CryptoJS.AES.encrypt(string, password).toString();
}

function decrypt(string, password){
  return CryptoJS.AES.decrypt(string, password).toString(CryptoJS.enc.Utf8);
}

const encrypted = "U2FsdGVkX1+xDVOtTlVoglpdpEPtn8xLhhYVFJx7HCM60x9SM3y2TPfycWD+ny637B6WIKYW/YbuToV2YQrPMDvR3UMLjAyVvbRGr+n8oknjwCO5B5+4NUyNBKNpQTcblnI7eTz+3macNl98puw1+91VMVjhTvwQ/oyEpsChv1pVlpw4R3Ir3v275KL/8iCFUslgQZWNrgIe04TMcfenMi/iOarlD6K9gOtqE0L9UaTEUn+05wcHJqkwfLxnsHbHAvgEdemD3UdzxVROwOu5w8EHjHLd3+LtF4VrBdnQoJjakNCpWfPwVGRZnG7VtFUWzW1IfyXSusCpKJRGsAJiNm5LyHc8zNZeEOQeJ+q5uQtV2MovEQumKRFltdLwEMQlMF0QmmXynQA+clok+h44RXaSa5pUk8Sa5pwr8Te564oCokgH+6DS+LUXLdk/gZR0Veo/KGBm0kC2HbLKhqF8KYMszvpZ68ayhzSDNHpe4KfopHJeJjROhx73rqeRSjDYQbVhdsqff56aNs4BN6stOw=="

function unlock(password){
  
  var html = decrypt(encrypted, password);

  if (html.includes("<!--CORRECT_PASSCODE-->")){
    document.getElementById("replace").innerHTML = html;
  }
}
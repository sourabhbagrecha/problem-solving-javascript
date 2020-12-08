const encryptor = (str, key) => {
    key = key%26;
    let encString = "";
    for(let i=0; i<str.length; i++){
        encString += String.fromCharCode((((str.charCodeAt(i)-97)+key)%26)+97)
    }
    console.log(encString)
    return encString 
}
encryptor("xyz", 2)
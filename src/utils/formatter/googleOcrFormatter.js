module.exports = (text) => {
    text = text.replace(/\n/g, " ");

    console.log(text)
    var sur_name = text.match(/surname (.+?) voornamen/);
    sur_name = sur_name ? sur_name[1] : null

    var given_name = text.match(/voornamen\/given names (.+?)\sgeslacht/);
    given_name = given_name? given_name[1] :null
    
    var gender_and_nationality = text.match(/nationality\s+(.+)\s+geboortedatum/);
    console.log("🚀 ~ file: googleOcrFormatter.js:13 ~ gender_and_nationality:", gender_and_nationality)
    gender_and_nationality  = gender_and_nationality ? gender_and_nationality[1]?.replace('/', '').trim().split(" ") : null
    var birth_date = regexData(text, /date of birth (.+?){15}/);

    var issue_date = regexData(text, /date of issue (.+?){15}/);
    
    var expiry_date = regexData(text,/date of expiry (.+?){15}/);


    return {
        sur_name,
        given_name,
        birth_date,
        issue_date,
        expiry_date,
        gender: gender_and_nationality ? gender_and_nationality[0] ?? null : null,
        nationality: gender_and_nationality ? gender_and_nationality[1] ?? null : null
    }
}

const regexData = (text, regex) => {
    var expiry_date = text.match(regex);
    expiry_date = expiry_date ? expiry_date[0].match(/(0[1-9]|[12][0-9]|3[01])\s+(AUG|MAA|SEP|OCT|NOV|DEC)\/(AUG|MAR|SEP|OCT|NOV|DEC)\s(19|20)\d{2}/)[0] : null
    return expiry_date;
}
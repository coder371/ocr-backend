module.exports = (data) => {
    console.log("🚀 ~ file: googleOcrValidation.js:2 ~ data:", data)
    const errors = [];
    if(!data.card_id){errors.push("card_id")}
    if(errors.length > 0){
        console.log("🚀 ~ file: googleOcrValidation.js:12 ~ errors:", errors)
        return false
    }
    return true
}
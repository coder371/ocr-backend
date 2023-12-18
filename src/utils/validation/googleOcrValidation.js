module.exports = (data) => {
    console.log("🚀 ~ file: googleOcrValidation.js:2 ~ data:", data)
    const errors = [];
    if(!data.sur_name){errors.push("use_name")}
    if(!data.given_name){errors.push("given_name")}
    if(!data.birth_date){errors.push("birth_date")}
    if(!data.issue_date){errors.push("issue_date")}
    if(!data.expiry_date){errors.push("expiry_date")}
    if(!data.gender){errors.push("gender")}
    if(!data.nationality){errors.push("nationality")}
    if(errors.length > 0){
        console.log("🚀 ~ file: googleOcrValidation.js:12 ~ errors:", errors)
        return false
    }
    return true
}
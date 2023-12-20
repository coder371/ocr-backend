module.exports = (text) => {
    text = text.replace(/\n/g, " ");

    console.log(text)
    var card_id = text.match(/\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}/g);
    card_id = card_id ? card_id[0] : null
    
    var expiry_date = text.match(/(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])/g);
    expiry_date = expiry_date ? expiry_date[0] : null
    return {
        card_id,
        expiry_date
    }
}
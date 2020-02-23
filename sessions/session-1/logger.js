function logger(msg) {
    console.log("log me: "+ msg);
}

function sub(num1, num2) {
    return num1 - num2;
}

module.exports = {
    logger: logger,
    sub: sub
}
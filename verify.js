let day = new Date().getDay();
let hours = new Date().getHours();

console.log (hours);

function verify (req, res, next) {
    if (day >0&& day<6 && hours > 8 && hours <19) next();
    else
   res.send (`<h1>Welcome Our service is closed now, we open from Monday to Friday (8h to 17h)</h1>`);
}
module.exports = verify;
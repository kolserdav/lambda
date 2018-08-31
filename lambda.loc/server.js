
let mysql = require('mysql');
call();
function call(event, context, callback){
    // TODO implement
    let con = mysql.createConnection({
        host: "localhost",
        user: "izi",
        password: "kuzOL985fkpLdiI6"
    });

    con.connect(function(err) {
        if (err) {throw err}
        else {
            let ansver = "Connected!";
            console.log(ansver);
        }

    });

}
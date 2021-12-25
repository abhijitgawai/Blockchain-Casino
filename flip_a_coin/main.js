Moralis.initialize("nvU8nDkLIN8eQgXfJEoTbIRgxHzG3wdRMZAWCH7C"); // Application id from moralis.io
Moralis.serverURL = "https://clh7qlymyzti.usemoralis.com:2053/server"; //Server url from moralis.io

async function login() {
    try {

        user = await Moralis.Web3.authenticate();
        // user = await Moralis.User.authenticate();
        // if (!user) {                      // if user is not logged in (not found) 
        //     user = await Moralis.Web3.authenticate();
        // }
        console.log(user);
        alert("User logged in")
        document.getElementById("login_button").style.display="none";
        document.getElementById("game").style.display="block";


    } catch (error) {
        console.log(error);
    }
}

async function flip(side) {
    let amount  = document.getElementById("amount").value;
    alert(side+'  '+ amount);
}


// async function because we are calling a smart contract


document.getElementById("login_button").onclick = login;
document.getElementById("heads_button").onclick = function(){flip("heads")}; // flip("heads") will execute the function directly here, and attribute the result to onclick, (Here as in compiling)
document.getElementById("tails_button").onclick = function(){flip("tails")}; 

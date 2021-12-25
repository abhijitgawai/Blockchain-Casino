moralis boilerplate main.js ,index.html -> https://github.com/MoralisWeb3/demo-apps/tree/land-registry/moralis-sign-in-boilerplate

install server - 
    live server by ritwick dey from vs code OR python server from https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server

Smart contract used: https://github.com/MoralisWeb3/demo-apps/tree/main/casino-dapp/truffle/contracts

Phantom is also authentacated by this

Go to moralis.io
copy credentials and update in main.js

click go live (live server) in vs code, 

and you can see result (sign in with metamask or phantom)

image1

image2

After initialized buttons, and function flip (only alert(side);)
image3


Now we want to hide sign in with metamask, when signed in 
So in index.html we wrapped head,tails buttons in game id
and in main.js we assigend value of display accordingly

in truffle directory
npm init                                     // install npm from https://nodejs.org/en/download/, check installation by "node -v" in cmd
truffle init                                 // install truffle using "sudo npm install -g truffle", check by "truffle"

in truffle directory will be like,

image6

flipcontract.sol -> https://github.com/MoralisWeb3/demo-apps/blob/main/casino-dapp/truffle/contracts/flipcontract.sol

"truffle compile"         // ignore warning of return type bool


now we have to run it .. so we need ganache https://trufflesuite.com/ganache/
run etheruim local blockchain on ganache

"truffle console"  run and you will see 
image7


2_contract_migration.js  in migrations https://github.com/MoralisWeb3/demo-apps/blob/main/casino-dapp/truffle/migrations/2_contract_migration.js

image8


connect ganache with out truffle project https://youtu.be/lZmwc1M-D24?list=PLFPZ8ai7J-iR6DMqBfZwJGc0vaNZPbJDv&t=101



 
const fetch = require('node-fetch');

function getPreferredLanguage(userName){
    
    fetch('https://api.github.com/users/' + userName + '/repos')
    .then(answer => { 
        return answer.json()})
    .then(res => 
        res.map(res => res.language))
    .then(res2 => {
            console.log(res2.sort((a,b) => 
        res2.filter(v => v === a).length - res2.filter( v => v === b ).length
    ).pop())})

};



var campoEmail = document.querySelector('#email');
var campoEmail = document.querySelector('#sugestao');

var domains = ['gmail.com', 'aol.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org"];

campoEmail.addEventListener('blur', function() {
  Mailcheck.run({
    email: campoEmail.value,
    domains: domains,                       // optional
    topLevelDomains: topLevelDomains,       // optional
    secondLevelDomains: secondLevelDomains, // optional
    distanceFunction: superStringDistance,  // optional
    suggested: function(suggestion) {
      console.log(suggestion.full);
    },
    empty: function() {
      // callback code
    }
  })
});
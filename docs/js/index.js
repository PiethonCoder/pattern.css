var p = ["school","service","social-media","festive","bathroom","food","space","flower","sea","animal","money","map","city","weather","date","halloween","party","music","sciene","video-games","fitness","sports","people","books","pc","web","warning","security","health","success","shopping","office","cloths","cars",
"files","phones","weapons","bugs","support"]

var c = ["red","orange","brown","tan","green","teal","blue","purple","pink"]

for(var pattern in p){
  pp = p[pattern];
  
  $("#pattern-list").append(`<div class="w100"><a>${pp}</a></div>`);
  
  var block = `<div class="pattern-block p-${pp} p-size="xxxs" p-color="${c[ pattern % c.length]}"></div>`
  //<div class="bottom h30 flex white"><p>${pp}</p></div>
  $("#pattern-display").append(block);
}

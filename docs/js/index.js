var p = ["school", "service", "social-media", "festive", "bathroom", "food", "space", "flower", "sea", "animal", "money", "map", "city", "weather", "date", "halloween", "party", "music", "science", "video-games", "fitness", "sports", "people", "books", "pc", "web", "warning", "security", "health", "success", "shopping", "office", "cloths", "cars",
"files", "phones", "weapons", "bugs", "support"]

var c = ["red", "orange", "brown", "tan", "green", "teal", "blue", "purple", "pink"]

function build() {
  for (var pattern in p) {
    pp = p[pattern];

    $("#pattern-list").append(`<li class="link w100 h2 fvw1"><a href="/html/preview.html?pattern=${pp}" class="pointer">${pp}</a></li>`);

    var block = `<div data-v="${pp}" class="pattern-block p-${pp} white2 pointer" p-size="xxxs" p-color="${c[ pattern % c.length]}"><div class="bottom w100 h20 flex white"><p>${pp}</p></div></div>`;

    $("#pattern-display").append(block);
  }
  
  $(".pattern-block").click(function(){
    location = `/html/preview.html?pattern=${$(this).attr("data-v")}`
  })
}
build()
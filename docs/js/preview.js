var url = new URL(location.href)
var pattern = new URLSearchParams(url.search).get("pattern");
var size = color = ""


$(".color-b").click(function () {
  $("#p-pattern").attr("p-color",$(this).attr("data-v"));
  color = $(this).attr("data-v");
  update();
})
$(".size-b").click(function () {
  $("#p-pattern").attr("p-size",$(this).attr("data-v"));
  size = $(this).attr("data-v");
  update();
})

$("main,#p-pattern").addClass("p-" + pattern)

function update() {
  $("#p-code").text(`<div class="p-${pattern}" p-size="${size}" p-color="${color}"></div>`);
}
update();

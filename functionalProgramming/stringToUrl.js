var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title.toLowerCase().split(/\W/)
    .filter(val => {
    return val != ''})
    .join("-");
}
var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

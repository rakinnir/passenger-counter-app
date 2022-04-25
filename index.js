let count = 0
function increment() {
  count++
  document.getElementById("count-el").textContent = count
  console.log(count)
}

function save() {
  let saveCount = count
  document.getElementById("save-el").textContent += saveCount + " - "
  document.getElementById("count-el").textContent = 0
  count = 0
}

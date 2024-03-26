const input = document.querySelector("input");

let timeout;

input.addEventListener("input", function (e) {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    // Do the search
    console.log("Search for:", e.target.value);
  }, 500);
});

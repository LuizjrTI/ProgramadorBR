window.onload = function () {
  let h1 = document.getElementsByTagName("h1");
  for (h of h1) {
    console.log(h);
    h.addEventListener("click", qop);
  }

  function qop() {
    let t = e.target;
    console.log(t.parentElement);
  }
};

// DOM Select(선택)
const opener = document.querySelector(".opener"); // 기호
const closer = document.querySelector("#closer"); // 기호
const menu = document.querySelector(".menu");

opener.addEventListener("click", function () {
  menu.classList.remove("hide"); //실제로는 문제없지만, 테스트 환경을 고려
  // menu.style.display = "block";
});

closer.addEventListener("click", function () {
  menu.classList.add("hide"); //실제로는 문제없지만, 테스트 환경을 고려
  //menu.style.display = "none";
});

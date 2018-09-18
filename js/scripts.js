var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

document.addEventListener("DOMContentLoaded", function() {
  let faces = document.querySelectorAll(".face"),
    radios = document.querySelectorAll("input"),
    faceCN = "face",
    defaultEm = "normal";

  // emotion changes
  for (var r in radios) {
    if (+r < radios.length) {
      radios[r].addEventListener("change", function() {
        if (this.name == "top") {
          faces[0].className = faceCN;
          if (this.value != defaultEm) {
            faces[0].classList.add(this.value);
          }

        } else {
          faces[1].className = faceCN;
          if (this.value != defaultEm) {
            faces[1].classList.add(this.value);
          }
        }
      });
    }
  };
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var toggleClass = document.querySelector('.noLikes');
var classSwitch = document.querySelector('.yesLikes');

toggleClass.addEventListener('click', function () {
  console.log('hello');
  classSwitch.classList.toggle('yesLikes');
});
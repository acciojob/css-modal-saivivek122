//your JS code here. If required.

function openModal(){
	document.getElementById("modal").style.display="block";
    document.body.style.background="lightgrey"
}
function closeModal(){
	document.getElementById("modal").style.display="none";
    document.body.style.background="white"
}
window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  const content = document.querySelector(".modal-content");
  if (e.target === modal) {
    closeModal();
  }
});
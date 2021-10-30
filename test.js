//named function
function showAlerts() {
  alert("Hello Planet Earth");
  alert("Hey");
  alert("Hey Sailor");
  alert("Wanna come up to my place and play Nintendo 64?");
}
showAlerts();

//"assigned" function
myAlerts = function () {
  alert("Holey MOLEY");
  alert("Yo Joe!");
};

myAlerts();


//event handler
function showNewAlerts() {
  var myButton = document.getElementById("button");
  myButton.onclick = function () {
    alert("THIS IS ALL CAPS");
  };
}
showNewAlerts();


//event listener
var myGreyButton = document.getElementById("newButton");
myGreyButton.addEventListener("click", function () {
  alert("THIS IS ALL ABOUT MY NEW BUTTON BABY");
});

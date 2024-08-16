const mobileSideBar = document.getElementById("mySideBar");
var sideBarOpen = false;

// this function helps with opening and closing the sidebar,
// when the menu icon is clicked
function handleHambugerMenuClick() {
  if (sideBarOpen) {
    mobileSideBar.style.display = "none";
    sideBarOpen = false;
  } else {
    mobileSideBar.style.display = "block";
    sideBarOpen = true;
  }
}

// Event listener to handle the sidebar when the window gets resized
window.addEventListener("resize", function () {
  if (this.window.innerWidth >= 994) {
    // if the width of the window is >= 994 pixels, then display the sidebar
    mobileSideBar.style.display = "none";
    sideBarOpen = false;
  } else {
    if (sideBarOpen) {
      mobileSideBar.style.display = "block";
    } else {
      mobileSideBar.style.display = "none";
    }
  }
});

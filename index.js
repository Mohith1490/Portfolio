
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  let text = document.getElementById('myemail').innerText;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
      function popupFn() {
        document.getElementById(
            "overlay"
        ).style.display = "block";
        document.getElementById(
            "popupDialog"
        ).style.display = "block";
    }
    
    popupFn()
  }

 
function closeFn() {
  document.getElementById(
      "overlay"
  ).style.display = "none";
  document.getElementById(
      "popupDialog"
  ).style.display = "none";
}


var el = document.getElementsByClassName('menu');

for (var i = 0; i < el.length; i++) {
   el[i].addEventListener("mousemove", showSub);
   el[i].addEventListener("mouseleave", hideSub);
}

function showSub(event) {
   if(this.children.length > 1) {
      this.children[1].style.height = "auto";
      this.children[1].style.overflow = "hidden";
      this.children[1].style.background = 'lightblue'
      this.children[1].style.opacity = "1";
   } else {
      return false;
   }
}


function hideSub(event) {
    if (this.children.length > 1) {
      this.children[1].style.height = "0px";
       this.children[1].style.overflow = "visible";
       this.children[1].style.opacity = "0";
    } else {
       return false;
    }
}


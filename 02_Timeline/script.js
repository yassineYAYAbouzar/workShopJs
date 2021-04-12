const Allitems = document.querySelectorAll(".timeline li");
let ClienRect,windowSiz = window.innerHeight || document.documentElement.clientHeight;
  ViewPort =element=>{ClienRect = element.getBoundingClientRect();return ClienRect.bottom <= windowSiz;
}
FnLoad = _=> {for (let i in Allitems) {ViewPort(Allitems[i]) ? Allitems[i].classList.add("addView"):"NaN";}}
window.addEventListener("resize", FnLoad);
window.addEventListener("scroll", FnLoad);

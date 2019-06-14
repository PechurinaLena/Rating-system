 document.documentElement.onclick = function (el) {
     if (el.target.tagName !== 'DIV') return false;
     el.target.classList.toggle('active');
 };
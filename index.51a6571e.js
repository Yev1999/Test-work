const e=document.querySelectorAll(".formToHandle"),t=e=>{e.preventDefault();const t=new FormData(e.target),r=Object.fromEntries(t);console.log(r),e.currentTarget.reset()};for(let r=0;r<e.length;r++){e[r].addEventListener("submit",t)}
//# sourceMappingURL=index.51a6571e.js.map

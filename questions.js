(function(){
var key='perl-done-'+document.body.dataset.v,done={};
try{done=JSON.parse(localStorage.getItem(key)||'{}');}catch(e){}
var boxes=[].slice.call(document.querySelectorAll('.tick input')),bar=document.getElementById('bar'),txt=document.getElementById('ptxt');
function render(){var n=0;boxes.forEach(function(b){var on=!!done[b.dataset.n];b.checked=on;b.closest('.q').classList.toggle('done',on);if(on)n++;});
txt.textContent=n+' of '+boxes.length+' done';bar.style.width=(n*100/boxes.length)+'%';}
boxes.forEach(function(b){b.addEventListener('change',function(){if(b.checked)done[b.dataset.n]=1;else delete done[b.dataset.n];
try{localStorage.setItem(key,JSON.stringify(done));}catch(e){}render();});});
document.getElementById('print').addEventListener('click',function(){window.print();});
render();})();

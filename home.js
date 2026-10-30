(function(){
var q=document.getElementById('q'),cards=[].slice.call(document.querySelectorAll('.group')),
chips=[].slice.call(document.querySelectorAll('.chip')),count=document.getElementById('count'),
empty=document.getElementById('empty'),ver='all';
function apply(){var s=q.value.toLowerCase().trim(),n=0;
cards.forEach(function(c){var ok=(ver==='all'||c.dataset.v===ver)&&(!s||c.dataset.s.indexOf(s)>-1);c.hidden=!ok;if(ok)n++;});
count.textContent=n+' of '+cards.length+' groups';empty.hidden=n>0;}
q.addEventListener('input',apply);
chips.forEach(function(b){b.addEventListener('click',function(){ver=b.dataset.v;
chips.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});apply();});});
})();

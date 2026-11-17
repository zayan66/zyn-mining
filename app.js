const langButton=document.getElementById('lang');let lang='ar';
function setLang(next){lang=next;document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
document.querySelectorAll('[data-ar][data-en]').forEach(el=>{el.textContent=el.dataset[lang]});
langButton.textContent=lang==='ar'?'English':'العربية';}
langButton.addEventListener('click',()=>setLang(lang==='ar'?'en':'ar'));

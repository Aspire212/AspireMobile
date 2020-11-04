let transBtn = document.querySelector('.header__burger_trans');
let  btn = document.querySelector('.header__burger_btn');
let  menu = document.querySelector('.header__menu');
let  bodyLock = document.querySelector('.body');


//открытие выпадающего меню понажатию на кастомную кнопку

transBtn.addEventListener('click', function() {
	btn.classList.toggle('_active');
	menu.classList.toggle('_active');
	bodyLock.classList.toggle('_lock');
});
//закрытие
menu.addEventListener('click', function(){
	menu.classList.toggle('_active');
	btn.classList.toggle('_active');
	bodyLock.classList.toggle('_lock');
})
//стрелка наверх
let arrowUp = document.querySelector('.scroll_btn');
window.addEventListener('scroll', function(){
	if(window.scrollY > 200){
		console.log('on');
		arrowUp.classList.add('top');
	
	}
	else{
		console.log('off');
		arrowUp.classList.remove('top');
	}
})
arrowUp.addEventListener('click', function(){
window.scrollTo(0, 0);
})



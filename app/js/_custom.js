document.addEventListener("DOMContentLoaded", function() {

	let imgBtn = document.querySelector('.card__img');
	let content = document.querySelector('.content');
	let btn = document.querySelector('#button');

	// Change Dark Theme

	imgBtn.addEventListener('click', changeTheme );

	function changeTheme () {
		content.classList.toggle('dark-theme')
	};




	// Button Animation

	btn.addEventListener('click', animateBtn);

	function animateBtn (e) {
		let addDiv  = document.createElement('div'),
			mValue  = Math.max(this.clientWidth, this.clientHeight),
			rect    = this.getBoundingClientRect(),
			sDiv    = addDiv.style,
			px      = 'px';

		sDiv.width  = sDiv.height = mValue + px;
		sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
		sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;
		
		addDiv.classList.add('pulse');
		this.appendChild(addDiv);
		setTimeout(()=>{addDiv.remove()},500)
	};


});

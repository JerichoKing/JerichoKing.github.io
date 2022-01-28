"use strict"

$(document).ready(function(){

	$(window).scroll(() => {
		let scrollDistance = $(window).scrollTop();

		$("#me, #skill, #case, #calculate, #feed, #contact").each((i, el) => {

			if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
				$("nav a").each((i, el) => {
					if ($(el).hasClass("active")){
						$(el).removeClass("active");
					}
				});
				$('nav li:eq('+ i +')').find('a').addClass('active');
			}
		});
	}); 
});

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
}); /*Popup*/

function explode(){
$(document).ready(function() {
  $('#exampleModal').modal('show');
});
}
setTimeout(explode, 600000); /*Появление модального окна через 1 минуту (кнопка в блоке расчета стоимости)*/


$(document).ready(function() {
let options = {threshold: [1]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.el-animate, .el-animate1, .el-animate2, .el-animate3, .el-animate4');
	elements.each((i, el) => {
		observer.observe(el);
	});
});
function onEntry(entry){
	entry.forEach(change =>{
		if(change.isIntersecting){
			change.target.classList.add('show-animation');
		}
	});
}/*Анимация при скролле*/

$(document).ready(function() {
let options1 = {threshold: [0.5]};
let observer1 = new IntersectionObserver(onEntry1, options1);
let elements1 = $('.el-animate5');
	elements1.each((i, el) => {
		observer1.observe(el);
	});
});
function onEntry1(entry1){
	entry1.forEach(change1 =>{
		if(change1.isIntersecting){
			change1.target.src = change1.target.dataset.src;
		}
	});
}/*Анимация при скролле*/

$(document).ready(function(){
	var a = 0;
$(window).scroll(function() {
  var oTop = $('.countbar').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.el-animate').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
    });
    a = 1;
  }
});
})/*Прокрутка чисел при скролле*/

$('.site').click(function (){
	let newValue = $('#list1').val();
	$(this).attr("data-target1", newValue);
});
$('.dsn').click(function(){
	let newValue = $('#list2').val();
	$(this).attr("data-target2", newValue);
});
$('.adapt').click(function(){
	let newValue = $('#list3').val();
	$(this).attr("data-target3", newValue);
});

let cost = [
	[5000, 7000, 10000],
	[2000, 7000, 8000],
	[0, 15000],
];
let costOfType = cost[0][$('data-target1').val()],
	costOfDsn = cost[1][$('data-target2').val()],
	costOfAdapt = cost[2][$('data-target3').val()];
let totalCost = costOfType + costOfDsn + costOfAdapt;
$('#price').text(totalCost);

let deadline = [
	[3, 5, 7],
	[3, 7, 8],
	[0, 10],
];
let dateForType = deadline[0][$('data-target1').val()],
	dateForDsn = deadline[1][$('data-target2').val()],
	dateForAdapt = deadline[2][$('data-target3').val()];
let totalDate = dateForType + dateForDsn + dateForAdapt;
$('#ddln').text(totalDate);


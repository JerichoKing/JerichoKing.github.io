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
setTimeout(explode, 60000); /*Появление модального окна через 1 минуту (кнопка в блоке расчета стоимости)*/


$(document).ready(function() {
let options = {threshold: [1]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.el-animate, .el-animate1, .el-animate2, .el-animate3, .el-animate4, .el-animate5');
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
	$(this).attr("data-target1", $('#list1').val());
});
$('.dsn').click(function(){
	$(this).attr("data-target2", $('#list2').val());
});
$('.adapt').click(function(){
	$(this).attr("data-target3", $('#list3').val());
});

$('select.site, select.dsn, select.adapt').change(function(){
let cost = [
	[5000, 7000, 10000],
	[2000, 7000, 8000],
	[0, 15000],
];

let deadline = [
	[3, 5, 7],
	[3, 7, 8],
	[0, 10],
];


let costOfType = cost[0][$('.site option:selected').attr('data-target1')],
	costOfDsn = cost[1][$('.dsn option:selected').attr('data-target2')],
	costOfAdapt = cost[2][$('.adapt option:selected').attr('data-target3')];

let dateForType = deadline[0][$('.site option:selected').attr('data-target1')],
	dateForDsn = deadline[1][$('.dsn option:selected').attr('data-target2')],
	dateForAdapt = deadline[2][$('.adapt option:selected').attr('data-target3')];

let totalDate = dateForType + dateForDsn + dateForAdapt;
let totalCost = costOfType + costOfDsn + costOfAdapt;

$('#price').text(totalCost);
$('#ddln').text(totalDate);
});
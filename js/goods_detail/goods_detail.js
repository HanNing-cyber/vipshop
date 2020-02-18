$(document).ready(function () {
	/* --------点击缩略图切换显示的图片------------ */
	$('.choiceImg .choice').on('click', function () {
		var index = $(this).index();
		$('.bigImg img').attr('src','./img/goods_detail/show_big_0' + (index + 1) + '.jpg')
	});

	/* -----------------分享---------------------- */
	$('.exhibition .inf .commodity_share').on('mouseenter', function () {
		$(this).css('background-color','#ffffff');
		$(this).children('.share_box').addClass('active');
		$(this).children('.share_pull').css('display','inline-block');
	});
	$('.exhibition .inf .commodity_share').on('mouseleave', function () {
		$(this).css('background-color','#fafafa');
		$(this).children('.share_box').removeClass('active');
		$(this).children('.share_pull').css('display','none');
	});
	/* --------------------倒计时---------------------*/
	//获取当前时间
	var now = new Date();
	//设置结束时间
	var deadline = 10;
	//获取要显示的区域
	var $Hour = $('.shopping_count_down .hours');
	var $Min = $('.shopping_count_down .mins');
	var $Sec = $('.shopping_count_down .sec');
	setInterval(function() {
		const ten = new Date();
		if (new Date(now).getHours() > deadline) {
			ten.setDate(new Date(now).getDate() + 1);
		}
		ten.setHours(deadline);
		ten.setMinutes(0);
		ten.setSeconds(0);
		const interval = Math.ceil(ten.valueOf() - new Date(now).valueOf()) / 1000;
		const hour = Math.floor(interval / 3600);
		const minutes = Math.floor((interval % 3600) / 60);
		const second = Math.floor(interval % 60);
		now = Date.now();
		//判断
		function fix(x) {
			if (x < 10) {
				return "0" + x;
			} else {
				return x;
			}
		}
		//放入显示的数字
		$Hour.text(fix(hour));
		$Min.text(fix(minutes));
		$Sec.text(fix(second));
	});
});
/* DOM加载完毕才能执行 */
$(document).ready(function() {
	/* -------------右侧固定栏------------ */
	/* 用户中心 */
	$('.scrollBar .user').on('mouseenter', function() {
		$('.scrollBar .user_icon').addClass('active');
		$('.scrollBar .user_box').stop(true).animate({
			'left': '-247px'
		});
	});
	$('.scrollBar .user').on('mouseleave', function() {
		$('.scrollBar .user_icon').removeClass('active');
		$('.scrollBar .user_box').stop(true).animate({
			'left': '40px'
		});
	});
	/* 我的订单  我的唯品币 触摸 */
	$('.scrollBar .user_box .link_item').eq(0).on('mouseenter', function() {
		$(this).find('img').attr('src', 'img/index/order_%23df147f.png');
		$(this).find('span').css('color', '#df147f');
	});
	$('.scrollBar .user_box .link_item').eq(0).on('mouseleave', function() {
		$(this).find('img').attr('src', 'img/index/order_%23d9d9d9.png');
		$(this).find('span').css('color', '#666');
	});
	$('.scrollBar .user_box .link_item').eq(1).on('mouseenter', function() {
		$(this).find('img').attr('src', 'img/index/rmb_%23df147f.png');
		$(this).find('span').css('color', '#df147f');
	});
	$('.scrollBar .user_box .link_item').eq(1).on('mouseleave', function() {
		$(this).find('img').attr('src', 'img/index/rmb_%23d9d9d9.png');
		$(this).find('span').css('color', '#666');
	});
	/* 关闭 */
	$('.scrollBar .user_box b ').on('click', function() {
		$('.scrollBar .user_icon').removeClass('active');
		$('.scrollBar .user_box').stop(true).animate({
			'left': '40px'
		});
	});
	/* 购物袋 */
	$('.scrollBar .shoppingCart .shoppingCart_icon').on('click', function() {
		var isClick = $('.scrollBar .shoppingCart_box').hasClass('active');
		if (!isClick) {
			$('.scrollBar .shoppingCart_box').stop(true).animate({
				'left': '-247px'
			});
			$('.scrollBar .shoppingCart_box').addClass('active');
		} else {
			$('.scrollBar .shoppingCart_box').stop(true).animate({
				'left': '40px'
			});
			$('.scrollBar .shoppingCart_box').removeClass('active');
		}
	});
	/* 关闭 */
	$('.scrollBar .shoppingCart_box b ').on('click', function() {
		$('.scrollBar .shoppingCart_box').stop(true).animate({
			'left': '40px'
		});
		$('.scrollBar .shoppingCart_box').removeClass('active');
	});
	/* 其他菜单弹出 */
	$('.scrollBar .unify_item').on('mouseenter', function() {
		$(this).children('.unify_icon').addClass('active');
		$(this).children('.unify_box').stop(true).animate({
			'left': '-122px'
		}, 200)
	});
	$('.scrollBar .unify_item').on('mouseleave', function() {
		$(this).children('.unify_icon').removeClass('active');
		$(this).children('.unify_box').stop(true).animate({
			'left': '0'
		}, 200)
	});
	/* 返回顶部 */
	$('.scrollBar .backTop .backTop_icon').click(function() {
		$('html, body').animate({
			scrollTop: 0
		});
	});
	/* 唯品快抢  动态变化 */
	function rotate() {
		var isShow = $('.quickly .quickly_show .list_1').is(':visible');
		if (isShow) {
			$('.quickly .quickly_show .list_1').hide();
			$('.quickly .quickly_show .list_2').show();
		} else {
			$('.quickly .quickly_show .list_2').hide();
			$('.quickly .quickly_show .list_1').show();
		}
	};
	rotate();
	var timer = setInterval(function() {
		rotate();
	}, 3000);
	// /* --------------------倒计时---------------------*/
	var result = "";
	//获取当前时间
	var now = new Date();
	//设置结束时间
	var deadline = 10;
	//获取要显示的区域
	var $Hour = $('.handpick .count_down .hours');
	var $Min = $('.handpick .count_down .minutes');
	var $Sec = $('.handpick .count_down .seconds');
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
	/* 楼层跳转 */
	$('.floor_nav li').click(function() {
		//获取索引
		var i = $(this).index();
		//获取楼层的scrollTop
		var top = $('.floor_index').eq(i).offset().top;
		$('html, body').stop(true).animate({
			scrollTop: top
		});
		//根据索引进行左右联动
		$('.floor_nav li').removeClass('active');
		$(this).addClass('active');
	});
	//默认显示第一个
	$('.floor_nav li').eq(0).addClass('active');
	/* 楼层导航跟随 */
	var floor_top = $('.update_title').offset().top;
	$(window).scroll(function() {
		var menu = $('.floor_nav');
		//获取scrollTop == 滚动的距离
		var scrollTop = $(this).scrollTop();
		// //临界值
		if (scrollTop > floor_top) {
			$('.floor_nav').addClass('fixed');
		} else {
			$('.floor_nav li').removeClass('active');
			$('.floor_nav li').eq(0).addClass('active');
			$('.floor_nav').removeClass('fixed');
		}
	});

	/* 遮罩 */
	$('.update .item_show').on('mouseenter', function() {
		$(this).children('.item_collection').animate({
			'opacity': '1'
		});
		$(this).children('.item_mask').css({
			'background-color': 'rgba(255, 255, 255, 0.3)'
		});
	});
	$('.update .item_show').on('mouseleave', function() {
		$(this).children('.item_collection').animate({
			'opacity': '0'
		});
		$(this).children('.item_mask').css({
			'background-color': 'rgba(255, 255, 255, 0)'
		});
	});
});

/* DOM加载完毕才能执行 */
$(document).ready(function () {
	/* 城市选择 */
	$('.top_nav .location .show_city').on('click', function () {
		//判断是否展开
		var isShow = $('.top_nav .city_select').is(':visible');
		if(!isShow){
			//展开选择
			$('.top_nav .location').addClass('selected');
			$('.top_nav .city_select').css('display', 'inline-block');
			return;
		}else{
			//关闭选择
			$('.top_nav .location').removeClass('selected');
			$('.top_nav .city_select').css('display', 'none');
			return;
		}
	});
	$('.top_nav .location .del').on('click', function () {
		//关闭选择
		$('.top_nav .location').removeClass('selected');
		$('.top_nav .city_select').css('display', 'none');
	});
});

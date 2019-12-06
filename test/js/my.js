/*
* @Author: Administrator
* @Date:   2019-08-05 09:22:01
* @Last Modified by:   Administrator
* @Last Modified time: 2019-08-05 09:56:24
*/
//第一步：先让banner自己跑起来
$(function(){
		var n=0;
		var timer;
		function aa(){
			clearInterval(timer)
			timer=setInterval(function(){
				n++;
				if(n>4){n=0}
				jQuery('.banner .pic li').eq(n).fadeIn(500).siblings('li').hide()
				jQuery('.banner .dot li').eq(n).addClass('current').siblings('li').removeClass('current')
			},1000)
		}
		aa()
		//banner  移入移出事件
		jQuery('.banner').hover(function() {
			/* Stuff to do when the mouse enters the element */
			clearInterval(timer)
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			aa()
		});
		// 给左边按钮一个点击事件，每点击一次n的数值增加1
		jQuery('.banner .left').click(function(event) {
			n++;
			if(n>4){n=0}
			jQuery('.banner .pic li').eq(n).fadeIn(500).siblings('li').hide()
			jQuery('.banner .dot li').eq(n).addClass('current').siblings('li').removeClass('current')

		});
		//右边按钮一个点击事件，每点击一次n的数值减1
		jQuery('.banner .right').click(function(event) {
			n--;
			if(n<0){n=4}
			jQuery('.banner .pic li').eq(n).fadeIn(500).siblings('li').hide()
			jQuery('.banner .dot li').eq(n).addClass('current').siblings('li').removeClass('current')

		});
		//小缩略图事件
		//先找事件源： 每一个小缩略图
		jQuery('.banner .dot li').click(function(event) {
			n=jQuery(this).index()
			jQuery(this).addClass('current').siblings('li').removeClass('current');
			jQuery('.banner .pic li').eq(n).fadeIn(500).siblings('li').hide()
		});

})
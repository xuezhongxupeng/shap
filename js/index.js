// 右上角用户管理
$(function(){
	$('.hide_user').hide();

	$('#user').click(function() {
		/* Act on the event */
		$(".hide_user").slideUp(); 
		$('.hide_user').show();
	});
})
$(function(){
	$('.hide_share').hide();
	$('#share').click(function() {
		/* Act on the event */
		$(".hide_share").slideUp(); 
		$('.hide_share').show();
		$('.hide_user').hide();
	});
})
$(function(){
	$('.hide_share').hide();
	$('#share_bottom').click(function() {
		/* Act on the event */
		$(".hide_share").slideUp(); 
		$('.hide_share').show();
		$('.hide_user').hide();
	});
	$('.content').click(function(event) {
		/* Act on the event */		
		$('.hide_share').hide();	
		$('.hide_user').hide();
	});
})
// 地址选择
$(function(){
	$('.address_choose').hide();
	$('.shade_orderHave').hide();
	$('#reChoose').click(function() {
		/* Act on the event */
		$('.shade_orderHave').show(); 
		$('.address_choose').show();
	});
})
$(function(){
	// 初始
	$('.foot_first').css('background','#ffffff');
	$('.foot_first').css('color','#e90000');
	$(".foot_first").find('img').attr("src","images/tab_icon_home_sel.png");

	$(".foot_first").click(function(event) {
		$('.foot_first').css('background','#ffffff');
 		$('.foot_first').css('color','#e90000');
 		$(".foot_first").find('img').attr("src","images/tab_icon_home_sel.png");

 		$('.foot_second').css('background','#F5F5F5');
 		$(".foot_second").find('img').attr("src","images/tab_icon_list_nor.png"); 		
 		$('.foot_second').css('color','#aaa');

 		$(".foot_third").find('img').attr("src","images/tab_icon_shop_nor.png");
 		$('.foot_third').css('background','#F5F5F5');
 		$('.foot_third').css('color','#aaa');
	});

	$(".foot_second").click(function(event) {
 		$('.foot_second').css('background','#ffffff');
 		$('.foot_second').css('color','#e90000');
 		$(".foot_second").find('img').attr("src","images/tab_icon_list_sel.png");

 		$('.foot_first').css('background','#F5F5F5');
 		$(".foot_first").find('img').attr("src","images/tab_icon_home_nor.png"); 		
 		$('.foot_first').css('color','#aaa');
 		
 		$(".foot_third").find('img').attr("src","images/tab_icon_shop_nor.png");
 		$('.foot_third').css('background','#F5F5F5');
 		$('.foot_third').css('color','#aaa');
	});

	$(".foot_third").click(function(event) {
		$('.foot_third').css('background','#ffffff');
 		$('.foot_third').css('color','#e90000');
 		$(".foot_third").find('img').attr("src","images/tab_icon_shop_sel.png");

 		$('.foot_second').css('background','#F5F5F5');
 		$(".foot_second").find('img').attr("src","images/tab_icon_list_nor.png"); 		
 		$('.foot_second').css('color','#aaa');

 		$(".foot_first").find('img').attr("src","images/tab_icon_home_nor.png");
 		$('.foot_first').css('background','#F5F5F5');
 		$('.foot_first').css('color','#aaa');
	});
})
// 轮播图
$(function(){	
	$('.pics li:nth-child(1)').show();
	var _currentindex=0;
	var _preindex=-1;
	var _donghua;
	var _next;
	$('.nums>li:first').css('backgroundColor','#aaa');
	_donghua=setInterval(switchpic,3000);
	function switchpic(){
		_next=(_currentindex+1)%5;
		changepic();
	}
	function changepic(){
		$('.pics li').eq(_currentindex).fadeOut(500);
		$('.pics li').eq(_next).fadeIn(500);
		$('.nums>li').eq(_currentindex).css('backgroundColor','#ddd');
		$('.nums>li').eq(_next).css('backgroundColor','#aaa');
		_currentindex=_next;
	}
	$('.nums>li').hover(function(){
		clearInterval(_donghua);
		var _index=$('.nums>li').index($(this));
			_next=_index;
			changepic();
			_currentindex=_next;
	},function(){
		_donghua=setInterval(switchpic,3000);
	})
	$('.leftarrow').click(function(){
		_next=(_currentindex-1)%5;
		changepic();
	});
	$('.rightarrow').click(function(){
		_next=(_currentindex+1)%5;
		changepic();
	});
	$('.leftarrow,.rightarrow').hover(function() {
		clearInterval(_donghua);
	}, function() {
		_donghua=setInterval(switchpic,3000);
	});	
})
$(function(){
	$("#AllCheck").click(function() {
	    if ($(this).prop("checked") == true) { //如果全选按钮被选中
	      $(".goods-check").prop('checked', true); //所有按钮都被选中
	    } else {
	      $(".goods-check").prop('checked', false); //else所有按钮不全选
	    }
	});
	$(".minus").click(function() {
		var t = $(this).parent().find('.num');
		t.text(parseInt(t.text()) - 1);
		if (t.text() <= 1) {
			t.text(1);
		}
	});
	$(".plus").click(function() {
		var t = $(this).parent().find('.num');
		t.text(parseInt(t.text()) + 1);
		if (t.text() <= 1) {
			t.text(1);
		}
	});
})
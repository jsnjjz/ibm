$(function (){
	//nav 下划线
	var timerNav = null;
	$(".strip").hide();
	$(".strip-h").hide();
	$(".strip-l").hide();
	$(".strip-m").hide();
	//移入部分
	$("#logo").mouseenter(function (){
		$(".strip-h").slideDown(200);
	});
	$(".menu").mouseenter(function (){
		$(".strip-m").slideDown(200);
		$(this).css({"color":"#4178be"});
	});
	$(".login").mouseenter(function (){
		clearInterval(timerNav);
		$(".strip-l").slideDown(200);
		$(this).css({"color":"#4178be"});
		$(".login-sub").css({"display":"block"});
	});
	$(".login-sub").mouseenter(function (){
		clearInterval(timerNav);
	})
	$(".header li").mouseenter(function (){
		$(this).find(".strip").slideDown(200);
		$(this).find("a").css({"color":"#4178be"});
	});
	
	//移出部分
	$("#logo").mouseleave(function (){
		$(".strip-h").slideUp(200);
	});
	$(".menu").mouseleave(function (){
		$(".strip-m").slideUp(200);
		$(this).css({"color":"#363636"});
	});
	$(".login").mouseleave(function (){
		$(".strip-l").slideUp(200);
		$(this).css({"color":"#363636"});
		timerNav = setInterval(function (){
			$(".login-sub").css({"display":"none"});
		},500);
	});
	$(".login-sub").mouseleave(function (){
		timerNav = setInterval(function(){
			$(".login-sub").css({"display":"none"});
		},200)
	});
	$(".header li").mouseleave(function (){
		$(this).find(".strip").slideUp(200);
		$(this).find("a").css({"color":"#363636"});
		});
	
	//search 搜索框
	$(".search-icon").mouseenter(function (ev){
		ev.stopPropagation();
		$(this).css({"box-shadow": "0 0 5px #4178be","color":"#4178be"})
	});
	$(".nav-search").mouseenter(function (){
		$(this).css({"box-shadow": "0 0 5px #4178be"});  //placeholder="Search"颜色修改？？
	});
	$(".nav-search").mouseleave(function (){
		$(this).css({"box-shadow": "none"})
	});
	$(".search-icon").mouseleave(function (){
		$(this).css({"box-shadow": "none","color":"#323232"})
	});
	
	//下拉菜单部分
	var timerProdu = null;
	$(".products-sub").hide();
	$(".products").mouseenter(function (){
		clearInterval(timerProdu);
		$(".products-sub").slideDown();
	});
	$(".products").mouseleave(function (){
		timerProdu = setInterval(function (){
			$(".products-sub").slideUp(200);
		},300)
	});
	$(".products-sub").mouseenter(function (){
		clearInterval(timerProdu);
	});
	$(".products-sub").mouseleave(function (){
		timerProdu = setInterval(function (){
			$(".products-sub").slideUp(200);
		},300)
	})
	$(".pull-up").click(function (){
		$(".products-sub").slideUp(200);
		$(this).css({"color":"#959595"});
	});
	$(".pull-up").mouseenter(function (){
		$(this).css({"color":"#264a60"});
	});
	
	//products二级菜单
	$("analytics-sub").hide();
	$(".explore-sub li").mouseenter(function (){
		var index = $(this).index();
//		console.log(index);
		$(".wrap-menu > div").eq(index).show().siblings().hide();
	})
	// 导航右侧 菜单
	$(".close").click(function (){
		$(".nav-menu").css({"display":"none"}).stop().animate({"right":"-380px"},200,function(){
			$(".shade").hide(0);
			 $(document.body).css({"overflow-x":"auto","overflow-y":"auto"});
		});	
	})
	$(".shade").click(function (){
		$(".nav-menu").css({"display":"none"}).stop().animate({"right":"-380px"},200,function(){
			$(".shade").hide(0);
			 $(document.body).css({"overflow-x":"auto","overflow-y":"auto"});
		});
	})
	$(".menu").click(function (){
		$(".nav-menu").css({"display":"block"}).stop().animate({"right":"0"});
		$(".shade").show(0);
		$(document.body).css({"overflow-x":"hidden","overflow-y":"hidden"});
	})
	
			var sta = 0;
	$(".fir-dt").click(function (){
		if(sta == 0){
			$(this).nextUntil("dt").slideUp(200,function(){
				$(".fir-dt").find(".unfold").css({"display":"inline-block"});
			});
		   sta = 1;
		}else
			{
				$(this).nextUntil("dt").slideDown(200,function(){
					$(".fir-dt").find(".unfold").css({"display":"none"});
					$(".fir-dt").find(".pack-up").css({"display":"inline-block"});
						});
				 sta = 0;
			}
	})
	
	  var sta1 = 0;
		$(".sec-dt").click(function (){
		if(sta1 == 0){
			$(this).nextUntil("dt").slideUp(200,function(){
				$(".sec-dt").find(".unfold").css({"display":"inline-block"});
			});
		   sta1 = 1;
		}else
			{
				$(this).nextUntil("dt").slideDown(200,function(){
					$(".sec-dt").find(".unfold").css({"display":"none"});
					$(".sec-dt").find(".pack-up").css({"display":"inline-block"});
						});
				 sta1 = 0;
			}
	})

	
	var sta2 = 0;
		$(".thi-dt").click(function (){
		if(sta2 == 0){
			$(this).nextUntil("dt").slideUp(200,function(){
				$(".thi-dt").find(".unfold").css({"display":"inline-block"});
			});
		   sta2 = 1;
		}else
			{
				$(this).nextUntil("dt").slideDown(200,function(){
					$(".thi-dt").find(".unfold").css({"display":"none"});
					$(".thi-dt").find(".pack-up").css({"display":"inline-block"});
						});
				 sta2 = 0;
			}
	})
	
	// business 部分
	$(".pub-css a").hover(function (){
		$(this).find("h6 span").fadeIn();
	},function (){
		$(this).find("h6 span").fadeOut();
	})
	
	//  header 导航栏
		
	 var p = 0;
	 var t = 0;
//		var l = 0;
	
	var a = $(this).scrollTop();

	$(window).scroll(function(e){  
		console.log(a);
		// var now = $('body').offset().top();
//		var timerS = null;
		p = $(this).scrollTop();  

		
		//l = $(this).scrollTop(); 

		 //delay();
			//setTimeout;
		
		if(t >= 300){//下滚  
//				$(".header").stop().slideUp(10);
				$(".header").removeClass('fadeIn').addClass('fadeUp');
			// console.log(t);
		} 
		else {//上滚  
			
				$(".header").removeClass('fadeUp').addClass('fadeIn');
		}  
		
		setTimeout(function(){t = p;},0);         
	});  
	
	
	setInterval(function (){

	},1000)
	
	
	
	
	

	
		//  back to top
	$(window).scroll(function (){
		if($(this).scrollTop()>300){
			$(".backToTop").fadeIn(200);
		}else{
			$(".backToTop").fadeOut(200);
		}
})
	$(".backToTop").click(function (){
		$("html,body").animate({scrollTop:"0"},1000);
	});
	
	
})


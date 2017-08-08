//获取屏幕宽度,高度
;
var gW = $(window).width();
var gH = $(window).height();
var vW = gW / 100;
var vH = gH / 100;

    var id = '0'; //id != '0' 表示点分享后链接回来的，存在下面的  global_pic
    var global_link = '127.0.0.1';
    var wx_share_url = id != '0' ? global_link + id : self.location.href;
    var share_text = '不得不服！穿越时空，看看你的前世是谁？';
    var global_pic = '';
    var global_type = '3';


/******************************************
 初始化变量
******************************************/
var testTesult = 4; //测试结果，默认为1
var ispic = false; //有图片
var crop = ""; //生成图片
var gClick = false; //正在点击

// 图片合成
var hecheng_data = ['../images/pc_c1.jpg','', '../images/pc_c1.png',  ]
var haibao = [];

//答案
var answerJson = { "a": 0, "b": 0, "c": 0, "d": 0 };


var inter_Music;
var gDeg = 0;
var isProcessing = false;

var result=1;


//读书manits

$(".p2 .box1").on("click",function(){
    $(".p2").fadeOut();
    swiperTo(0);
    console.log('ssssssssssss')
});
$(".p2 .box2").on("click",function(){
    $(".p2").fadeOut();
    swiperTo(1);
});
$(".p2 .box3").on("click",function(){
    $(".p2").fadeOut();
    swiperTo(2);
});
$(".p2 .box4").on("click",function(){
    $(".p2").fadeOut();
    swiperTo(3);
});
$(".p2 .box5").on("click",function(){
    $(".p2").fadeOut();
    swiperTo(4);
});
// $(".button1").on("click",function(){
//     $(".swiper-container").hide();
//     $(".p2").show();
// });
// $(".button2").on("click",function(){
//     $(".swiper-container").hide();
//     $(".p4").show();
// });
// 输入姓名
// $(".p4 .button").on("click",function(){
//     if(!$(".p4 .inp").val()){
//          alert("请输入您的名字！");  
//     }else{
//         $(".p4").fadeOut();
//         $(".p6").fadeIn();
//         $.get('getBook',{name:$(".p4 .inp").val()},function (data) {
//             console.log(data);
//             $('.p6 .tu').attr('src','img/'+data.bookImg+'.png');
//         });
//     }
// });
// // 再来一本
// $(".p6 .button3").on("click",function(){
//     $.get('getBook',{name:$(".p4 .inp").val()},function (data) {
//         console.log(data);
//         $('.p6 .tu').attr('src','img/'+data.bookImg+'.png');
//     });
// })
// // 分享
// $(".p6 .button4").on("click",function(){
//     $('.shar').show();
// })
// $(".shar .shar2").on("click",function(){
//     $('.shar').fadeOut();
// })

// swiper
var swiper=null;
function swiperTo(id) {
    if (swiper) {
        swiper.slideTo(id, 1000, false);
        $('.swiper-container').show();
    } else {
        $('.swiper-container').show();
        swiper = new Swiper('.swiper-container', {
            // zoom: true
            direction : 'horizontal',
            initialSlide :id,
            // onInit: function(swiper){  
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            // }
            onSlideChangeEnd: function(swiper){
                $(".p3,.p3_1,.p3_2,.p3_3,.p3_4,.p3_5").removeClass("hide");
                // $('.swiper-slide').eq(swiper.activeIndex).find('.ani').show();
            }
        })
    }
}

$(".button_p3_5").on("click",function(){
    $(".swiper-container").hide();
    $(".zahuodianbg").show();
    InitprogressBar();
});   

$(".button_p3_3").on("click",function(){
    $(".swiper-container").hide();
    $(".wukongzhuan").show();
    InitprogressBar();
});   

$(".button_p3_1").on("click",function(){
    $(".swiper-container").hide();
    $(".xiaowangzibg").show();
    InitprogressBar();
});

$(".button_p3").on("click",function(){
    $(".swiper-container").hide();
    $(".womensabg").show();
    InitprogressBar();
});

$(".button_p3_2").on("click",function(){
    $(".swiper-container").hide();
    $(".oldsea").show();
    InitprogressBar();
});

$(".corss_bt_zhd").on("click",function(){
    var winHeight = $(window).height()
	var curHeight = $(document).height();
	var scrollHeight = $(document).scrollTop()
	var RatNum = ((winHeight+scrollHeight)/curHeight).toFixed(2)
	if (RatNum <0.5){
		 testTesult = "10";
	}else{
		 testTesult = "11"
	}
	$(".zahuodianbg").hide();
	scrollTo(0,0);
	goPage3();


});

$(".corss_bt_wk").on("click",function(){
    var winHeight = $(window).height()
	var curHeight = $(document).height();
	var scrollHeight = $(document).scrollTop()
	var RatNum = ((winHeight+scrollHeight)/curHeight).toFixed(2)
	if (RatNum <0.5){
		 testTesult = "30";
	}else{
		 testTesult = "31"
	}
	$(".wukongzhuan").hide();
	scrollTo(0,0);
	goPage3();
});

$(".corss_bt_xwz").on("click",function(){
    var winHeight = $(window).height()
	var curHeight = $(document).height();
	var scrollHeight = $(document).scrollTop()
	var RatNum = ((winHeight+scrollHeight)/curHeight).toFixed(2)
	if (RatNum <0.5){
		 testTesult = "50";
	}else{
		 testTesult = "51"
	}
	$(".xiaowangzibg").hide();
	scrollTo(0,0);
	goPage3();
});


$(".corss_bt_os").on("click",function(){
    var winHeight = $(window).height()
	var curHeight = $(document).height();
	var scrollHeight = $(document).scrollTop()
	var RatNum = ((winHeight+scrollHeight)/curHeight).toFixed(2)
	if (RatNum <0.5){
		testTesult = "20";
	}else{
		 testTesult = "21"
	}
	$(".oldsea").hide();
	scrollTo(0,0);
	goPage3();
});


$(".corss_bt_wms").on("click",function(){
    var winHeight = $(window).height()
	var curHeight = $(document).height();
	var scrollHeight = $(document).scrollTop()
	var RatNum = ((winHeight+scrollHeight)/curHeight).toFixed(2)
	if (RatNum <0.5){
		 testTesult = "40";
	}else{
		 testTesult = "41"
	}
	$(".womensabg").hide();
	scrollTo(0,0);
	goPage3();
});


function InitprogressBar(){
	var winHeight = $(window).height()
	var curHeight = $(document).height();
	var RatNum = (winHeight/curHeight).toFixed(2)
	var curRatNUm =(RatNum*0.61).toFixed(2)*100
	$(".rat_div").css('width',curRatNUm+'%');
	$(".num_div").css('margin-left',curRatNUm+6+'%');
	$(".num_div").html(parseInt(RatNum*100)+'%');
}



/******************************************
 初始化赋函数
******************************************/

(function() {

	
		//下一步事件   点击后 会跳转到合成图片的页面
	$(".cur_home").click(function(){
		//testTesult=result+"0";
		goPage3();
		
	});
	
	$(".p4_btn_1").click(function(){
		    $(".page").hide();
			$(".p2").show();
	});
	
	$(".p4_btn_2").click(function(){
		$(".page").hide();
		$(".page5").show();
	});
	
	var phoneRex=/^1(3|4|5|7|8)\d{9}$/;
	
	$(".p5_btn").click(function(){
		var name=$("#name").val();
		var phone=$("#phone").val();
		
		if(!name){
			alert("名字不能为空");
			return;
		}
		
		if(!phoneRex.test(phone)){
			alert("请输入正确的电话号码");
			return;
		}
		
		$.ajax({
			url:"http://poly.togetherdigit.com/save.php",
			data:{
				"name":name,
				 "phone":phone
				 },
			
			type:"post",
			success:function(data){
				alert(data);
			}
		})
		
		$(".page").hide();
		$(".page6").show();
	});
	

    $("#P1_c").click(function(event) {
        animatePage($("#PM0"), 13, function() {
            goPage2();
            $("#PM0").hide();
        });
        play_music();
        _hmt.push(['_trackEvent', 'page1', 'click', 'literature'])
    });

    //过度动画
    $(".q_a li").click(function(event) {
        var q = $(this).parents(".q_a").attr("data-q");
        var i = $(this).index();
        var t = $(this).text();
        
        _hmt.push(['_trackEvent', "q"+q+"a"+(i+1), 'click', 'literature'])

        answerJson[t] = parseInt(answerJson[t] + 1)
        $(this).parents(".q_a").addClass('q' + q + '_a_' + (i + 1))
        if (q == "1") {
            setTimeout(function() {
                animatePage($("#PM1"), 13, function() {
                    $(".q1").removeClass('show');
                    $(".q2").addClass('show');
                    $("#PM1").hide();
                })
            }, 500)
        }
        if (q == "2") {
            setTimeout(function() {
                animatePage($("#PM2"), 13, function() {
                    $(".q2").removeClass('show');
                    $(".q3").addClass('show');
                    $("#PM2").hide();
                })
            }, 500)
        }
        if (q == "3") {
            if (answerJson["a"] >= 2) {
                testTesult = 2
            } else if (answerJson["b"] >= 2) {
                testTesult = 1
            } else if (answerJson["c"] >= 2) {
                testTesult = 4
            } else if (answerJson["d"] >= 2) {
                testTesult = 3
            } else {
                testTesult = Math.ceil(Math.random() * 4)
            }
            setTimeout("goPage3()", 500)
        }
    });

	
     $("#Save").click(function() { //上传制作
        _hmt.push(['_trackEvent', "Draw", 'click', 'literature'])
        if (!ispic) {
            alert('请先上传照片喔～');
            return;
        }
        if (gClick) {
            alert('生成中...');
            return;
        }
        gClick = true;
        drawTX(function() {
                draw(function() {
                    var sImg = haibao[0];
                    // console.log(sImg)
                    $("#Hecheng,#hechengImg").attr("src", sImg);
                    goPage4();
                    var url = 'index.php?mod=data&action=uploadE';
                    var param = {};
                    param.data = sImg;
                    gClick = false;
                    _get(url, param, function(jsondata) {
                        if (jsondata.error != 0) {
                            return;
                        } else {
                            var pic = jsondata.img;
                            //设置分享链接
                            submit(pic);
                        }
                    });
                })
            })
            //上传图片
    });
})()

function animatePage(ele, n, callBack) {
    ele.show();
    var i = 0;
    var inter = setInterval(function() {
        i++;
        var x = 0 - i * gW;
        ele.css("background-position", x + "px 0px")
        if (i == n) {
            clearInterval(inter);
            callBack();
        }
    }, 100)
}




	
// 朋友圈
function goPage1() {
    $(".page1").show();
    $(".page1").show();
    // setTimeout('$(".p1_1").transition({scale:1,y:0},1000,"linear")', 200)
    // setTimeout('$(".p1_3").transition({scale:0.55},500,"linear")', 400)
    // setTimeout('$(".p1_2").transition({scale:1},500)', 800)
    // setTimeout('$(".page1 .inp").transition({y:0},500)', 1000)
    // setTimeout('$(".page1 .btn").transition({y:0},500)', 1200)
}


// 问题层
function goPage2() {
    $(".page1").hide()
    $(".page2").show()
   // audioAutoPlay()
    
}


// 画布层
function goPage3() {
     $(".page").hide();
    $(".page3").show();
	console.log(testTesult+"====");
    $(".canvasBox").addClass('c' + testTesult)
    $("#ImgMove").addClass("canvas_c" + testTesult)
    hecheng_data[2] = 'images/pc_c' + testTesult + '.png';
    hecheng_data[0] = 'images/pc_c' + testTesult + '.jpg';
    global_type = testTesult;
    $('.page3').on('touchmove', function(event) {
        event.preventDefault();
    });
}

// 合成层
function goPage4() {

    $(".page4").addClass("page4_" + global_type);
    $(".page").hide();
    $(".page4").show();
    $(".p4_cover").height(gH * 100 / 1040);

    if (id != 0) {
        $(".p4_btn").addClass('p4_btn_0')
    }
}



/******************************************
 图片上传
******************************************/

var imgUpload = {} //
var fangxiang = null
var file = document.getElementById("file"); //文件域名对象
file.addEventListener("change", function() {
    // if (!/image\/\w+/.test(file.files[0].type)) {
    //     alert("仅支持图片");
    //     return false;
    // }
    selectFileImage(file); //图片缩放与旋转 加了后拖动会有问题，缩放旋转正常，暂时去掉
})

//处理图片
function selectFileImage(fileObj) {
    var file = fileObj.files['0'];

    //图片方向角 added by lzk  
    var Orientation = null;
    var Orientation = 0;

    //获取照片方向角属性，用户旋转控制  
    EXIF.getData(file, function() {
        Orientation = EXIF.getTag(this, 'Orientation');
    });

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
        ispic = true;
        gPic = '';
        $("#HeadPic").html('<img src="' + e.target.result + '">');
        fangxiang = Orientation; //设定方向
        $("#mycontainer").show();
        $(".btn_Upload").addClass("btn_UploadAgain")
        hecheng_data[1] = e.target.result; //把头像写入数组   
        imgUpload.w = $("#HeadPic img").width();
        imgUpload.h = $("#HeadPic img").height();
        resetElement();
    };

}


// 图片合成
function draw(fn) {
    haibao = [];
    var c = document.createElement('canvas'),
        ctx = c.getContext('2d'),
        len = hecheng_data.length;
    c.width = 640;
    c.height = 1040;
    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = '#fff';
    ctx.fill();

    function drawing(n) {
        if (n < len) {
            var img = new Image;
            img.src = hecheng_data[n];
            //console.log(hecheng_data[n]);
            img.onload = function() {
                var t = 0; //在画布的高度
                var l = 0; //在画布的左边距离
                var w = 640; //640; //在画布的大小
                var h = 1040; //1040; //在画布的大小
                if (n == 3) { //logo
                    w = 228;
                    h = 53;
                    t = 0;
                    l = 0;
                    if (testTesult == 4) {
                        t = 0;
                        l = 640 - 228;
                    }
                }
                if (n == 4) {
                    w = 640;
                    h = 75;
                    t = 935
                    l = -10
                }
                if (n == 1) {
                    w = 185;
                    h = 185;
                    if (testTesult == "10") {
                        t = .322 * 1040 - w / 2;
                        l = .504 * 640   - w / 2;
                    }

                    if (testTesult == "11") {
                        t = .355 * 1040 - w / 2;
                        l = .492 * 640 - w / 2;
                    }

                    if (testTesult == "20") {
                        t = .342 * 1040 - w / 2;
                        l = .51 * 640 - w / 2;
                    }
                    if (testTesult == "21") {
                        t = .365 * 1040 - w / 2;
                        l = .493 * 640 - w / 2;
                    }
					 if (testTesult == "30") {
                        t = .369 * 1040 - w / 2;
                        l = .493 * 640 - w / 2;
                    }
					 if (testTesult == "31") {
                        t = .354 * 1040 - w / 2;
                        l = .493 * 640 - w / 2;
                    }
					if (testTesult == "40") {
                        t = .352 * 1040 - w / 2;
                        l = .493 * 640 - w / 2;
                    }
					if (testTesult == "41") {
                        t = .321 * 1040 - w / 2;
                        l = .499 * 640 - w / 2;
                    }
					if (testTesult == "50") {
                        t = .365 * 1040 - w / 2;
                        l = .493 * 640 - w / 2;
                    }
					if (testTesult == "51") {
                        t = .352 * 1040 - w / 2;
                        l = .493 * 640 - w / 2;
                    }
					
                }
                ctx.drawImage(img, l, t, w, h);
                drawing(n + 1); //递归
            }
        } else {
            //保存生成作品图片
            haibao.push(c.toDataURL("image/jpeg", 0.8));
            //alert(JSON.stringify(base64));
            fn();
        }
    }
    drawing(0);
}


// 先合成头像
function drawTX(fn) {
    var c = document.createElement('canvas'),
        ctx = c.getContext('2d'),
        len = hecheng_data.length;
    c.width = 185;
    c.height = 185;
    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = '#222';
    ctx.fill();
    var img = new Image;
    img.src = hecheng_data[1];

    img.onload = function() {
        var t = 0; //在画布的高度
        var l = 0; //在画布的左边距离
        var w = c.width; //640; //在画布的大小
        var h = img.height * w / img.width; //1028; //在画布的大小

        // alert(img.width)
        // alert(img.height)
        // alert(transform.scale);
        // alert(transform.angle)

        var deg = transform.angle
        var s = transform.scale
            //  alert("xO" + transform.translate.x+"yO" + transform.translate.y)
        var x = transform.translate.x * 320 / gW;
        var y = transform.translate.y * 320 / gW;


       // alert("x" + x + "y" + y + "s" + s + "fangxiang" + fangxiang)





        var top = t - w / 2 - (s - 1) * h / 2 + y;
        var left = l - w / 2 - (s - 1) * w / 2 + x;

        var tx = w / 2;
        var ty = w / 2

        if (fangxiang == 6) {
            deg = deg + 90
            h = c.width; //640; //在画布的大小;
            w = h * img.width / img.height; //1028; //在画布的大小
            top = 0 - h / 2 - (s - 1) * w / 2 - x;
            left = 0 - h / 2 - (s - 1) * h / 2 + y;
            ty = h / 2
        }

        if (fangxiang == 3) {
            deg = deg + 180;
            w = c.width; //640; //在画布的大小;
            h = img.height * w / img.width; //1028; //在画布的大小
            top = 0 - (h - w / 2) - (s - 1) * h / 2 - y;
            left = 0 - w / 2 - (s - 1) * w / 2 - x;
            ty = w / 2
        }
        if (fangxiang == 8) {
            deg = deg - 90

            deg = deg + 90
            h = c.width; //640; //在画布的大小;
            w = h * img.width / img.height; //1028; //在画布的大小

            top = 0 - h / 2 - (s - 1) * w / 2 + x;
            left = 0 - h / 2 - (s - 1) * h / 2 - y;
            ty = h / 2
        }

        // alert(deg);

        ctx.save(); //保存状态
        ctx.translate(tx, ty); //设置画布上的(0,0)位置，也就是旋转的中心点
        ctx.rotate(deg * Math.PI / 180);

        // alert(s)
        // l - w / 2-(s-1)*w/2+x*0.8
        // t - w / 2-(s-1)*w/2+y*0.8
        ctx.drawImage(img, left, top, w * s, h * s);
        ctx.restore(); //恢复状态
        // ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
        // ctx.fillRect(0, 0, 640, 1028);


        var data = ctx.getImageData(0, 0, w, h);

        var imgdata = ctx.getImageData(0, 0, c.width, c.height);
        var data = imgdata.data;　　　　　　　　　 /*灰度处理：求r，g，b的均值，并赋回给r，g，b*/
        var light = 50;
        for (var i = 0, n = data.length; i < n; i += 4) {
            data[i] = data[i] + light;
            data[i + 1] = data[i + 1] + light;
            data[i + 2] = data[i + 2] + light;
        }
        ctx.putImageData(imgdata, 0, 0);



        hecheng_data[1] = c.toDataURL("image/jpeg", 0.8)
        console.log(hecheng_data[1])
        fn();
        // console.log("sdfasdf");
        // gClick = false;
        // $(".debugImg").html('<img style="width:auto" src="' + c.toDataURL("image/jpeg", 0.8) + '">');
        // $(".debugImg").show();
        // $(".debugImg").click(function() {
        //     $(this).hide();
        // })
    }
}


function showShare() {
    $(".share").show();
}

function hideShare() {
    $(".share").hide();
}



/*头像移动操作*/
var el = document.querySelector("#mycontainer");
var el_img = document.querySelector("#HeadPic");

var reqAnimationFrame = (function() {
    return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

var START_X = Math.round((window.innerWidth - el.offsetWidth) / 2);
var START_Y = Math.round((window.innerHeight - el.offsetHeight) / 2);

START_X = 0;
START_Y = 0;

var ticking = false;
var transform; //图像效果
var timer;
var initAngle = 0; //旋转角度
var initScale = 1; //放大倍数

var mc = new Hammer.Manager(el); //用管理器  可以同时触发旋转 拖拽  移动
//var mc = new Hammer(el);        //旋转和移动互斥
/**
ev.srcEvent.type  touchstart  touchend touchmove
ev.deltaX  手势移动位移变量  
*/
mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
mc.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(mc.get('pan'));
mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan'), mc.get('rotate')]);
//结束时做一些处理
mc.on("hammer.input", function(ev) {
    if (ev.isFinal) {
        //console.log(START_X+"  "+transform.translate.x  +"   "+ev.deltaX);
        START_X = transform.translate.x;
        START_Y = transform.translate.y;
    }
});
mc.on("panstart panmove", onPan);
mc.on("rotatestart rotatemove rotateend", onRotate);
mc.on("pinchstart pinchmove", onPinch);
/**
第二次进入拖拽时  delta位移重置
移动时 初始位置startxy不动。delta增加
*/
function onPan(ev) {
    if (!ev.isFinal) {
        el.className = '';
        transform.translate = {
            x: START_X + ev.deltaX,
            y: START_Y + ev.deltaY
        };
        requestElementUpdate();
    }
}

function onPinch(ev) {
    if (ev.type == 'pinchstart') {
        initScale = transform.scale || 1;
    }
    el.className = '';
    transform.scale = initScale * ev.scale;
    requestElementUpdate();
}

//旋转相关
var preAngle = 0;
var tempAngleFlag = 0;
var deltaAngle = 0;
var startRotateAngle = 0;

function onRotate(ev) {
    //点下第二个触控点时触发
    if (ev.type == 'rotatestart') {
        startRotateAngle = ev.rotation;
        tempAngleFlag = 0;
    }
    if (ev.type == 'rotatemove') {
        if (tempAngleFlag == 0) {
            preAngle = startRotateAngle;
            tempAngleFlag++;
        } else {
            deltaAngle = ev.rotation - preAngle;
            el.className = '';
            transform.rz = 1; //非0  垂直xy轴
            transform.angle = "";
            if (initAngle + deltaAngle > 15) {
                transform.angle = 15;
            } else if (initAngle + deltaAngle < -15) {
                transform.angle = -15;
            } else {
                transform.angle = initAngle + deltaAngle
            }
            requestElementUpdate();
        }
    }
    //旋转结束  记录当前图片角度    
    if (ev.type == 'rotateend') {
        initAngle = transform.angle;
    }
}

function updateElementTransform() {
    var value = [
        'translate3d(' + transform.translate.x + 'px, ' + transform.translate.y + 'px, 0)',
        'scale(' + transform.scale + ', ' + transform.scale + ')',
        'rotate3d(' + transform.rx + ',' + transform.ry + ',' + transform.rz + ',' + transform.angle + 'deg)'
    ];
    value = value.join(" ");
    // el.style.webkitTransform = value; /*为Chrome/Safari*/
    // el.style.mozTransform = value; /*为Firefox*/
    // el.style.transform = value; /*IE Opera?*/

    el_img.style.webkitTransform = value; /*为Chrome/Safari*/
    el_img.style.mozTransform = value; /*为Firefox*/
    el_img.style.transform = value; /*IE Opera?*/


    ticking = false;
}

function requestElementUpdate() {
    if (!ticking) {
        reqAnimationFrame(updateElementTransform);
        ticking = true;
    }
}

/**
初始化设置
*/
function resetElement() {
    el.className = 'animate';
    transform = {
        translate: { x: 0, y: 0 },
        scale: 1,
        angle: 0,
        rx: 0,
        ry: 0,
        rz: 0
    };
    requestElementUpdate();
}
/*头像移动操作*/



















/***********************************************
声音
************************************************/

var inter_Music;
var gDeg = 0;
var isProcessing = false;


function audioAutoPlay() {
    play_music()
    document.addEventListener("WeixinJSBridgeReady", function() {
        play_music()
    }, false);
}
// audioAutoPlay();
// 
$(".muisc").show();
    $(".muisc").click(function() {
        if ($(this).hasClass("pause")) {
            play_music();
        } else {
            stop_music()
        }
    })

function fMusic() { //旋转
    gDeg = gDeg + 5;
    $(".muisc_m").css({
        "transform": "rotate(" + gDeg + "deg)",
        "-webkit-transform": "rotate(" + gDeg + "deg)"
    });
}



function stop_music() {
    $(".muisc").addClass("pause");
    // clearInterval(inter_Music);
    document.getElementById("all_Sound").pause();
}

function play_music() {
    $(".muisc").removeClass("pause");
    fMusic();
    inter_Music = setInterval(function() {
        fMusic();
    }, 100);
    document.getElementById("all_Sound").play();
}


//------------

var shareText = ["没有拧不开的瓶盖，女汉子就是我！真的准到爆，再忙也要看看！", "忙着寻找诗和远方，文艺青年就是我！真的准到爆，再忙也要看看！", "忙着处理办公室政治，女总裁就是我！真的准到爆，再忙也要来看看", "识破套路追寻真爱，魅力女神就是我！真的准到爆，再忙也要看看！"]

function submit(pic) {
    var url = 'index.php?mod=data&action=Submit';
    var param = {};
    param.pic = pic;
    param.type = testTesult;

    _get(url, param, function(jsondata) {
        console.log(jsondata);
        if (jsondata.error != 0) {
            alert(jsondata.msg);
            return;
        }
        wxconfig.link = global_link + jsondata.id;
        wxconfig.title = shareText[testTesult - 1]
        share();
        //测试的
        //alert('设置分享成功'+wxconfig.link)
    });
}


function _get(url, param, callback, method) {
    method = method ? method : 'post';
    $.ajax({
        url: url,
        type: method,
        data: param,
        dataType: 'json',
        success: function(jsondata) {
            try {
                callback(jsondata);
            } catch (e) {
                //alert(e);
            }
        }
    });
}



function loading() {
    $("body").prepend('<div class="loadingPage" id="LoaingPage"><h3><span id="Percent">0</span>%</h3><h2>正在加载中，请稍后……</h2></div>')
    var host = "127.0.0.1/"
    var loader = new resLoader({
        resources: [
            host + '../images/pc_bg.jpg',
           

            // host + '/images/q2_m.gif',
            //  host + '/images/q3_m.gif',
           
            host + '../images/btn1.png',
            host + '../images/btn2.png',
            host + '../images/btn3.png',
            host + '../images/btn11.png',
            host + '../images/btn22.png',
            host + '../images/btn33.png',
            host + '../images/canvas_box.png',
            host + '../images/canvas_c11.png',
            host + '../images/canvas_c21.png',
            host + '../images/canvas_c31.png',
            host + '../images/canvas_c41.png',
			host + '../images/canvas_c51.png',
			host + '../images/canvas_c10.png',
            host + '../images/canvas_c20.png',
            host + '../images/canvas_c30.png',
            host + '../images/canvas_c40.png',
			host + '../images/canvas_c50.png',
            host + '../images/canvas_c11_bg.png',
            host + '../images/canvas_c21_bg.png',
            host + '../images/canvas_c31_bg.png',
            host + '../images/canvas_c41_bg.png',
			host + '../images/canvas_c51_bg.png',
			host + '../images/canvas_c10_bg.png',
            host + '../images/canvas_c20_bg.png',
            host + '../images/canvas_c30_bg.png',
            host + '../images/canvas_c40_bg.png',
			host + '../images/canvas_c50_bg.png',
            host + '../images/pc_c11.png',
            host + '../images/pc_c21.png',
            host + '../images/pc_c31.png',
            host + '../images/pc_c41.png',
			host + '../images/pc_c51.png',
			host + '../images/pc_c10.png',
            host + '../images/pc_c20.png',
            host + '../images/pc_c30.png',
            host + '../images/pc_c40.png',
			host + '../images/pc_c50.png',
            host + '../images/pc_c11_cover.png',
            host + '../images/pc_c21_cover.png',
            host + '../images/pc_c31_cover.png',
            host + '../images/pc_c41_cover.png',
			host + '../images/pc_c51_cover.png',
			host + '../images/pc_c10_cover.png',
            host + '../images/pc_c20_cover.png',
            host + '../images/pc_c30_cover.png',
            host + '../images/pc_c40_cover.png',
			host + '../images/pc_c50_cover.png',
            host + '../images/ps_btn.png',
           
            
        ],
        onStart: function(total) {
            console.log('start:' + total);
        },
        onProgress: function(current, total) {
            var percent = current / total * 100;
            $("#Percent").text(parseInt(percent))
        },
        onComplete: function(total) {
            document.getElementById("LoaingPage").style.display = "none";
            goPage1(); //启动页面 
        }
    });
    loader.start();
}







/***********************************************
声音
************************************************/



function audioAutoPlay() {
    play_music()
    document.addEventListener("WeixinJSBridgeReady", function() {
        play_music()
        audio1.play();
        setTimeout("audio1.pause()", 100);
    }, false);
}


function fMusic() { //旋转
    gDeg = gDeg + 5;
    $(".muisc_m").css({
        "transform": "rotate(" + gDeg + "deg)",
        "-webkit-transform": "rotate(" + gDeg + "deg)"
    });
}



function stop_music() {
    $(".muisc").addClass("pause");
    clearInterval(inter_Music);
    document.getElementById("all_Sound").pause();
}

function play_music() {
    $(".muisc").removeClass("pause");
    fMusic();
    inter_Music = setInterval(function() {
        fMusic();
    }, 100);
    document.getElementById("all_Sound").play();
}

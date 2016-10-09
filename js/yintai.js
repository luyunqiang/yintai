$(function(){
 var banner_btn=$(".dian")
      var banner_images=$(".tu")
      var banner_box=$(".banner")[0]
      var banner_color=["#A5D6F6","#F6F6F4","#008ACB","#EC3C3C"];
      var btnn=$(".btnn")[0];
      var btnn1=$(".btnn1")[0];
      for (var i = 0; i < banner_btn.length; i++) {
            banner_btn[i].index=i;
            banner_btn[i].onmouseover=function(){
                  num=this.index;
                  for (var i = 0; i < banner_btn.length; i++) {
                        banner_images[i].style.zIndex=1;
                        banner_btn[i].style.backgroundColor="#211616";
                  };
                  banner_box.style.backgroundColor=banner_color[this.index];
                  banner_images[this.index].style.zIndex=2;
                  this.style.backgroundColor="#e5004f";
                  
            }
      };
      // 动画
      var lunbo=setInterval(move,3000)
      var num=0;
      function move(){
            num++;
            if (num==4) {
                  num=0;
            }
            for (var i = 0; i < banner_btn.length; i++) {
                  banner_images[i].style.zIndex=1;
                  banner_btn[i].style.backgroundColor="#211616"
            };
            banner_box.style.backgroundColor=banner_color[num];
            banner_images[num].style.zIndex=2;
           banner_btn[num].style.backgroundColor="#e5004f";
      }
      banner_box.onmouseover=function(){
            clearInterval(lunbo)
            btnn.style.display="block";
            btnn1.style.display="block";
      }
      banner_box.onmouseout=function(){
            lunbo=setInterval(move,3000)
            btnn.style.display="none";
            btnn1.style.display="none";
      }
       btnn1.onclick=move;
       btnn.onclick=function(){
        num--;
            if (num<0) {
                  num=4;
            }
            for (var i = 0; i < banner_btn.length; i++) {
                  banner_images[i].style.zIndex=1;
                  banner_btn[i].style.backgroundColor="#211616"
            };
            banner_box.style.backgroundColor=banner_color[num];
            banner_images[num].style.zIndex=2;
           banner_btn[num].style.backgroundColor="#e5004f";
       }

       var jtBox=$(".jt-box")[0];
       var xiala=$(".xiala")[0];
       jtBox.onmouseover=function(){
          xiala.style.display="block";
       }
       jtBox.onmouseout=function(){
         xiala.style.display="none";
       }
})
//内容轮播效果
$(function(){
            var box=getClass("box");
            var leftbtn=getClass("leftbtn");
            var rightbtn=getClass("rightbtn");
            var btnbox=getClass("btnbox");
            var inner=getClass("inner");
            for (var i = 0; i < box.length; i++) {
                  lunbo2(box[i],leftbtn[i],rightbtn[i],btnbox[i],inner[i])
            };
     function lunbo2(box,leftbtn,rightbtn,btnbox,inner){
      var circles=btnbox.getElementsByTagName("div");
            var flag=true;
            //
            box.onmouseover=function(){
                  animate(leftbtn,{left:0},200)
                  animate(rightbtn,{right:0},200)
            }
            box.onmouseout=function(){
                  animate(leftbtn,{left:-31},200)
                  animate(rightbtn,{right:-31},200)
            }
            //鼠标移入移出箭头让箭头颜色改变的
            leftbtn.onmouseover=function(){
                  this.style.backgroundPosition="left bottom";
            }
            rightbtn.onmouseover=function(){
                  if (flag) {
                  this.style.backgroundPosition="right bottom";
               }
            }
        leftbtn.onmouseout=function(){
                  this.style.backgroundPosition="left top";
            }
            rightbtn.onmouseout=function(){
                  this.style.backgroundPosition="right top";
            }
            rightbtn.onclick=moveright;
            leftbtn.onclick=moveleft;
            circles[0].onclick=moveleft;
            circles[1].onclick=moveright;
            function moveright(){
                  flag=false;
             animate(inner,{marginLeft:-390})
             circles[0].style.background="#555"
             circles[1].style.background="#e5004f"
            }
            
            function moveleft(){
                  flag=true;
             animate(inner,{marginLeft:0})
             circles[1].style.background="#555"
             circles[0].style.background="#e5004f"
            }
       }
       }) 

$(function(){
     function border(obj,time){
           obj.style.position="resative";
           var div1=document.createElement("div");
           var div2=document.createElement("div");
           var div3=document.createElement("div");
           var div4=document.createElement("div");
           div1.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;height:1px;"
           div2.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;width:1px;"
           div3.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;height:1px;"
           div4.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;width:1px;"
           obj.appendChild(div1)
           obj.appendChild(div2)
           obj.appendChild(div3)
           obj.appendChild(div4)
           var width=parseInt(getStyle(obj,"width"))+2;
           var height=parseInt(getStyle(obj,"height"))+2;
           obj.onmouseover=function(){
               animate(div1,{width:width},time)
               animate(div2,{height:height},time)
               animate(div3,{width:width},time)
               animate(div4,{height:height},time)
           }
           obj.onmouseout=function(){
               animate(div1,{width:0},time)
               animate(div2,{height:0},time)
               animate(div3,{width:0},time)
               animate(div4,{height:0},time)
           }
      }
      var one=getClass("neirong-h")
      for (var i = 0; i < one.length; i++) {
         border(one[i],500)
      };
      var two=getClass("neirong6-f1")
      for (var i = 0; i < two.length; i++) {
        border(two[i],500)
      };
})


$(function(){

        // 页面加载完成后执行
          var btns=$(".neirong-d1");
          var cons=$(".neirong-g111");
            // 引入 定义
          for (var i = 0; i < btns.length; i++) {
                // 循环 遍历
            btns[i].index=i;
                // 定义按钮index属性
            btns[i].onmouseover=function(){
                    // 鼠标点击按钮时状态
              for (var i = 0; i < cons.length; i++) {
                        // 当前触发事件对象
                cons[i].style.display="none";
                // btns[i].style.color="#000";
                // btns[i].style.background="#fff"
                        // 本来属性
              }
              cons[this.index].style.display="block";
              // this.style.color="red";
              // this.style.background="#ccc"
                    // 鼠标点击时发生事件
            }
          };   
  })  


$(function(){
    
      var inner=$(".neirong6-ddd");
      var left=$(".neirong6-d7");
      var right=$(".neirong6-d8");
     
      for (var i = 0; i < inner.length; i++) {
        lunbo(inner[i],left[i],right[i])
      };
      function lunbo(inner,left,right){
        right.onclick=function(){
          animate(inner,{marginLeft:-159},300,
            function(){
              var first=getFirst(this);
              this.appendChild(first)
              this.style.marginLeft=0;
            })
        }
        left.onclick=function(){
          var last=getLast(inner);
          var first=getFirst(inner);
          inner.insertBefore(last,first)
          inner.style.marginLeft="-159px"
          animate(inner,{marginLeft:0},300)
        }
      }
     
})


$(function (){
  var box3=$(".daohang-box3")[0];
  var erweima=$(".erweima")[0];
  box3.onmouseover=function(){
    erweima.style.display="block";
  }
   box3.onmouseout=function(){
    erweima.style.display="none";
  }
})

$(function (){
  var box4=$(".daohang-box4")[0];
  var saoyisao=$(".saoyisao")[0];
  box4.onmouseover=function(){
    saoyisao.style.display="block";
  }
   box4.onmouseout=function(){
    saoyisao.style.display="none";
  }
})


$(function(){
  var bannerB11=$(".banner-b1");
  var mingping=$(".mingping")[0];
  for (var i = 0; i < bannerB11.length; i++) {
    bannerB11.index=i;
  bannerB11[i].onmouseover=function(){
    mingping.style.display="block";
  }
  bannerB11[i].onmouseout=function(){
    mingping.style.display="none";
  }
  };
})


$(function(){
    var floor=$(".ce-box")[0];
    var div1=$(".ce")[0];
    document.documentElement.scrollTop=1;
    if (document.documentElement.scrollTop==1) {
      var scrllobj=document.documentElement;
    }else{
      var scrllobj=document.body;
    }
    var flag=true;
    var flag2=true;
    window.onscroll=function(){
      var st=scrllobj.scrollTop;
      if (st>950){
        if (flag){
        flag=false;flag2=true;
        animate(floor,{width:50,height:545},200)
        };
      }else{if (flag2) {
        flag=true;flag2=false;
        animate(floor,{width:0,height:0},200)
        };
      };
    }
    var btns=$(".bt");
    var tents=$(".neirong6-box");
    for (var i = 0; i < btns.length; i++) {
      btns[i].index=i;
      btns[i].onclick=function(){
      var ot=tents[this.index].offsetTop;
      animate(scrllobj,{scrollTop:ot})
      }
    };
   })

// $(function(){
//       var obj=document.documentElement;
//       var totop=$(".ce11")[0];
//       totop.onclick=function(){
//           obj=document.body.scrollTop==0?document.documentElement:document.body;
//         animate(obj,{scrollTop:0})
//       }
//     })


$(function(){
  document.documentElement.scrollTop=1;
    if (document.documentElement.scrollTop==1) {
      var scrllobj=document.documentElement;
    }else{
      var scrllobj=document.body;
    }
  var btns=$(".ce1");
  var btnss=$(".ce");
  var btnsss=$(".ce11")[0];
    var tents=$(".neirong6-box");
    var btn4=$(".ce111")[0];
    for (var i = 0; i < btns.length; i++) {
      btns[i].index=i;
      // btns[i].onclick=function(){
      // var ot=tents[this.index].offsetTop;
      // animate(scrllobj,{scrollTop:ot})
      // }
      addEvent(btns[i],"click",function(){
         var ot=tents[this.index].offsetTop;
         animate(scrllobj,{scrollTop:ot})
        })
      addEvent(btns[i],"mouseover",function(){
         btnss[this.index].style.display="none";})

      addEvent(btns[i],"mouseout",function(){
         btnss[this.index].style.display="block";})
      addEvent(btn4,"mouseover",function(){
         btnsss.style.display="none";})
      addEvent(btn4,"mouseout",function(){
         btnsss.style.display="block";})
      var obj=document.documentElement;
      addEvent(btn4,"click",function(){
          obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0})
      })  

   }
   document.documentElement.scrollTop=1;
    if (document.documentElement.scrollTop==1) {
      var scrllobj=document.documentElement;
    }else{
      var scrllobj=document.body;
    }
    
        addEvent(window,"scroll",function(){
            var st=scrllobj.scrollTop;
            for (var i = 0; i < btnss.length; i++) {
                  if(st+400>tents[i].offsetTop){
                 for (var j = 0; j< btnss.length; j++) {
                      btnss[j].style.display="block";
                 };
                    btnss[i].style.display="none";
                 }
                
             };
 
            } )
})

$(function(){
          var box=$(".aaa");
          var arr=[];
          for (var i = 0; i < box.length; i++) {
            arr.push(box[i].offsetTop)
          };

         var doc=document.body;
         doc.scrollTop=1;
            if (doc.scrollTop!=1){
              doc=document.documentElement;
            };
              
              var ch=document.documentElement.clientHeight;
       doc.scrollTop=1;
       addEvent(window,"scroll",function(){
      var st=doc.scrollTop;
           for (var i = 0; i < arr.length; i++) {
                    // box[i].getAttribute("flag")!=true
               if(st+ch>arr[i]&&box[i].getAttribute("flag")!="true"){
                  var imgg=$('img',box[i]);
                  for (var j = 0; j < imgg.length; j++) {
                    imgg[j].src=imgg[j].getAttribute("asrc");                 
                  };
                  box[i].setAttribute("flag",true)
               }
           };
    })
 })
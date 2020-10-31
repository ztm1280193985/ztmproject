function check_uname(){
				//1.非空
				//2.格式
				var $uname=uname.value;
				if(!$uname){
					uname_mag.innerHTML="×";
				}else if($uname.length<6 || $uname.length>10){
					uname_mag.innerHTML="×";
				}else{
					uname_mag.innerHTML="√";
				}
			}
			function check_upwd(){
				//1.非空
				//2.格式
				var $upwd=upwd.value;
				if(!$upwd){
					upwd_mag.innerHTML="×";
				}else if($upwd.length<6 || $upwd.length>12){
					upwd_mag.innerHTML="×";
				}else{
					upwd_mag.innerHTML="√";
				}
			}
			function check_upwd1(){
				//1.非空
				//2.格式
				var $upwd=upwd.value;
				var $upwd1=upwd1.value;
				if(!$upwd1){
					upwd1_mag.innerHTML="×";
				}else if($upwd1.length<6 || $upwd1.length>12){
					upwd1_mag.innerHTML="×";
				}else if($upwd==$upwd1){
					upwd1_mag.innerHTML="√";
				}else{
					upwd1_mag.innerHTML="×";
				}
			}
			function login(){
				if(uname_mag.innerHTML=="√" && upwd_mag.innerHTML=="√" && upwd1_mag.innerHTML=="√"){
					alert("输入正确,可以提交");
				}else{
					alert("输入错误,不能提交");
				}
			}
var ajax;	//声明ajax
ajax = new XMLHttpRequest();	//new XMLHttpRequest();
ajax.request = function(url, type, callback, param){
	
	//判断请求类型
	if('get' == type){
		
		//向url添加请求参数
		if(param){
			url += '?';
			url += param;
		}else{
			
		}
		
		ajax.open(type, url);
		ajax.send();
		
	}else if ('post' == type){
		
		//设置请求报文
		ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		ajax.open(type, url);
		
		if(param){
			ajax.send(param);
		}else{
			ajax.send();
		}
	}else{
		return ;
	}
	
	ajax.onreadystatechange = function (){
		//根据请求返回状态返回回调函数
		if(ajax.readyState == 4 && ajax.status == 200){
			callback(ajax);
		}
	}
	
}
© 2019 GitHub, Inc.

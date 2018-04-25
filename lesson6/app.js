// app.js

//写一个fibonacci函数


function fibonacci(n){
	if(typeof n == "number"){
		if(n == 0){
			return 0;
		}else if(n < 0){
			throw new Error('n should >= 0')
		}else if(n == 1){
			return 1;
		}else if(n > 1 && n < 11){
			
			tail =  function(n,curr=1,next=1){
				if(n == 0){return curr;}else{
					return tail(n-1,next,curr+next);
				}
			};
			return tail(n);
		}else if(n>10){
			throw new Error('n should <= 10');
		}
	}else{
		throw new Error('n should be a Number');
	}
}


exports.fibonacci = fibonacci;










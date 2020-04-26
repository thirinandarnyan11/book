function count(){
	var coffeeshop_str=localStorage.getItem("coffee_shop");
	if(coffeeshop_str){
		var coffeeshop_arr=JSON.parse(coffeeshop_str);
		var count=0;
		$.each(coffeeshop_arr,function(i,v){
			var qty=v.qty;
			count+=parseInt(qty);
			$("#count").text(count);
		})
	}
}
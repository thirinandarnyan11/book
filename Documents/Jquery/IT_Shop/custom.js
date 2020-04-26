function count(){
	var shop_str=localStorage.getItem("it_shop");
	if(shop_str){
		var shop_arr=JSON.parse(shop_str);
		var count=0;
		$.each(shop_arr,function(i,v){
			var qty=v.qty;
			count+=parseInt(qty);
			$("#count").text(count);
		})
	}
}
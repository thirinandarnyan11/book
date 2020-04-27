$(document).ready(function(){
	count();
	$(".addtocart").click(function(){
		var id=$(this).data('id');
		var name=$(this).data('name');
		var price=$(this).data('price'); 
		var brand=$(this).data('brand');

		var item={
			id:id,
			name:name,
			price:price,
			brand:brand,
			qty:1
		}
				var shop_str=localStorage.getItem("it_shop"); //it_shop is localStorage name  string
				var shop_arr;
				if(shop_str==null){
					shop_arr=Array(); //build localStorage
				}else{
					shop_arr=JSON.parse(shop_str);
				}
				var status=false;
				 $.each(shop_arr,function(i,v){ // $.each(array,function(i,v))
				 	// console.log(i);//index
				 	// console.log(v.name);//value
				 	if(id==v.id){
				 		status=true;
				 		v.qty++;
				 		//console.log(typeof(qty));
				 	}
				 })
				 //not equal id push to array
				 if(status==false){
				shop_arr.push(item); //array=object
			}

			var shopData=JSON.stringify(shop_arr);
				localStorage.setItem("it_shop",shopData); //localStorage.setItem(localStorage Name,shopData); 
				count();
				console.log(shopData);
			})
})





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
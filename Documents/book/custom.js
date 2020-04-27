$(document).ready(function(){
  count();
  $("#addtobasket").click(function(){
    var id=$(this).data('id');
    var title=$(this).data('title');
    var author=$(this).data('author');
    var price=$(this).data('price'); 
    var genre=$(this).data('genre');

    var item={
      id:id,
      title:title,
      author:author,
      price:price,
      genre:genre,
      qty:1
    }
        var book_str=localStorage.getItem("book_shop"); //it_shop is localStorage name  string
        var book_arr;
        if(book_str==null){
          book_arr=Array(); //build localStorage
        }else{
          book_arr=JSON.parse(book_str);
        }
        var status=false;
         $.each(book_arr,function(i,v){ // $.each(array,function(i,v))
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
        book_arr.push(item); //array=object
      }

      var bookData=JSON.stringify(book_arr);
        localStorage.setItem("book_shop",bookData); //localStorage.setItem(localStorage Name,shopData); 
        count();
        console.log(bookData);
      })
})





function count(){
  var book_str=localStorage.getItem("book_shop");
  if(book_str){
    var book_arr=JSON.parse(book_str);
    var count=0;
    $.each(book_arr,function(i,v){
      var qty=v.qty;
      count+=parseInt(qty);
      $("#count").text(count);
    })
  }
}


function exit(){
  alert("Thank for Shopping!");
}

$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }

});
 // show more/show less
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "show more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "show less"; 
    moreText.style.display = "inline";
  }
}
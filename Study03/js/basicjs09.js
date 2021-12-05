
$('#option1').on('change',function(){

    if($('#option1').val() == '셔츠'){

        $('#option2').html('');

        var template = `<option>95</option>
                        <option>100</option>
                        <option>105</option>`;
        $('#option2').append(template);

    } else if ($('#option1').val() == '바지'){

        $('#option2').html('');

        var size = [26,28,30,32,34,36]
        var template = "";
        // for(var i = 0; i<6; i++){
        //     template += `<option>${size[i]}</option>`;
        // }
            size.forEach(function(i){
            template += `<option>${i}</option>`;
        })

        $('#option2').append(template);
    }



});


var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ] 

  function sort1(){
      products.sort(function(a,b){
        return b.price-a.price;
      })

      lender()

  }

  lender()

  function lender(){

      for(var i =0; i<products.length; i++){
          
          $('.title'+i).html(products[i].title)
          $('.price'+i).html(products[i].price)
          
        }
    }
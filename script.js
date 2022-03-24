// Business Logic
function Order(name,size,crust,topping,total){
  this.name = name;
  this.size = size;
  this.crust= crust;
  this.topping= topping;
  this.total = total;
}


// User Interface
$(document).ready(function(){
    $(".proceed").click(function() {
      let pizzaName= $("#name option:selected").text();
      let pizzasize= $("#size option:selected").text();
      let pizzacrust= $("#crust option:selected").text();
      let pizzatopping= $("#topping option:selected").text();
    

      let sizePrice= parseInt($("#size option:selected").val());
      let crustPrice= parseInt($("#crust option:selected").val());
      let toppingPrice= parseInt($("#topping option:selected").val());
      let total = sizePrice + crustPrice + toppingPrice;
      let finalPrice = total;


      $("#pizzaname").html(pizzaName);
      $("#pizzasize").html(pizzasize);
      $("#pizzacrust").html(pizzacrust);
      $("#pizzatopping").html(pizzatopping);
      $("#totals").html(finalPrice);

      $(".add").click(function() {
        let pizzaName= $("#name option:selected").text();
        let pizzasize= $("#size option:selected").text();
        let pizzacrust= $("#crust option:selected").text();
        let pizzatopping= $("#topping option:selected").text();
      

        let sizePrice= parseInt($("#size option:selected").val());
        let crustPrice= parseInt($("#crust option:selected").val());
        let toppingPrice= parseInt($("#topping option:selected").val());
        let total = sizePrice + crustPrice + toppingPrice;
        let finalPrice =total;

        let newOrder = new Order(pizzaName, pizzasize, pizzacrust, pizzatopping, total);

        let addQuantity = '<tr>' + '<td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping +  '</td><td id="totals">' + newOrder.total + '</td></tr>'

        $("#ordersmade").append(addQuantity);  

        console.log(finalPrice);

      });

      $(".checkout").click(function(){
        $(".finalPrice").html(finalPrice);
      });

    });
});


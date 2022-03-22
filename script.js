// var crust_price, topping_price;
// let total = 0;
// function Getpizza(name,size,crust,topping,total){
//     this.name = name;
//     this.size = size;
//     this.crust = crust;
//     this.topping = topping;
//     this.total = total;
// }

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
      console.log(total);


      $("#pizzaname").html(pizzaName);
      $("#pizzasize").html(pizzasize);
      $("#pizzacrust").html(pizzacrust);
      $("#pizzatopping").html(pizzatopping);
      $("#totals").html(total);


      function order(name,size,crust,topping,total){
        this.name = name;
        this.size = size;
        this.crust= crust;
        this.topping= topping;
        this.total = total;
      }
    });
});

// $("button.proceed").click(function(){
//     let pname = $("#name option:selected").val();
//     let psize = $("#size option:selected").val();
//     let pcrust = $("#crust option:selected").val();
//     let ptopping = [];
//     $.each($("input[name='toppings']:checked"), function(){
//         ptopings.push($(this).val());
//     });
//     console.log(ptoppings.join(", "));
//     switch(psize){
//         case "0":
//           price =0;
//         break;
//         case "large":
//            price = 1200;
//            console.log(price);
//          break;
//          case "medium":
//            price = 850;
//            console.log("The price is "+price);
//          break;
//          case "small":
//            price = 600;
//            console.log(price);
//          default:
//            console.log("error"); 
//        }
// });
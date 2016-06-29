$(document).ready(function() {
    
    
    $(".one").hover(function() {
      $(".one").css("background-color","#BCB3AD");
    }, function() {
      $(".one").css("background-color", "#FAF6EC");
    })

    $(".two").hover(function() {
      $(".two").css("background-color","#BCB3AD");
    }, function() {
      $(".two").css("background-color", "#FAF6EC");
    })

    $(".three").hover(function() {
      $(".three").css("background-color","#BCB3AD");
    }, function() {
      $(".three").css("background-color", "#FAF6EC");
    })

    $(".four").hover(function() {
      $(".four").css("background-color","#BCB3AD");
    }, function() {
      $(".four").css("background-color", "#FAF6EC");
    })

    $(".five").hover(function() {
      $(".five").css("background-color","#BCB3AD");
    }, function() {
      $(".five").css("background-color", "#FAF6EC");
    })

    $(".six").hover(function() {
      $(".six").css("background-color","#BCB3AD");
    }, function() {
      $(".six").css("background-color", "#FAF6EC");
    })

    $(".seven").hover(function() {
      $(".seven").css("background-color","#BCB3AD");
    }, function() {
      $(".seven").css("background-color", "#FAF6EC");
    })

    $(".eight").hover(function() {
      $(".eight").css("background-color","#BCB3AD");
    }, function() {
      $(".eight").css("background-color", "#FAF6EC");
    })

    $(".nine").hover(function() {
      $(".nine").css("background-color","#BCB3AD");
    }, function() {
      $(".nine").css("background-color", "#FAF6EC");
    })

    $(".zero").hover(function() {
      $(".zero").css("background-color","#BCB3AD");
    }, function() {
      $(".zero").css("background-color", "#FAF6EC");
    })

    $(".period").hover(function() {
      $(".period").css("background-color","#BCB3AD");
    }, function() {
      $(".period").css("background-color", "#FAF6EC");
    })

    $(".divide").hover(function() {
      $(".divide").css("background-color","#EB8476");
    }, function() {
      $(".divide").css("background-color", "#E24C38");
    })

    $(".multiply").hover(function() {
      $(".multiply").css("background-color","#EB8476");
    }, function() {
      $(".multiply").css("background-color", "#E24C38");
    })

    $(".minus").hover(function() {
      $(".minus").css("background-color","#EB8476");
    }, function() {
      $(".minus").css("background-color", "#E24C38");
    })

    $(".plus").hover(function() {
      $(".plus").css("background-color","#EB8476");
    }, function() {
      $(".plus").css("background-color", "#E24C38");
    })

    $(".equal").hover(function() {
      $(".equal").css("background-color","#EB8476");
    }, function() {
      $(".equal").css("background-color", "#E24C38");
    })

    $(".ac").hover(function() {
      $(".ac").css("background-color","#E24C38");
    }, function() {
      $(".ac").css("background-color", "#EB8476");
    })

    $(".plusminus").hover(function() {
      $(".plusminus").css("background-color","#E24C38");
    }, function() {
      $(".plusminus").css("background-color", "#EB8476");
    })

    $(".percent").hover(function() {
      $(".percent").css("background-color","#E24C38");
    }, function() {
      $(".percent").css("background-color", "#EB8476");
    })

    var status = "start";
    var count = 0;
    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
    var sum = 0;
    var operator = "none";

      function runop (operator) {
        if(operator === "plus") {
              num2 = Number($(".out-numbers").text());
              sum += num2;
              $(".out-numbers").html(sum);
        }
        else if (operator === "minus") {
              num2 = Number($(".out-numbers").text());
              sum -= num2;
              $(".out-numbers").html(sum);
        }
        else if (operator === "multiply") {
              num2 = Number($(".out-numbers").text());
              sum *= num2;
              $(".out-numbers").html(sum);
        }
        else if (operator === "divide") {
              num2 = Number($(".out-numbers").text());
              sum /= num2;
              $(".out-numbers").html(sum);
        }

      } //End function runop


      $(".one").click(function () {
        if (status === "start") {
          $(".out-numbers").html("1");
        }
        else {
          $(".out-numbers").append("1");
        }
        status = "ongoing";
      });

      $(".two").click(function () {
        if (status === "start") {
          $(".out-numbers").html("2");
        }
        else {
          $(".out-numbers").append("2");
        }
        status = "ongoing";
      });

      $(".three").click(function () {
        if (status === "start") {
          $(".out-numbers").html("3");
        }
        else {
          $(".out-numbers").append("3");
        }
        status = "ongoing";
      });


      $(".four").click(function () {
        if (status === "start") {
         $(".out-numbers").html("4");
       }
        else {
          $(".out-numbers").append("4");
        }
        status = "ongoing";
      });

      $(".five").click(function () {
        if (status === "start") {
          $(".out-numbers").html("5");
        }
        else {
          $(".out-numbers").append("5");
        }
        status = "ongoing";
      });

      $(".six").click(function () {
        if (status === "start") {
          $(".out-numbers").html("6");
        }
        else {
          $(".out-numbers").append("6");
        }
        status = "ongoing";
      });

      $(".seven").click(function () {
        if (status === "start") {
          $(".out-numbers").html("7");
        }
        else {
          $(".out-numbers").append("7");
        }
        status = "ongoing";
      });

      $(".eight").click(function () {
        if (status === "start") {
          $(".out-numbers").html("8");
        }
        else {
          $(".out-numbers").append("8");
        }
        status = "ongoing";
      });

      $(".nine").click(function () {
        if (status === "start") {
          $(".out-numbers").html("9");
        }
        else {
          $(".out-numbers").append("9");
        }
        status = "ongoing";
      });

      $(".zero").click(function () {
        if (status === "start") {
          $(".out-numbers").html("0");
        }
        else {
          $(".out-numbers").append("0");
        }
        status = "ongoing";
      });

      $(".period").click(function () {
        $(".out-numbers").append(".");
        status = "ongoing";
      });

      $(".ac").click(function () {
        $(".out-numbers").html("0");
        status = "start";
        status = "start";
        count = 0;
        num1 = 0;
        num2 = 0;
        num3 = 0;
        sum = 0;
        operator = "none";
      });

      $(".equal").click(function() {
        runop(operator);
        $(".out-numbers").html(sum);
        operator = "none";
        count = 0;
      })

      $(".percent").click(function() {
        sum = Number($(".out-numbers").text());
        sum = sum/100;
        $(".out-numbers").html(sum);
        operator = "none";
        count = 0;
      })

      $(".plusminus").click(function() {
        if (count < 1) {
          num1 = Number($(".out-numbers").text());
          sum = num1*(-1);
          $(".out-numbers").html(sum);
          operator = "none";
          count = 0;
        }
        else if (count >= 1) {
          num1 = Number($(".out-numbers").text());
          num1 = num1*(-1);
          $(".out-numbers").html(num1);
        }
      })

      $(".plus").click(function() {
        if(count < 1) {
          num1 = Number($(".out-numbers").text());
          sum = num1;
          operator = "plus";
        }
        else if (count >= 1) {
          runop(operator);
          operator = "plus";
        }
        count++; 
        status = "start";
      });

    $(".minus").click(function() {
        if(count < 1) {
          num1 = Number($(".out-numbers").text());
          sum = num1;
          operator = "minus";
        }
        else if (count >= 1) {
          runop(operator);
          operator = "minus";
        }
        count++;
        status = "start";
      });

    $(".multiply").click(function() {
        if(count < 1) {
          num1 = Number($(".out-numbers").text());
          sum = num1;
          operator = "multiply";
        }
        else if (count >= 1) {
          runop(operator);
          operator = "multiply";
        }
        count++;
        status = "start";
      });

    $(".divide").click(function() {
        if(count < 1) {
          num1 = Number($(".out-numbers").text());
          sum = num1;
          operator = "divide";
        }
        else if (count >= 1) {
          runop(operator);
          operator = "divide";
        }
        count++;
        status = "start";
      });



}); //End whole document
    sum35 = function() {
       var sum = 0;
       var max = document.getElementById("maxNum");
       
       for (var i = 0; i < max.value; i++) {
           if ((i % 3 === 0) || (i % 5 === 0)) {
               sum = sum + i;
           }    
       };
       document.getElementById("result").innerHTML = sum;
    };
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
   device = "mobile";
 }else{
   device = "computer"
 }

 console.log(device)

 function enviar () {

    var pais = document.getElementById("countryCode").value.toString() ;
    var area = document.getElementById("areaCode").value.toString() ;
    var numero = document.getElementById("number").value.toString() ;
    var pegarnumero = document.getElementById("pegarnumero").value.toString() ;
    
    var tosend = pais + area + numero
    var a = document.getElementById('link');

       
    console.log(tosend);
   
    var linkmobile = "https://wa.me/" + tosend;
    var link = "https://web.whatsapp.com/send?phone=" + tosend + "&text&app_absent=0";

    console.log(link)
    console.log(linkmobile)

     //or grab it by tagname etc
   switch(device){
      case "mobile": a.href = linkmobile;
      case "computer": a.href = link;
   }
   
    

    // document.body.appendChild(element);
    }
            

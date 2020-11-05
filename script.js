
 function enviar () {

    var pais = document.getElementById("countryCode").value.toString() ;
    var area = document.getElementById("areaCode").value.toString() ;
    var numero = document.getElementById("number").value.toString() ;
    var pegarnumero = document.getElementById("pegarnumero").value.toString() ;
    
    var tosend = pais + area + numero

    document.write 
    console.log(tosend);

    var link = "https://web.whatsapp.com/send?phone=" + tosend + "&text&app_absent=0";
    console.log(link)

    var a = document.getElementById('link'); //or grab it by tagname etc
    a.href = link

    // document.body.appendChild(element);
    }
            

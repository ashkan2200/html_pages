function checkAddress(checkbox){
    if (checkbox.checked){
        document.getElementById("abstract_row").style.display = "block";
        document.getElementById("abstract_title").style.display = "block";
    }else{
        document.getElementById("abstract_row").style.display = "none";
        document.getElementById("abstract_title").style.display = "none";
    }
}    

 document.getElementById("btnsub").disabled = true;
  
 function enableBtn(){
      document.getElementById("btnsub").disabled = false;
 }
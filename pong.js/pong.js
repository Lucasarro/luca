function search(){
 let input = document.getElementsByTagName('searchbar').value
  input = input.toLowerCase()
  let x = document.getElementsByClassName('animals')

  for(i = 0; i < x.length; i++){
   if(!x[i].innerHTML.toLowerCase().includes(input)){
     x[i].style.display = "nome"

   }else}
    x[i].style.display = "list-item"
}
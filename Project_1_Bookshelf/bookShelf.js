//Function steps through each row and prompt for author's name 
//Enter names into column 2 

function authorEntry(){
   for(i=1;i<6;i++){
       var authorName = prompt("Enter the Author's name for row " + i + ":")
       document.getElementById("author"+i).innerText = authorName

   }

}

//Function clears the column
function tableClear(){
    for(i=1;i<6;i++){
        //var authorName = prompt("Enter the Author's name for row " + i + ":")
        document.getElementById("author"+i).innerText = ""
 
    }
    

}
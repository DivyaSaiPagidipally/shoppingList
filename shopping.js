/*const groceries=document.getElementsByClassName("groceries")[0];*/
let allItems=document.getElementById("allItems");
let userInput=document.getElementById("userInput");
var count=0;
userInput.addEventListener("keydown",function(event){
    if(event.key == "Enter")
       addItem();
});
function addItem()
{   
    count=count+1;
    const groceryList={
        itemName:userInput.value,
        isChecked:false
    };
    let paraElement =document.createElement("div");
    let textElement = document.createElement("p");
    if(groceryList.itemName!=''){
    textElement.textContent=groceryList.itemName;
    paraElement.appendChild(textElement);
    paraElement.classList.add("allItems");
    let deleteSymbol=document.createElement("div");
    deleteSymbol.innerHTML="&#10005";
    deleteSymbol.classList.add("deleteSymbol1");
    paraElement.appendChild(deleteSymbol);
    paraElement.addEventListener("click",function(){
    paraElement.classList.toggle("deleteMark");
    textElement.classList.toggle("textEle");
    })
    allItems.appendChild(paraElement);
    userInput.value="";
    deleteSymbol.addEventListener("click",function()
    {
        paraElement.remove();
        count=count-1;
    })}
    console.log("count of items in groceryList is:",count);
};

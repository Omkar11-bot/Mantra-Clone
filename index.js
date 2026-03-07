displayHomePage();
let bagItems=[];
load()

function displayHomePage(){

let itemContainorElement=document.querySelector('.items_containor');
    if(!itemContainorElement){
    return;
}
let innerHTML='';
items.forEach(item=>{
    innerHTML+=` <div class="item_containor">
                <img class="item_img" src=${item.image}>
                <div class="rating">
                   ${item.rating.stars}| ${item.rating.count}
                </div>
                <div class="company">
                    ${item.company}
                </div>
                <div class="item_name">
              ${item.item_name}
                </div>
                <div class="price">
                    <span class="current_price">Rs ${item.current_price}</span>
        
                    <span class="orginal_price">Rs${item.original_price}</span>
                    <span class="discount">(${item. discount_percentage}%OFF)</span>
                     </div>
                    <button class="buttonOfAdd"onclick="addTobag(${item.id})">ADD To Bag</button>
               
            </div>`
})

itemContainorElement.innerHTML=innerHTML
}


bagitem();
function addTobag(itemsId){
bagItems.push(itemsId);
localStorage.setItem('bagitems',JSON.stringify(bagItems))
bagitem();

}
function load(){
let bagitemsStr=localStorage.getItem('bagitems')
bagItems=bagitemsStr? JSON.parse(bagitemsStr):[];
}

function bagitem(){
    let displaybagitems=document.querySelector(".bag-items");
    if(bagItems.length>0){
    displaybagitems.style.visibility='visible';
    displaybagitems.innerText=bagItems.length;
}
else{
    displaybagitems.style.visibility='hidden';
}
}
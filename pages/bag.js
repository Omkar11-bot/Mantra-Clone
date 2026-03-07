const CONVENIENCE_FEES=99;
let bagItemObject;

load();


function load(){
  bagItemsObject();
  displaybagitems();
  displayBagSummary();
    
};
function displayBagSummary(){
let bagSummary=document.querySelector('.bag-summary');
let totitems=bagItemObject.length;
let totMRP=0;
let totdiscount=0;
let totpayment=0;

bagItemObject.forEach(bagitem=>{
  totMRP+=bagitem.original_price;
  totdiscount+=bagitem.original_price-bagitem.current_price
})
totpayment=totMRP-totdiscount+CONVENIENCE_FEES;

bagSummary.innerHTML=`         
 <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totitems} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">₹${totMRP}
</span>
            </div>
            <div class="price-item">
            <span class="price-item-tag">Discount on MRP
              <span class="price-item-value priceDetail-base-discount">₹${totdiscount}
</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value"> ₹99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">₹${totpayment}
</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`
}

function bagItemsObject(){
  bagItemObject = bagItems.map(itemId => {
    for (let i = 0; i < items.length; i++){
      if(itemId == items[i].id){
        return items[i];
      }
    }
  });
}

console.log(bagItemObject);
function displaybagitems(){
    let containorElement=document.querySelector('.bag-items-container');
    let innerHtml='';
    bagItemObject.forEach(bagitem => {
      innerHtml+=generateitemHtml(bagitem);
    });
  containorElement.innerHTML=innerHtml;
}

function removeFromBag(itemId){
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
localStorage.setItem('bagitems',JSON.stringify(bagItems))

  bagItemsObject();
  displaybagitems();
  bagitem();
  displayBagSummary();
}

function generateitemHtml(item){
return`<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">${item.original_price}</span>
                <span class="original-price">${item. current_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period}days</span> return available
              </div>
              <div class="delivery-details">
               ${item.delivery_date}
                <span class="delivery-details-days">10 Oct 2023</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
          </div>`
}

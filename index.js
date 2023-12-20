"use strict"

let alert_content=document.querySelectorAll("h5");

let form_data=document.forms.Shopping_form;

let product_name_box=form_data.product_name;

let product_amount_box=form_data.amount_box;

let middle_Expense_List=document.querySelector(".middle_Expense_List")

form_data.addEventListener("submit",(event)=>{
event.preventDefault();

setTimeout(()=>{
    alert_content[0].classList.remove("invalid_content");
    alert_content[1].classList.remove("invalid_content");
},1500)

if(product_name_box.value=="" && product_amount_box.value==""){
    alert_content[0].classList.add("invalid_content");
    alert_content[1].classList.add("invalid_content");

}
  else if(product_name_box.value==""){
    alert_content[0].classList.add("invalid_content");

   }
   else if(product_amount_box.value==""){
    alert_content[1].classList.add("invalid_content");

   }

else{
  let history_box_parent=document.createElement("div");
  history_box_parent.className="history_box_parent";

  let history_box=document.createElement("div");
  history_box.className="history_box";

  let product_type=document.createElement("p");
  product_type.className="product_type";
  product_type.innerHTML=product_name_box.value;

  let expense_amount=document.createElement("span");
  expense_amount.innerHTML=amount_box.value;

  let trash_btn=document.createElement("h6");
  trash_btn.innerHTML=`<i class="fa-solid fa-trash" id="trash_icon" stlye="color:red"></i>`;

  history_box.append(product_type,expense_amount);
  history_box_parent.append(history_box,trash_btn);
  middle_Expense_List.append(history_box_parent);

  //..............Trash_button...................//

  trash_btn.addEventListener("click",()=>{

if(confirm(`Do you want to delete the product ${trash_btn.previousElementSibling.firstElementChild.innerHTML}?!`)){

let trash_btn_parent=trash_btn.parentElement.firstElementChild.lastElementChild;

total_amount.innerHTML=Number(total_amount.innerHTML)-Number(trash_btn_parent.innerHTML)
if(middle_Expense_List.children.length==1){

    document.querySelector(".total_amount_box").classList.remove("total_amount_box_block")
      }

    history_box_parent.remove();
}

  });
//...................Total_amount_Box....................//

  if(middle_Expense_List.children.length==1){
document.querySelector(".total_amount_box").classList.add("total_amount_box_block")
  }
  
 let total_amount= document.querySelector("#total_amount");

 total_amount.innerHTML=Number(total_amount.innerHTML)+Number(amount_box.value)
  form_data.reset();

}

let all_span_tag=document.querySelectorAll("span");

all_span_tag.forEach((span_tag,index)=>{

    if(index%2==0){
        span_tag.parentElement.classList.add("background_color")
    }
});

});







//.......................Product Assesding.............//

let triangle_icon=document.querySelector("#triangle_icon");

triangle_icon.addEventListener("click",()=>{

let All_span_tags=document.querySelectorAll("span");
let arr2=[];

let count=0;
All_span_tags.forEach((span,index)=>{
    console.log(span);
    arr2[count]=span.innerHTML;
    count++;

});

console.log(arr2);

for(let i=0;i<arr2.length-1;i++){

    for(let j=i+1;j<arr2.length;j++){

        if(arr2[i]<arr2[j]){

            let value=arr2[i];
            arr2[i]=arr2[j];
            arr2[j]=value;
        }
    }

}


arr2.forEach((value,index)=>{

All_span_tags.forEach((span,index)=>{

    if(span.innerHTML==value){
        console.log("pattabi");
  let value=span.parentElement.parentElement;
  span.parentElement.parentElement.remove();

   middle_Expense_List.append(value);
    }

})
})

});

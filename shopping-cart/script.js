let total = document.getElementById("total-price")
let totalNum = parseFloat(total.innerText)
let count =1
// Card
const first_card = document.getElementById("first-card")
const second_card = document.getElementById("second-card")
const third_card = document.getElementById("third-card")
const four_card = document.getElementById("four-card")
const five_card = document.getElementById("five-card")
const six_card = document.getElementById("six-card")

// first--------------------------
first_card.addEventListener("click", function(){
    const firstName = document.getElementById("firstName")
    const first_p = document.getElementById("first-p")
    const firstNum = parseFloat(first_p.innerText)
    
    const firstNameValue = firstName.innerText
    const list_container = document.querySelector(".list-container")
    const li  = document.createElement("li")
    
    li.classList.add("font-semibold")
    li.classList.add("pt-1")
    li.innerHTML = `${count}. ${firstNameValue}`
    list_container.appendChild(li)
    totalNum = totalNum + firstNum
    count++
    const couponButton = document.getElementById("coupon-btn")
    const makeButton =  document.getElementById("make-purchase")
    const couponInput = document.getElementById("coupone")
    const discountPrice = document.getElementById("discount-price")
    const discountValue = parseFloat(discountPrice.innerText)
    const grandTotal = document.getElementById("after-total-price")
    const grandValue = parseFloat(grandTotal.innerText)
   
    couponButton.disabled = true
    makeButton.disabled = true
    
    couponInput.addEventListener("input", function(){
        if(couponInput.value === "SELL200" && totalNum>=200){
            couponButton.disabled = false
            
        }else{
            couponButton.disabled = true
            
        }
    })


    couponButton.addEventListener("click", function(){
        if(couponInput.value === "SELL200" && totalNum>=200){
            
            const discount = totalNum * 20/100
            const newGrandTotal = totalNum - discount
            discountPrice.innerText = discount.toFixed(2)
            grandTotal.innerText = newGrandTotal.toFixed(2)
            couponInput.value = ""
         }
    })   
    total.innerText = totalNum.toFixed(2)
    grandTotal.innerText = totalNum.toFixed(2)
    const modalButton = document.querySelector(".modal-action")
    if(totalNum >0){
        makeButton.disabled = false
    }

    modalButton.addEventListener("click", function(){
        discountPrice.innerText = "0.00"
        grandTotal.innerText = "0.00"
        total.innerText = "0.00"
        li.innerHTML = ""
        
        count =1
        totalNum =0
        window.scrollTo(0,0)
    })

})
// second-------------------
second_card.addEventListener("click", function(){
    const secondName = document.getElementById("second-name")
    const second_p = document.getElementById("second-p")
    const secondNum = parseFloat(second_p.innerText)
    
    const secondNameValue = secondName.innerText
    const list_container = document.querySelector(".list-container")
    const li  = document.createElement("li")
    li.classList.add("font-semibold")
    li.classList.add("pt-1")

    li.innerHTML = `${count}. ${secondNameValue}`
    list_container.appendChild(li)
    totalNum = totalNum + secondNum
    count++
    const couponButton2 = document.getElementById("coupon-btn")
    const makeButton2 =  document.getElementById("make-purchase")
    const couponInput2 = document.getElementById("coupone")
    const discountPrice2 = document.getElementById("discount-price")
    const discountValue2 = parseFloat(discountPrice2.innerText)
    const grandTotal2 = document.getElementById("after-total-price")
    const grandValue2 = parseFloat(grandTotal2.innerText)
   
    couponButton2.disabled = true
    makeButton2.disabled = true
    
    couponInput2.addEventListener("input", function(){
        if(couponInput2.value === "SELL200" && totalNum>=200){
            couponButton2.disabled = false
            
        }else{
            couponButton2.disabled = true
            
        }
    })
    couponButton2.addEventListener("click", function(){
        if(couponInput2.value === "SELL200" && totalNum>=200){
            
            const discount = totalNum * 20/100
            const newGrandTotal = totalNum - discount
            discountPrice2.innerText = discount.toFixed(2)
            grandTotal2.innerText = newGrandTotal.toFixed(2)
            couponInput2.value = ""

         }
    })   
    total.innerText = totalNum.toFixed(2)
    grandTotal2.innerText = totalNum.toFixed(2)
    const modalButton = document.querySelector(".modal-action")
    if(totalNum >0){
        makeButton2.disabled = false
    }

    modalButton.addEventListener("click", function(){
        discountPrice2.innerText = "0.00"
        grandTotal2.innerText = "0.00"
        total.innerText = "0.00"
        li.innerHTML = ""
        
        count =1
        totalNum =0
        window.scrollTo(0,0)
    })


})

// third-------------
third_card.addEventListener("click", function(){
    const thirdName = document.getElementById("third-name")
    const third_p = document.getElementById("third-p")
    const thirdNum = parseFloat(third_p.innerText)
    
    const thirdNameValue = thirdName.innerText
    const list_container = document.querySelector(".list-container")
    const li  = document.createElement("li")
    li.classList.add("font-semibold")
    li.classList.add("pt-1")

    li.innerHTML = `${count}. ${thirdNameValue}`
    list_container.appendChild(li)
    totalNum = totalNum + thirdNum
    count++
    const couponButton3 = document.getElementById("coupon-btn")
    const makeButton3 =  document.getElementById("make-purchase")
    const couponInput3 = document.getElementById("coupone")
    const discountPrice3 = document.getElementById("discount-price")
    const discountValue3 = parseFloat(discountPrice3.innerText)
    const grandTotal3 = document.getElementById("after-total-price")
    const grandValue3 = parseFloat(grandTotal3.innerText)
   
    couponButton3.disabled = true
    makeButton3.disabled = true
    
    couponInput3.addEventListener("input", function(){
        if(couponInput3.value === "SELL200" && totalNum>=200){
            couponButton3.disabled = false
            
        }else{
            couponButton3.disabled = true
            
        }
    })
    couponButton3.addEventListener("click", function(){
        if(couponInput3.value === "SELL200" && totalNum>=200){
            
            const discount = totalNum * 20/100
            const newGrandTotal = totalNum - discount
            discountPrice3.innerText = discount.toFixed(2)
            grandTotal3.innerText = newGrandTotal.toFixed(2)
            couponInput3.value = ""
         }
    })   
    total.innerText = totalNum.toFixed(2)
    grandTotal3.innerText = totalNum.toFixed(2)
    const modalButton = document.querySelector(".modal-action")
    if(totalNum >0){
        makeButton3.disabled = false
    }

    modalButton.addEventListener("click", function(){
        discountPrice3.innerText = "0.00"
        grandTotal3.innerText = "0.00"
        total.innerText = "0.00"
        li.innerHTML = ""
       
        count =1
        totalNum =0
        window.scrollTo(0,0)
    })


})

// four-----------
four_card.addEventListener("click", function(){
    const fourName = document.getElementById("four-name")
    const four_p = document.getElementById("four-p")
    const fourNum = parseFloat(four_p.innerText)
    
    const fourNameValue = fourName.innerText
    const list_container = document.querySelector(".list-container")
    const li  = document.createElement("li")
    li.classList.add("font-semibold")
    li.classList.add("py-1")

    li.innerHTML = `${count}. ${fourNameValue}`
    list_container.appendChild(li)
    totalNum = totalNum + fourNum
    count++
    const couponButton3 = document.getElementById("coupon-btn")
    const makeButton3 =  document.getElementById("make-purchase")
    const couponInput3 = document.getElementById("coupone")
    const discountPrice3 = document.getElementById("discount-price")
    const discountValue3 = parseFloat(discountPrice3.innerText)
    const grandTotal3 = document.getElementById("after-total-price")
    const grandValue3 = parseFloat(grandTotal3.innerText)
   
    couponButton3.disabled = true
    makeButton3.disabled = true
    
    couponInput3.addEventListener("input", function(){
        if(couponInput3.value === "SELL200" && totalNum>=200){
            couponButton3.disabled = false
            
        }else{
            couponButton3.disabled = true
            
        }
    })
    couponButton3.addEventListener("click", function(){
        if(couponInput3.value === "SELL200" && totalNum>=200){
            
            const discount = totalNum * 20/100
            const newGrandTotal = totalNum - discount
            discountPrice3.innerText = discount.toFixed(2)
            grandTotal3.innerText = newGrandTotal.toFixed(2)
            couponInput3.value = ""
         }
    })   
    total.innerText = totalNum.toFixed(2)
    grandTotal3.innerText = totalNum.toFixed(2)
    const modalButton = document.querySelector(".modal-action")
    if(totalNum >0){
        makeButton3.disabled = false
    }

    modalButton.addEventListener("click", function(){
        discountPrice3.innerText = "0.00"
        grandTotal3.innerText = "0.00"
        total.innerText = "0.00"
        li.innerHTML = ""
       
        count =1
        totalNum =0
        window.scrollTo(0,0)
    })

})

// five --------
five_card.addEventListener("click", function(){
    const fiveName = document.getElementById("five-name")
    const five_p = document.getElementById("five-p")
    const fiveNum = parseFloat(five_p.innerText)
    
    const fiveNameValue = fiveName.innerText
    const list_container = document.querySelector(".list-container")
    const li  = document.createElement("li")
    li.classList.add("font-semibold")
    li.classList.add("pt-1")

    li.innerHTML = `${count}. ${fiveNameValue}`
    list_container.appendChild(li)
    totalNum = totalNum + fiveNum
    count++
    const couponButton3 = document.getElementById("coupon-btn")
    const makeButton3 =  document.getElementById("make-purchase")
    const couponInput3 = document.getElementById("coupone")
    const discountPrice3 = document.getElementById("discount-price")
    const discountValue3 = parseFloat(discountPrice3.innerText)
    const grandTotal3 = document.getElementById("after-total-price")
    const grandValue3 = parseFloat(grandTotal3.innerText)
   
    couponButton3.disabled = true
    makeButton3.disabled = true
    
    couponInput3.addEventListener("input", function(){
        if(couponInput3.value === "SELL200" && totalNum>=200){
            couponButton3.disabled = false
            
        }else{
            couponButton3.disabled = true
            
        }
    })
    couponButton3.addEventListener("click", function(){
        if(couponInput3.value === "SELL200" && totalNum>=200){
            
            const discount = totalNum * 20/100
            const newGrandTotal = totalNum - discount
            discountPrice3.innerText = discount.toFixed(2)
            grandTotal3.innerText = newGrandTotal.toFixed(2)
            couponInput3.value = ""
         }
    })   
    total.innerText = totalNum.toFixed(2)
    grandTotal3.innerText = totalNum.toFixed(2)
    const modalButton = document.querySelector(".modal-action")
    if(totalNum >0){
        makeButton3.disabled = false
    }

    modalButton.addEventListener("click", function(){
        discountPrice3.innerText = "0.00"
        grandTotal3.innerText = "0.00"
        total.innerText = "0.00"
        li.innerHTML = ""
        count =1
        totalNum =0
        window.scrollTo(0,0)
    })

})

// six ------------------
six_card.addEventListener("click", function(){
    const sixName = document.getElementById("six-name")
    const six_p = document.getElementById("six-p")
    const sixNum = parseFloat(six_p.innerText)
    
    const sixNameValue = sixName.innerText
    const list_container = document.querySelector(".list-container")
    const li  = document.createElement("li")
    li.classList.add("font-semibold")
    li.classList.add("pt-1")

    li.innerHTML = `${count}. ${sixNameValue}`
    list_container.appendChild(li)
    
    totalNum = totalNum + sixNum
    count++
    const couponButton3 = document.getElementById("coupon-btn")
    const makeButton3 =  document.getElementById("make-purchase")
    const couponInput3 = document.getElementById("coupone")
    const discountPrice3 = document.getElementById("discount-price")
    const discountValue3 = parseFloat(discountPrice3.innerText)
    const grandTotal3 = document.getElementById("after-total-price")
    const grandValue3 = parseFloat(grandTotal3.innerText)
   
    couponButton3.disabled = true
    makeButton3.disabled = true
    
    couponInput3.addEventListener("input", function(){
        if(couponInput3.value === "SELL200" && totalNum>=200){
            couponButton3.disabled = false
            
        }else{
            couponButton3.disabled = true
            
        }
    })
    couponButton3.addEventListener("click", function(){
        if(couponInput3.value === "SELL200" && totalNum>=200){
            
            const discount = totalNum * 20/100
            const newGrandTotal = totalNum - discount
            discountPrice3.innerText = discount.toFixed(2)
            grandTotal3.innerText = newGrandTotal.toFixed(2)
            couponInput3.value = ""
         }
    })   
    total.innerText = totalNum.toFixed(2)
    grandTotal3.innerText = totalNum.toFixed(2)
    
    const modalButton = document.querySelector(".modal-action")
    if(totalNum >0){
        makeButton3.disabled = false
    }

    modalButton.addEventListener("click", function(){

        discountPrice3.innerText = "0.00"
        grandTotal3.innerText = "0.00"
        total.innerText = "0.00"
        li.innerHTML = ""
        count =1
        totalNum =0
        window.scrollTo(0,0)
    })

})


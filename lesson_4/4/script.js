let arrays=[{
    name: "Женя",
    order: true
    },
    {
    name: "Кристина",
    order: true
    },
    {
    name: "Павел",
    order: false
    },
    {
    name: "Виолетта",
    order: false
    },
    {
    name: "Костя",
    order: true
    }];

    let ul=document.querySelector('ul')

for(let array of arrays){
    let li=document.createElement('li')
    if(array.order==true){
    li.textContent="Клиент "+array.name + " оплатил заказ"
}else{
     li.textContent="Клиент "+array.name + " отменил заказ"

}
   
    ul.appendChild(li)
}

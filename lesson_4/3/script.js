let select=document.querySelector('select')
    for(i=1960; i<2021; i++){
        let option=document.createElement('option')
    option.textContent=i;
        select.appendChild(option)
    }

const top__free__watch__colors =  document.querySelectorAll('.img-cont img');

top__free__watch__colors.forEach((image,index)=>{
    let lrg__img__to__be__display = index%4;
    image.addEventListener('click',(e)=>{
        console.log('clicked')
    
        let all__large_view__images = image.parentElement.parentElement.parentElement.childNodes[1].children;

        console.log(all__large_view__images)
        for(let i = 0 ;  i   <  all__large_view__images.length ; i++){
            all__large_view__images[i].classList.remove("active-top-free-img")
        }
        all__large_view__images[lrg__img__to__be__display].classList.add("active-top-free-img")
    })
})
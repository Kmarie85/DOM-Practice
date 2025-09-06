const   promoApplication = () => {

    let seasonalPromo = document.querySelector("#seasonal-promo")
    let isPromoApplied = false;




    const changeTheme = () => {
        isPromoApplied = !isPromoApplied
        document.body.classList.toggle("seasonal-promo")

        if(isPromoApplied) {
            document.querySelector("#seasonal-promo-img").setAttribute(src, "Assetts/images/pexels-chevanon-302896.jpg")
        } else {
        document.querySelector("#seasonal-promo-img").setAttribute("src", "./Assetts/images/pexels-chevanon-312418.jpg")
        }
    }

    seasonalPromo.addEventListener("click", ()=> {
        changeTheme()
    })
}
// &&(AND) ||(OR) !(NOT)

promoApplication()
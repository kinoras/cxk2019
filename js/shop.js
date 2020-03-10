let shop, container_id;
//to get shop's data
$.ajax({
    url: "https://mobile-web-design-skill-competition.netlify.com/shops.json",
    error: (data) =>{
        // things to do when cant get the json file
        console.log("error!");
    },
    success: (data)=>{
        // here is what to do if the json file is sucessfully got
        console.log("success!");
        for(i in data){
            shop = data[i]
            $("main").append(`
            <div class="container" id="container_${i}">
                <div class="shop front">
                    <img class="shop_p" src="${shop.photo_url}" alt="${shop.name}">
                    <h3 class="shop_name">${shop.name}</h3>
                    <img src="./svg/more.svg" alt="more" class="more"  id="${i}">
                </div>
                <div class="shop back">
                <iframe width="300" height="300" class="shop_p" frameborder="0" style="border:0" 
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAwUVrH16tZFkx247yZKV4eTLF1vuAx_qQ&q=${shop.latitude},${shop.longitude}&zoom=19" allowfullscreen>
                </iframe>
                    <h3 class="shop_name">${shop.address}</h3>
                    <img src="./svg/more.svg" alt="more" class="more"  id="${i}">
                </div>
            </div>
            `);
        };
    },
});
// hind the picture and shop name, and show the map and the address
$(document).ready(()=>{
    $("main").on("click", ".more", function(){
        container_id = $(this).attr("id");
        // check the status of the shop-card
        if ( !$("#container_" + container_id).hasClass("flipped") ){
            // if the card clicked is not active, make others non-active and ativate itself
            $(".container").removeClass("flipped");
            $("#container_" + container_id).addClass("flipped");
        } else {
            // if it has been activated, just make it into the non-active status
            $(".container").removeClass("flipped");
        }
        
    });
});
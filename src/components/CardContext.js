
function cardcont(prop){
    const cart = prop.cart;

    return(
    <div class="card-context">
       <div class="dark-bg"></div>
            <h2>{cart.title}</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Sapiente tenetur dicta cupiditate.
        </p>
        <button>Ver más</button>
    </div>

    )

}

export default cardcont;
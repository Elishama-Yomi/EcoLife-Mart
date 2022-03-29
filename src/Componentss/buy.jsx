import React, { useState} from 'react';

const products = [
    { id: 1, category: "Shirts", name: "Twill Shirt", description: "Organic Cotton Twill Men's Long Sleeve Button Shirt", size: "XL", color: "green", amount: 6500, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1438kHQp6JHScv_2n-M82xkhE4keXbfM6"},
    { id: 2, category: "Shirts", name: "Kein No Internet Shirt", description: "Organic Embroidered Women's High Quality T-shirt", size: "M", color: "white", amount: 3500, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1HPzhm5GT0sui_xrwwsMp8MHq8Sw83084"},
    { id: 3, category: "Shirts", name: "Hearts Shirt", description: "Eco-friendly Female Shirt with Hearts Print", size: "M", color: "white, red", amount: 5500, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1iGqRXUnK-0-PGhUYswd4eyb9H36VUzeJ"},
    { id: 4, category: "Shirts", name: "Sew Cool T-Shirt", description: "Sustainable Shirt", size: "L", color: "white", amount: 3000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1dgPplbcx5yyhl06sh00qeG57es0A-wu9"},
    { id: 5, category: "Shirts", name: "Long Sleeve Blouse", description: "Organic 100% Linen Women Shirt", size: "S", color: "brown", amount: 6000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1BLgGcRua0u6DqTNGRzs1fCjOnPeQ_-q0"},
    { id: 6, category: "Jackets", name: "Thermore Jacket", description: "Eco-friendly Thermore Padded Men's Jacket", size: "M", color: "Black", amount: 10000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=12A4CDFkwYCjZUXHQvlxtOaEGauV8wCLL"},
    { id: 7, category: "Jackets", name: "Brown Jacket", description: "Eco-friendly Unisex puffer jacket", size: "L", color: "brown", amount: 12000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1sJIzarA1_Vq5ac3orvqDiiJyIGBy4NAM"},
    { id: 8, category: "Jackets", name: "Female Winter Coat", description: "Ethical Winter Coat Women's Wear", size: "L", color: "green", amount: 17000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1q4-wgHZSleKpUP0QPidOXWIPFjMvybAd"},
    { id: 9, category: "Jackets", name: "Vegan Cotton Blazer", description: "Stylish Sustainable Female Blazer with a Long Straight Silhouette", size: "S", color: "orange", amount: 20000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=154ZzJG6GwDOAUrmw9qXTI_C3dIiSp3M5"},
    { id: 10, category: "Jackets", name: "Italian Vee Blazer", description: "Men's Designer Semi-Formal Blazer", size: "M", color: "grey", amount: 25000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=18CGzjaY75s0lsYOJBwAL5nsV4gew5xmP"},
    { id: 11, category: "Skirts", name: "Spandex Knee-slit Skirt", description: "Eco-friendly cotton spandex pencil women skirt", size: "S", color: "grey", amount: 4000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1H5F08CptJdikNKHxmfvErrThbIRyrqlB"},
    { id: 12, category: "Skirts", name: "Vaude Sesvenna Skirt", description: "Eco-friendly Women's Reversible Skirt", size: "L", color: "black", amount: 3000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=17DmwVY_6lGoFEngvgAHpgEpuTSGHCwZ9"},
    { id: 13, category: "Pants", name: "Cotton Chinos Pants", description: "Organic Men Chinos Trousers", size: "M", color: "green", amount: 5500, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1rjpdk2vAQeaBwUFIiCZOLrztbpdtt8Wl"},
    { id: 14, category: "Pants", name: "Women Bell Pants", description: "Stylish chic Sailor Pierrot pants, made of Hemp and organic cotton", size: "L", color: "brown", amount: 4000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1MYcPDw2SHbeUpkteUJnmdXvwGesexSjF"},
    { id: 15, category: "Pants", name: "Flores Pants", description: "Women Patterned Lounge Wear Trousers", size: "M", color: "Purple", amount: 5000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1xc_HGvmKA6-Dugt0nfWYOahhCfFE11cb"},
    { id: 16, category: "Dresses", name: "PopSugar Costume Gown", description: "Recycled Newspaper women's dress", size: "M", color: "mixed", amount: 35000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1Cq1kmTME9CvEyHhjICOSjRevQ4xAaeDT"},
    { id: 17, category: "Bags", name: "Colorful Shoulder Bag", description: "Landscape painting print casual tote bag", size: "One size fits all", color: "white", amount: 11000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1Xa2PtUrtYWz3dbIQ_8QPWgs8iZvzCuKn"},
    { id: 18, category: "Bags", name: "Bamboo Handbag", description: "Handmade Thai bamboo handbag", size: "S", color: "brown", amount: 15000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=13fwiVbMxmGilqbDLqTD_0nlzrRuiz8qF"},
    { id: 19, category: "Bags", name: "Sangeetha Flowery Bag", description: "Women Jute Twist Lock Handbag", size: "M", color: "brown", amount: 10000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=11ato5-OKHbdcqCCEMwpJWrc9riu6boUp"},
    { id: 20, category: "Bags", name: "Reusable Jute Bag", description: "Heavy Duty foldable handicraft bag with comfortable and durable handles", size: "L", color: "brown", amount: 8000, currency: "Naira", currencySymbol: "₦", img: "https://drive.google.com/uc?export=view&id=1i0AVP277xgwZTrSre6UGwxh1OHQFg9xK"},
]



function Buy(){
    
    const [cart, setCart]= useState([])
    const [cartTotal, setCartTotal] = useState (0)
    console.log(cart);
   const handleCartItems = (item) => {
        cart.push(item);
        setCart(cart);
        const iniVal = 0;
        let altCart = cart;
        const pTotal = altCart.reduce((total, item) => total + item.amount, iniVal);
        setCartTotal(pTotal)
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                   
                }
            })
            
            setCart([...cart])
            const iniVal = 0;
        let altCart = cart;
        const pTotal = altCart.reduce((total, item) => total + item.amount, iniVal);
        setCartTotal(pTotal)
           
        }
    }

    const emptyCart = id =>{
        if(window.confirm("Do you want to empty your cart?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index)
                }
            })
            
            setCart([...cart])
            const iniVal = 0;
        let altCart = cart;
        const pTotal = altCart.reduce((total, item) => total + item.amount, iniVal);
        setCartTotal(pTotal)
           
        }
    }

    return (
        <>
                <div className="boxy" style={{ display: "flex", flexWrap: "wrap" }}>
               {products && products.map((item, i ) =>{
        
                return(
               <div className="box" key={i} style={{ padding: "25px", margin: "30px", backgroundColor:"ivory" }}>
                <h3> {item.name} </h3>
                <img src={item.img} alt="loading..." />
                <p> {item.description} </p>
                <span> Size: {item.size} </span>
                <div style={{ display: "block", padding: "3px" }}>Price: {item.currencySymbol} {item.amount} </div>
                <button onClick={() => handleCartItems(item)}> Add to Cart </button>
               </div>
                    )
                })}
               </div>

            

            <div className="cart cart-section" id="cart" style={{ margin: "30px" }}>
                        <div >
                        <h2>My Cart</h2>
                            {cart && cart.map((cartItem, i) => {
                                return (
                                   
                                    <div key={i}>
                                        <img src={cartItem.img} alt="loading..." />
                                        <span>{cartItem.name}</span> | {" "}
                                    
    <button className="delete" onClick={() => emptyCart(products._id)}> Empty Cart </button>
                                        
                                        <span>{cartItem.currencySymbol} {cartItem.amount}</span>
                                        <div style={{ display: "flexbox" }}>
                                        

                                        <button className="box1" onClick={() => handleCartItems(cartItem)}> + </button>
                                        <button className="box1" onClick={() => removeProduct(products._id)}> X </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
<br></br>
                        <span style={{ fontSize: "30px" }}>Total: {"₦"}{cartTotal}</span>
                    </div>  
    


                </>
                )
}




                export default Buy;




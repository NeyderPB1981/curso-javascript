function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  console.log(calcularPrecioConDescuento(1900,15));
  
  const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
  ];

     
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    //let descuento;
  
   /* switch(couponValue) {
      case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
      break;
      case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
      break;
      case coupons[2]: // "es_un_secreto"
        descuento = 25;
      break;
    }*/
    const isCouponValueValid = function (coupon) {
      return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
      alert("El cupón " + userCouponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
    
  }

  



  
  
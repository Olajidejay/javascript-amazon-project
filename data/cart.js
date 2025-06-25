export const cart = [];

export function addToCart (productId) {
    let matchingItem; 

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
       matchingItem = cartItem;
      } 
    });

    if (matchingItem) {
      matchingItem.quantity += 1; // Increment quantity if item already exists  
    } else {
      cart.push({
      productId: productId,
      quantity: 1 // Default quantity, can be adjusted later
    });
    }
}
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line react/prop-types
function OrderDetails({itemsInBag}){

    function calculateTotal(){
        let orderTotal = 0;
        itemsInBag.forEach(item => orderTotal += item.price * item.quantity);
        return orderTotal.toFixed(2)
    }
    
    return(
        <>
         <section className="summary">
                <strong>Order Details</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total: R$ {calculateTotal()}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {itemsInBag.map(item => 
                        <tr>
                            <td>{item.quantity} x {item.name}</td>
                            <td>R${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    
                    )}
                    </tbody>
                </table>
            </section>
        
        </>
    )
}
export default OrderDetails
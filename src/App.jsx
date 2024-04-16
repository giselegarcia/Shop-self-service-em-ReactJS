import './App.css';
import OrderDetails from './components/OrderDetails';
import Item from './components/Item';
import {useState} from 'react'

function App() {

    const [items, setItems] = useState( [
        {
            
            id: 1, 
            photo: "aquarius.PNG",
            name: "Aquarius",
            price: 39.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            
            id: 2, 
            photo: "cancer.PNG",
            name: "Cancer",
            price: 39.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            
            id: 3, 
            photo: "escorpio.PNG",
            name: "Escorpio",
            price: 39.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 4, 
            photo: "gemini.PNG",
            name: "Gemini",
            price: 39.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 5, 
            photo: "leo.PNG",
            name: "Leo",
            price: 39.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 6, 
            photo: "Pisces.PNG",
            name: "Pisces",
            price: 39.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 7, 
            photo: "sagittarius.PNG",
            name: "Sagittarius",
            price: 39.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 8, photo: "taurus.PNG",
            name: "Taurus",
            price: 39.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 9, 
            photo: "virgo.PNG",
            name: "Virgo",
            price: 39.99,
            active: false,
            quantity: 1, 
            isInBag: false
        }
    ]);
    const itemsInBag = items.filter(item => item.isInBag);

    function selectHandler(id){
         let item = items.filter(item => item.id === id)[0];
         item.isInBag = !item.isInBag;
         setItems(items.map(el =>  el.od === id ? item : el));
         console.log(item)
    }
    function quantityHandler(e, id, increment){
        e.stopPropagation();
        let item = items.filter(item => item.id === id)[0];
        item.quantity += increment;
        setItems(items.map(el =>  el.od === id ? item : el));
      }

    return ( 
        <>
            <section className="items">
                <h4>Canecas dos signos</h4>

                {items.map((item) => 
                    <Item 
                    selectProduct={(id)=> 
                    selectHandler(id)}
                    changeQuantity= {(e, id, increment)=> quantityHandler(e, id, increment)}
                    item={item} 
                    key={item.id}
                    />
                
                )}

                
            </section>
            {itemsInBag.length > 0 && <OrderDetails itemsInBag={itemsInBag}/>}
        </>
    );
}

export default App

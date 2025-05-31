import { LightningElement, track } from 'lwc';

export default class ShoppingCart extends LightningElement {
    @track products = [
        { id: '101', name: 'Wireless Mouse', price: 25.99, quantity: 2 },
        { id: '102', name: 'Bluetooth Keyboard', price: 45.00, quantity: 1 },
        { id: '103', name: 'HD Monitor', price: 199.99, quantity: 1 }
    ];
}
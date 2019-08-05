import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    //Getting the items from de cartService
    this.items = this.cartService.getItems();
    
    //During checkout, the app will prompt the user for a name and address.
    //So that you can gather that information later, set the checkoutForm 
    //property with a form model containing name and address fields, 
    //using the FormBuilder#group() method.
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit() {
  }

  //In cart.component.ts, define an onSubmit() method to process 
  //the form. Use the CartService#clearCart() method to empty 
  //the cart items and reset the form after it is submitted.
  onSubmit(customerData) {
    // Process checkout data here
    console.log('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}

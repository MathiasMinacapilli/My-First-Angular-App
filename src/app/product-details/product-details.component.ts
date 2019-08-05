import { Component, OnInit } from '@angular/core';
/* ActivatedRoute provides access to information about a route 
associated with the component that is loaded in an outlet. */
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    //paramMap: An Observable that contains a map of the required 
    //and optional parameters specific to the route. 
    //The map supports retrieving single and multiple values 
    //from the same parameter.
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}

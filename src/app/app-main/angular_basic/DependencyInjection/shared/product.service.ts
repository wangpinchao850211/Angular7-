import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProduct(): Product {
    return new Product(0, 'iphone7', 5089, '最新款手机')
  }
}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public desc:string
  ) {}
}

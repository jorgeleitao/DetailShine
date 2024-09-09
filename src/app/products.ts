export class Products {
   brand: string;
   category: string;
   name: string;
   quantity: string;
   image: string;



  constructor(brand: string, category: string, name: string, quantity: string, image: string ){
    this.category = category;
    this.brand = brand;
    this.name = name;
    this.quantity= quantity;
    this.image = image;

  }
}

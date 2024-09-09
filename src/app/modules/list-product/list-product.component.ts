import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit{

  constructor(private products: ProductsService){ }

  public produtos : Products[] | undefined;


  ngOnInit(){
    this.products.getProducts()
      .subscribe(
        retorno => {
          this.produtos = retorno.map( item =>{
            return new Products(
            item.category,
            item.brand,
            item.name,
            item.quantity,
            item.image
            )
          })
        }
      )
  }

}

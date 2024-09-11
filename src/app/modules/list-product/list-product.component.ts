import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { ProductsService } from 'src/app/services/products.service';
import { SubSink } from 'subsink';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit{
calcularCusto() {
throw new Error('Method not implemented.');
}
irParaCalculadora() {
throw new Error('Method not implemented.');
}

  constructor(
    private products: ProductsService,

  ){ }

  public produtos : Products[] | undefined;
  private subSink = new SubSink();


  ngOnInit(){
  }
  ngOnDestroy(){
    this.subSink.unsubscribe();
  }

  serviceSubscription(){
    this.subSink.add(
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
    )
  }
}

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


  constructor(
    private productsService: ProductsService,

  ){ }

  public produtos : Products[] = [];
  private subSink = new SubSink();


  ngOnInit(){
    this.serviceSubscription()

  }
  ngOnDestroy(){
    this.subSink.unsubscribe();
  }

  serviceSubscription(){
    this.subSink.add(
      this.productsService.getProducts()
      .subscribe(
        retorno => {
          console.log(retorno)
          this.produtos = retorno
          }
        )
    )
  }
}

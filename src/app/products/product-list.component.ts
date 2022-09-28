import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component(
    {
        templateUrl: './product-list.component.html'
    }
)

export class ProductListComponent implements OnInit{
    pageTitle = "Product List"
    imageWidth = 50
    imageHeight = 2
    showImage = false
    products : IProduct[] = []
    filteredProducts : IProduct[] = []
    errorMessage = ""
    sub!: Subscription;

    constructor(private productService : ProductService){

    }

    ngOnInit(): void {
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products
                this.filteredProducts = this.products  
            },
            error: err => this.errorMessage = err
        })
    }

    noOnDestroy(){
        this.sub.unsubscribe()
    }

    toggleImage(){
        this.showImage = !this.showImage;
    }

    private _listFilter = ""
    get listFilter(){
        return this._listFilter; 
    }
    
    set listFilter(value ){
        this._listFilter = value
        this.filteredProducts = this.performFilter(value)
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase()
        return this.products.filter((product: IProduct) => 
            product.Name.toLocaleLowerCase().includes(filterBy))
    }
}
import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpResponse } from "@angular/common/http"
import { catchError, Observable, onErrorResumeNext, tap, throwError } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class ProductService{

    private productListUrl = "assets/api/products.json" 

    constructor(private http: HttpClient){

    }

    getProducts(): Observable<IProduct[]>{
        var products = this.http.get<IProduct[]>(this.productListUrl)
        .pipe(
            tap(data => console.log("All", JSON.stringify(data))),
            catchError(this.handleError));
        return  products;
    }

    private handleError(err : HttpResponse<any>){
        // let errorMessage = ""
        // if(err.error instanceof ErrorEvent)
        //     errorMessage = err.error.errorMessage
        // else
        //     errorMessage = 'Status ${err.status} error ${err.message}'
        
        let errorMessage = err

        console.error(errorMessage);
        
        return throwError(() => errorMessage)    
    }
}
import {Component, OnInit} from "angular2/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";
import {Router, RouteParams} from "angular2/router";
import {StarComponent} from "../shared/star.component";

@Component({
	templateUrl: 'app/products/product-detail.component.html',
	directives: [StarComponent]
})
export class ProductDetailComponent implements OnInit {

	pageTitle: string = 'Product Details';
	product: IProduct;
	errorMessage: string;

	constructor(private _productService: ProductService, private  _router: Router, private  _routeParams: RouteParams) { }

	ngOnInit() {
		if(!this.product) {
			let id = +this._routeParams.get('id');
			this.getProduct(id);
		}
	}

	getProduct(id: number) {
		this._productService.getProduct(id)
			.subscribe(
				product => this.product = product,
				error => this.errorMessage = <any>error);
	}

	onBack(): void {
		this._router.navigate(['Products']);
	}
}
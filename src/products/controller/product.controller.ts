import { Controller, Get } from '@nestjs/common';
import {ProductService} from '../../products/service/product.service';
var fs = require("fs");

@Controller('product')
export class ProductController {


    constructor(private readonly ProductService: ProductService){
    }


    @Get('GEFAProdlinks')
    getGEFAProductLinks(){
        return this.ProductService.getProdLinks();
    }

    @Get('GEFAProdInfos')
    getGEFAProdInfo(){
        return this.ProductService.getProdInfo(); 
    }

    
    @Get('SamsonCategoryLinks')
    getSamsonCategoryLinks(){
        return this.ProductService.getSamsonProdCategoryLinks();
    }

    @Get('SamsonProdLinks')
    getSAMSONProdLinks(){
        return this.ProductService.getSamsonProdLinks();
    }

    @Get('SamsonProdInfo')
    getSAMSONProdInfo(){
       
        return this.ProductService.getSamsonProdInfo();
    }
    
}

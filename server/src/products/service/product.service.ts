import { Injectable } from '@nestjs/common';
import XRay = require('x-ray');
var fs = require("fs");


@Injectable()
export class ProductService {

    constructor(){}

    public x: XRay.Instance = XRay({
        filters: {
            trim: function (value) {
                return typeof value === 'string' ? value.trim() : value
            },
            replace: function(value){
                return typeof value === 'string' ? value.replace(/\n/g, '') : value
            },
            reverse: function (value) {
                return typeof value === 'string' ? value.split('').reverse().join('') : value
            },
            slice: function (value, start:any , end:any) {
                return typeof value === 'string' ? value.slice(start, end) : value
            }
        }
    });

    getProdLinks(){
        const url = 'https://www.gefa.com/en/products/';

        const JsonProductLinks = this.x(url, '.browse-view .product',[{
            link: 'h2 a@href',
            title: 'h2'
        }]).paginate('.vm-pagination.vm-pagination-bottom .pagination-next a@href')
        .write('Products_JsonFiles/GEFAProdLinks.json')

        return JsonProductLinks;
    }
    
    public getProdInfo(){

        var title: any;
        var contents = fs.readFileSync("Products_JsonFiles/GEFAProdLinks.json");
        var jsonContent = JSON.parse(contents);

        for (let index = 0; index < jsonContent.length; index++) {
            
            const element = jsonContent[index];
            title = element.link.split('/').pop();

            this.x(element.link, '.productdetails', [{
                title : '[itemprop=name]',
                category : '.back-to-category a@title',
                desc : '.product-description ul',
            }]).write('Products_JsonFiles/GefaProducts/'+index+'-'+title+'.json')

            if(index == jsonContent.length - 1){
                return 'GEFAProductsInfo called';
            }
        }
    }


    getSamsonProdCategoryLinks(){
        const url = 'https://www.samson.de/en/products-applications/product-selector/';

        this.x(url, '.top-content .product-group-nav .product-group-nav--item', [{
            category : 'a',
            link : 'a@href'
        }]).write('Products_JsonFiles/SamsonCategoryLinks.json')

        return "getSamsonProduct category links called";
    }
    getSamsonProdLinks(){
        var contents = fs.readFileSync("Products_JsonFiles/SamsonCategoryLinks.json");
        var jsonContent = JSON.parse(contents);

        for (let index = 0; index < jsonContent.length; index++) {

            const element = jsonContent[index];

            this.x(element.link, 'div#tx-solr-search .results-entry' , [{
                link: 'a@href',
            }]).paginate('div#solr-pagination .pagination .next a@href')
            .write('Products_JsonFiles/SamsonProdLinksOrderbyCategory/'+index+'_'+element.category+'_Links.json')
        }
        return 'getSamsonProdLinks Called';
    }

    getSamsonProdInfo(){
        var title:any;
        var files = fs.readdirSync("Products_JsonFiles/SamsonProdLinksOrderbyCategory/")
        files.forEach(file => {
            var contents = fs.readFileSync('Products_JsonFiles/SamsonProdLinksOrderbyCategory/'+file);
            var jsonContent = JSON.parse(contents);
            for (let index = 0; index < jsonContent.length; index++) {

                const element = jsonContent[index];
                title = element.link.split('/');

                const SamsonProdInfo = this.x(element.link, 'body', [{
                    category: '.gray-background h2',
                    title: '.container .tx-samson-catalog .product-card h1',
                    desc : ['.container .tx-samson-catalog .product-card div .p-usages']
                }]).write('Products_JsonFiles/SamsonProducts/'+index+'_'+title[6]+'_'+title[7]+'.json')
                
                if(index == jsonContent.length - 1){
                    return SamsonProdInfo;
                }
            
            }
        });

        /**/
    }

    
}

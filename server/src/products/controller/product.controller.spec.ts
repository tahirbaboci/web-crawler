import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from '../service/product.service';
import { async } from 'rxjs/internal/scheduler/async';

describe('Product Controller', () => {
  let module: TestingModule;
  
  
  let productService: ProductService;
  let productController: ProductController;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    productController = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);

  });

  describe('getLinks', () => {

    it('should return all links', async () => {
      const result = {};
      jest.spyOn(productService, 'getProdLinks').mockImplementation(() => result);

      expect(await productService.getProdLinks()).toBe(result);
    });

  });

  //it('should be defined', () => {
    //const controller: ProductController = module.get<ProductController>(ProductController);
    //expect(controller).toBeDefined();
  //});
});

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


  describe('getProdInfos', () => {

    it('should return products Info', async () => {
      const result = {};
      jest.spyOn(productService, 'getProdInfo').mockImplementation(() => result);

      expect(await productService.getProdInfo()).toBe(result);
    });

  });

  describe('getSamsonCategoryLinks', () => {

    it('should return the links of categories', async () => {
      const result = {};
      jest.spyOn(productService, 'getSamsonProdCategoryLinks').mockImplementation(() => result);

      expect(await productService.getSamsonProdCategoryLinks()).toBe(result);
    });

  });

  describe('getSamsonProdLinks', () => {

    it('should return the links of the Samson products', async () => {
      const result = {};
      jest.spyOn(productService, 'getSamsonProdLinks').mockImplementation(() => result);

      expect(await productService.getSamsonProdLinks()).toBe(result);
    });

  });

  describe('getSamsonProdInfo', () => {

    it('should return the information of all products', async () => {
      const result = {};
      jest.spyOn(productService, 'getSamsonProdInfo').mockImplementation(() => result);

      expect(await productService.getSamsonProdInfo()).toBe(result);
    });

  });

  //it('should be defined', () => {
    //const controller: ProductController = module.get<ProductController>(ProductController);
    //expect(controller).toBeDefined();
  //});
});

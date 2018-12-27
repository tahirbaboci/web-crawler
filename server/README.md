<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<p align="center">
  <a href="https://isarbits.com/" target="blank"><img src="https://isarbits.com/img/isarbits-logo.png" width="320" alt="isarbits Logo" /></a>
</p>


## Description

this is a coding challange given by isarbits for Software Developer position.
The topic was to build  a  crawler, which extracts products information from the the two following sites and stores found data in a normalized form:
  - https://www.gefa.com/en/products/
  - https://www.samson.de/en/products-applications/product-selector/

## Installation

```bash
$ npm install
$ npm install x-ray
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Solution

To get the Products from [gefa](https://www.gefa.com/en/products/):
```
1- Get product links: http://localhost:3000/product/GEFAProdlinks
2- Get all product's information : http://localhost:3000/product/GEFAProdInfos
```

To get the Products from [Samson](https://www.samson.de/en/products-applications/product-selector/):
```
1- Get category links: http://localhost:3000/product/SamsonCategoryLinks
2- Get all product's links : http://localhost:3000/product/SamsonProdLinks
3- Get all Product's Information : http://localhost:3000/product/SamsonProdInfo
```


## Resources



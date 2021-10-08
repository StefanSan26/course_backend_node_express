const express = require('express');
const ProductsService = require('../services/products.services');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schemas/products.schemas');

const router = express.Router();

const service = new ProductsService();
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

//error comun: Enpoints estaticos que entran en conflicto con Endpoints dinamicos
//Solucion: Ubicarlos antes de los endpoints dinamicos
router.get('/filter', (req, res) => {
  res.send = 'soy un filter';
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

//Para recibir el POST
router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const create = await service.create(body);
    res.status(201).json(create);
  }
);

//Para hacer el Patch
router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const update = await service.update(id, body);
      res.json(update);
    } catch (error) {
      next(error);
    }
  }
);
//Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await service.delete(id);
  res.json(deleted);
});

module.exports = router;

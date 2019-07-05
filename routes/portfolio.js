const express = require('express');
const router = express.Router();
const PortfolioController = require('../controller/portfolioController');

router.post('/api/portfolio/add',PortfolioController.addPortfolio);
router.get('/api/portfolio',PortfolioController.getPortfolios);
router.get('/api/portfolio/:portfolioId',PortfolioController.getPortfolio)
module.exports=router;
const express = require('express');
const router = express.Router();
const PortfolioController = require('../controller/portfolioController');

router.post('/api/portfolio/add',PortfolioController.addPortfolio);

router.post('/api/portfolio/edit/:portfolioId',PortfolioController.editPortfolio);
router.get('/api/portfolio/delete/:portfolioId',PortfolioController.deletePortfolio);
router.get('/api/portfolio/:portfolioId',PortfolioController.getPortfolio);

router.get('/api/portfolio',PortfolioController.getPortfolios);
module.exports=router;
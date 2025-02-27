const express = require('express');
const router = express.Router();
const homePageController = require("../../controllers/admin/homePageController");

router.post('/addHomePageContent', homePageController.addUpdateHomePage);
router.get('/getHomePageContent', homePageController.getHomePageContent)
router.post('/addFrontendHomePageContent', homePageController.addFrontendHomePageContent);
router.post('/delete-banner', homePageController.deleteImage);

module.exports = router;

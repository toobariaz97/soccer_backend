const express = require('express');
const { getTeams } = require('../controller/teamsController');
const router = express.Router();

router.get('/teams',getTeams)

module.exports=router
const express = require("express")
const router = express.Router()
router.get('/',(req,res)=>{
	res.render('events/index')
})

router.get('/id',(req,res)=>{
	res.render('events/show')
})

module.exports = router
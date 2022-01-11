const express = require("express");
const stripe = require("stripe");
const { protectRoute } = require("../controller/authController");
const planModel = require("../model/plan");
const userModel = require("../model/user");
const stripeObj = stripe("pk_test_51Jw3ZNSHiXulIbukZ3aeHNyaLO4k6u5oB7UmuSVgzMrUTdX1YvCsouVJRyra3brhHbJYRcA4yZOS7cwiGT4TzoQ3002OD6Wfl7");
const bookingRouter = express.Router();

bookingRouter.post("/createPaymentSession", async function(req, res){
    try{
        const { planId, userId } = req.body;
        const plan = await planModel.findById(planId);
        const user = await userModel.findById(userId);

        //session object
        const session = await stripeObj.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
              {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: plan.name,
                  },
                  unit_amount: plan.price * 100,
                },
                quantity: 1,
              },
            ],
            mode: "payment",
            success_url: "https://localhost:5000/",
            cancel_url: "https://localhost:5000/",
          });
          res.json({
            session,
          });
    }
    catch(err){
        res.json({
            message:"failed to create session",
            err
        })
    }
})

bookingRouter.post("/createPaymentSession", protectRoute )


module.exports.bookingRouter = bookingRouter;
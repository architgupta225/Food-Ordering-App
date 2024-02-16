const crypto = require("crypto");

export function POST(req){
    const {razorpay_order_id , razorpay_payment_id, razorpay_signature} = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign  = crypto.createHmac("sha256", process.env.RAZORPAY_SK)
    .update(sign.toString())
    .digest("hex")

    if(expectedSign === razorpay_signature){
        return Response.json(true)
    }
    return Response.json(false)
}
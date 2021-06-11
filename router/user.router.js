const User = require('../model/User');
const express = require('express');
const router = express.Router()


router.post('/create', async (req, res) => {
    try {
        const user = new User({
            author: req.body.author,
            course: req.body.course,
            price: req.body.price,
            rating: req.body.rating
        })
        const result = await user.save();
        res.status(201).json({
            user: result
        })
    } catch (err) {
        res.status(400).json({
            message: err
        })
    }
})

router.get('/getall', async (req, res) => {
    const user = await User.find();

    //Multiple sort and filter the Array of object based on the query params

    //Sorting 
    // .sort({ author: 1 }) //sort author in ascending order
    // .sort({ author: -1 }) //sort author in descending order

    //filter
    // .find({ author: 'abcd', price: 35 })
    // .find({ price: { $gte: 100, $lte: 200 } })
    // .find({ price: { $in: [50, 200] } })
    // .find()
    // .or([{ author: 'ghi' }, { price: 23 }])
    // .find()
    // .and([{ author: 'efgh' }, { price: 200 }])
    // .find({ author: /^efgh/i })
    // .find({ author: /abcd$/i })
    // .find({ author: /.*ab.*/i })
    // .count()
    // .select({ author: 1 })

    // Along with params limit and skip the records
    //.skip(4) //it skip the first 4 element for pagination
    //.limit(3) //it display first 3 element     

    res.status(200).json({
        message: user
    })
})





module.exports = router
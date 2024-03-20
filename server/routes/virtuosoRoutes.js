import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req,res) => {
    res.send('Hello from VirtuosoAI!');
});

// to generate the image from API Called
router.route('/').post(async (req, res) => {
    try{
        const {prompt} = req.body;
        const aiResponse = openai.createImage({
            model: "dall-e-2",
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: {type:'b64_json'},
          });
    // to get image out of it 
    const image = aiResponse.data.data[0].b64_json;

    res.status(200).json({ photo : image });
    } catch(error){
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
    }
})
export default router;


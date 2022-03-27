const router = require("express").Router();
// var atob = require('atob');
// const Blob = require('node-blob');
const { removeBackgroundFromImageUrl, removeBackgroundFromImageFile, RemoveBgResult } = require("remove.bg")

router.post("/", async (req, res) => {
    console.log(req.body)
    const url = `${req.body.url}`;
    const outputFile = `${__dirname}/out/output1.png`;
    console.log(url);
    removeBackgroundFromImageUrl({
        url,
        apiKey: "Cg1nucvhXuJTH8XX5oPWBm7K",
        size: "regular",
        type: "person",
        bg_color: req.body.backgroundColor,
        bg_image_url: req.body.backgroundUrl,
        outputFile
    }).then((result) => {
        console.log(`File saved to ${outputFile}`);
        const base64img = result.base64img;
        return res.status(200).send({ output: base64img })
    }).catch((er) =>
    {
        console.log(er)
        return res.status(400).send({ error: er })
    })

})

module.exports = router;
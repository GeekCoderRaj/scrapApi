const express =  require("express")
const app = express();
const request = require('request');
const cheerio = require('cheerio');
const port = 5000 || process.env.PORT;
app.use(cors);
// const scrap = (error,response,html) => {
//     if(!error && response.statusCode == 200){
//         const $ = cheerio.load(html);
//         //console.log(html);
//         const content = $('p');
//         //console.log(content.text());
//         const wordcontent = content.text().toString();
//         console.log(wordcontent);
//     }}
//     const search = "Lucknow";
//     search.split(" ").join("_");
//     request(`https://en.wikipedia.org/wiki/${search}`,scrap);   

app.get("/:search",(req,res)=>{
    const {search} = req.params;
    request(`https://en.wikipedia.org/wiki/${search}`,(error,response,html) => {
        if(!error && response.statusCode == 200){
            const $ = cheerio.load(html);
            //console.log(html);
            const content = $('p');
            //console.log(content.text());
            const wordcontent = content.text().toString();
            console.log(wordcontent);
            res.json({success: true, content: wordcontent});
        }});

})    

app.listen(port,()=>{
    console.log(`port is successful at ${port}`);
 })
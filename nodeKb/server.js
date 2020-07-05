const axios = require('axios')
const cors = require('cors')
const express = require('express');
const app = express();
app.use(cors())

const PORT = process.env.PORT || 3001

let url_app = "https://content.guardianapis.com/search?order-by=newest&show-fields=starRating,headline,thumbnail,short-url&api-key=88eeb64b-7255-4946-924b-d891b277417f"

app.get('/home', function (req, res) {
    axios.get(url_app).then(
        function (resp) {
            
            data = resp.data.response.results;

            var new_data = [];

                for (var i = 0; i < data.length; i++) {

                    if (data[i].id !== undefined && data[i].id !== null && data[i].sectionName !== undefined && data[i].sectionName !== null && data[i].webPublicationDate !== undefined && data[i].webPublicationDate !== null && data[i].webTitle !== undefined && data[i].webTitle !== null) {

                        if (data[i].fields !== undefined && data[i].fields !== null && data[i].fields.thumbnail !== undefined && data[i].fields.thumbnail !== null ) {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        description: "data[i].blocks.body[0].bodyTextSummary",
                                        image_url: data[i].fields.thumbnail,
                                        url:"data[i].webUrl"

                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                        }
                        else {
                            var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        date: data[i].webPublicationDate,
                                        url:"data[i].webUrl",
                                        section: data[i].sectionName,
                                        description: "data[i].blocks.body[0].bodyTextSummary",
                                        image_url: "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"

                            };
                            
                                    // console.log(data_value);
                            new_data.push(data_value);
                        }
                    }
                }

            
            res.json(new_data)
        }
    )
});


let url_w = "https://content.guardianapis.com/world?api-key=88eeb64b-7255-4946-924b-d891b277417f&show-blocks=all"

app.get('/world', function (req, res) {
    axios.get(url_w).then(
        function (resp) {
            data = resp.data.response.results;

                var new_data = [];

                for (var i = 0; i < data.length; i++) {

                    if (data[i].id !== undefined && data[i].id !== null && data[i].sectionId !== undefined && data[i].sectionId !== null && data[i].webPublicationDate !== undefined && data[i].webPublicationDate !== null && data[i].webTitle !== undefined && data[i].webTitle !== null && data[i].blocks !== undefined && data[i].blocks !== null && data[i].blocks.body[0] !== undefined && data[i].blocks.body[0] !== null && data[i].blocks.body[0].bodyTextSummary !== undefined && data[i].blocks.body[0].bodyTextSummary !== null) {

                        var img = data[i].blocks;
                        if (data[i].blocks.main !== undefined && data[i].blocks.main !== null && data[i].blocks.main.elements !== undefined && data[i].blocks.main.elements !== null && data[i].blocks.main.elements.length >= 0 && data[i].blocks.main.elements[0] !== undefined && data[i].blocks.main.elements[0] !== null) {
                            //console.log("b");
                            if (data[i].blocks.main.elements[0].assets !== undefined && data[i].blocks.main.elements[0].assets !== null && data[i].blocks.main.elements[0].assets.length >= 0) {
                                var img_index = data[i].blocks.main.elements[0].assets.length;
                                var dat = data[i].blocks.main.elements[0].assets[img_index - 1];
                                //console.log("a");
                                if (dat !== undefined && dat !== null && dat.file !== undefined && dat.file !== null && dat.file !== "") {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: dat.file,
                                        url:data[i].webUrl

                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                                else {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                            }
                        }
                    }
                }
                res.json(new_data);
        }
    )
});



url_p = "https://content.guardianapis.com/politics?api-key=88eeb64b-7255-4946-924b-d891b277417f&show-blocks=all"


app.get('/politics', function (req, res) {
    axios.get(url_p).then(
        function (resp) {
            data = resp.data.response.results;

                var new_data = [];

                for (var i = 0; i < data.length; i++) {

                    if (data[i].id !== undefined && data[i].id !== null && data[i].sectionId !== undefined && data[i].sectionId !== null && data[i].webPublicationDate !== undefined && data[i].webPublicationDate !== null && data[i].webTitle !== undefined && data[i].webTitle !== null && data[i].blocks !== undefined && data[i].blocks !== null && data[i].blocks.body[0] !== undefined && data[i].blocks.body[0] !== null && data[i].blocks.body[0].bodyTextSummary !== undefined && data[i].blocks.body[0].bodyTextSummary !== null) {

                        var img = data[i].blocks;
                        if (data[i].blocks.main !== undefined && data[i].blocks.main !== null && data[i].blocks.main.elements !== undefined && data[i].blocks.main.elements !== null && data[i].blocks.main.elements.length >= 0 && data[i].blocks.main.elements[0] !== undefined && data[i].blocks.main.elements[0] !== null) {
                            //console.log("b");
                            if (data[i].blocks.main.elements[0].assets !== undefined && data[i].blocks.main.elements[0].assets !== null && data[i].blocks.main.elements[0].assets.length >= 0) {
                                var img_index = data[i].blocks.main.elements[0].assets.length;
                                var dat = data[i].blocks.main.elements[0].assets[img_index - 1];
                                //console.log("a");
                                if (dat !== undefined && dat !== null && dat.file !== undefined && dat.file !== null && dat.file !== "") {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: dat.file

                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                                else {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                            }
                        }
                    }
                }
                res.json(new_data);
        }
    )
});



let url_b = "https://content.guardianapis.com/business?api-key=88eeb64b-7255-4946-924b-d891b277417f&show-blocks=all"


app.get('/business', function (req, res) {
    axios.get(url_b).then(
        function (resp) {
            data = resp.data.response.results;

                var new_data = [];

                for (var i = 0; i < data.length; i++) {

                    if (data[i].id !== undefined && data[i].id !== null && data[i].sectionId !== undefined && data[i].sectionId !== null && data[i].webPublicationDate !== undefined && data[i].webPublicationDate !== null && data[i].webTitle !== undefined && data[i].webTitle !== null && data[i].blocks !== undefined && data[i].blocks !== null && data[i].blocks.body[0] !== undefined && data[i].blocks.body[0] !== null && data[i].blocks.body[0].bodyTextSummary !== undefined && data[i].blocks.body[0].bodyTextSummary !== null) {

                        var img = data[i].blocks;
                        if (data[i].blocks.main !== undefined && data[i].blocks.main !== null && data[i].blocks.main.elements !== undefined && data[i].blocks.main.elements !== null && data[i].blocks.main.elements.length >= 0 && data[i].blocks.main.elements[0] !== undefined && data[i].blocks.main.elements[0] !== null) {
                            //console.log("b");
                            if (data[i].blocks.main.elements[0].assets !== undefined && data[i].blocks.main.elements[0].assets !== null && data[i].blocks.main.elements[0].assets.length >= 0) {
                                var img_index = data[i].blocks.main.elements[0].assets.length;
                                var dat = data[i].blocks.main.elements[0].assets[img_index - 1];
                                //console.log("a");
                                if (dat !== undefined && dat !== null && dat.file !== undefined && dat.file !== null && dat.file !== "") {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: dat.file

                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                                else {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                            }
                        }
                    }
                }
                res.json(new_data);
        }
    )
});




let url_t = "https://content.guardianapis.com/technology?api-key=88eeb64b-7255-4946-924b-d891b277417f&show-blocks=all"

app.get('/technology', function (req, res) {
    axios.get(url_t).then(
        function (resp) {
            data = resp.data.response.results;

                var new_data = [];

                for (var i = 0; i < data.length; i++) {

                    if (data[i].id !== undefined && data[i].id !== null && data[i].sectionId !== undefined && data[i].sectionId !== null && data[i].webPublicationDate !== undefined && data[i].webPublicationDate !== null && data[i].webTitle !== undefined && data[i].webTitle !== null && data[i].blocks !== undefined && data[i].blocks !== null && data[i].blocks.body[0] !== undefined && data[i].blocks.body[0] !== null && data[i].blocks.body[0].bodyTextSummary !== undefined && data[i].blocks.body[0].bodyTextSummary !== null) {

                        var img = data[i].blocks;
                        if (data[i].blocks.main !== undefined && data[i].blocks.main !== null && data[i].blocks.main.elements !== undefined && data[i].blocks.main.elements !== null && data[i].blocks.main.elements.length >= 0 && data[i].blocks.main.elements[0] !== undefined && data[i].blocks.main.elements[0] !== null) {
                            //console.log("b");
                            if (data[i].blocks.main.elements[0].assets !== undefined && data[i].blocks.main.elements[0].assets !== null && data[i].blocks.main.elements[0].assets.length >= 0) {
                                var img_index = data[i].blocks.main.elements[0].assets.length;
                                var dat = data[i].blocks.main.elements[0].assets[img_index - 1];
                                //console.log("a");
                                if (dat !== undefined && dat !== null && dat.file !== undefined && dat.file !== null && dat.file !== "") {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: dat.file

                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                                else {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                            }
                        }
                    }
                }
                res.json(new_data);
        }
    )
});



let url_s = "https://content.guardianapis.com/sport?api-key=88eeb64b-7255-4946-924b-d891b277417f&show-blocks=all"


app.get('/sports', function (req, res) {
    axios.get(url_s).then(
        function (resp) {
            data = resp.data.response.results;

                var new_data = [];

                for (var i = 0; i < data.length; i++) {

                    if (data[i].id !== undefined && data[i].id !== null && data[i].sectionId !== undefined && data[i].sectionId !== null && data[i].webPublicationDate !== undefined && data[i].webPublicationDate !== null && data[i].webTitle !== undefined && data[i].webTitle !== null && data[i].blocks !== undefined && data[i].blocks !== null && data[i].blocks.body[0] !== undefined && data[i].blocks.body[0] !== null && data[i].blocks.body[0].bodyTextSummary !== undefined && data[i].blocks.body[0].bodyTextSummary !== null) {

                        var img = data[i].blocks;
                        if (data[i].blocks.main !== undefined && data[i].blocks.main !== null && data[i].blocks.main.elements !== undefined && data[i].blocks.main.elements !== null && data[i].blocks.main.elements.length >= 0 && data[i].blocks.main.elements[0] !== undefined && data[i].blocks.main.elements[0] !== null) {
                            //console.log("b");
                            if (data[i].blocks.main.elements[0].assets !== undefined && data[i].blocks.main.elements[0].assets !== null && data[i].blocks.main.elements[0].assets.length >= 0) {
                                var img_index = data[i].blocks.main.elements[0].assets.length;
                                var dat = data[i].blocks.main.elements[0].assets[img_index - 1];
                                //console.log("a");
                                if (dat !== undefined && dat !== null && dat.file !== undefined && dat.file !== null && dat.file !== "") {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: dat.file

                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                                else {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                            }
                        }
                    }
                }
                res.json(new_data);
        }
    )
});

let url_science = "https://content.guardianapis.com/science?api-key=88eeb64b-7255-4946-924b-d891b277417f&show-blocks=all"


app.get('/science', function (req, res) {
    axios.get(url_science).then(
        function (resp) {
            data = resp.data.response.results;

                var new_data = [];

                for (var i = 0; i < data.length; i++) {

                    if (data[i].id !== undefined && data[i].id !== null && data[i].sectionId !== undefined && data[i].sectionId !== null && data[i].webPublicationDate !== undefined && data[i].webPublicationDate !== null && data[i].webTitle !== undefined && data[i].webTitle !== null && data[i].blocks !== undefined && data[i].blocks !== null && data[i].blocks.body[0] !== undefined && data[i].blocks.body[0] !== null && data[i].blocks.body[0].bodyTextSummary !== undefined && data[i].blocks.body[0].bodyTextSummary !== null) {

                        var img = data[i].blocks;
                        if (data[i].blocks.main !== undefined && data[i].blocks.main !== null && data[i].blocks.main.elements !== undefined && data[i].blocks.main.elements !== null && data[i].blocks.main.elements.length >= 0 && data[i].blocks.main.elements[0] !== undefined && data[i].blocks.main.elements[0] !== null) {
                            //console.log("b");
                            if (data[i].blocks.main.elements[0].assets !== undefined && data[i].blocks.main.elements[0].assets !== null && data[i].blocks.main.elements[0].assets.length >= 0) {
                                var img_index = data[i].blocks.main.elements[0].assets.length;
                                var dat = data[i].blocks.main.elements[0].assets[img_index - 1];
                                //console.log("a");
                                if (dat !== undefined && dat !== null && dat.file !== undefined && dat.file !== null && dat.file !== "") {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: dat.file

                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                                else {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                            }
                        }
                    }
                }
                res.json(new_data);
        }
    )
});


app.get('/article', function (req, res) {

    let url_detailed = "https://content.guardianapis.com/" + req.query.id + "?api-key=88eeb64b-7255-4946-924b-d891b277417f&show-blocks=all"

    axios.get(url_detailed).then(
        function (resp) {
            var new_data = [];
            if(resp.data.response.content){

                var info = resp.data.response.content;                
                if (info && info.blocks) {
                    var g_img = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png";
                    if (info.blocks.main !== undefined && info.blocks.main !== null && info.blocks.main.elements.length >= 0 && info.blocks.main.elements[0] !== undefined && info.blocks.main.elements[0] !== null && info.blocks.main.elements[0].assets.length >= 0 && info.blocks.main.elements[0].assets[info.blocks.main.elements[0].assets.length - 1] !== undefined && info.blocks.main.elements[0].assets[info.blocks.main.elements[0].assets.length - 1] !== null && info.blocks.main.elements[0].assets[info.blocks.main.elements[0].assets.length - 1].file !== undefined && info.blocks.main.elements[0].assets[info.blocks.main.elements[0].assets.length - 1].file !== null){
                        g_img = info.blocks.main.elements[0].assets[info.blocks.main.elements[0].assets.length - 1].file;
                    }
                        data_value = {
                            id: info.id,
                            url: info.webUrl,
                            title: info.webTitle,
                            source: "Guardian",
                            description: info.blocks.body[0].bodyTextSummary,
                            image_url: g_img,
                            date: info.webPublicationDate,
                            section: info.sectionName
                        }
                        new_data.push(data_value);
                }

            }
            res.json(new_data)
        }
    )

});

app.get('/search', function (req, res) {

    // console.log(req.query.id);

    let url_detailed_guardian = "https://content.guardianapis.com/search?q=" + req.query.id + "&api-key=88eeb64b-7255-4946-924b-d891b277417f&show-blocks=all"

axios.get(url_detailed_guardian).then(
        function (resp) {
            data = resp.data.response.results;

                var new_data = [];

                for (var i = 0; i < data.length; i++) {

                    if (data[i].id !== undefined && data[i].id !== null && data[i].sectionId !== undefined && data[i].sectionId !== null && data[i].webPublicationDate !== undefined && data[i].webPublicationDate !== null && data[i].webTitle !== undefined && data[i].webTitle !== null && data[i].blocks !== undefined && data[i].blocks !== null && data[i].blocks.body[0] !== undefined && data[i].blocks.body[0] !== null && data[i].blocks.body[0].bodyTextSummary !== undefined && data[i].blocks.body[0].bodyTextSummary !== null) {

                        var img = data[i].blocks;
                        if (data[i].blocks.main !== undefined && data[i].blocks.main !== null && data[i].blocks.main.elements !== undefined && data[i].blocks.main.elements !== null && data[i].blocks.main.elements.length >= 0 && data[i].blocks.main.elements[0] !== undefined && data[i].blocks.main.elements[0] !== null) {
                            //console.log("b");
                            if (data[i].blocks.main.elements[0].assets !== undefined && data[i].blocks.main.elements[0].assets !== null && data[i].blocks.main.elements[0].assets.length >= 0) {
                                var img_index = data[i].blocks.main.elements[0].assets.length;
                                var dat = data[i].blocks.main.elements[0].assets[img_index - 1];
                                //console.log("a");
                                if (dat !== undefined && dat !== null && dat.file !== undefined && dat.file !== null && dat.file !== "") {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: dat.file

                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                                else {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        url:data[i].webUrl,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionName,
                                        image_url: "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                            }
                        }
                    }
                }
                res.json(new_data);
        }
    )
});


const googleTrends = require('google-trends-api');
app.get('/trending', function (req, res) {

    let keywords = req.query.id;

    googleTrends.interestOverTime({keyword: keywords, startTime: new Date('2019-06-01')})
    .then(function(results){
        // console.log(results);
        result = JSON.parse(results);
        data = result.default.timelineData;
        var val = [];
        for(var i=0; i<data.length; i++)
        {
            var data_value = {value: data[i].value[0]};
            // console.log(data[i].value);
            val.push(data_value)
        }
        res.send(val);
    })
    .catch(function(err){
        console.error(err);
    });
});

app.listen(PORT, function () {
    console.log('Server started on port 3001...');
});
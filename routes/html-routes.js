module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/stats", function(req, res){
        res.render("stats");
    });

    app.get("/contact", function(req, res){
        res.render("contact");
    });
}
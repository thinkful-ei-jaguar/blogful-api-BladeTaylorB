const ArticlesService = {

    getAllArticles (db) { return db('blogful_articles').select('*'); } 

};
    
module.exports = ArticlesService;
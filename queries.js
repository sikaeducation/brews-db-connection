const database = null // Fix this

module.exports = {
    getBreweries: function(){
        return database("brewery").select();
    },
    getBrewery: function(id){
        return database("brewery")
        .first()
        .where("id", id);
    },
    getBeers: function(){
        return database("beer")
        .select("beer.name AS beer_name", "brewery.name AS brewery_name", "*")
        .innerJoin("brewery", "brewery_id", "brewery.id");
    },
    getBeersByBrewery: function(brewery_id){
        return database("beer")
        .select("beer.name AS beer_name", "brewery.name AS brewery_name", "*")
        .innerJoin("brewery", "brewery_id", "brewery.id")
        .where("brewery_id", brewery_id);
    }
};

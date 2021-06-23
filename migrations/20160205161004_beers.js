exports.up = function(knex, Promise) {
    return knex.schema.createTable("beer", function(beer){
        beer.increments("id");
        beer.string("name");
        beer.float("abv");
        beer.integer("brewery_id").references("brewery", "id");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("beer");
};

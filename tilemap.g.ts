// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030303030303030303030303030303030201010303030301010103030303030301030303030303030301030306030303010103030303030303040404010303030301010101010303030303030103030301010303030103030303030301030303010303030301030303030303010303030103030303010101050303030103030101010503030303030303030301010703010303030303030303030303010303030103010101030301010101010103030301030103010303010303030303030303010301030103030103030301030303030103010301030301030303010303030301010103010101010101010101010103030303030303030303030303030301`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 2 2 . . . 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 . 2 2 . 2 2 
2 . . 2 2 2 2 2 2 2 . . . . 2 2 
2 2 . . . . . 2 2 2 2 2 2 . 2 2 
2 . . 2 2 2 . 2 2 2 2 2 2 . 2 2 
2 . 2 2 2 2 . 2 2 2 2 2 2 . 2 2 
2 . 2 2 2 2 . . . . 2 2 2 . 2 2 
. . . . 2 2 2 2 2 2 2 2 2 . . . 
2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
2 . 2 . . . 2 2 . . . . . . 2 2 
2 . 2 . 2 . 2 2 . 2 2 2 2 2 2 2 
2 . 2 . 2 . 2 2 . 2 2 2 . 2 2 2 
2 . 2 . 2 . 2 2 . 2 2 2 . 2 2 2 
2 . . . 2 . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tileGrass1,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

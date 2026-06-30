// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`14000c000f0f0c0f0f0f0f0f0f0f0f0f0f0f0f0f0f000f0f0f0d0d0d0706060606060606060606080d0d0d0f0f0d0d0d0403030303030303030303050d0d0d0f0f0d0d0d0403030303030303030303050d0d0d0f0f0d0d0d0203030303030303030303020d0d0d0f0f0d0d0d0d0d0d0d0d030303030d0d0d0d0d0d0f0f0d0d0d0d0d0d0d0103030d0d0d0d0d0d0d0d0d0f0d0d0d0201010103030301010101020d0d0d0f0f0d0d0d0403030303030303030303050d0d0d0f0f0d0d0d0403030303030303030303050d0d0d0f0f0d0d0d0b090909090909090909090a0d0d0d0f0f0f0e0f0f0f0f0f0f0f0f0f0f0f0f0f0f0e0f0f`, img`
2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 . . . 2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 . . . . . . . . . . 2 . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
`, [myTiles.transparency16,sprites.dungeon.hazardHole,sprites.dungeon.hazardSpike,myTiles.tile1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.doorOpenNorth,sprites.builtin.coral0,sprites.builtin.brick,sprites.castle.tileGrass2], TileScale.Sixteen);
            case "level0":
            case "level3":return tiles.createTilemap(hex`14000c000f0f0c0f0f0f0f0f0f0f0f0f0f0f0f0f0f000f0f0f0d0d0d0706060606060606060606080d0d0d0f0f0d0d0d0403030303030303030303050d0d0d0f0f0d0d0d0403030303030303030303050d0d0d0f0f0d0d0d0203030303030303030303020d0d0d0f0f0d0d0d0d0d0d0d0d030303030d0d0d0d0d0d0f0f0d0d0d0d0d0d0d0103030d0d0d0d0d0d0d0d0d0f0d0d0d0201010103030301010101020d0d0d0f0f0d0d0d0403030303030303030303050d0d0d0f0f0d0d0d0403030303030303030303050d0d0d0f0f0d0d0d0b090909090909090909090a0d0d0d0f0f0f0e0f0f0f0f0f0f0f0f0f0f0f0f0f0f0e0f0f`, img`
2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 . . . 2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 . . . . . . . . . . 2 . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
`, [myTiles.transparency16,sprites.dungeon.hazardHole,sprites.dungeon.hazardSpike,myTiles.tile1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.doorOpenNorth,sprites.builtin.coral0,sprites.builtin.brick,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "myTile5":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

/**
 * @constructor
 */
Game.GridTileData = function Game_GridTileData() {
    this.mBack = [];
    this.mAttr = 0;
}
Game.GridTileData.prototype = {
    mBack : null,
    mAttr : 0,
    mSettings : null
}
Game.GridTileData.staticInit = function Game_GridTileData$staticInit() {
}

JS_AddInitFunc(function() {
    Game.GridTileData.registerClass('Game.GridTileData', null);
});
JS_AddStaticInitFunc(function() {
    Game.GridTileData.staticInit();
});
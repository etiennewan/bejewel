/**
 * @constructor
 */
Game.MoveData = function Game_MoveData() {
}
Game.MoveData.prototype = {
    mUpdateCnt : 0,
    mSelectedId : 0,
    mSwappedRow : 0,
    mSwappedCol : 0,
    mPreSaveBuffer : null,
    mMoveCreditId : 0,
    mStats : null
}
Game.MoveData.staticInit = function Game_MoveData$staticInit() {
}

JS_AddInitFunc(function() {
    Game.MoveData.registerClass('Game.MoveData', null);
});
JS_AddStaticInitFunc(function() {
    Game.MoveData.staticInit();
});
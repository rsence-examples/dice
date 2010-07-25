
HDice = HControl.extend({
  tileSize: 60,
  componentName: 'dice',
  refreshValue: function(){
    var
    _val = this.value,
    _tileHeight = this.tileSize;
    if(_val>=1 && _val<=6){
      var _tilePosY = 0-(_val*_tileHeight);
      this.setStyleOfPart('state','background-position','0px '+_tilePosY+'px');
    }
  }
});


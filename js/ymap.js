YMaps.jQuery(function () {
  var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
  map.setCenter(new YMaps.GeoPoint(37.610877, 55.729556), 14);
  var s = new YMaps.Style();
  s.iconStyle = new YMaps.IconStyle();
  s.iconStyle.href = "./img/svg/pin-yandex.svg";
  s.iconStyle.offset = new YMaps.Point(-9, -29);
  var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.631624, 55.730666), {style: s});
  map.addOverlay(placemark); 
})
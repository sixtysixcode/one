parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ywnd":[function(require,module,exports) {
var e,l,t,o,a,r,s,y,n,p,i,m;window.map;var c={lat:50.3887502,lng:-4.1281376},f="AIzaSyDNN0p5CJzhe0skik4v41UYCcTgmoiTFIk";function T(e,l){return o={lat:e,lng:l},r=new google.maps.LatLng(o),s=new google.maps.LatLng(c),a=google.maps.geometry.spherical.computeDistanceBetween(r,s),y=.000621371192*a,n=Math.round(100*y)/100}function g(l){var t={center:l,zoom:5.5,disableDefaultUI:!0,styles:lightTheme};window.map=new google.maps.Map(document.getElementById("map"),t),e=new google.maps.Marker({map:map,draggable:!1,animation:google.maps.Animation.DROP,position:l}),e=new google.maps.Marker({map:map,draggable:!1,animation:google.maps.Animation.DROP,position:c})}window.lightTheme=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],window.darkTheme=[{elementType:"geometry",stylers:[{color:"#9a9a9a"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#9a9a9a"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#9a9a9a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#9a9a9a"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9a9a9a"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#3784ff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#6ddcbd"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#6ddcbd"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#6ddcbd"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],window.ipLocation=function(){$.ajax({url:"https://www.googleapis.com/geolocation/v1/geolocate?key="+f,data:JSON.stringify({considerIp:"true"}),type:"POST",contentType:"application/json",success:function(e){if(e.location){g(o=new google.maps.LatLng(e.location.lat,e.location.lng)),T(e.location.lat,e.location.lng);var l=document.querySelector("#distanceElement");$(l).html("We're "+n+" miles from each other")}else alert("not found")}})};
},{}]},{},["Ywnd"], null)
//# sourceMappingURL=/maps.a080cfea.js.map
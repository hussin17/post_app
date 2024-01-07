import{j as f,aN as r,o as m,c as y}from"./app.03d0793a.js";import"./Control.Geocoder.57582702.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";class h{constructor(){this.lat="",this.lng="",this.name="",this.id=""}}const k={name:"MapWithMakers",props:{lat:{type:Number,default:0},lng:{type:Number,default:0},markers:{type:Array,default:()=>[new h]},radius:{type:Number,default:1},dragValue:{type:Boolean,default:!0}},emit:["onChange"],setup(e,{emit:g}){let a=null;const c=1610;f(()=>{let l=17;const t=e.radius/.621371;t==0?l=13:t<=.5?l=15:t<=1?l=14:t<=2.5?l=13:t<=5?l=12:t<=10?l=11:t<=25?l=9:t<=50?l=8:t<=100?l=7:t<=200?l=6:t<=500?l=5:l=13,a=r.map("mapMarkerContainer").setView([e.lat,e.lng],l);var o;r.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(a),e.dragValue?(o=new r.Marker([e.lat==null||isNaN(e.lat)?0:e.lat,e.lng==null||isNaN(e.lng)?0:e.lng],{draggable:e.dragValue}).addTo(a),o.on("dragend",u)):(o=new r.Marker([e.lat==null||isNaN(e.lat)?0:e.lat,e.lng==null||isNaN(e.lng)?0:e.lng]).addTo(a),o.on("dragend"));var s=r.featureGroup();r.circle([44.6663888888889,6.775],{radius:150,color:"white",weight:.5,opacity:1,fillColor:"#ff9900",fillOpacity:1}).addTo(s),a.addLayer(s);var n=r.circle([e.lat,e.lng],e.radius*c,{color:"red",weight:.5,fillColor:"#93C5FD",fillOpacity:.3});a.addLayer(n),r.Control.geocoder({defaultMarkGeocode:!1}).addTo(a).on("markgeocode",function(i){a.removeLayer(o),a.flyTo(i.geocode.center,12),o=new r.Marker([i.geocode.properties.lat,i.geocode.properties.lon],{draggable:e.dragValue}).addTo(a);var d={lat:i.geocode.properties.lat,lng:i.geocode.properties.lon};g("onChange",d),a.removeLayer(n),n=new r.circle([d.lat,d.lng],e.radius*c,{color:"red",weight:.5,fillColor:"#93C5FD",fillOpacity:.3}),a.addLayer(n),o.on("dragend",u)});function u(i){var d=i.target.getLatLng();g("onChange",d),a.removeLayer(n),n=new r.circle([d.lat,d.lng],e.radius*c,{color:"red",weight:.5,fillColor:"#93C5FD",fillOpacity:.3}),a.addLayer(n)}})}},M={id:"mapMarkerContainer"};function v(e,g,a,c,l,t){return m(),y("div",M)}var p=_(k,[["render",v],["__scopeId","data-v-674482a4"]]);export{p as default};

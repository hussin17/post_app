import{aC as i}from"./app.94623934.js";let a="",h="",u=h.replaceAll("\\","");u!=null&&u!=""?a="/":a="";const c=a+"/api/v1.0",_=a,g="/category/search",m="/sub_category/search",d="/location-city/search",f="/location-township/search",p="/user/search",l="/product/customize-header",y="/existuser",n="5",C=(e,t,s)=>i.post(c+g,{keyword:t,login_user_id:s,limit:n,offset:e}).then(o=>o).catch(),w=(e,t,s,o)=>i.post(c+m+"?login_user_id="+s,{keyword:t||"",category_id:o=="all"?"":o,limit:n,offset:e}).then(r=>r).catch(),x=(e,t,s)=>i.post(c+d+"?login_user_id="+s,{keyword:t||"",limit:n,offset:e}).then(o=>o).catch(),z=(e,t,s,o)=>i.post(c+f+"?login_user_id="+s,{keyword:t||"",city_id:o=="all"?"":o,limit:n,offset:e}).then(r=>r).catch(),k=(e,t,s)=>i.post(c+p+"?login_user_id="+s,{keyword:t||"",limit:n,offset:e}).then(o=>o).catch(),O=(e,t,s)=>i.post(c+"/phone_country_code/search?language_symbol=en?login_user_id="+s+"&limit="+n+"&offset="+e,{keyword:t||""}).then(o=>o).catch(),U=(e,t)=>i.get(c+l+"/ps-itm00003/customize-details?login_user_id="+t+"&limit=5&offset="+e).then(s=>s).catch(),F=(e,t)=>i.get(c+l+"/ps-itm00007/customize-details?login_user_id="+t+"&limit=5&offset="+e).then(s=>s).catch(),P=(e,t)=>i.get(c+l+"/ps-itm00002/customize-details?login_user_id="+t+"&limit=5&offset="+e).then(s=>s).catch(),S=(e,t,s,o)=>i.get(c+l+"/"+o+"/customize-details?login_user_id="+s+"&limit=5&offset="+e).then(r=>r).catch(),T=async(e,t)=>i.get(_+y+"?google_id="+e+"&email="+t).then(s=>s).catch();export{C as a,w as b,x as c,z as d,S as e,k as f,T as g,U as h,F as i,P as j,O as k};

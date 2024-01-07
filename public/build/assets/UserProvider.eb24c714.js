import{a as y,P as t,b as w}from"./PsApiService.ebe2eb3a.js";import{U as o}from"./User.fb568515.js";import{U as _}from"./UserListParameterHolder.d110b747.js";import{P as u}from"./PsValueStore.98989d86.js";import{D as W}from"./DefaultPhoto.cc755f93.js";import{P as U}from"./ps_constants.1e4471b7.js";import{A as v}from"./ApiStatus.5720ba0b.js";import{B as m,Y as F}from"./app.03d0793a.js";class D{constructor(){this.userEmail="",this.userPassword="",this.deviceToken="",this.platformName=""}UserLoginParameterHolder(){this.userEmail="",this.userPassword="",this.deviceToken="",this.platformName=""}toMap(){const e={};return e.user_email=this.userEmail,e.user_password=this.userPassword,e.device_token=this.deviceToken,e.platform_name=this.platformName,e}}class H{constructor(){this.name="",this.userName="",this.userEmail="",this.userPassword="",this.deviceToken="",this.platformName="",this.deviceInfo="",this.deviceId=""}UserRegistesrParameterHolder(){this.name="",this.userName="",this.userEmail="",this.userPassword="",this.deviceToken="",this.platformName="",this.deviceInfo="",this.deviceId=""}toMap(){const e={};return e.name=this.name,e.username=this.userName,e.email=this.userEmail,e.password=this.userPassword,e.device_token=this.deviceToken,e.platform_name=this.platformName,e.device_info=this.deviceInfo,e.device_id=this.deviceId,e}}class B{constructor(){this.phoneId="",this.userName="",this.userPhone="",this.displayName="",this.deviceToken="",this.platformName="",this.loginMethod="phone"}PhoneLoginParameterHolder(){this.phoneId="",this.userName="",this.userPhone="",this.deviceToken="",this.platformName="",this.displayName="",this.loginMethod="phone"}toMap(){const e={};return e.phone_id=this.phoneId,e.user_name=this.userName,e.user_phone=this.userPhone,e.display_name=this.displayName,e.device_token=this.deviceToken,e.platform_name=this.platformName,e.loginMethod=this.loginMethod,e}}class O{constructor(){this.isNoMoreRecord=m({value:!1}),this.userResource=m(new y),this.userList=m(new y),this.user=m(new y),this.loading=m({value:!1}),this.limit=30,this.offset=0,this.userparamHolder=m(new _)}updateItemList(e){var s,a;this.userList!=null&&this.userList.data!=null&&this.userList.data.length>0&&this.offset!=0?(e.data!=null&&e.data.length>0?(((s=e.data)==null?void 0:s.length)<this.limit?this.isNoMoreRecord.value=!0:this.isNoMoreRecord.value=!1,this.userList.data.push(...e.data)):this.isNoMoreRecord.value=!0,this.userList.code=e.code,this.userList.status=e.status,this.userList.message=e.message):(((a=e.data)==null?void 0:a.length)<this.limit||e.data==null?this.isNoMoreRecord.value=!0:this.isNoMoreRecord.value=!1,this.userList=e),this.userList!=null&&this.userList.data!=null&&(this.offset=this.userList.data.length)}setLoading(e){this.loading.value=e}async loginWithEmailId(e,s){this.loading.value=!0,await this.signInWithEmailAndPassword(e,e)}async submitLoginWithEmailId(e,s){var i,l,r,n,h,d,c,p,g;this.loading.value=!0;const a=new D;return a.userEmail=e,a.userPassword=s,a.deviceToken=u.psValueStore.deviceToken,a.platformName=U.PLATFORM,this.userResource=await t.postUserLogin(new o,a.toMap()),this.userResource.status==w.SUCCESS&&u.psValueStore.login((r=(l=(i=this.userResource)==null?void 0:i.data)==null?void 0:l.userId)!=null?r:"",(d=(h=(n=this.userResource)==null?void 0:n.data)==null?void 0:h.userName)!=null?d:"",(g=(p=(c=this.userResource)==null?void 0:c.data)==null?void 0:p.deviceToken)!=null?g:""),this.loading.value=!1,this.userResource}async submitUserLoginWithPhoneId(e,s,a){var l,r,n,h,d,c,p,g,f;this.loading.value=!0;const i=new B;return i.userName=s,i.phoneId=e,i.userPhone=a,i.deviceToken=u.psValueStore.deviceToken,i.platformName=U.PLATFORM,this.userResource=await t.postPhoneLogin(new o,i.toMap()),this.userResource.status==w.SUCCESS&&u.psValueStore.login((n=(r=(l=this.userResource)==null?void 0:l.data)==null?void 0:r.userId)!=null?n:"",(c=(d=(h=this.userResource)==null?void 0:h.data)==null?void 0:d.userName)!=null?c:"",(f=(g=(p=this.userResource)==null?void 0:p.data)==null?void 0:g.deviceToken)!=null?f:""),this.loading.value=!1,this.userResource}async signUpWithEmailId(e,s,a,i,l){this.loading.value=!0,await this.createUserWithEmailAndPassword(s,s)}async submitSignUpWithEmailId(e,s,a,i,l){var h,d,c,p,g,f,M,L,R,N,S,I,k,E,b,T,A,C,V;this.loading.value=!0;const r=new H;r.userId="",r.userName=e,r.userEmail=s,r.userPassword=a,r.userPhone="",r.deviceToken=u.psValueStore.deviceToken,r.platformName=U.PLATFORM;const n=await t.postUserRegister(new o,r.toMap());return n.status==w.SUCCESS?((h=n.data)==null?void 0:h.status)==U.ONE?(this.userResource=n,u.psValueStore.replaceVerifyUserData("","","",""),u.psValueStore.login((p=(c=(d=this.userResource)==null?void 0:d.data)==null?void 0:c.userId)!=null?p:"",(M=(f=(g=this.userResource)==null?void 0:g.data)==null?void 0:f.userName)!=null?M:"",(N=(R=(L=this.userResource)==null?void 0:L.data)==null?void 0:R.deviceToken)!=null?N:""),i()):(this.userResource=n,u.psValueStore.replaceVerifyUserData((k=(I=(S=this.userResource)==null?void 0:S.data)==null?void 0:I.userId)!=null?k:"",(T=(b=(E=this.userResource)==null?void 0:E.data)==null?void 0:b.userName)!=null?T:"",(V=(C=(A=this.userResource)==null?void 0:A.data)==null?void 0:C.userEmail)!=null?V:"",a),l()):this.userResource=n,this.loading.value=!1,this.userResource}async createUserWithEmailAndPassword(e,s){}async signInWithEmailAndPassword(e,s){}async loginWithAppleSignIn(){}async submitLoginWithApple(){}async loginWithGoogleId(){}async submitLoginWithGoogleId(){}async loginWithFacebookId(){}async submitLoginWithFacebookId(){}async postUserRegister(e){this.loading.value=!0,await t.postUserRegister(new o,e.toMap()),this.loading.value=!1}async postUserEmailVerify(e){this.loading.value=!0;const s=await t.postUserEmailVerify(new o,e.toMap());return this.loading.value=!1,s}async postUserLogin(e){this.loading.value=!0,await t.postUserLogin(new o,e.toMap()),this.loading.value=!1}async postForgotPassword(e){this.loading.value=!0;const s=await t.postForgotPassword(new v,e.toMap());return this.loading.value=!1,s}async postChangePassword(e){this.loading.value=!0;const s=await t.postChangePassword(new v,e.toMap());return this.loading.value=!1,s}async postProfileUpdate(e){var a,i;this.loading.value=!0;const s=await t.postProfileUpdate(new o,e.toMap());return s.status==w.SUCCESS&&(this.user=s,u.psValueStore.replaceLoginUserName((i=(a=s.data)==null?void 0:a.userName)!=null?i:"")),this.loading.value=!1,s}async postPhoneLogin(e){this.loading.value=!0,await t.postPhoneLogin(new o,e.toMap()),this.loading.value=!1}async postUserFollow(e){this.loading.value=!0,await t.postUserFollow(new o,e.toMap(),e.userId),this.loading.value=!1}async postFBLogin(e){this.loading.value=!0,await t.postFBLogin(new o,e.toMap()),this.loading.value=!1}async postAppleLogin(e){this.loading.value=!0,await t.postAppleLogin(new o,e.toMap()),this.loading.value=!1}async postGoogleLogin(e){this.loading.value=!0,await t.postGoogleLogin(new o,e.toMap()),this.loading.value=!1}async postAddMembership(e){this.loading.value=!0;const s=await t.postAddMembership(new o,e.toMap());return this.loading.value=!1,s}async postResendCode(e){this.loading.value=!0,await t.postResendCode(new o,e.toMap()),this.loading.value=!1}async getUser(e){this.loading.value=!0;const s=await t.getUser(new o,e);return s.data!=null&&s.data.length>0&&(this.user.data=s.data[0]),this.user.code=s.code,this.user.message=s.message,this.user.status=s.status,this.loading.value=!1,s}async getOtherUserData(e){this.loading.value=!0,await t.getUserDetail(new o,e.toMap()),this.loading.value=!1}async getSearchUserData(e){this.offset=0,this.loading.value=!0,await t.getSearchUser(new o,this.limit,this.offset,e.toMap()),this.loading.value=!1}async userReportItem(e){this.loading.value=!0,await t.getUserDetail(new o,e.toMap()),this.loading.value=!1}async blueMarkUser(e,s){this.loading.value=!0;const a=await t.blueMarkUser(new v,e,s.toMap());return this.loading.value=!1,a}async blockUser(e){this.loading.value=!0;const s=await t.blockUser(new v,e.toMap());return this.loading.value=!1,s}async postUnBlockUser(e){this.loading.value=!0,await t.postUnBlockUser(new o,e.toMap()),this.loading.value=!1}async postDeleteUser(e){this.loading.value=!0;const s=await t.postDeleteUser(new v,e.toMap());return this.loading.value=!1,s}async userLogout(e){this.loading.value=!0,await t.postUserLogout(new o,e.toMap()),this.loading.value=!1}async postImageUpload(e,s,a,i){this.loading.value=!0,await t.postImageUpload(new W,e,s,a,i),this.loading.value=!1}async postDealerPdfUpload(e,s){this.loading.value=!0;const a=await t.postDealerPdfUpload(new W,e,s);return this.loading.value=!1,a}async cancelDealership(e){this.loading.value=!0;const s=await t.cancelDealership(new v,e.toMap());return this.loading.value=!1,s}navigateUserLoginTo(e,s,a,i,l){(e==null||e=="")&&(e="dashboard"),a!=null&&a!=""?a=="item"||a=="item-list"?s.push({name:e,query:i,params:l}):s.push({name:e}):s.push({name:e})}navigateUserLoginRedirect(e,s,a,i,l,r){(e==null||e=="")&&(e="dashboard"),(s==null||s=="")&&(s=e),i!=null&&i!=""?i=="item"||i=="item-list"?a.push({name:e,query:l,params:r}):a.push({name:s}):a.push({name:s})}}const G=Symbol("UserProvider"),X=()=>m(new O),Z=()=>F(G);export{B as P,H as U,X as c,Z as u};

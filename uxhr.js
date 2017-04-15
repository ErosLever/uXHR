// License: public domain - original author: Eros Lever - https://gist.github.com/ErosLever/1c555eaca5d2bc07fc73bae7c550f1f5
// Inspired by tinyxhr.js (https://gist.github.com/4706967) and empijei (https://github.com/empijei)

uxhr=(u,c,d,h,p,m)=>(K=(z,f)=>z?Object.keys(z).map(f):0,e=encodeURIComponent,x=new XMLHttpRequest,x.open(m?m:d?'POST':'GET',u),K(h,k=>x.setRequestHeader(k,h[k])),K(p,k=>x[k]=p[k]),x.onload=()=>c(x),x.send(d?d.trim?d:K(d,k=>e(k)+'='+e(d[k])).join('&'):''))
/*
//Example usages:
  uxhr("/logout",(x)=>alert(x.responseText))
  uxhr("/login",(x)=>alert(x.responseText),{username:'admin',password:'admin'})
  uxhr("/api",(x)=>alert(x.responseText),JSON.stringify({test:1234}),{'Content-Type':'application/json'})
  uxhr("/profile",(x)=>alert(x.response.title),0,0,{responseType:'document'})
  uxhr("/",(x)=>alert(x.responseText),0,{'X-Requested-With':'XMLHttpRequest'},{withCredentials:true})

//More readable version:
function uxhr(url, callback, data, headers, properties,method){
  var xhr = new XMLHttpRequest();
  if(!method){
    if(data){
      method = 'POST';
    }else{
      method = 'POST';
    }
  }
  xhr.open(method,url);
  if(headers){
    for(var key in headers){
      xhr.setRequestHeader(key,headers[key]);
    }
  }
  if(properties){
    for(var key in properties){
      xhr[key] = properties[key];
    }
  }
  xhr.onload = function(){
    callback(xhr);
  }
  if(data){
    if(typeof(data)!="string"){ // assume it's an object
      var tmp = [];
      for(var key in data){
        var value = encodeURIComponent(data[key]);
        key = encodeURIComponent(key);
        tmp.push(key+'='+value);
      }
      data = tmp.join('&');
    }
  }else{
    data = undefined;
  }
  xhr.send(data);
}

*/
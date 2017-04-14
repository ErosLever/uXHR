uxhr=(u,c,d,h,p)=>(K=Object.keys,e=encodeURIComponent,x=new XMLHttpRequest(),x.open(d?'POST':'GET',u),h?K(h).map((k)=>x.setRequestHeader(k,h[k])):1,p?K(p).map((k)=>x[k]=p[k]):1,x.onload=()=>(c(x)),x.send(d?d.trim?d:K(d).map((k)=>e(k)+'='+e(d[k])).join('&'):''))

/*
//Example usages:
  uxhr("/logout",(x)=>alert(x.responseText))
  uxhr("/login",(x)=>alert(x.responseText),{username:'admin',password:'admin'})
  uxhr("/api",(x)=>alert(x.responseText),JSON.stringify({test:1234}),{'Content-Type':'application/json'})
  uxhr("/profile",(x)=>alert(x.response.title),0,0,{responseType:'document'})
  uxhr("/",(x)=>alert(x.responseText),0,{'X-Requested-With':'XMLHttpRequest'},{withCredentials:true})

//More readable version:
function uxhr(url, callback, data, headers, properties){
  var xhr = new XMLHttpRequest();
  if(data)
    method = 'POST';
  else
    method = 'GET';
  xhr.open(method,url);
  if(headers){
    for(var key in headers){
      xhr.setRequestHeader(key,headers[key]);
    }
  }
  if(properties){
    for(var key in properties){
      xhr[key] = properties[key]);
    }
  }
  xhr.onload = function(){
    callback(xhr)
  }
  if(data){
    if(typeof(data)!="string"){ // assume it's an object
      var tmp = [];
      for(var key in data){
        var value = encodeURIComponent(data[key]);
        key = encodeURIComponent(key);
        tmp.push(`${key}=${value}`);
      }
      data = tmp.join('&');
    }
  }else{
    data = undefined;
  }
  xhr.send(data);
}

*/
# uXHR (micro XMLHttpRequest wrapper) - Rigorously minified manually in 0xFF bytes

Inspired by tinyxhr.js (https://gist.github.com/4706967) and empijei (https://github.com/empijei)

*Usage:*
  uxhr(URL,callback,postParameters,headersHTTP,xhrProperties)

*Example usages:*
-  uxhr("/logout",x=>alert(x.responseText))
-  uxhr("/login",x=>alert(x.responseText),{username:'admin',password:'admin'})
-  uxhr("/api",x=>alert(x.responseText),JSON.stringify({test:1234}),{'Content-Type':'application/json'})
-  uxhr("/profile",x=>alert(x.response.title),0,0,{responseType:'document'})
-  uxhr("/",x=>alert(x.responseText),0,{'X-Requested-With':'XMLHttpRequest'},{withCredentials:true})
-  uxhr("/",x=>alert(x.responseText),{asd:456},{'Content-Type':'application/x-www-form-urlencoded'},{withCredentials:true},'PUT')

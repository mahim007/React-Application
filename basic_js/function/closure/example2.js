function User(){
    var username, password;
    function dologin(user, pw){
        username=user;
        password=pw;
    }

    var publicApi={
        login: dologin
    };

    return publicApi;
}

var fred=User();
console.log(fred);

fred.login("mahim", 1234);
console.log(fred);
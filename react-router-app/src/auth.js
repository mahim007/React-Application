const Auth = {
    isLoggedIn: false,

    login(cb){
        this.isLoggedIn= true;
        setInterval(cb, 100);
    },

    logout(cb){
        this.isLoggedIn=false;
        setInterval(cb, 100);
    }
};

export default Auth;

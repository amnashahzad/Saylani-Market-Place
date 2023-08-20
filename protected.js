function isAuthenticated() {
    const user = sessionStorage.getItem('user');
    return user !== null;
}

// Check if the user is authenticated
if (!isAuthenticated()) {
    window.location.href = '../sign/sign-in.html' ;
}

const logout = () => {
    sessionStorage.removeItem('user');
    console.log('loging out....');
    window.location.href = '../sign/sign-in.html' ;
}
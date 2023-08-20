function handleItemClick(item) {
    switch (item) {
        case 'Country':
            console.log('Country clicked');
            break;
        case 'Currency':
            console.log('Currency clicked');
            break;
        case 'Language':
            console.log('Language clicked');
            break;
        case 'Pakistan':
            console.log('Pakistan clicked');
            break;
        case 'PKR':
            console.log('PKR clicked');
            break;
        case 'English':
            console.log('English clicked');
            break;
        default:
            break;
    }
}

function handleLogoutButtonClick() {
    console.log('Logout button clicked');
    // You can perform your logout action here.
    // For example, you can redirect the user to the login page after logout:
    window.location.href = '../index.html';
}
// </script>
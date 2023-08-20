// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = firebase.storage();

// Get a reference to the storage location
const storageRef = storage.ref();

const fileUpload = () => {
// Handle file input change event
const fileInput = document.getElementById('fileInput'); // Your file input element
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    // Create a reference to the file in Firebase Storage
    const imageRef = storageRef.child('images/' + file.name);

    // Upload the file to Firebase Storage
    imageRef.put(file).then((snapshot) => {
      console.log('Image uploaded successfully!');
      
      // Get the download URL of the uploaded image
      imageRef.getDownloadURL().then((downloadURL) => {
        console.log('Download URL:', downloadURL);
        
        // Store the download URL in the Realtime Database
        firebase.database().ref('users/' + user.uid).set({
            id: id,
            name: name,
            category: category,
            price: price, 
            quantity: quantity,
            image: downloadURL
        })
            .then(() => {
                const user = { email: email };
                sessionStorage.setItem('user', JSON.stringify(user));
                console.log('User created successfully.')
                window.location.href = '../Home/home.html'
            })
            .catch((error) => {
                console.log(error);
            })
      });
    });
  }
});

}

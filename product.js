const app = firebase.initializeApp(firebaseConfig);
console.log(app)

const storage = firebase.storage();
const storageRef = storage.ref();
const database = firebase.database();

const fileUpload = (file) => {
    let product = {
        name: document.getElementById('item-name').value,
        category: document.getElementById('category').value,
        description: document.getElementById('description').value,
        unit: document.getElementById('unit-name').value,
        price: document.getElementById('unit-price').value,
        qunatity: document.getElementById('quantity').value,
        image: '',
    }
    console.log('File: ', file)
    // Handle file input change event // Your file input element
    if (file) {
        // Create a reference to the file in Firebase Storage
        const imageRef = storageRef.child('images/' + file.name);

        // Upload the file to Firebase Storage
        imageRef.put(file).then((snapshot) => {
            console.log('Image uploaded successfully!');

            // Get the download URL of the uploaded image
            imageRef.getDownloadURL().then(function (url) {
                console.log('Download URL:', url);
                product.image = url;
                console.log(product);

                // Store the download URL in the Realtime Database
                let productsRef = database.ref('products');
                productsRef.push(product).then(function () {
                    console.log('Product data uploaded successfully');
                }).catch(function (error) {
                    console.error('Error uploading product data:', error);
                });
            })
                .catch((error) => {
                    console.log(error);
                });
        })
    }
}

const addProduct = async () => {
    let fileInput = document.getElementById('photo');
    let file = fileInput.files[0];
    await fileUpload(file);
}

const getProducts = () => {
    let products = [];
    let productsRef = database.ref('products');
    productsRef.once('value').then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            let productData = childSnapshot.val();
            products.push(productData);
        });
        console.log('Products: ', products);
    
            document.getElementById('productName').innerHTML = products[0].name;
            document.getElementById('productDesc').innerHTML = products[0].description;
            document.getElementById('productPrice').innerHTML = products[0].price;
            document.getElementById('productImage').src = products[0].image;
        
    }).catch(function (error) {
        console.error('Error retrieving product data:', error);
    });
}
getProducts();



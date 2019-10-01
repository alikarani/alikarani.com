function contactUs() {
    
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    message = document.getElementById('message').value;

    firebase.firestore().collection("contact").add({
        name,
        email,
        phone,
        message,
    }).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    }).catch(function (error) {
        console.error("Error adding document: ", error);
    });

}

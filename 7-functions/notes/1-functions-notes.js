function hasLetterZ(text){
    for(let i = 0; i < text.length; i++){
        if(text[i] === 'z' || text[i] === 'Z'){
            return true;
        }
    }
    return false;
}

const applicant = "Zetra Sloan";
if(hasLetterZ(applicant)){
    console.log("Welcome to the Z-club! We are all proud to have that rare letter z in our names!");
} else {
    console.log("Unfortunately you didn't make the cut.")
}
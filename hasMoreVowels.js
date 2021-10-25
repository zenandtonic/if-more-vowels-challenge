// take in a string
// count number of vowels
// count number of consonants
// compare counts
// output true or false


function hasMoreVowels(str){

    const vcount = str.match(/[aeiou]/gi).length;
    const ccount = str.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;

 
    if (vcount > ccount) {
        return true
    } else
        (ccount > vcount) 
        return false
    }

const result = hasMoreVowels('mice');

console.log(result);
function lowerOrUpper(char) {
    /* let character = "" + char;
       if (typeof character === "string") {
           if (character === character.toLowerCase()) {
               console.log(`lower-case`);
           } else {
               console.log(`upper-case `);
           }
       } else {
           character = character.toString();
           if (character === character.toLowerCase()) {
               console.log(`lower-case`);
           } else {
               console.log(`upper-case `);
           }                                       
       }                                                 */

    let character = char.charCodeAt(0);
    if (character >= 97 && character <= 122) {
        console.log(`lower-case`);
    } else {
        console.log(`upper-case `);
    }
}
lowerOrUpper('U');
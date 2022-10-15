function charsToString(par1, par2, par3) {
    let result = "";
    if (typeof par1 === "string" && typeof par2 === "string" && typeof par3 === "string") {
        result += `${par1}${par2}${par3}`;
    } else {
        par1 = par1.toString();
        par2 = par2.toString();
        par3 = par3.toString();
        result += `${par1}${par2}${par3}`;
    }
    console.log(result);
}
charsToString('a', 3, 'c')
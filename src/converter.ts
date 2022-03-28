function converter(num:string): boolean {
    try {
        var numFloat = parseFloat(num);
        return true;
    }
    catch (err) {
        return false;
    }

}

export default converter;
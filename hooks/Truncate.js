

function truncateHeadline(str) {
    return str.length > 10 ? str.substring(0, 7) + "..." : str;
}

function truncateSublie(str){
    return str.length > 100 ? str.substring(0,100) + "..." : str;
}


export {
    truncateHeadline,
    truncateSublie
}

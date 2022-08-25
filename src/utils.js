export function getFullYear() {
    return (new Date().getFullYear());
}

export function getFooterCopy(isIndex) {
    let result ='';
    if (isIndex === true){
        result='Holberton School';
    }
    else{
        result='Holberton School main dashboard';
    }
    return (result);
}


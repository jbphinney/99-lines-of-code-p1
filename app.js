let friends = ['John:', 'Will:', 'Bob:', 'Bill:', 'Georage:'];

for(let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    let name = friends[i];
    let num = 100;
    let limit = 99;
    for(let i = 0; i < limit; i++) {
        num -= 1;
        if ( num == 0){
            break
        }else{
            console.log(num + ' lines of code in the file, ' + num + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + num + ' lines of code in the file');
        }
        
    };
};
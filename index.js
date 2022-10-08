// Flatten nested array

const arr = [1, 2, [3, 4, 5], [6, [7, 8]]];

function flatten(arr){
    array = arr.reduce(( acc, item) => {
        if(Array.isArray(item)){
            acc = acc.concat(flatten(item))
        }else{
            acc.push(item)
        }
        return acc
    }, [])

    return array;
}

console.log(flatten(arr))

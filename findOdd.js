function findOdd(arr) {
    var mapper = {}
    for (var i = 0; i < arr.length; i++)
    {
        var num = arr[i]
        if(!mapper[num]) mapper[num] = 0
        mapper[num] += 1
    }
    for (key in mapper)
    {
        if((mapper[key] % 2) === 1) return key
    }
}
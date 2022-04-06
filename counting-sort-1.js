function countingSort(arr) {
    var result = [];

    for (let i = 0; i < 100; i++) {
        result.push(0)
    }

    // take result and sort, incrementing value
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] += 1
    }

}


const smallest = (arr1, arr2)=>{
    let diff;

    for(let i = 0 ;i< arr1.length; i++){
        for(let x= 0; x<arr2.length; x++){
            let currDiff;

            if(arr1[i] - arr2[x] < 0){
                currDiff = arr2[x]-arr1[i]
            } else{
                currDiff = arr1[i] - arr2[x]
            }

            console.log(`Difference: ${diff}, Current Diff: ${currDiff}`)
            if(diff == undefined || diff > currDiff){
                diff = currDiff
            }
        }
    }
    return diff
}


console.log(smallest([20, 18, 14, 16, 10], [30, 96, 54, 33, 23]))
{/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1)
*/}

function updateInventory(arr1, arr2) {

    //if empty arr1 
    if(arr1.length === 0){
        arr1 = arr2
        arr2 = 0
    }    

    //add inventory
    for(let i = 0; i < arr2.length; i++ ){

        for(let j = 0; j < arr1.length; j++ ){
            if(arr2[i][1] === arr1[j][1]){ 
                arr1[j][0] = arr1[j][0] + arr2[i][0];
                break
            }else if(arr1[j][1] === arr1[arr1.length-1][1]){
                arr1.push(arr2[i])
                break
            }
        }
    }
    

    //alphabetical order
    arr1.sort(function(a, b){
        if(a[1] < b[1]) { return -1; }
        if(a[1] > b[1]) { return 1; }
        return 0;
    })

    return arr1
}

// Example inventory lists
var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];

console.log(updateInventory(curInv, newInv));
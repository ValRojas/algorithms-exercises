{/*
Goal:

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

*/}

function sym(...args) {
  const result = [];
  let arrays, index;

//check for duplicate elements in each array
  for(let i = 0; i < args.length; i++ ){ //we are in an array

    arrays = []
    for(let j = 0; j < args[i].length; j++ ){ //check each element inside that array
      if(!arrays.includes(args[i][j])){
        arrays.push(args[i][j])
      }
    }
    args[i] = arrays

  }

//create the result
  for(let i = 0; i < args.length; i++ ){

    for(let j = 0; j < args[i].length; j++){ //check first element in that array till last one
      if(!result.includes(args[i][j])){
        result.push(args[i][j])
      }else{
        index = result.indexOf(args[i][j])
        result.splice(index, 1);
      }
    }
    
  }
  return result
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); //[1, 4, 5]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //[2, 3, 4, 6, 7]
sym([1, 2, 3], [5, 2, 1, 4, 5]); //[3, 4, 5]

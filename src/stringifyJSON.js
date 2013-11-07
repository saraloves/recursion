// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:


var stringifyJSON = function (obj) {
  console.log(typeof obj);
  if (obj === null) {
      return "null";
    }
  if (typeof obj !== 'object') {
    if (typeof obj === 'string') {
      return "\"" + obj + "\"";
    }
    if (typeof obj === 'number' || 'boolean') {
      return obj.toString();
    }
  } else if (typeof obj === 'object') {
    console.log("This is an object");

      var stringifyProperties = function (obj) {
        if (Array.isArray(obj)) {
          var test = "";
          for (var i = 0; i < obj.length; i++) {
            if (i === obj.length - 1) {
              test += stringifyJSON(obj[i]);
            } else {
              test += stringifyJSON(obj[i]) + ",";
            }
            console.log("Recursion result: " + stringifyJSON(obj[i]));
          }
        return(test);
        
        }
        for (var key in obj) { //work on obj syntax
        	  var test = "";
          for (var key in obj) {
            if (i === obj.length - 1) {
              test += stringifyJSON(obj.i);
            } else {
              test += stringifyJSON(obj.i) + ",";
            }
            console.log("Recursion result: " + stringifyJSON(obj.i));
          }
        return(test);
        }
      };

    if (Array.isArray(obj)) {
      return "[" + stringifyProperties(obj) + "]";
    } else {
      return "{" + stringifyProperties(obj) + "}";   
    }

  }
};



// var stringifyJSON = function (obj) {
//   console.log(typeof obj);
//   if (obj === null) {
//       return "null";
//     }
//   if (typeof obj !== 'object') {
//     if (typeof obj === 'string') {
//       return "\"" + obj + "\"";
//     }
//     if (typeof obj === 'number' || 'boolean') {
//       return obj.toString();
//     }
//   } else if (typeof obj === 'object') {
//     console.log("This is an object");

//       var stringifyProperties = function (obj) {
//         if (Array.isArray(obj)) {
//           for (var i = 0; i<obj.length; i++) {
//           	var test = "";
//           	test += stringifyJSON(obj[i]);
//             console.log("Recursion result: " + stringifyJSON(obj[i]));
//             return(stringifyJSON(obj[i]));
//           }
        
//         }
//         for (var key in obj) {
//             return stringifyJSON(obj.keys);
//         }
//       };

//     if (Array.isArray(obj)) {
//       return "[" + stringifyProperties(obj) + "]";
//     } else {
//       return "{" + stringifyProperties(obj) + "}";   
//     }

//   }
// };




// var stringifyJSON = function (obj) {
// 	console.log(typeof obj);
// 	if (obj === null) {
//       return "null";
//     }
//   if (typeof obj !== 'object') {
//     if (typeof obj === 'string') {
//       return "\"" + obj + "\"";
//     }
//     if (typeof obj === 'number' || 'boolean') {
//       return obj.toString();
//     }
//   } else if (typeof obj === 'object') {
//   	console.log("This is an object");
//   	if (Array.isArray(obj)) {
//   		for (var i = 0; i<obj.length; i++) {
//   			return stringifyJSON(obj[i]);
//   		}

//   	}
//     for (var key in obj) {
//         return stringifyJSON(obj.keys);
//     }
//     if (Array.isArray(obj)) {
//       return "[" + obj + "]";
//     } else {
//       return "{" + obj + "}";   
//     }

//   }
// };



//Former non-recursion code
// var stringifyJSON = function (obj) {
// 	if (obj === null) {
// 		return "null";
// 	}
// 	if (typeof obj === 'string') {
// 		return "\"" + obj + "\"";
// 	}

// 	if (typeof obj === 'number') {
// 		return obj.toString();
// 	}

// 	if (typeof obj === 'object') {
// 		if (Array.isArray(obj)) {
// 			newObj = addQuotesToStringsInArrays(obj);
// 			return "[" + newObj + "]";
// 		}else { 
// 			var newString = stringifyString();
// 			for (var key in obj) {
// 				newString[key] = obj[key];
// 			}
// 			return obj;
// 		}
// 	}

// 	return obj.toString();
// };


// var addQuotesToStringsInArrays = function(arr){
// 	var stringified = [];
// 	for (var i = 0; i<arr.length; i++) {
// 		if (Array.isArray(arr[i])) {

// 		}
// 		if (typeof arr[i] === 'string') {
// 			console.log("I'm a string");
// 			stringified.push("\"" + arr[i] + "\"");
// 		} else {
// 			stringified.push(arr[i]);
// 		}
// 	}
// 	return stringified;
// };

// // var stringifyJSON = function(obj) {
// // 	if (obj === null) {
// // 	  return "null";
// // 	} else if (obj.length === 0) {
// // 	  return;
// // 	} else {
// // 	  return obj.toString();
// // 	}
// // };

// var stringifyString = function(obj){
// 	var stringified = {};
// 	for (var key in obj) {
// 		if (obj.key === 'string' && key === 'string') {
// 			stringified["\""+ key + "\""] = "\"" + obj.key + "\'";
// 		} else if (obj.key === 'string') {
// 			stringified.key = "\"" + obj.key + "\"";
// 		} else if (key === 'string') {
// 			stringified["\"" + key + "\""] = obj.key
// 		} else {
// 			stringified.key = obj.key;
// 		}
// 	}
// 	return stringified;
// };





// var myArray = [1,2,3,[[],5,6]];

// for (var i = 0; i < myArray.length; i++) {
// 	console.log(myArray[i]);
// };




// So I know that if I use .toString(); it will disregard the package 
// the string is in.

// I know that if I console.log array within array, it will show 
// the different arrays



// myArray = [[[[[5]]]]];

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:


var stringifyJSON = function (obj) {
  console.log(obj);
  //this is what we do to non-objects
  if (obj === null) {
    return "null";
  }
  if (obj === undefined) {
    return "";
  }
  if (typeof obj === 'function') {
    return "";
  }
  if (typeof obj !== 'object') {
    if (typeof obj === 'string') {
      return "\"" + obj + "\"";
    }
    if (typeof obj === 'number' || 'boolean') {
      return obj.toString();
    }
  } else if (typeof obj === 'object') {
    //this is what we do if it's an object
    console.log("This is an array or an object");
      //this is a recursive function that returns elements within 
      //objects as strings
      var stringifyProperties = function (obj) {
        //this is what happens if the object is an array
        //this is accessed when object is object

        if (Array.isArray(obj)) {
          console.log("Access Point 1");
          var test = "";
          for (var i = 0; i < obj.length; i++) {
            console.log("Access Point 2");
            if (i === obj.length - 1) {
              test += stringifyJSON(obj[i]);
            } else {
              test += stringifyJSON(obj[i]) + ",";
            }
            console.log("Recursion result: " + stringifyJSON(obj[i]));
          }
        console.log("Access Point 3");
        return(test);
        
        //this is what happens if the object is an object
        } else {
          var test = "";
          var counter = 0; 
          var countElements = function(obj) {
            var size = 0, key;
              for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
                }
                return size;
            };
          var length = countElements(obj);
          for (var key in obj) {
            if (stringifyJSON(obj[key]) !== "") {
              test += stringifyJSON(key);
              test += ":";
              test += stringifyJSON(obj[key]);
              counter++;
              if (counter<length) {
                test += ",";
              }
            } else {
              test += "";
              counter++;
            }
          }
        }
        return test;
      };

    if (Array.isArray(obj)) {
      return "[" + stringifyProperties(obj) + "]";
    } else {
      //this is being accessed 
      return "{" + stringifyProperties(obj) + "}";   
    }

  }
};


// var stringifyJSON = function (obj) {
//   console.log(typeof obj);
//   //this is what we do to non-objects
//   if (obj === null) {
//       return "null";
//     }
//   if (obj === undefined) {
//     return;
//   }
//   if (typeof obj !== 'object') {
//     if (typeof obj === 'string') {
//       return "\"" + obj + "\"";
//     }
//     if (typeof obj === 'number' || 'boolean') {
//       return obj.toString();
//     }
//   } else if (typeof obj === 'object') {
//     //this is what we do if it's an object
//     //console.log("This is an array or an object");
//       //this is a recursive function that returns elements within 
//       //objects as strings
//       var stringifyProperties = function (obj) {
//         //this is what happens if the object is an array
//         //this is accessed when object is object

//         if (Array.isArray(obj)) {
//           console.log("Access Point 1");
//           var test = "";
//           for (var i = 0; i < obj.length; i++) {
//             console.log("Access Point 2");
//             if (i === obj.length - 1) {
//               test += stringifyJSON(obj[i]);
//             } else {
//               test += stringifyJSON(obj[i]) + ",";
//             }
//             console.log("Recursion result: " + stringifyJSON(obj[i]));
//           }
//         console.log("Access Point 3");
//         return(test);
        
//         //this is what happens if the object is an object
//         } else if (obj) {
//           //this is being accessed
//         var test = "";
//         for (var key in obj) { 
//             console.log("Access Point 4");     
//           for (var key in obj) {
//             if (i === obj.length - 1) {
//               test += stringifyJSON(obj.i);
//             } else {
//               test += stringifyJSON(obj.i) + ",";
//             }
//             console.log("Recursion result: " + stringifyJSON(obj.i));
//           }
//           console.log("Access Point 5");
//           return(test);
//         }
//         } else {
//           console.log("Access Point 6");
//           return test;
//         };
//       };

//     if (Array.isArray(obj)) {
//       return "[" + stringifyProperties(obj) + "]";
//     } else {
//       //this is being accessed 
//       return "{" + stringifyProperties(obj) + "}";   
//     }

//   }
// };



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

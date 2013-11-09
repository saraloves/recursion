// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function (className) {
  var elements = [];
  var doWork = function(elements, currentNode) {
    var elements = elements || [];
    var currentNode = currentNode || document.body;
    var classList = currentNode.classList;
    // if the element contains the class name, save the element in elements
    for (var key in classList) {
      if (classList[key] === className) {
        //console.log(currentNode);
        elements.push(currentNode);
      }
    }
    //console.log(elements);
    //return elements;
    //base case: if there are no more child elements.  
    //


    if (currentNode.childNodes[0] === undefined) {
      console.log(elements);
    }

    else {
      for (var i = 0; i<currentNode.childNodes.length; i++) {
        doWork(elements, currentNode.childNodes[i]);
      }

      // while (currentNode.childNodes[x] !== undefined) {
      //   console.log(currentNode.childNodes[x]);
      //   doWork(elements, currentNode.childNodes[x]);
      //   x++;
      // }
    }

    return elements;
  };
  return doWork();
  // console.log('hi1: ', doWork());
  // elements.push(doWork());
  // console.log('hi2: ', elements);

  // return elements;
};


// var getElementsByClassName = function (className) {
//   var elements = [];
//   var doWork = function(elements, currentNode) {
//     var elements = elements || [];
//     var currentNode = currentNode || document.body;
//     var classList = currentNode.classList;
//     // if the element contains the class name, save the element in elements
//     for (var key in classList) {
//       if (classList[key] === className) {
//         console.log(currentNode);
//         elements.push(currentNode);
//       }
//     }
//     //console.log(elements);
//     return elements;
//     //base case: if there are no more child elements.  
//     //

//     if (currentNode.childNodes[0] === undefined) {
//       return elements;
//     }

//     else {
//       x = 0;
//       while (currentNode.childNodes[x] !== undefined) {
//         console.log(currentNode.childNodes[x]);
//         doWork(elements, currentNode.childNodes[x]);
//         x++;
//       }
//     }
//   };
//   elements.push(doWork());
//   return elements;
// };




// var getElementsByClassName = function (className) {
//   //base case: if the element has no more child nodes, return
//   console.log("1 " + elements);
//   var elements = [];

//   var doWork = function (elements) {
//   	var elements = [];
//   	console.log("2 " + elements);
//   	var classObject = document.body.classList;
//   	if (![document.body].childNodes) {
//   		for (var key in classObject) {
//   			console.log("Does " + classObject[key] + " equal " + className);
//   			if (classObject[key] === className) {
//   				console.log("Yes");
//   				elements.push(document.body);
//   			}
//  			}
//   	}
//  		else {
//  			for (var key in document.body.classList) {
//  				console.log("Hi");
//  			}
//  		}
//  		doWork(elements.childNodes);
//  		console.log("3 " + elements);
//  		return elements;
//  	};
//  	elements.push(doWork());
//  	console.log("4 " + elements);
//  	return elements;
//   // your code here
// };

//use document.body, element.childNodes, element.classList
//document.getElementsByClassName





// Tuhin Notes

// document.body //the body

// [document.body].childNodes
// [document.body].classList

// iterating over the children and doing something like checking 
// the tags
// and recursively passing in the children to your function

// For each node it checks for children



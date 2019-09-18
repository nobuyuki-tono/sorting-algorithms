// just example array
var someArray = [0,1,2,3,4,5,6,7,8,9]


// randonm array example

// var rndArray = [9,8,7,6,5,4,3,2,1,0]


// fill array with random numbers
rndArray = fillList(1000)


// show the arrays we are dealing with
console.log(rndArray);
// show the end result
// console.log(bubbleSort(rndArray))


function fillList(itemCount)
    {
        var anArray = [];
    for (var i = 0; i < itemCount; i++)
        {
            anArray.push(Math.floor((Math.random() * 1000) + 1));
        }
        return anArray;
    }



function bubbleSort(theArray)
    {
        // we will need a tmpArray to store values into, we simply copy theArray to tmpArray
        // because otherwise we cannot change the contents of theArray (without risking errors)

        console.time('bubbleSort');
        var start = new Date().getTime();
        
        var tmpArray = theArray;

    
        // lets begin our OUTSIDE loop, this will keep us looping enough times
        // to sort our numbers

       for (var loopCount = 0; loopCount < tmpArray.length; loopCount++)
        {

        // now lets loop from left to right in the array
        for (var n = 0; n<tmpArray.length-1; n++)
                {
                    // console.log(tmpArray)
                // output some information
                // console.log("Checking: " + tmpArray[n] + " is more than " + tmpArray[n+1])

                // check our two elements in the array
                if (tmpArray[n+1] < tmpArray[n])
                    {      
                     // we should switch, the next element is larger than the current  
                     // get from array           
                    var a = tmpArray[n];
                    var b = tmpArray[n+1];
                    //console.log("Switching: " + a + " with " + b)
                    // put back into array
                    tmpArray[n+1] = a;
                    tmpArray[n] = b;
                    }
            
                }
               
            }

            document.getElementById("right-input").value = tmpArray;
             console.timeEnd('bubbleSort')
             var end = new Date().getTime();

             var time2 = end - start;
             document.getElementById("time").innerHTML ="time is " + time2;
            return tmpArray;

            
        }
    // begin a loop from left to right
            // while in the loop
                // take I+1 - check if its < i
                    // if less, then put i+1 into i, and i into i+1

 function generateRudNum(){
   document.getElementById("left-input").value = rndArray;
 }
 
 
 
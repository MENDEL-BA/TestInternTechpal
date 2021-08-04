export function rounds_won( results ) {	 
	var  cptOne = 0;
	 var cptTwo = 0;

	 for( var i = 0; i < results.length; i++) {
    
     if(results[i] === 1){     
		     cptOne++;
		 }else {
		    cptTwo ++;
		 }

	 }

     if(cptOne > cptTwo) {
       return cptOne;
     } else {
       return cptTwo;
     }
}


//rounds_won([1,2,2,2,1]);
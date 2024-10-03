
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; 
    return Math.abs(someValue - hqLocation);
  }
  
 
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  
  function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination - start);
    const feetPerBlock = 264;
    return distanceInBlocks * feetPerBlock;
  }
  

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    
    if (distanceInFeet > 2500) {
      return 'cannot travel that far';
    } else if (distanceInFeet > 2000) {
      return 25; // Flat fare for distances over 2000 feet
    } else if (distanceInFeet > 400) {
      return (distanceInFeet - 400) * 0.02; 
    } else {
      return 0; 
    }
  }
  
  
  console.log(distanceFromHqInBlocks(43)); 
  console.log(distanceFromHqInFeet(50)); 
  console.log(distanceTravelledInFeet(34, 38)); 
  console.log(calculatesFarePrice(34, 38)); 


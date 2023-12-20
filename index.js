// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  function matchName(driver, hometown) {
    return driver.filter(driver => driver.name ===(hometown));
  }
    
  
    
  

  
    
        

    

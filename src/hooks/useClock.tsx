import React from 'react';
  // TODO
  interface time { 
   hour:any;
   minutes:any;
   seconds:any
  }
 const useClock = ():time => {
    const locale = 'en';
    const [today] = React.useState(new Date()); // Save the current date to be able to trigger an update
    const hour = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true,});
    const minutes = today.toLocaleTimeString(locale, {  minute: 'numeric' });
    const seconds = today.toLocaleTimeString(locale, {  second: 'numeric' });
    
    return {
      hour,
      minutes,
      seconds
    };
    
  };
  


export default useClock;

/*
hours = for 12 hours 360*
        for 1hour 360/12 = 30*
        for m hours = m*30*
and add minutes -- for 1 hour 30*
                   for 1 minute 30/60 = 1/2 = m/2
    for hours hand=m*30* + m/2

minutes = for 60 minutes 360*
        for 1 minute 360* / 60* = 6*
        for minutes hand = m*6*
seconds = for 60 seconds 360*
          for 1 second 6*
         for seconds hand = m*6*
    */

setInterval(()=>{
   d=new Date();
   d = new Date();
   hTime = d.getHours();
   mTime = d.getMinutes();
   sTime = d.getSeconds();
   hRotation = hTime * 30 + mTime / 2;
   mRotation = mTime * 6;
   sRotation = sTime * 6;

   document.getElementById('hour').style.transform = `rotate(${hRotation}deg)`;
   document.getElementById('minute').style.transform = `rotate(${mRotation}deg)`;
   document.getElementById('second').style.transform = `rotate(${sRotation}deg)`;
},1000)

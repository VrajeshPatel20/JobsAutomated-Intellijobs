import React from 'react';
import logo from './logo.jpg';

const Support = () => {
  return (
  <div className='container'>
      
      <div className ="fillout_info">Give us feedback</div>
      <div className='single-job-container'>
          <div className='single-job'>
            <textarea type='text' rows = "10" cols = "100" maxLength= "1000" placeholder='Whats bothering you? Tell us' style = {{resize:"none"}} />
          </div>
          <div className='single-job' style = {{marginTop: "5px"}}><button className='singlejob-btn'>Submit</button></div>
          <hr/>
          <ul>
              <li>Email Us: abc@notgonnareply.com</li>
              <li>Call Us: (905)XXX-XXXX </li>
          </ul>

        </div>
        
    </div>
  )
};

export default Support;

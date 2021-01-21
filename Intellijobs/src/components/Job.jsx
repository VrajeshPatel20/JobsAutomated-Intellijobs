import React from 'react';

const Job = props => {
  const jobId = props.job.id;
  return (
    <div className='job__container'>
      <div className='right__container'>
        <div className='title'>{props.job.text}</div>
        <div className='apply_url'>
          <a href={props.job.applyUrl} target='blank'>
            {props.job.applyUrl}
          </a>
        </div>
      </div>
      <div className='left__container'>
        <input
          type='checkbox'
          name='job'
          id='job'
          onChange={() => props.handleCheck(jobId)}
        />
      </div>
    </div>
  );
};

export default Job;

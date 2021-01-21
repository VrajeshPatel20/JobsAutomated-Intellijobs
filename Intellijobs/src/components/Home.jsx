import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Job from './Job';
import axios from 'axios';
import _ from 'lodash';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      jobList: [],
      selectedJobList: [],
    };
  }

  handleCompanyChange = async e => {
    e.preventDefault();
    this.setState({
      company: e.target.value,
    });
    let { data } = await axios.get(
      `https://api.lever.co/v0/postings/${e.target.value}`,
    );
    data = data.map(job => {
      return (job = { ...job, checked: false });
    });
    this.setState({ jobList: data });
  };

  handleCheck = id => {
    let selectedJobList = [...this.state.selectedJobList];
    let result = selectedJobList;
    const { jobList } = this.state;
    for (let i in jobList) {
      if (jobList[i].id === id) {
        // eslint-disable-next-line no-lone-blocks
        {
          jobList[i].checked
            ? (jobList[i].checked = false)
            : (jobList[i].checked = true);
        }
        if (jobList[i].checked) {
          selectedJobList.push(jobList[i]);
        } else {
          result = _.remove(selectedJobList, function (n) {
            return n.id !== id;
          });
        }
        this.setState({ selectedJobList: result });
        this.setState({ jobList });
      }
    }
  };

  handleClick = async () => {
    console.log('handleClicked');
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      await axios.post('http://localhost:3001/', {
        array: this.state.selectedJobList,
        user: user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleSingleClick = async () => {
    console.log('handleSingleClick');
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(this.state.single);
    try {
      await axios.post('http://localhost:3001/', {
        array: [{ applyUrl: this.state.single }],
        user: user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='fillout_info'>
          {' '}
          <Link
            to='/form'
            style={{
              textDecoration: 'none',
              color: 'black',
              borderBottom: 'black dotted',
            }}>
            Fill out your Info
          </Link>
        </div>
        <div className='single-job-container'>
          <div className='single-job'>
            <input
              type='text'
              placeholder='Provide the Job Lever Link here'
              name='single'
              onChange={this.handleInputChange}
            />
            <button
              className='singlejob-btn'
              onClick={() => this.handleSingleClick()}>
              Apply to this job
            </button>
          </div>
        </div>
        <hr />
        <div className='controls'>
          <div className='company_option'>
            <select
              name='company'
              id='company'
              onChange={this.handleCompanyChange}>
              <option value=''>Select a company</option>
              <option value='netflix'>Netflix</option>
              <option value='kpmg'>KPMG</option>
              <option value='shopify'>Shopify</option>
            </select>
          </div>
          <div className='title_option'>
            <select name='title' id='title'>
              <option value=''>Select a Job Title</option>
              <option value='netflix'>Senior Software Engineer</option>
            </select>
          </div>
          <div className='apply__btn__container'>
            <button className='apply_btn' onClick={() => this.handleClick()}>
              Apply to selected jobs
            </button>
          </div>
        </div>
        <div className='jobList__container'>
          <ul>
            {this.state.jobList.map(job => {
              return (
                <Job key={job.id} job={job} handleCheck={this.handleCheck} />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;

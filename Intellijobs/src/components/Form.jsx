import React, { Component } from 'react';
import './../styles/app.scss';
import './../styles/_form.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      currentCompany: '',
      twitter: '',
      github: '',
      portfolio: '',
      otherWebsite: '',
      additional: '',
      resume: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // if user exists in local storage, pre populate the table
    if (localStorage.getItem('user') !== null) {
      var userString = localStorage.getItem('user');
      console.log(userString);
      let user = JSON.parse(userString);
      this.setState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        currentCompany: user.currentCompany,
        twitter: user.twitter,
        github: user.github,
        portfolio: user.portfolio,
        otherWebsite: user.otherWebsite,
        additional: user.additional,
        resume: user.resume,
      });
    }
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    if (name === 'resume') {
      this.setState({
        [name]: event.target.files[0],
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      currentCompany: this.state.currentCompany,
      twitter: this.state.twitter,
      github: this.state.github,
      portfolio: this.state.portfolio,
      otherWebsite: this.state.otherWebsite,
      additional: this.state.additional,
      resume: this.state.resume,
    };
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));

    toast.info('Information has been saved.');
    this.props.history.push('/');
  }

  render() {
    return (
      <>
        <div className='container text-center my-4'>
          <h1>Your Information</h1>
          <small>
            (So we have everything we need when applying on your behalf)
          </small>
        </div>
        <div className='container form_container rounded text-center my-4'>
          <form onSubmit={this.handleSubmit} className='my-3'>
            <h5 className='text-left mt-5 mb-3 font-weight-light'>
              BASIC INFO
            </h5>
            <div className='row text-left'>
              <div className='col-sm-6'>
                <label htmlFor='resume'>Resume</label>
              </div>
              <div className='col-sm-6'>
                <input
                  type='file'
                  name='resume'
                  id='resume'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='row text-left'>
              <div className='col-sm-6'>
                <label htmlFor='firstName'>First Name</label>
              </div>
              <div className='col-sm-6'>
                <input
                  type='name'
                  name='firstName'
                  id='firstName'
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className='row text-left'>
              <div className='col-sm-6'>
                <label htmlFor='lastName'>Last Name</label>
              </div>
              <div className='col-sm-6'>
                <input
                  type='name'
                  name='lastName'
                  id='lastName'
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className='row text-left'>
              <div className='col-sm-6'>
                <label htmlFor='email'>Email</label>
              </div>
              <div className='col-sm-6'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className='row text-left'>
              <div className='col-sm-6'>
                <label htmlFor='email'>Phone</label>
              </div>
              <div className='col-sm-6'>
                <input
                  type='tel'
                  name='phone'
                  id='phone'
                  value={this.state.phone}
                  minLength='10'
                  maxLength='10'
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className='row text-left'>
              <div className='col-sm-6'>
                <label htmlFor='currentCompany'>Current company</label>
              </div>
              <div className='col-sm-6'>
                <input
                  type='text'
                  name='currentCompany'
                  id='currentCompany'
                  value={this.state.currentCompany}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <h5 className='text-left mt-5 mb-3 font-weight-light'>
              SOCIAL LINKS
            </h5>
            <div className='row text-left'>
              <div className='col-sm-6'>
                <label htmlFor='otherWebsite'>LinkedIn URL</label>
              </div>
              <div className='col-sm-6'>
                <input
                  type='url'
                  name='otherWebsite'
                  placeholder='https://www.linkedin.com/in/[username]'
                  id='linkedin'
                  value={this.state.otherWebsite}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className='row text-left'>
              <div className='col-sm-6'>
                <label htmlFor='github'>Github URL</label>
              </div>
              <div className='col-sm-6'>
                <input
                  type='url'
                  name='github'
                  id='github'
                  value={this.state.github}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='row text-left'>
              <div className='col-sm-6'>
                <label htmlFor='portfolio'>Portfolio URL</label>
              </div>
              <div className='col-sm-6'>
                <input
                  type='url'
                  name='portfolio'
                  id='portfolio'
                  value={this.state.portfolio}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='row text-left'>
              <div className='col-sm-6'>
                <label htmlFor='twitter'>Twitter URL</label>
              </div>
              <div className='col-sm-6'>
                <input
                  type='url'
                  name='twitter'
                  id='twitter'
                  value={this.state.twitter}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='row text-left'>
              <div className='col-sm-6'>
                <label htmlFor='additional'>Additonal info</label>
              </div>
              <div className='col-sm-6'>
                <textarea
                  type='textarea'
                  name='additional'
                  id='additional'
                  value={this.state.additional}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className='singlejob-btn mt-4' type='submit'>
              Save
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Form;

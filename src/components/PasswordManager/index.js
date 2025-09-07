import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    showPasswords: false,
  }

  addPassword = event => {
    event.preventDefault()
    const {website, username, password, passwordsList} = this.state
    if (website && username && password) {
      const newPassword = {id: uuidv4(), website, username, password}
      this.setState({
        passwordsList: [...passwordsList, newPassword],
        website: '',
        username: '',
        password: '',
      })
    }
  }

  deletePassword = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(item => item.id !== id),
    }))
  }

  render() {
    const {
      passwordsList,
      website,
      username,
      password,
      searchInput,
      showPasswords,
    } = this.state

    const stateFields = {website, username, password}

    const filteredPasswords = passwordsList.filter(item =>
      item.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="password-manager">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="add-password-container">
            <form onSubmit={this.addPassword} className="add-password-form">
              <h1 className="main-heading">Add New Password</h1>
              <div className="input-container">
                {['website', 'username', 'password'].map(field => (
                  <div key={field} className="input-with-image">
                    <img
                      src={`https://assets.ccbp.in/frontend/react-js/password-manager-${field}-img.png`}
                      alt={field}
                      className="input-image"
                    />
                    <input
                      type={field === 'password' ? 'password' : 'text'}
                      placeholder={`Enter ${
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }`}
                      value={stateFields[field]}
                      onChange={e => this.setState({[field]: e.target.value})}
                      className="input"
                    />
                  </div>
                ))}
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              alt="password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="img-1"
            />
          </div>
          <div className="passwords-section">
            <div className="search-section">
              <h1 className="section-heading">
                Your Passwords{' '}
                <span className="passwords-count">
                  {filteredPasswords.length}
                </span>
              </h1>
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-image"
                />
                <input
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={e => this.setState({searchInput: e.target.value})}
                  className="search-input"
                />
              </div>
            </div>
            <hr />
            <label className="show-passwords-label">
              <input
                type="checkbox"
                checked={showPasswords}
                onChange={() => this.setState({showPasswords: !showPasswords})}
              />
              Show passwords
            </label>
            {filteredPasswords.length === 0 ? (
              <div className="no-passwords-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-image"
                />
                <p className="no-passwords-text">No Passwords</p>
              </div>
            ) : (
              <ul className="passwords-list">
                {filteredPasswords.map(
                  ({id, website: site, username: user, password: pwd}) => (
                    <li key={id} className="password-item">
                      <p className="website">{site}</p>
                      <p className="username">{user}</p>
                      <p className="password">
                        {showPasswords ? pwd : '********'}
                      </p>
                      <button
                        className="delete-button"
                        type="button"
                        onClick={() => this.deletePassword(id)}
                      >
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                          alt="delete"
                        />
                      </button>
                    </li>
                  ),
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager

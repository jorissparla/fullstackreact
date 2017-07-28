import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';
import Payments from './Payments';

const BHeader = glamorous.nav({
  backgroundColor: 'palevioletred',
  justifyContent: 'center',
  alignItems: 'center'
});

const Img = glamorous.img({
  borderRadius: '50%',
  justifyContent: 'center',
  paddingTop: 10,
  width: 48,
  height: 48
});

const User = glamorous.div({
  display: 'flex'
});

class Header extends Component {
  renderContent = () => {
    const { auth } = this.props;
    console.log(auth);
    switch (auth) {
      case null:
        return '';
      case false:
        return (
          <li>
            <a href="/auth/google">Log In with Google </a>
          </li>
        );
      default:
        return (
          <div>
            <li>
              <Payments />
            </li>
            <li>
              <User>
                <Img src={auth.googlePictureURL} alt="P" />
                <a href="/api/logout">Logout</a>
              </User>
            </li>
          </div>
        );
    }
  };
  render() {
    const { user } = this.props;
    return (
      <BHeader>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right ">
            {this.renderContent()}
          </ul>
        </div>
      </BHeader>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);

import React from 'react';
import classes from './style.module.css';

const LoginFooter = () => {
  return (
    <footer className={classes.NetflixLoginPageFooter}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className={classes.list}>
              <li className={classes.item}><a className={classes.anchor} href="#">Questions? Contact us.</a></li>
              <li className={classes.item}><a className={classes.anchor} href="#">Gift Card Terms</a></li>
              <li className={classes.item}><a className={classes.anchor} href="#">Terms of Use</a></li>
              <li className={classes.item}><a className={classes.anchor} href="#">Privacy Statement</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LoginFooter;
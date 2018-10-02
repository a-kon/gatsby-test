import React from "react";
import { Link } from "gatsby";
import {Helmet} from "react-helmet";

export default () => (
  <React.Fragment>
    <Helmet>
		<meta name="google-site-verification" content="2k-0lHun-6h1fS8bvzZrWQUSBEazYUcCRMHJsEynICM" />
    </Helmet>
	<div style={{ color: `purple` }}>
		<h1>Hello Gatsby!</h1>
		<p>What a world.</p>
		<Link to="/about/">About</Link>
  	</div>
  </React.Fragment>
)

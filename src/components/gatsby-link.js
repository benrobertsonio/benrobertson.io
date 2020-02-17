/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const GatsbyLink = (props) =>
  <Link
    {...props}
    activeClassName='active'
    sx={{
      color: 'inherit',
      '&.active': {
        color: 'primary',
      }
    }}
  />
  ;

export default GatsbyLink;

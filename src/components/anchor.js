/** @jsx jsx */
import { jsx, Link } from 'theme-ui';
import { Link as GatsbyLink } from 'gatsby';

const Anchor = (props) =>
  <Link
    {...props}
    activeClassName='active'
    as={GatsbyLink}
  />
  ;

export default Anchor;

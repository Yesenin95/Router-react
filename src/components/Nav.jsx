import { ConnectedLink } from 'react-router5';

export default () =>
  <nav>
    <ConnectedLink routeName="home">Home</ConnectedLink>
      <ConnectedLink routeName="training">Training</ConnectedLink>
    <ConnectedLink routeName="contacts">Contacts</ConnectedLink>
    <ConnectedLink routeName="users">Users</ConnectedLink>
    <ConnectedLink routeName="posts">Posts</ConnectedLink>
  </nav>;
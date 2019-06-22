import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Container, Repository } from './styles';

class CompareList extends React.Component {
  static propTypes = {
    repositories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        stargazers_count: PropTypes.number,
        forks_count: PropTypes.number,
        open_issues_count: PropTypes.number,
        last_commit: PropTypes.string,
        owner: PropTypes.shape({
          login: PropTypes.string,
          avatar_url: PropTypes.string,
        }),
      }),
    ).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        {this.props.repositories.data.map(repo => (
          <Repository ley={repo.id}>
            <header>
              <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              <strong>{repo.name}</strong>
              <small>{repo.owner.login}</small>
            </header>
            <ul>
              <li>
                {repo.stargazers_count} <small>stars</small>
              </li>
              <li>
                {repo.forks_count} <small>forks</small>
              </li>
              <li>
                {repo.open_issues_count} <small>issues</small>
              </li>
              <li>
                {moment(repo.pushed_at).fromNow()} <small>commits</small>
              </li>
            </ul>
          </Repository>
        ))}
      </Container>
    );
  }
}

export default CompareList;

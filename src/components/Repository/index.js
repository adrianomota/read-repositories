import React, { Component } from 'react';
import { Container, Form } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CompareList from '../Repositories';
import logo from '../../assets/logo.png';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import 'font-awesome/css/font-awesome.css';

class Repository extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repositoryInput: '',
    };
  }

  handleRepository = event => {
    event.preventDefault();
    this.props.addRepositoryRequest(this.state.repositoryInput);

    this.setState({ repositoryInput: '' });
  };

  render() {
    const { repositoryInput } = this.state;
    return (
      <>
        <Container>
          <img src={logo} alt="Github Compare" />
          <Form onSubmit={this.handleRepository}>
            <input
              type="text"
              placeholder="usuário/repositório"
              value={repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />

            {console.tron.log(this.props)}
            <button type="submit">
              {this.props.repositories.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
            </button>

            {!!this.props.repositories.error && (
              <span style={{ color: '#F00' }}>{this.props.repositories.error}</span>
            )}
          </Form>

          <CompareList repositories={this.props.repositories} />
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repository);

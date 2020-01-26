import { connect } from 'react-redux'
import { fetchPeople } from '../actions/AsyncActions';
import PeoplePage from '../components/people-page/PeoplePage';

const mapStateToProps = state => ({ people: state.people});
const mapDispatchToProps = {
  onUpdatePage: fetchPeople
}

export const ConnectedPeoplePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PeoplePage);

export default ConnectedPeoplePage;

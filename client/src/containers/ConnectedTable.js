import { Table } from '../components/Table'
import { connect } from 'react-redux'
import { fetchPeople } from '../actions/AsyncActions';

const mapStateToProps = state => ({ people: state.people});
const mapDispatchToProps = {
  onUpdatePage: fetchPeople
}

export const ConnectedTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);

export default ConnectedTable

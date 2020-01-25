import { Table } from '../components/Table'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ people: state.people});

export const ConnectedTable = connect(
  mapStateToProps
)(Table);

export default ConnectedTable

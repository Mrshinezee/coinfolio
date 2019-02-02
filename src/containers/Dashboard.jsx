import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';
import fetchLatestCrypto from '../action/dashboard';

export const mapStateToProps = state => ({
    coin: state.dashboard,
  });

export default connect(
    mapStateToProps,
    {
      fetchLatestCrypto,
    },
)(Dashboard);

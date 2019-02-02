import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Table, Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap';
import GeneralModel from './GeneralModal';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      limit: 4,
      openGeneralModal: false,
    };
  }

  componentDidMount() {
    this.props.fetchLatestCrypto();
  }

  handleNextPage = (e) => {
    e.preventDefault();
    console.log('e', e);
    const { id } = e.target;
    this.setState({ currentPage: Number(id) });
  };

  checkPage = (e) => {
    e.preventDefault();
    console.log('e', typeof Number(e.target.name));
    const id = Number(e.target.name);
    this.setState({ currentPage: id });
  }

  showGeneralModel = () => this.setState({ openGeneralModal: true });

  hideGeneralModel = () => this.setState({ openGeneralModal: false });

  render() {
    const { currentPage, limit, openGeneralModal } = this.state;
    const endHere = currentPage * limit;
    const startHere = endHere - limit;
    const { coin } = this.props.coin;
    const numberOfPages = Math.ceil(coin.length / limit);
    // const coinr = coin.map((val => {}))
    const displayCoin = coin.slice(
      startHere,
      endHere,
    );
    console.log('displayCoin', displayCoin);
    console.log('currentPage', currentPage);
    const samplepage = [];
    for (let x = 1; x <= numberOfPages; x++) {
      samplepage.push(x);
    }

    return (
      <Container>
        <Row>''
          <Col>
            VIEW DASHBOARD
          </Col>
        </Row>
        <Row>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Coin Id</th>
                <th>Coin Name</th>
                <th>Coin Symbol</th>
                <th>Coin Slug</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(displayCoin) && displayCoin.map(singlecoin => {
                const { id, name, symbol, slug } = singlecoin;
                return (
                  <tr key={id}>
                    <th scope="row">0</th>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{symbol}</td>
                    <td>{slug}</td>
                    <td><Button color="primary" onClick={this.showGeneralModel}>Action</Button></td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <GeneralModel
            size="modal-lg"
            backdrop="static"
            title="Confirm Release?"
            content="If you click 'Confirm', this version will be released "
            show={openGeneralModal}
            confirm_button="Confirm"
            cancel_button="Cancel"
            hide={this.hideGeneralModel}
            select_confirm={this.confirmRelease}
          />
        </Row>
        <Row>
          {/* <div class="row justify-content-md-center"> */}
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Pagination aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink previous href="#" />
              </PaginationItem>

              {samplepage && samplepage.map((page, i) => {
                return (
                  <PaginationItem key={i} >
                    <PaginationLink onClick={this.checkPage} name={page}> {page} </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Dashboard;
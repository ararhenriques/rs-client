import React from 'react';
import { Container, Row, Col, Card, CardDeck } from 'reactstrap';
import styled from 'styled-components' ;
import ChipEdit from './chip/chipEdit';
import ChipCreate from './chip/chipCreate';
import ChipInfo from './chip/paperComp';
import Chip from './chip/chip';
import APIURL from '../../helpers/environment';
import './Chips.css'

// const Grid = styled.div`
//  display: grid;
//  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//  grid-gap: 20px;`
class Chips extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chips: [],
            updatePressed: false,
            chipToUpdate: {}
        }
    }

componentDidMount() {
    this.fetchChips()
}
fetchChips = () => {
    fetch(`${APIURL}/chip`, {
        methods: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        })
    })
    .then(res => res.json())
    .then((chipData) => {
    return this.setState({ chips: chipData })
    })
}

chipDelete = (event) => {
    fetch(`${APIURL}/chip/${event.target.id}`, {
        method: 'DELETE',
        body: JSON.stringify({chip: {id: event.target.id } }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        })
    })
    .then((res) => this.fetchChips())
}

chipUpdate = (event, chip) => {
    fetch(`${APIURL}/chip/${chip.id}`, {
      method: 'PUT',
      body: JSON.stringify({ chip }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    })
    .then((res) => {
      this.setState({ 
        chipToUpdate: chip,
        updatePressed: false })
      this.fetchChips();
    })
  }

  setUpdatedChip = (event, chip) => {
      this.setState({
          chipToUpdate: chip,
          updatePressed: true
      })
  }

  render() {
    const chips = this.state.chips.length >= 1 ?
      <Chip chips={this.state.chips} delete={this.chipDelete} update={this.setUpdatedChip} /> :
      <h2>Log the snack to add it to your collection</h2>
      return (
        <div >
          <Row>
          <Col xs="6">
              <ChipCreate token={this.props.token} updateChipsArray={this.fetchChips} />
              </Col>
          
          <Col xs="6">
            {
              //1
              this.state.updatePressed ? <ChipEdit t={this.state.updatePressed} update={this.chipUpdate} chip={this.state.chipToUpdate} /> //2
              : <div></div>
            }
          </Col>  
          </Row>
              {chips}

            
        </div> 
      )
  }
}

export default Chips;
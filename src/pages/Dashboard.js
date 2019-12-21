import React  from 'react';
import { Header, Sidebar } from './Resuables'
import GraphOutlineImage from '../images/graph-outline.png';
import GraphImage from '../images/graph.png';



const Tranctioncard = ({title, value}) => (
  <div className='col-md-6 plr col-max'>
    <div className='card transaction-card'>
      <div className='card-body'>
        <div>
          <p className='title'>{title}</p>
          <p className='value'>{value}</p>
        </div>
        <div>
          <img className='graph-line' src={GraphOutlineImage} alt='grahp' />
          <img src={GraphImage} alt='grahp' />
        </div>
      </div>
    </div>
   </div>
)

const Graphstat = () => (
  <div className='card graph-card'>
      <div className='card-body'>
        <div className='row'>
          <div className='col-md-6'>
            <h5>Today: 5, Aug 2018</h5>
          </div>
          <div className='col-md-6'>
            <select disabled className='graph-select'>
              <option>1 Jan - 1 Jun</option>
            </select>
            <div className='crud-nav'>
              <div></div>
              <div></div>
          </div>
          </div>          
        </div>
        <div className='row graph-dline'>
          <div className='col-md-2'><h6>
            Jan</h6></div>
          <div className='col-md-2'><h6>
            Feb</h6></div>
          <div className='col-md-2'><h6>
            Mar</h6></div>
          <div className='col-md-2'><h6>
            Apr</h6></div>
          <div className='col-md-2'><h6>
            May</h6></div>
          <div className='col-md-2'><h6>
            Jun</h6></div>
        </div>
      </div>
    </div>
)

const Orderspayment = ({title, title1, title2, total}) => (
    <div className='card order-payment'>
      <div className='card-body'>
        <h6>{title}</h6>
        <div className='order-payment-bar'></div>
        <p>{title1} <span className='text-yellow'>20</span></p>
        <p>{title2} <span className='text-green'>80</span></p>
        <p>{total} <span className='text-blue'>100</span></p>
      </div>
    </div>
)

export default()=>{
  return (
    <div>
      <Header />
      <div className='main'>
        <Sidebar />
        <div className='container inner'>
          <div className='row'>
            <div className='col-md-6'>
            <div className='row'>
              <Tranctioncard title='Daily Transaction Volume' value='2,342' />
              <Tranctioncard title='Daily Transaction Value' value='4,000,000' />
              </div>
            </div>
            <div className='col-md-6'>
            <div className='row'>
              <Tranctioncard title='Total Transaction Volume' value='452,000' />
              <Tranctioncard title='Total Transaction value' value='4,000,000' /> 
              </div>             
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-md-8 bg-white plr'>
              <Graphstat />
            </div>
            <div className='col-md-4'>
              <Orderspayment title='Orders' title1='Pending Orders:' title2='Reconciled Orders:' total='Total Orders:' />
              <Orderspayment title='Payments' title1='Un-reconciled Payments' title2='Reconciledm Payments:' total='Total Payments:' />
            </div>
          </div>
          </div>
        </div>
        </div>
  );
}
import React, { Component } from 'react';
import { 
  Row, 
  Col, 
  Tabs, 
} from 'antd';

import ProductPage from './pages/ProductPage';
import GroupPage from './pages/GroupPage';
import SizePage from './pages/SizePage';

import LayoutContentWrapper from '../../../components//utility/layoutWrapper';
import LayoutContent from '../../../components//utility/layoutContent';
const TabPane = Tabs.TabPane;


const steps = [
  {
  title: 'Manage Products',
  noIcon: 'plus-square-o',
  content: <ProductPage />,
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '1'
}, {
  title: 'Product Grouping',
  noIcon: 'layout',
  content:  <GroupPage />,
  description: '',
  help: 'Groceries',
  key: '2'
}, {
  title: 'Sizes',
  noIcon: 'environment-o',
  content: <SizePage />,
  description: '',
  help: 'Groceries',
  key: '11'
}, {
  title: 'Variations',
  noIcon: 'calendar',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '4'
}, {
  title: 'Wholesale',
  noIcon: 'book',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '5'
}, {
  title: 'Lifespan',
  noIcon: 'environment-o',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '9'
}, {
  title: 'Age Range',
  noIcon: 'team',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '6'
},  {
  title: 'Class Range',
  noIcon: 'car',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '7'
}, {
  title: 'Date & Time Range',
  noIcon: 'calendar',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '8'
}, {
  title: 'Add on Options',
  noIcon: 'clock-circle-o',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '10'
}, {
  title: 'Other Fees',
  noIcon: 'global',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '12'
}
];


class BuildYourMall extends Component {
  render() {
    return (
      <LayoutContentWrapper>
        <LayoutContent>
            <Row gutter={24} style={{ marginTop: '0px'}}>
              <Col span="24">
                <Tabs defaultActiveKey='2' size='small'>
                  {steps.map(item =><TabPane key={item.key} tab={<span>{item.title}</span>} >
                  {item.content}
                  </TabPane> )}
                </Tabs>
              </Col>
             </Row>   
            </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

export default BuildYourMall;
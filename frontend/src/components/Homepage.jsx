
import React from 'react';
import millfy from 'millify'
import { Col, Row, Statistic, Typography } from 'antd';

const {Title} = Typography

const Homepage = () => {
  return (
    <>
      <Title level={2} className='heading' >
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Crypto Currencies" value='5'/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value='5'/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value='5'/>
        </Col>
        <Col span={12}>
          <Statistic title="Total 24 hour volume" value='5'/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value='5'/>
        </Col>
        {/* <Col span={12}> */}
          {/* <Statistic title="Total Crypto Currencies" value='5'/> */}
        {/* </Col> */}
      </Row>
    </>
  );
};

export default Homepage;

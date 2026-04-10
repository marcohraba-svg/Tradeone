import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const Layout = () => {
  return (
    <Tabs defaultActiveKey="jobs" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="jobs" title="Jobs">
        {/* Jobs content goes here */}
        <h1>Jobs Section</h1>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        {/* Profile content goes here */}
        <h1>Profile Section</h1>
      </Tab>
    </Tabs>
  );
};

export default Layout;
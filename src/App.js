import './App.css';
import React, { useState } from "react";
import { SiteHeader, Section } from "@valassis/icon-components";
import { LaunchSVG } from '@valassis/icon-components/lib/SVGIcons';
import Content from './Content.js';

function App() {
  const [buttonClickText, setText] = useState("");

  return (
    <div className="App">
      <SiteHeader
        accountMenuItems={[
          <div>Test</div>,
          {
            name: 'My',
            value: 'Option'
          }
        ]}
        breadcrumbs={[
          {
            displayName: 'Diverse Productivity Checker',
            id: 'My'
          }
        ]}
        navigationMenuItems={[
          <div>Test</div>,
          {
            name: 'My',
            rightAttachment: <LaunchSVG fillColor="#123456" />,
            value: 'Option'
          }
        ]}
      />
      <div className="CompTableActionBar">
        <Section
          border
          className="ExpandableSection"
          expandable
          title="Expandable Section"
        >
          <Content 
            imageLink = ""
            recommendationText = ""
          />
        </Section>
      </div>
      
    </div>
  );
}

export default App;
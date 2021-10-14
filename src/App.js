import './App.css';
import React, { useState } from "react";
import { SiteHeader, Section, Select } from "@valassis/icon-components";
import { LaunchSVG } from '@valassis/icon-components/lib/SVGIcons';
import Content from './Content.js';
import ThumbsUp from './thumbsup.svg'
import ThumbsDown from './thumbsdown.svg'

function App() {

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
          expandable
          title="Choose A Team To View"
      >
        <div class="teamDropdown">
          <Select
            label="Select a Team"
            options={[
              'ICON',
              'Ad Optimization',
              'Consumer Experience',
              'User Experience',
              'SF Engineering'
            ]}
            searchable={false}
            selected="ICON"
            outlined={true}
          />
        </div>
      </Section>

      <Section
          border
          expandable
          title="Overall Diversity Score"
        >
          <p class="subhead">ICON Results</p>
          <img class="image" src="https://i.imgur.com/9ZOrycb.png"></img>
          <div class="ratings">
            <div class="flexItems">
              <img src={ThumbsDown}></img>
              <p class="thumbText">Demographic Diversity</p>
            </div>
            <div class="flexItems">
              <img src={ThumbsUp}></img>
              <p class="thumbText">Workplace Diversity</p>
            </div>
            <div class="flexItems">
              <img src={ThumbsUp}></img>
              <p class="thumbText">Inclusivity Rating</p>
            </div>
          </div>
        </Section>

        <Section
          border
          expandable
          title="Demographic Diversity"
        >
          <Content 
            imageLink = "https://i.imgur.com/RNhNbeV.png"
            subhead = "Diverse Executive Teams"
            body = "33% of companies with ethnically diverse executive teams are more likely to outperform their peers on profitability."
          />
        </Section>

        <Section
          border
          expandable
          title="Workplace Diversity"
        >
          <Content 
            imageLink = "https://i.imgur.com/HedtFE4.png"
            subhead = "Gender Diversity"
            body = "22% of companies in the top quartile for gender diversity are more likely to experience above-average profitability."
          />
        </Section>

        <Section
          border
          expandable
          title="Inclusivity Rating"
        >
          <Content 
            imageLink = "https://i.imgur.com/1upNjoo.png"
            subhead = "Innovation"
            body = "12% of organizations with more diverse management teams have higher revenues due to innovation."
          />
        </Section>
      </div>
      
    </div>
  );
}

export default App;
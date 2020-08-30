import React from 'react';
import store from './store.js';
import Feature from './FeatureItem';


export default class Features extends React.Component{
       render(){
           return(
            <div id="features">
              {Object.keys(store.FEATURES).map(feature => 
                  <Feature 
                       options= {store.FEATURES[feature]} 
                       key = {JSON.stringify(feature)}
                       id={JSON.stringify(feature)}
                       name = {JSON.stringify(feature)}
                       feature={feature}
                       state={this.props.state}
                  />

              )}
          </div>
           )
       }
}
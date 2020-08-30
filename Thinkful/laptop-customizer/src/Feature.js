import React from 'react';
//import cuid from 'cuid';
import store from './store.js';
import FeatureItem from './FeatureItem';

export default class Feature extends React.Component{
    render(){
      console.log('feature');    
      return(
          <fieldset className="feature">
          <legend className="feature__name">
              <h3>{this.props.name}</h3>
          </legend>
            
            {this.props.options.map(option => 
               <FeatureItem 
               cost = {option.cost}
               key = {option.name}
               id = {option.name}
               feature = {this.props.feature}
               name = {option.name}
               option={option}
               state ={this.props.state}
              />
            )}
        </fieldset>
        )
    }
}
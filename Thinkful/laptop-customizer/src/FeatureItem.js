import React from 'react';
import store from './store.js';
import App from './App'

export default class FeatureItem extends React.Component{
    render(){
        return(
            <div className="feature__item">
            <input
              type="radio"
              id={JSON.stringify(this.props.name)}
              className="feature__option"
              name={this.props.name}
              checked={this.props.name === this.props.state.selected[this.props.feature].name}
              onChange={e => this.updateFeature(this.props.feature, this.props.option)}
            />
            
            <label htmlFor={this.props.key} className="feature__label">
              {this.props.name} ({store.USCurrencyFormat.format(store.FEATURES[this.props.feature].cost)})
            </label>
            </div>
        )
    }
}
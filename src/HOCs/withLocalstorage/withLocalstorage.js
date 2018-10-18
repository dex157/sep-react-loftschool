import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, initValue) => (WrappedComponent) => {
    return class extends Component {

        saveData = (value) => {
            if(value !== ''){
                save(key, value);
                this.forceUpdate();
            }
        };
        savedData = () => {
            return load(key) || initValue;
        };

        render(){
            return <WrappedComponent savedData={this.savedData()} saveData={this.saveData} {...this.props} />
        }
    }
};

export default withLocalstorage;
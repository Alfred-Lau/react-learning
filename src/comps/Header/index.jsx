import React, {
  Component,
} from 'react';
import TextInput from '../TextInput';

const { createElement, cloneElement } = React;


const BaseComp = () => { return createElement('div', null, 'hello,react.createElement'); };
const ClonedComp = (props) => { return cloneElement(<BaseComp />, { ...props }, 'cloned'); };

export default class Header extends Component {
  // 学习了ref的使用
  componentDidMount() {
    console.log(this.input.testRef());
    this.orignal.focus();
    this.printChildren();
  }

  printChildren = () => {
    const { map, count, only, forEach, toArray } = React.Children;
    const children = this.props.children;
    // map:只遍历第一级
    map(children, (child, i) => {
      console.log('map', child, i);
    });
    // count ：？
    console.log(count('count', children));
    // only
    try {
      console.log(only(children));
    } catch (error) {
      console.log(error);
    }

    // forEach
    forEach(children, (child, i) => {
      console.log('forEach', child, i);
    });
    // toArray
    console.log('toArray', toArray(children));
  }
  render() {
    return (
      <div>
        this is header.
        <BaseComp />
        <ClonedComp name="gl" />
        <TextInput type="text" ref={(e) => { this.input = e; return this.input; }} />
        <input type="text" ref={(e) => { this.orignal = e; return this.orignal; }} />
      </div>
    );
  }
}


// createRef和forwardRef的作用：父组件用于访问子组件，以及子组件对应的dom节点

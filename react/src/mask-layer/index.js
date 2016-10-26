import React, { Component, PropTypes } from 'react';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import { default as Wrapper } from './MaskLayer';

let mousePosition;
let mousePositionEventBinded;

const MaskLayer = React.createClass({

  propTypes: {
    prefixCls: PropTypes.string,
    /** 对话框是否可见*/
    visible: PropTypes.bool,
    /** 点击蒙层是否允许关闭*/
    maskClosable: PropTypes.bool,
    wrapClassName: PropTypes.string,
    maskTransitionName: PropTypes.string,
    transitionName: PropTypes.string,
    className: PropTypes.string,
  },

  getDefaultProps() {
    return {
      prefixCls: 'mx-modal',
      transitionName: 'zoom',
      maskTransitionName: 'fade',
      visible: false,
      maskClosable: true,
    };
  },

  componentDidMount() {
    if (mousePositionEventBinded) {
      return;
    }
    // 只有点击事件支持从鼠标位置动画展开
    addEventListener(document.documentElement, 'click', (e) => {
      mousePosition = {
        x: e.pageX,
        y: e.pageY,
      };
      // 100ms 内发生过点击事件，则从点击位置动画展示
      // 否则直接 zoom 展示
      // 这样可以兼容非点击方式展开
      setTimeout(() => mousePosition = null, 100);
    });
    mousePositionEventBinded = true;
  },

  render() {
    let { visible } = this.props;

    return (
      <Wrapper
        onClose={this.handleCancel}
        {...this.props}
        visible={visible}
        mousePosition={mousePosition}
      />
    );
  }
});

export default MaskLayer;

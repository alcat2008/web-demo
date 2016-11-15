/* eslint-disable */

import React from 'react';

import provinceData from './province';
import { ListView, List, SearchBar } from 'antd-mobile';

const { Item } = List;

const Demo = React.createClass({
  getInitialState() {
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.createDs = (ds, province, display) => {
      const dataBlob = {};
      const sectionIDs = [];
      const rowIDs = [];
      Object.keys(province).forEach((item, index) => {
        sectionIDs.push(item);
        dataBlob[item] = item;
        rowIDs[index] = [];

        province[item].forEach(jj => {
          rowIDs[index].push(jj.value);
          dataBlob[jj.value] = {
            label: jj.label,
            display,
          };
        });
      });
      // this._dataBlob = dataBlob;
      // this._sectionIDs = sectionIDs;
      // this._rowIDs = rowIDs;
      this._data = province;
      return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
    };

    return {
      inputValue: '',
      dataSource: this.createDs(dataSource, provinceData, this.props.display),
      headerPressCount: 0,
    };
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.display !== this.props.display) {
      const pd = { ...this._data };
      this.setState({
        dataSource: this.createDs(this.state.dataSource, pd, nextProps.display),
      });
    }
  },

  _renderRow(rowData) {
    return (
      <Item>{rowData.display + ' ' + rowData.label}</Item>
    );
  },

  onSearch(val) {
    const pd = { ...provinceData };
    Object.keys(pd).forEach((item) => {
      pd[item] = pd[item].filter(jj => jj.spell.toLocaleLowerCase().indexOf(val) > -1);
    });
    this.setState({
      inputValue: val,
      dataSource: this.createDs(this.state.dataSource, pd, this.props.display),
    });
  },

  render() {
    console.log('display: ', this.props.display);
    return (<div style={{ paddingTop: 44 * (window.viewportScale || 1) }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <SearchBar
          value={this.state.inputValue}
          placeholder="搜索"
          onChange={this.onSearch}
          onClear={() => { console.log('onClear'); }}
          onCancel={() => { console.log('onCancel'); }}
        />
      </div>
      <ListView.IndexedList
        dataSource={this.state.dataSource}
        renderHeader={() => <span>头部内容请自定义</span>}
        renderFooter={() => <span>尾部内容请自定义</span>}
        renderSectionHeader={(sectionData) => (<div>{sectionData}</div>)}
        renderRow={this._renderRow}
        className="fortest"
        stickyHeader
        stickyProps={{
          stickyStyle: { zIndex: 999 },
        }}
        quickSearchBarStyle={{
          top: 85,
        }}
        delayTime={10}
        delayActivityIndicator={<div style={{ padding: 25, textAlign: 'center' }}>渲染中...</div>}
      />
    </div>);
  },
});

export default Demo;

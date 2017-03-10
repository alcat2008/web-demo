import React from "react";
import Sortable from 'sortablejs';

const dataArray = [
  {
    icon: 'question-circle-o',
    color: '#FF5500',
    title: 'Senior Product Designer',
    text: 'Senior Product Designer',
  },
  {
    icon: 'plus-circle-o',
    color: '#5FC296',
    title: 'Senior Animator',
    text: 'Senior Animator',
  },
  {
    icon: 'check-circle-o',
    color: '#2DB7F5',
    title: 'Visual Designer',
    text: 'Visual Designer',
  },
  {
    icon: 'cross-circle-o',
    color: '#FFAA00',
    title: 'Computer Engineer',
    text: 'Computer Engineer',
  },
];

export default class SortableExampleEsnext extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'list-sort-demo',
  };

  sortableGroupDecorator = (componentBackingInstance) => {
    // check if backing instance not null
    if (componentBackingInstance) {
      let options = {
        animation: 150,
        draggable: ".dragablediv", // Specifies which items inside the element should be sortable
        group: "shared"
      };
      Sortable.create(componentBackingInstance, options);
    }
  };

  render() {
    const childrenToRender = dataArray.map((item, i) => {
      const { title, text } = item;
      return (
        <div key={i} className="list-sort-demo-list dragablediv">
          <div className="list-sort-demo-icon">
          </div>
          <div className="list-sort-demo-text">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="wrapper">
        <div className="list-sort-demo">
          <div ref={this.sortableGroupDecorator}>
            {childrenToRender}
          </div>
        </div>
      </div>
    );
  }
}

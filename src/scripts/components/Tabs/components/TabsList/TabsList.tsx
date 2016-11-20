import * as React from 'react';
import { connect } from 'react-redux';
import { open } from '../TabsList';
import { fetch as fetchImages } from '../ImageList';
import ImageList from '../ImageList';

interface Props {
    list: any,
    activeTabKey: String,
    open: (key: String) => void
    fetch: (items: String) => void
}

const ACTIVE_TAB_STYLE = {
    backgroundColor: '#eee'
};

export class TabsList extends React.Component<Props, any> {
    static renderContent(list, activeTabKey) {
        switch (activeTabKey) {
            case 'images':
                return <ImageList/>;
            case 'amenities':
                return <div>amenities</div>;
            case 'description':
                return list[activeTabKey].content;
            default:
                return <div>oops</div>
        }
    }

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(key) {
        this.props.open(key);

    }

    render() {
        const {list, activeTabKey} = this.props;
        const items = [];
        for (const item in list) {
            items.push(
                <li style={item === activeTabKey ? ACTIVE_TAB_STYLE : null}
                    onClick={() => this.onClick(list[item].key)}
                    key={item}
                >{list[item].name}</li>
            );
        }
        return (
            <div>
                <ul>
                    {items}
                </ul>
                <div>
                    {TabsList.renderContent(list, activeTabKey)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.tabs.list,
        activeTabKey: state.tabs.activeTabKey
    };
};

const mapDispatch = dispatch => ({
    open: (key) => dispatch(open(key))
});

export default connect(mapStateToProps, mapDispatch)(TabsList);

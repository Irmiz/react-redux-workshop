import * as React from 'react';
import { connect } from 'react-redux';
import { open } from '../TabsList';
import { fetch as fetchImages } from '../ImageList';
import ImageList from '../ImageList';

interface Props {
    list: Array<any>,
    activeTabKey: String,
    open: (key: String) => void
    fetch: (items: String) => void
}

const ACTIVE_TAB_STYLE = {
    backgroundColor: '#eee'
};

export class TabsList extends React.Component<Props, any> {
    static renderContent(activeTabKey) {
        switch (activeTabKey) {
            case 'images':
                return <ImageList/>;
            case 'amenities':
                return <div>amenities</div>;
            case 'description':
                return <div>description</div>;
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
        return (
            <div>
                <ul>
                    {list.map((item, index) => (
                        <li
                            style={item.key === activeTabKey ? ACTIVE_TAB_STYLE : null}
                            onClick={() => this.onClick(item.key)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
                <div>
                    {TabsList.renderContent(activeTabKey)}
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

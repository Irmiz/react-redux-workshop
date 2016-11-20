import * as React from 'react';
import { connect } from 'react-redux';
import { open } from '../TabsList';

interface Props {
    list: Array<any>,
    activeTabKey: String,
    open: (key: String) => void
}

const ACTIVE_TAB_STYLE = {
    backgroundColor: '#eee'
};

export class ImageList extends React.Component<Props, any> {
    static renderContent(activeTabKey) {
        switch (activeTabKey) {
            case 'images':
                return <div>images</div>;
            case 'amenities':
                return <div>amenities</div>;
            case 'description':
                return <div>description</div>;
            default:
                return <div>oops</div>
        }
    }

    render() {
        const {list, activeTabKey, open} = this.props;
        return (
            <div>
                <ul>
                    {list.map((item, index) => (
                        <li
                            style={item.key === activeTabKey ? ACTIVE_TAB_STYLE : null}
                            onClick={function() {
                                open(item.key)
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
                <div>
                    {ImageList.renderContent(activeTabKey)}
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

export default connect(mapStateToProps, mapDispatch)(ImageList);

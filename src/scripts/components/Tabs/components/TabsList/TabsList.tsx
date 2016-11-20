import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
    list: Array<any>,
    activeTabKey: String
}

const ACTIVE_TAB_STYLE = {
    backgroundColor: '#eee'
};

export class ImageList extends React.Component<Props, any> {
    renderContent(activeTabKey) {
        switch (activeTabKey) {
            case 'images':
                return <div>images</div>
            case 'amenities':
                return <div>amenities</div>
            case 'description':
                return <div>description</div>
            default:
                return <div>oops</div>
        }
    }

    render() {
        const {list, activeTabKey} = this.props;
        return (
            <div>
                <ul>
                    {list.map((item, index) => (
                        <li
                            style={item.key === activeTabKey ? ACTIVE_TAB_STYLE : null}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
                <div>
                    {this.renderContent(activeTabKey)}
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

export default connect(mapStateToProps)(ImageList);

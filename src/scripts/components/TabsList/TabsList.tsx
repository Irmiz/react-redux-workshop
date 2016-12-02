import * as React from 'react';
import { connect } from 'react-redux';
import request = require('superagent');
import { open } from '../TabsList';
import { receiveImages } from '../ImageList';
import { receiveAmenities } from '../AmenityList';
import ImageList from '../ImageList';
import AmenityList from '../AmenityList';

interface Props {
    list: any;
    activeTabKey: String;
    open: (key: String) => void;
    receiveImages: (data: Array<any>) => void;
    receiveAmenities: (data: Array<any>) => void;
}

const ACTIVE_TAB_STYLE = {
    backgroundColor: '#eee',
    display: 'inline',
    padding: '20px'
};

const TAB_STYLE = {
    display: 'inline',
    padding: '20px'
};

const TAB_CONTAINER_STYLE = {
    paddingLeft: '20px'
};

const DYNAMIC_CONTENT = {
    IMAGES: 'images',
    AMENITIES: 'amenities'
};

const CONTENT_STYLE = {
    padding: '20px'
};

function renderContent(list, activeTabKey): React.Component {
    switch (activeTabKey) {
        case DYNAMIC_CONTENT.IMAGES:
            return <ImageList/>;
        case DYNAMIC_CONTENT.AMENITIES:
            return <AmenityList/>;
        case 'description':
            return (
                <div style={CONTENT_STYLE}>
                    {list[activeTabKey].content}
                </div>
            );
        default:
            return <div>oops</div>;
    }
}

export class TabsList extends React.Component<Props, any> {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(item, key) {
        this.props.open(key);

        if (!item.content) {
            request
                .get(`http://localhost:3000/${key}`)
                .set('Accept', 'application/json')
                .end((err, res) => {
                    if (!err && res.body) {
                        if (key === 'images') {
                            this.props.receiveImages(res.body);
                        } else if (key === 'amenities') {
                            this.props.receiveAmenities(res.body);
                        }
                    }
                });
        }

    }

    render() {
        const {list, activeTabKey} = this.props;
        const items = [];
        for (const item in list) {
            items.push(
                <li style={item === activeTabKey ? ACTIVE_TAB_STYLE : TAB_STYLE}
                    onClick={() => this.onClick(list[item], item)}
                    key={item}
                >{list[item].name}</li>
            );
        }
        return (
            <div>
                <ul style={TAB_CONTAINER_STYLE}>
                    {items}
                </ul>
                <div>
                    {renderContent(list, activeTabKey)}
                </div>
            </div>
        );
    }
}

export default connect(
    (state, ownprops) => ({
        list: state.tabs.list,
        activeTabKey: state.tabs.activeTabKey
    }),
    (dispatch) => ({
        open: (key) => dispatch(open(key)),
        receiveImages: (data) => dispatch(receiveImages(data)),
        receiveAmenities: (data) => dispatch(receiveAmenities(data))
    })
)(TabsList);

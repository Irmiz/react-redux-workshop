import * as React from 'react';
import { connect } from 'react-redux';
import request = require('superagent');
import { open } from '../TabsList';
import { receiveImages } from '../ImageList';
import { receiveAmenities } from '../AmenityList';
import ImageList from '../ImageList';
import AmenityList from '../AmenityList';

interface Props {
    list: any,
    activeTabKey: String,
    open: (key: String) => void
    receiveImages: (data: Array<any>) => void
    receiveAmenities: (data: Array<any>) => void
}

const ACTIVE_TAB_STYLE = {
    backgroundColor: '#eee'
};

const DYNAMIC_CONTENT = {
    IMAGES: 'images',
    AMENITIES: 'amenities'
};

export class TabsList extends React.Component<Props, any> {
    static renderContent(list, activeTabKey) {
        switch (activeTabKey) {
            case DYNAMIC_CONTENT.IMAGES:
                return <ImageList/>;
            case DYNAMIC_CONTENT.AMENITIES:
                return <AmenityList/>;
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
                <li style={item === activeTabKey ? ACTIVE_TAB_STYLE : null}
                    onClick={() => this.onClick(list[item], item)}
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
    open: (key) => dispatch(open(key)),
    receiveImages: (data) => dispatch(receiveImages(data)),
    receiveAmenities: (data) => dispatch(receiveAmenities(data))
});

export default connect(mapStateToProps, mapDispatch)(TabsList);

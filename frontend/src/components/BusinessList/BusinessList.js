import React from 'react';
import './BusinessList.css';
import { Business } from "../Business/Business";

export class BusinessList extends React.Component {
    render() {
        let list;
        if (this.props.businesses.length > 0) {
            list = this.props.businesses.map(
                business => {
                    return <Business business={business} key={business.id}/>;
                })
        } else {
            list = <h2>Refine your search :)</h2>
        }
        return (
            <div className="BusinessList">
                {list}
            </div>
        )
    }
}

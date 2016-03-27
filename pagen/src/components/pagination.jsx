"use strict";

import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import pagen from "pagination-generator";

export default class Pagination extends Component {
    render() {
        const {
            current = 1,
            total,
            limit = 9,
            filter,
            handleClick,
        } = this.props;

        let data = pagen(current, total, limit);

        if (filter) {
            data = filter(data);
        }
        data = data.map((item, idx) => {
            return <a key={idx} onClick={handleClick} className={
                classnames({
                    disabled: !!item.disabled,
                    current: !!item.current,
                    nav: item.type === "nav",
                    num: item.type === "num",
                })
            } href={item.value} data-value={item.value}>{item.name == "prev" ? "previous" : item.name}</a>;
        });

        return (
            <div className="pagination">{data}</div>
        );
    }
}
Pagination.propTypes = {
    current: PropTypes.number,
    total: PropTypes.number.isRequired,
    limit: PropTypes.number,
    filter: PropTypes.func,
    handleClick: PropTypes.func.isRequired,
};

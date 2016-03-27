"use strict";

import React, { Component } from "react";

import Pagination from "./components/pagination";

export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            p0: {
                current: 1,
                total: 8,
                limit: 9,
            },
            p1: {
                current: 1,
            },
            p2: {
                current: 2,
            },
            p3: {
                current: 1,
            },
        };
    }
    filter3(data) {
        return data.filter(item => item.name !== "first" && item.name !== "last");
    }
    handleClick(key, evt) {
        evt.preventDefault();
        let target = evt.target;
        if (target.classList.contains("disabled")) {
            return;
        }
        let value = +target.dataset.value;
        let oldState = this.state[key];
        this.setState({
            [key]: Object.assign({}, oldState, {
                current: value,
            }),
        });
    }
    handleChange(key, prop, evt) {
        let value = +evt.target.value;
        let oldState = this.state[key];
        this.setState({
            [key]: Object.assign({}, oldState, {
                [prop]: value,
            }),
        });
    }
    render() {
        return (
            <div>
                <div className="pd0">
                    <div className="custom">
                        <label htmlFor="p0-current">
                            Current:
                            <input id="p0-current" type="number" value={this.state.p0.current} onChange={this.handleChange.bind(this, "p0", "current")} />
                        </label>
                        <label htmlFor="p0-total">
                            Total:
                            <input id="p0-total" type="number" value={this.state.p0.total} onChange={this.handleChange.bind(this, "p0", "total")} />
                        </label>
                        <label htmlFor="p0-limit">
                            Limit:
                            <input id="p0-limit" type="number" value={this.state.p0.limit} onChange={this.handleChange.bind(this, "p0", "limit")} />
                        </label>
                    </div>
                    <div>
                        <Pagination current={this.state.p0.current} total={this.state.p0.total} limit={this.state.p0.limit} handleClick={this.handleClick.bind(this, "p0")} />
                    </div>
                </div>
                <div className="pd1">
                    <Pagination current={this.state.p1.current} total={100} limit={9} handleClick={this.handleClick.bind(this, "p1")} />
                </div>
                <div className="pd2">
                    <Pagination current={this.state.p2.current} total={4} limit={9} handleClick={this.handleClick.bind(this, "p2")} />
                </div>
                <div className="pd3">
                    <Pagination current={this.state.p3.current} total={20} limit={7} filter={this.filter3} handleClick={this.handleClick.bind(this, "p3")} />
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';

import { Panel } from '../UI/Panel';

export default class HistoryPanel extends Component {
    _togglePanelClass() {
        let rowClass = 'tr.contact-row-' + this.props.contact.id;

        document.querySelector(rowClass).classList.toggle('contact-history-panel-open');
    }

    render() {
        return (
            <div className="content-side-wrapper">
                <div className="contact-history-overlay side-overlay" onClick={this._togglePanelClass.bind(this)} />
                <div className="contact-history-side side-panel">
                    <Panel>
                        <div className="panel-user">
                            <div className="panel-user-content">
                                {this.props.contact.firstName ? <div className="panel-user-name">{this.props.contact.firstName} {this.props.contact.lastName}</div> : ''}

                                {this.props.contact.company ? <div className="panel-user-subtitle">{this.props.contact.company.name}</div> : ''}

                                <div className="panel-user-action" onClick={this._togglePanelClass.bind(this)}>
                                    <i className="md-icon">close</i>
                                </div>
                            </div>
                        </div>

                        User History

                    </Panel>
                </div>
            </div>
        );
    }
}

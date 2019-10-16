import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from "classnames";
import NextButton from "../common/NextButton";
import './style.scss';
import some from './style.scss';

const whatWeDoBlock  =  (icon, title, content) => {
    icon = icon || 'settings';
    title = title || 'Card Title';
    content = content || 'I am a very simple card. I am good at containing small bits of information.';
    return (
        <div className="row">
            <div className="col s12">
                <div className="card table-color">
                    <div className="card-content white-text">
                        <span className="card-title amber-text">
                            <i className={'material-icons'}>{icon}</i>
                            {title}
                        </span>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
class SecWhatWeDo extends Component {
    render() {
        console.log("IMPORT: ",some);
        const { title, nextid } = this.props;
        return (
            <section className={classNames('container', 'table-schema')}>

                <div className="table">
                    <div>
                        <div className="table-width-40">
                            { whatWeDoBlock('settings','Full application development circle','') }
                        </div>
                        <div className="table-width-60">
                            <div className="table">
                                <div>{whatWeDoBlock('settings','Web Applications','')}</div>
                                <div>{whatWeDoBlock('settings','Plugins and Extensions','')}</div>
                                <div>{whatWeDoBlock('settings','Support','')}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table">
                    <div>
                        <div>{whatWeDoBlock('settings','Prototype','')}</div>
                        <div>{whatWeDoBlock('settings','UI Design','')}</div>
                        <div>{whatWeDoBlock('settings','Frontend','')}</div>
                        <div>{whatWeDoBlock('settings','Backend','')}</div>
                    </div>
                </div>
                <NextButton goto={nextid} />
            </section>
        );
    }
}

export default hot(module)(SecWhatWeDo);


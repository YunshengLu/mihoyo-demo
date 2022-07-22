import React from 'react';
import { Tab } from './style';
import classnames from 'classnames';

export default function Header({change, affirm}) {
    return (
        <Tab>
            <div className="left">
                <a href="#">
                    <i className="iconfont icon-fanhui"></i>
                </a>
            </div>
            <div className="content">首页频道选择</div>
            <div className="right" onClick={() => affirm()}>
                <a href="#" className={classnames("noChange",{changeItem: change})}>
                    确定
                </a>
            </div>
        </Tab>
    );
}

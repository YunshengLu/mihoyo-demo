import React from 'react';
import { Tab } from './style';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

interface HeaderProps {
    change: boolean;
    affirm: () => void;
}

const Header: React.FC<HeaderProps> = props => {

    const { change, affirm } = props;
    
    return (
        <Tab>
            <div className="left">
                <Link to="/home">
                    <i className="iconfont icon-fanhui"></i>
                </Link>
            </div>
            <div className="content">首页频道选择</div>
            <div className="right" onClick={() => affirm()}>
                <Link to="/" className={classnames('noChange', { changeItem: change })}>
                    确定
                </Link>
            </div>
        </Tab>
    );
};

export default Header;

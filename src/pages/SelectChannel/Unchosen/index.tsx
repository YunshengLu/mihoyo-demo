import React, { memo } from 'react';
import { UnchosenWrapper, TabWrapper,Tab,TabItem } from './style'

interface UnchosenProps{
    data: any[],
    choose: (item:any) => void;
}

const Unchosen: React.FC<UnchosenProps> = (props) => {

    const { data, choose } = props

    // console.log('unChosen',data);
    

    return (
        <UnchosenWrapper>
            {
                data.length > 0 &&
                <>
                    <TabWrapper>
                        <header>
                            <div className='left'>
                                推荐频道
                            </div>
                        </header>
                    </TabWrapper>
                    <Tab>
                        {
                            data.map((item) =>
                                item.check == false &&
                                <TabItem key={item.id}>
                                    <img src={item.app_icon} alt="" />
                                    <span>{item.name}</span>
                                    <i className="iconfont icon-tianjia"
                                    onClick={() => choose(item)}
                                    ></i>
                                </TabItem>
                            )
                        }
                    </Tab>
                </>
            }
        </UnchosenWrapper>
    );
}

export default memo(Unchosen)

# **本页面数据仅为学习所用**
## api(无需认证):  
### 分区列表：  
 - https://bbs-api.mihoyo.com/apihub/api/getGameList  
 - 请求方法:GET

### 分区信息：
 - https://bbs-api.mihoyo.com/apihub/api/home/new?gids=2
 - 请求方法:GET
 - gids：游戏分区id 从分区列表获取

### 推荐文章：
 - https://bbs-api-static.mihoyo.com/apihub/wapi/webHome?gids=2&page=1&page_size=20
 - https://bbs-api.mihoyo.com/post/api/feeds/posts?fresh_action=1&gids=2&last_id=
 - 请求方法:GET
 - 参数：
     - gids：游戏分区id 从分区列表获取
     - page: 推荐文章页
     - page_size: 一页的文章数
     - fresh_action: 暂时未知，改变后推荐文章从第三个开始了？？？？
     - last_id: 未知          
    
### 文章互动数据：            
 - https://bbs-api.mihoyo.com/post/wapi/getDynamicData?gids=2&post_ids=${post_ids[].join()}               
 - 请求方法:GET
 - 参数：            
     - gids：游戏分区id 从分区列表获取          
     - post_ids： 由推荐文章post中的post_id 获取，为一串字符串            
         - 例如： https://bbs-api.mihoyo.com/post/wapi/getDynamicData?gids=2&post_ids=25828757,25660962,25638945,25701672,25648896,25475938,25475944,25592954,25592186,25811911,25826305,25727088,25829927,25719649,25707382,25753109,25775332,25715295,25815479,25804354

### 搜索结果(模糊查询)：
 - https://bbs-api.mihoyo.com/apihub/wapi/search?keyword=${keyword}
 - 请求方法:GET
 - 参数：
     - keyword: 输入框输入的关键词

## https://bbs-api.mihoyo.com/apihub/api/home/new?gids=2 数据分析：

- navigate （活动栏app）            
    - id: app ID，唯一标识
    - name: app名称
    - icon: 图标
    - app_path: 活动app页面地址 
    - reddot_online_time: 图标右上角醒目圆点开始标记时间，UNIX 时间戳格式

- discussion （讨论区数据）
    - icon: 讨论区图
    - title: 讨论区名
    - prompt: 提示语，讨论区标签集

- background （背景）
    - image: 背景图链接
    - color: 颜色？？？暂时不知是什么部分的

- official （官方资讯）
    - position: 在首页推荐布局中的位置，为1在顶部，逐级下降
    - forum_id: 所属论坛ID？？？唯一标识
    - data（资讯数据）
        - post_id: 资讯ID 唯一标识
        - title: 资讯标题
        - date: 资讯创建时间 UNIX 时间戳格式
        - label: 资讯类型[活动|资讯]
        - is_top: 是否置顶

- carousels（首页轮播图）
    - position: 同上
    - data（轮播图数据）
        - cover: 图片链接
        - app_path: 所指地址，暂时访问不到

- 其他数据暂时用不到

## https://bbs-api-static.mihoyo.com/apihub/wapi/webHome?gids=2&page=1&page_size=20 数据分析：           
- game_id：游戏 ID，2 代表原神
- post_id：文章 ID，唯一标识
- f_forum_id：论坛 ID，唯一标识
- uid：用户 ID，唯一标识
- subject：标题
- content：简介
- cover：题头图链接
- view_type：题头图显示类型，沾满宽为1，方正为2
- created_at：创建时间，UNIX 时间戳格式
- images：图片链接

- post_status：文章状态：
    - is_top：是否被置顶
    - is_good：是否被加精
    - is_official：是否为官方文章

- topic_ids：所属的话题 ID
- view_status：文章可见性状态？？？暂时获取的恒为1
- max_floor：评论层数
- is_original：是否原创
- republish_authorization：转载授权？？？
- reply_time：最后一次评论时间
- is_deleted：是否被删除
- is_interactive：是否允许互动
- score：评分？？？暂时获取的恒为0

- forum（论坛数据）
    - id：论坛ID
    - name：论坛所属

- topics（话题数据）
    - id：话题 ID，唯一标识
    - name：话题名称
    - cover：话题题头图
    - content_type：话题类型

- user（用户数据）
    - uid：用户ID
    - nickname：用户昵称
    - introduce：个人简介
    - avatar：用户头像（米游社的头像有限制只能从其给出的选项中选择）
    - gender：性别
    - certification：认证称号
        - type：认证称号种类
        - label：认证称号名称
    - level_exp：等级与经验
        - level：等级
        - exp：经验
    - avatar_url：头像链接
    - pendant：头像挂件链接

- stat（互动数据）
这几项数据在这个api返回的全为 0，需要使用互动数据接口补全数据
    - reply_num：评论量
    - view_num：阅读量
    - like_num：点赞量
    - bookmark_num：收藏量
- cover （题头图数据）： 暂时获取的恒为null？？？

- image_list（图片数据）
    - url：题头图链接
    - height：图片高度
    - width： 图片宽度
    - format：图片格式
    - size：图片大小（字节）
    - crop：裁剪数据
    - is_user_set_cover：是否由用户设置题头图
    - image_id：图片 ID，唯一标识
    - entity_type：实体类型，含义未知
    - entity_id：实体 ID，含义未知

- is_official_master：是否为官方管理员
- is_user_master：是否为非官方管理员

- help_sys：？？？
    - top_up：？？？

- vote_count：票数，？？？ 暂时获取的都为0
- last_modify_time：应该是最后一次更新时间，但是不知为啥这里恒为0
- recommend_type：推荐类型，也不知道为啥恒为空
- collection：专题数据
- vod_list: ???,暂时获取的都为空
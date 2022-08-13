interface HotTopicItem {
    image: string,
    topic_id: number,
    topic_name: string,
    post_name: string,
    count: {
        view: number,
        discuss: number,
    },
}
interface HotTopicsIn{
    position: number,
    data:HotTopicItem[]
}

export type {
    HotTopicsIn
}
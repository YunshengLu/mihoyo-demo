interface CarouselsItem{
    cover: string,
    app_path: string,
}

interface CarouselsIn{
    position: number,
    data: CarouselsItem[]
}

export type {
    CarouselsIn
}
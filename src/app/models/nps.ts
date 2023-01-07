export interface NpsResults {
    created: string
}

export interface Nps {
    promotersUsers: number
    detractorsUsers: number
    neutralUsers: number
    total: number
    npsResults: NpsResults[]
}
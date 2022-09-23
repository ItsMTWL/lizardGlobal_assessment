type Entry = {
    id: string,
    title: string,
    publishDate: string,
    author: Author,
    summary: string
    categories: Array<Category>
}

type Author = {
    name: string,
    avatar: string
}

type Category = {
    id: string,
    name: string
}

export type { Entry, Category };
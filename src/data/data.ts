export interface IData {
    id: number;
    name: string;
    isFolder: boolean;
    items: IData[];
}

export const Data: IData= {
        id: 1,
        name: 'root',
        isFolder: true,
        items: [
            {
                id: 2,
                name: 'public',
                isFolder: true,
                items: [
                    {
                        id: 5,
                        name: 'favicon.svg',
                        isFolder: false,
                        items: []
                    }
                ]
            },
            {
                id: 3,
                name: 'src',
                isFolder: true,
                items: [
                    {
                        id: 6,
                        name: 'App.css',
                        isFolder: false,
                        items: []
                    },
                    {
                        id: 7,
                        name: 'App.tsx',
                        isFolder: false,
                        items: []
                    },
                    {
                        id: 8,
                        name: 'assets',
                        isFolder: true,
                        items: []
                    }
                ]
            },
            {
                id: 4,
                name: 'index.html',
                isFolder: false,
                items: []
            }

        ]
    }
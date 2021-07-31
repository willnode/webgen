
export interface AppElement {
    attributes: {
        [prop: string]: string[] | string
    };
    properties: {
        [prop: string]: string
    };
    children: AppElement[]
    component?: string
    // generated
    id: string
    parent?: string
}

export interface AppComponent {
    attributes?: {
        [prop: string]: string
    }
    defaults?: {
        [prop: string]: any
    }
    variants?: {
        [prop: string]: AppVariant
    }
    // generated
    name: string
}

export interface AppVariant {
    type: "options" | "text" | "textarea"
    target: string
    default?: string[] | string
    values?: string[]
    formats?: string[]
    // generated
    name: string,
    formatExpands?: string[][]
    multiple?: boolean
}

export interface AppAdapter {
    head: AppElement,
    body: AppElement,
    flavors: {
        [prop: string]: AppVariant
    },
    components: {
        [prop: string]: AppComponent
    }
}

export interface AppWorkspace {
    adapter: AppAdapter
    body: AppElement
    indexes: {
        [id: string]: AppElement
    }
}
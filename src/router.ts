class Router {
    private routes = new Map<string, (() => void) | string>();
    private templates = new Map<string, (() => void)>();

    constructor() {
        this.retrieveRoute = this.retrieveRoute.bind(this);
    }

    public route(path: string, template: (() => void) | string): (() => void) | string | null {
        if (typeof template === 'function') {
            this.routes.set(path, template)
            return this.routes.get(path)!;
        }
        else if (typeof template === 'string') {
            this.routes.set(path, this.templates.get(template)!);
            return this.routes.get(path)!;
        } else {
            return null;
        };
    };

    public template(name: string, templateFunction: () => void): () => void {
        this.templates.set(name, templateFunction)
        return templateFunction;
    };

    public resolveRoute(route: string) {
        try {
            return this.routes.get(route);
        } catch (e) {
            throw new Error(`Route ${route} not found`);
        };
    };

    public retrieveRoute(evt: Event) {
        let url = window.location.hash.slice(1) || '/';
        let route = this.resolveRoute(url);

        if (typeof route === 'function') {
            route();
        }
    };

}

export {Router}
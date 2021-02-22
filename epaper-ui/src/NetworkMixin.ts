
declare type Constructor<T> = {
    new (...args: any[]): T
  }
  
export function NetworkMixin<B extends Constructor<HTMLElement>>(baseClass: B) {
    return class extends baseClass {
        // eslint-disable-next-line class-methods-use-this
        async httpJson<T>(request: RequestInfo): Promise<T> {
            const response = await fetch(request);
            const body = await response.json();
            return body;
        }

        // eslint-disable-next-line class-methods-use-this
        async httpText<T>(request: RequestInfo): Promise<String> {
            const response = await fetch(request);
            const body = await response.text();
            return body;
        }
    }
} 
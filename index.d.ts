declare module '@apiverve/streetaddressparser' {
  export interface streetaddressparserOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface streetaddressparserResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class streetaddressparserWrapper {
    constructor(options: streetaddressparserOptions);

    execute(callback: (error: any, data: streetaddressparserResponse | null) => void): Promise<streetaddressparserResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: streetaddressparserResponse | null) => void): Promise<streetaddressparserResponse>;
    execute(query?: Record<string, any>): Promise<streetaddressparserResponse>;
  }
}

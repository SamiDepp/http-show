export class Post {
  _id: number;
  _title = '';
  _body = '';
  constructor(id: number, title: string, body: string) {
    const idNanN = id || 0 ;
    const titleNaN = title || '';
    const bodyNaN = body || '';
    this._title = titleNaN.length > 10 ? titleNaN.substring(0, 9) : titleNaN;
    this._body = bodyNaN.length > 20 ? bodyNaN.substring(0, 19) : bodyNaN;
    this._id = idNanN;
  }
  get title(): string {
    return this._title;
  }
  get body(): string {
    return this._body;
  }
  get id(): number {
  return this._id;
  }
}

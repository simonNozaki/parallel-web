/**
 * 共通レスポンスエラーコードDTOです.
 */
export class Errors {

  /** 
   * タスクタイトル
   */
  public id: string;
  
  /** 
   * エラーコードリスト
   */
  public codes: string[];

  public getCodes(): string[] {
    return this.codes;
  }
  public setCodes(codes: string[]) {
    this.codes = codes;
  }
  public getId(): string {
    return this.id;
  }
  public setId(id: string) {
    this.id = id;
  }
}

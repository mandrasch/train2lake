// thx to https://www.swyx.io/jsdoc-swyxkit
// TODO: improve type safety
export class paginationData {
    page:number;
    nextPage: number | string;
    prevPage: number | string;
    totalPages: number | string;
    from: number | string;
    to: number | string;
  }
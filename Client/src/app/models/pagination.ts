export class Pagination {
    public ItemsPerPage: number;
    public Page: number;
    public Reverse: boolean;
    public SortBy: string;
    public FulltextSearchText: string;
    public ParamItemsList: SearchParam[];
    public IsAnd: boolean;
    public TotalItems: number;
    public SumColumns: any;
}

export class SearchParam {
    public Key: string;
    public Value: string;
    public IsEquals: boolean;
    public IsNumber: boolean;
    public Special: string;
    public ForceOrBefore: boolean;
    public CloseOrBefore: boolean;
    public ForceAndBefore: boolean;
    public IsDateTime: boolean;
    public IsNullable: boolean;
}
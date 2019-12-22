export interface AdjIterator {
    index: number;
    begin(): number;
    next(): number;
    end(): boolean;
}

import { Entry } from "./dbTypes";

type CheckboxProps = {
    handleFilters: any;
    catList: Array<Entry>;
    filter: Array<string>;
}

type CardListProps = {
    list: Array<Entry>
}



export type { CheckboxProps, CardListProps } 
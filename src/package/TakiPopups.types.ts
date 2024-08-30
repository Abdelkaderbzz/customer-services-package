export type ListType = string | number;
export interface ITakiPopupsProps {
  memberId?: string | number;
  name?: string;
  meta_data?: {
    [key: string]: string | boolean | number | Date | Array<ListType>;
  };
}

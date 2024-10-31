export type ListType = string | number;
export interface ITakiPopupsProps {
  memberId?: string | number;
  name?: string;
  appId: string;
  guest_mode?: boolean;
  meta_data?: {
    [key: string]: string | boolean | number | Date | Array<ListType>;
  };
}

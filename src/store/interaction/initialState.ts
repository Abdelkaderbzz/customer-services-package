export interface IPostBannerReactPayload {
  payload: {
    name: string;
    code: string;
    participatorId: string;
  };
  bannerId: string;
}
export interface IPostPopupReactPayload {
  payload: {
    name: string;
    code: string;
    participatorId: string;
  };
  popupId: string;
}
export interface IPostPopupCommentPayload {
  payload: {
    name: string;
    body: string;
    participatorId: string;
  };
  popupId: string;
}

export interface State {
  isLoading: boolean;
}

export const initialState: State = {
  isLoading: false,
};

import { current } from "@reduxjs/toolkit";

export const bannerServicePreview = {
  fontFamily: 'Poppins',
    boxSizing: 'border-box',
  position: 'fixed',
  left: '0',
  textAlign: 'center',
  padding: '30px',
  fontSize: '18px',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '15px',
  height: '56px',
};

export const bannerServicePreviewItems = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '15px',
};

export const bannerServicePreviewContent = {
  display: 'block',
  height: '100%',
  minWidth: '200px',
  backgroundColor: 'transparent',
  color: '#fff',
  fontFamily: 'Cairo',
  fontWeight: 300,
  wordBreak: 'break-all',
};

export const reactionsList = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
  cursor: 'pointer',
  gap: '9px',
};

export const reactionsListSpan = {
  fontSize: '20px',
};

export const urlAction = {
  display: 'block',
  textDecoration: 'underline',
  letterSpacing: '0.36px',
  fontWeight: 600,
  color: '#fff',
  height: '100%',
  cursor: 'pointer',
};

export const bannerServicePreviewSvg = {
  filter: 'invert(1)',
  fontSize: '18px',
  cursor: 'pointer',
};
export const imageUserStyle = {
  height: '38px',
  width: '38px',
  borderRadius: '50%',
  objectFit: 'cover',
};

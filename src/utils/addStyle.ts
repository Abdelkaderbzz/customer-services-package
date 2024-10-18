export function addBodyStyles(position: string)
{
  if (position === 'top')
  {
    document.body.style.marginTop = '60px';
  } else
  {
    document.body.style.marginBottom = '60px';
  }
  document.body.style.transition = 'margin 250ms';
  document.body.style.maxHeight = 'calc(100% - 60px)';
}

export function removeBodyStyles()
{
  document.body.style.transition = '';
  document.body.style.marginTop = '';
  document.body.style.marginBottom = '';
  document.body.style.maxHeight = '';
}

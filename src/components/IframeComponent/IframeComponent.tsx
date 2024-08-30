import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './iframeComponent.css';

const IframeComponent = ({ children }: any) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [contentRef, setContentRef] = useState<Document | null>(null);

  useEffect(() => {
    const iframeDoc = iframeRef.current?.contentDocument;
    if (iframeDoc) {
      setContentRef(iframeDoc);
      const fontLink = iframeDoc.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href =
        'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Tajawal:wght@400;700&family=Cairo:wght@400;600&display=swap';
      iframeDoc.head.appendChild(fontLink);
    }
  }, []);

  return (
    <iframe
      className='popups-service_jkl32j'
      ref={iframeRef}
      title='Inline Frame Example'
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: 1000,
        background: 'transparent',
        border: 'none',
        pointerEvents: 'none', 
      }}
    >
      {contentRef && ReactDOM.createPortal(children, contentRef.body)}
    </iframe>
  );
};

export default IframeComponent;

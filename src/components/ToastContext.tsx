import React, { createContext, useContext, useState, useCallback } from 'react';
import { Info, X } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

interface ToastContextType {
  triggerPreviewToast: (customContext?: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  triggerPreviewToast: () => {},
});

export const usePreviewToast = () => useContext(ToastContext);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [contextNote, setContextNote] = useState<string | undefined>(undefined);

  const triggerPreviewToast = useCallback((customContext?: string) => {
    setContextNote(customContext);
    setVisible(true);
  }, []);

  return (
    <ToastContext.Provider value={{ triggerPreviewToast }}>
      {children}
      {visible && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 max-w-md bg-[#0E1A33] text-[#FBF7F0] border-2 border-[#C9A45C] rounded-2xl p-5 shadow-2xl flex items-start gap-3.5"
        >
          <Info className="w-5 h-5 text-[#F7630D] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm leading-relaxed">
            {contextNote && (
              <p className="font-semibold text-[#C9A45C] mb-1">{contextNote}</p>
            )}
            <p className="text-[#FBF7F0]/95">{SITE_CONTENT.previewToastMessage}</p>
          </div>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Dismiss preview notice"
            className="text-[#FBF7F0]/75 hover:text-[#FBF7F0] p-1.5 rounded-lg shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </ToastContext.Provider>
  );
};
